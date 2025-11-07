// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSystemDefaultOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#id DataThunderDdosSystemDefaultOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#oper DataThunderDdosSystemDefaultOper#oper}
  */
  readonly oper?: DataThunderDdosSystemDefaultOperOper;
}
export interface DataThunderDdosSystemDefaultOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_bit_entry DataThunderDdosSystemDefaultOper#dst_bit_entry}
  */
  readonly dstBitEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_bit_icmp DataThunderDdosSystemDefaultOper#dst_bit_icmp}
  */
  readonly dstBitIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_bit_other DataThunderDdosSystemDefaultOper#dst_bit_other}
  */
  readonly dstBitOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_bit_tcp DataThunderDdosSystemDefaultOper#dst_bit_tcp}
  */
  readonly dstBitTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_bit_udp DataThunderDdosSystemDefaultOper#dst_bit_udp}
  */
  readonly dstBitUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_entry DataThunderDdosSystemDefaultOper#dst_conn_entry}
  */
  readonly dstConnEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_icmp DataThunderDdosSystemDefaultOper#dst_conn_icmp}
  */
  readonly dstConnIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_other DataThunderDdosSystemDefaultOper#dst_conn_other}
  */
  readonly dstConnOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_r_entry DataThunderDdosSystemDefaultOper#dst_conn_r_entry}
  */
  readonly dstConnREntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_r_icmp DataThunderDdosSystemDefaultOper#dst_conn_r_icmp}
  */
  readonly dstConnRIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_r_other DataThunderDdosSystemDefaultOper#dst_conn_r_other}
  */
  readonly dstConnROther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_r_tcp DataThunderDdosSystemDefaultOper#dst_conn_r_tcp}
  */
  readonly dstConnRTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_r_udp DataThunderDdosSystemDefaultOper#dst_conn_r_udp}
  */
  readonly dstConnRUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_tcp DataThunderDdosSystemDefaultOper#dst_conn_tcp}
  */
  readonly dstConnTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_conn_udp DataThunderDdosSystemDefaultOper#dst_conn_udp}
  */
  readonly dstConnUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_frag_entry DataThunderDdosSystemDefaultOper#dst_frag_entry}
  */
  readonly dstFragEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_frag_icmp DataThunderDdosSystemDefaultOper#dst_frag_icmp}
  */
  readonly dstFragIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_frag_other DataThunderDdosSystemDefaultOper#dst_frag_other}
  */
  readonly dstFragOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_frag_tcp DataThunderDdosSystemDefaultOper#dst_frag_tcp}
  */
  readonly dstFragTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_frag_udp DataThunderDdosSystemDefaultOper#dst_frag_udp}
  */
  readonly dstFragUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_pkt_entry DataThunderDdosSystemDefaultOper#dst_pkt_entry}
  */
  readonly dstPktEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_pkt_icmp DataThunderDdosSystemDefaultOper#dst_pkt_icmp}
  */
  readonly dstPktIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_pkt_other DataThunderDdosSystemDefaultOper#dst_pkt_other}
  */
  readonly dstPktOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_pkt_tcp DataThunderDdosSystemDefaultOper#dst_pkt_tcp}
  */
  readonly dstPktTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#dst_pkt_udp DataThunderDdosSystemDefaultOper#dst_pkt_udp}
  */
  readonly dstPktUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_bit_entry DataThunderDdosSystemDefaultOper#src_bit_entry}
  */
  readonly srcBitEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_bit_icmp DataThunderDdosSystemDefaultOper#src_bit_icmp}
  */
  readonly srcBitIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_bit_other DataThunderDdosSystemDefaultOper#src_bit_other}
  */
  readonly srcBitOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_bit_tcp DataThunderDdosSystemDefaultOper#src_bit_tcp}
  */
  readonly srcBitTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_bit_udp DataThunderDdosSystemDefaultOper#src_bit_udp}
  */
  readonly srcBitUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_entry DataThunderDdosSystemDefaultOper#src_conn_entry}
  */
  readonly srcConnEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_icmp DataThunderDdosSystemDefaultOper#src_conn_icmp}
  */
  readonly srcConnIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_other DataThunderDdosSystemDefaultOper#src_conn_other}
  */
  readonly srcConnOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_r_entry DataThunderDdosSystemDefaultOper#src_conn_r_entry}
  */
  readonly srcConnREntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_r_icmp DataThunderDdosSystemDefaultOper#src_conn_r_icmp}
  */
  readonly srcConnRIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_r_other DataThunderDdosSystemDefaultOper#src_conn_r_other}
  */
  readonly srcConnROther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_r_tcp DataThunderDdosSystemDefaultOper#src_conn_r_tcp}
  */
  readonly srcConnRTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_r_udp DataThunderDdosSystemDefaultOper#src_conn_r_udp}
  */
  readonly srcConnRUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_tcp DataThunderDdosSystemDefaultOper#src_conn_tcp}
  */
  readonly srcConnTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_conn_udp DataThunderDdosSystemDefaultOper#src_conn_udp}
  */
  readonly srcConnUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_frag_entry DataThunderDdosSystemDefaultOper#src_frag_entry}
  */
  readonly srcFragEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_frag_icmp DataThunderDdosSystemDefaultOper#src_frag_icmp}
  */
  readonly srcFragIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_frag_other DataThunderDdosSystemDefaultOper#src_frag_other}
  */
  readonly srcFragOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_frag_tcp DataThunderDdosSystemDefaultOper#src_frag_tcp}
  */
  readonly srcFragTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_frag_udp DataThunderDdosSystemDefaultOper#src_frag_udp}
  */
  readonly srcFragUdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_pkt_entry DataThunderDdosSystemDefaultOper#src_pkt_entry}
  */
  readonly srcPktEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_pkt_icmp DataThunderDdosSystemDefaultOper#src_pkt_icmp}
  */
  readonly srcPktIcmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_pkt_other DataThunderDdosSystemDefaultOper#src_pkt_other}
  */
  readonly srcPktOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_pkt_tcp DataThunderDdosSystemDefaultOper#src_pkt_tcp}
  */
  readonly srcPktTcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#src_pkt_udp DataThunderDdosSystemDefaultOper#src_pkt_udp}
  */
  readonly srcPktUdp?: string;
}

