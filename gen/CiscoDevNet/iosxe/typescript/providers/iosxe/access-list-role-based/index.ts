// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListRoleBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#device AccessListRoleBased#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#entries AccessListRoleBased#entries}
  */
  readonly entries?: AccessListRoleBasedEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#name AccessListRoleBased#name}
  */
  readonly name: string;
}
export interface AccessListRoleBasedEntries {
  /**
  * 
  *   - Choices: `deny`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#ace_rule_action AccessListRoleBased#ace_rule_action}
  */
  readonly aceRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#ace_rule_protocol AccessListRoleBased#ace_rule_protocol}
  */
  readonly aceRuleProtocol?: string;
  /**
  * Match on the ACK bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#ack AccessListRoleBased#ack}
  */
  readonly ack?: boolean | cdktf.IResolvable;
  /**
  * Match packets with given dscp value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#dscp AccessListRoleBased#dscp}
  */
  readonly dscp?: string;
  /**
  * Match established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#established AccessListRoleBased#established}
  */
  readonly established?: boolean | cdktf.IResolvable;
  /**
  * Match on the FIN bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#fin AccessListRoleBased#fin}
  */
  readonly fin?: boolean | cdktf.IResolvable;
  /**
  * Check non-initial fragments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#fragments AccessListRoleBased#fragments}
  */
  readonly fragments?: boolean | cdktf.IResolvable;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#log AccessListRoleBased#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Log matches against this entry, including input interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#log_input AccessListRoleBased#log_input}
  */
  readonly logInput?: boolean | cdktf.IResolvable;
  /**
  * Match on ACK not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minusack AccessListRoleBased#match_all_minusack}
  */
  readonly matchAllMinusack?: boolean | cdktf.IResolvable;
  /**
  * Match on FIN not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minusfin AccessListRoleBased#match_all_minusfin}
  */
  readonly matchAllMinusfin?: boolean | cdktf.IResolvable;
  /**
  * Match on PSH not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minuspsh AccessListRoleBased#match_all_minuspsh}
  */
  readonly matchAllMinuspsh?: boolean | cdktf.IResolvable;
  /**
  * Match on RST not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minusrst AccessListRoleBased#match_all_minusrst}
  */
  readonly matchAllMinusrst?: boolean | cdktf.IResolvable;
  /**
  * Match on SYN not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minussyn AccessListRoleBased#match_all_minussyn}
  */
  readonly matchAllMinussyn?: boolean | cdktf.IResolvable;
  /**
  * Match on URG not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_minusurg AccessListRoleBased#match_all_minusurg}
  */
  readonly matchAllMinusurg?: boolean | cdktf.IResolvable;
  /**
  * Match on ACK set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_plusack AccessListRoleBased#match_all_plusack}
  */
  readonly matchAllPlusack?: boolean | cdktf.IResolvable;
  /**
  * Match on FIN set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_plusfin AccessListRoleBased#match_all_plusfin}
  */
  readonly matchAllPlusfin?: boolean | cdktf.IResolvable;
  /**
  * Match on PSH set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_pluspsh AccessListRoleBased#match_all_pluspsh}
  */
  readonly matchAllPluspsh?: boolean | cdktf.IResolvable;
  /**
  * Match on RST set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_plusrst AccessListRoleBased#match_all_plusrst}
  */
  readonly matchAllPlusrst?: boolean | cdktf.IResolvable;
  /**
  * Match on SYN set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_plussyn AccessListRoleBased#match_all_plussyn}
  */
  readonly matchAllPlussyn?: boolean | cdktf.IResolvable;
  /**
  * Match on URG set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_all_plusurg AccessListRoleBased#match_all_plusurg}
  */
  readonly matchAllPlusurg?: boolean | cdktf.IResolvable;
  /**
  * Match on ACK not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minusack AccessListRoleBased#match_any_minusack}
  */
  readonly matchAnyMinusack?: boolean | cdktf.IResolvable;
  /**
  * Match on FIN not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minusfin AccessListRoleBased#match_any_minusfin}
  */
  readonly matchAnyMinusfin?: boolean | cdktf.IResolvable;
  /**
  * Match on PSH not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minuspsh AccessListRoleBased#match_any_minuspsh}
  */
  readonly matchAnyMinuspsh?: boolean | cdktf.IResolvable;
  /**
  * Match on RST not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minusrst AccessListRoleBased#match_any_minusrst}
  */
  readonly matchAnyMinusrst?: boolean | cdktf.IResolvable;
  /**
  * Match on SYN not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minussyn AccessListRoleBased#match_any_minussyn}
  */
  readonly matchAnyMinussyn?: boolean | cdktf.IResolvable;
  /**
  * Match on URG not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_minusurg AccessListRoleBased#match_any_minusurg}
  */
  readonly matchAnyMinusurg?: boolean | cdktf.IResolvable;
  /**
  * Match on ACK set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_plusack AccessListRoleBased#match_any_plusack}
  */
  readonly matchAnyPlusack?: boolean | cdktf.IResolvable;
  /**
  * Match on FIN set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_plusfin AccessListRoleBased#match_any_plusfin}
  */
  readonly matchAnyPlusfin?: boolean | cdktf.IResolvable;
  /**
  * Match on PSH set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_pluspsh AccessListRoleBased#match_any_pluspsh}
  */
  readonly matchAnyPluspsh?: boolean | cdktf.IResolvable;
  /**
  * Match on RST set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_plusrst AccessListRoleBased#match_any_plusrst}
  */
  readonly matchAnyPlusrst?: boolean | cdktf.IResolvable;
  /**
  * Match on SYN set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_plussyn AccessListRoleBased#match_any_plussyn}
  */
  readonly matchAnyPlussyn?: boolean | cdktf.IResolvable;
  /**
  * Match on URG set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#match_any_plusurg AccessListRoleBased#match_any_plusurg}
  */
  readonly matchAnyPlusurg?: boolean | cdktf.IResolvable;
  /**
  * Match packets with given IP Options value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#option AccessListRoleBased#option}
  */
  readonly option?: string;
  /**
  * Match packets with given precedence value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#precedence AccessListRoleBased#precedence}
  */
  readonly precedence?: string;
  /**
  * Match on the PSH bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#psh AccessListRoleBased#psh}
  */
  readonly psh?: boolean | cdktf.IResolvable;
  /**
  * Access list entry comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#remark AccessListRoleBased#remark}
  */
  readonly remark?: string;
  /**
  * Match on the RST bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#rst AccessListRoleBased#rst}
  */
  readonly rst?: boolean | cdktf.IResolvable;
  /**
  * Sequence number for this entry
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#sequence AccessListRoleBased#sequence}
  */
  readonly sequence: number;
  /**
  * Match on the SYN bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#syn AccessListRoleBased#syn}
  */
  readonly syn?: boolean | cdktf.IResolvable;
  /**
  * Specify a time-range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#time_range AccessListRoleBased#time_range}
  */
  readonly timeRange?: string;
  /**
  * Match packets with given TOS value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#tos AccessListRoleBased#tos}
  */
  readonly tos?: string;
  /**
  * Match on the URG bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#urg AccessListRoleBased#urg}
  */
  readonly urg?: boolean | cdktf.IResolvable;
}

