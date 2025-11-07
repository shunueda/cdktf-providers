// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectGroupServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the object-group instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#description ObjectGroupService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#id ObjectGroupService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service Object Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#svc_name ObjectGroupService#svc_name}
  */
  readonly svcName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#user_tag ObjectGroupService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#uuid ObjectGroupService#uuid}
  */
  readonly uuid?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#rules ObjectGroupService#rules}
  */
  readonly rules?: ObjectGroupServiceRules[] | cdktf.IResolvable;
}
export interface ObjectGroupServiceRules {
  /**
  * 'FTP': Specify FTP ALG port range; 'TFTP': Specify TFTP ALG port range; 'SIP': Specify SIP ALG port range; 'DNS': Specify DNS ALG port range; 'PPTP': Specify PPTP ALG port range; 'RTSP': Specify RTSP ALG port range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#alg ObjectGroupService#alg}
  */
  readonly alg?: string;
  /**
  * Any ICMP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#any_code ObjectGroupService#any_code}
  */
  readonly anyCode?: number;
  /**
  * Any ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#any_type ObjectGroupService#any_type}
  */
  readonly anyType?: number;
  /**
  * Match only packets on a given destination port (port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#eq_dst ObjectGroupService#eq_dst}
  */
  readonly eqDst?: number;
  /**
  * Match only packets on a given source port (port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#eq_src ObjectGroupService#eq_src}
  */
  readonly eqSrc?: number;
  /**
  * Match only packets with a greater destination port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#gt_dst ObjectGroupService#gt_dst}
  */
  readonly gtDst?: number;
  /**
  * Match only packets with a greater source port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#gt_src ObjectGroupService#gt_src}
  */
  readonly gtSrc?: number;
  /**
  * Internet Control Message Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmp ObjectGroupService#icmp}
  */
  readonly icmp?: number;
  /**
  * ICMP code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmp_code ObjectGroupService#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * ICMP type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmp_type ObjectGroupService#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Internet Control Message Protocol version 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmpv6 ObjectGroupService#icmpv6}
  */
  readonly icmpv6?: number;
  /**
  * ICMPv6 code number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmpv6_code ObjectGroupService#icmpv6_code}
  */
  readonly icmpv6Code?: number;
  /**
  * ICMPv6 type number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#icmpv6_type ObjectGroupService#icmpv6_type}
  */
  readonly icmpv6Type?: number;
  /**
  * Match only packets with a lesser destination port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#lt_dst ObjectGroupService#lt_dst}
  */
  readonly ltDst?: number;
  /**
  * Match only packets with a lower source port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#lt_src ObjectGroupService#lt_src}
  */
  readonly ltSrc?: number;
  /**
  * Ending Destination Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#port_num_end_dst ObjectGroupService#port_num_end_dst}
  */
  readonly portNumEndDst?: number;
  /**
  * Ending Source Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#port_num_end_src ObjectGroupService#port_num_end_src}
  */
  readonly portNumEndSrc?: number;
  /**
  * Protocol ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#protocol_id ObjectGroupService#protocol_id}
  */
  readonly protocolId?: number;
  /**
  * Match only packets in the range of destination port numbers (Starting Destination Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#range_dst ObjectGroupService#range_dst}
  */
  readonly rangeDst?: number;
  /**
  * match only packets in the range of source port numbers (Starting Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#range_src ObjectGroupService#range_src}
  */
  readonly rangeSrc?: number;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#seq_num ObjectGroupService#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Source Port Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#source ObjectGroupService#source}
  */
  readonly source?: number;
  /**
  * 'frag-required': Code 4, fragmentation required; 'host-unreachable': Code 1, destination host unreachable; 'network-unreachable': Code 0, destination network unreachable; 'port-unreachable': Code 3, destination port unreachable; 'proto-unreachable': Code 2, destination protocol unreachable; 'route-failed': Code 5, source route failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#special_code ObjectGroupService#special_code}
  */
  readonly specialCode?: string;
  /**
  * 'echo-reply': Type 0, echo reply; 'echo-request': Type 8, echo request; 'info-reply': Type 16, information reply; 'info-request': Type 15, information request; 'mask-reply': Type 18, address mask reply; 'mask-request': Type 17, address mask request; 'parameter-problem': Type 12, parameter problem; 'redirect': Type 5, redirect message; 'source-quench': Type 4, source quench; 'time-exceeded': Type 11, time exceeded; 'timestamp': Type 13, timestamp; 'timestamp-reply': Type 14, timestamp reply; 'dest-unreachable': Type 3, destination unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#special_type ObjectGroupService#special_type}
  */
  readonly specialType?: string;
  /**
  * 'addr-unreachable': Code 3, address unreachable; 'admin-prohibited': Code 1, admin prohibited; 'no-route': Code 0, no route to destination; 'not-neighbour': Code 2, not neighbor; 'port-unreachable': Code 4, destination port unreachable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#special_v6_code ObjectGroupService#special_v6_code}
  */
  readonly specialV6Code?: string;
  /**
  * 'dest-unreachable': Type 1, destination unreachable; 'echo-reply': Type 129, echo reply; 'echo-request': Type 128, echo request; 'packet-too-big': Type 2, packet too big; 'param-prob': Type 4, parameter problem; 'time-exceeded': Type 3, time exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#special_v6_type ObjectGroupService#special_v6_type}
  */
  readonly specialV6Type?: string;
  /**
  * 'tcp': Protocol TCP; 'udp': Protocol UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#tcp_udp ObjectGroupService#tcp_udp}
  */
  readonly tcpUdp?: string;
  /**
  * Any ICMPv6 code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#v6_any_code ObjectGroupService#v6_any_code}
  */
  readonly v6AnyCode?: number;
  /**
  * Any ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#v6_any_type ObjectGroupService#v6_any_type}
  */
  readonly v6AnyType?: number;
}

