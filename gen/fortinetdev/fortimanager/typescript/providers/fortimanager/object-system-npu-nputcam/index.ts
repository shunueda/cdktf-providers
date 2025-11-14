// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuNputcamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#adom ObjectSystemNpuNputcam#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dbg_dump ObjectSystemNpuNputcam#dbg_dump}
  */
  readonly dbgDump?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#id ObjectSystemNpuNputcam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#name ObjectSystemNpuNputcam#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#oid ObjectSystemNpuNputcam#oid}
  */
  readonly oid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#scopetype ObjectSystemNpuNputcam#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#type ObjectSystemNpuNputcam#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vid ObjectSystemNpuNputcam#vid}
  */
  readonly vid?: number;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#data ObjectSystemNpuNputcam#data}
  */
  readonly data?: ObjectSystemNpuNputcamData;
  /**
  * mask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mask ObjectSystemNpuNputcam#mask}
  */
  readonly mask?: ObjectSystemNpuNputcamMask;
  /**
  * mir_act block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mir_act ObjectSystemNpuNputcam#mir_act}
  */
  readonly mirAct?: ObjectSystemNpuNputcamMirAct;
  /**
  * pri_act block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#pri_act ObjectSystemNpuNputcam#pri_act}
  */
  readonly priAct?: ObjectSystemNpuNputcamPriAct;
  /**
  * sact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#sact ObjectSystemNpuNputcam#sact}
  */
  readonly sact?: ObjectSystemNpuNputcamSact;
  /**
  * tact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tact ObjectSystemNpuNputcam#tact}
  */
  readonly tact?: ObjectSystemNpuNputcamTact;
}
export interface ObjectSystemNpuNputcamData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#df ObjectSystemNpuNputcam#df}
  */
  readonly df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstip ObjectSystemNpuNputcam#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstipv6 ObjectSystemNpuNputcam#dstipv6}
  */
  readonly dstipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstmac ObjectSystemNpuNputcam#dstmac}
  */
  readonly dstmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstport ObjectSystemNpuNputcam#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ethertype ObjectSystemNpuNputcam#ethertype}
  */
  readonly ethertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ext_tag ObjectSystemNpuNputcam#ext_tag}
  */
  readonly extTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#frag_off ObjectSystemNpuNputcam#frag_off}
  */
  readonly fragOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_buf_cnt ObjectSystemNpuNputcam#gen_buf_cnt}
  */
  readonly genBufCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_iv ObjectSystemNpuNputcam#gen_iv}
  */
  readonly genIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_l3_flags ObjectSystemNpuNputcam#gen_l3_flags}
  */
  readonly genL3Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_l4_flags ObjectSystemNpuNputcam#gen_l4_flags}
  */
  readonly genL4Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pkt_ctrl ObjectSystemNpuNputcam#gen_pkt_ctrl}
  */
  readonly genPktCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pri ObjectSystemNpuNputcam#gen_pri}
  */
  readonly genPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pri_v ObjectSystemNpuNputcam#gen_pri_v}
  */
  readonly genPriV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_tv ObjectSystemNpuNputcam#gen_tv}
  */
  readonly genTv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ihl ObjectSystemNpuNputcam#ihl}
  */
  readonly ihl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ip4_id ObjectSystemNpuNputcam#ip4_id}
  */
  readonly ip4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ip6_fl ObjectSystemNpuNputcam#ip6_fl}
  */
  readonly ip6Fl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ipver ObjectSystemNpuNputcam#ipver}
  */
  readonly ipver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd10 ObjectSystemNpuNputcam#l4_wd10}
  */
  readonly l4Wd10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd11 ObjectSystemNpuNputcam#l4_wd11}
  */
  readonly l4Wd11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd8 ObjectSystemNpuNputcam#l4_wd8}
  */
  readonly l4Wd8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd9 ObjectSystemNpuNputcam#l4_wd9}
  */
  readonly l4Wd9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mf ObjectSystemNpuNputcam#mf}
  */
  readonly mf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#protocol ObjectSystemNpuNputcam#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#slink ObjectSystemNpuNputcam#slink}
  */
  readonly slink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#smac_change ObjectSystemNpuNputcam#smac_change}
  */
  readonly smacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#sp ObjectSystemNpuNputcam#sp}
  */
  readonly sp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_cfi ObjectSystemNpuNputcam#src_cfi}
  */
  readonly srcCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_prio ObjectSystemNpuNputcam#src_prio}
  */
  readonly srcPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_updt ObjectSystemNpuNputcam#src_updt}
  */
  readonly srcUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcip ObjectSystemNpuNputcam#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcipv6 ObjectSystemNpuNputcam#srcipv6}
  */
  readonly srcipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcmac ObjectSystemNpuNputcam#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcport ObjectSystemNpuNputcam#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#svid ObjectSystemNpuNputcam#svid}
  */
  readonly svid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_ack ObjectSystemNpuNputcam#tcp_ack}
  */
  readonly tcpAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_cwr ObjectSystemNpuNputcam#tcp_cwr}
  */
  readonly tcpCwr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_ece ObjectSystemNpuNputcam#tcp_ece}
  */
  readonly tcpEce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_fin ObjectSystemNpuNputcam#tcp_fin}
  */
  readonly tcpFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_push ObjectSystemNpuNputcam#tcp_push}
  */
  readonly tcpPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_rst ObjectSystemNpuNputcam#tcp_rst}
  */
  readonly tcpRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_syn ObjectSystemNpuNputcam#tcp_syn}
  */
  readonly tcpSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_urg ObjectSystemNpuNputcam#tcp_urg}
  */
  readonly tcpUrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_cfi ObjectSystemNpuNputcam#tgt_cfi}
  */
  readonly tgtCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_prio ObjectSystemNpuNputcam#tgt_prio}
  */
  readonly tgtPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_updt ObjectSystemNpuNputcam#tgt_updt}
  */
  readonly tgtUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_v ObjectSystemNpuNputcam#tgt_v}
  */
  readonly tgtV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tos ObjectSystemNpuNputcam#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tp ObjectSystemNpuNputcam#tp}
  */
  readonly tp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ttl ObjectSystemNpuNputcam#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tvid ObjectSystemNpuNputcam#tvid}
  */
  readonly tvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdid ObjectSystemNpuNputcam#vdid}
  */
  readonly vdid?: number;
}

export function objectSystemNpuNputcamDataToTerraform(struct?: ObjectSystemNpuNputcamDataOutputReference | ObjectSystemNpuNputcamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    df: cdktf.stringToTerraform(struct!.df),
    dstip: cdktf.stringToTerraform(struct!.dstip),
    dstipv6: cdktf.stringToTerraform(struct!.dstipv6),
    dstmac: cdktf.stringToTerraform(struct!.dstmac),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    ext_tag: cdktf.stringToTerraform(struct!.extTag),
    frag_off: cdktf.numberToTerraform(struct!.fragOff),
    gen_buf_cnt: cdktf.numberToTerraform(struct!.genBufCnt),
    gen_iv: cdktf.stringToTerraform(struct!.genIv),
    gen_l3_flags: cdktf.numberToTerraform(struct!.genL3Flags),
    gen_l4_flags: cdktf.numberToTerraform(struct!.genL4Flags),
    gen_pkt_ctrl: cdktf.numberToTerraform(struct!.genPktCtrl),
    gen_pri: cdktf.numberToTerraform(struct!.genPri),
    gen_pri_v: cdktf.stringToTerraform(struct!.genPriV),
    gen_tv: cdktf.stringToTerraform(struct!.genTv),
    ihl: cdktf.numberToTerraform(struct!.ihl),
    ip4_id: cdktf.numberToTerraform(struct!.ip4Id),
    ip6_fl: cdktf.numberToTerraform(struct!.ip6Fl),
    ipver: cdktf.numberToTerraform(struct!.ipver),
    l4_wd10: cdktf.numberToTerraform(struct!.l4Wd10),
    l4_wd11: cdktf.numberToTerraform(struct!.l4Wd11),
    l4_wd8: cdktf.numberToTerraform(struct!.l4Wd8),
    l4_wd9: cdktf.numberToTerraform(struct!.l4Wd9),
    mf: cdktf.stringToTerraform(struct!.mf),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    slink: cdktf.numberToTerraform(struct!.slink),
    smac_change: cdktf.stringToTerraform(struct!.smacChange),
    sp: cdktf.numberToTerraform(struct!.sp),
    src_cfi: cdktf.stringToTerraform(struct!.srcCfi),
    src_prio: cdktf.numberToTerraform(struct!.srcPrio),
    src_updt: cdktf.stringToTerraform(struct!.srcUpdt),
    srcip: cdktf.stringToTerraform(struct!.srcip),
    srcipv6: cdktf.stringToTerraform(struct!.srcipv6),
    srcmac: cdktf.stringToTerraform(struct!.srcmac),
    srcport: cdktf.numberToTerraform(struct!.srcport),
    svid: cdktf.numberToTerraform(struct!.svid),
    tcp_ack: cdktf.stringToTerraform(struct!.tcpAck),
    tcp_cwr: cdktf.stringToTerraform(struct!.tcpCwr),
    tcp_ece: cdktf.stringToTerraform(struct!.tcpEce),
    tcp_fin: cdktf.stringToTerraform(struct!.tcpFin),
    tcp_push: cdktf.stringToTerraform(struct!.tcpPush),
    tcp_rst: cdktf.stringToTerraform(struct!.tcpRst),
    tcp_syn: cdktf.stringToTerraform(struct!.tcpSyn),
    tcp_urg: cdktf.stringToTerraform(struct!.tcpUrg),
    tgt_cfi: cdktf.stringToTerraform(struct!.tgtCfi),
    tgt_prio: cdktf.numberToTerraform(struct!.tgtPrio),
    tgt_updt: cdktf.stringToTerraform(struct!.tgtUpdt),
    tgt_v: cdktf.stringToTerraform(struct!.tgtV),
    tos: cdktf.numberToTerraform(struct!.tos),
    tp: cdktf.numberToTerraform(struct!.tp),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    tvid: cdktf.numberToTerraform(struct!.tvid),
    vdid: cdktf.numberToTerraform(struct!.vdid),
  }
}