export function accessListRoleBasedEntriesToTerraform(struct?: AccessListRoleBasedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ace_rule_action: cdktf.stringToTerraform(struct!.aceRuleAction),
    ace_rule_protocol: cdktf.stringToTerraform(struct!.aceRuleProtocol),
    ack: cdktf.booleanToTerraform(struct!.ack),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    established: cdktf.booleanToTerraform(struct!.established),
    fin: cdktf.booleanToTerraform(struct!.fin),
    fragments: cdktf.booleanToTerraform(struct!.fragments),
    log: cdktf.booleanToTerraform(struct!.log),
    log_input: cdktf.booleanToTerraform(struct!.logInput),
    match_all_minusack: cdktf.booleanToTerraform(struct!.matchAllMinusack),
    match_all_minusfin: cdktf.booleanToTerraform(struct!.matchAllMinusfin),
    match_all_minuspsh: cdktf.booleanToTerraform(struct!.matchAllMinuspsh),
    match_all_minusrst: cdktf.booleanToTerraform(struct!.matchAllMinusrst),
    match_all_minussyn: cdktf.booleanToTerraform(struct!.matchAllMinussyn),
    match_all_minusurg: cdktf.booleanToTerraform(struct!.matchAllMinusurg),
    match_all_plusack: cdktf.booleanToTerraform(struct!.matchAllPlusack),
    match_all_plusfin: cdktf.booleanToTerraform(struct!.matchAllPlusfin),
    match_all_pluspsh: cdktf.booleanToTerraform(struct!.matchAllPluspsh),
    match_all_plusrst: cdktf.booleanToTerraform(struct!.matchAllPlusrst),
    match_all_plussyn: cdktf.booleanToTerraform(struct!.matchAllPlussyn),
    match_all_plusurg: cdktf.booleanToTerraform(struct!.matchAllPlusurg),
    match_any_minusack: cdktf.booleanToTerraform(struct!.matchAnyMinusack),
    match_any_minusfin: cdktf.booleanToTerraform(struct!.matchAnyMinusfin),
    match_any_minuspsh: cdktf.booleanToTerraform(struct!.matchAnyMinuspsh),
    match_any_minusrst: cdktf.booleanToTerraform(struct!.matchAnyMinusrst),
    match_any_minussyn: cdktf.booleanToTerraform(struct!.matchAnyMinussyn),
    match_any_minusurg: cdktf.booleanToTerraform(struct!.matchAnyMinusurg),
    match_any_plusack: cdktf.booleanToTerraform(struct!.matchAnyPlusack),
    match_any_plusfin: cdktf.booleanToTerraform(struct!.matchAnyPlusfin),
    match_any_pluspsh: cdktf.booleanToTerraform(struct!.matchAnyPluspsh),
    match_any_plusrst: cdktf.booleanToTerraform(struct!.matchAnyPlusrst),
    match_any_plussyn: cdktf.booleanToTerraform(struct!.matchAnyPlussyn),
    match_any_plusurg: cdktf.booleanToTerraform(struct!.matchAnyPlusurg),
    option: cdktf.stringToTerraform(struct!.option),
    precedence: cdktf.stringToTerraform(struct!.precedence),
    psh: cdktf.booleanToTerraform(struct!.psh),
    remark: cdktf.stringToTerraform(struct!.remark),
    rst: cdktf.booleanToTerraform(struct!.rst),
    sequence: cdktf.numberToTerraform(struct!.sequence),
    syn: cdktf.booleanToTerraform(struct!.syn),
    time_range: cdktf.stringToTerraform(struct!.timeRange),
    tos: cdktf.stringToTerraform(struct!.tos),
    urg: cdktf.booleanToTerraform(struct!.urg),
  }
}


