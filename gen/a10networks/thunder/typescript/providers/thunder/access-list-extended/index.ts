// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessListExtendedConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP extended access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#extd AccessListExtended#extd}
  */
  readonly extd: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#id AccessListExtended#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#uuid AccessListExtended#uuid}
  */
  readonly uuid?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#rules AccessListExtended#rules}
  */
  readonly rules?: AccessListExtendedRules[] | cdktf.IResolvable;
}
export interface AccessListExtendedRules {
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#acl_log AccessListExtended#acl_log}
  */
  readonly aclLog?: number;
  /**
  * Any ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#any_code AccessListExtended#any_code}
  */
  readonly anyCode?: number;
  /**
  * Any ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#any_type AccessListExtended#any_type}
  */
  readonly anyType?: number;
  /**
  * DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dscp AccessListExtended#dscp}
  */
  readonly dscp?: number;
  /**
  * Any destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_any AccessListExtended#dst_any}
  */
  readonly dstAny?: number;
  /**
  * Match only packets on a given destination port (port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_eq AccessListExtended#dst_eq}
  */
  readonly dstEq?: number;
  /**
  * Match only packets with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_gt AccessListExtended#dst_gt}
  */
  readonly dstGt?: number;
  /**
  * A single destination host (Host address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_host AccessListExtended#dst_host}
  */
  readonly dstHost?: string;
  /**
  * Match only packets with a lesser port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_lt AccessListExtended#dst_lt}
  */
  readonly dstLt?: number;
  /**
  * Destination Mask 0=apply 255=ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_mask AccessListExtended#dst_mask}
  */
  readonly dstMask?: string;
  /**
  * Destination network object group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_object_group AccessListExtended#dst_object_group}
  */
  readonly dstObjectGroup?: string;
  /**
  * Edning Destination Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_port_end AccessListExtended#dst_port_end}
  */
  readonly dstPortEnd?: number;
  /**
  * Match only packets in the range of port numbers (Starting Destination Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_range AccessListExtended#dst_range}
  */
  readonly dstRange?: number;
  /**
  * Destination Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#dst_subnet AccessListExtended#dst_subnet}
  */
  readonly dstSubnet?: string;
  /**
  * TCP established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#established AccessListExtended#established}
  */
  readonly established?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#ethernet AccessListExtended#ethernet}
  */
  readonly ethernet?: number;
  /**
  * 'deny': Deny; 'permit': Permit; 'l3-vlan-fwd-disable': Disable L3 forwarding between VLANs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#extd_action AccessListExtended#extd_action}
  */
  readonly extdAction?: string;
  /**
  * Access list entry comment (Notes for this ACL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#extd_remark AccessListExtended#extd_remark}
  */
  readonly extdRemark?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#extd_seq_num AccessListExtended#extd_seq_num}
  */
  readonly extdSeqNum?: number;
  /**
  * IP fragments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#fragments AccessListExtended#fragments}
  */
  readonly fragments?: number;
  /**
  * Internet Control Message Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#icmp AccessListExtended#icmp}
  */
  readonly icmp?: number;
  /**
  * ICMP code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#icmp_code AccessListExtended#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#icmp_type AccessListExtended#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Any Internet Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#ip AccessListExtended#ip}
  */
  readonly ip?: number;
  /**
  * Service object group (Source object group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#service_obj_group AccessListExtended#service_obj_group}
  */
  readonly serviceObjGroup?: string;
  /**
  * 'frag-required': Code 4, fragmentation required; 'host-unreachable': Code 1, destination host unreachable; 'network-unreachable': Code 0, destination network unreachable; 'port-unreachable': Code 3, destination port unreachable; 'proto-unreachable': Code 2, destination protocol unreachable; 'route-failed': Code 5, source route failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#special_code AccessListExtended#special_code}
  */
  readonly specialCode?: string;
  /**
  * 'echo-reply': Type 0, echo reply; 'echo-request': Type 8, echo request; 'info-reply': Type 16, information reply; 'info-request': Type 15, information request; 'mask-reply': Type 18, address mask reply; 'mask-request': Type 17, address mask request; 'parameter-problem': Type 12, parameter problem; 'redirect': Type 5, redirect message; 'source-quench': Type 4, source quench; 'time-exceeded': Type 11, time exceeded; 'timestamp': Type 13, timestamp; 'timestamp-reply': Type 14, timestamp reply; 'dest-unreachable': Type 3, destination unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#special_type AccessListExtended#special_type}
  */
  readonly specialType?: string;
  /**
  * Any source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_any AccessListExtended#src_any}
  */
  readonly srcAny?: number;
  /**
  * Match only packets on a given source port (port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_eq AccessListExtended#src_eq}
  */
  readonly srcEq?: number;
  /**
  * Match only packets with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_gt AccessListExtended#src_gt}
  */
  readonly srcGt?: number;
  /**
  * A single source host (Host address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_host AccessListExtended#src_host}
  */
  readonly srcHost?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_lt AccessListExtended#src_lt}
  */
  readonly srcLt?: number;
  /**
  * Source Mask 0=apply 255=ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_mask AccessListExtended#src_mask}
  */
  readonly srcMask?: string;
  /**
  * Network object group (Source network object group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_object_group AccessListExtended#src_object_group}
  */
  readonly srcObjectGroup?: string;
  /**
  * Ending Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_port_end AccessListExtended#src_port_end}
  */
  readonly srcPortEnd?: number;
  /**
  * match only packets in the range of port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_range AccessListExtended#src_range}
  */
  readonly srcRange?: number;
  /**
  * Source Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#src_subnet AccessListExtended#src_subnet}
  */
  readonly srcSubnet?: string;
  /**
  * protocol TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#tcp AccessListExtended#tcp}
  */
  readonly tcp?: number;
  /**
  * Only log transparent sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#transparent_session_only AccessListExtended#transparent_session_only}
  */
  readonly transparentSessionOnly?: number;
  /**
  * Ethernet trunk (trunk number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#trunk AccessListExtended#trunk}
  */
  readonly trunk?: number;
  /**
  * protocol UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#udp AccessListExtended#udp}
  */
  readonly udp?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#vlan AccessListExtended#vlan}
  */
  readonly vlan?: number;
}