export function dataThunderDdosSystemDefaultOperOperToTerraform(struct?: DataThunderDdosSystemDefaultOperOperOutputReference | DataThunderDdosSystemDefaultOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_bit_entry: cdktf.stringToTerraform(struct!.dstBitEntry),
    dst_bit_icmp: cdktf.stringToTerraform(struct!.dstBitIcmp),
    dst_bit_other: cdktf.stringToTerraform(struct!.dstBitOther),
    dst_bit_tcp: cdktf.stringToTerraform(struct!.dstBitTcp),
    dst_bit_udp: cdktf.stringToTerraform(struct!.dstBitUdp),
    dst_conn_entry: cdktf.stringToTerraform(struct!.dstConnEntry),
    dst_conn_icmp: cdktf.stringToTerraform(struct!.dstConnIcmp),
    dst_conn_other: cdktf.stringToTerraform(struct!.dstConnOther),
    dst_conn_r_entry: cdktf.stringToTerraform(struct!.dstConnREntry),
    dst_conn_r_icmp: cdktf.stringToTerraform(struct!.dstConnRIcmp),
    dst_conn_r_other: cdktf.stringToTerraform(struct!.dstConnROther),
    dst_conn_r_tcp: cdktf.stringToTerraform(struct!.dstConnRTcp),
    dst_conn_r_udp: cdktf.stringToTerraform(struct!.dstConnRUdp),
    dst_conn_tcp: cdktf.stringToTerraform(struct!.dstConnTcp),
    dst_conn_udp: cdktf.stringToTerraform(struct!.dstConnUdp),
    dst_frag_entry: cdktf.stringToTerraform(struct!.dstFragEntry),
    dst_frag_icmp: cdktf.stringToTerraform(struct!.dstFragIcmp),
    dst_frag_other: cdktf.stringToTerraform(struct!.dstFragOther),
    dst_frag_tcp: cdktf.stringToTerraform(struct!.dstFragTcp),
    dst_frag_udp: cdktf.stringToTerraform(struct!.dstFragUdp),
    dst_pkt_entry: cdktf.stringToTerraform(struct!.dstPktEntry),
    dst_pkt_icmp: cdktf.stringToTerraform(struct!.dstPktIcmp),
    dst_pkt_other: cdktf.stringToTerraform(struct!.dstPktOther),
    dst_pkt_tcp: cdktf.stringToTerraform(struct!.dstPktTcp),
    dst_pkt_udp: cdktf.stringToTerraform(struct!.dstPktUdp),
    src_bit_entry: cdktf.stringToTerraform(struct!.srcBitEntry),
    src_bit_icmp: cdktf.stringToTerraform(struct!.srcBitIcmp),
    src_bit_other: cdktf.stringToTerraform(struct!.srcBitOther),
    src_bit_tcp: cdktf.stringToTerraform(struct!.srcBitTcp),
    src_bit_udp: cdktf.stringToTerraform(struct!.srcBitUdp),
    src_conn_entry: cdktf.stringToTerraform(struct!.srcConnEntry),
    src_conn_icmp: cdktf.stringToTerraform(struct!.srcConnIcmp),
    src_conn_other: cdktf.stringToTerraform(struct!.srcConnOther),
    src_conn_r_entry: cdktf.stringToTerraform(struct!.srcConnREntry),
    src_conn_r_icmp: cdktf.stringToTerraform(struct!.srcConnRIcmp),
    src_conn_r_other: cdktf.stringToTerraform(struct!.srcConnROther),
    src_conn_r_tcp: cdktf.stringToTerraform(struct!.srcConnRTcp),
    src_conn_r_udp: cdktf.stringToTerraform(struct!.srcConnRUdp),
    src_conn_tcp: cdktf.stringToTerraform(struct!.srcConnTcp),
    src_conn_udp: cdktf.stringToTerraform(struct!.srcConnUdp),
    src_frag_entry: cdktf.stringToTerraform(struct!.srcFragEntry),
    src_frag_icmp: cdktf.stringToTerraform(struct!.srcFragIcmp),
    src_frag_other: cdktf.stringToTerraform(struct!.srcFragOther),
    src_frag_tcp: cdktf.stringToTerraform(struct!.srcFragTcp),
    src_frag_udp: cdktf.stringToTerraform(struct!.srcFragUdp),
    src_pkt_entry: cdktf.stringToTerraform(struct!.srcPktEntry),
    src_pkt_icmp: cdktf.stringToTerraform(struct!.srcPktIcmp),
    src_pkt_other: cdktf.stringToTerraform(struct!.srcPktOther),
    src_pkt_tcp: cdktf.stringToTerraform(struct!.srcPktTcp),
    src_pkt_udp: cdktf.stringToTerraform(struct!.srcPktUdp),
  }
}


