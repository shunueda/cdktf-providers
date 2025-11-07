// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnRuleListIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#id Cgnv6LsnRuleListIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure a Specific Rule-Set (IP Network Address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#ipv4_addr Cgnv6LsnRuleListIp#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#name Cgnv6LsnRuleListIp#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#user_tag Cgnv6LsnRuleListIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#uuid Cgnv6LsnRuleListIp#uuid}
  */
  readonly uuid?: string;
  /**
  * rule_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#rule_cfg Cgnv6LsnRuleListIp#rule_cfg}
  */
  readonly ruleCfg?: Cgnv6LsnRuleListIpRuleCfg[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#sampling_enable Cgnv6LsnRuleListIp#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnRuleListIpSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnRuleListIpRuleCfgDscpCfg {
  /**
  * 'action': LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_cfg Cgnv6LsnRuleListIp#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_type Cgnv6LsnRuleListIp#action_type}
  */
  readonly actionType?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_direction Cgnv6LsnRuleListIp#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); 'any': Match any dscp value; '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_match Cgnv6LsnRuleListIp#dscp_match}
  */
  readonly dscpMatch?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_value Cgnv6LsnRuleListIp#dscp_value}
  */
  readonly dscpValue?: string;
}

export function cgnv6LsnRuleListIpRuleCfgDscpCfgToTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgDscpCfg): any {
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


export function cgnv6LsnRuleListIpRuleCfgDscpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgDscpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgDscpCfg): any {
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

export class Cgnv6LsnRuleListIpRuleCfgDscpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpRuleCfgDscpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpRuleCfgDscpCfg | undefined) {
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
export interface Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_cfg Cgnv6LsnRuleListIp#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_type Cgnv6LsnRuleListIp#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#domain Cgnv6LsnRuleListIp#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_direction Cgnv6LsnRuleListIp#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_value Cgnv6LsnRuleListIp#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#ipv4_list Cgnv6LsnRuleListIp#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#no_snat Cgnv6LsnRuleListIp#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#pool Cgnv6LsnRuleListIp#pool}
  */
  readonly pool?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#shared Cgnv6LsnRuleListIp#shared}
  */
  readonly shared?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#vrid Cgnv6LsnRuleListIp#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgToTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg): any {
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


export function cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg): any {
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

export class Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg | undefined) {
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
export interface Cgnv6LsnRuleListIpRuleCfgTcpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_cfg Cgnv6LsnRuleListIp#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'template': Template; 'idle-timeout': Configure idle timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_type Cgnv6LsnRuleListIp#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#domain Cgnv6LsnRuleListIp#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_direction Cgnv6LsnRuleListIp#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_value Cgnv6LsnRuleListIp#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#end_port Cgnv6LsnRuleListIp#end_port}
  */
  readonly endPort?: number;
  /**
  * 'fast': Fast Aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#fast Cgnv6LsnRuleListIp#fast}
  */
  readonly fast?: string;
  /**
  * HTTP-ALG Template (Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#http_alg Cgnv6LsnRuleListIp#http_alg}
  */
  readonly httpAlg?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#ipv4_list Cgnv6LsnRuleListIp#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#no_snat Cgnv6LsnRuleListIp#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#pool Cgnv6LsnRuleListIp#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#port_list Cgnv6LsnRuleListIp#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#shared Cgnv6LsnRuleListIp#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#start_port Cgnv6LsnRuleListIp#start_port}
  */
  readonly startPort?: number;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#timeout_val Cgnv6LsnRuleListIp#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#vrid Cgnv6LsnRuleListIp#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpRuleCfgTcpCfgToTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgTcpCfg): any {
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


export function cgnv6LsnRuleListIpRuleCfgTcpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgTcpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgTcpCfg): any {
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

export class Cgnv6LsnRuleListIpRuleCfgTcpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpRuleCfgTcpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpRuleCfgTcpCfg | undefined) {
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
export interface Cgnv6LsnRuleListIpRuleCfgUdpCfg {
  /**
  * 'action': LSN Rule-List Action; 'no-action': Exclude LSN Rule-List Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_cfg Cgnv6LsnRuleListIp#action_cfg}
  */
  readonly actionCfg?: string;
  /**
  * 'dnat': Apply Dest NAT; 'drop': Drop the Packets; 'one-to-one-snat': Apply one-to-one source NAT for the packets; 'pass-through': Pass the Packets Through; 'snat': Redirect the Packets to a Different Source NAT Pool; 'set-dscp': To set dscp value for the packets; 'idle-timeout': Configure idle timeout;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#action_type Cgnv6LsnRuleListIp#action_type}
  */
  readonly actionType?: string;
  /**
  * DNAT Using IP of a Domain (Domain Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#domain Cgnv6LsnRuleListIp#domain}
  */
  readonly domain?: string;
  /**
  * 'inbound': To set dscp value for inbound packets; 'outbound': To set dscp value for outbound packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_direction Cgnv6LsnRuleListIp#dscp_direction}
  */
  readonly dscpDirection?: string;
  /**
  * 'default': Default dscp (000000); 'af11': AF11 (001010); 'af12': AF12 (001100); 'af13': AF13 (001110); 'af21': AF21 (010010); 'af22': AF22 (010100); 'af23': AF23 (010110); 'af31': AF31 (011010); 'af32': AF32 (011100); 'af33': AF33 (011110); 'af41': AF41 (100010); 'af42': AF42 (100100); 'af43': AF43 (100110); 'cs1': CS1 (001000); 'cs2': CS2 (010000); 'cs3': CS3 (011000); 'cs4': CS4 (100000); 'cs5': CS5 (101000); 'cs6': CS6 (110000); 'cs7': CS7 (111000); 'ef': EF (101110); '0': 000000; '1': 000001; '2': 000010; '3': 000011; '4': 000100; '5': 000101; '6': 000110; '7': 000111; '8': 001000; '9': 001001; '10': 001010; '11': 001011; '12': 001100; '13': 001101; '14': 001110; '15': 001111; '16': 010000; '17': 010001; '18': 010010; '19': 010011; '20': 010100; '21': 010101; '22': 010110; '23': 010111; '24': 011000; '25': 011001; '26': 011010; '27': 011011; '28': 011100; '29': 011101; '30': 011110; '31': 011111; '32': 100000; '33': 100001; '34': 100010; '35': 100011; '36': 100100; '37': 100101; '38': 100110; '39': 100111; '40': 101000; '41': 101001; '42': 101010; '43': 101011; '44': 101100; '45': 101101; '46': 101110; '47': 101111; '48': 110000; '49': 110001; '50': 110010; '51': 110011; '52': 110100; '53': 110101; '54': 110110; '55': 110111; '56': 111000; '57': 111001; '58': 111010; '59': 111011; '60': 111100; '61': 111101; '62': 111110; '63': 111111;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_value Cgnv6LsnRuleListIp#dscp_value}
  */
  readonly dscpValue?: string;
  /**
  * End of Port Range (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#end_port Cgnv6LsnRuleListIp#end_port}
  */
  readonly endPort?: number;
  /**
  * 'fast': Fast Aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#fast Cgnv6LsnRuleListIp#fast}
  */
  readonly fast?: string;
  /**
  * IP-List (IP-List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#ipv4_list Cgnv6LsnRuleListIp#ipv4_list}
  */
  readonly ipv4List?: string;
  /**
  * Disable source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#no_snat Cgnv6LsnRuleListIp#no_snat}
  */
  readonly noSnat?: number;
  /**
  * NAT Pool (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#pool Cgnv6LsnRuleListIp#pool}
  */
  readonly pool?: string;
  /**
  * Port-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#port_list Cgnv6LsnRuleListIp#port_list}
  */
  readonly portList?: string;
  /**
  * The pool is a shared pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#shared Cgnv6LsnRuleListIp#shared}
  */
  readonly shared?: number;
  /**
  * Single Port or Start of Port Range (inclusive), Port 0 is Match Any Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#start_port Cgnv6LsnRuleListIp#start_port}
  */
  readonly startPort?: number;
  /**
  * Timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#timeout_val Cgnv6LsnRuleListIp#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#vrid Cgnv6LsnRuleListIp#vrid}
  */
  readonly vrid?: number;
}

export function cgnv6LsnRuleListIpRuleCfgUdpCfgToTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgUdpCfg): any {
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


export function cgnv6LsnRuleListIpRuleCfgUdpCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpRuleCfgUdpCfgOutputReference | Cgnv6LsnRuleListIpRuleCfgUdpCfg): any {
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

export class Cgnv6LsnRuleListIpRuleCfgUdpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnRuleListIpRuleCfgUdpCfg | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpRuleCfgUdpCfg | undefined) {
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
export interface Cgnv6LsnRuleListIpRuleCfg {
  /**
  * 'tcp': TCP L4 Protocol; 'udp': UDP L4 Protocol; 'icmp': ICMP L4 Protocol; 'others': Other L4 Protocol; 'dscp': Match DSCP Value; 'default': Default Action;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#proto Cgnv6LsnRuleListIp#proto}
  */
  readonly proto?: string;
  /**
  * dscp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#dscp_cfg Cgnv6LsnRuleListIp#dscp_cfg}
  */
  readonly dscpCfg?: Cgnv6LsnRuleListIpRuleCfgDscpCfg;
  /**
  * icmp_others_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#icmp_others_cfg Cgnv6LsnRuleListIp#icmp_others_cfg}
  */
  readonly icmpOthersCfg?: Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg;
  /**
  * tcp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#tcp_cfg Cgnv6LsnRuleListIp#tcp_cfg}
  */
  readonly tcpCfg?: Cgnv6LsnRuleListIpRuleCfgTcpCfg;
  /**
  * udp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#udp_cfg Cgnv6LsnRuleListIp#udp_cfg}
  */
  readonly udpCfg?: Cgnv6LsnRuleListIpRuleCfgUdpCfg;
}

export function cgnv6LsnRuleListIpRuleCfgToTerraform(struct?: Cgnv6LsnRuleListIpRuleCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proto: cdktf.stringToTerraform(struct!.proto),
    dscp_cfg: cgnv6LsnRuleListIpRuleCfgDscpCfgToTerraform(struct!.dscpCfg),
    icmp_others_cfg: cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgToTerraform(struct!.icmpOthersCfg),
    tcp_cfg: cgnv6LsnRuleListIpRuleCfgTcpCfgToTerraform(struct!.tcpCfg),
    udp_cfg: cgnv6LsnRuleListIpRuleCfgUdpCfgToTerraform(struct!.udpCfg),
  }
}