export function accessListExtendedRulesToTerraform(struct?: AccessListExtendedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_log: cdktf.numberToTerraform(struct!.aclLog),
    any_code: cdktf.numberToTerraform(struct!.anyCode),
    any_type: cdktf.numberToTerraform(struct!.anyType),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    dst_any: cdktf.numberToTerraform(struct!.dstAny),
    dst_eq: cdktf.numberToTerraform(struct!.dstEq),
    dst_gt: cdktf.numberToTerraform(struct!.dstGt),
    dst_host: cdktf.stringToTerraform(struct!.dstHost),
    dst_lt: cdktf.numberToTerraform(struct!.dstLt),
    dst_mask: cdktf.stringToTerraform(struct!.dstMask),
    dst_object_group: cdktf.stringToTerraform(struct!.dstObjectGroup),
    dst_port_end: cdktf.numberToTerraform(struct!.dstPortEnd),
    dst_range: cdktf.numberToTerraform(struct!.dstRange),
    dst_subnet: cdktf.stringToTerraform(struct!.dstSubnet),
    established: cdktf.numberToTerraform(struct!.established),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    extd_action: cdktf.stringToTerraform(struct!.extdAction),
    extd_remark: cdktf.stringToTerraform(struct!.extdRemark),
    extd_seq_num: cdktf.numberToTerraform(struct!.extdSeqNum),
    fragments: cdktf.numberToTerraform(struct!.fragments),
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    ip: cdktf.numberToTerraform(struct!.ip),
    service_obj_group: cdktf.stringToTerraform(struct!.serviceObjGroup),
    special_code: cdktf.stringToTerraform(struct!.specialCode),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    src_any: cdktf.numberToTerraform(struct!.srcAny),
    src_eq: cdktf.numberToTerraform(struct!.srcEq),
    src_gt: cdktf.numberToTerraform(struct!.srcGt),
    src_host: cdktf.stringToTerraform(struct!.srcHost),
    src_lt: cdktf.numberToTerraform(struct!.srcLt),
    src_mask: cdktf.stringToTerraform(struct!.srcMask),
    src_object_group: cdktf.stringToTerraform(struct!.srcObjectGroup),
    src_port_end: cdktf.numberToTerraform(struct!.srcPortEnd),
    src_range: cdktf.numberToTerraform(struct!.srcRange),
    src_subnet: cdktf.stringToTerraform(struct!.srcSubnet),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    transparent_session_only: cdktf.numberToTerraform(struct!.transparentSessionOnly),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    udp: cdktf.numberToTerraform(struct!.udp),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function accessListExtendedRulesToHclTerraform(struct?: AccessListExtendedRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_log: {
      value: cdktf.numberToHclTerraform(struct!.aclLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    any_code: {
      value: cdktf.numberToHclTerraform(struct!.anyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    any_type: {
      value: cdktf.numberToHclTerraform(struct!.anyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_any: {
      value: cdktf.numberToHclTerraform(struct!.dstAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_eq: {
      value: cdktf.numberToHclTerraform(struct!.dstEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_gt: {
      value: cdktf.numberToHclTerraform(struct!.dstGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_host: {
      value: cdktf.stringToHclTerraform(struct!.dstHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_lt: {
      value: cdktf.numberToHclTerraform(struct!.dstLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_mask: {
      value: cdktf.stringToHclTerraform(struct!.dstMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_object_group: {
      value: cdktf.stringToHclTerraform(struct!.dstObjectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port_end: {
      value: cdktf.numberToHclTerraform(struct!.dstPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_range: {
      value: cdktf.numberToHclTerraform(struct!.dstRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_subnet: {
      value: cdktf.stringToHclTerraform(struct!.dstSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    established: {
      value: cdktf.numberToHclTerraform(struct!.established),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extd_action: {
      value: cdktf.stringToHclTerraform(struct!.extdAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extd_remark: {
      value: cdktf.stringToHclTerraform(struct!.extdRemark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extd_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.extdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragments: {
      value: cdktf.numberToHclTerraform(struct!.fragments),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
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
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_obj_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceObjGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_code: {
      value: cdktf.stringToHclTerraform(struct!.specialCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_type: {
      value: cdktf.stringToHclTerraform(struct!.specialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_any: {
      value: cdktf.numberToHclTerraform(struct!.srcAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_eq: {
      value: cdktf.numberToHclTerraform(struct!.srcEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_gt: {
      value: cdktf.numberToHclTerraform(struct!.srcGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_host: {
      value: cdktf.stringToHclTerraform(struct!.srcHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_lt: {
      value: cdktf.numberToHclTerraform(struct!.srcLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_mask: {
      value: cdktf.stringToHclTerraform(struct!.srcMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_object_group: {
      value: cdktf.stringToHclTerraform(struct!.srcObjectGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port_end: {
      value: cdktf.numberToHclTerraform(struct!.srcPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_range: {
      value: cdktf.numberToHclTerraform(struct!.srcRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_subnet: {
      value: cdktf.stringToHclTerraform(struct!.srcSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transparent_session_only: {
      value: cdktf.numberToHclTerraform(struct!.transparentSessionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessListExtendedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessListExtendedRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclLog = this._aclLog;
    }
    if (this._anyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyCode = this._anyCode;
    }
    if (this._anyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyType = this._anyType;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._dstAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAny = this._dstAny;
    }
    if (this._dstEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEq = this._dstEq;
    }
    if (this._dstGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstGt = this._dstGt;
    }
    if (this._dstHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHost = this._dstHost;
    }
    if (this._dstLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstLt = this._dstLt;
    }
    if (this._dstMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMask = this._dstMask;
    }
    if (this._dstObjectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstObjectGroup = this._dstObjectGroup;
    }
    if (this._dstPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortEnd = this._dstPortEnd;
    }
    if (this._dstRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRange = this._dstRange;
    }
    if (this._dstSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSubnet = this._dstSubnet;
    }
    if (this._established !== undefined) {
      hasAnyValues = true;
      internalValueResult.established = this._established;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._extdAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.extdAction = this._extdAction;
    }
    if (this._extdRemark !== undefined) {
      hasAnyValues = true;
      internalValueResult.extdRemark = this._extdRemark;
    }
    if (this._extdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.extdSeqNum = this._extdSeqNum;
    }
    if (this._fragments !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragments = this._fragments;
    }
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._serviceObjGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceObjGroup = this._serviceObjGroup;
    }
    if (this._specialCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCode = this._specialCode;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._srcAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAny = this._srcAny;
    }
    if (this._srcEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEq = this._srcEq;
    }
    if (this._srcGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcGt = this._srcGt;
    }
    if (this._srcHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHost = this._srcHost;
    }
    if (this._srcLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLt = this._srcLt;
    }
    if (this._srcMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMask = this._srcMask;
    }
    if (this._srcObjectGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcObjectGroup = this._srcObjectGroup;
    }
    if (this._srcPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortEnd = this._srcPortEnd;
    }
    if (this._srcRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRange = this._srcRange;
    }
    if (this._srcSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSubnet = this._srcSubnet;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._transparentSessionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparentSessionOnly = this._transparentSessionOnly;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessListExtendedRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclLog = undefined;
      this._anyCode = undefined;
      this._anyType = undefined;
      this._dscp = undefined;
      this._dstAny = undefined;
      this._dstEq = undefined;
      this._dstGt = undefined;
      this._dstHost = undefined;
      this._dstLt = undefined;
      this._dstMask = undefined;
      this._dstObjectGroup = undefined;
      this._dstPortEnd = undefined;
      this._dstRange = undefined;
      this._dstSubnet = undefined;
      this._established = undefined;
      this._ethernet = undefined;
      this._extdAction = undefined;
      this._extdRemark = undefined;
      this._extdSeqNum = undefined;
      this._fragments = undefined;
      this._icmp = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._ip = undefined;
      this._serviceObjGroup = undefined;
      this._specialCode = undefined;
      this._specialType = undefined;
      this._srcAny = undefined;
      this._srcEq = undefined;
      this._srcGt = undefined;
      this._srcHost = undefined;
      this._srcLt = undefined;
      this._srcMask = undefined;
      this._srcObjectGroup = undefined;
      this._srcPortEnd = undefined;
      this._srcRange = undefined;
      this._srcSubnet = undefined;
      this._tcp = undefined;
      this._transparentSessionOnly = undefined;
      this._trunk = undefined;
      this._udp = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclLog = value.aclLog;
      this._anyCode = value.anyCode;
      this._anyType = value.anyType;
      this._dscp = value.dscp;
      this._dstAny = value.dstAny;
      this._dstEq = value.dstEq;
      this._dstGt = value.dstGt;
      this._dstHost = value.dstHost;
      this._dstLt = value.dstLt;
      this._dstMask = value.dstMask;
      this._dstObjectGroup = value.dstObjectGroup;
      this._dstPortEnd = value.dstPortEnd;
      this._dstRange = value.dstRange;
      this._dstSubnet = value.dstSubnet;
      this._established = value.established;
      this._ethernet = value.ethernet;
      this._extdAction = value.extdAction;
      this._extdRemark = value.extdRemark;
      this._extdSeqNum = value.extdSeqNum;
      this._fragments = value.fragments;
      this._icmp = value.icmp;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._ip = value.ip;
      this._serviceObjGroup = value.serviceObjGroup;
      this._specialCode = value.specialCode;
      this._specialType = value.specialType;
      this._srcAny = value.srcAny;
      this._srcEq = value.srcEq;
      this._srcGt = value.srcGt;
      this._srcHost = value.srcHost;
      this._srcLt = value.srcLt;
      this._srcMask = value.srcMask;
      this._srcObjectGroup = value.srcObjectGroup;
      this._srcPortEnd = value.srcPortEnd;
      this._srcRange = value.srcRange;
      this._srcSubnet = value.srcSubnet;
      this._tcp = value.tcp;
      this._transparentSessionOnly = value.transparentSessionOnly;
      this._trunk = value.trunk;
      this._udp = value.udp;
      this._vlan = value.vlan;
    }
  }

  // acl_log - computed: false, optional: true, required: false
  private _aclLog?: number; 
  public get aclLog() {
    return this.getNumberAttribute('acl_log');
  }
  public set aclLog(value: number) {
    this._aclLog = value;
  }
  public resetAclLog() {
    this._aclLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclLogInput() {
    return this._aclLog;
  }

  // any_code - computed: false, optional: true, required: false
  private _anyCode?: number; 
  public get anyCode() {
    return this.getNumberAttribute('any_code');
  }
  public set anyCode(value: number) {
    this._anyCode = value;
  }
  public resetAnyCode() {
    this._anyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyCodeInput() {
    return this._anyCode;
  }

  // any_type - computed: false, optional: true, required: false
  private _anyType?: number; 
  public get anyType() {
    return this.getNumberAttribute('any_type');
  }
  public set anyType(value: number) {
    this._anyType = value;
  }
  public resetAnyType() {
    this._anyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTypeInput() {
    return this._anyType;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // dst_any - computed: false, optional: true, required: false
  private _dstAny?: number; 
  public get dstAny() {
    return this.getNumberAttribute('dst_any');
  }
  public set dstAny(value: number) {
    this._dstAny = value;
  }
  public resetDstAny() {
    this._dstAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAnyInput() {
    return this._dstAny;
  }

  // dst_eq - computed: false, optional: true, required: false
  private _dstEq?: number; 
  public get dstEq() {
    return this.getNumberAttribute('dst_eq');
  }
  public set dstEq(value: number) {
    this._dstEq = value;
  }
  public resetDstEq() {
    this._dstEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEqInput() {
    return this._dstEq;
  }

  // dst_gt - computed: false, optional: true, required: false
  private _dstGt?: number; 
  public get dstGt() {
    return this.getNumberAttribute('dst_gt');
  }
  public set dstGt(value: number) {
    this._dstGt = value;
  }
  public resetDstGt() {
    this._dstGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstGtInput() {
    return this._dstGt;
  }

  // dst_host - computed: false, optional: true, required: false
  private _dstHost?: string; 
  public get dstHost() {
    return this.getStringAttribute('dst_host');
  }
  public set dstHost(value: string) {
    this._dstHost = value;
  }
  public resetDstHost() {
    this._dstHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHostInput() {
    return this._dstHost;
  }

  // dst_lt - computed: false, optional: true, required: false
  private _dstLt?: number; 
  public get dstLt() {
    return this.getNumberAttribute('dst_lt');
  }
  public set dstLt(value: number) {
    this._dstLt = value;
  }
  public resetDstLt() {
    this._dstLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLtInput() {
    return this._dstLt;
  }

  // dst_mask - computed: false, optional: true, required: false
  private _dstMask?: string; 
  public get dstMask() {
    return this.getStringAttribute('dst_mask');
  }
  public set dstMask(value: string) {
    this._dstMask = value;
  }
  public resetDstMask() {
    this._dstMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMaskInput() {
    return this._dstMask;
  }

  // dst_object_group - computed: false, optional: true, required: false
  private _dstObjectGroup?: string; 
  public get dstObjectGroup() {
    return this.getStringAttribute('dst_object_group');
  }
  public set dstObjectGroup(value: string) {
    this._dstObjectGroup = value;
  }
  public resetDstObjectGroup() {
    this._dstObjectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstObjectGroupInput() {
    return this._dstObjectGroup;
  }

  // dst_port_end - computed: false, optional: true, required: false
  private _dstPortEnd?: number; 
  public get dstPortEnd() {
    return this.getNumberAttribute('dst_port_end');
  }
  public set dstPortEnd(value: number) {
    this._dstPortEnd = value;
  }
  public resetDstPortEnd() {
    this._dstPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortEndInput() {
    return this._dstPortEnd;
  }

  // dst_range - computed: false, optional: true, required: false
  private _dstRange?: number; 
  public get dstRange() {
    return this.getNumberAttribute('dst_range');
  }
  public set dstRange(value: number) {
    this._dstRange = value;
  }
  public resetDstRange() {
    this._dstRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRangeInput() {
    return this._dstRange;
  }

  // dst_subnet - computed: false, optional: true, required: false
  private _dstSubnet?: string; 
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }
  public set dstSubnet(value: string) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // established - computed: false, optional: true, required: false
  private _established?: number; 
  public get established() {
    return this.getNumberAttribute('established');
  }
  public set established(value: number) {
    this._established = value;
  }
  public resetEstablished() {
    this._established = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedInput() {
    return this._established;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // extd_action - computed: false, optional: true, required: false
  private _extdAction?: string; 
  public get extdAction() {
    return this.getStringAttribute('extd_action');
  }
  public set extdAction(value: string) {
    this._extdAction = value;
  }
  public resetExtdAction() {
    this._extdAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extdActionInput() {
    return this._extdAction;
  }

  // extd_remark - computed: false, optional: true, required: false
  private _extdRemark?: string; 
  public get extdRemark() {
    return this.getStringAttribute('extd_remark');
  }
  public set extdRemark(value: string) {
    this._extdRemark = value;
  }
  public resetExtdRemark() {
    this._extdRemark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extdRemarkInput() {
    return this._extdRemark;
  }

  // extd_seq_num - computed: false, optional: true, required: false
  private _extdSeqNum?: number; 
  public get extdSeqNum() {
    return this.getNumberAttribute('extd_seq_num');
  }
  public set extdSeqNum(value: number) {
    this._extdSeqNum = value;
  }
  public resetExtdSeqNum() {
    this._extdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extdSeqNumInput() {
    return this._extdSeqNum;
  }

  // fragments - computed: false, optional: true, required: false
  private _fragments?: number; 
  public get fragments() {
    return this.getNumberAttribute('fragments');
  }
  public set fragments(value: number) {
    this._fragments = value;
  }
  public resetFragments() {
    this._fragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentsInput() {
    return this._fragments;
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

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // service_obj_group - computed: false, optional: true, required: false
  private _serviceObjGroup?: string; 
  public get serviceObjGroup() {
    return this.getStringAttribute('service_obj_group');
  }
  public set serviceObjGroup(value: string) {
    this._serviceObjGroup = value;
  }
  public resetServiceObjGroup() {
    this._serviceObjGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceObjGroupInput() {
    return this._serviceObjGroup;
  }

  // special_code - computed: false, optional: true, required: false
  private _specialCode?: string; 
  public get specialCode() {
    return this.getStringAttribute('special_code');
  }
  public set specialCode(value: string) {
    this._specialCode = value;
  }
  public resetSpecialCode() {
    this._specialCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCodeInput() {
    return this._specialCode;
  }

  // special_type - computed: false, optional: true, required: false
  private _specialType?: string; 
  public get specialType() {
    return this.getStringAttribute('special_type');
  }
  public set specialType(value: string) {
    this._specialType = value;
  }
  public resetSpecialType() {
    this._specialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialTypeInput() {
    return this._specialType;
  }

  // src_any - computed: false, optional: true, required: false
  private _srcAny?: number; 
  public get srcAny() {
    return this.getNumberAttribute('src_any');
  }
  public set srcAny(value: number) {
    this._srcAny = value;
  }
  public resetSrcAny() {
    this._srcAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAnyInput() {
    return this._srcAny;
  }

  // src_eq - computed: false, optional: true, required: false
  private _srcEq?: number; 
  public get srcEq() {
    return this.getNumberAttribute('src_eq');
  }
  public set srcEq(value: number) {
    this._srcEq = value;
  }
  public resetSrcEq() {
    this._srcEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEqInput() {
    return this._srcEq;
  }

  // src_gt - computed: false, optional: true, required: false
  private _srcGt?: number; 
  public get srcGt() {
    return this.getNumberAttribute('src_gt');
  }
  public set srcGt(value: number) {
    this._srcGt = value;
  }
  public resetSrcGt() {
    this._srcGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcGtInput() {
    return this._srcGt;
  }

  // src_host - computed: false, optional: true, required: false
  private _srcHost?: string; 
  public get srcHost() {
    return this.getStringAttribute('src_host');
  }
  public set srcHost(value: string) {
    this._srcHost = value;
  }
  public resetSrcHost() {
    this._srcHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHostInput() {
    return this._srcHost;
  }

  // src_lt - computed: false, optional: true, required: false
  private _srcLt?: number; 
  public get srcLt() {
    return this.getNumberAttribute('src_lt');
  }
  public set srcLt(value: number) {
    this._srcLt = value;
  }
  public resetSrcLt() {
    this._srcLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLtInput() {
    return this._srcLt;
  }

  // src_mask - computed: false, optional: true, required: false
  private _srcMask?: string; 
  public get srcMask() {
    return this.getStringAttribute('src_mask');
  }
  public set srcMask(value: string) {
    this._srcMask = value;
  }
  public resetSrcMask() {
    this._srcMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMaskInput() {
    return this._srcMask;
  }

  // src_object_group - computed: false, optional: true, required: false
  private _srcObjectGroup?: string; 
  public get srcObjectGroup() {
    return this.getStringAttribute('src_object_group');
  }
  public set srcObjectGroup(value: string) {
    this._srcObjectGroup = value;
  }
  public resetSrcObjectGroup() {
    this._srcObjectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcObjectGroupInput() {
    return this._srcObjectGroup;
  }

  // src_port_end - computed: false, optional: true, required: false
  private _srcPortEnd?: number; 
  public get srcPortEnd() {
    return this.getNumberAttribute('src_port_end');
  }
  public set srcPortEnd(value: number) {
    this._srcPortEnd = value;
  }
  public resetSrcPortEnd() {
    this._srcPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortEndInput() {
    return this._srcPortEnd;
  }

  // src_range - computed: false, optional: true, required: false
  private _srcRange?: number; 
  public get srcRange() {
    return this.getNumberAttribute('src_range');
  }
  public set srcRange(value: number) {
    this._srcRange = value;
  }
  public resetSrcRange() {
    this._srcRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRangeInput() {
    return this._srcRange;
  }

  // src_subnet - computed: false, optional: true, required: false
  private _srcSubnet?: string; 
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
  public set srcSubnet(value: string) {
    this._srcSubnet = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet;
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

  // transparent_session_only - computed: false, optional: true, required: false
  private _transparentSessionOnly?: number; 
  public get transparentSessionOnly() {
    return this.getNumberAttribute('transparent_session_only');
  }
  public set transparentSessionOnly(value: number) {
    this._transparentSessionOnly = value;
  }
  public resetTransparentSessionOnly() {
    this._transparentSessionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentSessionOnlyInput() {
    return this._transparentSessionOnly;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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
}

export class AccessListExtendedRulesList extends cdktf.ComplexList {
  public internalValue? : AccessListExtendedRules[] | cdktf.IResolvable

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
  public get(index: number): AccessListExtendedRulesOutputReference {
    return new AccessListExtendedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended thunder_access_list_extended}
*/
export class AccessListExtended extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_access_list_extended";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessListExtended resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessListExtended to import
  * @param importFromId The id of the existing AccessListExtended that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessListExtended to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_access_list_extended", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/access_list_extended thunder_access_list_extended} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessListExtendedConfig
  */
  public constructor(scope: Construct, id: string, config: AccessListExtendedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_access_list_extended',
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
    this._extd = config.extd;
    this._id = config.id;
    this._uuid = config.uuid;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extd - computed: false, optional: false, required: true
  private _extd?: number; 
  public get extd() {
    return this.getNumberAttribute('extd');
  }
  public set extd(value: number) {
    this._extd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extdInput() {
    return this._extd;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new AccessListExtendedRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AccessListExtendedRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extd: cdktf.numberToTerraform(this._extd),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules: cdktf.listMapper(accessListExtendedRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extd: {
        value: cdktf.numberToHclTerraform(this._extd),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(accessListExtendedRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessListExtendedRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
