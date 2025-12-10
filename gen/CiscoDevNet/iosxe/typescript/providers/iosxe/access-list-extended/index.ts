// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListExtendedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#device AccessListExtended#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#entries AccessListExtended#entries}
  */
  readonly entries?: AccessListExtendedEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#name AccessListExtended#name}
  */
  readonly name: string;
}
export interface AccessListExtendedEntries {
  /**
  * 
  *   - Choices: `deny`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#ace_rule_action AccessListExtended#ace_rule_action}
  */
  readonly aceRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#ace_rule_protocol AccessListExtended#ace_rule_protocol}
  */
  readonly aceRuleProtocol?: string;
  /**
  * Match on the ACK bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#ack AccessListExtended#ack}
  */
  readonly ack?: boolean | cdktf.IResolvable;
  /**
  * Any destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_any AccessListExtended#destination_any}
  */
  readonly destinationAny?: boolean | cdktf.IResolvable;
  /**
  * A single destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_host AccessListExtended#destination_host}
  */
  readonly destinationHost?: string;
  /**
  * Destination network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_object_group AccessListExtended#destination_object_group}
  */
  readonly destinationObjectGroup?: string;
  /**
  * Match only packets on a given port number up to 10 ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal AccessListExtended#destination_port_equal}
  */
  readonly destinationPortEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_10 AccessListExtended#destination_port_equal_10}
  */
  readonly destinationPortEqual10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_2 AccessListExtended#destination_port_equal_2}
  */
  readonly destinationPortEqual2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_3 AccessListExtended#destination_port_equal_3}
  */
  readonly destinationPortEqual3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_4 AccessListExtended#destination_port_equal_4}
  */
  readonly destinationPortEqual4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_5 AccessListExtended#destination_port_equal_5}
  */
  readonly destinationPortEqual5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_6 AccessListExtended#destination_port_equal_6}
  */
  readonly destinationPortEqual6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_7 AccessListExtended#destination_port_equal_7}
  */
  readonly destinationPortEqual7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_8 AccessListExtended#destination_port_equal_8}
  */
  readonly destinationPortEqual8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_equal_9 AccessListExtended#destination_port_equal_9}
  */
  readonly destinationPortEqual9?: string;
  /**
  * Match only packets with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_greater_than AccessListExtended#destination_port_greater_than}
  */
  readonly destinationPortGreaterThan?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_lesser_than AccessListExtended#destination_port_lesser_than}
  */
  readonly destinationPortLesserThan?: string;
  /**
  * Match only packets in the range of port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_range_from AccessListExtended#destination_port_range_from}
  */
  readonly destinationPortRangeFrom?: string;
  /**
  * Match only packets in the range of port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_port_range_to AccessListExtended#destination_port_range_to}
  */
  readonly destinationPortRangeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_prefix AccessListExtended#destination_prefix}
  */
  readonly destinationPrefix?: string;
  /**
  * Destination wildcard bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#destination_prefix_mask AccessListExtended#destination_prefix_mask}
  */
  readonly destinationPrefixMask?: string;
  /**
  * Match packets with given dscp value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#dscp AccessListExtended#dscp}
  */
  readonly dscp?: string;
  /**
  * Match established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#established AccessListExtended#established}
  */
  readonly established?: boolean | cdktf.IResolvable;
  /**
  * Match on the FIN bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#fin AccessListExtended#fin}
  */
  readonly fin?: boolean | cdktf.IResolvable;
  /**
  * Check non-initial fragments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#fragments AccessListExtended#fragments}
  */
  readonly fragments?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#icmp_msg_code AccessListExtended#icmp_msg_code}
  */
  readonly icmpMsgCode?: number;
  /**
  * 
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#icmp_msg_type AccessListExtended#icmp_msg_type}
  */
  readonly icmpMsgType?: number;
  /**
  * 
  *   - Choices: `administratively-prohibited`, `alternate-address`, `conversion-error`, `dod-host-prohibited`, `dod-net-prohibited`, `echo`, `echo-reply`, `general-parameter-problem`, `host-isolated`, `host-precedence-unreachable`, `host-redirect`, `host-tos-redirect`, `host-tos-unreachable`, `host-unknown`, `host-unreachable`, `information-reply`, `information-request`, `mask-reply`, `mask-request`, `mobile-redirect`, `net-redirect`, `net-tos-redirect`, `net-tos-unreachable`, `net-unreachable`, `network-unknown`, `no-room-for-option`, `option-missing`, `packet-too-big`, `parameter-problem`, `port-unreachable`, `precedence-unreachable`, `protocol-unreachable`, `reassembly-timeout`, `redirect`, `router-advertisement`, `router-solicitation`, `source-quench`, `source-route-failed`, `time-exceeded`, `timestamp-reply`, `timestamp-request`, `traceroute`, `ttl-exceeded`, `unreachable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#icmp_named_msg_type AccessListExtended#icmp_named_msg_type}
  */
  readonly icmpNamedMsgType?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#log AccessListExtended#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Log matches against this entry, including input interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#log_input AccessListExtended#log_input}
  */
  readonly logInput?: boolean | cdktf.IResolvable;
  /**
  * Match packets with given precedence value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#precedence AccessListExtended#precedence}
  */
  readonly precedence?: string;
  /**
  * Match on the PSH bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#psh AccessListExtended#psh}
  */
  readonly psh?: boolean | cdktf.IResolvable;
  /**
  * Access list entry comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#remark AccessListExtended#remark}
  */
  readonly remark?: string;
  /**
  * Match on the RST bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#rst AccessListExtended#rst}
  */
  readonly rst?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#sequence AccessListExtended#sequence}
  */
  readonly sequence: number;
  /**
  * Service object group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#service_object_group AccessListExtended#service_object_group}
  */
  readonly serviceObjectGroup?: string;
  /**
  * Any source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_any AccessListExtended#source_any}
  */
  readonly sourceAny?: boolean | cdktf.IResolvable;
  /**
  * A single source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_host AccessListExtended#source_host}
  */
  readonly sourceHost?: string;
  /**
  * Source network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_object_group AccessListExtended#source_object_group}
  */
  readonly sourceObjectGroup?: string;
  /**
  * Match only packets on a given port number up to 10 ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_port_equal AccessListExtended#source_port_equal}
  */
  readonly sourcePortEqual?: string;
  /**
  * Match only packets with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_port_greater_than AccessListExtended#source_port_greater_than}
  */
  readonly sourcePortGreaterThan?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_port_lesser_than AccessListExtended#source_port_lesser_than}
  */
  readonly sourcePortLesserThan?: string;
  /**
  * Match only packets in the range of port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_port_range_from AccessListExtended#source_port_range_from}
  */
  readonly sourcePortRangeFrom?: string;
  /**
  * Match only packets in the range of port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_port_range_to AccessListExtended#source_port_range_to}
  */
  readonly sourcePortRangeTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_prefix AccessListExtended#source_prefix}
  */
  readonly sourcePrefix?: string;
  /**
  * Source wildcard bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#source_prefix_mask AccessListExtended#source_prefix_mask}
  */
  readonly sourcePrefixMask?: string;
  /**
  * Match on the SYN bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#syn AccessListExtended#syn}
  */
  readonly syn?: boolean | cdktf.IResolvable;
  /**
  * Match packets with given TOS value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#tos AccessListExtended#tos}
  */
  readonly tos?: string;
  /**
  * Match on the URG bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#urg AccessListExtended#urg}
  */
  readonly urg?: boolean | cdktf.IResolvable;
}