export function objectSystemNpuNputcamDataToHclTerraform(struct?: ObjectSystemNpuNputcamDataOutputReference | ObjectSystemNpuNputcamData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    df: {
      value: cdktf.stringToHclTerraform(struct!.df),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstip: {
      value: cdktf.stringToHclTerraform(struct!.dstip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstmac: {
      value: cdktf.stringToHclTerraform(struct!.dstmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_tag: {
      value: cdktf.stringToHclTerraform(struct!.extTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_off: {
      value: cdktf.numberToHclTerraform(struct!.fragOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_buf_cnt: {
      value: cdktf.numberToHclTerraform(struct!.genBufCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_iv: {
      value: cdktf.stringToHclTerraform(struct!.genIv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_l3_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL3Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_l4_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL4Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pkt_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.genPktCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri: {
      value: cdktf.numberToHclTerraform(struct!.genPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri_v: {
      value: cdktf.stringToHclTerraform(struct!.genPriV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_tv: {
      value: cdktf.stringToHclTerraform(struct!.genTv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl: {
      value: cdktf.numberToHclTerraform(struct!.ihl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip4_id: {
      value: cdktf.numberToHclTerraform(struct!.ip4Id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_fl: {
      value: cdktf.numberToHclTerraform(struct!.ip6Fl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipver: {
      value: cdktf.numberToHclTerraform(struct!.ipver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd10: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd11: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd8: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd9: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mf: {
      value: cdktf.stringToHclTerraform(struct!.mf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slink: {
      value: cdktf.numberToHclTerraform(struct!.slink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_change: {
      value: cdktf.stringToHclTerraform(struct!.smacChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp: {
      value: cdktf.numberToHclTerraform(struct!.sp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_cfi: {
      value: cdktf.stringToHclTerraform(struct!.srcCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_prio: {
      value: cdktf.numberToHclTerraform(struct!.srcPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_updt: {
      value: cdktf.stringToHclTerraform(struct!.srcUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcip: {
      value: cdktf.stringToHclTerraform(struct!.srcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcmac: {
      value: cdktf.stringToHclTerraform(struct!.srcmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svid: {
      value: cdktf.numberToHclTerraform(struct!.svid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack: {
      value: cdktf.stringToHclTerraform(struct!.tcpAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_cwr: {
      value: cdktf.stringToHclTerraform(struct!.tcpCwr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_ece: {
      value: cdktf.stringToHclTerraform(struct!.tcpEce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin: {
      value: cdktf.stringToHclTerraform(struct!.tcpFin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_push: {
      value: cdktf.stringToHclTerraform(struct!.tcpPush),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_rst: {
      value: cdktf.stringToHclTerraform(struct!.tcpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_urg: {
      value: cdktf.stringToHclTerraform(struct!.tcpUrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_cfi: {
      value: cdktf.stringToHclTerraform(struct!.tgtCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_prio: {
      value: cdktf.numberToHclTerraform(struct!.tgtPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgt_updt: {
      value: cdktf.stringToHclTerraform(struct!.tgtUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp: {
      value: cdktf.numberToHclTerraform(struct!.tp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tvid: {
      value: cdktf.numberToHclTerraform(struct!.tvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdid: {
      value: cdktf.numberToHclTerraform(struct!.vdid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._df !== undefined) {
      hasAnyValues = true;
      internalValueResult.df = this._df;
    }
    if (this._dstip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstip = this._dstip;
    }
    if (this._dstipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstipv6 = this._dstipv6;
    }
    if (this._dstmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstmac = this._dstmac;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._extTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTag = this._extTag;
    }
    if (this._fragOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragOff = this._fragOff;
    }
    if (this._genBufCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.genBufCnt = this._genBufCnt;
    }
    if (this._genIv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genIv = this._genIv;
    }
    if (this._genL3Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL3Flags = this._genL3Flags;
    }
    if (this._genL4Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL4Flags = this._genL4Flags;
    }
    if (this._genPktCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPktCtrl = this._genPktCtrl;
    }
    if (this._genPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPri = this._genPri;
    }
    if (this._genPriV !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPriV = this._genPriV;
    }
    if (this._genTv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genTv = this._genTv;
    }
    if (this._ihl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihl = this._ihl;
    }
    if (this._ip4Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip4Id = this._ip4Id;
    }
    if (this._ip6Fl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Fl = this._ip6Fl;
    }
    if (this._ipver !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipver = this._ipver;
    }
    if (this._l4Wd10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd10 = this._l4Wd10;
    }
    if (this._l4Wd11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd11 = this._l4Wd11;
    }
    if (this._l4Wd8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd8 = this._l4Wd8;
    }
    if (this._l4Wd9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd9 = this._l4Wd9;
    }
    if (this._mf !== undefined) {
      hasAnyValues = true;
      internalValueResult.mf = this._mf;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._slink !== undefined) {
      hasAnyValues = true;
      internalValueResult.slink = this._slink;
    }
    if (this._smacChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacChange = this._smacChange;
    }
    if (this._sp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp;
    }
    if (this._srcCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCfi = this._srcCfi;
    }
    if (this._srcPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrio = this._srcPrio;
    }
    if (this._srcUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUpdt = this._srcUpdt;
    }
    if (this._srcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcip = this._srcip;
    }
    if (this._srcipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipv6 = this._srcipv6;
    }
    if (this._srcmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcmac = this._srcmac;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    if (this._svid !== undefined) {
      hasAnyValues = true;
      internalValueResult.svid = this._svid;
    }
    if (this._tcpAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAck = this._tcpAck;
    }
    if (this._tcpCwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwr = this._tcpCwr;
    }
    if (this._tcpEce !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEce = this._tcpEce;
    }
    if (this._tcpFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFin = this._tcpFin;
    }
    if (this._tcpPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPush = this._tcpPush;
    }
    if (this._tcpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRst = this._tcpRst;
    }
    if (this._tcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn;
    }
    if (this._tcpUrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrg = this._tcpUrg;
    }
    if (this._tgtCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtCfi = this._tgtCfi;
    }
    if (this._tgtPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtPrio = this._tgtPrio;
    }
    if (this._tgtUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtUpdt = this._tgtUpdt;
    }
    if (this._tgtV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtV = this._tgtV;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tp = this._tp;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._tvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tvid = this._tvid;
    }
    if (this._vdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdid = this._vdid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._df = undefined;
      this._dstip = undefined;
      this._dstipv6 = undefined;
      this._dstmac = undefined;
      this._dstport = undefined;
      this._ethertype = undefined;
      this._extTag = undefined;
      this._fragOff = undefined;
      this._genBufCnt = undefined;
      this._genIv = undefined;
      this._genL3Flags = undefined;
      this._genL4Flags = undefined;
      this._genPktCtrl = undefined;
      this._genPri = undefined;
      this._genPriV = undefined;
      this._genTv = undefined;
      this._ihl = undefined;
      this._ip4Id = undefined;
      this._ip6Fl = undefined;
      this._ipver = undefined;
      this._l4Wd10 = undefined;
      this._l4Wd11 = undefined;
      this._l4Wd8 = undefined;
      this._l4Wd9 = undefined;
      this._mf = undefined;
      this._protocol = undefined;
      this._slink = undefined;
      this._smacChange = undefined;
      this._sp = undefined;
      this._srcCfi = undefined;
      this._srcPrio = undefined;
      this._srcUpdt = undefined;
      this._srcip = undefined;
      this._srcipv6 = undefined;
      this._srcmac = undefined;
      this._srcport = undefined;
      this._svid = undefined;
      this._tcpAck = undefined;
      this._tcpCwr = undefined;
      this._tcpEce = undefined;
      this._tcpFin = undefined;
      this._tcpPush = undefined;
      this._tcpRst = undefined;
      this._tcpSyn = undefined;
      this._tcpUrg = undefined;
      this._tgtCfi = undefined;
      this._tgtPrio = undefined;
      this._tgtUpdt = undefined;
      this._tgtV = undefined;
      this._tos = undefined;
      this._tp = undefined;
      this._ttl = undefined;
      this._tvid = undefined;
      this._vdid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._df = value.df;
      this._dstip = value.dstip;
      this._dstipv6 = value.dstipv6;
      this._dstmac = value.dstmac;
      this._dstport = value.dstport;
      this._ethertype = value.ethertype;
      this._extTag = value.extTag;
      this._fragOff = value.fragOff;
      this._genBufCnt = value.genBufCnt;
      this._genIv = value.genIv;
      this._genL3Flags = value.genL3Flags;
      this._genL4Flags = value.genL4Flags;
      this._genPktCtrl = value.genPktCtrl;
      this._genPri = value.genPri;
      this._genPriV = value.genPriV;
      this._genTv = value.genTv;
      this._ihl = value.ihl;
      this._ip4Id = value.ip4Id;
      this._ip6Fl = value.ip6Fl;
      this._ipver = value.ipver;
      this._l4Wd10 = value.l4Wd10;
      this._l4Wd11 = value.l4Wd11;
      this._l4Wd8 = value.l4Wd8;
      this._l4Wd9 = value.l4Wd9;
      this._mf = value.mf;
      this._protocol = value.protocol;
      this._slink = value.slink;
      this._smacChange = value.smacChange;
      this._sp = value.sp;
      this._srcCfi = value.srcCfi;
      this._srcPrio = value.srcPrio;
      this._srcUpdt = value.srcUpdt;
      this._srcip = value.srcip;
      this._srcipv6 = value.srcipv6;
      this._srcmac = value.srcmac;
      this._srcport = value.srcport;
      this._svid = value.svid;
      this._tcpAck = value.tcpAck;
      this._tcpCwr = value.tcpCwr;
      this._tcpEce = value.tcpEce;
      this._tcpFin = value.tcpFin;
      this._tcpPush = value.tcpPush;
      this._tcpRst = value.tcpRst;
      this._tcpSyn = value.tcpSyn;
      this._tcpUrg = value.tcpUrg;
      this._tgtCfi = value.tgtCfi;
      this._tgtPrio = value.tgtPrio;
      this._tgtUpdt = value.tgtUpdt;
      this._tgtV = value.tgtV;
      this._tos = value.tos;
      this._tp = value.tp;
      this._ttl = value.ttl;
      this._tvid = value.tvid;
      this._vdid = value.vdid;
    }
  }

  // df - computed: true, optional: true, required: false
  private _df?: string; 
  public get df() {
    return this.getStringAttribute('df');
  }
  public set df(value: string) {
    this._df = value;
  }
  public resetDf() {
    this._df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfInput() {
    return this._df;
  }

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
  }

  // dstipv6 - computed: true, optional: true, required: false
  private _dstipv6?: string; 
  public get dstipv6() {
    return this.getStringAttribute('dstipv6');
  }
  public set dstipv6(value: string) {
    this._dstipv6 = value;
  }
  public resetDstipv6() {
    this._dstipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipv6Input() {
    return this._dstipv6;
  }

  // dstmac - computed: true, optional: true, required: false
  private _dstmac?: string; 
  public get dstmac() {
    return this.getStringAttribute('dstmac');
  }
  public set dstmac(value: string) {
    this._dstmac = value;
  }
  public resetDstmac() {
    this._dstmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstmacInput() {
    return this._dstmac;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // ethertype - computed: true, optional: true, required: false
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // ext_tag - computed: true, optional: true, required: false
  private _extTag?: string; 
  public get extTag() {
    return this.getStringAttribute('ext_tag');
  }
  public set extTag(value: string) {
    this._extTag = value;
  }
  public resetExtTag() {
    this._extTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTagInput() {
    return this._extTag;
  }

  // frag_off - computed: false, optional: true, required: false
  private _fragOff?: number; 
  public get fragOff() {
    return this.getNumberAttribute('frag_off');
  }
  public set fragOff(value: number) {
    this._fragOff = value;
  }
  public resetFragOff() {
    this._fragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragOffInput() {
    return this._fragOff;
  }

  // gen_buf_cnt - computed: false, optional: true, required: false
  private _genBufCnt?: number; 
  public get genBufCnt() {
    return this.getNumberAttribute('gen_buf_cnt');
  }
  public set genBufCnt(value: number) {
    this._genBufCnt = value;
  }
  public resetGenBufCnt() {
    this._genBufCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genBufCntInput() {
    return this._genBufCnt;
  }

  // gen_iv - computed: true, optional: true, required: false
  private _genIv?: string; 
  public get genIv() {
    return this.getStringAttribute('gen_iv');
  }
  public set genIv(value: string) {
    this._genIv = value;
  }
  public resetGenIv() {
    this._genIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIvInput() {
    return this._genIv;
  }

  // gen_l3_flags - computed: false, optional: true, required: false
  private _genL3Flags?: number; 
  public get genL3Flags() {
    return this.getNumberAttribute('gen_l3_flags');
  }
  public set genL3Flags(value: number) {
    this._genL3Flags = value;
  }
  public resetGenL3Flags() {
    this._genL3Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL3FlagsInput() {
    return this._genL3Flags;
  }

  // gen_l4_flags - computed: false, optional: true, required: false
  private _genL4Flags?: number; 
  public get genL4Flags() {
    return this.getNumberAttribute('gen_l4_flags');
  }
  public set genL4Flags(value: number) {
    this._genL4Flags = value;
  }
  public resetGenL4Flags() {
    this._genL4Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL4FlagsInput() {
    return this._genL4Flags;
  }

  // gen_pkt_ctrl - computed: false, optional: true, required: false
  private _genPktCtrl?: number; 
  public get genPktCtrl() {
    return this.getNumberAttribute('gen_pkt_ctrl');
  }
  public set genPktCtrl(value: number) {
    this._genPktCtrl = value;
  }
  public resetGenPktCtrl() {
    this._genPktCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPktCtrlInput() {
    return this._genPktCtrl;
  }

  // gen_pri - computed: false, optional: true, required: false
  private _genPri?: number; 
  public get genPri() {
    return this.getNumberAttribute('gen_pri');
  }
  public set genPri(value: number) {
    this._genPri = value;
  }
  public resetGenPri() {
    this._genPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriInput() {
    return this._genPri;
  }

  // gen_pri_v - computed: true, optional: true, required: false
  private _genPriV?: string; 
  public get genPriV() {
    return this.getStringAttribute('gen_pri_v');
  }
  public set genPriV(value: string) {
    this._genPriV = value;
  }
  public resetGenPriV() {
    this._genPriV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriVInput() {
    return this._genPriV;
  }

  // gen_tv - computed: true, optional: true, required: false
  private _genTv?: string; 
  public get genTv() {
    return this.getStringAttribute('gen_tv');
  }
  public set genTv(value: string) {
    this._genTv = value;
  }
  public resetGenTv() {
    this._genTv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTvInput() {
    return this._genTv;
  }

  // ihl - computed: false, optional: true, required: false
  private _ihl?: number; 
  public get ihl() {
    return this.getNumberAttribute('ihl');
  }
  public set ihl(value: number) {
    this._ihl = value;
  }
  public resetIhl() {
    this._ihl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlInput() {
    return this._ihl;
  }

  // ip4_id - computed: false, optional: true, required: false
  private _ip4Id?: number; 
  public get ip4Id() {
    return this.getNumberAttribute('ip4_id');
  }
  public set ip4Id(value: number) {
    this._ip4Id = value;
  }
  public resetIp4Id() {
    this._ip4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4IdInput() {
    return this._ip4Id;
  }

  // ip6_fl - computed: false, optional: true, required: false
  private _ip6Fl?: number; 
  public get ip6Fl() {
    return this.getNumberAttribute('ip6_fl');
  }
  public set ip6Fl(value: number) {
    this._ip6Fl = value;
  }
  public resetIp6Fl() {
    this._ip6Fl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6FlInput() {
    return this._ip6Fl;
  }

  // ipver - computed: false, optional: true, required: false
  private _ipver?: number; 
  public get ipver() {
    return this.getNumberAttribute('ipver');
  }
  public set ipver(value: number) {
    this._ipver = value;
  }
  public resetIpver() {
    this._ipver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipverInput() {
    return this._ipver;
  }

  // l4_wd10 - computed: false, optional: true, required: false
  private _l4Wd10?: number; 
  public get l4Wd10() {
    return this.getNumberAttribute('l4_wd10');
  }
  public set l4Wd10(value: number) {
    this._l4Wd10 = value;
  }
  public resetL4Wd10() {
    this._l4Wd10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd10Input() {
    return this._l4Wd10;
  }

  // l4_wd11 - computed: false, optional: true, required: false
  private _l4Wd11?: number; 
  public get l4Wd11() {
    return this.getNumberAttribute('l4_wd11');
  }
  public set l4Wd11(value: number) {
    this._l4Wd11 = value;
  }
  public resetL4Wd11() {
    this._l4Wd11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd11Input() {
    return this._l4Wd11;
  }

  // l4_wd8 - computed: false, optional: true, required: false
  private _l4Wd8?: number; 
  public get l4Wd8() {
    return this.getNumberAttribute('l4_wd8');
  }
  public set l4Wd8(value: number) {
    this._l4Wd8 = value;
  }
  public resetL4Wd8() {
    this._l4Wd8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd8Input() {
    return this._l4Wd8;
  }

  // l4_wd9 - computed: false, optional: true, required: false
  private _l4Wd9?: number; 
  public get l4Wd9() {
    return this.getNumberAttribute('l4_wd9');
  }
  public set l4Wd9(value: number) {
    this._l4Wd9 = value;
  }
  public resetL4Wd9() {
    this._l4Wd9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd9Input() {
    return this._l4Wd9;
  }

  // mf - computed: true, optional: true, required: false
  private _mf?: string; 
  public get mf() {
    return this.getStringAttribute('mf');
  }
  public set mf(value: string) {
    this._mf = value;
  }
  public resetMf() {
    this._mf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfInput() {
    return this._mf;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // slink - computed: false, optional: true, required: false
  private _slink?: number; 
  public get slink() {
    return this.getNumberAttribute('slink');
  }
  public set slink(value: number) {
    this._slink = value;
  }
  public resetSlink() {
    this._slink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slinkInput() {
    return this._slink;
  }

  // smac_change - computed: true, optional: true, required: false
  private _smacChange?: string; 
  public get smacChange() {
    return this.getStringAttribute('smac_change');
  }
  public set smacChange(value: string) {
    this._smacChange = value;
  }
  public resetSmacChange() {
    this._smacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacChangeInput() {
    return this._smacChange;
  }

  // sp - computed: false, optional: true, required: false
  private _sp?: number; 
  public get sp() {
    return this.getNumberAttribute('sp');
  }
  public set sp(value: number) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // src_cfi - computed: true, optional: true, required: false
  private _srcCfi?: string; 
  public get srcCfi() {
    return this.getStringAttribute('src_cfi');
  }
  public set srcCfi(value: string) {
    this._srcCfi = value;
  }
  public resetSrcCfi() {
    this._srcCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCfiInput() {
    return this._srcCfi;
  }

  // src_prio - computed: false, optional: true, required: false
  private _srcPrio?: number; 
  public get srcPrio() {
    return this.getNumberAttribute('src_prio');
  }
  public set srcPrio(value: number) {
    this._srcPrio = value;
  }
  public resetSrcPrio() {
    this._srcPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrioInput() {
    return this._srcPrio;
  }

  // src_updt - computed: true, optional: true, required: false
  private _srcUpdt?: string; 
  public get srcUpdt() {
    return this.getStringAttribute('src_updt');
  }
  public set srcUpdt(value: string) {
    this._srcUpdt = value;
  }
  public resetSrcUpdt() {
    this._srcUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUpdtInput() {
    return this._srcUpdt;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // svid - computed: false, optional: true, required: false
  private _svid?: number; 
  public get svid() {
    return this.getNumberAttribute('svid');
  }
  public set svid(value: number) {
    this._svid = value;
  }
  public resetSvid() {
    this._svid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svidInput() {
    return this._svid;
  }

  // tcp_ack - computed: true, optional: true, required: false
  private _tcpAck?: string; 
  public get tcpAck() {
    return this.getStringAttribute('tcp_ack');
  }
  public set tcpAck(value: string) {
    this._tcpAck = value;
  }
  public resetTcpAck() {
    this._tcpAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckInput() {
    return this._tcpAck;
  }

  // tcp_cwr - computed: true, optional: true, required: false
  private _tcpCwr?: string; 
  public get tcpCwr() {
    return this.getStringAttribute('tcp_cwr');
  }
  public set tcpCwr(value: string) {
    this._tcpCwr = value;
  }
  public resetTcpCwr() {
    this._tcpCwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrInput() {
    return this._tcpCwr;
  }

  // tcp_ece - computed: true, optional: true, required: false
  private _tcpEce?: string; 
  public get tcpEce() {
    return this.getStringAttribute('tcp_ece');
  }
  public set tcpEce(value: string) {
    this._tcpEce = value;
  }
  public resetTcpEce() {
    this._tcpEce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceInput() {
    return this._tcpEce;
  }

  // tcp_fin - computed: true, optional: true, required: false
  private _tcpFin?: string; 
  public get tcpFin() {
    return this.getStringAttribute('tcp_fin');
  }
  public set tcpFin(value: string) {
    this._tcpFin = value;
  }
  public resetTcpFin() {
    this._tcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinInput() {
    return this._tcpFin;
  }

  // tcp_push - computed: true, optional: true, required: false
  private _tcpPush?: string; 
  public get tcpPush() {
    return this.getStringAttribute('tcp_push');
  }
  public set tcpPush(value: string) {
    this._tcpPush = value;
  }
  public resetTcpPush() {
    this._tcpPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPushInput() {
    return this._tcpPush;
  }

  // tcp_rst - computed: true, optional: true, required: false
  private _tcpRst?: string; 
  public get tcpRst() {
    return this.getStringAttribute('tcp_rst');
  }
  public set tcpRst(value: string) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn?: string; 
  public get tcpSyn() {
    return this.getStringAttribute('tcp_syn');
  }
  public set tcpSyn(value: string) {
    this._tcpSyn = value;
  }
  public resetTcpSyn() {
    this._tcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn;
  }

  // tcp_urg - computed: true, optional: true, required: false
  private _tcpUrg?: string; 
  public get tcpUrg() {
    return this.getStringAttribute('tcp_urg');
  }
  public set tcpUrg(value: string) {
    this._tcpUrg = value;
  }
  public resetTcpUrg() {
    this._tcpUrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgInput() {
    return this._tcpUrg;
  }

  // tgt_cfi - computed: true, optional: true, required: false
  private _tgtCfi?: string; 
  public get tgtCfi() {
    return this.getStringAttribute('tgt_cfi');
  }
  public set tgtCfi(value: string) {
    this._tgtCfi = value;
  }
  public resetTgtCfi() {
    this._tgtCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtCfiInput() {
    return this._tgtCfi;
  }

  // tgt_prio - computed: false, optional: true, required: false
  private _tgtPrio?: number; 
  public get tgtPrio() {
    return this.getNumberAttribute('tgt_prio');
  }
  public set tgtPrio(value: number) {
    this._tgtPrio = value;
  }
  public resetTgtPrio() {
    this._tgtPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPrioInput() {
    return this._tgtPrio;
  }

  // tgt_updt - computed: true, optional: true, required: false
  private _tgtUpdt?: string; 
  public get tgtUpdt() {
    return this.getStringAttribute('tgt_updt');
  }
  public set tgtUpdt(value: string) {
    this._tgtUpdt = value;
  }
  public resetTgtUpdt() {
    this._tgtUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtUpdtInput() {
    return this._tgtUpdt;
  }

  // tgt_v - computed: true, optional: true, required: false
  private _tgtV?: string; 
  public get tgtV() {
    return this.getStringAttribute('tgt_v');
  }
  public set tgtV(value: string) {
    this._tgtV = value;
  }
  public resetTgtV() {
    this._tgtV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtVInput() {
    return this._tgtV;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tp - computed: false, optional: true, required: false
  private _tp?: number; 
  public get tp() {
    return this.getNumberAttribute('tp');
  }
  public set tp(value: number) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // tvid - computed: false, optional: true, required: false
  private _tvid?: number; 
  public get tvid() {
    return this.getNumberAttribute('tvid');
  }
  public set tvid(value: number) {
    this._tvid = value;
  }
  public resetTvid() {
    this._tvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvidInput() {
    return this._tvid;
  }

  // vdid - computed: false, optional: true, required: false
  private _vdid?: number; 
  public get vdid() {
    return this.getNumberAttribute('vdid');
  }
  public set vdid(value: number) {
    this._vdid = value;
  }
  public resetVdid() {
    this._vdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdidInput() {
    return this._vdid;
  }
}
export interface ObjectSystemNpuNputcamMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#df ObjectSystemNpuNputcam#df}
  */
  readonly df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstip ObjectSystemNpuNputcam#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstipv6 ObjectSystemNpuNputcam#dstipv6}
  */
  readonly dstipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstmac ObjectSystemNpuNputcam#dstmac}
  */
  readonly dstmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dstport ObjectSystemNpuNputcam#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ethertype ObjectSystemNpuNputcam#ethertype}
  */
  readonly ethertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ext_tag ObjectSystemNpuNputcam#ext_tag}
  */
  readonly extTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#frag_off ObjectSystemNpuNputcam#frag_off}
  */
  readonly fragOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_buf_cnt ObjectSystemNpuNputcam#gen_buf_cnt}
  */
  readonly genBufCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_iv ObjectSystemNpuNputcam#gen_iv}
  */
  readonly genIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_l3_flags ObjectSystemNpuNputcam#gen_l3_flags}
  */
  readonly genL3Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_l4_flags ObjectSystemNpuNputcam#gen_l4_flags}
  */
  readonly genL4Flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pkt_ctrl ObjectSystemNpuNputcam#gen_pkt_ctrl}
  */
  readonly genPktCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pri ObjectSystemNpuNputcam#gen_pri}
  */
  readonly genPri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_pri_v ObjectSystemNpuNputcam#gen_pri_v}
  */
  readonly genPriV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#gen_tv ObjectSystemNpuNputcam#gen_tv}
  */
  readonly genTv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ihl ObjectSystemNpuNputcam#ihl}
  */
  readonly ihl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ip4_id ObjectSystemNpuNputcam#ip4_id}
  */
  readonly ip4Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ip6_fl ObjectSystemNpuNputcam#ip6_fl}
  */
  readonly ip6Fl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ipver ObjectSystemNpuNputcam#ipver}
  */
  readonly ipver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd10 ObjectSystemNpuNputcam#l4_wd10}
  */
  readonly l4Wd10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd11 ObjectSystemNpuNputcam#l4_wd11}
  */
  readonly l4Wd11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd8 ObjectSystemNpuNputcam#l4_wd8}
  */
  readonly l4Wd8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#l4_wd9 ObjectSystemNpuNputcam#l4_wd9}
  */
  readonly l4Wd9?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mf ObjectSystemNpuNputcam#mf}
  */
  readonly mf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#protocol ObjectSystemNpuNputcam#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#slink ObjectSystemNpuNputcam#slink}
  */
  readonly slink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#smac_change ObjectSystemNpuNputcam#smac_change}
  */
  readonly smacChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#sp ObjectSystemNpuNputcam#sp}
  */
  readonly sp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_cfi ObjectSystemNpuNputcam#src_cfi}
  */
  readonly srcCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_prio ObjectSystemNpuNputcam#src_prio}
  */
  readonly srcPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#src_updt ObjectSystemNpuNputcam#src_updt}
  */
  readonly srcUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcip ObjectSystemNpuNputcam#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcipv6 ObjectSystemNpuNputcam#srcipv6}
  */
  readonly srcipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcmac ObjectSystemNpuNputcam#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#srcport ObjectSystemNpuNputcam#srcport}
  */
  readonly srcport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#svid ObjectSystemNpuNputcam#svid}
  */
  readonly svid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_ack ObjectSystemNpuNputcam#tcp_ack}
  */
  readonly tcpAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_cwr ObjectSystemNpuNputcam#tcp_cwr}
  */
  readonly tcpCwr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_ece ObjectSystemNpuNputcam#tcp_ece}
  */
  readonly tcpEce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_fin ObjectSystemNpuNputcam#tcp_fin}
  */
  readonly tcpFin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_push ObjectSystemNpuNputcam#tcp_push}
  */
  readonly tcpPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_rst ObjectSystemNpuNputcam#tcp_rst}
  */
  readonly tcpRst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_syn ObjectSystemNpuNputcam#tcp_syn}
  */
  readonly tcpSyn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tcp_urg ObjectSystemNpuNputcam#tcp_urg}
  */
  readonly tcpUrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_cfi ObjectSystemNpuNputcam#tgt_cfi}
  */
  readonly tgtCfi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_prio ObjectSystemNpuNputcam#tgt_prio}
  */
  readonly tgtPrio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_updt ObjectSystemNpuNputcam#tgt_updt}
  */
  readonly tgtUpdt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgt_v ObjectSystemNpuNputcam#tgt_v}
  */
  readonly tgtV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tos ObjectSystemNpuNputcam#tos}
  */
  readonly tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tp ObjectSystemNpuNputcam#tp}
  */
  readonly tp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#ttl ObjectSystemNpuNputcam#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tvid ObjectSystemNpuNputcam#tvid}
  */
  readonly tvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdid ObjectSystemNpuNputcam#vdid}
  */
  readonly vdid?: number;
}

export function objectSystemNpuNputcamMaskToTerraform(struct?: ObjectSystemNpuNputcamMaskOutputReference | ObjectSystemNpuNputcamMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    df: cdktf.stringToTerraform(struct!.df),
    dstip: cdktf.stringToTerraform(struct!.dstip),
    dstipv6: cdktf.stringToTerraform(struct!.dstipv6),
    dstmac: cdktf.stringToTerraform(struct!.dstmac),
    dstport: cdktf.numberToTerraform(struct!.dstport),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    ext_tag: cdktf.stringToTerraform(struct!.extTag),
    frag_off: cdktf.numberToTerraform(struct!.fragOff),
    gen_buf_cnt: cdktf.numberToTerraform(struct!.genBufCnt),
    gen_iv: cdktf.stringToTerraform(struct!.genIv),
    gen_l3_flags: cdktf.numberToTerraform(struct!.genL3Flags),
    gen_l4_flags: cdktf.numberToTerraform(struct!.genL4Flags),
    gen_pkt_ctrl: cdktf.numberToTerraform(struct!.genPktCtrl),
    gen_pri: cdktf.numberToTerraform(struct!.genPri),
    gen_pri_v: cdktf.stringToTerraform(struct!.genPriV),
    gen_tv: cdktf.stringToTerraform(struct!.genTv),
    ihl: cdktf.numberToTerraform(struct!.ihl),
    ip4_id: cdktf.numberToTerraform(struct!.ip4Id),
    ip6_fl: cdktf.numberToTerraform(struct!.ip6Fl),
    ipver: cdktf.numberToTerraform(struct!.ipver),
    l4_wd10: cdktf.numberToTerraform(struct!.l4Wd10),
    l4_wd11: cdktf.numberToTerraform(struct!.l4Wd11),
    l4_wd8: cdktf.numberToTerraform(struct!.l4Wd8),
    l4_wd9: cdktf.numberToTerraform(struct!.l4Wd9),
    mf: cdktf.stringToTerraform(struct!.mf),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    slink: cdktf.numberToTerraform(struct!.slink),
    smac_change: cdktf.stringToTerraform(struct!.smacChange),
    sp: cdktf.numberToTerraform(struct!.sp),
    src_cfi: cdktf.stringToTerraform(struct!.srcCfi),
    src_prio: cdktf.numberToTerraform(struct!.srcPrio),
    src_updt: cdktf.stringToTerraform(struct!.srcUpdt),
    srcip: cdktf.stringToTerraform(struct!.srcip),
    srcipv6: cdktf.stringToTerraform(struct!.srcipv6),
    srcmac: cdktf.stringToTerraform(struct!.srcmac),
    srcport: cdktf.numberToTerraform(struct!.srcport),
    svid: cdktf.numberToTerraform(struct!.svid),
    tcp_ack: cdktf.stringToTerraform(struct!.tcpAck),
    tcp_cwr: cdktf.stringToTerraform(struct!.tcpCwr),
    tcp_ece: cdktf.stringToTerraform(struct!.tcpEce),
    tcp_fin: cdktf.stringToTerraform(struct!.tcpFin),
    tcp_push: cdktf.stringToTerraform(struct!.tcpPush),
    tcp_rst: cdktf.stringToTerraform(struct!.tcpRst),
    tcp_syn: cdktf.stringToTerraform(struct!.tcpSyn),
    tcp_urg: cdktf.stringToTerraform(struct!.tcpUrg),
    tgt_cfi: cdktf.stringToTerraform(struct!.tgtCfi),
    tgt_prio: cdktf.numberToTerraform(struct!.tgtPrio),
    tgt_updt: cdktf.stringToTerraform(struct!.tgtUpdt),
    tgt_v: cdktf.stringToTerraform(struct!.tgtV),
    tos: cdktf.numberToTerraform(struct!.tos),
    tp: cdktf.numberToTerraform(struct!.tp),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    tvid: cdktf.numberToTerraform(struct!.tvid),
    vdid: cdktf.numberToTerraform(struct!.vdid),
  }
}


export function objectSystemNpuNputcamMaskToHclTerraform(struct?: ObjectSystemNpuNputcamMaskOutputReference | ObjectSystemNpuNputcamMask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    df: {
      value: cdktf.stringToHclTerraform(struct!.df),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstip: {
      value: cdktf.stringToHclTerraform(struct!.dstip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstmac: {
      value: cdktf.stringToHclTerraform(struct!.dstmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.numberToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_tag: {
      value: cdktf.stringToHclTerraform(struct!.extTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_off: {
      value: cdktf.numberToHclTerraform(struct!.fragOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_buf_cnt: {
      value: cdktf.numberToHclTerraform(struct!.genBufCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_iv: {
      value: cdktf.stringToHclTerraform(struct!.genIv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_l3_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL3Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_l4_flags: {
      value: cdktf.numberToHclTerraform(struct!.genL4Flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pkt_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.genPktCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri: {
      value: cdktf.numberToHclTerraform(struct!.genPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gen_pri_v: {
      value: cdktf.stringToHclTerraform(struct!.genPriV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gen_tv: {
      value: cdktf.stringToHclTerraform(struct!.genTv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ihl: {
      value: cdktf.numberToHclTerraform(struct!.ihl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip4_id: {
      value: cdktf.numberToHclTerraform(struct!.ip4Id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_fl: {
      value: cdktf.numberToHclTerraform(struct!.ip6Fl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipver: {
      value: cdktf.numberToHclTerraform(struct!.ipver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd10: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd11: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd8: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_wd9: {
      value: cdktf.numberToHclTerraform(struct!.l4Wd9),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mf: {
      value: cdktf.stringToHclTerraform(struct!.mf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slink: {
      value: cdktf.numberToHclTerraform(struct!.slink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_change: {
      value: cdktf.stringToHclTerraform(struct!.smacChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp: {
      value: cdktf.numberToHclTerraform(struct!.sp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_cfi: {
      value: cdktf.stringToHclTerraform(struct!.srcCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_prio: {
      value: cdktf.numberToHclTerraform(struct!.srcPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_updt: {
      value: cdktf.stringToHclTerraform(struct!.srcUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcip: {
      value: cdktf.stringToHclTerraform(struct!.srcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcmac: {
      value: cdktf.stringToHclTerraform(struct!.srcmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.numberToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svid: {
      value: cdktf.numberToHclTerraform(struct!.svid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack: {
      value: cdktf.stringToHclTerraform(struct!.tcpAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_cwr: {
      value: cdktf.stringToHclTerraform(struct!.tcpCwr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_ece: {
      value: cdktf.stringToHclTerraform(struct!.tcpEce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_fin: {
      value: cdktf.stringToHclTerraform(struct!.tcpFin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_push: {
      value: cdktf.stringToHclTerraform(struct!.tcpPush),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_rst: {
      value: cdktf.stringToHclTerraform(struct!.tcpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_syn: {
      value: cdktf.stringToHclTerraform(struct!.tcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_urg: {
      value: cdktf.stringToHclTerraform(struct!.tcpUrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_cfi: {
      value: cdktf.stringToHclTerraform(struct!.tgtCfi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_prio: {
      value: cdktf.numberToHclTerraform(struct!.tgtPrio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgt_updt: {
      value: cdktf.stringToHclTerraform(struct!.tgtUpdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.numberToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp: {
      value: cdktf.numberToHclTerraform(struct!.tp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tvid: {
      value: cdktf.numberToHclTerraform(struct!.tvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdid: {
      value: cdktf.numberToHclTerraform(struct!.vdid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamMaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._df !== undefined) {
      hasAnyValues = true;
      internalValueResult.df = this._df;
    }
    if (this._dstip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstip = this._dstip;
    }
    if (this._dstipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstipv6 = this._dstipv6;
    }
    if (this._dstmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstmac = this._dstmac;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._extTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTag = this._extTag;
    }
    if (this._fragOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragOff = this._fragOff;
    }
    if (this._genBufCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.genBufCnt = this._genBufCnt;
    }
    if (this._genIv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genIv = this._genIv;
    }
    if (this._genL3Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL3Flags = this._genL3Flags;
    }
    if (this._genL4Flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.genL4Flags = this._genL4Flags;
    }
    if (this._genPktCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPktCtrl = this._genPktCtrl;
    }
    if (this._genPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPri = this._genPri;
    }
    if (this._genPriV !== undefined) {
      hasAnyValues = true;
      internalValueResult.genPriV = this._genPriV;
    }
    if (this._genTv !== undefined) {
      hasAnyValues = true;
      internalValueResult.genTv = this._genTv;
    }
    if (this._ihl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ihl = this._ihl;
    }
    if (this._ip4Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip4Id = this._ip4Id;
    }
    if (this._ip6Fl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Fl = this._ip6Fl;
    }
    if (this._ipver !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipver = this._ipver;
    }
    if (this._l4Wd10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd10 = this._l4Wd10;
    }
    if (this._l4Wd11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd11 = this._l4Wd11;
    }
    if (this._l4Wd8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd8 = this._l4Wd8;
    }
    if (this._l4Wd9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Wd9 = this._l4Wd9;
    }
    if (this._mf !== undefined) {
      hasAnyValues = true;
      internalValueResult.mf = this._mf;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._slink !== undefined) {
      hasAnyValues = true;
      internalValueResult.slink = this._slink;
    }
    if (this._smacChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacChange = this._smacChange;
    }
    if (this._sp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp;
    }
    if (this._srcCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCfi = this._srcCfi;
    }
    if (this._srcPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrio = this._srcPrio;
    }
    if (this._srcUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUpdt = this._srcUpdt;
    }
    if (this._srcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcip = this._srcip;
    }
    if (this._srcipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipv6 = this._srcipv6;
    }
    if (this._srcmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcmac = this._srcmac;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    if (this._svid !== undefined) {
      hasAnyValues = true;
      internalValueResult.svid = this._svid;
    }
    if (this._tcpAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAck = this._tcpAck;
    }
    if (this._tcpCwr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwr = this._tcpCwr;
    }
    if (this._tcpEce !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEce = this._tcpEce;
    }
    if (this._tcpFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFin = this._tcpFin;
    }
    if (this._tcpPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPush = this._tcpPush;
    }
    if (this._tcpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRst = this._tcpRst;
    }
    if (this._tcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyn = this._tcpSyn;
    }
    if (this._tcpUrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrg = this._tcpUrg;
    }
    if (this._tgtCfi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtCfi = this._tgtCfi;
    }
    if (this._tgtPrio !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtPrio = this._tgtPrio;
    }
    if (this._tgtUpdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtUpdt = this._tgtUpdt;
    }
    if (this._tgtV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtV = this._tgtV;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tp = this._tp;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._tvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tvid = this._tvid;
    }
    if (this._vdid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdid = this._vdid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._df = undefined;
      this._dstip = undefined;
      this._dstipv6 = undefined;
      this._dstmac = undefined;
      this._dstport = undefined;
      this._ethertype = undefined;
      this._extTag = undefined;
      this._fragOff = undefined;
      this._genBufCnt = undefined;
      this._genIv = undefined;
      this._genL3Flags = undefined;
      this._genL4Flags = undefined;
      this._genPktCtrl = undefined;
      this._genPri = undefined;
      this._genPriV = undefined;
      this._genTv = undefined;
      this._ihl = undefined;
      this._ip4Id = undefined;
      this._ip6Fl = undefined;
      this._ipver = undefined;
      this._l4Wd10 = undefined;
      this._l4Wd11 = undefined;
      this._l4Wd8 = undefined;
      this._l4Wd9 = undefined;
      this._mf = undefined;
      this._protocol = undefined;
      this._slink = undefined;
      this._smacChange = undefined;
      this._sp = undefined;
      this._srcCfi = undefined;
      this._srcPrio = undefined;
      this._srcUpdt = undefined;
      this._srcip = undefined;
      this._srcipv6 = undefined;
      this._srcmac = undefined;
      this._srcport = undefined;
      this._svid = undefined;
      this._tcpAck = undefined;
      this._tcpCwr = undefined;
      this._tcpEce = undefined;
      this._tcpFin = undefined;
      this._tcpPush = undefined;
      this._tcpRst = undefined;
      this._tcpSyn = undefined;
      this._tcpUrg = undefined;
      this._tgtCfi = undefined;
      this._tgtPrio = undefined;
      this._tgtUpdt = undefined;
      this._tgtV = undefined;
      this._tos = undefined;
      this._tp = undefined;
      this._ttl = undefined;
      this._tvid = undefined;
      this._vdid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._df = value.df;
      this._dstip = value.dstip;
      this._dstipv6 = value.dstipv6;
      this._dstmac = value.dstmac;
      this._dstport = value.dstport;
      this._ethertype = value.ethertype;
      this._extTag = value.extTag;
      this._fragOff = value.fragOff;
      this._genBufCnt = value.genBufCnt;
      this._genIv = value.genIv;
      this._genL3Flags = value.genL3Flags;
      this._genL4Flags = value.genL4Flags;
      this._genPktCtrl = value.genPktCtrl;
      this._genPri = value.genPri;
      this._genPriV = value.genPriV;
      this._genTv = value.genTv;
      this._ihl = value.ihl;
      this._ip4Id = value.ip4Id;
      this._ip6Fl = value.ip6Fl;
      this._ipver = value.ipver;
      this._l4Wd10 = value.l4Wd10;
      this._l4Wd11 = value.l4Wd11;
      this._l4Wd8 = value.l4Wd8;
      this._l4Wd9 = value.l4Wd9;
      this._mf = value.mf;
      this._protocol = value.protocol;
      this._slink = value.slink;
      this._smacChange = value.smacChange;
      this._sp = value.sp;
      this._srcCfi = value.srcCfi;
      this._srcPrio = value.srcPrio;
      this._srcUpdt = value.srcUpdt;
      this._srcip = value.srcip;
      this._srcipv6 = value.srcipv6;
      this._srcmac = value.srcmac;
      this._srcport = value.srcport;
      this._svid = value.svid;
      this._tcpAck = value.tcpAck;
      this._tcpCwr = value.tcpCwr;
      this._tcpEce = value.tcpEce;
      this._tcpFin = value.tcpFin;
      this._tcpPush = value.tcpPush;
      this._tcpRst = value.tcpRst;
      this._tcpSyn = value.tcpSyn;
      this._tcpUrg = value.tcpUrg;
      this._tgtCfi = value.tgtCfi;
      this._tgtPrio = value.tgtPrio;
      this._tgtUpdt = value.tgtUpdt;
      this._tgtV = value.tgtV;
      this._tos = value.tos;
      this._tp = value.tp;
      this._ttl = value.ttl;
      this._tvid = value.tvid;
      this._vdid = value.vdid;
    }
  }

  // df - computed: true, optional: true, required: false
  private _df?: string; 
  public get df() {
    return this.getStringAttribute('df');
  }
  public set df(value: string) {
    this._df = value;
  }
  public resetDf() {
    this._df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfInput() {
    return this._df;
  }

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
  }

  // dstipv6 - computed: true, optional: true, required: false
  private _dstipv6?: string; 
  public get dstipv6() {
    return this.getStringAttribute('dstipv6');
  }
  public set dstipv6(value: string) {
    this._dstipv6 = value;
  }
  public resetDstipv6() {
    this._dstipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipv6Input() {
    return this._dstipv6;
  }

  // dstmac - computed: true, optional: true, required: false
  private _dstmac?: string; 
  public get dstmac() {
    return this.getStringAttribute('dstmac');
  }
  public set dstmac(value: string) {
    this._dstmac = value;
  }
  public resetDstmac() {
    this._dstmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstmacInput() {
    return this._dstmac;
  }

  // dstport - computed: false, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // ethertype - computed: true, optional: true, required: false
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  public resetEthertype() {
    this._ethertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // ext_tag - computed: true, optional: true, required: false
  private _extTag?: string; 
  public get extTag() {
    return this.getStringAttribute('ext_tag');
  }
  public set extTag(value: string) {
    this._extTag = value;
  }
  public resetExtTag() {
    this._extTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTagInput() {
    return this._extTag;
  }

  // frag_off - computed: false, optional: true, required: false
  private _fragOff?: number; 
  public get fragOff() {
    return this.getNumberAttribute('frag_off');
  }
  public set fragOff(value: number) {
    this._fragOff = value;
  }
  public resetFragOff() {
    this._fragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragOffInput() {
    return this._fragOff;
  }

  // gen_buf_cnt - computed: false, optional: true, required: false
  private _genBufCnt?: number; 
  public get genBufCnt() {
    return this.getNumberAttribute('gen_buf_cnt');
  }
  public set genBufCnt(value: number) {
    this._genBufCnt = value;
  }
  public resetGenBufCnt() {
    this._genBufCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genBufCntInput() {
    return this._genBufCnt;
  }

  // gen_iv - computed: true, optional: true, required: false
  private _genIv?: string; 
  public get genIv() {
    return this.getStringAttribute('gen_iv');
  }
  public set genIv(value: string) {
    this._genIv = value;
  }
  public resetGenIv() {
    this._genIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIvInput() {
    return this._genIv;
  }

  // gen_l3_flags - computed: false, optional: true, required: false
  private _genL3Flags?: number; 
  public get genL3Flags() {
    return this.getNumberAttribute('gen_l3_flags');
  }
  public set genL3Flags(value: number) {
    this._genL3Flags = value;
  }
  public resetGenL3Flags() {
    this._genL3Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL3FlagsInput() {
    return this._genL3Flags;
  }

  // gen_l4_flags - computed: false, optional: true, required: false
  private _genL4Flags?: number; 
  public get genL4Flags() {
    return this.getNumberAttribute('gen_l4_flags');
  }
  public set genL4Flags(value: number) {
    this._genL4Flags = value;
  }
  public resetGenL4Flags() {
    this._genL4Flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genL4FlagsInput() {
    return this._genL4Flags;
  }

  // gen_pkt_ctrl - computed: false, optional: true, required: false
  private _genPktCtrl?: number; 
  public get genPktCtrl() {
    return this.getNumberAttribute('gen_pkt_ctrl');
  }
  public set genPktCtrl(value: number) {
    this._genPktCtrl = value;
  }
  public resetGenPktCtrl() {
    this._genPktCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPktCtrlInput() {
    return this._genPktCtrl;
  }

  // gen_pri - computed: false, optional: true, required: false
  private _genPri?: number; 
  public get genPri() {
    return this.getNumberAttribute('gen_pri');
  }
  public set genPri(value: number) {
    this._genPri = value;
  }
  public resetGenPri() {
    this._genPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriInput() {
    return this._genPri;
  }

  // gen_pri_v - computed: true, optional: true, required: false
  private _genPriV?: string; 
  public get genPriV() {
    return this.getStringAttribute('gen_pri_v');
  }
  public set genPriV(value: string) {
    this._genPriV = value;
  }
  public resetGenPriV() {
    this._genPriV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genPriVInput() {
    return this._genPriV;
  }

  // gen_tv - computed: true, optional: true, required: false
  private _genTv?: string; 
  public get genTv() {
    return this.getStringAttribute('gen_tv');
  }
  public set genTv(value: string) {
    this._genTv = value;
  }
  public resetGenTv() {
    this._genTv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genTvInput() {
    return this._genTv;
  }

  // ihl - computed: false, optional: true, required: false
  private _ihl?: number; 
  public get ihl() {
    return this.getNumberAttribute('ihl');
  }
  public set ihl(value: number) {
    this._ihl = value;
  }
  public resetIhl() {
    this._ihl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ihlInput() {
    return this._ihl;
  }

  // ip4_id - computed: false, optional: true, required: false
  private _ip4Id?: number; 
  public get ip4Id() {
    return this.getNumberAttribute('ip4_id');
  }
  public set ip4Id(value: number) {
    this._ip4Id = value;
  }
  public resetIp4Id() {
    this._ip4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4IdInput() {
    return this._ip4Id;
  }

  // ip6_fl - computed: false, optional: true, required: false
  private _ip6Fl?: number; 
  public get ip6Fl() {
    return this.getNumberAttribute('ip6_fl');
  }
  public set ip6Fl(value: number) {
    this._ip6Fl = value;
  }
  public resetIp6Fl() {
    this._ip6Fl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6FlInput() {
    return this._ip6Fl;
  }

  // ipver - computed: false, optional: true, required: false
  private _ipver?: number; 
  public get ipver() {
    return this.getNumberAttribute('ipver');
  }
  public set ipver(value: number) {
    this._ipver = value;
  }
  public resetIpver() {
    this._ipver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipverInput() {
    return this._ipver;
  }

  // l4_wd10 - computed: false, optional: true, required: false
  private _l4Wd10?: number; 
  public get l4Wd10() {
    return this.getNumberAttribute('l4_wd10');
  }
  public set l4Wd10(value: number) {
    this._l4Wd10 = value;
  }
  public resetL4Wd10() {
    this._l4Wd10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd10Input() {
    return this._l4Wd10;
  }

  // l4_wd11 - computed: false, optional: true, required: false
  private _l4Wd11?: number; 
  public get l4Wd11() {
    return this.getNumberAttribute('l4_wd11');
  }
  public set l4Wd11(value: number) {
    this._l4Wd11 = value;
  }
  public resetL4Wd11() {
    this._l4Wd11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd11Input() {
    return this._l4Wd11;
  }

  // l4_wd8 - computed: false, optional: true, required: false
  private _l4Wd8?: number; 
  public get l4Wd8() {
    return this.getNumberAttribute('l4_wd8');
  }
  public set l4Wd8(value: number) {
    this._l4Wd8 = value;
  }
  public resetL4Wd8() {
    this._l4Wd8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd8Input() {
    return this._l4Wd8;
  }

  // l4_wd9 - computed: false, optional: true, required: false
  private _l4Wd9?: number; 
  public get l4Wd9() {
    return this.getNumberAttribute('l4_wd9');
  }
  public set l4Wd9(value: number) {
    this._l4Wd9 = value;
  }
  public resetL4Wd9() {
    this._l4Wd9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Wd9Input() {
    return this._l4Wd9;
  }

  // mf - computed: true, optional: true, required: false
  private _mf?: string; 
  public get mf() {
    return this.getStringAttribute('mf');
  }
  public set mf(value: string) {
    this._mf = value;
  }
  public resetMf() {
    this._mf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfInput() {
    return this._mf;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // slink - computed: false, optional: true, required: false
  private _slink?: number; 
  public get slink() {
    return this.getNumberAttribute('slink');
  }
  public set slink(value: number) {
    this._slink = value;
  }
  public resetSlink() {
    this._slink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slinkInput() {
    return this._slink;
  }

  // smac_change - computed: true, optional: true, required: false
  private _smacChange?: string; 
  public get smacChange() {
    return this.getStringAttribute('smac_change');
  }
  public set smacChange(value: string) {
    this._smacChange = value;
  }
  public resetSmacChange() {
    this._smacChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacChangeInput() {
    return this._smacChange;
  }

  // sp - computed: false, optional: true, required: false
  private _sp?: number; 
  public get sp() {
    return this.getNumberAttribute('sp');
  }
  public set sp(value: number) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // src_cfi - computed: true, optional: true, required: false
  private _srcCfi?: string; 
  public get srcCfi() {
    return this.getStringAttribute('src_cfi');
  }
  public set srcCfi(value: string) {
    this._srcCfi = value;
  }
  public resetSrcCfi() {
    this._srcCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCfiInput() {
    return this._srcCfi;
  }

  // src_prio - computed: false, optional: true, required: false
  private _srcPrio?: number; 
  public get srcPrio() {
    return this.getNumberAttribute('src_prio');
  }
  public set srcPrio(value: number) {
    this._srcPrio = value;
  }
  public resetSrcPrio() {
    this._srcPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrioInput() {
    return this._srcPrio;
  }

  // src_updt - computed: true, optional: true, required: false
  private _srcUpdt?: string; 
  public get srcUpdt() {
    return this.getStringAttribute('src_updt');
  }
  public set srcUpdt(value: string) {
    this._srcUpdt = value;
  }
  public resetSrcUpdt() {
    this._srcUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUpdtInput() {
    return this._srcUpdt;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcipv6 - computed: true, optional: true, required: false
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  public resetSrcipv6() {
    this._srcipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcport - computed: false, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // svid - computed: false, optional: true, required: false
  private _svid?: number; 
  public get svid() {
    return this.getNumberAttribute('svid');
  }
  public set svid(value: number) {
    this._svid = value;
  }
  public resetSvid() {
    this._svid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svidInput() {
    return this._svid;
  }

  // tcp_ack - computed: true, optional: true, required: false
  private _tcpAck?: string; 
  public get tcpAck() {
    return this.getStringAttribute('tcp_ack');
  }
  public set tcpAck(value: string) {
    this._tcpAck = value;
  }
  public resetTcpAck() {
    this._tcpAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckInput() {
    return this._tcpAck;
  }

  // tcp_cwr - computed: true, optional: true, required: false
  private _tcpCwr?: string; 
  public get tcpCwr() {
    return this.getStringAttribute('tcp_cwr');
  }
  public set tcpCwr(value: string) {
    this._tcpCwr = value;
  }
  public resetTcpCwr() {
    this._tcpCwr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrInput() {
    return this._tcpCwr;
  }

  // tcp_ece - computed: true, optional: true, required: false
  private _tcpEce?: string; 
  public get tcpEce() {
    return this.getStringAttribute('tcp_ece');
  }
  public set tcpEce(value: string) {
    this._tcpEce = value;
  }
  public resetTcpEce() {
    this._tcpEce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceInput() {
    return this._tcpEce;
  }

  // tcp_fin - computed: true, optional: true, required: false
  private _tcpFin?: string; 
  public get tcpFin() {
    return this.getStringAttribute('tcp_fin');
  }
  public set tcpFin(value: string) {
    this._tcpFin = value;
  }
  public resetTcpFin() {
    this._tcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinInput() {
    return this._tcpFin;
  }

  // tcp_push - computed: true, optional: true, required: false
  private _tcpPush?: string; 
  public get tcpPush() {
    return this.getStringAttribute('tcp_push');
  }
  public set tcpPush(value: string) {
    this._tcpPush = value;
  }
  public resetTcpPush() {
    this._tcpPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPushInput() {
    return this._tcpPush;
  }

  // tcp_rst - computed: true, optional: true, required: false
  private _tcpRst?: string; 
  public get tcpRst() {
    return this.getStringAttribute('tcp_rst');
  }
  public set tcpRst(value: string) {
    this._tcpRst = value;
  }
  public resetTcpRst() {
    this._tcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstInput() {
    return this._tcpRst;
  }

  // tcp_syn - computed: true, optional: true, required: false
  private _tcpSyn?: string; 
  public get tcpSyn() {
    return this.getStringAttribute('tcp_syn');
  }
  public set tcpSyn(value: string) {
    this._tcpSyn = value;
  }
  public resetTcpSyn() {
    this._tcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynInput() {
    return this._tcpSyn;
  }

  // tcp_urg - computed: true, optional: true, required: false
  private _tcpUrg?: string; 
  public get tcpUrg() {
    return this.getStringAttribute('tcp_urg');
  }
  public set tcpUrg(value: string) {
    this._tcpUrg = value;
  }
  public resetTcpUrg() {
    this._tcpUrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgInput() {
    return this._tcpUrg;
  }

  // tgt_cfi - computed: true, optional: true, required: false
  private _tgtCfi?: string; 
  public get tgtCfi() {
    return this.getStringAttribute('tgt_cfi');
  }
  public set tgtCfi(value: string) {
    this._tgtCfi = value;
  }
  public resetTgtCfi() {
    this._tgtCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtCfiInput() {
    return this._tgtCfi;
  }

  // tgt_prio - computed: false, optional: true, required: false
  private _tgtPrio?: number; 
  public get tgtPrio() {
    return this.getNumberAttribute('tgt_prio');
  }
  public set tgtPrio(value: number) {
    this._tgtPrio = value;
  }
  public resetTgtPrio() {
    this._tgtPrio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPrioInput() {
    return this._tgtPrio;
  }

  // tgt_updt - computed: true, optional: true, required: false
  private _tgtUpdt?: string; 
  public get tgtUpdt() {
    return this.getStringAttribute('tgt_updt');
  }
  public set tgtUpdt(value: string) {
    this._tgtUpdt = value;
  }
  public resetTgtUpdt() {
    this._tgtUpdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtUpdtInput() {
    return this._tgtUpdt;
  }

  // tgt_v - computed: true, optional: true, required: false
  private _tgtV?: string; 
  public get tgtV() {
    return this.getStringAttribute('tgt_v');
  }
  public set tgtV(value: string) {
    this._tgtV = value;
  }
  public resetTgtV() {
    this._tgtV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtVInput() {
    return this._tgtV;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: number; 
  public get tos() {
    return this.getNumberAttribute('tos');
  }
  public set tos(value: number) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tp - computed: false, optional: true, required: false
  private _tp?: number; 
  public get tp() {
    return this.getNumberAttribute('tp');
  }
  public set tp(value: number) {
    this._tp = value;
  }
  public resetTp() {
    this._tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpInput() {
    return this._tp;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // tvid - computed: false, optional: true, required: false
  private _tvid?: number; 
  public get tvid() {
    return this.getNumberAttribute('tvid');
  }
  public set tvid(value: number) {
    this._tvid = value;
  }
  public resetTvid() {
    this._tvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvidInput() {
    return this._tvid;
  }

  // vdid - computed: false, optional: true, required: false
  private _vdid?: number; 
  public get vdid() {
    return this.getNumberAttribute('vdid');
  }
  public set vdid(value: number) {
    this._vdid = value;
  }
  public resetVdid() {
    this._vdid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdidInput() {
    return this._vdid;
  }
}
export interface ObjectSystemNpuNputcamMirAct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vlif ObjectSystemNpuNputcam#vlif}
  */
  readonly vlif?: number;
}

export function objectSystemNpuNputcamMirActToTerraform(struct?: ObjectSystemNpuNputcamMirActOutputReference | ObjectSystemNpuNputcamMirAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlif: cdktf.numberToTerraform(struct!.vlif),
  }
}


export function objectSystemNpuNputcamMirActToHclTerraform(struct?: ObjectSystemNpuNputcamMirActOutputReference | ObjectSystemNpuNputcamMirAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlif: {
      value: cdktf.numberToHclTerraform(struct!.vlif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamMirActOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamMirAct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlif !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlif = this._vlif;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamMirAct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vlif = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vlif = value.vlif;
    }
  }

  // vlif - computed: false, optional: true, required: false
  private _vlif?: number; 
  public get vlif() {
    return this.getNumberAttribute('vlif');
  }
  public set vlif(value: number) {
    this._vlif = value;
  }
  public resetVlif() {
    this._vlif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlifInput() {
    return this._vlif;
  }
}
export interface ObjectSystemNpuNputcamPriAct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#priority ObjectSystemNpuNputcam#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#weight ObjectSystemNpuNputcam#weight}
  */
  readonly weight?: number;
}

export function objectSystemNpuNputcamPriActToTerraform(struct?: ObjectSystemNpuNputcamPriActOutputReference | ObjectSystemNpuNputcamPriAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSystemNpuNputcamPriActToHclTerraform(struct?: ObjectSystemNpuNputcamPriActOutputReference | ObjectSystemNpuNputcamPriAct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamPriActOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamPriAct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamPriAct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface ObjectSystemNpuNputcamSact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#act ObjectSystemNpuNputcam#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#act_v ObjectSystemNpuNputcam#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#bmproc ObjectSystemNpuNputcam#bmproc}
  */
  readonly bmproc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#bmproc_v ObjectSystemNpuNputcam#bmproc_v}
  */
  readonly bmprocV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#df_lif ObjectSystemNpuNputcam#df_lif}
  */
  readonly dfLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#df_lif_v ObjectSystemNpuNputcam#df_lif_v}
  */
  readonly dfLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dfr ObjectSystemNpuNputcam#dfr}
  */
  readonly dfr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dfr_v ObjectSystemNpuNputcam#dfr_v}
  */
  readonly dfrV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dmac_skip ObjectSystemNpuNputcam#dmac_skip}
  */
  readonly dmacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dmac_skip_v ObjectSystemNpuNputcam#dmac_skip_v}
  */
  readonly dmacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dosen ObjectSystemNpuNputcam#dosen}
  */
  readonly dosen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#dosen_v ObjectSystemNpuNputcam#dosen_v}
  */
  readonly dosenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#espff_proc ObjectSystemNpuNputcam#espff_proc}
  */
  readonly espffProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#espff_proc_v ObjectSystemNpuNputcam#espff_proc_v}
  */
  readonly espffProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#etype_pid ObjectSystemNpuNputcam#etype_pid}
  */
  readonly etypePid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#etype_pid_v ObjectSystemNpuNputcam#etype_pid_v}
  */
  readonly etypePidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#frag_proc ObjectSystemNpuNputcam#frag_proc}
  */
  readonly fragProc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#frag_proc_v ObjectSystemNpuNputcam#frag_proc_v}
  */
  readonly fragProcV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd ObjectSystemNpuNputcam#fwd}
  */
  readonly fwd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd_lif ObjectSystemNpuNputcam#fwd_lif}
  */
  readonly fwdLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd_lif_v ObjectSystemNpuNputcam#fwd_lif_v}
  */
  readonly fwdLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd_tvid ObjectSystemNpuNputcam#fwd_tvid}
  */
  readonly fwdTvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd_tvid_v ObjectSystemNpuNputcam#fwd_tvid_v}
  */
  readonly fwdTvidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fwd_v ObjectSystemNpuNputcam#fwd_v}
  */
  readonly fwdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#icpen ObjectSystemNpuNputcam#icpen}
  */
  readonly icpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#icpen_v ObjectSystemNpuNputcam#icpen_v}
  */
  readonly icpenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#igmp_mld_snp ObjectSystemNpuNputcam#igmp_mld_snp}
  */
  readonly igmpMldSnp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#igmp_mld_snp_v ObjectSystemNpuNputcam#igmp_mld_snp_v}
  */
  readonly igmpMldSnpV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#learn ObjectSystemNpuNputcam#learn}
  */
  readonly learn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#learn_v ObjectSystemNpuNputcam#learn_v}
  */
  readonly learnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#m_srh_ctrl ObjectSystemNpuNputcam#m_srh_ctrl}
  */
  readonly mSrhCtrl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#m_srh_ctrl_v ObjectSystemNpuNputcam#m_srh_ctrl_v}
  */
  readonly mSrhCtrlV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mac_id ObjectSystemNpuNputcam#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mac_id_v ObjectSystemNpuNputcam#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mss ObjectSystemNpuNputcam#mss}
  */
  readonly mss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mss_v ObjectSystemNpuNputcam#mss_v}
  */
  readonly mssV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#pleen ObjectSystemNpuNputcam#pleen}
  */
  readonly pleen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#pleen_v ObjectSystemNpuNputcam#pleen_v}
  */
  readonly pleenV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#prio_pid ObjectSystemNpuNputcam#prio_pid}
  */
  readonly prioPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#prio_pid_v ObjectSystemNpuNputcam#prio_pid_v}
  */
  readonly prioPidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#promis ObjectSystemNpuNputcam#promis}
  */
  readonly promis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#promis_v ObjectSystemNpuNputcam#promis_v}
  */
  readonly promisV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#rfsh ObjectSystemNpuNputcam#rfsh}
  */
  readonly rfsh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#rfsh_v ObjectSystemNpuNputcam#rfsh_v}
  */
  readonly rfshV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#smac_skip ObjectSystemNpuNputcam#smac_skip}
  */
  readonly smacSkip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#smac_skip_v ObjectSystemNpuNputcam#smac_skip_v}
  */
  readonly smacSkipV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tp_smchk ObjectSystemNpuNputcam#tp_smchk}
  */
  readonly tpSmchk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tp_smchk_v ObjectSystemNpuNputcam#tp_smchk_v}
  */
  readonly tpSmchkV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tpe_id ObjectSystemNpuNputcam#tpe_id}
  */
  readonly tpeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tpe_id_v ObjectSystemNpuNputcam#tpe_id_v}
  */
  readonly tpeIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdm ObjectSystemNpuNputcam#vdm}
  */
  readonly vdm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdm_v ObjectSystemNpuNputcam#vdm_v}
  */
  readonly vdmV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdom_id ObjectSystemNpuNputcam#vdom_id}
  */
  readonly vdomId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vdom_id_v ObjectSystemNpuNputcam#vdom_id_v}
  */
  readonly vdomIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#x_mode ObjectSystemNpuNputcam#x_mode}
  */
  readonly xMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#x_mode_v ObjectSystemNpuNputcam#x_mode_v}
  */
  readonly xModeV?: string;
}

export function objectSystemNpuNputcamSactToTerraform(struct?: ObjectSystemNpuNputcamSactOutputReference | ObjectSystemNpuNputcamSact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act: cdktf.numberToTerraform(struct!.act),
    act_v: cdktf.stringToTerraform(struct!.actV),
    bmproc: cdktf.numberToTerraform(struct!.bmproc),
    bmproc_v: cdktf.stringToTerraform(struct!.bmprocV),
    df_lif: cdktf.numberToTerraform(struct!.dfLif),
    df_lif_v: cdktf.stringToTerraform(struct!.dfLifV),
    dfr: cdktf.numberToTerraform(struct!.dfr),
    dfr_v: cdktf.stringToTerraform(struct!.dfrV),
    dmac_skip: cdktf.numberToTerraform(struct!.dmacSkip),
    dmac_skip_v: cdktf.stringToTerraform(struct!.dmacSkipV),
    dosen: cdktf.numberToTerraform(struct!.dosen),
    dosen_v: cdktf.stringToTerraform(struct!.dosenV),
    espff_proc: cdktf.numberToTerraform(struct!.espffProc),
    espff_proc_v: cdktf.stringToTerraform(struct!.espffProcV),
    etype_pid: cdktf.numberToTerraform(struct!.etypePid),
    etype_pid_v: cdktf.stringToTerraform(struct!.etypePidV),
    frag_proc: cdktf.numberToTerraform(struct!.fragProc),
    frag_proc_v: cdktf.stringToTerraform(struct!.fragProcV),
    fwd: cdktf.numberToTerraform(struct!.fwd),
    fwd_lif: cdktf.numberToTerraform(struct!.fwdLif),
    fwd_lif_v: cdktf.stringToTerraform(struct!.fwdLifV),
    fwd_tvid: cdktf.numberToTerraform(struct!.fwdTvid),
    fwd_tvid_v: cdktf.stringToTerraform(struct!.fwdTvidV),
    fwd_v: cdktf.stringToTerraform(struct!.fwdV),
    icpen: cdktf.numberToTerraform(struct!.icpen),
    icpen_v: cdktf.stringToTerraform(struct!.icpenV),
    igmp_mld_snp: cdktf.numberToTerraform(struct!.igmpMldSnp),
    igmp_mld_snp_v: cdktf.stringToTerraform(struct!.igmpMldSnpV),
    learn: cdktf.numberToTerraform(struct!.learn),
    learn_v: cdktf.stringToTerraform(struct!.learnV),
    m_srh_ctrl: cdktf.numberToTerraform(struct!.mSrhCtrl),
    m_srh_ctrl_v: cdktf.stringToTerraform(struct!.mSrhCtrlV),
    mac_id: cdktf.numberToTerraform(struct!.macId),
    mac_id_v: cdktf.stringToTerraform(struct!.macIdV),
    mss: cdktf.numberToTerraform(struct!.mss),
    mss_v: cdktf.stringToTerraform(struct!.mssV),
    pleen: cdktf.numberToTerraform(struct!.pleen),
    pleen_v: cdktf.stringToTerraform(struct!.pleenV),
    prio_pid: cdktf.numberToTerraform(struct!.prioPid),
    prio_pid_v: cdktf.stringToTerraform(struct!.prioPidV),
    promis: cdktf.numberToTerraform(struct!.promis),
    promis_v: cdktf.stringToTerraform(struct!.promisV),
    rfsh: cdktf.numberToTerraform(struct!.rfsh),
    rfsh_v: cdktf.stringToTerraform(struct!.rfshV),
    smac_skip: cdktf.numberToTerraform(struct!.smacSkip),
    smac_skip_v: cdktf.stringToTerraform(struct!.smacSkipV),
    tp_smchk: cdktf.numberToTerraform(struct!.tpSmchk),
    tp_smchk_v: cdktf.stringToTerraform(struct!.tpSmchkV),
    tpe_id: cdktf.numberToTerraform(struct!.tpeId),
    tpe_id_v: cdktf.stringToTerraform(struct!.tpeIdV),
    vdm: cdktf.numberToTerraform(struct!.vdm),
    vdm_v: cdktf.stringToTerraform(struct!.vdmV),
    vdom_id: cdktf.numberToTerraform(struct!.vdomId),
    vdom_id_v: cdktf.stringToTerraform(struct!.vdomIdV),
    x_mode: cdktf.numberToTerraform(struct!.xMode),
    x_mode_v: cdktf.stringToTerraform(struct!.xModeV),
  }
}


export function objectSystemNpuNputcamSactToHclTerraform(struct?: ObjectSystemNpuNputcamSactOutputReference | ObjectSystemNpuNputcamSact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act: {
      value: cdktf.numberToHclTerraform(struct!.act),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    act_v: {
      value: cdktf.stringToHclTerraform(struct!.actV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bmproc: {
      value: cdktf.numberToHclTerraform(struct!.bmproc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bmproc_v: {
      value: cdktf.stringToHclTerraform(struct!.bmprocV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    df_lif: {
      value: cdktf.numberToHclTerraform(struct!.dfLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    df_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.dfLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dfr: {
      value: cdktf.numberToHclTerraform(struct!.dfr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dfr_v: {
      value: cdktf.stringToHclTerraform(struct!.dfrV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dmac_skip: {
      value: cdktf.numberToHclTerraform(struct!.dmacSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dmac_skip_v: {
      value: cdktf.stringToHclTerraform(struct!.dmacSkipV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dosen: {
      value: cdktf.numberToHclTerraform(struct!.dosen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dosen_v: {
      value: cdktf.stringToHclTerraform(struct!.dosenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    espff_proc: {
      value: cdktf.numberToHclTerraform(struct!.espffProc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    espff_proc_v: {
      value: cdktf.stringToHclTerraform(struct!.espffProcV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etype_pid: {
      value: cdktf.numberToHclTerraform(struct!.etypePid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etype_pid_v: {
      value: cdktf.stringToHclTerraform(struct!.etypePidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frag_proc: {
      value: cdktf.numberToHclTerraform(struct!.fragProc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_proc_v: {
      value: cdktf.stringToHclTerraform(struct!.fragProcV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd: {
      value: cdktf.numberToHclTerraform(struct!.fwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_lif: {
      value: cdktf.numberToHclTerraform(struct!.fwdLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_tvid: {
      value: cdktf.numberToHclTerraform(struct!.fwdTvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_tvid_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdTvidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_v: {
      value: cdktf.stringToHclTerraform(struct!.fwdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icpen: {
      value: cdktf.numberToHclTerraform(struct!.icpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icpen_v: {
      value: cdktf.stringToHclTerraform(struct!.icpenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp_mld_snp: {
      value: cdktf.numberToHclTerraform(struct!.igmpMldSnp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    igmp_mld_snp_v: {
      value: cdktf.stringToHclTerraform(struct!.igmpMldSnpV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn: {
      value: cdktf.numberToHclTerraform(struct!.learn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    learn_v: {
      value: cdktf.stringToHclTerraform(struct!.learnV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    m_srh_ctrl: {
      value: cdktf.numberToHclTerraform(struct!.mSrhCtrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    m_srh_ctrl_v: {
      value: cdktf.stringToHclTerraform(struct!.mSrhCtrlV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_id: {
      value: cdktf.numberToHclTerraform(struct!.macId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_id_v: {
      value: cdktf.stringToHclTerraform(struct!.macIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_v: {
      value: cdktf.stringToHclTerraform(struct!.mssV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pleen: {
      value: cdktf.numberToHclTerraform(struct!.pleen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pleen_v: {
      value: cdktf.stringToHclTerraform(struct!.pleenV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prio_pid: {
      value: cdktf.numberToHclTerraform(struct!.prioPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prio_pid_v: {
      value: cdktf.stringToHclTerraform(struct!.prioPidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promis: {
      value: cdktf.numberToHclTerraform(struct!.promis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    promis_v: {
      value: cdktf.stringToHclTerraform(struct!.promisV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfsh: {
      value: cdktf.numberToHclTerraform(struct!.rfsh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rfsh_v: {
      value: cdktf.stringToHclTerraform(struct!.rfshV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smac_skip: {
      value: cdktf.numberToHclTerraform(struct!.smacSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smac_skip_v: {
      value: cdktf.stringToHclTerraform(struct!.smacSkipV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tp_smchk: {
      value: cdktf.numberToHclTerraform(struct!.tpSmchk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tp_smchk_v: {
      value: cdktf.stringToHclTerraform(struct!.tpSmchkV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpe_id: {
      value: cdktf.numberToHclTerraform(struct!.tpeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpe_id_v: {
      value: cdktf.stringToHclTerraform(struct!.tpeIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdm: {
      value: cdktf.numberToHclTerraform(struct!.vdm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdm_v: {
      value: cdktf.stringToHclTerraform(struct!.vdmV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom_id: {
      value: cdktf.numberToHclTerraform(struct!.vdomId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom_id_v: {
      value: cdktf.stringToHclTerraform(struct!.vdomIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_mode: {
      value: cdktf.numberToHclTerraform(struct!.xMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_mode_v: {
      value: cdktf.stringToHclTerraform(struct!.xModeV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamSactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamSact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._act !== undefined) {
      hasAnyValues = true;
      internalValueResult.act = this._act;
    }
    if (this._actV !== undefined) {
      hasAnyValues = true;
      internalValueResult.actV = this._actV;
    }
    if (this._bmproc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmproc = this._bmproc;
    }
    if (this._bmprocV !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmprocV = this._bmprocV;
    }
    if (this._dfLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfLif = this._dfLif;
    }
    if (this._dfLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfLifV = this._dfLifV;
    }
    if (this._dfr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfr = this._dfr;
    }
    if (this._dfrV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dfrV = this._dfrV;
    }
    if (this._dmacSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmacSkip = this._dmacSkip;
    }
    if (this._dmacSkipV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmacSkipV = this._dmacSkipV;
    }
    if (this._dosen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosen = this._dosen;
    }
    if (this._dosenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosenV = this._dosenV;
    }
    if (this._espffProc !== undefined) {
      hasAnyValues = true;
      internalValueResult.espffProc = this._espffProc;
    }
    if (this._espffProcV !== undefined) {
      hasAnyValues = true;
      internalValueResult.espffProcV = this._espffProcV;
    }
    if (this._etypePid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etypePid = this._etypePid;
    }
    if (this._etypePidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.etypePidV = this._etypePidV;
    }
    if (this._fragProc !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragProc = this._fragProc;
    }
    if (this._fragProcV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragProcV = this._fragProcV;
    }
    if (this._fwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwd = this._fwd;
    }
    if (this._fwdLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdLif = this._fwdLif;
    }
    if (this._fwdLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdLifV = this._fwdLifV;
    }
    if (this._fwdTvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdTvid = this._fwdTvid;
    }
    if (this._fwdTvidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdTvidV = this._fwdTvidV;
    }
    if (this._fwdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdV = this._fwdV;
    }
    if (this._icpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.icpen = this._icpen;
    }
    if (this._icpenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.icpenV = this._icpenV;
    }
    if (this._igmpMldSnp !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpMldSnp = this._igmpMldSnp;
    }
    if (this._igmpMldSnpV !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpMldSnpV = this._igmpMldSnpV;
    }
    if (this._learn !== undefined) {
      hasAnyValues = true;
      internalValueResult.learn = this._learn;
    }
    if (this._learnV !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnV = this._learnV;
    }
    if (this._mSrhCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSrhCtrl = this._mSrhCtrl;
    }
    if (this._mSrhCtrlV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSrhCtrlV = this._mSrhCtrlV;
    }
    if (this._macId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macId = this._macId;
    }
    if (this._macIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.macIdV = this._macIdV;
    }
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    if (this._mssV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssV = this._mssV;
    }
    if (this._pleen !== undefined) {
      hasAnyValues = true;
      internalValueResult.pleen = this._pleen;
    }
    if (this._pleenV !== undefined) {
      hasAnyValues = true;
      internalValueResult.pleenV = this._pleenV;
    }
    if (this._prioPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioPid = this._prioPid;
    }
    if (this._prioPidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioPidV = this._prioPidV;
    }
    if (this._promis !== undefined) {
      hasAnyValues = true;
      internalValueResult.promis = this._promis;
    }
    if (this._promisV !== undefined) {
      hasAnyValues = true;
      internalValueResult.promisV = this._promisV;
    }
    if (this._rfsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfsh = this._rfsh;
    }
    if (this._rfshV !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfshV = this._rfshV;
    }
    if (this._smacSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacSkip = this._smacSkip;
    }
    if (this._smacSkipV !== undefined) {
      hasAnyValues = true;
      internalValueResult.smacSkipV = this._smacSkipV;
    }
    if (this._tpSmchk !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpSmchk = this._tpSmchk;
    }
    if (this._tpSmchkV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpSmchkV = this._tpSmchkV;
    }
    if (this._tpeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeId = this._tpeId;
    }
    if (this._tpeIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeIdV = this._tpeIdV;
    }
    if (this._vdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdm = this._vdm;
    }
    if (this._vdmV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdmV = this._vdmV;
    }
    if (this._vdomId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomId = this._vdomId;
    }
    if (this._vdomIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdomIdV = this._vdomIdV;
    }
    if (this._xMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.xMode = this._xMode;
    }
    if (this._xModeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xModeV = this._xModeV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamSact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._act = undefined;
      this._actV = undefined;
      this._bmproc = undefined;
      this._bmprocV = undefined;
      this._dfLif = undefined;
      this._dfLifV = undefined;
      this._dfr = undefined;
      this._dfrV = undefined;
      this._dmacSkip = undefined;
      this._dmacSkipV = undefined;
      this._dosen = undefined;
      this._dosenV = undefined;
      this._espffProc = undefined;
      this._espffProcV = undefined;
      this._etypePid = undefined;
      this._etypePidV = undefined;
      this._fragProc = undefined;
      this._fragProcV = undefined;
      this._fwd = undefined;
      this._fwdLif = undefined;
      this._fwdLifV = undefined;
      this._fwdTvid = undefined;
      this._fwdTvidV = undefined;
      this._fwdV = undefined;
      this._icpen = undefined;
      this._icpenV = undefined;
      this._igmpMldSnp = undefined;
      this._igmpMldSnpV = undefined;
      this._learn = undefined;
      this._learnV = undefined;
      this._mSrhCtrl = undefined;
      this._mSrhCtrlV = undefined;
      this._macId = undefined;
      this._macIdV = undefined;
      this._mss = undefined;
      this._mssV = undefined;
      this._pleen = undefined;
      this._pleenV = undefined;
      this._prioPid = undefined;
      this._prioPidV = undefined;
      this._promis = undefined;
      this._promisV = undefined;
      this._rfsh = undefined;
      this._rfshV = undefined;
      this._smacSkip = undefined;
      this._smacSkipV = undefined;
      this._tpSmchk = undefined;
      this._tpSmchkV = undefined;
      this._tpeId = undefined;
      this._tpeIdV = undefined;
      this._vdm = undefined;
      this._vdmV = undefined;
      this._vdomId = undefined;
      this._vdomIdV = undefined;
      this._xMode = undefined;
      this._xModeV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._act = value.act;
      this._actV = value.actV;
      this._bmproc = value.bmproc;
      this._bmprocV = value.bmprocV;
      this._dfLif = value.dfLif;
      this._dfLifV = value.dfLifV;
      this._dfr = value.dfr;
      this._dfrV = value.dfrV;
      this._dmacSkip = value.dmacSkip;
      this._dmacSkipV = value.dmacSkipV;
      this._dosen = value.dosen;
      this._dosenV = value.dosenV;
      this._espffProc = value.espffProc;
      this._espffProcV = value.espffProcV;
      this._etypePid = value.etypePid;
      this._etypePidV = value.etypePidV;
      this._fragProc = value.fragProc;
      this._fragProcV = value.fragProcV;
      this._fwd = value.fwd;
      this._fwdLif = value.fwdLif;
      this._fwdLifV = value.fwdLifV;
      this._fwdTvid = value.fwdTvid;
      this._fwdTvidV = value.fwdTvidV;
      this._fwdV = value.fwdV;
      this._icpen = value.icpen;
      this._icpenV = value.icpenV;
      this._igmpMldSnp = value.igmpMldSnp;
      this._igmpMldSnpV = value.igmpMldSnpV;
      this._learn = value.learn;
      this._learnV = value.learnV;
      this._mSrhCtrl = value.mSrhCtrl;
      this._mSrhCtrlV = value.mSrhCtrlV;
      this._macId = value.macId;
      this._macIdV = value.macIdV;
      this._mss = value.mss;
      this._mssV = value.mssV;
      this._pleen = value.pleen;
      this._pleenV = value.pleenV;
      this._prioPid = value.prioPid;
      this._prioPidV = value.prioPidV;
      this._promis = value.promis;
      this._promisV = value.promisV;
      this._rfsh = value.rfsh;
      this._rfshV = value.rfshV;
      this._smacSkip = value.smacSkip;
      this._smacSkipV = value.smacSkipV;
      this._tpSmchk = value.tpSmchk;
      this._tpSmchkV = value.tpSmchkV;
      this._tpeId = value.tpeId;
      this._tpeIdV = value.tpeIdV;
      this._vdm = value.vdm;
      this._vdmV = value.vdmV;
      this._vdomId = value.vdomId;
      this._vdomIdV = value.vdomIdV;
      this._xMode = value.xMode;
      this._xModeV = value.xModeV;
    }
  }

  // act - computed: false, optional: true, required: false
  private _act?: number; 
  public get act() {
    return this.getNumberAttribute('act');
  }
  public set act(value: number) {
    this._act = value;
  }
  public resetAct() {
    this._act = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actInput() {
    return this._act;
  }

  // act_v - computed: true, optional: true, required: false
  private _actV?: string; 
  public get actV() {
    return this.getStringAttribute('act_v');
  }
  public set actV(value: string) {
    this._actV = value;
  }
  public resetActV() {
    this._actV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actVInput() {
    return this._actV;
  }

  // bmproc - computed: false, optional: true, required: false
  private _bmproc?: number; 
  public get bmproc() {
    return this.getNumberAttribute('bmproc');
  }
  public set bmproc(value: number) {
    this._bmproc = value;
  }
  public resetBmproc() {
    this._bmproc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocInput() {
    return this._bmproc;
  }

  // bmproc_v - computed: true, optional: true, required: false
  private _bmprocV?: string; 
  public get bmprocV() {
    return this.getStringAttribute('bmproc_v');
  }
  public set bmprocV(value: string) {
    this._bmprocV = value;
  }
  public resetBmprocV() {
    this._bmprocV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmprocVInput() {
    return this._bmprocV;
  }

  // df_lif - computed: false, optional: true, required: false
  private _dfLif?: number; 
  public get dfLif() {
    return this.getNumberAttribute('df_lif');
  }
  public set dfLif(value: number) {
    this._dfLif = value;
  }
  public resetDfLif() {
    this._dfLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifInput() {
    return this._dfLif;
  }

  // df_lif_v - computed: true, optional: true, required: false
  private _dfLifV?: string; 
  public get dfLifV() {
    return this.getStringAttribute('df_lif_v');
  }
  public set dfLifV(value: string) {
    this._dfLifV = value;
  }
  public resetDfLifV() {
    this._dfLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfLifVInput() {
    return this._dfLifV;
  }

  // dfr - computed: false, optional: true, required: false
  private _dfr?: number; 
  public get dfr() {
    return this.getNumberAttribute('dfr');
  }
  public set dfr(value: number) {
    this._dfr = value;
  }
  public resetDfr() {
    this._dfr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrInput() {
    return this._dfr;
  }

  // dfr_v - computed: true, optional: true, required: false
  private _dfrV?: string; 
  public get dfrV() {
    return this.getStringAttribute('dfr_v');
  }
  public set dfrV(value: string) {
    this._dfrV = value;
  }
  public resetDfrV() {
    this._dfrV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfrVInput() {
    return this._dfrV;
  }

  // dmac_skip - computed: false, optional: true, required: false
  private _dmacSkip?: number; 
  public get dmacSkip() {
    return this.getNumberAttribute('dmac_skip');
  }
  public set dmacSkip(value: number) {
    this._dmacSkip = value;
  }
  public resetDmacSkip() {
    this._dmacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipInput() {
    return this._dmacSkip;
  }

  // dmac_skip_v - computed: true, optional: true, required: false
  private _dmacSkipV?: string; 
  public get dmacSkipV() {
    return this.getStringAttribute('dmac_skip_v');
  }
  public set dmacSkipV(value: string) {
    this._dmacSkipV = value;
  }
  public resetDmacSkipV() {
    this._dmacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmacSkipVInput() {
    return this._dmacSkipV;
  }

  // dosen - computed: false, optional: true, required: false
  private _dosen?: number; 
  public get dosen() {
    return this.getNumberAttribute('dosen');
  }
  public set dosen(value: number) {
    this._dosen = value;
  }
  public resetDosen() {
    this._dosen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenInput() {
    return this._dosen;
  }

  // dosen_v - computed: true, optional: true, required: false
  private _dosenV?: string; 
  public get dosenV() {
    return this.getStringAttribute('dosen_v');
  }
  public set dosenV(value: string) {
    this._dosenV = value;
  }
  public resetDosenV() {
    this._dosenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosenVInput() {
    return this._dosenV;
  }

  // espff_proc - computed: false, optional: true, required: false
  private _espffProc?: number; 
  public get espffProc() {
    return this.getNumberAttribute('espff_proc');
  }
  public set espffProc(value: number) {
    this._espffProc = value;
  }
  public resetEspffProc() {
    this._espffProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcInput() {
    return this._espffProc;
  }

  // espff_proc_v - computed: true, optional: true, required: false
  private _espffProcV?: string; 
  public get espffProcV() {
    return this.getStringAttribute('espff_proc_v');
  }
  public set espffProcV(value: string) {
    this._espffProcV = value;
  }
  public resetEspffProcV() {
    this._espffProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espffProcVInput() {
    return this._espffProcV;
  }

  // etype_pid - computed: false, optional: true, required: false
  private _etypePid?: number; 
  public get etypePid() {
    return this.getNumberAttribute('etype_pid');
  }
  public set etypePid(value: number) {
    this._etypePid = value;
  }
  public resetEtypePid() {
    this._etypePid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidInput() {
    return this._etypePid;
  }

  // etype_pid_v - computed: true, optional: true, required: false
  private _etypePidV?: string; 
  public get etypePidV() {
    return this.getStringAttribute('etype_pid_v');
  }
  public set etypePidV(value: string) {
    this._etypePidV = value;
  }
  public resetEtypePidV() {
    this._etypePidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etypePidVInput() {
    return this._etypePidV;
  }

  // frag_proc - computed: false, optional: true, required: false
  private _fragProc?: number; 
  public get fragProc() {
    return this.getNumberAttribute('frag_proc');
  }
  public set fragProc(value: number) {
    this._fragProc = value;
  }
  public resetFragProc() {
    this._fragProc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcInput() {
    return this._fragProc;
  }

  // frag_proc_v - computed: true, optional: true, required: false
  private _fragProcV?: string; 
  public get fragProcV() {
    return this.getStringAttribute('frag_proc_v');
  }
  public set fragProcV(value: string) {
    this._fragProcV = value;
  }
  public resetFragProcV() {
    this._fragProcV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragProcVInput() {
    return this._fragProcV;
  }

  // fwd - computed: false, optional: true, required: false
  private _fwd?: number; 
  public get fwd() {
    return this.getNumberAttribute('fwd');
  }
  public set fwd(value: number) {
    this._fwd = value;
  }
  public resetFwd() {
    this._fwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdInput() {
    return this._fwd;
  }

  // fwd_lif - computed: false, optional: true, required: false
  private _fwdLif?: number; 
  public get fwdLif() {
    return this.getNumberAttribute('fwd_lif');
  }
  public set fwdLif(value: number) {
    this._fwdLif = value;
  }
  public resetFwdLif() {
    this._fwdLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifInput() {
    return this._fwdLif;
  }

  // fwd_lif_v - computed: true, optional: true, required: false
  private _fwdLifV?: string; 
  public get fwdLifV() {
    return this.getStringAttribute('fwd_lif_v');
  }
  public set fwdLifV(value: string) {
    this._fwdLifV = value;
  }
  public resetFwdLifV() {
    this._fwdLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLifVInput() {
    return this._fwdLifV;
  }

  // fwd_tvid - computed: false, optional: true, required: false
  private _fwdTvid?: number; 
  public get fwdTvid() {
    return this.getNumberAttribute('fwd_tvid');
  }
  public set fwdTvid(value: number) {
    this._fwdTvid = value;
  }
  public resetFwdTvid() {
    this._fwdTvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidInput() {
    return this._fwdTvid;
  }

  // fwd_tvid_v - computed: true, optional: true, required: false
  private _fwdTvidV?: string; 
  public get fwdTvidV() {
    return this.getStringAttribute('fwd_tvid_v');
  }
  public set fwdTvidV(value: string) {
    this._fwdTvidV = value;
  }
  public resetFwdTvidV() {
    this._fwdTvidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdTvidVInput() {
    return this._fwdTvidV;
  }

  // fwd_v - computed: true, optional: true, required: false
  private _fwdV?: string; 
  public get fwdV() {
    return this.getStringAttribute('fwd_v');
  }
  public set fwdV(value: string) {
    this._fwdV = value;
  }
  public resetFwdV() {
    this._fwdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdVInput() {
    return this._fwdV;
  }

  // icpen - computed: false, optional: true, required: false
  private _icpen?: number; 
  public get icpen() {
    return this.getNumberAttribute('icpen');
  }
  public set icpen(value: number) {
    this._icpen = value;
  }
  public resetIcpen() {
    this._icpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenInput() {
    return this._icpen;
  }

  // icpen_v - computed: true, optional: true, required: false
  private _icpenV?: string; 
  public get icpenV() {
    return this.getStringAttribute('icpen_v');
  }
  public set icpenV(value: string) {
    this._icpenV = value;
  }
  public resetIcpenV() {
    this._icpenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icpenVInput() {
    return this._icpenV;
  }

  // igmp_mld_snp - computed: false, optional: true, required: false
  private _igmpMldSnp?: number; 
  public get igmpMldSnp() {
    return this.getNumberAttribute('igmp_mld_snp');
  }
  public set igmpMldSnp(value: number) {
    this._igmpMldSnp = value;
  }
  public resetIgmpMldSnp() {
    this._igmpMldSnp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpInput() {
    return this._igmpMldSnp;
  }

  // igmp_mld_snp_v - computed: true, optional: true, required: false
  private _igmpMldSnpV?: string; 
  public get igmpMldSnpV() {
    return this.getStringAttribute('igmp_mld_snp_v');
  }
  public set igmpMldSnpV(value: string) {
    this._igmpMldSnpV = value;
  }
  public resetIgmpMldSnpV() {
    this._igmpMldSnpV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpMldSnpVInput() {
    return this._igmpMldSnpV;
  }

  // learn - computed: false, optional: true, required: false
  private _learn?: number; 
  public get learn() {
    return this.getNumberAttribute('learn');
  }
  public set learn(value: number) {
    this._learn = value;
  }
  public resetLearn() {
    this._learn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnInput() {
    return this._learn;
  }

  // learn_v - computed: true, optional: true, required: false
  private _learnV?: string; 
  public get learnV() {
    return this.getStringAttribute('learn_v');
  }
  public set learnV(value: string) {
    this._learnV = value;
  }
  public resetLearnV() {
    this._learnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnVInput() {
    return this._learnV;
  }

  // m_srh_ctrl - computed: false, optional: true, required: false
  private _mSrhCtrl?: number; 
  public get mSrhCtrl() {
    return this.getNumberAttribute('m_srh_ctrl');
  }
  public set mSrhCtrl(value: number) {
    this._mSrhCtrl = value;
  }
  public resetMSrhCtrl() {
    this._mSrhCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlInput() {
    return this._mSrhCtrl;
  }

  // m_srh_ctrl_v - computed: true, optional: true, required: false
  private _mSrhCtrlV?: string; 
  public get mSrhCtrlV() {
    return this.getStringAttribute('m_srh_ctrl_v');
  }
  public set mSrhCtrlV(value: string) {
    this._mSrhCtrlV = value;
  }
  public resetMSrhCtrlV() {
    this._mSrhCtrlV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSrhCtrlVInput() {
    return this._mSrhCtrlV;
  }

  // mac_id - computed: false, optional: true, required: false
  private _macId?: number; 
  public get macId() {
    return this.getNumberAttribute('mac_id');
  }
  public set macId(value: number) {
    this._macId = value;
  }
  public resetMacId() {
    this._macId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdInput() {
    return this._macId;
  }

  // mac_id_v - computed: true, optional: true, required: false
  private _macIdV?: string; 
  public get macIdV() {
    return this.getStringAttribute('mac_id_v');
  }
  public set macIdV(value: string) {
    this._macIdV = value;
  }
  public resetMacIdV() {
    this._macIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdVInput() {
    return this._macIdV;
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // mss_v - computed: true, optional: true, required: false
  private _mssV?: string; 
  public get mssV() {
    return this.getStringAttribute('mss_v');
  }
  public set mssV(value: string) {
    this._mssV = value;
  }
  public resetMssV() {
    this._mssV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssVInput() {
    return this._mssV;
  }

  // pleen - computed: false, optional: true, required: false
  private _pleen?: number; 
  public get pleen() {
    return this.getNumberAttribute('pleen');
  }
  public set pleen(value: number) {
    this._pleen = value;
  }
  public resetPleen() {
    this._pleen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenInput() {
    return this._pleen;
  }

  // pleen_v - computed: true, optional: true, required: false
  private _pleenV?: string; 
  public get pleenV() {
    return this.getStringAttribute('pleen_v');
  }
  public set pleenV(value: string) {
    this._pleenV = value;
  }
  public resetPleenV() {
    this._pleenV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pleenVInput() {
    return this._pleenV;
  }

  // prio_pid - computed: false, optional: true, required: false
  private _prioPid?: number; 
  public get prioPid() {
    return this.getNumberAttribute('prio_pid');
  }
  public set prioPid(value: number) {
    this._prioPid = value;
  }
  public resetPrioPid() {
    this._prioPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidInput() {
    return this._prioPid;
  }

  // prio_pid_v - computed: true, optional: true, required: false
  private _prioPidV?: string; 
  public get prioPidV() {
    return this.getStringAttribute('prio_pid_v');
  }
  public set prioPidV(value: string) {
    this._prioPidV = value;
  }
  public resetPrioPidV() {
    this._prioPidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioPidVInput() {
    return this._prioPidV;
  }

  // promis - computed: false, optional: true, required: false
  private _promis?: number; 
  public get promis() {
    return this.getNumberAttribute('promis');
  }
  public set promis(value: number) {
    this._promis = value;
  }
  public resetPromis() {
    this._promis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisInput() {
    return this._promis;
  }

  // promis_v - computed: true, optional: true, required: false
  private _promisV?: string; 
  public get promisV() {
    return this.getStringAttribute('promis_v');
  }
  public set promisV(value: string) {
    this._promisV = value;
  }
  public resetPromisV() {
    this._promisV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promisVInput() {
    return this._promisV;
  }

  // rfsh - computed: false, optional: true, required: false
  private _rfsh?: number; 
  public get rfsh() {
    return this.getNumberAttribute('rfsh');
  }
  public set rfsh(value: number) {
    this._rfsh = value;
  }
  public resetRfsh() {
    this._rfsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshInput() {
    return this._rfsh;
  }

  // rfsh_v - computed: true, optional: true, required: false
  private _rfshV?: string; 
  public get rfshV() {
    return this.getStringAttribute('rfsh_v');
  }
  public set rfshV(value: string) {
    this._rfshV = value;
  }
  public resetRfshV() {
    this._rfshV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfshVInput() {
    return this._rfshV;
  }

  // smac_skip - computed: false, optional: true, required: false
  private _smacSkip?: number; 
  public get smacSkip() {
    return this.getNumberAttribute('smac_skip');
  }
  public set smacSkip(value: number) {
    this._smacSkip = value;
  }
  public resetSmacSkip() {
    this._smacSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipInput() {
    return this._smacSkip;
  }

  // smac_skip_v - computed: true, optional: true, required: false
  private _smacSkipV?: string; 
  public get smacSkipV() {
    return this.getStringAttribute('smac_skip_v');
  }
  public set smacSkipV(value: string) {
    this._smacSkipV = value;
  }
  public resetSmacSkipV() {
    this._smacSkipV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smacSkipVInput() {
    return this._smacSkipV;
  }

  // tp_smchk - computed: false, optional: true, required: false
  private _tpSmchk?: number; 
  public get tpSmchk() {
    return this.getNumberAttribute('tp_smchk');
  }
  public set tpSmchk(value: number) {
    this._tpSmchk = value;
  }
  public resetTpSmchk() {
    this._tpSmchk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkInput() {
    return this._tpSmchk;
  }

  // tp_smchk_v - computed: true, optional: true, required: false
  private _tpSmchkV?: string; 
  public get tpSmchkV() {
    return this.getStringAttribute('tp_smchk_v');
  }
  public set tpSmchkV(value: string) {
    this._tpSmchkV = value;
  }
  public resetTpSmchkV() {
    this._tpSmchkV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpSmchkVInput() {
    return this._tpSmchkV;
  }

  // tpe_id - computed: false, optional: true, required: false
  private _tpeId?: number; 
  public get tpeId() {
    return this.getNumberAttribute('tpe_id');
  }
  public set tpeId(value: number) {
    this._tpeId = value;
  }
  public resetTpeId() {
    this._tpeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdInput() {
    return this._tpeId;
  }

  // tpe_id_v - computed: true, optional: true, required: false
  private _tpeIdV?: string; 
  public get tpeIdV() {
    return this.getStringAttribute('tpe_id_v');
  }
  public set tpeIdV(value: string) {
    this._tpeIdV = value;
  }
  public resetTpeIdV() {
    this._tpeIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeIdVInput() {
    return this._tpeIdV;
  }

  // vdm - computed: false, optional: true, required: false
  private _vdm?: number; 
  public get vdm() {
    return this.getNumberAttribute('vdm');
  }
  public set vdm(value: number) {
    this._vdm = value;
  }
  public resetVdm() {
    this._vdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmInput() {
    return this._vdm;
  }

  // vdm_v - computed: true, optional: true, required: false
  private _vdmV?: string; 
  public get vdmV() {
    return this.getStringAttribute('vdm_v');
  }
  public set vdmV(value: string) {
    this._vdmV = value;
  }
  public resetVdmV() {
    this._vdmV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmVInput() {
    return this._vdmV;
  }

  // vdom_id - computed: false, optional: true, required: false
  private _vdomId?: number; 
  public get vdomId() {
    return this.getNumberAttribute('vdom_id');
  }
  public set vdomId(value: number) {
    this._vdomId = value;
  }
  public resetVdomId() {
    this._vdomId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdInput() {
    return this._vdomId;
  }

  // vdom_id_v - computed: true, optional: true, required: false
  private _vdomIdV?: string; 
  public get vdomIdV() {
    return this.getStringAttribute('vdom_id_v');
  }
  public set vdomIdV(value: string) {
    this._vdomIdV = value;
  }
  public resetVdomIdV() {
    this._vdomIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomIdVInput() {
    return this._vdomIdV;
  }

  // x_mode - computed: false, optional: true, required: false
  private _xMode?: number; 
  public get xMode() {
    return this.getNumberAttribute('x_mode');
  }
  public set xMode(value: number) {
    this._xMode = value;
  }
  public resetXMode() {
    this._xMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeInput() {
    return this._xMode;
  }

  // x_mode_v - computed: true, optional: true, required: false
  private _xModeV?: string; 
  public get xModeV() {
    return this.getStringAttribute('x_mode_v');
  }
  public set xModeV(value: string) {
    this._xModeV = value;
  }
  public resetXModeV() {
    this._xModeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xModeVInput() {
    return this._xModeV;
  }
}
export interface ObjectSystemNpuNputcamTact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#act ObjectSystemNpuNputcam#act}
  */
  readonly act?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#act_v ObjectSystemNpuNputcam#act_v}
  */
  readonly actV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fmtuv4_s ObjectSystemNpuNputcam#fmtuv4_s}
  */
  readonly fmtuv4S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fmtuv4_s_v ObjectSystemNpuNputcam#fmtuv4_s_v}
  */
  readonly fmtuv4SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fmtuv6_s ObjectSystemNpuNputcam#fmtuv6_s}
  */
  readonly fmtuv6S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#fmtuv6_s_v ObjectSystemNpuNputcam#fmtuv6_s_v}
  */
  readonly fmtuv6SV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#lnkid ObjectSystemNpuNputcam#lnkid}
  */
  readonly lnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#lnkid_v ObjectSystemNpuNputcam#lnkid_v}
  */
  readonly lnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mac_id ObjectSystemNpuNputcam#mac_id}
  */
  readonly macId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mac_id_v ObjectSystemNpuNputcam#mac_id_v}
  */
  readonly macIdV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mss_t ObjectSystemNpuNputcam#mss_t}
  */
  readonly mssT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mss_t_v ObjectSystemNpuNputcam#mss_t_v}
  */
  readonly mssTV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mtuv4 ObjectSystemNpuNputcam#mtuv4}
  */
  readonly mtuv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mtuv4_v ObjectSystemNpuNputcam#mtuv4_v}
  */
  readonly mtuv4V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mtuv6 ObjectSystemNpuNputcam#mtuv6}
  */
  readonly mtuv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#mtuv6_v ObjectSystemNpuNputcam#mtuv6_v}
  */
  readonly mtuv6V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#slif_act ObjectSystemNpuNputcam#slif_act}
  */
  readonly slifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#slif_act_v ObjectSystemNpuNputcam#slif_act_v}
  */
  readonly slifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#sublnkid ObjectSystemNpuNputcam#sublnkid}
  */
  readonly sublnkid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#sublnkid_v ObjectSystemNpuNputcam#sublnkid_v}
  */
  readonly sublnkidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgtv_act ObjectSystemNpuNputcam#tgtv_act}
  */
  readonly tgtvAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tgtv_act_v ObjectSystemNpuNputcam#tgtv_act_v}
  */
  readonly tgtvActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tlif_act ObjectSystemNpuNputcam#tlif_act}
  */
  readonly tlifAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tlif_act_v ObjectSystemNpuNputcam#tlif_act_v}
  */
  readonly tlifActV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tpeid ObjectSystemNpuNputcam#tpeid}
  */
  readonly tpeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#tpeid_v ObjectSystemNpuNputcam#tpeid_v}
  */
  readonly tpeidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#v6fe ObjectSystemNpuNputcam#v6fe}
  */
  readonly v6Fe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#v6fe_v ObjectSystemNpuNputcam#v6fe_v}
  */
  readonly v6FeV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vep_en ObjectSystemNpuNputcam#vep_en}
  */
  readonly vepEn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vep_en_v ObjectSystemNpuNputcam#vep_en_v}
  */
  readonly vepEnV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vep_slid ObjectSystemNpuNputcam#vep_slid}
  */
  readonly vepSlid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#vep_slid_v ObjectSystemNpuNputcam#vep_slid_v}
  */
  readonly vepSlidV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#xlt_lif ObjectSystemNpuNputcam#xlt_lif}
  */
  readonly xltLif?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#xlt_lif_v ObjectSystemNpuNputcam#xlt_lif_v}
  */
  readonly xltLifV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#xlt_vid ObjectSystemNpuNputcam#xlt_vid}
  */
  readonly xltVid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#xlt_vid_v ObjectSystemNpuNputcam#xlt_vid_v}
  */
  readonly xltVidV?: string;
}

export function objectSystemNpuNputcamTactToTerraform(struct?: ObjectSystemNpuNputcamTactOutputReference | ObjectSystemNpuNputcamTact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act: cdktf.numberToTerraform(struct!.act),
    act_v: cdktf.stringToTerraform(struct!.actV),
    fmtuv4_s: cdktf.numberToTerraform(struct!.fmtuv4S),
    fmtuv4_s_v: cdktf.stringToTerraform(struct!.fmtuv4SV),
    fmtuv6_s: cdktf.numberToTerraform(struct!.fmtuv6S),
    fmtuv6_s_v: cdktf.stringToTerraform(struct!.fmtuv6SV),
    lnkid: cdktf.numberToTerraform(struct!.lnkid),
    lnkid_v: cdktf.stringToTerraform(struct!.lnkidV),
    mac_id: cdktf.numberToTerraform(struct!.macId),
    mac_id_v: cdktf.stringToTerraform(struct!.macIdV),
    mss_t: cdktf.numberToTerraform(struct!.mssT),
    mss_t_v: cdktf.stringToTerraform(struct!.mssTV),
    mtuv4: cdktf.numberToTerraform(struct!.mtuv4),
    mtuv4_v: cdktf.stringToTerraform(struct!.mtuv4V),
    mtuv6: cdktf.numberToTerraform(struct!.mtuv6),
    mtuv6_v: cdktf.stringToTerraform(struct!.mtuv6V),
    slif_act: cdktf.numberToTerraform(struct!.slifAct),
    slif_act_v: cdktf.stringToTerraform(struct!.slifActV),
    sublnkid: cdktf.numberToTerraform(struct!.sublnkid),
    sublnkid_v: cdktf.stringToTerraform(struct!.sublnkidV),
    tgtv_act: cdktf.numberToTerraform(struct!.tgtvAct),
    tgtv_act_v: cdktf.stringToTerraform(struct!.tgtvActV),
    tlif_act: cdktf.numberToTerraform(struct!.tlifAct),
    tlif_act_v: cdktf.stringToTerraform(struct!.tlifActV),
    tpeid: cdktf.numberToTerraform(struct!.tpeid),
    tpeid_v: cdktf.stringToTerraform(struct!.tpeidV),
    v6fe: cdktf.numberToTerraform(struct!.v6Fe),
    v6fe_v: cdktf.stringToTerraform(struct!.v6FeV),
    vep_en: cdktf.numberToTerraform(struct!.vepEn),
    vep_en_v: cdktf.stringToTerraform(struct!.vepEnV),
    vep_slid: cdktf.numberToTerraform(struct!.vepSlid),
    vep_slid_v: cdktf.stringToTerraform(struct!.vepSlidV),
    xlt_lif: cdktf.numberToTerraform(struct!.xltLif),
    xlt_lif_v: cdktf.stringToTerraform(struct!.xltLifV),
    xlt_vid: cdktf.numberToTerraform(struct!.xltVid),
    xlt_vid_v: cdktf.stringToTerraform(struct!.xltVidV),
  }
}


export function objectSystemNpuNputcamTactToHclTerraform(struct?: ObjectSystemNpuNputcamTactOutputReference | ObjectSystemNpuNputcamTact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act: {
      value: cdktf.numberToHclTerraform(struct!.act),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    act_v: {
      value: cdktf.stringToHclTerraform(struct!.actV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmtuv4_s: {
      value: cdktf.numberToHclTerraform(struct!.fmtuv4S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fmtuv4_s_v: {
      value: cdktf.stringToHclTerraform(struct!.fmtuv4SV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fmtuv6_s: {
      value: cdktf.numberToHclTerraform(struct!.fmtuv6S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fmtuv6_s_v: {
      value: cdktf.stringToHclTerraform(struct!.fmtuv6SV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnkid: {
      value: cdktf.numberToHclTerraform(struct!.lnkid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lnkid_v: {
      value: cdktf.stringToHclTerraform(struct!.lnkidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_id: {
      value: cdktf.numberToHclTerraform(struct!.macId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_id_v: {
      value: cdktf.stringToHclTerraform(struct!.macIdV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mss_t: {
      value: cdktf.numberToHclTerraform(struct!.mssT),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mss_t_v: {
      value: cdktf.stringToHclTerraform(struct!.mssTV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtuv4: {
      value: cdktf.numberToHclTerraform(struct!.mtuv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtuv4_v: {
      value: cdktf.stringToHclTerraform(struct!.mtuv4V),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtuv6: {
      value: cdktf.numberToHclTerraform(struct!.mtuv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtuv6_v: {
      value: cdktf.stringToHclTerraform(struct!.mtuv6V),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slif_act: {
      value: cdktf.numberToHclTerraform(struct!.slifAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slif_act_v: {
      value: cdktf.stringToHclTerraform(struct!.slifActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sublnkid: {
      value: cdktf.numberToHclTerraform(struct!.sublnkid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sublnkid_v: {
      value: cdktf.stringToHclTerraform(struct!.sublnkidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgtv_act: {
      value: cdktf.numberToHclTerraform(struct!.tgtvAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgtv_act_v: {
      value: cdktf.stringToHclTerraform(struct!.tgtvActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tlif_act: {
      value: cdktf.numberToHclTerraform(struct!.tlifAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlif_act_v: {
      value: cdktf.stringToHclTerraform(struct!.tlifActV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpeid: {
      value: cdktf.numberToHclTerraform(struct!.tpeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpeid_v: {
      value: cdktf.stringToHclTerraform(struct!.tpeidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6fe: {
      value: cdktf.numberToHclTerraform(struct!.v6Fe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6fe_v: {
      value: cdktf.stringToHclTerraform(struct!.v6FeV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vep_en: {
      value: cdktf.numberToHclTerraform(struct!.vepEn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vep_en_v: {
      value: cdktf.stringToHclTerraform(struct!.vepEnV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vep_slid: {
      value: cdktf.numberToHclTerraform(struct!.vepSlid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vep_slid_v: {
      value: cdktf.stringToHclTerraform(struct!.vepSlidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xlt_lif: {
      value: cdktf.numberToHclTerraform(struct!.xltLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xlt_lif_v: {
      value: cdktf.stringToHclTerraform(struct!.xltLifV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xlt_vid: {
      value: cdktf.numberToHclTerraform(struct!.xltVid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xlt_vid_v: {
      value: cdktf.stringToHclTerraform(struct!.xltVidV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemNpuNputcamTactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSystemNpuNputcamTact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._act !== undefined) {
      hasAnyValues = true;
      internalValueResult.act = this._act;
    }
    if (this._actV !== undefined) {
      hasAnyValues = true;
      internalValueResult.actV = this._actV;
    }
    if (this._fmtuv4S !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv4S = this._fmtuv4S;
    }
    if (this._fmtuv4SV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv4SV = this._fmtuv4SV;
    }
    if (this._fmtuv6S !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv6S = this._fmtuv6S;
    }
    if (this._fmtuv6SV !== undefined) {
      hasAnyValues = true;
      internalValueResult.fmtuv6SV = this._fmtuv6SV;
    }
    if (this._lnkid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnkid = this._lnkid;
    }
    if (this._lnkidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnkidV = this._lnkidV;
    }
    if (this._macId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macId = this._macId;
    }
    if (this._macIdV !== undefined) {
      hasAnyValues = true;
      internalValueResult.macIdV = this._macIdV;
    }
    if (this._mssT !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssT = this._mssT;
    }
    if (this._mssTV !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssTV = this._mssTV;
    }
    if (this._mtuv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv4 = this._mtuv4;
    }
    if (this._mtuv4V !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv4V = this._mtuv4V;
    }
    if (this._mtuv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv6 = this._mtuv6;
    }
    if (this._mtuv6V !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuv6V = this._mtuv6V;
    }
    if (this._slifAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.slifAct = this._slifAct;
    }
    if (this._slifActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.slifActV = this._slifActV;
    }
    if (this._sublnkid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sublnkid = this._sublnkid;
    }
    if (this._sublnkidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.sublnkidV = this._sublnkidV;
    }
    if (this._tgtvAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtvAct = this._tgtvAct;
    }
    if (this._tgtvActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtvActV = this._tgtvActV;
    }
    if (this._tlifAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlifAct = this._tlifAct;
    }
    if (this._tlifActV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlifActV = this._tlifActV;
    }
    if (this._tpeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeid = this._tpeid;
    }
    if (this._tpeidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpeidV = this._tpeidV;
    }
    if (this._v6Fe !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Fe = this._v6Fe;
    }
    if (this._v6FeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6FeV = this._v6FeV;
    }
    if (this._vepEn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepEn = this._vepEn;
    }
    if (this._vepEnV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepEnV = this._vepEnV;
    }
    if (this._vepSlid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepSlid = this._vepSlid;
    }
    if (this._vepSlidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.vepSlidV = this._vepSlidV;
    }
    if (this._xltLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltLif = this._xltLif;
    }
    if (this._xltLifV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltLifV = this._xltLifV;
    }
    if (this._xltVid !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltVid = this._xltVid;
    }
    if (this._xltVidV !== undefined) {
      hasAnyValues = true;
      internalValueResult.xltVidV = this._xltVidV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemNpuNputcamTact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._act = undefined;
      this._actV = undefined;
      this._fmtuv4S = undefined;
      this._fmtuv4SV = undefined;
      this._fmtuv6S = undefined;
      this._fmtuv6SV = undefined;
      this._lnkid = undefined;
      this._lnkidV = undefined;
      this._macId = undefined;
      this._macIdV = undefined;
      this._mssT = undefined;
      this._mssTV = undefined;
      this._mtuv4 = undefined;
      this._mtuv4V = undefined;
      this._mtuv6 = undefined;
      this._mtuv6V = undefined;
      this._slifAct = undefined;
      this._slifActV = undefined;
      this._sublnkid = undefined;
      this._sublnkidV = undefined;
      this._tgtvAct = undefined;
      this._tgtvActV = undefined;
      this._tlifAct = undefined;
      this._tlifActV = undefined;
      this._tpeid = undefined;
      this._tpeidV = undefined;
      this._v6Fe = undefined;
      this._v6FeV = undefined;
      this._vepEn = undefined;
      this._vepEnV = undefined;
      this._vepSlid = undefined;
      this._vepSlidV = undefined;
      this._xltLif = undefined;
      this._xltLifV = undefined;
      this._xltVid = undefined;
      this._xltVidV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._act = value.act;
      this._actV = value.actV;
      this._fmtuv4S = value.fmtuv4S;
      this._fmtuv4SV = value.fmtuv4SV;
      this._fmtuv6S = value.fmtuv6S;
      this._fmtuv6SV = value.fmtuv6SV;
      this._lnkid = value.lnkid;
      this._lnkidV = value.lnkidV;
      this._macId = value.macId;
      this._macIdV = value.macIdV;
      this._mssT = value.mssT;
      this._mssTV = value.mssTV;
      this._mtuv4 = value.mtuv4;
      this._mtuv4V = value.mtuv4V;
      this._mtuv6 = value.mtuv6;
      this._mtuv6V = value.mtuv6V;
      this._slifAct = value.slifAct;
      this._slifActV = value.slifActV;
      this._sublnkid = value.sublnkid;
      this._sublnkidV = value.sublnkidV;
      this._tgtvAct = value.tgtvAct;
      this._tgtvActV = value.tgtvActV;
      this._tlifAct = value.tlifAct;
      this._tlifActV = value.tlifActV;
      this._tpeid = value.tpeid;
      this._tpeidV = value.tpeidV;
      this._v6Fe = value.v6Fe;
      this._v6FeV = value.v6FeV;
      this._vepEn = value.vepEn;
      this._vepEnV = value.vepEnV;
      this._vepSlid = value.vepSlid;
      this._vepSlidV = value.vepSlidV;
      this._xltLif = value.xltLif;
      this._xltLifV = value.xltLifV;
      this._xltVid = value.xltVid;
      this._xltVidV = value.xltVidV;
    }
  }

  // act - computed: false, optional: true, required: false
  private _act?: number; 
  public get act() {
    return this.getNumberAttribute('act');
  }
  public set act(value: number) {
    this._act = value;
  }
  public resetAct() {
    this._act = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actInput() {
    return this._act;
  }

  // act_v - computed: true, optional: true, required: false
  private _actV?: string; 
  public get actV() {
    return this.getStringAttribute('act_v');
  }
  public set actV(value: string) {
    this._actV = value;
  }
  public resetActV() {
    this._actV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actVInput() {
    return this._actV;
  }

  // fmtuv4_s - computed: false, optional: true, required: false
  private _fmtuv4S?: number; 
  public get fmtuv4S() {
    return this.getNumberAttribute('fmtuv4_s');
  }
  public set fmtuv4S(value: number) {
    this._fmtuv4S = value;
  }
  public resetFmtuv4S() {
    this._fmtuv4S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SInput() {
    return this._fmtuv4S;
  }

  // fmtuv4_s_v - computed: true, optional: true, required: false
  private _fmtuv4SV?: string; 
  public get fmtuv4SV() {
    return this.getStringAttribute('fmtuv4_s_v');
  }
  public set fmtuv4SV(value: string) {
    this._fmtuv4SV = value;
  }
  public resetFmtuv4SV() {
    this._fmtuv4SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv4SVInput() {
    return this._fmtuv4SV;
  }

  // fmtuv6_s - computed: false, optional: true, required: false
  private _fmtuv6S?: number; 
  public get fmtuv6S() {
    return this.getNumberAttribute('fmtuv6_s');
  }
  public set fmtuv6S(value: number) {
    this._fmtuv6S = value;
  }
  public resetFmtuv6S() {
    this._fmtuv6S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SInput() {
    return this._fmtuv6S;
  }

  // fmtuv6_s_v - computed: true, optional: true, required: false
  private _fmtuv6SV?: string; 
  public get fmtuv6SV() {
    return this.getStringAttribute('fmtuv6_s_v');
  }
  public set fmtuv6SV(value: string) {
    this._fmtuv6SV = value;
  }
  public resetFmtuv6SV() {
    this._fmtuv6SV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtuv6SVInput() {
    return this._fmtuv6SV;
  }

  // lnkid - computed: false, optional: true, required: false
  private _lnkid?: number; 
  public get lnkid() {
    return this.getNumberAttribute('lnkid');
  }
  public set lnkid(value: number) {
    this._lnkid = value;
  }
  public resetLnkid() {
    this._lnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidInput() {
    return this._lnkid;
  }

  // lnkid_v - computed: true, optional: true, required: false
  private _lnkidV?: string; 
  public get lnkidV() {
    return this.getStringAttribute('lnkid_v');
  }
  public set lnkidV(value: string) {
    this._lnkidV = value;
  }
  public resetLnkidV() {
    this._lnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnkidVInput() {
    return this._lnkidV;
  }

  // mac_id - computed: false, optional: true, required: false
  private _macId?: number; 
  public get macId() {
    return this.getNumberAttribute('mac_id');
  }
  public set macId(value: number) {
    this._macId = value;
  }
  public resetMacId() {
    this._macId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdInput() {
    return this._macId;
  }

  // mac_id_v - computed: true, optional: true, required: false
  private _macIdV?: string; 
  public get macIdV() {
    return this.getStringAttribute('mac_id_v');
  }
  public set macIdV(value: string) {
    this._macIdV = value;
  }
  public resetMacIdV() {
    this._macIdV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macIdVInput() {
    return this._macIdV;
  }

  // mss_t - computed: false, optional: true, required: false
  private _mssT?: number; 
  public get mssT() {
    return this.getNumberAttribute('mss_t');
  }
  public set mssT(value: number) {
    this._mssT = value;
  }
  public resetMssT() {
    this._mssT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTInput() {
    return this._mssT;
  }

  // mss_t_v - computed: true, optional: true, required: false
  private _mssTV?: string; 
  public get mssTV() {
    return this.getStringAttribute('mss_t_v');
  }
  public set mssTV(value: string) {
    this._mssTV = value;
  }
  public resetMssTV() {
    this._mssTV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssTVInput() {
    return this._mssTV;
  }

  // mtuv4 - computed: false, optional: true, required: false
  private _mtuv4?: number; 
  public get mtuv4() {
    return this.getNumberAttribute('mtuv4');
  }
  public set mtuv4(value: number) {
    this._mtuv4 = value;
  }
  public resetMtuv4() {
    this._mtuv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4Input() {
    return this._mtuv4;
  }

  // mtuv4_v - computed: true, optional: true, required: false
  private _mtuv4V?: string; 
  public get mtuv4V() {
    return this.getStringAttribute('mtuv4_v');
  }
  public set mtuv4V(value: string) {
    this._mtuv4V = value;
  }
  public resetMtuv4V() {
    this._mtuv4V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv4VInput() {
    return this._mtuv4V;
  }

  // mtuv6 - computed: false, optional: true, required: false
  private _mtuv6?: number; 
  public get mtuv6() {
    return this.getNumberAttribute('mtuv6');
  }
  public set mtuv6(value: number) {
    this._mtuv6 = value;
  }
  public resetMtuv6() {
    this._mtuv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6Input() {
    return this._mtuv6;
  }

  // mtuv6_v - computed: true, optional: true, required: false
  private _mtuv6V?: string; 
  public get mtuv6V() {
    return this.getStringAttribute('mtuv6_v');
  }
  public set mtuv6V(value: string) {
    this._mtuv6V = value;
  }
  public resetMtuv6V() {
    this._mtuv6V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuv6VInput() {
    return this._mtuv6V;
  }

  // slif_act - computed: false, optional: true, required: false
  private _slifAct?: number; 
  public get slifAct() {
    return this.getNumberAttribute('slif_act');
  }
  public set slifAct(value: number) {
    this._slifAct = value;
  }
  public resetSlifAct() {
    this._slifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActInput() {
    return this._slifAct;
  }

  // slif_act_v - computed: true, optional: true, required: false
  private _slifActV?: string; 
  public get slifActV() {
    return this.getStringAttribute('slif_act_v');
  }
  public set slifActV(value: string) {
    this._slifActV = value;
  }
  public resetSlifActV() {
    this._slifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slifActVInput() {
    return this._slifActV;
  }

  // sublnkid - computed: false, optional: true, required: false
  private _sublnkid?: number; 
  public get sublnkid() {
    return this.getNumberAttribute('sublnkid');
  }
  public set sublnkid(value: number) {
    this._sublnkid = value;
  }
  public resetSublnkid() {
    this._sublnkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidInput() {
    return this._sublnkid;
  }

  // sublnkid_v - computed: true, optional: true, required: false
  private _sublnkidV?: string; 
  public get sublnkidV() {
    return this.getStringAttribute('sublnkid_v');
  }
  public set sublnkidV(value: string) {
    this._sublnkidV = value;
  }
  public resetSublnkidV() {
    this._sublnkidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sublnkidVInput() {
    return this._sublnkidV;
  }

  // tgtv_act - computed: false, optional: true, required: false
  private _tgtvAct?: number; 
  public get tgtvAct() {
    return this.getNumberAttribute('tgtv_act');
  }
  public set tgtvAct(value: number) {
    this._tgtvAct = value;
  }
  public resetTgtvAct() {
    this._tgtvAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActInput() {
    return this._tgtvAct;
  }

  // tgtv_act_v - computed: true, optional: true, required: false
  private _tgtvActV?: string; 
  public get tgtvActV() {
    return this.getStringAttribute('tgtv_act_v');
  }
  public set tgtvActV(value: string) {
    this._tgtvActV = value;
  }
  public resetTgtvActV() {
    this._tgtvActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtvActVInput() {
    return this._tgtvActV;
  }

  // tlif_act - computed: false, optional: true, required: false
  private _tlifAct?: number; 
  public get tlifAct() {
    return this.getNumberAttribute('tlif_act');
  }
  public set tlifAct(value: number) {
    this._tlifAct = value;
  }
  public resetTlifAct() {
    this._tlifAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActInput() {
    return this._tlifAct;
  }

  // tlif_act_v - computed: true, optional: true, required: false
  private _tlifActV?: string; 
  public get tlifActV() {
    return this.getStringAttribute('tlif_act_v');
  }
  public set tlifActV(value: string) {
    this._tlifActV = value;
  }
  public resetTlifActV() {
    this._tlifActV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlifActVInput() {
    return this._tlifActV;
  }

  // tpeid - computed: false, optional: true, required: false
  private _tpeid?: number; 
  public get tpeid() {
    return this.getNumberAttribute('tpeid');
  }
  public set tpeid(value: number) {
    this._tpeid = value;
  }
  public resetTpeid() {
    this._tpeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidInput() {
    return this._tpeid;
  }

  // tpeid_v - computed: true, optional: true, required: false
  private _tpeidV?: string; 
  public get tpeidV() {
    return this.getStringAttribute('tpeid_v');
  }
  public set tpeidV(value: string) {
    this._tpeidV = value;
  }
  public resetTpeidV() {
    this._tpeidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpeidVInput() {
    return this._tpeidV;
  }

  // v6fe - computed: false, optional: true, required: false
  private _v6Fe?: number; 
  public get v6Fe() {
    return this.getNumberAttribute('v6fe');
  }
  public set v6Fe(value: number) {
    this._v6Fe = value;
  }
  public resetV6Fe() {
    this._v6Fe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeInput() {
    return this._v6Fe;
  }

  // v6fe_v - computed: true, optional: true, required: false
  private _v6FeV?: string; 
  public get v6FeV() {
    return this.getStringAttribute('v6fe_v');
  }
  public set v6FeV(value: string) {
    this._v6FeV = value;
  }
  public resetV6FeV() {
    this._v6FeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6FeVInput() {
    return this._v6FeV;
  }

  // vep_en - computed: false, optional: true, required: false
  private _vepEn?: number; 
  public get vepEn() {
    return this.getNumberAttribute('vep_en');
  }
  public set vepEn(value: number) {
    this._vepEn = value;
  }
  public resetVepEn() {
    this._vepEn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnInput() {
    return this._vepEn;
  }

  // vep_en_v - computed: true, optional: true, required: false
  private _vepEnV?: string; 
  public get vepEnV() {
    return this.getStringAttribute('vep_en_v');
  }
  public set vepEnV(value: string) {
    this._vepEnV = value;
  }
  public resetVepEnV() {
    this._vepEnV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepEnVInput() {
    return this._vepEnV;
  }

  // vep_slid - computed: false, optional: true, required: false
  private _vepSlid?: number; 
  public get vepSlid() {
    return this.getNumberAttribute('vep_slid');
  }
  public set vepSlid(value: number) {
    this._vepSlid = value;
  }
  public resetVepSlid() {
    this._vepSlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidInput() {
    return this._vepSlid;
  }

  // vep_slid_v - computed: true, optional: true, required: false
  private _vepSlidV?: string; 
  public get vepSlidV() {
    return this.getStringAttribute('vep_slid_v');
  }
  public set vepSlidV(value: string) {
    this._vepSlidV = value;
  }
  public resetVepSlidV() {
    this._vepSlidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vepSlidVInput() {
    return this._vepSlidV;
  }

  // xlt_lif - computed: false, optional: true, required: false
  private _xltLif?: number; 
  public get xltLif() {
    return this.getNumberAttribute('xlt_lif');
  }
  public set xltLif(value: number) {
    this._xltLif = value;
  }
  public resetXltLif() {
    this._xltLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifInput() {
    return this._xltLif;
  }

  // xlt_lif_v - computed: true, optional: true, required: false
  private _xltLifV?: string; 
  public get xltLifV() {
    return this.getStringAttribute('xlt_lif_v');
  }
  public set xltLifV(value: string) {
    this._xltLifV = value;
  }
  public resetXltLifV() {
    this._xltLifV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltLifVInput() {
    return this._xltLifV;
  }

  // xlt_vid - computed: false, optional: true, required: false
  private _xltVid?: number; 
  public get xltVid() {
    return this.getNumberAttribute('xlt_vid');
  }
  public set xltVid(value: number) {
    this._xltVid = value;
  }
  public resetXltVid() {
    this._xltVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidInput() {
    return this._xltVid;
  }

  // xlt_vid_v - computed: true, optional: true, required: false
  private _xltVidV?: string; 
  public get xltVidV() {
    return this.getStringAttribute('xlt_vid_v');
  }
  public set xltVidV(value: string) {
    this._xltVidV = value;
  }
  public resetXltVidV() {
    this._xltVidV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xltVidVInput() {
    return this._xltVidV;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam fortimanager_object_system_npu_nputcam}
*/
export class ObjectSystemNpuNputcam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_nputcam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuNputcam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuNputcam to import
  * @param importFromId The id of the existing ObjectSystemNpuNputcam that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuNputcam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_nputcam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_system_npu_nputcam fortimanager_object_system_npu_nputcam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuNputcamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuNputcamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_nputcam',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dbgDump = config.dbgDump;
    this._id = config.id;
    this._name = config.name;
    this._oid = config.oid;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._vid = config.vid;
    this._data.internalValue = config.data;
    this._mask.internalValue = config.mask;
    this._mirAct.internalValue = config.mirAct;
    this._priAct.internalValue = config.priAct;
    this._sact.internalValue = config.sact;
    this._tact.internalValue = config.tact;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dbg_dump - computed: false, optional: true, required: false
  private _dbgDump?: number; 
  public get dbgDump() {
    return this.getNumberAttribute('dbg_dump');
  }
  public set dbgDump(value: number) {
    this._dbgDump = value;
  }
  public resetDbgDump() {
    this._dbgDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgDumpInput() {
    return this._dbgDump;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oid - computed: true, optional: true, required: false
  private _oid?: number; 
  public get oid() {
    return this.getNumberAttribute('oid');
  }
  public set oid(value: number) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vid - computed: false, optional: true, required: false
  private _vid?: number; 
  public get vid() {
    return this.getNumberAttribute('vid');
  }
  public set vid(value: number) {
    this._vid = value;
  }
  public resetVid() {
    this._vid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vidInput() {
    return this._vid;
  }

  // data - computed: false, optional: true, required: false
  private _data = new ObjectSystemNpuNputcamDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ObjectSystemNpuNputcamData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // mask - computed: false, optional: true, required: false
  private _mask = new ObjectSystemNpuNputcamMaskOutputReference(this, "mask");
  public get mask() {
    return this._mask;
  }
  public putMask(value: ObjectSystemNpuNputcamMask) {
    this._mask.internalValue = value;
  }
  public resetMask() {
    this._mask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask.internalValue;
  }

  // mir_act - computed: false, optional: true, required: false
  private _mirAct = new ObjectSystemNpuNputcamMirActOutputReference(this, "mir_act");
  public get mirAct() {
    return this._mirAct;
  }
  public putMirAct(value: ObjectSystemNpuNputcamMirAct) {
    this._mirAct.internalValue = value;
  }
  public resetMirAct() {
    this._mirAct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirActInput() {
    return this._mirAct.internalValue;
  }

  // pri_act - computed: false, optional: true, required: false
  private _priAct = new ObjectSystemNpuNputcamPriActOutputReference(this, "pri_act");
  public get priAct() {
    return this._priAct;
  }
  public putPriAct(value: ObjectSystemNpuNputcamPriAct) {
    this._priAct.internalValue = value;
  }
  public resetPriAct() {
    this._priAct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priActInput() {
    return this._priAct.internalValue;
  }

  // sact - computed: false, optional: true, required: false
  private _sact = new ObjectSystemNpuNputcamSactOutputReference(this, "sact");
  public get sact() {
    return this._sact;
  }
  public putSact(value: ObjectSystemNpuNputcamSact) {
    this._sact.internalValue = value;
  }
  public resetSact() {
    this._sact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sactInput() {
    return this._sact.internalValue;
  }

  // tact - computed: false, optional: true, required: false
  private _tact = new ObjectSystemNpuNputcamTactOutputReference(this, "tact");
  public get tact() {
    return this._tact;
  }
  public putTact(value: ObjectSystemNpuNputcamTact) {
    this._tact.internalValue = value;
  }
  public resetTact() {
    this._tact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tactInput() {
    return this._tact.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dbg_dump: cdktf.numberToTerraform(this._dbgDump),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oid: cdktf.numberToTerraform(this._oid),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      vid: cdktf.numberToTerraform(this._vid),
      data: objectSystemNpuNputcamDataToTerraform(this._data.internalValue),
      mask: objectSystemNpuNputcamMaskToTerraform(this._mask.internalValue),
      mir_act: objectSystemNpuNputcamMirActToTerraform(this._mirAct.internalValue),
      pri_act: objectSystemNpuNputcamPriActToTerraform(this._priAct.internalValue),
      sact: objectSystemNpuNputcamSactToTerraform(this._sact.internalValue),
      tact: objectSystemNpuNputcamTactToTerraform(this._tact.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbg_dump: {
        value: cdktf.numberToHclTerraform(this._dbgDump),
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
      oid: {
        value: cdktf.numberToHclTerraform(this._oid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vid: {
        value: cdktf.numberToHclTerraform(this._vid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data: {
        value: objectSystemNpuNputcamDataToHclTerraform(this._data.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamDataList",
      },
      mask: {
        value: objectSystemNpuNputcamMaskToHclTerraform(this._mask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamMaskList",
      },
      mir_act: {
        value: objectSystemNpuNputcamMirActToHclTerraform(this._mirAct.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamMirActList",
      },
      pri_act: {
        value: objectSystemNpuNputcamPriActToHclTerraform(this._priAct.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamPriActList",
      },
      sact: {
        value: objectSystemNpuNputcamSactToHclTerraform(this._sact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamSactList",
      },
      tact: {
        value: objectSystemNpuNputcamTactToHclTerraform(this._tact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemNpuNputcamTactList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
