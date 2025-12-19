// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnRuleListDomainListNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#id Cgnv6LsnRuleListDomainListName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lsn_rule_list_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#lsn_rule_list_name Cgnv6LsnRuleListDomainListName#lsn_rule_list_name}
  */
  readonly lsnRuleListName: string;
  /**
  * Configure a Specific Rule-Set (Domain List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#name_domain_list Cgnv6LsnRuleListDomainListName#name_domain_list}
  */
  readonly nameDomainList: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#user_tag Cgnv6LsnRuleListDomainListName#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#uuid Cgnv6LsnRuleListDomainListName#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#rule_cfg Cgnv6LsnRuleListDomainListName#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListDomainListNameRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#sampling_enable Cgnv6LsnRuleListDomainListName#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListDomainListNameSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_cfg Cgnv6LsnRuleListDomainListName#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_type Cgnv6LsnRuleListDomainListName#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_direction Cgnv6LsnRuleListDomainListName#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_match Cgnv6LsnRuleListDomainListName#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_value Cgnv6LsnRuleListDomainListName#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg): any {
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


export function cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg): any {
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

export class Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg | undefined) {
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
export interface Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_cfg Cgnv6LsnRuleListDomainListName#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_type Cgnv6LsnRuleListDomainListName#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_direction Cgnv6LsnRuleListDomainListName#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_value Cgnv6LsnRuleListDomainListName#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#ipv4_list Cgnv6LsnRuleListDomainListName#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#no_snat Cgnv6LsnRuleListDomainListName#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#pool Cgnv6LsnRuleListDomainListName#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#shared Cgnv6LsnRuleListDomainListName#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#vrid Cgnv6LsnRuleListDomainListName#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg): any {
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


export function cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg): any {
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

export class Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg | undefined) {
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
export interface Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_cfg Cgnv6LsnRuleListDomainListName#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_type Cgnv6LsnRuleListDomainListName#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_direction Cgnv6LsnRuleListDomainListName#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_value Cgnv6LsnRuleListDomainListName#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#end_port Cgnv6LsnRuleListDomainListName#end_port}
  */
  readonly endPort?: number;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#http_alg Cgnv6LsnRuleListDomainListName#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#ipv4_list Cgnv6LsnRuleListDomainListName#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#no_snat Cgnv6LsnRuleListDomainListName#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#pool Cgnv6LsnRuleListDomainListName#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#port_list Cgnv6LsnRuleListDomainListName#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#shared Cgnv6LsnRuleListDomainListName#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#start_port Cgnv6LsnRuleListDomainListName#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#vrid Cgnv6LsnRuleListDomainListName#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg): any {
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


export function cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg): any {
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

export class Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg | undefined) {
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
export interface Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_cfg Cgnv6LsnRuleListDomainListName#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#action_type Cgnv6LsnRuleListDomainListName#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_direction Cgnv6LsnRuleListDomainListName#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_value Cgnv6LsnRuleListDomainListName#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#end_port Cgnv6LsnRuleListDomainListName#end_port}
  */
  readonly endPort?: number;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#ipv4_list Cgnv6LsnRuleListDomainListName#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#no_snat Cgnv6LsnRuleListDomainListName#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#pool Cgnv6LsnRuleListDomainListName#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#port_list Cgnv6LsnRuleListDomainListName#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#shared Cgnv6LsnRuleListDomainListName#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#start_port Cgnv6LsnRuleListDomainListName#start_port}
  */
  readonly startPort?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#vrid Cgnv6LsnRuleListDomainListName#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg): any {
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


export function cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg): any {
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

export class Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg | undefined) {
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
export interface Cgnv6LsnRuleListDomainListNameRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#proto Cgnv6LsnRuleListDomainListName#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#dscp_cfg Cgnv6LsnRuleListDomainListName#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#icmp_others_cfg Cgnv6LsnRuleListDomainListName#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#tcp_cfg Cgnv6LsnRuleListDomainListName#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#udp_cfg Cgnv6LsnRuleListDomainListName#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListDomainListNameRuleCfgToTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListDomainListNameRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameRuleCfg | cdktf.IResolvable): any {
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
      value: cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListDomainListNameRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainListNameRuleCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameRuleCfg | cdktf.IResolvable | undefined) {
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
  private _dscpCfg = new Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListDomainListNameRuleCfgDscpCfg) {
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
  private _icmpOthersCfg = new Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListDomainListNameRuleCfgIcmpOthersCfg) {
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
  private _tcpCfg = new Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListDomainListNameRuleCfgTcpCfg) {
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
  private _udpCfg = new Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListDomainListNameRuleCfgUdpCfg) {
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

export class Cgnv6LsnRuleListDomainListNameRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainListNameRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainListNameRuleCfgOutputReference {
    return new Cgnv6LsnRuleListDomainListNameRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListDomainListNameSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#counters1 Cgnv6LsnRuleListDomainListName#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListDomainListNameSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListDomainListNameSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListDomainListNameSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListDomainListNameSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6LsnRuleListDomainListNameSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListDomainListNameSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListDomainListNameSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6LsnRuleListDomainListNameSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListDomainListNameSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListDomainListNameSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListDomainListNameSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name thunder_cgnv6_lsn_rule_list_domain_list_name}
*/
export class Cgnv6LsnRuleListDomainListName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_rule_list_domain_list_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnRuleListDomainListName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnRuleListDomainListName to import
  * @param importFromId The id of the existing Cgnv6LsnRuleListDomainListName that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnRuleListDomainListName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_rule_list_domain_list_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_rule_list_domain_list_name thunder_cgnv6_lsn_rule_list_domain_list_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnRuleListDomainListNameConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnRuleListDomainListNameConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_rule_list_domain_list_name',
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
    this._lsnRuleListName = config.lsnRuleListName;
    this._nameDomainList = config.nameDomainList;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ruleCfg.internalValue = config.ruleCfg;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // lsn_rule_list_name - computed: false, optional: false, required: true
  private _lsnRuleListName?: string; 
  public get lsnRuleListName() {
    return this.getStringAttribute('lsn_rule_list_name');
  }
  public set lsnRuleListName(value: string) {
    this._lsnRuleListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnRuleListNameInput() {
    return this._lsnRuleListName;
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
  private _ruleCfg = new Cgnv6LsnRuleListDomainListNameRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListDomainListNameRuleCfg[] | cdktf.IResolvable) {
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
  private _samplingEnable = new Cgnv6LsnRuleListDomainListNameSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListDomainListNameSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lsn_rule_list_name: cdktf.stringToTerraform(this._lsnRuleListName),
      name_domain_list: cdktf.stringToTerraform(this._nameDomainList),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rule_cfg: cdktf.listMapper(cgnv6LsnRuleListDomainListNameRuleCfgToTerraform, true)(this._ruleCfg.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6LsnRuleListDomainListNameSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      lsn_rule_list_name: {
        value: cdktf.stringToHclTerraform(this._lsnRuleListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_domain_list: {
        value: cdktf.stringToHclTerraform(this._nameDomainList),
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
      rule_cfg: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainListNameRuleCfgToHclTerraform, true)(this._ruleCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDomainListNameRuleCfgList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListDomainListNameSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListDomainListNameSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