export function accessListExtendedEntriesToTerraform(struct?: AccessListExtendedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ace_rule_action: cdktf.stringToTerraform(struct!.aceRuleAction),
    ace_rule_protocol: cdktf.stringToTerraform(struct!.aceRuleProtocol),
    ack: cdktf.booleanToTerraform(struct!.ack),
    destination_any: cdktf.booleanToTerraform(struct!.destinationAny),
    destination_host: cdktf.stringToTerraform(struct!.destinationHost),
    destination_object_group: cdktf.stringToTerraform(struct!.destinationObjectGroup),
    destination_port_equal: cdktf.stringToTerraform(struct!.destinationPortEqual),
    destination_port_equal_10: cdktf.stringToTerraform(struct!.destinationPortEqual10),
    destination_port_equal_2: cdktf.stringToTerraform(struct!.destinationPortEqual2),
    destination_port_equal_3: cdktf.stringToTerraform(struct!.destinationPortEqual3),
    destination_port_equal_4: cdktf.stringToTerraform(struct!.destinationPortEqual4),
    destination_port_equal_5: cdktf.stringToTerraform(struct!.destinationPortEqual5),
    destination_port_equal_6: cdktf.stringToTerraform(struct!.destinationPortEqual6),
    destination_port_equal_7: cdktf.stringToTerraform(struct!.destinationPortEqual7),
    destination_port_equal_8: cdktf.stringToTerraform(struct!.destinationPortEqual8),
    destination_port_equal_9: cdktf.stringToTerraform(struct!.destinationPortEqual9),
    destination_port_greater_than: cdktf.stringToTerraform(struct!.destinationPortGreaterThan),
    destination_port_lesser_than: cdktf.stringToTerraform(struct!.destinationPortLesserThan),
    destination_port_range_from: cdktf.stringToTerraform(struct!.destinationPortRangeFrom),
    destination_port_range_to: cdktf.stringToTerraform(struct!.destinationPortRangeTo),
    destination_prefix: cdktf.stringToTerraform(struct!.destinationPrefix),
    destination_prefix_mask: cdktf.stringToTerraform(struct!.destinationPrefixMask),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    established: cdktf.booleanToTerraform(struct!.established),
    fin: cdktf.booleanToTerraform(struct!.fin),
    fragments: cdktf.booleanToTerraform(struct!.fragments),
    icmp_msg_code: cdktf.numberToTerraform(struct!.icmpMsgCode),
    icmp_msg_type: cdktf.numberToTerraform(struct!.icmpMsgType),
    icmp_named_msg_type: cdktf.stringToTerraform(struct!.icmpNamedMsgType),
    log: cdktf.booleanToTerraform(struct!.log),
    log_input: cdktf.booleanToTerraform(struct!.logInput),
    precedence: cdktf.stringToTerraform(struct!.precedence),
    psh: cdktf.booleanToTerraform(struct!.psh),
    remark: cdktf.stringToTerraform(struct!.remark),
    rst: cdktf.booleanToTerraform(struct!.rst),
    sequence: cdktf.numberToTerraform(struct!.sequence),
    service_object_group: cdktf.stringToTerraform(struct!.serviceObjectGroup),
    source_any: cdktf.booleanToTerraform(struct!.sourceAny),
    source_host: cdktf.stringToTerraform(struct!.sourceHost),
    source_object_group: cdktf.stringToTerraform(struct!.sourceObjectGroup),
    source_port_equal: cdktf.stringToTerraform(struct!.sourcePortEqual),
    source_port_greater_than: cdktf.stringToTerraform(struct!.sourcePortGreaterThan),
    source_port_lesser_than: cdktf.stringToTerraform(struct!.sourcePortLesserThan),
    source_port_range_from: cdktf.stringToTerraform(struct!.sourcePortRangeFrom),
    source_port_range_to: cdktf.stringToTerraform(struct!.sourcePortRangeTo),
    source_prefix: cdktf.stringToTerraform(struct!.sourcePrefix),
    source_prefix_mask: cdktf.stringToTerraform(struct!.sourcePrefixMask),
    syn: cdktf.booleanToTerraform(struct!.syn),
    tos: cdktf.stringToTerraform(struct!.tos),
    urg: cdktf.booleanToTerraform(struct!.urg),
  }
}