export function objectGroupServiceRulesToTerraform(struct?: ObjectGroupServiceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    any_code: cdktf.numberToTerraform(struct!.anyCode),
    any_type: cdktf.numberToTerraform(struct!.anyType),
    eq_dst: cdktf.numberToTerraform(struct!.eqDst),
    eq_src: cdktf.numberToTerraform(struct!.eqSrc),
    gt_dst: cdktf.numberToTerraform(struct!.gtDst),
    gt_src: cdktf.numberToTerraform(struct!.gtSrc),
    icmp: cdktf.numberToTerraform(struct!.icmp),
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    icmpv6: cdktf.numberToTerraform(struct!.icmpv6),
    icmpv6_code: cdktf.numberToTerraform(struct!.icmpv6Code),
    icmpv6_type: cdktf.numberToTerraform(struct!.icmpv6Type),
    lt_dst: cdktf.numberToTerraform(struct!.ltDst),
    lt_src: cdktf.numberToTerraform(struct!.ltSrc),
    port_num_end_dst: cdktf.numberToTerraform(struct!.portNumEndDst),
    port_num_end_src: cdktf.numberToTerraform(struct!.portNumEndSrc),
    protocol_id: cdktf.numberToTerraform(struct!.protocolId),
    range_dst: cdktf.numberToTerraform(struct!.rangeDst),
    range_src: cdktf.numberToTerraform(struct!.rangeSrc),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    source: cdktf.numberToTerraform(struct!.source),
    special_code: cdktf.stringToTerraform(struct!.specialCode),
    special_type: cdktf.stringToTerraform(struct!.specialType),
    special_v6_code: cdktf.stringToTerraform(struct!.specialV6Code),
    special_v6_type: cdktf.stringToTerraform(struct!.specialV6Type),
    tcp_udp: cdktf.stringToTerraform(struct!.tcpUdp),
    v6_any_code: cdktf.numberToTerraform(struct!.v6AnyCode),
    v6_any_type: cdktf.numberToTerraform(struct!.v6AnyType),
  }
}


