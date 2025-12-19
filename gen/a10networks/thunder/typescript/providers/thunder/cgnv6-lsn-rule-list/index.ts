// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnRuleListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable match domain name in http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#http_match_domain_name Cgnv6LsnRuleList#http_match_domain_name}
  */
  readonly httpMatchDomainName?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#id Cgnv6LsnRuleList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LSN Rule-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#name Cgnv6LsnRuleList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#user_tag Cgnv6LsnRuleList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#default Cgnv6LsnRuleList#default}
  */
  readonly default?: Cgnv6LsnRuleListDefault;
  /**
  * domain_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain_ip Cgnv6LsnRuleList#domain_ip}
  */
  readonly domainIp?: Cgnv6LsnRuleListDomainIp;
  /**
  * domain_list_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain_list_name_list Cgnv6LsnRuleList#domain_list_name_list}
  */
  readonly domainListNameList?: Cgnv6LsnRuleListDomainListNameListStruct[] | cdktf.IResolvable;
  /**
  * domain_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain_name_list Cgnv6LsnRuleList#domain_name_list}
  */
  readonly domainNameList?: Cgnv6LsnRuleListDomainNameListStruct[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ip_list Cgnv6LsnRuleList#ip_list}
  */
  readonly ipList?: Cgnv6LsnRuleListIpListStruct[] | cdktf.IResolvable;
}
export interface Cgnv6LsnRuleListDefaultRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_match Cgnv6LsnRuleList#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListDefaultRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_match: cdktf.stringToTerraform(struct!.dscpMatch),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
  }
}