export function dataThunderDdosSystemDefaultOperOperToHclTerraform(struct?: DataThunderDdosSystemDefaultOperOperOutputReference | DataThunderDdosSystemDefaultOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_bit_entry: {
      value: cdktf.stringToHclTerraform(struct!.dstBitEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_bit_icmp: {
      value: cdktf.stringToHclTerraform(struct!.dstBitIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_bit_other: {
      value: cdktf.stringToHclTerraform(struct!.dstBitOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_bit_tcp: {
      value: cdktf.stringToHclTerraform(struct!.dstBitTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_bit_udp: {
      value: cdktf.stringToHclTerraform(struct!.dstBitUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_entry: {
      value: cdktf.stringToHclTerraform(struct!.dstConnEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_icmp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_other: {
      value: cdktf.stringToHclTerraform(struct!.dstConnOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_r_entry: {
      value: cdktf.stringToHclTerraform(struct!.dstConnREntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_r_icmp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnRIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_r_other: {
      value: cdktf.stringToHclTerraform(struct!.dstConnROther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_r_tcp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnRTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_r_udp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnRUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_tcp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_conn_udp: {
      value: cdktf.stringToHclTerraform(struct!.dstConnUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_frag_entry: {
      value: cdktf.stringToHclTerraform(struct!.dstFragEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_frag_icmp: {
      value: cdktf.stringToHclTerraform(struct!.dstFragIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_frag_other: {
      value: cdktf.stringToHclTerraform(struct!.dstFragOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_frag_tcp: {
      value: cdktf.stringToHclTerraform(struct!.dstFragTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_frag_udp: {
      value: cdktf.stringToHclTerraform(struct!.dstFragUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_pkt_entry: {
      value: cdktf.stringToHclTerraform(struct!.dstPktEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_pkt_icmp: {
      value: cdktf.stringToHclTerraform(struct!.dstPktIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_pkt_other: {
      value: cdktf.stringToHclTerraform(struct!.dstPktOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_pkt_tcp: {
      value: cdktf.stringToHclTerraform(struct!.dstPktTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_pkt_udp: {
      value: cdktf.stringToHclTerraform(struct!.dstPktUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_bit_entry: {
      value: cdktf.stringToHclTerraform(struct!.srcBitEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_bit_icmp: {
      value: cdktf.stringToHclTerraform(struct!.srcBitIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_bit_other: {
      value: cdktf.stringToHclTerraform(struct!.srcBitOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_bit_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcBitTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_bit_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcBitUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_entry: {
      value: cdktf.stringToHclTerraform(struct!.srcConnEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_icmp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_other: {
      value: cdktf.stringToHclTerraform(struct!.srcConnOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_r_entry: {
      value: cdktf.stringToHclTerraform(struct!.srcConnREntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_r_icmp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnRIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_r_other: {
      value: cdktf.stringToHclTerraform(struct!.srcConnROther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_r_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnRTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_r_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnRUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_conn_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcConnUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_frag_entry: {
      value: cdktf.stringToHclTerraform(struct!.srcFragEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_frag_icmp: {
      value: cdktf.stringToHclTerraform(struct!.srcFragIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_frag_other: {
      value: cdktf.stringToHclTerraform(struct!.srcFragOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_frag_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcFragTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_frag_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcFragUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_pkt_entry: {
      value: cdktf.stringToHclTerraform(struct!.srcPktEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_pkt_icmp: {
      value: cdktf.stringToHclTerraform(struct!.srcPktIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_pkt_other: {
      value: cdktf.stringToHclTerraform(struct!.srcPktOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_pkt_tcp: {
      value: cdktf.stringToHclTerraform(struct!.srcPktTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_pkt_udp: {
      value: cdktf.stringToHclTerraform(struct!.srcPktUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSystemDefaultOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSystemDefaultOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstBitEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBitEntry = this._dstBitEntry;
    }
    if (this._dstBitIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBitIcmp = this._dstBitIcmp;
    }
    if (this._dstBitOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBitOther = this._dstBitOther;
    }
    if (this._dstBitTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBitTcp = this._dstBitTcp;
    }
    if (this._dstBitUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBitUdp = this._dstBitUdp;
    }
    if (this._dstConnEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnEntry = this._dstConnEntry;
    }
    if (this._dstConnIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnIcmp = this._dstConnIcmp;
    }
    if (this._dstConnOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnOther = this._dstConnOther;
    }
    if (this._dstConnREntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnREntry = this._dstConnREntry;
    }
    if (this._dstConnRIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnRIcmp = this._dstConnRIcmp;
    }
    if (this._dstConnROther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnROther = this._dstConnROther;
    }
    if (this._dstConnRTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnRTcp = this._dstConnRTcp;
    }
    if (this._dstConnRUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnRUdp = this._dstConnRUdp;
    }
    if (this._dstConnTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnTcp = this._dstConnTcp;
    }
    if (this._dstConnUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstConnUdp = this._dstConnUdp;
    }
    if (this._dstFragEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragEntry = this._dstFragEntry;
    }
    if (this._dstFragIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragIcmp = this._dstFragIcmp;
    }
    if (this._dstFragOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragOther = this._dstFragOther;
    }
    if (this._dstFragTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragTcp = this._dstFragTcp;
    }
    if (this._dstFragUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragUdp = this._dstFragUdp;
    }
    if (this._dstPktEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktEntry = this._dstPktEntry;
    }
    if (this._dstPktIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktIcmp = this._dstPktIcmp;
    }
    if (this._dstPktOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktOther = this._dstPktOther;
    }
    if (this._dstPktTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktTcp = this._dstPktTcp;
    }
    if (this._dstPktUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktUdp = this._dstPktUdp;
    }
    if (this._srcBitEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBitEntry = this._srcBitEntry;
    }
    if (this._srcBitIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBitIcmp = this._srcBitIcmp;
    }
    if (this._srcBitOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBitOther = this._srcBitOther;
    }
    if (this._srcBitTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBitTcp = this._srcBitTcp;
    }
    if (this._srcBitUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBitUdp = this._srcBitUdp;
    }
    if (this._srcConnEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnEntry = this._srcConnEntry;
    }
    if (this._srcConnIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnIcmp = this._srcConnIcmp;
    }
    if (this._srcConnOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnOther = this._srcConnOther;
    }
    if (this._srcConnREntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnREntry = this._srcConnREntry;
    }
    if (this._srcConnRIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnRIcmp = this._srcConnRIcmp;
    }
    if (this._srcConnROther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnROther = this._srcConnROther;
    }
    if (this._srcConnRTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnRTcp = this._srcConnRTcp;
    }
    if (this._srcConnRUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnRUdp = this._srcConnRUdp;
    }
    if (this._srcConnTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnTcp = this._srcConnTcp;
    }
    if (this._srcConnUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnUdp = this._srcConnUdp;
    }
    if (this._srcFragEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragEntry = this._srcFragEntry;
    }
    if (this._srcFragIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragIcmp = this._srcFragIcmp;
    }
    if (this._srcFragOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragOther = this._srcFragOther;
    }
    if (this._srcFragTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragTcp = this._srcFragTcp;
    }
    if (this._srcFragUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragUdp = this._srcFragUdp;
    }
    if (this._srcPktEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPktEntry = this._srcPktEntry;
    }
    if (this._srcPktIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPktIcmp = this._srcPktIcmp;
    }
    if (this._srcPktOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPktOther = this._srcPktOther;
    }
    if (this._srcPktTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPktTcp = this._srcPktTcp;
    }
    if (this._srcPktUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPktUdp = this._srcPktUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSystemDefaultOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstBitEntry = undefined;
      this._dstBitIcmp = undefined;
      this._dstBitOther = undefined;
      this._dstBitTcp = undefined;
      this._dstBitUdp = undefined;
      this._dstConnEntry = undefined;
      this._dstConnIcmp = undefined;
      this._dstConnOther = undefined;
      this._dstConnREntry = undefined;
      this._dstConnRIcmp = undefined;
      this._dstConnROther = undefined;
      this._dstConnRTcp = undefined;
      this._dstConnRUdp = undefined;
      this._dstConnTcp = undefined;
      this._dstConnUdp = undefined;
      this._dstFragEntry = undefined;
      this._dstFragIcmp = undefined;
      this._dstFragOther = undefined;
      this._dstFragTcp = undefined;
      this._dstFragUdp = undefined;
      this._dstPktEntry = undefined;
      this._dstPktIcmp = undefined;
      this._dstPktOther = undefined;
      this._dstPktTcp = undefined;
      this._dstPktUdp = undefined;
      this._srcBitEntry = undefined;
      this._srcBitIcmp = undefined;
      this._srcBitOther = undefined;
      this._srcBitTcp = undefined;
      this._srcBitUdp = undefined;
      this._srcConnEntry = undefined;
      this._srcConnIcmp = undefined;
      this._srcConnOther = undefined;
      this._srcConnREntry = undefined;
      this._srcConnRIcmp = undefined;
      this._srcConnROther = undefined;
      this._srcConnRTcp = undefined;
      this._srcConnRUdp = undefined;
      this._srcConnTcp = undefined;
      this._srcConnUdp = undefined;
      this._srcFragEntry = undefined;
      this._srcFragIcmp = undefined;
      this._srcFragOther = undefined;
      this._srcFragTcp = undefined;
      this._srcFragUdp = undefined;
      this._srcPktEntry = undefined;
      this._srcPktIcmp = undefined;
      this._srcPktOther = undefined;
      this._srcPktTcp = undefined;
      this._srcPktUdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstBitEntry = value.dstBitEntry;
      this._dstBitIcmp = value.dstBitIcmp;
      this._dstBitOther = value.dstBitOther;
      this._dstBitTcp = value.dstBitTcp;
      this._dstBitUdp = value.dstBitUdp;
      this._dstConnEntry = value.dstConnEntry;
      this._dstConnIcmp = value.dstConnIcmp;
      this._dstConnOther = value.dstConnOther;
      this._dstConnREntry = value.dstConnREntry;
      this._dstConnRIcmp = value.dstConnRIcmp;
      this._dstConnROther = value.dstConnROther;
      this._dstConnRTcp = value.dstConnRTcp;
      this._dstConnRUdp = value.dstConnRUdp;
      this._dstConnTcp = value.dstConnTcp;
      this._dstConnUdp = value.dstConnUdp;
      this._dstFragEntry = value.dstFragEntry;
      this._dstFragIcmp = value.dstFragIcmp;
      this._dstFragOther = value.dstFragOther;
      this._dstFragTcp = value.dstFragTcp;
      this._dstFragUdp = value.dstFragUdp;
      this._dstPktEntry = value.dstPktEntry;
      this._dstPktIcmp = value.dstPktIcmp;
      this._dstPktOther = value.dstPktOther;
      this._dstPktTcp = value.dstPktTcp;
      this._dstPktUdp = value.dstPktUdp;
      this._srcBitEntry = value.srcBitEntry;
      this._srcBitIcmp = value.srcBitIcmp;
      this._srcBitOther = value.srcBitOther;
      this._srcBitTcp = value.srcBitTcp;
      this._srcBitUdp = value.srcBitUdp;
      this._srcConnEntry = value.srcConnEntry;
      this._srcConnIcmp = value.srcConnIcmp;
      this._srcConnOther = value.srcConnOther;
      this._srcConnREntry = value.srcConnREntry;
      this._srcConnRIcmp = value.srcConnRIcmp;
      this._srcConnROther = value.srcConnROther;
      this._srcConnRTcp = value.srcConnRTcp;
      this._srcConnRUdp = value.srcConnRUdp;
      this._srcConnTcp = value.srcConnTcp;
      this._srcConnUdp = value.srcConnUdp;
      this._srcFragEntry = value.srcFragEntry;
      this._srcFragIcmp = value.srcFragIcmp;
      this._srcFragOther = value.srcFragOther;
      this._srcFragTcp = value.srcFragTcp;
      this._srcFragUdp = value.srcFragUdp;
      this._srcPktEntry = value.srcPktEntry;
      this._srcPktIcmp = value.srcPktIcmp;
      this._srcPktOther = value.srcPktOther;
      this._srcPktTcp = value.srcPktTcp;
      this._srcPktUdp = value.srcPktUdp;
    }
  }

  // dst_bit_entry - computed: false, optional: true, required: false
  private _dstBitEntry?: string; 
  public get dstBitEntry() {
    return this.getStringAttribute('dst_bit_entry');
  }
  public set dstBitEntry(value: string) {
    this._dstBitEntry = value;
  }
  public resetDstBitEntry() {
    this._dstBitEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBitEntryInput() {
    return this._dstBitEntry;
  }

  // dst_bit_icmp - computed: false, optional: true, required: false
  private _dstBitIcmp?: string; 
  public get dstBitIcmp() {
    return this.getStringAttribute('dst_bit_icmp');
  }
  public set dstBitIcmp(value: string) {
    this._dstBitIcmp = value;
  }
  public resetDstBitIcmp() {
    this._dstBitIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBitIcmpInput() {
    return this._dstBitIcmp;
  }

  // dst_bit_other - computed: false, optional: true, required: false
  private _dstBitOther?: string; 
  public get dstBitOther() {
    return this.getStringAttribute('dst_bit_other');
  }
  public set dstBitOther(value: string) {
    this._dstBitOther = value;
  }
  public resetDstBitOther() {
    this._dstBitOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBitOtherInput() {
    return this._dstBitOther;
  }

  // dst_bit_tcp - computed: false, optional: true, required: false
  private _dstBitTcp?: string; 
  public get dstBitTcp() {
    return this.getStringAttribute('dst_bit_tcp');
  }
  public set dstBitTcp(value: string) {
    this._dstBitTcp = value;
  }
  public resetDstBitTcp() {
    this._dstBitTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBitTcpInput() {
    return this._dstBitTcp;
  }

  // dst_bit_udp - computed: false, optional: true, required: false
  private _dstBitUdp?: string; 
  public get dstBitUdp() {
    return this.getStringAttribute('dst_bit_udp');
  }
  public set dstBitUdp(value: string) {
    this._dstBitUdp = value;
  }
  public resetDstBitUdp() {
    this._dstBitUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBitUdpInput() {
    return this._dstBitUdp;
  }

  // dst_conn_entry - computed: false, optional: true, required: false
  private _dstConnEntry?: string; 
  public get dstConnEntry() {
    return this.getStringAttribute('dst_conn_entry');
  }
  public set dstConnEntry(value: string) {
    this._dstConnEntry = value;
  }
  public resetDstConnEntry() {
    this._dstConnEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnEntryInput() {
    return this._dstConnEntry;
  }

  // dst_conn_icmp - computed: false, optional: true, required: false
  private _dstConnIcmp?: string; 
  public get dstConnIcmp() {
    return this.getStringAttribute('dst_conn_icmp');
  }
  public set dstConnIcmp(value: string) {
    this._dstConnIcmp = value;
  }
  public resetDstConnIcmp() {
    this._dstConnIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnIcmpInput() {
    return this._dstConnIcmp;
  }

  // dst_conn_other - computed: false, optional: true, required: false
  private _dstConnOther?: string; 
  public get dstConnOther() {
    return this.getStringAttribute('dst_conn_other');
  }
  public set dstConnOther(value: string) {
    this._dstConnOther = value;
  }
  public resetDstConnOther() {
    this._dstConnOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnOtherInput() {
    return this._dstConnOther;
  }

  // dst_conn_r_entry - computed: false, optional: true, required: false
  private _dstConnREntry?: string; 
  public get dstConnREntry() {
    return this.getStringAttribute('dst_conn_r_entry');
  }
  public set dstConnREntry(value: string) {
    this._dstConnREntry = value;
  }
  public resetDstConnREntry() {
    this._dstConnREntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnREntryInput() {
    return this._dstConnREntry;
  }

  // dst_conn_r_icmp - computed: false, optional: true, required: false
  private _dstConnRIcmp?: string; 
  public get dstConnRIcmp() {
    return this.getStringAttribute('dst_conn_r_icmp');
  }
  public set dstConnRIcmp(value: string) {
    this._dstConnRIcmp = value;
  }
  public resetDstConnRIcmp() {
    this._dstConnRIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnRIcmpInput() {
    return this._dstConnRIcmp;
  }

  // dst_conn_r_other - computed: false, optional: true, required: false
  private _dstConnROther?: string; 
  public get dstConnROther() {
    return this.getStringAttribute('dst_conn_r_other');
  }
  public set dstConnROther(value: string) {
    this._dstConnROther = value;
  }
  public resetDstConnROther() {
    this._dstConnROther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnROtherInput() {
    return this._dstConnROther;
  }

  // dst_conn_r_tcp - computed: false, optional: true, required: false
  private _dstConnRTcp?: string; 
  public get dstConnRTcp() {
    return this.getStringAttribute('dst_conn_r_tcp');
  }
  public set dstConnRTcp(value: string) {
    this._dstConnRTcp = value;
  }
  public resetDstConnRTcp() {
    this._dstConnRTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnRTcpInput() {
    return this._dstConnRTcp;
  }

  // dst_conn_r_udp - computed: false, optional: true, required: false
  private _dstConnRUdp?: string; 
  public get dstConnRUdp() {
    return this.getStringAttribute('dst_conn_r_udp');
  }
  public set dstConnRUdp(value: string) {
    this._dstConnRUdp = value;
  }
  public resetDstConnRUdp() {
    this._dstConnRUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnRUdpInput() {
    return this._dstConnRUdp;
  }

  // dst_conn_tcp - computed: false, optional: true, required: false
  private _dstConnTcp?: string; 
  public get dstConnTcp() {
    return this.getStringAttribute('dst_conn_tcp');
  }
  public set dstConnTcp(value: string) {
    this._dstConnTcp = value;
  }
  public resetDstConnTcp() {
    this._dstConnTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnTcpInput() {
    return this._dstConnTcp;
  }

  // dst_conn_udp - computed: false, optional: true, required: false
  private _dstConnUdp?: string; 
  public get dstConnUdp() {
    return this.getStringAttribute('dst_conn_udp');
  }
  public set dstConnUdp(value: string) {
    this._dstConnUdp = value;
  }
  public resetDstConnUdp() {
    this._dstConnUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstConnUdpInput() {
    return this._dstConnUdp;
  }

  // dst_frag_entry - computed: false, optional: true, required: false
  private _dstFragEntry?: string; 
  public get dstFragEntry() {
    return this.getStringAttribute('dst_frag_entry');
  }
  public set dstFragEntry(value: string) {
    this._dstFragEntry = value;
  }
  public resetDstFragEntry() {
    this._dstFragEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragEntryInput() {
    return this._dstFragEntry;
  }

  // dst_frag_icmp - computed: false, optional: true, required: false
  private _dstFragIcmp?: string; 
  public get dstFragIcmp() {
    return this.getStringAttribute('dst_frag_icmp');
  }
  public set dstFragIcmp(value: string) {
    this._dstFragIcmp = value;
  }
  public resetDstFragIcmp() {
    this._dstFragIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragIcmpInput() {
    return this._dstFragIcmp;
  }

  // dst_frag_other - computed: false, optional: true, required: false
  private _dstFragOther?: string; 
  public get dstFragOther() {
    return this.getStringAttribute('dst_frag_other');
  }
  public set dstFragOther(value: string) {
    this._dstFragOther = value;
  }
  public resetDstFragOther() {
    this._dstFragOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragOtherInput() {
    return this._dstFragOther;
  }

  // dst_frag_tcp - computed: false, optional: true, required: false
  private _dstFragTcp?: string; 
  public get dstFragTcp() {
    return this.getStringAttribute('dst_frag_tcp');
  }
  public set dstFragTcp(value: string) {
    this._dstFragTcp = value;
  }
  public resetDstFragTcp() {
    this._dstFragTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragTcpInput() {
    return this._dstFragTcp;
  }

  // dst_frag_udp - computed: false, optional: true, required: false
  private _dstFragUdp?: string; 
  public get dstFragUdp() {
    return this.getStringAttribute('dst_frag_udp');
  }
  public set dstFragUdp(value: string) {
    this._dstFragUdp = value;
  }
  public resetDstFragUdp() {
    this._dstFragUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragUdpInput() {
    return this._dstFragUdp;
  }

  // dst_pkt_entry - computed: false, optional: true, required: false
  private _dstPktEntry?: string; 
  public get dstPktEntry() {
    return this.getStringAttribute('dst_pkt_entry');
  }
  public set dstPktEntry(value: string) {
    this._dstPktEntry = value;
  }
  public resetDstPktEntry() {
    this._dstPktEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktEntryInput() {
    return this._dstPktEntry;
  }

  // dst_pkt_icmp - computed: false, optional: true, required: false
  private _dstPktIcmp?: string; 
  public get dstPktIcmp() {
    return this.getStringAttribute('dst_pkt_icmp');
  }
  public set dstPktIcmp(value: string) {
    this._dstPktIcmp = value;
  }
  public resetDstPktIcmp() {
    this._dstPktIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktIcmpInput() {
    return this._dstPktIcmp;
  }

  // dst_pkt_other - computed: false, optional: true, required: false
  private _dstPktOther?: string; 
  public get dstPktOther() {
    return this.getStringAttribute('dst_pkt_other');
  }
  public set dstPktOther(value: string) {
    this._dstPktOther = value;
  }
  public resetDstPktOther() {
    this._dstPktOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktOtherInput() {
    return this._dstPktOther;
  }

  // dst_pkt_tcp - computed: false, optional: true, required: false
  private _dstPktTcp?: string; 
  public get dstPktTcp() {
    return this.getStringAttribute('dst_pkt_tcp');
  }
  public set dstPktTcp(value: string) {
    this._dstPktTcp = value;
  }
  public resetDstPktTcp() {
    this._dstPktTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktTcpInput() {
    return this._dstPktTcp;
  }

  // dst_pkt_udp - computed: false, optional: true, required: false
  private _dstPktUdp?: string; 
  public get dstPktUdp() {
    return this.getStringAttribute('dst_pkt_udp');
  }
  public set dstPktUdp(value: string) {
    this._dstPktUdp = value;
  }
  public resetDstPktUdp() {
    this._dstPktUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktUdpInput() {
    return this._dstPktUdp;
  }

  // src_bit_entry - computed: false, optional: true, required: false
  private _srcBitEntry?: string; 
  public get srcBitEntry() {
    return this.getStringAttribute('src_bit_entry');
  }
  public set srcBitEntry(value: string) {
    this._srcBitEntry = value;
  }
  public resetSrcBitEntry() {
    this._srcBitEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBitEntryInput() {
    return this._srcBitEntry;
  }

  // src_bit_icmp - computed: false, optional: true, required: false
  private _srcBitIcmp?: string; 
  public get srcBitIcmp() {
    return this.getStringAttribute('src_bit_icmp');
  }
  public set srcBitIcmp(value: string) {
    this._srcBitIcmp = value;
  }
  public resetSrcBitIcmp() {
    this._srcBitIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBitIcmpInput() {
    return this._srcBitIcmp;
  }

  // src_bit_other - computed: false, optional: true, required: false
  private _srcBitOther?: string; 
  public get srcBitOther() {
    return this.getStringAttribute('src_bit_other');
  }
  public set srcBitOther(value: string) {
    this._srcBitOther = value;
  }
  public resetSrcBitOther() {
    this._srcBitOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBitOtherInput() {
    return this._srcBitOther;
  }

  // src_bit_tcp - computed: false, optional: true, required: false
  private _srcBitTcp?: string; 
  public get srcBitTcp() {
    return this.getStringAttribute('src_bit_tcp');
  }
  public set srcBitTcp(value: string) {
    this._srcBitTcp = value;
  }
  public resetSrcBitTcp() {
    this._srcBitTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBitTcpInput() {
    return this._srcBitTcp;
  }

  // src_bit_udp - computed: false, optional: true, required: false
  private _srcBitUdp?: string; 
  public get srcBitUdp() {
    return this.getStringAttribute('src_bit_udp');
  }
  public set srcBitUdp(value: string) {
    this._srcBitUdp = value;
  }
  public resetSrcBitUdp() {
    this._srcBitUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBitUdpInput() {
    return this._srcBitUdp;
  }

  // src_conn_entry - computed: false, optional: true, required: false
  private _srcConnEntry?: string; 
  public get srcConnEntry() {
    return this.getStringAttribute('src_conn_entry');
  }
  public set srcConnEntry(value: string) {
    this._srcConnEntry = value;
  }
  public resetSrcConnEntry() {
    this._srcConnEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnEntryInput() {
    return this._srcConnEntry;
  }

  // src_conn_icmp - computed: false, optional: true, required: false
  private _srcConnIcmp?: string; 
  public get srcConnIcmp() {
    return this.getStringAttribute('src_conn_icmp');
  }
  public set srcConnIcmp(value: string) {
    this._srcConnIcmp = value;
  }
  public resetSrcConnIcmp() {
    this._srcConnIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnIcmpInput() {
    return this._srcConnIcmp;
  }

  // src_conn_other - computed: false, optional: true, required: false
  private _srcConnOther?: string; 
  public get srcConnOther() {
    return this.getStringAttribute('src_conn_other');
  }
  public set srcConnOther(value: string) {
    this._srcConnOther = value;
  }
  public resetSrcConnOther() {
    this._srcConnOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnOtherInput() {
    return this._srcConnOther;
  }

  // src_conn_r_entry - computed: false, optional: true, required: false
  private _srcConnREntry?: string; 
  public get srcConnREntry() {
    return this.getStringAttribute('src_conn_r_entry');
  }
  public set srcConnREntry(value: string) {
    this._srcConnREntry = value;
  }
  public resetSrcConnREntry() {
    this._srcConnREntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnREntryInput() {
    return this._srcConnREntry;
  }

  // src_conn_r_icmp - computed: false, optional: true, required: false
  private _srcConnRIcmp?: string; 
  public get srcConnRIcmp() {
    return this.getStringAttribute('src_conn_r_icmp');
  }
  public set srcConnRIcmp(value: string) {
    this._srcConnRIcmp = value;
  }
  public resetSrcConnRIcmp() {
    this._srcConnRIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnRIcmpInput() {
    return this._srcConnRIcmp;
  }

  // src_conn_r_other - computed: false, optional: true, required: false
  private _srcConnROther?: string; 
  public get srcConnROther() {
    return this.getStringAttribute('src_conn_r_other');
  }
  public set srcConnROther(value: string) {
    this._srcConnROther = value;
  }
  public resetSrcConnROther() {
    this._srcConnROther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnROtherInput() {
    return this._srcConnROther;
  }

  // src_conn_r_tcp - computed: false, optional: true, required: false
  private _srcConnRTcp?: string; 
  public get srcConnRTcp() {
    return this.getStringAttribute('src_conn_r_tcp');
  }
  public set srcConnRTcp(value: string) {
    this._srcConnRTcp = value;
  }
  public resetSrcConnRTcp() {
    this._srcConnRTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnRTcpInput() {
    return this._srcConnRTcp;
  }

  // src_conn_r_udp - computed: false, optional: true, required: false
  private _srcConnRUdp?: string; 
  public get srcConnRUdp() {
    return this.getStringAttribute('src_conn_r_udp');
  }
  public set srcConnRUdp(value: string) {
    this._srcConnRUdp = value;
  }
  public resetSrcConnRUdp() {
    this._srcConnRUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnRUdpInput() {
    return this._srcConnRUdp;
  }

  // src_conn_tcp - computed: false, optional: true, required: false
  private _srcConnTcp?: string; 
  public get srcConnTcp() {
    return this.getStringAttribute('src_conn_tcp');
  }
  public set srcConnTcp(value: string) {
    this._srcConnTcp = value;
  }
  public resetSrcConnTcp() {
    this._srcConnTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnTcpInput() {
    return this._srcConnTcp;
  }

  // src_conn_udp - computed: false, optional: true, required: false
  private _srcConnUdp?: string; 
  public get srcConnUdp() {
    return this.getStringAttribute('src_conn_udp');
  }
  public set srcConnUdp(value: string) {
    this._srcConnUdp = value;
  }
  public resetSrcConnUdp() {
    this._srcConnUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnUdpInput() {
    return this._srcConnUdp;
  }

  // src_frag_entry - computed: false, optional: true, required: false
  private _srcFragEntry?: string; 
  public get srcFragEntry() {
    return this.getStringAttribute('src_frag_entry');
  }
  public set srcFragEntry(value: string) {
    this._srcFragEntry = value;
  }
  public resetSrcFragEntry() {
    this._srcFragEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragEntryInput() {
    return this._srcFragEntry;
  }

  // src_frag_icmp - computed: false, optional: true, required: false
  private _srcFragIcmp?: string; 
  public get srcFragIcmp() {
    return this.getStringAttribute('src_frag_icmp');
  }
  public set srcFragIcmp(value: string) {
    this._srcFragIcmp = value;
  }
  public resetSrcFragIcmp() {
    this._srcFragIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragIcmpInput() {
    return this._srcFragIcmp;
  }

  // src_frag_other - computed: false, optional: true, required: false
  private _srcFragOther?: string; 
  public get srcFragOther() {
    return this.getStringAttribute('src_frag_other');
  }
  public set srcFragOther(value: string) {
    this._srcFragOther = value;
  }
  public resetSrcFragOther() {
    this._srcFragOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragOtherInput() {
    return this._srcFragOther;
  }

  // src_frag_tcp - computed: false, optional: true, required: false
  private _srcFragTcp?: string; 
  public get srcFragTcp() {
    return this.getStringAttribute('src_frag_tcp');
  }
  public set srcFragTcp(value: string) {
    this._srcFragTcp = value;
  }
  public resetSrcFragTcp() {
    this._srcFragTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragTcpInput() {
    return this._srcFragTcp;
  }

  // src_frag_udp - computed: false, optional: true, required: false
  private _srcFragUdp?: string; 
  public get srcFragUdp() {
    return this.getStringAttribute('src_frag_udp');
  }
  public set srcFragUdp(value: string) {
    this._srcFragUdp = value;
  }
  public resetSrcFragUdp() {
    this._srcFragUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragUdpInput() {
    return this._srcFragUdp;
  }

  // src_pkt_entry - computed: false, optional: true, required: false
  private _srcPktEntry?: string; 
  public get srcPktEntry() {
    return this.getStringAttribute('src_pkt_entry');
  }
  public set srcPktEntry(value: string) {
    this._srcPktEntry = value;
  }
  public resetSrcPktEntry() {
    this._srcPktEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPktEntryInput() {
    return this._srcPktEntry;
  }

  // src_pkt_icmp - computed: false, optional: true, required: false
  private _srcPktIcmp?: string; 
  public get srcPktIcmp() {
    return this.getStringAttribute('src_pkt_icmp');
  }
  public set srcPktIcmp(value: string) {
    this._srcPktIcmp = value;
  }
  public resetSrcPktIcmp() {
    this._srcPktIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPktIcmpInput() {
    return this._srcPktIcmp;
  }

  // src_pkt_other - computed: false, optional: true, required: false
  private _srcPktOther?: string; 
  public get srcPktOther() {
    return this.getStringAttribute('src_pkt_other');
  }
  public set srcPktOther(value: string) {
    this._srcPktOther = value;
  }
  public resetSrcPktOther() {
    this._srcPktOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPktOtherInput() {
    return this._srcPktOther;
  }

  // src_pkt_tcp - computed: false, optional: true, required: false
  private _srcPktTcp?: string; 
  public get srcPktTcp() {
    return this.getStringAttribute('src_pkt_tcp');
  }
  public set srcPktTcp(value: string) {
    this._srcPktTcp = value;
  }
  public resetSrcPktTcp() {
    this._srcPktTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPktTcpInput() {
    return this._srcPktTcp;
  }

  // src_pkt_udp - computed: false, optional: true, required: false
  private _srcPktUdp?: string; 
  public get srcPktUdp() {
    return this.getStringAttribute('src_pkt_udp');
  }
  public set srcPktUdp(value: string) {
    this._srcPktUdp = value;
  }
  public resetSrcPktUdp() {
    this._srcPktUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPktUdpInput() {
    return this._srcPktUdp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper thunder_ddos_system_default_oper}
*/
export class DataThunderDdosSystemDefaultOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_system_default_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSystemDefaultOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSystemDefaultOper to import
  * @param importFromId The id of the existing DataThunderDdosSystemDefaultOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSystemDefaultOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_system_default_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_system_default_oper thunder_ddos_system_default_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSystemDefaultOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSystemDefaultOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_system_default_oper',
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
  private _oper = new DataThunderDdosSystemDefaultOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosSystemDefaultOperOper) {
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
      oper: dataThunderDdosSystemDefaultOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosSystemDefaultOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSystemDefaultOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