export function cgnv6LsnRuleListIpRuleCfgToHclTerraform(struct?: Cgnv6LsnRuleListIpRuleCfg | cdktf.IResolvable): any {
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
      value: cgnv6LsnRuleListIpRuleCfgDscpCfgToHclTerraform(struct!.dscpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpRuleCfgDscpCfgList",
    },
    icmp_others_cfg: {
      value: cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgToHclTerraform(struct!.icmpOthersCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgList",
    },
    tcp_cfg: {
      value: cgnv6LsnRuleListIpRuleCfgTcpCfgToHclTerraform(struct!.tcpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpRuleCfgTcpCfgList",
    },
    udp_cfg: {
      value: cgnv6LsnRuleListIpRuleCfgUdpCfgToHclTerraform(struct!.udpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnRuleListIpRuleCfgUdpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRuleListIpRuleCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListIpRuleCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpRuleCfg | cdktf.IResolvable | undefined) {
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
  private _dscpCfg = new Cgnv6LsnRuleListIpRuleCfgDscpCfgOutputReference(this, "dscp_cfg");
  public get dscpCfg() {
    return this._dscpCfg;
  }
  public putDscpCfg(value: Cgnv6LsnRuleListIpRuleCfgDscpCfg) {
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
  private _icmpOthersCfg = new Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfgOutputReference(this, "icmp_others_cfg");
  public get icmpOthersCfg() {
    return this._icmpOthersCfg;
  }
  public putIcmpOthersCfg(value: Cgnv6LsnRuleListIpRuleCfgIcmpOthersCfg) {
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
  private _tcpCfg = new Cgnv6LsnRuleListIpRuleCfgTcpCfgOutputReference(this, "tcp_cfg");
  public get tcpCfg() {
    return this._tcpCfg;
  }
  public putTcpCfg(value: Cgnv6LsnRuleListIpRuleCfgTcpCfg) {
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
  private _udpCfg = new Cgnv6LsnRuleListIpRuleCfgUdpCfgOutputReference(this, "udp_cfg");
  public get udpCfg() {
    return this._udpCfg;
  }
  public putUdpCfg(value: Cgnv6LsnRuleListIpRuleCfgUdpCfg) {
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

export class Cgnv6LsnRuleListIpRuleCfgList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListIpRuleCfg[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListIpRuleCfgOutputReference {
    return new Cgnv6LsnRuleListIpRuleCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnRuleListIpSamplingEnable {
  /**
  * 'all': all; 'placeholder': placeholder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#counters1 Cgnv6LsnRuleListIp#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LsnRuleListIpSamplingEnableToTerraform(struct?: Cgnv6LsnRuleListIpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LsnRuleListIpSamplingEnableToHclTerraform(struct?: Cgnv6LsnRuleListIpSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6LsnRuleListIpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnRuleListIpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6LsnRuleListIpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6LsnRuleListIpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRuleListIpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnRuleListIpSamplingEnableOutputReference {
    return new Cgnv6LsnRuleListIpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip thunder_cgnv6_lsn_rule_list_ip}
*/
export class Cgnv6LsnRuleListIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_rule_list_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnRuleListIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnRuleListIp to import
  * @param importFromId The id of the existing Cgnv6LsnRuleListIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnRuleListIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_rule_list_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_rule_list_ip thunder_cgnv6_lsn_rule_list_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnRuleListIpConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnRuleListIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_rule_list_ip',
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
    this._ipv4Addr = config.ipv4Addr;
    this._name = config.name;
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

  // rule_cfg - computed: false, optional: true, required: false
  private _ruleCfg = new Cgnv6LsnRuleListIpRuleCfgList(this, "rule_cfg", false);
  public get ruleCfg() {
    return this._ruleCfg;
  }
  public putRuleCfg(value: Cgnv6LsnRuleListIpRuleCfg[] | cdktf.IResolvable) {
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
  private _samplingEnable = new Cgnv6LsnRuleListIpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnRuleListIpSamplingEnable[] | cdktf.IResolvable) {
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
      ipv4_addr: cdktf.stringToTerraform(this._ipv4Addr),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rule_cfg: cdktf.listMapper(cgnv6LsnRuleListIpRuleCfgToTerraform, true)(this._ruleCfg.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6LsnRuleListIpSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
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
      rule_cfg: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListIpRuleCfgToHclTerraform, true)(this._ruleCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListIpRuleCfgList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6LsnRuleListIpSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRuleListIpSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