export function cgnv6LsnRuleListDefaultRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_match: {
      value: cdktf.stringToHclTerraform(struct!.dscpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDefaultRuleCfgDscpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMatch = this._dscpMatch;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultRuleCfgDscpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpMatch = undefined;
      this._dscpValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpMatch = value.dscpMatch;
      this._dscpValue = value.dscpValue;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }
}
export interface Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    shared: cdktf.numberToTerraform(struct!.shared),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._shared = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._shared = value.shared;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDefaultRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#http_alg Cgnv6LsnRuleList#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDefaultRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    http_alg: cdktf.stringToTerraform(struct!.httpAlg),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDefaultRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_alg: {
      value: cdktf.stringToHclTerraform(struct!.httpAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDefaultRuleCfgTcpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._httpAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAlg = this._httpAlg;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultRuleCfgTcpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._httpAlg = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._httpAlg = value.httpAlg;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // http_alg - computed: false, optional: true, required: false
  private _httpAlg?: string; 
  public get httpAlg() {
    return this.getStringAttribute('http_alg');
  }
  public set httpAlg(value: string) {
    this._httpAlg = value;
  }
  public resetHttpAlg() {
    this._httpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAlgInput() {
    return this._httpAlg;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDefaultRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDefaultRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDefaultRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDefaultRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDefaultRuleCfgUdpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultRuleCfgUdpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDefaultRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#proto Cgnv6LsnRuleList#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_cfg Cgnv6LsnRuleList#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListDefaultRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#icmp_others_cfg Cgnv6LsnRuleList#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#tcp_cfg Cgnv6LsnRuleList#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListDefaultRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#udp_cfg Cgnv6LsnRuleList#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListDefaultRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListDefaultRuleCfgToTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListDefaultRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListDefaultRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListDefaultRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListDefaultRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListDefaultRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_cfg: {
      value: cgnv6LsnRuleListDefaultRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListDefaultRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListDefaultRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDefaultRuleCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._dscpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpCfg = this._dscpCfg?.internalValue;
    }
    if (this._icmpOthersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOthersCfg = this._icmpOthersCfg?.internalValue;
    }
    if (this._tcpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCfg = this._tcpCfg?.internalValue;
    }
    if (this._udpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCfg = this._udpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultRuleCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proto = undefined;
      this._dscpCfg.internalValue = undefined;
      this._icmpOthersCfg.internalValue = undefined;
      this._tcpCfg.internalValue = undefined;
      this._udpCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proto = value.proto;
      this._dscpCfg.internalValue = value.dscpCfg;
      this._icmpOthersCfg.internalValue = value.icmpOthersCfg;
      this._tcpCfg.internalValue = value.tcpCfg;
      this._udpCfg.internalValue = value.udpCfg;
    }
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // dscp_cfg - computed: false, optional: true, required: false
  private _dscpCfg = new Cgnv6LsnRuleListDefaultRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListDefaultRuleCfgDscpCfg) {
    this._dscpCfg.internalValue = value;
  }
  public resetDscpCfg() {
    this._dscpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCfgInput() {
    return this._dscpCfg.internalValue;
  }

  // icmp_others_cfg - computed: false, optional: true, required: false
  private _icmpOthersCfg = new Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListDefaultRuleCfgIcmpOthersCfg) {
    this._icmpOthersCfg.internalValue = value;
  }
  public resetIcmpOthersCfg() {
    this._icmpOthersCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOthersCfgInput() {
    return this._icmpOthersCfg.internalValue;
  }

  // tcp_cfg - computed: false, optional: true, required: false
  private _tcpCfg = new Cgnv6LsnRuleListDefaultRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListDefaultRuleCfgTcpCfg) {
    this._tcpCfg.internalValue = value;
  }
  public resetTcpCfg() {
    this._tcpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCfgInput() {
    return this._tcpCfg.internalValue;
  }

  // udp_cfg - computed: false, optional: true, required: false
  private _udpCfg = new Cgnv6LsnRuleListDefaultRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListDefaultRuleCfgUdpCfg) {
    this._udpCfg.internalValue = value;
  }
  public resetUdpCfg() {
    this._udpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCfgInput() {
    return this._udpCfg.internalValue;
  }
}

export class Cgnv6LsnRuleListDefaultRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDefaultRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDefaultRuleCfgOutputReference {
    return new Cgnv6LsnRuleListDefaultRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDefaultSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#counters1 Cgnv6LsnRuleList#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListDefaultSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListDefaultSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListDefaultSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListDefaultSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDefaultSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefaultSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6LsnRuleListDefaultSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDefaultSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDefaultSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListDefaultSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDefault {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#rule_cfg Cgnv6LsnRuleList#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListDefaultRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#sampling_enable Cgnv6LsnRuleList#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListDefaultSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6LsnRuleListDefaultToTerraform(struct?: Cgnv6LsnRuleListDefaultOutputReference | Cgnv6LsnRuleListDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rule_cfg: cdktf.listMapper(cgnv6LsnRuleListDefaultRuleCfgToTerraform, true)(struct!.ruleCfg),
    sampling_enable: cdktf.listMapper(cgnv6LsnRuleListDefaultSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6LsnRuleListDefaultToHclTerraform(struct?: Cgnv6LsnRuleListDefaultOutputReference | Cgnv6LsnRuleListDefault): any {
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
    rule_cfg: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDefaultRuleCfgToHclTerraform, true)(struct!.ruleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultRuleCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDefaultSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDefaultSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ruleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCfg = this._ruleCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ruleCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ruleCfg.internalValue = value.ruleCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // rule_cfg - computed: false, optional: true, required: false
  private _ruleCfg = new Cgnv6LsnRuleListDefaultRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListDefaultRuleCfg[] | cdktf.IResolvable) {
    this._ruleCfg.internalValue = value;
  }
  public resetRuleCfg() {
    this._ruleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCfgInput() {
    return this._ruleCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnRuleListDefaultSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListDefaultSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface Cgnv6LsnRuleListDomainIpSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#counters1 Cgnv6LsnRuleList#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListDomainIpSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListDomainIpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListDomainIpSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListDomainIpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainIpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainIpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainIpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6LsnRuleListDomainIpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainIpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainIpSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListDomainIpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainIp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#sampling_enable Cgnv6LsnRuleList#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListDomainIpSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6LsnRuleListDomainIpToTerraform(struct?: Cgnv6LsnRuleListDomainIpOutputReference | Cgnv6LsnRuleListDomainIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(cgnv6LsnRuleListDomainIpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6LsnRuleListDomainIpToHclTerraform(struct?: Cgnv6LsnRuleListDomainIpOutputReference | Cgnv6LsnRuleListDomainIp): any {
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
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainIpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainIpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnRuleListDomainIpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListDomainIpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_match Cgnv6LsnRuleList#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_match: cdktf.stringToTerraform(struct!.dscpMatch),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
  }
}


export function cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_match: {
      value: cdktf.stringToHclTerraform(struct!.dscpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMatch = this._dscpMatch;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpMatch = undefined;
      this._dscpValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpMatch = value.dscpMatch;
      this._dscpValue = value.dscpValue;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }
}
export interface Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    shared: cdktf.numberToTerraform(struct!.shared),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._shared = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._shared = value.shared;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#http_alg Cgnv6LsnRuleList#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    http_alg: cdktf.stringToTerraform(struct!.httpAlg),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_alg: {
      value: cdktf.stringToHclTerraform(struct!.httpAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._httpAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAlg = this._httpAlg;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._httpAlg = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._httpAlg = value.httpAlg;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // http_alg - computed: false, optional: true, required: false
  private _httpAlg?: string; 
  public get httpAlg() {
    return this.getStringAttribute('http_alg');
  }
  public set httpAlg(value: string) {
    this._httpAlg = value;
  }
  public resetHttpAlg() {
    this._httpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAlgInput() {
    return this._httpAlg;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainListNameListRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#proto Cgnv6LsnRuleList#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_cfg Cgnv6LsnRuleList#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#icmp_others_cfg Cgnv6LsnRuleList#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#tcp_cfg Cgnv6LsnRuleList#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#udp_cfg Cgnv6LsnRuleList#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListDomainListNameListRuleCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListDomainListNameListRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_cfg: {
      value: cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListRuleCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._dscpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpCfg = this._dscpCfg?.internalValue;
    }
    if (this._icmpOthersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOthersCfg = this._icmpOthersCfg?.internalValue;
    }
    if (this._tcpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCfg = this._tcpCfg?.internalValue;
    }
    if (this._udpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCfg = this._udpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListRuleCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proto = undefined;
      this._dscpCfg.internalValue = undefined;
      this._icmpOthersCfg.internalValue = undefined;
      this._tcpCfg.internalValue = undefined;
      this._udpCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proto = value.proto;
      this._dscpCfg.internalValue = value.dscpCfg;
      this._icmpOthersCfg.internalValue = value.icmpOthersCfg;
      this._tcpCfg.internalValue = value.tcpCfg;
      this._udpCfg.internalValue = value.udpCfg;
    }
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // dscp_cfg - computed: false, optional: true, required: false
  private _dscpCfg = new Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListDomainListNameListRuleCfgDscpCfg) {
    this._dscpCfg.internalValue = value;
  }
  public resetDscpCfg() {
    this._dscpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCfgInput() {
    return this._dscpCfg.internalValue;
  }

  // icmp_others_cfg - computed: false, optional: true, required: false
  private _icmpOthersCfg = new Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListDomainListNameListRuleCfgIcmpOthersCfg) {
    this._icmpOthersCfg.internalValue = value;
  }
  public resetIcmpOthersCfg() {
    this._icmpOthersCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOthersCfgInput() {
    return this._icmpOthersCfg.internalValue;
  }

  // tcp_cfg - computed: false, optional: true, required: false
  private _tcpCfg = new Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListDomainListNameListRuleCfgTcpCfg) {
    this._tcpCfg.internalValue = value;
  }
  public resetTcpCfg() {
    this._tcpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCfgInput() {
    return this._tcpCfg.internalValue;
  }

  // udp_cfg - computed: false, optional: true, required: false
  private _udpCfg = new Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListDomainListNameListRuleCfgUdpCfg) {
    this._udpCfg.internalValue = value;
  }
  public resetUdpCfg() {
    this._udpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCfgInput() {
    return this._udpCfg.internalValue;
  }
}

export class Cgnv6LsnRuleListDomainListNameListRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainListNameListRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainListNameListRuleCfgOutputReference {
    return new Cgnv6LsnRuleListDomainListNameListRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainListNameListSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#counters1 Cgnv6LsnRuleList#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListDomainListNameListSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListDomainListNameListSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6LsnRuleListDomainListNameListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainListNameListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainListNameListSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListDomainListNameListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainListNameListStruct {
  /**
  * Configure a Specific Rule-Set (Domain List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#name_domain_list Cgnv6LsnRuleList#name_domain_list}
  */
  readonly nameDomainList: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#user_tag Cgnv6LsnRuleList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#rule_cfg Cgnv6LsnRuleList#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListDomainListNameListRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#sampling_enable Cgnv6LsnRuleList#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListDomainListNameListSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6LsnRuleListDomainListNameListStructToTerraform(struct?: Cgnv6LsnRuleListDomainListNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_domain_list: cdktf.stringToTerraform(struct!.nameDomainList),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rule_cfg: cdktf.listMapper(cgnv6LsnRuleListDomainListNameListRuleCfgToTerraform, true)(struct!.ruleCfg),
    sampling_enable: cdktf.listMapper(cgnv6LsnRuleListDomainListNameListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6LsnRuleListDomainListNameListStructToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_domain_list: {
      value: cdktf.stringToHclTerraform(struct!.nameDomainList),
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
    rule_cfg: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainListNameListRuleCfgToHclTerraform, true)(struct!.ruleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListRuleCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainListNameListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainListNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameDomainList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameDomainList = this._nameDomainList;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ruleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCfg = this._ruleCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameDomainList = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ruleCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameDomainList = value.nameDomainList;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ruleCfg.internalValue = value.ruleCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // name_domain_list - computed: false, optional: false, required: true
  private _nameDomainList?: string; 
  public get nameDomainList() {
    return this.getStringAttribute('name_domain_list');
  }
  public set nameDomainList(value: string) {
    this._nameDomainList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDomainListInput() {
    return this._nameDomainList;
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

  // rule_cfg - computed: false, optional: true, required: false
  private _ruleCfg = new Cgnv6LsnRuleListDomainListNameListRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListDomainListNameListRuleCfg[] | cdktf.IResolvable) {
    this._ruleCfg.internalValue = value;
  }
  public resetRuleCfg() {
    this._ruleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCfgInput() {
    return this._ruleCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnRuleListDomainListNameListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListDomainListNameListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class Cgnv6LsnRuleListDomainListNameListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainListNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainListNameListStructOutputReference {
    return new Cgnv6LsnRuleListDomainListNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_match Cgnv6LsnRuleList#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_match: cdktf.stringToTerraform(struct!.dscpMatch),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
  }
}


export function cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_match: {
      value: cdktf.stringToHclTerraform(struct!.dscpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMatch = this._dscpMatch;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpMatch = undefined;
      this._dscpValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpMatch = value.dscpMatch;
      this._dscpValue = value.dscpValue;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }
}
export interface Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    shared: cdktf.numberToTerraform(struct!.shared),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._shared = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._shared = value.shared;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#http_alg Cgnv6LsnRuleList#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    http_alg: cdktf.stringToTerraform(struct!.httpAlg),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_alg: {
      value: cdktf.stringToHclTerraform(struct!.httpAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._httpAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAlg = this._httpAlg;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._httpAlg = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._httpAlg = value.httpAlg;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // http_alg - computed: false, optional: true, required: false
  private _httpAlg?: string; 
  public get httpAlg() {
    return this.getStringAttribute('http_alg');
  }
  public set httpAlg(value: string) {
    this._httpAlg = value;
  }
  public resetHttpAlg() {
    this._httpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAlgInput() {
    return this._httpAlg;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListDomainNameListRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#proto Cgnv6LsnRuleList#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_cfg Cgnv6LsnRuleList#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#icmp_others_cfg Cgnv6LsnRuleList#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#tcp_cfg Cgnv6LsnRuleList#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#udp_cfg Cgnv6LsnRuleList#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListDomainNameListRuleCfgToTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListDomainNameListRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_cfg: {
      value: cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainNameListRuleCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._dscpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpCfg = this._dscpCfg?.internalValue;
    }
    if (this._icmpOthersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOthersCfg = this._icmpOthersCfg?.internalValue;
    }
    if (this._tcpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCfg = this._tcpCfg?.internalValue;
    }
    if (this._udpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCfg = this._udpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListRuleCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proto = undefined;
      this._dscpCfg.internalValue = undefined;
      this._icmpOthersCfg.internalValue = undefined;
      this._tcpCfg.internalValue = undefined;
      this._udpCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proto = value.proto;
      this._dscpCfg.internalValue = value.dscpCfg;
      this._icmpOthersCfg.internalValue = value.icmpOthersCfg;
      this._tcpCfg.internalValue = value.tcpCfg;
      this._udpCfg.internalValue = value.udpCfg;
    }
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // dscp_cfg - computed: false, optional: true, required: false
  private _dscpCfg = new Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListDomainNameListRuleCfgDscpCfg) {
    this._dscpCfg.internalValue = value;
  }
  public resetDscpCfg() {
    this._dscpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCfgInput() {
    return this._dscpCfg.internalValue;
  }

  // icmp_others_cfg - computed: false, optional: true, required: false
  private _icmpOthersCfg = new Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListDomainNameListRuleCfgIcmpOthersCfg) {
    this._icmpOthersCfg.internalValue = value;
  }
  public resetIcmpOthersCfg() {
    this._icmpOthersCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOthersCfgInput() {
    return this._icmpOthersCfg.internalValue;
  }

  // tcp_cfg - computed: false, optional: true, required: false
  private _tcpCfg = new Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListDomainNameListRuleCfgTcpCfg) {
    this._tcpCfg.internalValue = value;
  }
  public resetTcpCfg() {
    this._tcpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCfgInput() {
    return this._tcpCfg.internalValue;
  }

  // udp_cfg - computed: false, optional: true, required: false
  private _udpCfg = new Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListDomainNameListRuleCfgUdpCfg) {
    this._udpCfg.internalValue = value;
  }
  public resetUdpCfg() {
    this._udpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCfgInput() {
    return this._udpCfg.internalValue;
  }
}

export class Cgnv6LsnRuleListDomainNameListRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainNameListRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainNameListRuleCfgOutputReference {
    return new Cgnv6LsnRuleListDomainNameListRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainNameListSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#counters1 Cgnv6LsnRuleList#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListDomainNameListSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListDomainNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListDomainNameListSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainNameListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6LsnRuleListDomainNameListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainNameListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainNameListSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListDomainNameListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainNameListStruct {
  /**
  * Configure a Specific Rule-Set (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#name_domain Cgnv6LsnRuleList#name_domain}
  */
  readonly nameDomain: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#user_tag Cgnv6LsnRuleList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#rule_cfg Cgnv6LsnRuleList#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListDomainNameListRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#sampling_enable Cgnv6LsnRuleList#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListDomainNameListSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6LsnRuleListDomainNameListStructToTerraform(struct?: Cgnv6LsnRuleListDomainNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_domain: cdktf.stringToTerraform(struct!.nameDomain),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rule_cfg: cdktf.listMapper(cgnv6LsnRuleListDomainNameListRuleCfgToTerraform, true)(struct!.ruleCfg),
    sampling_enable: cdktf.listMapper(cgnv6LsnRuleListDomainNameListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6LsnRuleListDomainNameListStructToHclTerraform(struct?: Cgnv6LsnRuleListDomainNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_domain: {
      value: cdktf.stringToHclTerraform(struct!.nameDomain),
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
    rule_cfg: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainNameListRuleCfgToHclTerraform, true)(struct!.ruleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListRuleCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainNameListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainNameListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameDomain = this._nameDomain;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ruleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCfg = this._ruleCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListDomainNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameDomain = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ruleCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameDomain = value.nameDomain;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ruleCfg.internalValue = value.ruleCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // name_domain - computed: false, optional: false, required: true
  private _nameDomain?: string; 
  public get nameDomain() {
    return this.getStringAttribute('name_domain');
  }
  public set nameDomain(value: string) {
    this._nameDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameDomainInput() {
    return this._nameDomain;
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

  // rule_cfg - computed: false, optional: true, required: false
  private _ruleCfg = new Cgnv6LsnRuleListDomainNameListRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListDomainNameListRuleCfg[] | cdktf.IResolvable) {
    this._ruleCfg.internalValue = value;
  }
  public resetRuleCfg() {
    this._ruleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCfgInput() {
    return this._ruleCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnRuleListDomainNameListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListDomainNameListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class Cgnv6LsnRuleListDomainNameListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainNameListStructOutputReference {
    return new Cgnv6LsnRuleListDomainNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListIpListRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_match Cgnv6LsnRuleList#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListIpListRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_match: cdktf.stringToTerraform(struct!.dscpMatch),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
  }
}


export function cgnv6LsnRuleListIpListRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgDscpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_match: {
      value: cdktf.stringToHclTerraform(struct!.dscpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpListRuleCfgDscpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpMatch = this._dscpMatch;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListRuleCfgDscpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._dscpDirection = undefined;
      this._dscpMatch = undefined;
      this._dscpValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._dscpDirection = value.dscpDirection;
      this._dscpMatch = value.dscpMatch;
      this._dscpValue = value.dscpValue;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_match - computed: false, optional: true, required: false
  private _dscpMatch?: string; 
  public get dscpMatch() {
    return this.getStringAttribute('dscp_match');
  }
  public set dscpMatch(value: string) {
    this._dscpMatch = value;
  }
  public resetDscpMatch() {
    this._dscpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMatchInput() {
    return this._dscpMatch;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }
}
export interface Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain Cgnv6LsnRuleList#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    domain: cdktf.stringToTerraform(struct!.domain),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    shared: cdktf.numberToTerraform(struct!.shared),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._domain = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._shared = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._domain = value.domain;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._shared = value.shared;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListIpListRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template; 'idle-timeout': Configure idle timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain Cgnv6LsnRuleList#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * 'fast': Fast Aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#fast Cgnv6LsnRuleList#fast}
  */
  readonly fast?: string;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#http_alg Cgnv6LsnRuleList#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#timeout_val Cgnv6LsnRuleList#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpListRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    domain: cdktf.stringToTerraform(struct!.domain),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    fast: cdktf.stringToTerraform(struct!.fast),
    http_alg: cdktf.stringToTerraform(struct!.httpAlg),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    timeout_val: cdktf.numberToTerraform(struct!.timeoutVal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListIpListRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgTcpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast: {
      value: cdktf.stringToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_alg: {
      value: cdktf.stringToHclTerraform(struct!.httpAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_val: {
      value: cdktf.numberToHclTerraform(struct!.timeoutVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpListRuleCfgTcpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._httpAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAlg = this._httpAlg;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._timeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVal = this._timeoutVal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListRuleCfgTcpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._domain = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._fast = undefined;
      this._httpAlg = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._timeoutVal = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._domain = value.domain;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._fast = value.fast;
      this._httpAlg = value.httpAlg;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._timeoutVal = value.timeoutVal;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: string; 
  public get fast() {
    return this.getStringAttribute('fast');
  }
  public set fast(value: string) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
  }

  // http_alg - computed: false, optional: true, required: false
  private _httpAlg?: string; 
  public get httpAlg() {
    return this.getStringAttribute('http_alg');
  }
  public set httpAlg(value: string) {
    this._httpAlg = value;
  }
  public resetHttpAlg() {
    this._httpAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAlgInput() {
    return this._httpAlg;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // timeout_val - computed: false, optional: true, required: false
  private _timeoutVal?: number; 
  public get timeoutVal() {
    return this.getNumberAttribute('timeout_val');
  }
  public set timeoutVal(value: number) {
    this._timeoutVal = value;
  }
  public resetTimeoutVal() {
    this._timeoutVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutValInput() {
    return this._timeoutVal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListIpListRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_cfg Cgnv6LsnRuleList#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'idle-timeout': Configure idle timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#action_type Cgnv6LsnRuleList#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#domain Cgnv6LsnRuleList#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_direction Cgnv6LsnRuleList#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_value Cgnv6LsnRuleList#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#end_port Cgnv6LsnRuleList#end_port}
  */
  readonly endPort?: number;
  /**
  * 'fast': Fast Aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#fast Cgnv6LsnRuleList#fast}
  */
  readonly fast?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_list Cgnv6LsnRuleList#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#no_snat Cgnv6LsnRuleList#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#pool Cgnv6LsnRuleList#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#port_list Cgnv6LsnRuleList#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#shared Cgnv6LsnRuleList#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#start_port Cgnv6LsnRuleList#start_port}
  */
  readonly startPort?: number;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#timeout_val Cgnv6LsnRuleList#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#vrid Cgnv6LsnRuleList#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpListRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cfg: cdktf.stringToTerraform(struct!.actionCfg),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    domain: cdktf.stringToTerraform(struct!.domain),
    dscp_direction: cdktf.stringToTerraform(struct!.dscpDirection),
    dscp_value: cdktf.stringToTerraform(struct!.dscpValue),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    fast: cdktf.stringToTerraform(struct!.fast),
    ipv4_list: cdktf.stringToTerraform(struct!.ipv4List),
    no_snat: cdktf.numberToTerraform(struct!.noSnat),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_list: cdktf.stringToTerraform(struct!.portList),
    shared: cdktf.numberToTerraform(struct!.shared),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    timeout_val: cdktf.numberToTerraform(struct!.timeoutVal),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function cgnv6LsnRuleListIpListRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListIpListRuleCfgUdpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cfg: {
      value: cdktf.stringToHclTerraform(struct!.actionCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_direction: {
      value: cdktf.stringToHclTerraform(struct!.dscpDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_value: {
      value: cdktf.stringToHclTerraform(struct!.dscpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast: {
      value: cdktf.stringToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_list: {
      value: cdktf.stringToHclTerraform(struct!.ipv4List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_snat: {
      value: cdktf.numberToHclTerraform(struct!.noSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.stringToHclTerraform(struct!.portList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_val: {
      value: cdktf.numberToHclTerraform(struct!.timeoutVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpListRuleCfgUdpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCfg = this._actionCfg;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._dscpDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpDirection = this._dscpDirection;
    }
    if (this._dscpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValue = this._dscpValue;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._ipv4List !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List;
    }
    if (this._noSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnat = this._noSnat;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portList !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._timeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVal = this._timeoutVal;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListRuleCfgUdpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCfg = undefined;
      this._actionType = undefined;
      this._domain = undefined;
      this._dscpDirection = undefined;
      this._dscpValue = undefined;
      this._endPort = undefined;
      this._fast = undefined;
      this._ipv4List = undefined;
      this._noSnat = undefined;
      this._pool = undefined;
      this._portList = undefined;
      this._shared = undefined;
      this._startPort = undefined;
      this._timeoutVal = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCfg = value.actionCfg;
      this._actionType = value.actionType;
      this._domain = value.domain;
      this._dscpDirection = value.dscpDirection;
      this._dscpValue = value.dscpValue;
      this._endPort = value.endPort;
      this._fast = value.fast;
      this._ipv4List = value.ipv4List;
      this._noSnat = value.noSnat;
      this._pool = value.pool;
      this._portList = value.portList;
      this._shared = value.shared;
      this._startPort = value.startPort;
      this._timeoutVal = value.timeoutVal;
      this._vrid = value.vrid;
    }
  }

  // action_cfg - computed: false, optional: true, required: false
  private _actionCfg?: string; 
  public get actionCfg() {
    return this.getStringAttribute('action_cfg');
  }
  public set actionCfg(value: string) {
    this._actionCfg = value;
  }
  public resetActionCfg() {
    this._actionCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCfgInput() {
    return this._actionCfg;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dscp_direction - computed: false, optional: true, required: false
  private _dscpDirection?: string; 
  public get dscpDirection() {
    return this.getStringAttribute('dscp_direction');
  }
  public set dscpDirection(value: string) {
    this._dscpDirection = value;
  }
  public resetDscpDirection() {
    this._dscpDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpDirectionInput() {
    return this._dscpDirection;
  }

  // dscp_value - computed: false, optional: true, required: false
  private _dscpValue?: string; 
  public get dscpValue() {
    return this.getStringAttribute('dscp_value');
  }
  public set dscpValue(value: string) {
    this._dscpValue = value;
  }
  public resetDscpValue() {
    this._dscpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValueInput() {
    return this._dscpValue;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: string; 
  public get fast() {
    return this.getStringAttribute('fast');
  }
  public set fast(value: string) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List?: string; 
  public get ipv4List() {
    return this.getStringAttribute('ipv4_list');
  }
  public set ipv4List(value: string) {
    this._ipv4List = value;
  }
  public resetIpv4List() {
    this._ipv4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List;
  }

  // no_snat - computed: false, optional: true, required: false
  private _noSnat?: number; 
  public get noSnat() {
    return this.getNumberAttribute('no_snat');
  }
  public set noSnat(value: number) {
    this._noSnat = value;
  }
  public resetNoSnat() {
    this._noSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatInput() {
    return this._noSnat;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList?: string; 
  public get portList() {
    return this.getStringAttribute('port_list');
  }
  public set portList(value: string) {
    this._portList = value;
  }
  public resetPortList() {
    this._portList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // timeout_val - computed: false, optional: true, required: false
  private _timeoutVal?: number; 
  public get timeoutVal() {
    return this.getNumberAttribute('timeout_val');
  }
  public set timeoutVal(value: number) {
    this._timeoutVal = value;
  }
  public resetTimeoutVal() {
    this._timeoutVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutValInput() {
    return this._timeoutVal;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface Cgnv6LsnRuleListIpListRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#proto Cgnv6LsnRuleList#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#dscp_cfg Cgnv6LsnRuleList#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListIpListRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#icmp_others_cfg Cgnv6LsnRuleList#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#tcp_cfg Cgnv6LsnRuleList#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListIpListRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#udp_cfg Cgnv6LsnRuleList#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListIpListRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListIpListRuleCfgToTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListIpListRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListIpListRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListIpListRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListIpListRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpListRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_cfg: {
      value: cgnv6LsnRuleListIpListRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListIpListRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListIpListRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListIpListRuleCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._dscpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpCfg = this._dscpCfg?.internalValue;
    }
    if (this._icmpOthersCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOthersCfg = this._icmpOthersCfg?.internalValue;
    }
    if (this._tcpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCfg = this._tcpCfg?.internalValue;
    }
    if (this._udpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpCfg = this._udpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListRuleCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proto = undefined;
      this._dscpCfg.internalValue = undefined;
      this._icmpOthersCfg.internalValue = undefined;
      this._tcpCfg.internalValue = undefined;
      this._udpCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proto = value.proto;
      this._dscpCfg.internalValue = value.dscpCfg;
      this._icmpOthersCfg.internalValue = value.icmpOthersCfg;
      this._tcpCfg.internalValue = value.tcpCfg;
      this._udpCfg.internalValue = value.udpCfg;
    }
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // dscp_cfg - computed: false, optional: true, required: false
  private _dscpCfg = new Cgnv6LsnRuleListIpListRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListIpListRuleCfgDscpCfg) {
    this._dscpCfg.internalValue = value;
  }
  public resetDscpCfg() {
    this._dscpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCfgInput() {
    return this._dscpCfg.internalValue;
  }

  // icmp_others_cfg - computed: false, optional: true, required: false
  private _icmpOthersCfg = new Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListIpListRuleCfgIcmpOthersCfg) {
    this._icmpOthersCfg.internalValue = value;
  }
  public resetIcmpOthersCfg() {
    this._icmpOthersCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOthersCfgInput() {
    return this._icmpOthersCfg.internalValue;
  }

  // tcp_cfg - computed: false, optional: true, required: false
  private _tcpCfg = new Cgnv6LsnRuleListIpListRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListIpListRuleCfgTcpCfg) {
    this._tcpCfg.internalValue = value;
  }
  public resetTcpCfg() {
    this._tcpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCfgInput() {
    return this._tcpCfg.internalValue;
  }

  // udp_cfg - computed: false, optional: true, required: false
  private _udpCfg = new Cgnv6LsnRuleListIpListRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListIpListRuleCfgUdpCfg) {
    this._udpCfg.internalValue = value;
  }
  public resetUdpCfg() {
    this._udpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpCfgInput() {
    return this._udpCfg.internalValue;
  }
}

export class Cgnv6LsnRuleListIpListRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListIpListRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListIpListRuleCfgOutputReference {
    return new Cgnv6LsnRuleListIpListRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListIpListSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#counters1 Cgnv6LsnRuleList#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListIpListSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListIpListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListIpListSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListIpListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListIpListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6LsnRuleListIpListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListIpListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListIpListSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListIpListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListIpListStruct {
  /**
  * Configure a Specific Rule-Set (IP Network Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#ipv4_addr Cgnv6LsnRuleList#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#user_tag Cgnv6LsnRuleList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#uuid Cgnv6LsnRuleList#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#rule_cfg Cgnv6LsnRuleList#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListIpListRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#sampling_enable Cgnv6LsnRuleList#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListIpListSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6LsnRuleListIpListStructToTerraform(struct?: Cgnv6LsnRuleListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rule_cfg: cdktf.listMapper(cgnv6LsnRuleListIpListRuleCfgToTerraform, true)(struct!.ruleCfg),
    sampling_enable: cdktf.listMapper(cgnv6LsnRuleListIpListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6LsnRuleListIpListStructToHclTerraform(struct?: Cgnv6LsnRuleListIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
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
    rule_cfg: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListIpListRuleCfgToHclTerraform, true)(struct!.ruleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListRuleCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6LsnRuleListIpListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ruleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleCfg = this._ruleCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRuleListIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ruleCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ruleCfg.internalValue = value.ruleCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
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

  // rule_cfg - computed: false, optional: true, required: false
  private _ruleCfg = new Cgnv6LsnRuleListIpListRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListIpListRuleCfg[] | cdktf.IResolvable) {
    this._ruleCfg.internalValue = value;
  }
  public resetRuleCfg() {
    this._ruleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCfgInput() {
    return this._ruleCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnRuleListIpListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListIpListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class Cgnv6LsnRuleListIpListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListIpListStructOutputReference {
    return new Cgnv6LsnRuleListIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list thunder_cgnv6_lsn_rule_list}
*/
export class Cgnv6LsnRuleList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_rule_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnRuleList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnRuleList to import
  * @param importFromId The id of the existing Cgnv6LsnRuleList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnRuleList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_rule_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list thunder_cgnv6_lsn_rule_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnRuleListConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnRuleListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_rule_list',
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
    this._httpMatchDomainName = config.httpMatchDomainName;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._default.internalValue = config.default;
    this._domainIp.internalValue = config.domainIp;
    this._domainListNameList.internalValue = config.domainListNameList;
    this._domainNameList.internalValue = config.domainNameList;
    this._ipList.internalValue = config.ipList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_match_domain_name - computed: false, optional: true, required: false
  private _httpMatchDomainName?: number; 
  public get httpMatchDomainName() {
    return this.getNumberAttribute('http_match_domain_name');
  }
  public set httpMatchDomainName(value: number) {
    this._httpMatchDomainName = value;
  }
  public resetHttpMatchDomainName() {
    this._httpMatchDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchDomainNameInput() {
    return this._httpMatchDomainName;
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

  // default - computed: false, optional: true, required: false
  private _default = new Cgnv6LsnRuleListDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: Cgnv6LsnRuleListDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // domain_ip - computed: false, optional: true, required: false
  private _domainIp = new Cgnv6LsnRuleListDomainIpOutputReference(this, "domain_ip");
  public get domainIp() {
    return this._domainIp;
  }
  public putDomainIp(value: Cgnv6LsnRuleListDomainIp) {
    this._domainIp.internalValue = value;
  }
  public resetDomainIp() {
    this._domainIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIpInput() {
    return this._domainIp.internalValue;
  }

  // domain_list_name_list - computed: false, optional: true, required: false
  private _domainListNameList = new Cgnv6LsnRuleListDomainListNameListStructList(this, "domain_list_name_list", false);
  public get domainListNameList() {
    return this._domainListNameList;
  }
  public putDomainListNameList(value: Cgnv6LsnRuleListDomainListNameListStruct[] | cdktf.IResolvable) {
    this._domainListNameList.internalValue = value;
  }
  public resetDomainListNameList() {
    this._domainListNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListNameListInput() {
    return this._domainListNameList.internalValue;
  }

  // domain_name_list - computed: false, optional: true, required: false
  private _domainNameList = new Cgnv6LsnRuleListDomainNameListStructList(this, "domain_name_list", false);
  public get domainNameList() {
    return this._domainNameList;
  }
  public putDomainNameList(value: Cgnv6LsnRuleListDomainNameListStruct[] | cdktf.IResolvable) {
    this._domainNameList.internalValue = value;
  }
  public resetDomainNameList() {
    this._domainNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameListInput() {
    return this._domainNameList.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new Cgnv6LsnRuleListIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: Cgnv6LsnRuleListIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_match_domain_name: cdktf.numberToTerraform(this._httpMatchDomainName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      default: cgnv6LsnRuleListDefaultToTerraform(this._default.internalValue),
      domain_ip: cgnv6LsnRuleListDomainIpToTerraform(this._domainIp.internalValue),
      domain_list_name_list: cdktf.listMapper(cgnv6LsnRuleListDomainListNameListStructToTerraform, true)(this._domainListNameList.internalValue),
      domain_name_list: cdktf.listMapper(cgnv6LsnRuleListDomainNameListStructToTerraform, true)(this._domainNameList.internalValue),
      ip_list: cdktf.listMapper(cgnv6LsnRuleListIpListStructToTerraform, true)(this._ipList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_match_domain_name: {
        value: cdktf.numberToHclTerraform(this._httpMatchDomainName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      default: {
        value: cgnv6LsnRuleListDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDefaultList",
      },
      domain_ip: {
        value: cgnv6LsnRuleListDomainIpToHclTerraform(this._domainIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDomainIpList",
      },
      domain_list_name_list: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainListNameListStructToHclTerraform, true)(this._domainListNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDomainListNameListStructList",
      },
      domain_name_list: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainNameListStructToHclTerraform, true)(this._domainNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDomainNameListStructList",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListIpListStructToHclTerraform, true)(this._ipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListIpListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