export function accessListExtendedEntriesToHclTerraform(struct?: AccessListExtendedEntries | cdktf.IResolvable): any {
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
    destination_any: {
      value: cdktf.booleanToHclTerraform(struct!.destinationAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_host: {
      value: cdktf.stringToHclTerraform(struct!.destinationHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_object_group: {
      value: cdktf.stringToHclTerraform(struct!.destinationObjectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_10: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_2: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_3: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_4: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_5: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_6: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_7: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_8: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_equal_9: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEqual9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_greater_than: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_lesser_than: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortLesserThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range_from: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortRangeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range_to: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_prefix: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_prefix_mask: {
      value: cdktf.stringToHclTerraform(struct!.destinationPrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    icmp_msg_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpMsgCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_msg_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpMsgType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_named_msg_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpNamedMsgType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    service_object_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceObjectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_any: {
      value: cdktf.booleanToHclTerraform(struct!.sourceAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_host: {
      value: cdktf.stringToHclTerraform(struct!.sourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_object_group: {
      value: cdktf.stringToHclTerraform(struct!.sourceObjectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_equal: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_greater_than: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortGreaterThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_lesser_than: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortLesserThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_range_from: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortRangeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_range_to: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_prefix_mask: {
      value: cdktf.stringToHclTerraform(struct!.sourcePrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syn: {
      value: cdktf.booleanToHclTerraform(struct!.syn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class AccessListExtendedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListExtendedEntries | cdktf.IResolvable | undefined {
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
    if (this._destinationAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAny = this._destinationAny;
    }
    if (this._destinationHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHost = this._destinationHost;
    }
    if (this._destinationObjectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectGroup = this._destinationObjectGroup;
    }
    if (this._destinationPortEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual = this._destinationPortEqual;
    }
    if (this._destinationPortEqual10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual10 = this._destinationPortEqual10;
    }
    if (this._destinationPortEqual2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual2 = this._destinationPortEqual2;
    }
    if (this._destinationPortEqual3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual3 = this._destinationPortEqual3;
    }
    if (this._destinationPortEqual4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual4 = this._destinationPortEqual4;
    }
    if (this._destinationPortEqual5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual5 = this._destinationPortEqual5;
    }
    if (this._destinationPortEqual6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual6 = this._destinationPortEqual6;
    }
    if (this._destinationPortEqual7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual7 = this._destinationPortEqual7;
    }
    if (this._destinationPortEqual8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual8 = this._destinationPortEqual8;
    }
    if (this._destinationPortEqual9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEqual9 = this._destinationPortEqual9;
    }
    if (this._destinationPortGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortGreaterThan = this._destinationPortGreaterThan;
    }
    if (this._destinationPortLesserThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortLesserThan = this._destinationPortLesserThan;
    }
    if (this._destinationPortRangeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRangeFrom = this._destinationPortRangeFrom;
    }
    if (this._destinationPortRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRangeTo = this._destinationPortRangeTo;
    }
    if (this._destinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefix = this._destinationPrefix;
    }
    if (this._destinationPrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixMask = this._destinationPrefixMask;
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
    if (this._icmpMsgCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMsgCode = this._icmpMsgCode;
    }
    if (this._icmpMsgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMsgType = this._icmpMsgType;
    }
    if (this._icmpNamedMsgType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpNamedMsgType = this._icmpNamedMsgType;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInput = this._logInput;
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
    if (this._serviceObjectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceObjectGroup = this._serviceObjectGroup;
    }
    if (this._sourceAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAny = this._sourceAny;
    }
    if (this._sourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHost = this._sourceHost;
    }
    if (this._sourceObjectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectGroup = this._sourceObjectGroup;
    }
    if (this._sourcePortEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortEqual = this._sourcePortEqual;
    }
    if (this._sourcePortGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortGreaterThan = this._sourcePortGreaterThan;
    }
    if (this._sourcePortLesserThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortLesserThan = this._sourcePortLesserThan;
    }
    if (this._sourcePortRangeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRangeFrom = this._sourcePortRangeFrom;
    }
    if (this._sourcePortRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRangeTo = this._sourcePortRangeTo;
    }
    if (this._sourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefix = this._sourcePrefix;
    }
    if (this._sourcePrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixMask = this._sourcePrefixMask;
    }
    if (this._syn !== undefined) {
      hasAnyValues = true;
      internalValueResult.syn = this._syn;
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

  public set internalValue(value: AccessListExtendedEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aceRuleAction = undefined;
      this._aceRuleProtocol = undefined;
      this._ack = undefined;
      this._destinationAny = undefined;
      this._destinationHost = undefined;
      this._destinationObjectGroup = undefined;
      this._destinationPortEqual = undefined;
      this._destinationPortEqual10 = undefined;
      this._destinationPortEqual2 = undefined;
      this._destinationPortEqual3 = undefined;
      this._destinationPortEqual4 = undefined;
      this._destinationPortEqual5 = undefined;
      this._destinationPortEqual6 = undefined;
      this._destinationPortEqual7 = undefined;
      this._destinationPortEqual8 = undefined;
      this._destinationPortEqual9 = undefined;
      this._destinationPortGreaterThan = undefined;
      this._destinationPortLesserThan = undefined;
      this._destinationPortRangeFrom = undefined;
      this._destinationPortRangeTo = undefined;
      this._destinationPrefix = undefined;
      this._destinationPrefixMask = undefined;
      this._dscp = undefined;
      this._established = undefined;
      this._fin = undefined;
      this._fragments = undefined;
      this._icmpMsgCode = undefined;
      this._icmpMsgType = undefined;
      this._icmpNamedMsgType = undefined;
      this._log = undefined;
      this._logInput = undefined;
      this._precedence = undefined;
      this._psh = undefined;
      this._remark = undefined;
      this._rst = undefined;
      this._sequence = undefined;
      this._serviceObjectGroup = undefined;
      this._sourceAny = undefined;
      this._sourceHost = undefined;
      this._sourceObjectGroup = undefined;
      this._sourcePortEqual = undefined;
      this._sourcePortGreaterThan = undefined;
      this._sourcePortLesserThan = undefined;
      this._sourcePortRangeFrom = undefined;
      this._sourcePortRangeTo = undefined;
      this._sourcePrefix = undefined;
      this._sourcePrefixMask = undefined;
      this._syn = undefined;
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
      this._destinationAny = value.destinationAny;
      this._destinationHost = value.destinationHost;
      this._destinationObjectGroup = value.destinationObjectGroup;
      this._destinationPortEqual = value.destinationPortEqual;
      this._destinationPortEqual10 = value.destinationPortEqual10;
      this._destinationPortEqual2 = value.destinationPortEqual2;
      this._destinationPortEqual3 = value.destinationPortEqual3;
      this._destinationPortEqual4 = value.destinationPortEqual4;
      this._destinationPortEqual5 = value.destinationPortEqual5;
      this._destinationPortEqual6 = value.destinationPortEqual6;
      this._destinationPortEqual7 = value.destinationPortEqual7;
      this._destinationPortEqual8 = value.destinationPortEqual8;
      this._destinationPortEqual9 = value.destinationPortEqual9;
      this._destinationPortGreaterThan = value.destinationPortGreaterThan;
      this._destinationPortLesserThan = value.destinationPortLesserThan;
      this._destinationPortRangeFrom = value.destinationPortRangeFrom;
      this._destinationPortRangeTo = value.destinationPortRangeTo;
      this._destinationPrefix = value.destinationPrefix;
      this._destinationPrefixMask = value.destinationPrefixMask;
      this._dscp = value.dscp;
      this._established = value.established;
      this._fin = value.fin;
      this._fragments = value.fragments;
      this._icmpMsgCode = value.icmpMsgCode;
      this._icmpMsgType = value.icmpMsgType;
      this._icmpNamedMsgType = value.icmpNamedMsgType;
      this._log = value.log;
      this._logInput = value.logInput;
      this._precedence = value.precedence;
      this._psh = value.psh;
      this._remark = value.remark;
      this._rst = value.rst;
      this._sequence = value.sequence;
      this._serviceObjectGroup = value.serviceObjectGroup;
      this._sourceAny = value.sourceAny;
      this._sourceHost = value.sourceHost;
      this._sourceObjectGroup = value.sourceObjectGroup;
      this._sourcePortEqual = value.sourcePortEqual;
      this._sourcePortGreaterThan = value.sourcePortGreaterThan;
      this._sourcePortLesserThan = value.sourcePortLesserThan;
      this._sourcePortRangeFrom = value.sourcePortRangeFrom;
      this._sourcePortRangeTo = value.sourcePortRangeTo;
      this._sourcePrefix = value.sourcePrefix;
      this._sourcePrefixMask = value.sourcePrefixMask;
      this._syn = value.syn;
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

  // destination_any - computed: false, optional: true, required: false
  private _destinationAny?: boolean | cdktf.IResolvable; 
  public get destinationAny() {
    return this.getBooleanAttribute('destination_any');
  }
  public set destinationAny(value: boolean | cdktf.IResolvable) {
    this._destinationAny = value;
  }
  public resetDestinationAny() {
    this._destinationAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAnyInput() {
    return this._destinationAny;
  }

  // destination_host - computed: false, optional: true, required: false
  private _destinationHost?: string; 
  public get destinationHost() {
    return this.getStringAttribute('destination_host');
  }
  public set destinationHost(value: string) {
    this._destinationHost = value;
  }
  public resetDestinationHost() {
    this._destinationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostInput() {
    return this._destinationHost;
  }

  // destination_object_group - computed: false, optional: true, required: false
  private _destinationObjectGroup?: string; 
  public get destinationObjectGroup() {
    return this.getStringAttribute('destination_object_group');
  }
  public set destinationObjectGroup(value: string) {
    this._destinationObjectGroup = value;
  }
  public resetDestinationObjectGroup() {
    this._destinationObjectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectGroupInput() {
    return this._destinationObjectGroup;
  }

  // destination_port_equal - computed: false, optional: true, required: false
  private _destinationPortEqual?: string; 
  public get destinationPortEqual() {
    return this.getStringAttribute('destination_port_equal');
  }
  public set destinationPortEqual(value: string) {
    this._destinationPortEqual = value;
  }
  public resetDestinationPortEqual() {
    this._destinationPortEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqualInput() {
    return this._destinationPortEqual;
  }

  // destination_port_equal_10 - computed: false, optional: true, required: false
  private _destinationPortEqual10?: string; 
  public get destinationPortEqual10() {
    return this.getStringAttribute('destination_port_equal_10');
  }
  public set destinationPortEqual10(value: string) {
    this._destinationPortEqual10 = value;
  }
  public resetDestinationPortEqual10() {
    this._destinationPortEqual10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual10Input() {
    return this._destinationPortEqual10;
  }

  // destination_port_equal_2 - computed: false, optional: true, required: false
  private _destinationPortEqual2?: string; 
  public get destinationPortEqual2() {
    return this.getStringAttribute('destination_port_equal_2');
  }
  public set destinationPortEqual2(value: string) {
    this._destinationPortEqual2 = value;
  }
  public resetDestinationPortEqual2() {
    this._destinationPortEqual2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual2Input() {
    return this._destinationPortEqual2;
  }

  // destination_port_equal_3 - computed: false, optional: true, required: false
  private _destinationPortEqual3?: string; 
  public get destinationPortEqual3() {
    return this.getStringAttribute('destination_port_equal_3');
  }
  public set destinationPortEqual3(value: string) {
    this._destinationPortEqual3 = value;
  }
  public resetDestinationPortEqual3() {
    this._destinationPortEqual3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual3Input() {
    return this._destinationPortEqual3;
  }

  // destination_port_equal_4 - computed: false, optional: true, required: false
  private _destinationPortEqual4?: string; 
  public get destinationPortEqual4() {
    return this.getStringAttribute('destination_port_equal_4');
  }
  public set destinationPortEqual4(value: string) {
    this._destinationPortEqual4 = value;
  }
  public resetDestinationPortEqual4() {
    this._destinationPortEqual4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual4Input() {
    return this._destinationPortEqual4;
  }

  // destination_port_equal_5 - computed: false, optional: true, required: false
  private _destinationPortEqual5?: string; 
  public get destinationPortEqual5() {
    return this.getStringAttribute('destination_port_equal_5');
  }
  public set destinationPortEqual5(value: string) {
    this._destinationPortEqual5 = value;
  }
  public resetDestinationPortEqual5() {
    this._destinationPortEqual5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual5Input() {
    return this._destinationPortEqual5;
  }

  // destination_port_equal_6 - computed: false, optional: true, required: false
  private _destinationPortEqual6?: string; 
  public get destinationPortEqual6() {
    return this.getStringAttribute('destination_port_equal_6');
  }
  public set destinationPortEqual6(value: string) {
    this._destinationPortEqual6 = value;
  }
  public resetDestinationPortEqual6() {
    this._destinationPortEqual6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual6Input() {
    return this._destinationPortEqual6;
  }

  // destination_port_equal_7 - computed: false, optional: true, required: false
  private _destinationPortEqual7?: string; 
  public get destinationPortEqual7() {
    return this.getStringAttribute('destination_port_equal_7');
  }
  public set destinationPortEqual7(value: string) {
    this._destinationPortEqual7 = value;
  }
  public resetDestinationPortEqual7() {
    this._destinationPortEqual7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual7Input() {
    return this._destinationPortEqual7;
  }

  // destination_port_equal_8 - computed: false, optional: true, required: false
  private _destinationPortEqual8?: string; 
  public get destinationPortEqual8() {
    return this.getStringAttribute('destination_port_equal_8');
  }
  public set destinationPortEqual8(value: string) {
    this._destinationPortEqual8 = value;
  }
  public resetDestinationPortEqual8() {
    this._destinationPortEqual8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual8Input() {
    return this._destinationPortEqual8;
  }

  // destination_port_equal_9 - computed: false, optional: true, required: false
  private _destinationPortEqual9?: string; 
  public get destinationPortEqual9() {
    return this.getStringAttribute('destination_port_equal_9');
  }
  public set destinationPortEqual9(value: string) {
    this._destinationPortEqual9 = value;
  }
  public resetDestinationPortEqual9() {
    this._destinationPortEqual9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEqual9Input() {
    return this._destinationPortEqual9;
  }

  // destination_port_greater_than - computed: false, optional: true, required: false
  private _destinationPortGreaterThan?: string; 
  public get destinationPortGreaterThan() {
    return this.getStringAttribute('destination_port_greater_than');
  }
  public set destinationPortGreaterThan(value: string) {
    this._destinationPortGreaterThan = value;
  }
  public resetDestinationPortGreaterThan() {
    this._destinationPortGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortGreaterThanInput() {
    return this._destinationPortGreaterThan;
  }

  // destination_port_lesser_than - computed: false, optional: true, required: false
  private _destinationPortLesserThan?: string; 
  public get destinationPortLesserThan() {
    return this.getStringAttribute('destination_port_lesser_than');
  }
  public set destinationPortLesserThan(value: string) {
    this._destinationPortLesserThan = value;
  }
  public resetDestinationPortLesserThan() {
    this._destinationPortLesserThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortLesserThanInput() {
    return this._destinationPortLesserThan;
  }

  // destination_port_range_from - computed: false, optional: true, required: false
  private _destinationPortRangeFrom?: string; 
  public get destinationPortRangeFrom() {
    return this.getStringAttribute('destination_port_range_from');
  }
  public set destinationPortRangeFrom(value: string) {
    this._destinationPortRangeFrom = value;
  }
  public resetDestinationPortRangeFrom() {
    this._destinationPortRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeFromInput() {
    return this._destinationPortRangeFrom;
  }

  // destination_port_range_to - computed: false, optional: true, required: false
  private _destinationPortRangeTo?: string; 
  public get destinationPortRangeTo() {
    return this.getStringAttribute('destination_port_range_to');
  }
  public set destinationPortRangeTo(value: string) {
    this._destinationPortRangeTo = value;
  }
  public resetDestinationPortRangeTo() {
    this._destinationPortRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeToInput() {
    return this._destinationPortRangeTo;
  }

  // destination_prefix - computed: false, optional: true, required: false
  private _destinationPrefix?: string; 
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }
  public set destinationPrefix(value: string) {
    this._destinationPrefix = value;
  }
  public resetDestinationPrefix() {
    this._destinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixInput() {
    return this._destinationPrefix;
  }

  // destination_prefix_mask - computed: false, optional: true, required: false
  private _destinationPrefixMask?: string; 
  public get destinationPrefixMask() {
    return this.getStringAttribute('destination_prefix_mask');
  }
  public set destinationPrefixMask(value: string) {
    this._destinationPrefixMask = value;
  }
  public resetDestinationPrefixMask() {
    this._destinationPrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixMaskInput() {
    return this._destinationPrefixMask;
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

  // icmp_msg_code - computed: false, optional: true, required: false
  private _icmpMsgCode?: number; 
  public get icmpMsgCode() {
    return this.getNumberAttribute('icmp_msg_code');
  }
  public set icmpMsgCode(value: number) {
    this._icmpMsgCode = value;
  }
  public resetIcmpMsgCode() {
    this._icmpMsgCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMsgCodeInput() {
    return this._icmpMsgCode;
  }

  // icmp_msg_type - computed: false, optional: true, required: false
  private _icmpMsgType?: number; 
  public get icmpMsgType() {
    return this.getNumberAttribute('icmp_msg_type');
  }
  public set icmpMsgType(value: number) {
    this._icmpMsgType = value;
  }
  public resetIcmpMsgType() {
    this._icmpMsgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMsgTypeInput() {
    return this._icmpMsgType;
  }

  // icmp_named_msg_type - computed: false, optional: true, required: false
  private _icmpNamedMsgType?: string; 
  public get icmpNamedMsgType() {
    return this.getStringAttribute('icmp_named_msg_type');
  }
  public set icmpNamedMsgType(value: string) {
    this._icmpNamedMsgType = value;
  }
  public resetIcmpNamedMsgType() {
    this._icmpNamedMsgType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpNamedMsgTypeInput() {
    return this._icmpNamedMsgType;
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

  // service_object_group - computed: false, optional: true, required: false
  private _serviceObjectGroup?: string; 
  public get serviceObjectGroup() {
    return this.getStringAttribute('service_object_group');
  }
  public set serviceObjectGroup(value: string) {
    this._serviceObjectGroup = value;
  }
  public resetServiceObjectGroup() {
    this._serviceObjectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceObjectGroupInput() {
    return this._serviceObjectGroup;
  }

  // source_any - computed: false, optional: true, required: false
  private _sourceAny?: boolean | cdktf.IResolvable; 
  public get sourceAny() {
    return this.getBooleanAttribute('source_any');
  }
  public set sourceAny(value: boolean | cdktf.IResolvable) {
    this._sourceAny = value;
  }
  public resetSourceAny() {
    this._sourceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAnyInput() {
    return this._sourceAny;
  }

  // source_host - computed: false, optional: true, required: false
  private _sourceHost?: string; 
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }
  public set sourceHost(value: string) {
    this._sourceHost = value;
  }
  public resetSourceHost() {
    this._sourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHostInput() {
    return this._sourceHost;
  }

  // source_object_group - computed: false, optional: true, required: false
  private _sourceObjectGroup?: string; 
  public get sourceObjectGroup() {
    return this.getStringAttribute('source_object_group');
  }
  public set sourceObjectGroup(value: string) {
    this._sourceObjectGroup = value;
  }
  public resetSourceObjectGroup() {
    this._sourceObjectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectGroupInput() {
    return this._sourceObjectGroup;
  }

  // source_port_equal - computed: false, optional: true, required: false
  private _sourcePortEqual?: string; 
  public get sourcePortEqual() {
    return this.getStringAttribute('source_port_equal');
  }
  public set sourcePortEqual(value: string) {
    this._sourcePortEqual = value;
  }
  public resetSourcePortEqual() {
    this._sourcePortEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortEqualInput() {
    return this._sourcePortEqual;
  }

  // source_port_greater_than - computed: false, optional: true, required: false
  private _sourcePortGreaterThan?: string; 
  public get sourcePortGreaterThan() {
    return this.getStringAttribute('source_port_greater_than');
  }
  public set sourcePortGreaterThan(value: string) {
    this._sourcePortGreaterThan = value;
  }
  public resetSourcePortGreaterThan() {
    this._sourcePortGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortGreaterThanInput() {
    return this._sourcePortGreaterThan;
  }

  // source_port_lesser_than - computed: false, optional: true, required: false
  private _sourcePortLesserThan?: string; 
  public get sourcePortLesserThan() {
    return this.getStringAttribute('source_port_lesser_than');
  }
  public set sourcePortLesserThan(value: string) {
    this._sourcePortLesserThan = value;
  }
  public resetSourcePortLesserThan() {
    this._sourcePortLesserThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortLesserThanInput() {
    return this._sourcePortLesserThan;
  }

  // source_port_range_from - computed: false, optional: true, required: false
  private _sourcePortRangeFrom?: string; 
  public get sourcePortRangeFrom() {
    return this.getStringAttribute('source_port_range_from');
  }
  public set sourcePortRangeFrom(value: string) {
    this._sourcePortRangeFrom = value;
  }
  public resetSourcePortRangeFrom() {
    this._sourcePortRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeFromInput() {
    return this._sourcePortRangeFrom;
  }

  // source_port_range_to - computed: false, optional: true, required: false
  private _sourcePortRangeTo?: string; 
  public get sourcePortRangeTo() {
    return this.getStringAttribute('source_port_range_to');
  }
  public set sourcePortRangeTo(value: string) {
    this._sourcePortRangeTo = value;
  }
  public resetSourcePortRangeTo() {
    this._sourcePortRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeToInput() {
    return this._sourcePortRangeTo;
  }

  // source_prefix - computed: false, optional: true, required: false
  private _sourcePrefix?: string; 
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }
  public set sourcePrefix(value: string) {
    this._sourcePrefix = value;
  }
  public resetSourcePrefix() {
    this._sourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixInput() {
    return this._sourcePrefix;
  }

  // source_prefix_mask - computed: false, optional: true, required: false
  private _sourcePrefixMask?: string; 
  public get sourcePrefixMask() {
    return this.getStringAttribute('source_prefix_mask');
  }
  public set sourcePrefixMask(value: string) {
    this._sourcePrefixMask = value;
  }
  public resetSourcePrefixMask() {
    this._sourcePrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixMaskInput() {
    return this._sourcePrefixMask;
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

export class AccessListExtendedEntriesList extends cdktf.ComplexList {
  public internalValue? : AccessListExtendedEntries[] | cdktf.IResolvable

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
  public get(index: number): AccessListExtendedEntriesOutputReference {
    return new AccessListExtendedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended iosxe_access_list_extended}
*/
export class AccessListExtended extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_extended";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessListExtended resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessListExtended to import
  * @param importFromId The id of the existing AccessListExtended that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessListExtended to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_extended", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/access_list_extended iosxe_access_list_extended} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListExtendedConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListExtendedConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_extended',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
  private _entries = new AccessListExtendedEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: AccessListExtendedEntries[] | cdktf.IResolvable) {
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
      entries: cdktf.listMapper(accessListExtendedEntriesToTerraform, false)(this._entries.internalValue),
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
        value: cdktf.listMapperHcl(accessListExtendedEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessListExtendedEntriesList",
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