export function objectGroupServiceRulesToHclTerraform(struct?: ObjectGroupServiceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    eq_dst: {
      value: cdktf.numberToHclTerraform(struct!.eqDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eq_src: {
      value: cdktf.numberToHclTerraform(struct!.eqSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_dst: {
      value: cdktf.numberToHclTerraform(struct!.gtDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gt_src: {
      value: cdktf.numberToHclTerraform(struct!.gtSrc),
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
    icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_dst: {
      value: cdktf.numberToHclTerraform(struct!.ltDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lt_src: {
      value: cdktf.numberToHclTerraform(struct!.ltSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end_dst: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_end_src: {
      value: cdktf.numberToHclTerraform(struct!.portNumEndSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_id: {
      value: cdktf.numberToHclTerraform(struct!.protocolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_dst: {
      value: cdktf.numberToHclTerraform(struct!.rangeDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_src: {
      value: cdktf.numberToHclTerraform(struct!.rangeSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.numberToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    special_v6_code: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_v6_type: {
      value: cdktf.stringToHclTerraform(struct!.specialV6Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_udp: {
      value: cdktf.stringToHclTerraform(struct!.tcpUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_any_code: {
      value: cdktf.numberToHclTerraform(struct!.v6AnyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_any_type: {
      value: cdktf.numberToHclTerraform(struct!.v6AnyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectGroupServiceRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectGroupServiceRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._anyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyCode = this._anyCode;
    }
    if (this._anyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyType = this._anyType;
    }
    if (this._eqDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqDst = this._eqDst;
    }
    if (this._eqSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.eqSrc = this._eqSrc;
    }
    if (this._gtDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtDst = this._gtDst;
    }
    if (this._gtSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtSrc = this._gtSrc;
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
    if (this._icmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6 = this._icmpv6;
    }
    if (this._icmpv6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Code = this._icmpv6Code;
    }
    if (this._icmpv6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Type = this._icmpv6Type;
    }
    if (this._ltDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltDst = this._ltDst;
    }
    if (this._ltSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltSrc = this._ltSrc;
    }
    if (this._portNumEndDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndDst = this._portNumEndDst;
    }
    if (this._portNumEndSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumEndSrc = this._portNumEndSrc;
    }
    if (this._protocolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolId = this._protocolId;
    }
    if (this._rangeDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeDst = this._rangeDst;
    }
    if (this._rangeSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeSrc = this._rangeSrc;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._specialCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCode = this._specialCode;
    }
    if (this._specialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialType = this._specialType;
    }
    if (this._specialV6Code !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Code = this._specialV6Code;
    }
    if (this._specialV6Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialV6Type = this._specialV6Type;
    }
    if (this._tcpUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUdp = this._tcpUdp;
    }
    if (this._v6AnyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AnyCode = this._v6AnyCode;
    }
    if (this._v6AnyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6AnyType = this._v6AnyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectGroupServiceRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._anyCode = undefined;
      this._anyType = undefined;
      this._eqDst = undefined;
      this._eqSrc = undefined;
      this._gtDst = undefined;
      this._gtSrc = undefined;
      this._icmp = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._icmpv6 = undefined;
      this._icmpv6Code = undefined;
      this._icmpv6Type = undefined;
      this._ltDst = undefined;
      this._ltSrc = undefined;
      this._portNumEndDst = undefined;
      this._portNumEndSrc = undefined;
      this._protocolId = undefined;
      this._rangeDst = undefined;
      this._rangeSrc = undefined;
      this._seqNum = undefined;
      this._source = undefined;
      this._specialCode = undefined;
      this._specialType = undefined;
      this._specialV6Code = undefined;
      this._specialV6Type = undefined;
      this._tcpUdp = undefined;
      this._v6AnyCode = undefined;
      this._v6AnyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._anyCode = value.anyCode;
      this._anyType = value.anyType;
      this._eqDst = value.eqDst;
      this._eqSrc = value.eqSrc;
      this._gtDst = value.gtDst;
      this._gtSrc = value.gtSrc;
      this._icmp = value.icmp;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._icmpv6 = value.icmpv6;
      this._icmpv6Code = value.icmpv6Code;
      this._icmpv6Type = value.icmpv6Type;
      this._ltDst = value.ltDst;
      this._ltSrc = value.ltSrc;
      this._portNumEndDst = value.portNumEndDst;
      this._portNumEndSrc = value.portNumEndSrc;
      this._protocolId = value.protocolId;
      this._rangeDst = value.rangeDst;
      this._rangeSrc = value.rangeSrc;
      this._seqNum = value.seqNum;
      this._source = value.source;
      this._specialCode = value.specialCode;
      this._specialType = value.specialType;
      this._specialV6Code = value.specialV6Code;
      this._specialV6Type = value.specialV6Type;
      this._tcpUdp = value.tcpUdp;
      this._v6AnyCode = value.v6AnyCode;
      this._v6AnyType = value.v6AnyType;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
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

  // eq_dst - computed: false, optional: true, required: false
  private _eqDst?: number; 
  public get eqDst() {
    return this.getNumberAttribute('eq_dst');
  }
  public set eqDst(value: number) {
    this._eqDst = value;
  }
  public resetEqDst() {
    this._eqDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqDstInput() {
    return this._eqDst;
  }

  // eq_src - computed: false, optional: true, required: false
  private _eqSrc?: number; 
  public get eqSrc() {
    return this.getNumberAttribute('eq_src');
  }
  public set eqSrc(value: number) {
    this._eqSrc = value;
  }
  public resetEqSrc() {
    this._eqSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqSrcInput() {
    return this._eqSrc;
  }

  // gt_dst - computed: false, optional: true, required: false
  private _gtDst?: number; 
  public get gtDst() {
    return this.getNumberAttribute('gt_dst');
  }
  public set gtDst(value: number) {
    this._gtDst = value;
  }
  public resetGtDst() {
    this._gtDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtDstInput() {
    return this._gtDst;
  }

  // gt_src - computed: false, optional: true, required: false
  private _gtSrc?: number; 
  public get gtSrc() {
    return this.getNumberAttribute('gt_src');
  }
  public set gtSrc(value: number) {
    this._gtSrc = value;
  }
  public resetGtSrc() {
    this._gtSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtSrcInput() {
    return this._gtSrc;
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

  // icmpv6_code - computed: false, optional: true, required: false
  private _icmpv6Code?: number; 
  public get icmpv6Code() {
    return this.getNumberAttribute('icmpv6_code');
  }
  public set icmpv6Code(value: number) {
    this._icmpv6Code = value;
  }
  public resetIcmpv6Code() {
    this._icmpv6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6CodeInput() {
    return this._icmpv6Code;
  }

  // icmpv6_type - computed: false, optional: true, required: false
  private _icmpv6Type?: number; 
  public get icmpv6Type() {
    return this.getNumberAttribute('icmpv6_type');
  }
  public set icmpv6Type(value: number) {
    this._icmpv6Type = value;
  }
  public resetIcmpv6Type() {
    this._icmpv6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6TypeInput() {
    return this._icmpv6Type;
  }

  // lt_dst - computed: false, optional: true, required: false
  private _ltDst?: number; 
  public get ltDst() {
    return this.getNumberAttribute('lt_dst');
  }
  public set ltDst(value: number) {
    this._ltDst = value;
  }
  public resetLtDst() {
    this._ltDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltDstInput() {
    return this._ltDst;
  }

  // lt_src - computed: false, optional: true, required: false
  private _ltSrc?: number; 
  public get ltSrc() {
    return this.getNumberAttribute('lt_src');
  }
  public set ltSrc(value: number) {
    this._ltSrc = value;
  }
  public resetLtSrc() {
    this._ltSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltSrcInput() {
    return this._ltSrc;
  }

  // port_num_end_dst - computed: false, optional: true, required: false
  private _portNumEndDst?: number; 
  public get portNumEndDst() {
    return this.getNumberAttribute('port_num_end_dst');
  }
  public set portNumEndDst(value: number) {
    this._portNumEndDst = value;
  }
  public resetPortNumEndDst() {
    this._portNumEndDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndDstInput() {
    return this._portNumEndDst;
  }

  // port_num_end_src - computed: false, optional: true, required: false
  private _portNumEndSrc?: number; 
  public get portNumEndSrc() {
    return this.getNumberAttribute('port_num_end_src');
  }
  public set portNumEndSrc(value: number) {
    this._portNumEndSrc = value;
  }
  public resetPortNumEndSrc() {
    this._portNumEndSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumEndSrcInput() {
    return this._portNumEndSrc;
  }

  // protocol_id - computed: false, optional: true, required: false
  private _protocolId?: number; 
  public get protocolId() {
    return this.getNumberAttribute('protocol_id');
  }
  public set protocolId(value: number) {
    this._protocolId = value;
  }
  public resetProtocolId() {
    this._protocolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIdInput() {
    return this._protocolId;
  }

  // range_dst - computed: false, optional: true, required: false
  private _rangeDst?: number; 
  public get rangeDst() {
    return this.getNumberAttribute('range_dst');
  }
  public set rangeDst(value: number) {
    this._rangeDst = value;
  }
  public resetRangeDst() {
    this._rangeDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeDstInput() {
    return this._rangeDst;
  }

  // range_src - computed: false, optional: true, required: false
  private _rangeSrc?: number; 
  public get rangeSrc() {
    return this.getNumberAttribute('range_src');
  }
  public set rangeSrc(value: number) {
    this._rangeSrc = value;
  }
  public resetRangeSrc() {
    this._rangeSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeSrcInput() {
    return this._rangeSrc;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // source - computed: false, optional: true, required: false
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // special_v6_code - computed: false, optional: true, required: false
  private _specialV6Code?: string; 
  public get specialV6Code() {
    return this.getStringAttribute('special_v6_code');
  }
  public set specialV6Code(value: string) {
    this._specialV6Code = value;
  }
  public resetSpecialV6Code() {
    this._specialV6Code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6CodeInput() {
    return this._specialV6Code;
  }

  // special_v6_type - computed: false, optional: true, required: false
  private _specialV6Type?: string; 
  public get specialV6Type() {
    return this.getStringAttribute('special_v6_type');
  }
  public set specialV6Type(value: string) {
    this._specialV6Type = value;
  }
  public resetSpecialV6Type() {
    this._specialV6Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialV6TypeInput() {
    return this._specialV6Type;
  }

  // tcp_udp - computed: false, optional: true, required: false
  private _tcpUdp?: string; 
  public get tcpUdp() {
    return this.getStringAttribute('tcp_udp');
  }
  public set tcpUdp(value: string) {
    this._tcpUdp = value;
  }
  public resetTcpUdp() {
    this._tcpUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUdpInput() {
    return this._tcpUdp;
  }

  // v6_any_code - computed: false, optional: true, required: false
  private _v6AnyCode?: number; 
  public get v6AnyCode() {
    return this.getNumberAttribute('v6_any_code');
  }
  public set v6AnyCode(value: number) {
    this._v6AnyCode = value;
  }
  public resetV6AnyCode() {
    this._v6AnyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AnyCodeInput() {
    return this._v6AnyCode;
  }

  // v6_any_type - computed: false, optional: true, required: false
  private _v6AnyType?: number; 
  public get v6AnyType() {
    return this.getNumberAttribute('v6_any_type');
  }
  public set v6AnyType(value: number) {
    this._v6AnyType = value;
  }
  public resetV6AnyType() {
    this._v6AnyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AnyTypeInput() {
    return this._v6AnyType;
  }
}

export class ObjectGroupServiceRulesList extends cdktf.ComplexList {
  public internalValue? : ObjectGroupServiceRules[] | cdktf.IResolvable

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
  public get(index: number): ObjectGroupServiceRulesOutputReference {
    return new ObjectGroupServiceRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service thunder_object_group_service}
*/
export class ObjectGroupService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_object_group_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectGroupService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectGroupService to import
  * @param importFromId The id of the existing ObjectGroupService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectGroupService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_object_group_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/object_group_service thunder_object_group_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectGroupServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectGroupServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_object_group_service',
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
    this._description = config.description;
    this._id = config.id;
    this._svcName = config.svcName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // svc_name - computed: false, optional: false, required: true
  private _svcName?: string; 
  public get svcName() {
    return this.getStringAttribute('svc_name');
  }
  public set svcName(value: string) {
    this._svcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svcNameInput() {
    return this._svcName;
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

  // rules - computed: false, optional: true, required: false
  private _rules = new ObjectGroupServiceRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObjectGroupServiceRules[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      svc_name: cdktf.stringToTerraform(this._svcName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules: cdktf.listMapper(objectGroupServiceRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      svc_name: {
        value: cdktf.stringToHclTerraform(this._svcName),
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
      rules: {
        value: cdktf.listMapperHcl(objectGroupServiceRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectGroupServiceRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