export function accessListRoleBasedEntriesToHclTerraform(struct?: AccessListRoleBasedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ace_rule_action: {
      value: cdktf.stringToHclTerraform(struct!.aceRuleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ace_rule_protocol: {
      value: cdktf.stringToHclTerraform(struct!.aceRuleProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ack: {
      value: cdktf.booleanToHclTerraform(struct!.ack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    established: {
      value: cdktf.booleanToHclTerraform(struct!.established),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fin: {
      value: cdktf.booleanToHclTerraform(struct!.fin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fragments: {
      value: cdktf.booleanToHclTerraform(struct!.fragments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_input: {
      value: cdktf.booleanToHclTerraform(struct!.logInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minusack: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinusack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minusfin: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinusfin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minuspsh: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinuspsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minusrst: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinusrst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minussyn: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinussyn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_minusurg: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllMinusurg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_plusack: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPlusack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_plusfin: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPlusfin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_pluspsh: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPluspsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_plusrst: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPlusrst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_plussyn: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPlussyn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_all_plusurg: {
      value: cdktf.booleanToHclTerraform(struct!.matchAllPlusurg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minusack: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinusack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minusfin: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinusfin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minuspsh: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinuspsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minusrst: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinusrst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minussyn: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinussyn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_minusurg: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyMinusurg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_plusack: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPlusack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_plusfin: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPlusfin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_pluspsh: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPluspsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_plusrst: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPlusrst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_plussyn: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPlussyn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_any_plusurg: {
      value: cdktf.booleanToHclTerraform(struct!.matchAnyPlusurg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.stringToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psh: {
      value: cdktf.booleanToHclTerraform(struct!.psh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rst: {
      value: cdktf.booleanToHclTerraform(struct!.rst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sequence: {
      value: cdktf.numberToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn: {
      value: cdktf.booleanToHclTerraform(struct!.syn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_range: {
      value: cdktf.stringToHclTerraform(struct!.timeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.stringToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urg: {
      value: cdktf.booleanToHclTerraform(struct!.urg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListRoleBasedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListRoleBasedEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aceRuleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.aceRuleAction = this._aceRuleAction;
    }
    if (this._aceRuleProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.aceRuleProtocol = this._aceRuleProtocol;
    }
    if (this._ack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ack = this._ack;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._established !== undefined) {
      hasAnyValues = true;
      internalValueResult.established = this._established;
    }
    if (this._fin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fin = this._fin;
    }
    if (this._fragments !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragments = this._fragments;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInput = this._logInput;
    }
    if (this._matchAllMinusack !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinusack = this._matchAllMinusack;
    }
    if (this._matchAllMinusfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinusfin = this._matchAllMinusfin;
    }
    if (this._matchAllMinuspsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinuspsh = this._matchAllMinuspsh;
    }
    if (this._matchAllMinusrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinusrst = this._matchAllMinusrst;
    }
    if (this._matchAllMinussyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinussyn = this._matchAllMinussyn;
    }
    if (this._matchAllMinusurg !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllMinusurg = this._matchAllMinusurg;
    }
    if (this._matchAllPlusack !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPlusack = this._matchAllPlusack;
    }
    if (this._matchAllPlusfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPlusfin = this._matchAllPlusfin;
    }
    if (this._matchAllPluspsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPluspsh = this._matchAllPluspsh;
    }
    if (this._matchAllPlusrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPlusrst = this._matchAllPlusrst;
    }
    if (this._matchAllPlussyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPlussyn = this._matchAllPlussyn;
    }
    if (this._matchAllPlusurg !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAllPlusurg = this._matchAllPlusurg;
    }
    if (this._matchAnyMinusack !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinusack = this._matchAnyMinusack;
    }
    if (this._matchAnyMinusfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinusfin = this._matchAnyMinusfin;
    }
    if (this._matchAnyMinuspsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinuspsh = this._matchAnyMinuspsh;
    }
    if (this._matchAnyMinusrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinusrst = this._matchAnyMinusrst;
    }
    if (this._matchAnyMinussyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinussyn = this._matchAnyMinussyn;
    }
    if (this._matchAnyMinusurg !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyMinusurg = this._matchAnyMinusurg;
    }
    if (this._matchAnyPlusack !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPlusack = this._matchAnyPlusack;
    }
    if (this._matchAnyPlusfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPlusfin = this._matchAnyPlusfin;
    }
    if (this._matchAnyPluspsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPluspsh = this._matchAnyPluspsh;
    }
    if (this._matchAnyPlusrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPlusrst = this._matchAnyPlusrst;
    }
    if (this._matchAnyPlussyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPlussyn = this._matchAnyPlussyn;
    }
    if (this._matchAnyPlusurg !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnyPlusurg = this._matchAnyPlusurg;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._psh !== undefined) {
      hasAnyValues = true;
      internalValueResult.psh = this._psh;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._rst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rst = this._rst;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    if (this._syn !== undefined) {
      hasAnyValues = true;
      internalValueResult.syn = this._syn;
    }
    if (this._timeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._urg !== undefined) {
      hasAnyValues = true;
      internalValueResult.urg = this._urg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListRoleBasedEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aceRuleAction = undefined;
      this._aceRuleProtocol = undefined;
      this._ack = undefined;
      this._dscp = undefined;
      this._established = undefined;
      this._fin = undefined;
      this._fragments = undefined;
      this._log = undefined;
      this._logInput = undefined;
      this._matchAllMinusack = undefined;
      this._matchAllMinusfin = undefined;
      this._matchAllMinuspsh = undefined;
      this._matchAllMinusrst = undefined;
      this._matchAllMinussyn = undefined;
      this._matchAllMinusurg = undefined;
      this._matchAllPlusack = undefined;
      this._matchAllPlusfin = undefined;
      this._matchAllPluspsh = undefined;
      this._matchAllPlusrst = undefined;
      this._matchAllPlussyn = undefined;
      this._matchAllPlusurg = undefined;
      this._matchAnyMinusack = undefined;
      this._matchAnyMinusfin = undefined;
      this._matchAnyMinuspsh = undefined;
      this._matchAnyMinusrst = undefined;
      this._matchAnyMinussyn = undefined;
      this._matchAnyMinusurg = undefined;
      this._matchAnyPlusack = undefined;
      this._matchAnyPlusfin = undefined;
      this._matchAnyPluspsh = undefined;
      this._matchAnyPlusrst = undefined;
      this._matchAnyPlussyn = undefined;
      this._matchAnyPlusurg = undefined;
      this._option = undefined;
      this._precedence = undefined;
      this._psh = undefined;
      this._remark = undefined;
      this._rst = undefined;
      this._sequence = undefined;
      this._syn = undefined;
      this._timeRange = undefined;
      this._tos = undefined;
      this._urg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aceRuleAction = value.aceRuleAction;
      this._aceRuleProtocol = value.aceRuleProtocol;
      this._ack = value.ack;
      this._dscp = value.dscp;
      this._established = value.established;
      this._fin = value.fin;
      this._fragments = value.fragments;
      this._log = value.log;
      this._logInput = value.logInput;
      this._matchAllMinusack = value.matchAllMinusack;
      this._matchAllMinusfin = value.matchAllMinusfin;
      this._matchAllMinuspsh = value.matchAllMinuspsh;
      this._matchAllMinusrst = value.matchAllMinusrst;
      this._matchAllMinussyn = value.matchAllMinussyn;
      this._matchAllMinusurg = value.matchAllMinusurg;
      this._matchAllPlusack = value.matchAllPlusack;
      this._matchAllPlusfin = value.matchAllPlusfin;
      this._matchAllPluspsh = value.matchAllPluspsh;
      this._matchAllPlusrst = value.matchAllPlusrst;
      this._matchAllPlussyn = value.matchAllPlussyn;
      this._matchAllPlusurg = value.matchAllPlusurg;
      this._matchAnyMinusack = value.matchAnyMinusack;
      this._matchAnyMinusfin = value.matchAnyMinusfin;
      this._matchAnyMinuspsh = value.matchAnyMinuspsh;
      this._matchAnyMinusrst = value.matchAnyMinusrst;
      this._matchAnyMinussyn = value.matchAnyMinussyn;
      this._matchAnyMinusurg = value.matchAnyMinusurg;
      this._matchAnyPlusack = value.matchAnyPlusack;
      this._matchAnyPlusfin = value.matchAnyPlusfin;
      this._matchAnyPluspsh = value.matchAnyPluspsh;
      this._matchAnyPlusrst = value.matchAnyPlusrst;
      this._matchAnyPlussyn = value.matchAnyPlussyn;
      this._matchAnyPlusurg = value.matchAnyPlusurg;
      this._option = value.option;
      this._precedence = value.precedence;
      this._psh = value.psh;
      this._remark = value.remark;
      this._rst = value.rst;
      this._sequence = value.sequence;
      this._syn = value.syn;
      this._timeRange = value.timeRange;
      this._tos = value.tos;
      this._urg = value.urg;
    }
  }

  // ace_rule_action - computed: false, optional: true, required: false
  private _aceRuleAction?: string; 
  public get aceRuleAction() {
    return this.getStringAttribute('ace_rule_action');
  }
  public set aceRuleAction(value: string) {
    this._aceRuleAction = value;
  }
  public resetAceRuleAction() {
    this._aceRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aceRuleActionInput() {
    return this._aceRuleAction;
  }

  // ace_rule_protocol - computed: false, optional: true, required: false
  private _aceRuleProtocol?: string; 
  public get aceRuleProtocol() {
    return this.getStringAttribute('ace_rule_protocol');
  }
  public set aceRuleProtocol(value: string) {
    this._aceRuleProtocol = value;
  }
  public resetAceRuleProtocol() {
    this._aceRuleProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aceRuleProtocolInput() {
    return this._aceRuleProtocol;
  }

  // ack - computed: false, optional: true, required: false
  private _ack?: boolean | cdktf.IResolvable; 
  public get ack() {
    return this.getBooleanAttribute('ack');
  }
  public set ack(value: boolean | cdktf.IResolvable) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // established - computed: false, optional: true, required: false
  private _established?: boolean | cdktf.IResolvable; 
  public get established() {
    return this.getBooleanAttribute('established');
  }
  public set established(value: boolean | cdktf.IResolvable) {
    this._established = value;
  }
  public resetEstablished() {
    this._established = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedInput() {
    return this._established;
  }

  // fin - computed: false, optional: true, required: false
  private _fin?: boolean | cdktf.IResolvable; 
  public get fin() {
    return this.getBooleanAttribute('fin');
  }
  public set fin(value: boolean | cdktf.IResolvable) {
    this._fin = value;
  }
  public resetFin() {
    this._fin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finInput() {
    return this._fin;
  }

  // fragments - computed: false, optional: true, required: false
  private _fragments?: boolean | cdktf.IResolvable; 
  public get fragments() {
    return this.getBooleanAttribute('fragments');
  }
  public set fragments(value: boolean | cdktf.IResolvable) {
    this._fragments = value;
  }
  public resetFragments() {
    this._fragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentsInput() {
    return this._fragments;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTfInput() {
    return this._log;
  }

  // log_input - computed: false, optional: true, required: false
  private _logInput?: boolean | cdktf.IResolvable; 
  public get logInput() {
    return this.getBooleanAttribute('log_input');
  }
  public set logInput(value: boolean | cdktf.IResolvable) {
    this._logInput = value;
  }
  public resetLogInput() {
    this._logInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInputInput() {
    return this._logInput;
  }

  // match_all_minusack - computed: false, optional: true, required: false
  private _matchAllMinusack?: boolean | cdktf.IResolvable; 
  public get matchAllMinusack() {
    return this.getBooleanAttribute('match_all_minusack');
  }
  public set matchAllMinusack(value: boolean | cdktf.IResolvable) {
    this._matchAllMinusack = value;
  }
  public resetMatchAllMinusack() {
    this._matchAllMinusack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinusackInput() {
    return this._matchAllMinusack;
  }

  // match_all_minusfin - computed: false, optional: true, required: false
  private _matchAllMinusfin?: boolean | cdktf.IResolvable; 
  public get matchAllMinusfin() {
    return this.getBooleanAttribute('match_all_minusfin');
  }
  public set matchAllMinusfin(value: boolean | cdktf.IResolvable) {
    this._matchAllMinusfin = value;
  }
  public resetMatchAllMinusfin() {
    this._matchAllMinusfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinusfinInput() {
    return this._matchAllMinusfin;
  }

  // match_all_minuspsh - computed: false, optional: true, required: false
  private _matchAllMinuspsh?: boolean | cdktf.IResolvable; 
  public get matchAllMinuspsh() {
    return this.getBooleanAttribute('match_all_minuspsh');
  }
  public set matchAllMinuspsh(value: boolean | cdktf.IResolvable) {
    this._matchAllMinuspsh = value;
  }
  public resetMatchAllMinuspsh() {
    this._matchAllMinuspsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinuspshInput() {
    return this._matchAllMinuspsh;
  }

  // match_all_minusrst - computed: false, optional: true, required: false
  private _matchAllMinusrst?: boolean | cdktf.IResolvable; 
  public get matchAllMinusrst() {
    return this.getBooleanAttribute('match_all_minusrst');
  }
  public set matchAllMinusrst(value: boolean | cdktf.IResolvable) {
    this._matchAllMinusrst = value;
  }
  public resetMatchAllMinusrst() {
    this._matchAllMinusrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinusrstInput() {
    return this._matchAllMinusrst;
  }

  // match_all_minussyn - computed: false, optional: true, required: false
  private _matchAllMinussyn?: boolean | cdktf.IResolvable; 
  public get matchAllMinussyn() {
    return this.getBooleanAttribute('match_all_minussyn');
  }
  public set matchAllMinussyn(value: boolean | cdktf.IResolvable) {
    this._matchAllMinussyn = value;
  }
  public resetMatchAllMinussyn() {
    this._matchAllMinussyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinussynInput() {
    return this._matchAllMinussyn;
  }

  // match_all_minusurg - computed: false, optional: true, required: false
  private _matchAllMinusurg?: boolean | cdktf.IResolvable; 
  public get matchAllMinusurg() {
    return this.getBooleanAttribute('match_all_minusurg');
  }
  public set matchAllMinusurg(value: boolean | cdktf.IResolvable) {
    this._matchAllMinusurg = value;
  }
  public resetMatchAllMinusurg() {
    this._matchAllMinusurg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllMinusurgInput() {
    return this._matchAllMinusurg;
  }

  // match_all_plusack - computed: false, optional: true, required: false
  private _matchAllPlusack?: boolean | cdktf.IResolvable; 
  public get matchAllPlusack() {
    return this.getBooleanAttribute('match_all_plusack');
  }
  public set matchAllPlusack(value: boolean | cdktf.IResolvable) {
    this._matchAllPlusack = value;
  }
  public resetMatchAllPlusack() {
    this._matchAllPlusack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPlusackInput() {
    return this._matchAllPlusack;
  }

  // match_all_plusfin - computed: false, optional: true, required: false
  private _matchAllPlusfin?: boolean | cdktf.IResolvable; 
  public get matchAllPlusfin() {
    return this.getBooleanAttribute('match_all_plusfin');
  }
  public set matchAllPlusfin(value: boolean | cdktf.IResolvable) {
    this._matchAllPlusfin = value;
  }
  public resetMatchAllPlusfin() {
    this._matchAllPlusfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPlusfinInput() {
    return this._matchAllPlusfin;
  }

  // match_all_pluspsh - computed: false, optional: true, required: false
  private _matchAllPluspsh?: boolean | cdktf.IResolvable; 
  public get matchAllPluspsh() {
    return this.getBooleanAttribute('match_all_pluspsh');
  }
  public set matchAllPluspsh(value: boolean | cdktf.IResolvable) {
    this._matchAllPluspsh = value;
  }
  public resetMatchAllPluspsh() {
    this._matchAllPluspsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPluspshInput() {
    return this._matchAllPluspsh;
  }

  // match_all_plusrst - computed: false, optional: true, required: false
  private _matchAllPlusrst?: boolean | cdktf.IResolvable; 
  public get matchAllPlusrst() {
    return this.getBooleanAttribute('match_all_plusrst');
  }
  public set matchAllPlusrst(value: boolean | cdktf.IResolvable) {
    this._matchAllPlusrst = value;
  }
  public resetMatchAllPlusrst() {
    this._matchAllPlusrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPlusrstInput() {
    return this._matchAllPlusrst;
  }

  // match_all_plussyn - computed: false, optional: true, required: false
  private _matchAllPlussyn?: boolean | cdktf.IResolvable; 
  public get matchAllPlussyn() {
    return this.getBooleanAttribute('match_all_plussyn');
  }
  public set matchAllPlussyn(value: boolean | cdktf.IResolvable) {
    this._matchAllPlussyn = value;
  }
  public resetMatchAllPlussyn() {
    this._matchAllPlussyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPlussynInput() {
    return this._matchAllPlussyn;
  }

  // match_all_plusurg - computed: false, optional: true, required: false
  private _matchAllPlusurg?: boolean | cdktf.IResolvable; 
  public get matchAllPlusurg() {
    return this.getBooleanAttribute('match_all_plusurg');
  }
  public set matchAllPlusurg(value: boolean | cdktf.IResolvable) {
    this._matchAllPlusurg = value;
  }
  public resetMatchAllPlusurg() {
    this._matchAllPlusurg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllPlusurgInput() {
    return this._matchAllPlusurg;
  }

  // match_any_minusack - computed: false, optional: true, required: false
  private _matchAnyMinusack?: boolean | cdktf.IResolvable; 
  public get matchAnyMinusack() {
    return this.getBooleanAttribute('match_any_minusack');
  }
  public set matchAnyMinusack(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinusack = value;
  }
  public resetMatchAnyMinusack() {
    this._matchAnyMinusack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinusackInput() {
    return this._matchAnyMinusack;
  }

  // match_any_minusfin - computed: false, optional: true, required: false
  private _matchAnyMinusfin?: boolean | cdktf.IResolvable; 
  public get matchAnyMinusfin() {
    return this.getBooleanAttribute('match_any_minusfin');
  }
  public set matchAnyMinusfin(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinusfin = value;
  }
  public resetMatchAnyMinusfin() {
    this._matchAnyMinusfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinusfinInput() {
    return this._matchAnyMinusfin;
  }

  // match_any_minuspsh - computed: false, optional: true, required: false
  private _matchAnyMinuspsh?: boolean | cdktf.IResolvable; 
  public get matchAnyMinuspsh() {
    return this.getBooleanAttribute('match_any_minuspsh');
  }
  public set matchAnyMinuspsh(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinuspsh = value;
  }
  public resetMatchAnyMinuspsh() {
    this._matchAnyMinuspsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinuspshInput() {
    return this._matchAnyMinuspsh;
  }

  // match_any_minusrst - computed: false, optional: true, required: false
  private _matchAnyMinusrst?: boolean | cdktf.IResolvable; 
  public get matchAnyMinusrst() {
    return this.getBooleanAttribute('match_any_minusrst');
  }
  public set matchAnyMinusrst(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinusrst = value;
  }
  public resetMatchAnyMinusrst() {
    this._matchAnyMinusrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinusrstInput() {
    return this._matchAnyMinusrst;
  }

  // match_any_minussyn - computed: false, optional: true, required: false
  private _matchAnyMinussyn?: boolean | cdktf.IResolvable; 
  public get matchAnyMinussyn() {
    return this.getBooleanAttribute('match_any_minussyn');
  }
  public set matchAnyMinussyn(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinussyn = value;
  }
  public resetMatchAnyMinussyn() {
    this._matchAnyMinussyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinussynInput() {
    return this._matchAnyMinussyn;
  }

  // match_any_minusurg - computed: false, optional: true, required: false
  private _matchAnyMinusurg?: boolean | cdktf.IResolvable; 
  public get matchAnyMinusurg() {
    return this.getBooleanAttribute('match_any_minusurg');
  }
  public set matchAnyMinusurg(value: boolean | cdktf.IResolvable) {
    this._matchAnyMinusurg = value;
  }
  public resetMatchAnyMinusurg() {
    this._matchAnyMinusurg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyMinusurgInput() {
    return this._matchAnyMinusurg;
  }

  // match_any_plusack - computed: false, optional: true, required: false
  private _matchAnyPlusack?: boolean | cdktf.IResolvable; 
  public get matchAnyPlusack() {
    return this.getBooleanAttribute('match_any_plusack');
  }
  public set matchAnyPlusack(value: boolean | cdktf.IResolvable) {
    this._matchAnyPlusack = value;
  }
  public resetMatchAnyPlusack() {
    this._matchAnyPlusack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPlusackInput() {
    return this._matchAnyPlusack;
  }

  // match_any_plusfin - computed: false, optional: true, required: false
  private _matchAnyPlusfin?: boolean | cdktf.IResolvable; 
  public get matchAnyPlusfin() {
    return this.getBooleanAttribute('match_any_plusfin');
  }
  public set matchAnyPlusfin(value: boolean | cdktf.IResolvable) {
    this._matchAnyPlusfin = value;
  }
  public resetMatchAnyPlusfin() {
    this._matchAnyPlusfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPlusfinInput() {
    return this._matchAnyPlusfin;
  }

  // match_any_pluspsh - computed: false, optional: true, required: false
  private _matchAnyPluspsh?: boolean | cdktf.IResolvable; 
  public get matchAnyPluspsh() {
    return this.getBooleanAttribute('match_any_pluspsh');
  }
  public set matchAnyPluspsh(value: boolean | cdktf.IResolvable) {
    this._matchAnyPluspsh = value;
  }
  public resetMatchAnyPluspsh() {
    this._matchAnyPluspsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPluspshInput() {
    return this._matchAnyPluspsh;
  }

  // match_any_plusrst - computed: false, optional: true, required: false
  private _matchAnyPlusrst?: boolean | cdktf.IResolvable; 
  public get matchAnyPlusrst() {
    return this.getBooleanAttribute('match_any_plusrst');
  }
  public set matchAnyPlusrst(value: boolean | cdktf.IResolvable) {
    this._matchAnyPlusrst = value;
  }
  public resetMatchAnyPlusrst() {
    this._matchAnyPlusrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPlusrstInput() {
    return this._matchAnyPlusrst;
  }

  // match_any_plussyn - computed: false, optional: true, required: false
  private _matchAnyPlussyn?: boolean | cdktf.IResolvable; 
  public get matchAnyPlussyn() {
    return this.getBooleanAttribute('match_any_plussyn');
  }
  public set matchAnyPlussyn(value: boolean | cdktf.IResolvable) {
    this._matchAnyPlussyn = value;
  }
  public resetMatchAnyPlussyn() {
    this._matchAnyPlussyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPlussynInput() {
    return this._matchAnyPlussyn;
  }

  // match_any_plusurg - computed: false, optional: true, required: false
  private _matchAnyPlusurg?: boolean | cdktf.IResolvable; 
  public get matchAnyPlusurg() {
    return this.getBooleanAttribute('match_any_plusurg');
  }
  public set matchAnyPlusurg(value: boolean | cdktf.IResolvable) {
    this._matchAnyPlusurg = value;
  }
  public resetMatchAnyPlusurg() {
    this._matchAnyPlusurg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnyPlusurgInput() {
    return this._matchAnyPlusurg;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // psh - computed: false, optional: true, required: false
  private _psh?: boolean | cdktf.IResolvable; 
  public get psh() {
    return this.getBooleanAttribute('psh');
  }
  public set psh(value: boolean | cdktf.IResolvable) {
    this._psh = value;
  }
  public resetPsh() {
    this._psh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pshInput() {
    return this._psh;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // rst - computed: false, optional: true, required: false
  private _rst?: boolean | cdktf.IResolvable; 
  public get rst() {
    return this.getBooleanAttribute('rst');
  }
  public set rst(value: boolean | cdktf.IResolvable) {
    this._rst = value;
  }
  public resetRst() {
    this._rst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstInput() {
    return this._rst;
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // syn - computed: false, optional: true, required: false
  private _syn?: boolean | cdktf.IResolvable; 
  public get syn() {
    return this.getBooleanAttribute('syn');
  }
  public set syn(value: boolean | cdktf.IResolvable) {
    this._syn = value;
  }
  public resetSyn() {
    this._syn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synInput() {
    return this._syn;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: string; 
  public get timeRange() {
    return this.getStringAttribute('time_range');
  }
  public set timeRange(value: string) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // urg - computed: false, optional: true, required: false
  private _urg?: boolean | cdktf.IResolvable; 
  public get urg() {
    return this.getBooleanAttribute('urg');
  }
  public set urg(value: boolean | cdktf.IResolvable) {
    this._urg = value;
  }
  public resetUrg() {
    this._urg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgInput() {
    return this._urg;
  }
}

export class AccessListRoleBasedEntriesList extends cdktf.ComplexList {
  public internalValue? : AccessListRoleBasedEntries[] | cdktf.IResolvable

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
  public get(index: number): AccessListRoleBasedEntriesOutputReference {
    return new AccessListRoleBasedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based iosxe_access_list_role_based}
*/
export class AccessListRoleBased extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_role_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessListRoleBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessListRoleBased to import
  * @param importFromId The id of the existing AccessListRoleBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessListRoleBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_role_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/access_list_role_based iosxe_access_list_role_based} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListRoleBasedConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListRoleBasedConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_role_based',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._entries.internalValue = config.entries;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new AccessListRoleBasedEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: AccessListRoleBasedEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      entries: cdktf.listMapper(accessListRoleBasedEntriesToTerraform, false)(this._entries.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(accessListRoleBasedEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessListRoleBasedEntriesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
