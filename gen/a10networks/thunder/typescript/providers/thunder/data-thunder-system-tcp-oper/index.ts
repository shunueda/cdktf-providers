// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTcpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#id DataThunderSystemTcpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#oper DataThunderSystemTcpOper#oper}
  */
  readonly oper?: DataThunderSystemTcpOperOper;
  /**
  * rate_limit_reset_unknown_conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#rate_limit_reset_unknown_conn DataThunderSystemTcpOper#rate_limit_reset_unknown_conn}
  */
  readonly rateLimitResetUnknownConn?: DataThunderSystemTcpOperRateLimitResetUnknownConn;
}
export interface DataThunderSystemTcpOperOperTcpCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#activeopens DataThunderSystemTcpOper#activeopens}
  */
  readonly activeopens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#attemptfails DataThunderSystemTcpOper#attemptfails}
  */
  readonly attemptfails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#ax_rexmit_syn DataThunderSystemTcpOper#ax_rexmit_syn}
  */
  readonly axRexmitSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currclose DataThunderSystemTcpOper#currclose}
  */
  readonly currclose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currclsg DataThunderSystemTcpOper#currclsg}
  */
  readonly currclsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currclsw DataThunderSystemTcpOper#currclsw}
  */
  readonly currclsw?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currestab DataThunderSystemTcpOper#currestab}
  */
  readonly currestab?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currfinw1 DataThunderSystemTcpOper#currfinw1}
  */
  readonly currfinw1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currfinw2 DataThunderSystemTcpOper#currfinw2}
  */
  readonly currfinw2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currlack DataThunderSystemTcpOper#currlack}
  */
  readonly currlack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currlstn DataThunderSystemTcpOper#currlstn}
  */
  readonly currlstn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currsynrcv DataThunderSystemTcpOper#currsynrcv}
  */
  readonly currsynrcv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currsyssnt DataThunderSystemTcpOper#currsyssnt}
  */
  readonly currsyssnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#currtimew DataThunderSystemTcpOper#currtimew}
  */
  readonly currtimew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#estabresets DataThunderSystemTcpOper#estabresets}
  */
  readonly estabresets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#exceedmss DataThunderSystemTcpOper#exceedmss}
  */
  readonly exceedmss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#inerrs DataThunderSystemTcpOper#inerrs}
  */
  readonly inerrs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#insegs DataThunderSystemTcpOper#insegs}
  */
  readonly insegs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#mem_alloc DataThunderSystemTcpOper#mem_alloc}
  */
  readonly memAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#noroute DataThunderSystemTcpOper#noroute}
  */
  readonly noroute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#orphan_count DataThunderSystemTcpOper#orphan_count}
  */
  readonly orphanCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#outrsts DataThunderSystemTcpOper#outrsts}
  */
  readonly outrsts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#outsegs DataThunderSystemTcpOper#outsegs}
  */
  readonly outsegs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#passiveopens DataThunderSystemTcpOper#passiveopens}
  */
  readonly passiveopens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#pawsactiverejected DataThunderSystemTcpOper#pawsactiverejected}
  */
  readonly pawsactiverejected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#recv_mem DataThunderSystemTcpOper#recv_mem}
  */
  readonly recvMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#retranssegs DataThunderSystemTcpOper#retranssegs}
  */
  readonly retranssegs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#send_mem DataThunderSystemTcpOper#send_mem}
  */
  readonly sendMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#sock_alloc DataThunderSystemTcpOper#sock_alloc}
  */
  readonly sockAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#syn_rcv_ack DataThunderSystemTcpOper#syn_rcv_ack}
  */
  readonly synRcvAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#syn_rcv_rst DataThunderSystemTcpOper#syn_rcv_rst}
  */
  readonly synRcvRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#syn_rcv_rstack DataThunderSystemTcpOper#syn_rcv_rstack}
  */
  readonly synRcvRstack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#tcpabortontimeout DataThunderSystemTcpOper#tcpabortontimeout}
  */
  readonly tcpabortontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#tfo_actives DataThunderSystemTcpOper#tfo_actives}
  */
  readonly tfoActives?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#tfo_conns DataThunderSystemTcpOper#tfo_conns}
  */
  readonly tfoConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#tfo_denied DataThunderSystemTcpOper#tfo_denied}
  */
  readonly tfoDenied?: number;
}

export function dataThunderSystemTcpOperOperTcpCpuListStructToTerraform(struct?: DataThunderSystemTcpOperOperTcpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activeopens: cdktf.numberToTerraform(struct!.activeopens),
    attemptfails: cdktf.numberToTerraform(struct!.attemptfails),
    ax_rexmit_syn: cdktf.numberToTerraform(struct!.axRexmitSyn),
    currclose: cdktf.numberToTerraform(struct!.currclose),
    currclsg: cdktf.numberToTerraform(struct!.currclsg),
    currclsw: cdktf.numberToTerraform(struct!.currclsw),
    currestab: cdktf.numberToTerraform(struct!.currestab),
    currfinw1: cdktf.numberToTerraform(struct!.currfinw1),
    currfinw2: cdktf.numberToTerraform(struct!.currfinw2),
    currlack: cdktf.numberToTerraform(struct!.currlack),
    currlstn: cdktf.numberToTerraform(struct!.currlstn),
    currsynrcv: cdktf.numberToTerraform(struct!.currsynrcv),
    currsyssnt: cdktf.numberToTerraform(struct!.currsyssnt),
    currtimew: cdktf.numberToTerraform(struct!.currtimew),
    estabresets: cdktf.numberToTerraform(struct!.estabresets),
    exceedmss: cdktf.numberToTerraform(struct!.exceedmss),
    inerrs: cdktf.numberToTerraform(struct!.inerrs),
    insegs: cdktf.numberToTerraform(struct!.insegs),
    mem_alloc: cdktf.numberToTerraform(struct!.memAlloc),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    orphan_count: cdktf.numberToTerraform(struct!.orphanCount),
    outrsts: cdktf.numberToTerraform(struct!.outrsts),
    outsegs: cdktf.numberToTerraform(struct!.outsegs),
    passiveopens: cdktf.numberToTerraform(struct!.passiveopens),
    pawsactiverejected: cdktf.numberToTerraform(struct!.pawsactiverejected),
    recv_mem: cdktf.numberToTerraform(struct!.recvMem),
    retranssegs: cdktf.numberToTerraform(struct!.retranssegs),
    send_mem: cdktf.numberToTerraform(struct!.sendMem),
    sock_alloc: cdktf.numberToTerraform(struct!.sockAlloc),
    syn_rcv_ack: cdktf.numberToTerraform(struct!.synRcvAck),
    syn_rcv_rst: cdktf.numberToTerraform(struct!.synRcvRst),
    syn_rcv_rstack: cdktf.numberToTerraform(struct!.synRcvRstack),
    tcpabortontimeout: cdktf.numberToTerraform(struct!.tcpabortontimeout),
    tfo_actives: cdktf.numberToTerraform(struct!.tfoActives),
    tfo_conns: cdktf.numberToTerraform(struct!.tfoConns),
    tfo_denied: cdktf.numberToTerraform(struct!.tfoDenied),
  }
}


export function dataThunderSystemTcpOperOperTcpCpuListStructToHclTerraform(struct?: DataThunderSystemTcpOperOperTcpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activeopens: {
      value: cdktf.numberToHclTerraform(struct!.activeopens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attemptfails: {
      value: cdktf.numberToHclTerraform(struct!.attemptfails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ax_rexmit_syn: {
      value: cdktf.numberToHclTerraform(struct!.axRexmitSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currclose: {
      value: cdktf.numberToHclTerraform(struct!.currclose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currclsg: {
      value: cdktf.numberToHclTerraform(struct!.currclsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currclsw: {
      value: cdktf.numberToHclTerraform(struct!.currclsw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currestab: {
      value: cdktf.numberToHclTerraform(struct!.currestab),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currfinw1: {
      value: cdktf.numberToHclTerraform(struct!.currfinw1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currfinw2: {
      value: cdktf.numberToHclTerraform(struct!.currfinw2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currlack: {
      value: cdktf.numberToHclTerraform(struct!.currlack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currlstn: {
      value: cdktf.numberToHclTerraform(struct!.currlstn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currsynrcv: {
      value: cdktf.numberToHclTerraform(struct!.currsynrcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currsyssnt: {
      value: cdktf.numberToHclTerraform(struct!.currsyssnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    currtimew: {
      value: cdktf.numberToHclTerraform(struct!.currtimew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    estabresets: {
      value: cdktf.numberToHclTerraform(struct!.estabresets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceedmss: {
      value: cdktf.numberToHclTerraform(struct!.exceedmss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inerrs: {
      value: cdktf.numberToHclTerraform(struct!.inerrs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insegs: {
      value: cdktf.numberToHclTerraform(struct!.insegs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_alloc: {
      value: cdktf.numberToHclTerraform(struct!.memAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    orphan_count: {
      value: cdktf.numberToHclTerraform(struct!.orphanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrsts: {
      value: cdktf.numberToHclTerraform(struct!.outrsts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outsegs: {
      value: cdktf.numberToHclTerraform(struct!.outsegs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passiveopens: {
      value: cdktf.numberToHclTerraform(struct!.passiveopens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pawsactiverejected: {
      value: cdktf.numberToHclTerraform(struct!.pawsactiverejected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_mem: {
      value: cdktf.numberToHclTerraform(struct!.recvMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retranssegs: {
      value: cdktf.numberToHclTerraform(struct!.retranssegs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_mem: {
      value: cdktf.numberToHclTerraform(struct!.sendMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sock_alloc: {
      value: cdktf.numberToHclTerraform(struct!.sockAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_rcv_ack: {
      value: cdktf.numberToHclTerraform(struct!.synRcvAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_rcv_rst: {
      value: cdktf.numberToHclTerraform(struct!.synRcvRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_rcv_rstack: {
      value: cdktf.numberToHclTerraform(struct!.synRcvRstack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpabortontimeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpabortontimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tfo_actives: {
      value: cdktf.numberToHclTerraform(struct!.tfoActives),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tfo_conns: {
      value: cdktf.numberToHclTerraform(struct!.tfoConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tfo_denied: {
      value: cdktf.numberToHclTerraform(struct!.tfoDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpOperOperTcpCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemTcpOperOperTcpCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeopens !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeopens = this._activeopens;
    }
    if (this._attemptfails !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptfails = this._attemptfails;
    }
    if (this._axRexmitSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.axRexmitSyn = this._axRexmitSyn;
    }
    if (this._currclose !== undefined) {
      hasAnyValues = true;
      internalValueResult.currclose = this._currclose;
    }
    if (this._currclsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.currclsg = this._currclsg;
    }
    if (this._currclsw !== undefined) {
      hasAnyValues = true;
      internalValueResult.currclsw = this._currclsw;
    }
    if (this._currestab !== undefined) {
      hasAnyValues = true;
      internalValueResult.currestab = this._currestab;
    }
    if (this._currfinw1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currfinw1 = this._currfinw1;
    }
    if (this._currfinw2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.currfinw2 = this._currfinw2;
    }
    if (this._currlack !== undefined) {
      hasAnyValues = true;
      internalValueResult.currlack = this._currlack;
    }
    if (this._currlstn !== undefined) {
      hasAnyValues = true;
      internalValueResult.currlstn = this._currlstn;
    }
    if (this._currsynrcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.currsynrcv = this._currsynrcv;
    }
    if (this._currsyssnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.currsyssnt = this._currsyssnt;
    }
    if (this._currtimew !== undefined) {
      hasAnyValues = true;
      internalValueResult.currtimew = this._currtimew;
    }
    if (this._estabresets !== undefined) {
      hasAnyValues = true;
      internalValueResult.estabresets = this._estabresets;
    }
    if (this._exceedmss !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedmss = this._exceedmss;
    }
    if (this._inerrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inerrs = this._inerrs;
    }
    if (this._insegs !== undefined) {
      hasAnyValues = true;
      internalValueResult.insegs = this._insegs;
    }
    if (this._memAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.memAlloc = this._memAlloc;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._orphanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanCount = this._orphanCount;
    }
    if (this._outrsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrsts = this._outrsts;
    }
    if (this._outsegs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsegs = this._outsegs;
    }
    if (this._passiveopens !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveopens = this._passiveopens;
    }
    if (this._pawsactiverejected !== undefined) {
      hasAnyValues = true;
      internalValueResult.pawsactiverejected = this._pawsactiverejected;
    }
    if (this._recvMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvMem = this._recvMem;
    }
    if (this._retranssegs !== undefined) {
      hasAnyValues = true;
      internalValueResult.retranssegs = this._retranssegs;
    }
    if (this._sendMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendMem = this._sendMem;
    }
    if (this._sockAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockAlloc = this._sockAlloc;
    }
    if (this._synRcvAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRcvAck = this._synRcvAck;
    }
    if (this._synRcvRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRcvRst = this._synRcvRst;
    }
    if (this._synRcvRstack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRcvRstack = this._synRcvRstack;
    }
    if (this._tcpabortontimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpabortontimeout = this._tcpabortontimeout;
    }
    if (this._tfoActives !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfoActives = this._tfoActives;
    }
    if (this._tfoConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfoConns = this._tfoConns;
    }
    if (this._tfoDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfoDenied = this._tfoDenied;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpOperOperTcpCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeopens = undefined;
      this._attemptfails = undefined;
      this._axRexmitSyn = undefined;
      this._currclose = undefined;
      this._currclsg = undefined;
      this._currclsw = undefined;
      this._currestab = undefined;
      this._currfinw1 = undefined;
      this._currfinw2 = undefined;
      this._currlack = undefined;
      this._currlstn = undefined;
      this._currsynrcv = undefined;
      this._currsyssnt = undefined;
      this._currtimew = undefined;
      this._estabresets = undefined;
      this._exceedmss = undefined;
      this._inerrs = undefined;
      this._insegs = undefined;
      this._memAlloc = undefined;
      this._noroute = undefined;
      this._orphanCount = undefined;
      this._outrsts = undefined;
      this._outsegs = undefined;
      this._passiveopens = undefined;
      this._pawsactiverejected = undefined;
      this._recvMem = undefined;
      this._retranssegs = undefined;
      this._sendMem = undefined;
      this._sockAlloc = undefined;
      this._synRcvAck = undefined;
      this._synRcvRst = undefined;
      this._synRcvRstack = undefined;
      this._tcpabortontimeout = undefined;
      this._tfoActives = undefined;
      this._tfoConns = undefined;
      this._tfoDenied = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeopens = value.activeopens;
      this._attemptfails = value.attemptfails;
      this._axRexmitSyn = value.axRexmitSyn;
      this._currclose = value.currclose;
      this._currclsg = value.currclsg;
      this._currclsw = value.currclsw;
      this._currestab = value.currestab;
      this._currfinw1 = value.currfinw1;
      this._currfinw2 = value.currfinw2;
      this._currlack = value.currlack;
      this._currlstn = value.currlstn;
      this._currsynrcv = value.currsynrcv;
      this._currsyssnt = value.currsyssnt;
      this._currtimew = value.currtimew;
      this._estabresets = value.estabresets;
      this._exceedmss = value.exceedmss;
      this._inerrs = value.inerrs;
      this._insegs = value.insegs;
      this._memAlloc = value.memAlloc;
      this._noroute = value.noroute;
      this._orphanCount = value.orphanCount;
      this._outrsts = value.outrsts;
      this._outsegs = value.outsegs;
      this._passiveopens = value.passiveopens;
      this._pawsactiverejected = value.pawsactiverejected;
      this._recvMem = value.recvMem;
      this._retranssegs = value.retranssegs;
      this._sendMem = value.sendMem;
      this._sockAlloc = value.sockAlloc;
      this._synRcvAck = value.synRcvAck;
      this._synRcvRst = value.synRcvRst;
      this._synRcvRstack = value.synRcvRstack;
      this._tcpabortontimeout = value.tcpabortontimeout;
      this._tfoActives = value.tfoActives;
      this._tfoConns = value.tfoConns;
      this._tfoDenied = value.tfoDenied;
    }
  }

  // activeopens - computed: false, optional: true, required: false
  private _activeopens?: number; 
  public get activeopens() {
    return this.getNumberAttribute('activeopens');
  }
  public set activeopens(value: number) {
    this._activeopens = value;
  }
  public resetActiveopens() {
    this._activeopens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeopensInput() {
    return this._activeopens;
  }

  // attemptfails - computed: false, optional: true, required: false
  private _attemptfails?: number; 
  public get attemptfails() {
    return this.getNumberAttribute('attemptfails');
  }
  public set attemptfails(value: number) {
    this._attemptfails = value;
  }
  public resetAttemptfails() {
    this._attemptfails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptfailsInput() {
    return this._attemptfails;
  }

  // ax_rexmit_syn - computed: false, optional: true, required: false
  private _axRexmitSyn?: number; 
  public get axRexmitSyn() {
    return this.getNumberAttribute('ax_rexmit_syn');
  }
  public set axRexmitSyn(value: number) {
    this._axRexmitSyn = value;
  }
  public resetAxRexmitSyn() {
    this._axRexmitSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axRexmitSynInput() {
    return this._axRexmitSyn;
  }

  // currclose - computed: false, optional: true, required: false
  private _currclose?: number; 
  public get currclose() {
    return this.getNumberAttribute('currclose');
  }
  public set currclose(value: number) {
    this._currclose = value;
  }
  public resetCurrclose() {
    this._currclose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currcloseInput() {
    return this._currclose;
  }

  // currclsg - computed: false, optional: true, required: false
  private _currclsg?: number; 
  public get currclsg() {
    return this.getNumberAttribute('currclsg');
  }
  public set currclsg(value: number) {
    this._currclsg = value;
  }
  public resetCurrclsg() {
    this._currclsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currclsgInput() {
    return this._currclsg;
  }

  // currclsw - computed: false, optional: true, required: false
  private _currclsw?: number; 
  public get currclsw() {
    return this.getNumberAttribute('currclsw');
  }
  public set currclsw(value: number) {
    this._currclsw = value;
  }
  public resetCurrclsw() {
    this._currclsw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currclswInput() {
    return this._currclsw;
  }

  // currestab - computed: false, optional: true, required: false
  private _currestab?: number; 
  public get currestab() {
    return this.getNumberAttribute('currestab');
  }
  public set currestab(value: number) {
    this._currestab = value;
  }
  public resetCurrestab() {
    this._currestab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currestabInput() {
    return this._currestab;
  }

  // currfinw1 - computed: false, optional: true, required: false
  private _currfinw1?: number; 
  public get currfinw1() {
    return this.getNumberAttribute('currfinw1');
  }
  public set currfinw1(value: number) {
    this._currfinw1 = value;
  }
  public resetCurrfinw1() {
    this._currfinw1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currfinw1Input() {
    return this._currfinw1;
  }

  // currfinw2 - computed: false, optional: true, required: false
  private _currfinw2?: number; 
  public get currfinw2() {
    return this.getNumberAttribute('currfinw2');
  }
  public set currfinw2(value: number) {
    this._currfinw2 = value;
  }
  public resetCurrfinw2() {
    this._currfinw2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currfinw2Input() {
    return this._currfinw2;
  }

  // currlack - computed: false, optional: true, required: false
  private _currlack?: number; 
  public get currlack() {
    return this.getNumberAttribute('currlack');
  }
  public set currlack(value: number) {
    this._currlack = value;
  }
  public resetCurrlack() {
    this._currlack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currlackInput() {
    return this._currlack;
  }

  // currlstn - computed: false, optional: true, required: false
  private _currlstn?: number; 
  public get currlstn() {
    return this.getNumberAttribute('currlstn');
  }
  public set currlstn(value: number) {
    this._currlstn = value;
  }
  public resetCurrlstn() {
    this._currlstn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currlstnInput() {
    return this._currlstn;
  }

  // currsynrcv - computed: false, optional: true, required: false
  private _currsynrcv?: number; 
  public get currsynrcv() {
    return this.getNumberAttribute('currsynrcv');
  }
  public set currsynrcv(value: number) {
    this._currsynrcv = value;
  }
  public resetCurrsynrcv() {
    this._currsynrcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currsynrcvInput() {
    return this._currsynrcv;
  }

  // currsyssnt - computed: false, optional: true, required: false
  private _currsyssnt?: number; 
  public get currsyssnt() {
    return this.getNumberAttribute('currsyssnt');
  }
  public set currsyssnt(value: number) {
    this._currsyssnt = value;
  }
  public resetCurrsyssnt() {
    this._currsyssnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currsyssntInput() {
    return this._currsyssnt;
  }

  // currtimew - computed: false, optional: true, required: false
  private _currtimew?: number; 
  public get currtimew() {
    return this.getNumberAttribute('currtimew');
  }
  public set currtimew(value: number) {
    this._currtimew = value;
  }
  public resetCurrtimew() {
    this._currtimew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currtimewInput() {
    return this._currtimew;
  }

  // estabresets - computed: false, optional: true, required: false
  private _estabresets?: number; 
  public get estabresets() {
    return this.getNumberAttribute('estabresets');
  }
  public set estabresets(value: number) {
    this._estabresets = value;
  }
  public resetEstabresets() {
    this._estabresets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estabresetsInput() {
    return this._estabresets;
  }

  // exceedmss - computed: false, optional: true, required: false
  private _exceedmss?: number; 
  public get exceedmss() {
    return this.getNumberAttribute('exceedmss');
  }
  public set exceedmss(value: number) {
    this._exceedmss = value;
  }
  public resetExceedmss() {
    this._exceedmss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedmssInput() {
    return this._exceedmss;
  }

  // inerrs - computed: false, optional: true, required: false
  private _inerrs?: number; 
  public get inerrs() {
    return this.getNumberAttribute('inerrs');
  }
  public set inerrs(value: number) {
    this._inerrs = value;
  }
  public resetInerrs() {
    this._inerrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inerrsInput() {
    return this._inerrs;
  }

  // insegs - computed: false, optional: true, required: false
  private _insegs?: number; 
  public get insegs() {
    return this.getNumberAttribute('insegs');
  }
  public set insegs(value: number) {
    this._insegs = value;
  }
  public resetInsegs() {
    this._insegs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insegsInput() {
    return this._insegs;
  }

  // mem_alloc - computed: false, optional: true, required: false
  private _memAlloc?: number; 
  public get memAlloc() {
    return this.getNumberAttribute('mem_alloc');
  }
  public set memAlloc(value: number) {
    this._memAlloc = value;
  }
  public resetMemAlloc() {
    this._memAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memAllocInput() {
    return this._memAlloc;
  }

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // orphan_count - computed: false, optional: true, required: false
  private _orphanCount?: number; 
  public get orphanCount() {
    return this.getNumberAttribute('orphan_count');
  }
  public set orphanCount(value: number) {
    this._orphanCount = value;
  }
  public resetOrphanCount() {
    this._orphanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanCountInput() {
    return this._orphanCount;
  }

  // outrsts - computed: false, optional: true, required: false
  private _outrsts?: number; 
  public get outrsts() {
    return this.getNumberAttribute('outrsts');
  }
  public set outrsts(value: number) {
    this._outrsts = value;
  }
  public resetOutrsts() {
    this._outrsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstsInput() {
    return this._outrsts;
  }

  // outsegs - computed: false, optional: true, required: false
  private _outsegs?: number; 
  public get outsegs() {
    return this.getNumberAttribute('outsegs');
  }
  public set outsegs(value: number) {
    this._outsegs = value;
  }
  public resetOutsegs() {
    this._outsegs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsegsInput() {
    return this._outsegs;
  }

  // passiveopens - computed: false, optional: true, required: false
  private _passiveopens?: number; 
  public get passiveopens() {
    return this.getNumberAttribute('passiveopens');
  }
  public set passiveopens(value: number) {
    this._passiveopens = value;
  }
  public resetPassiveopens() {
    this._passiveopens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveopensInput() {
    return this._passiveopens;
  }

  // pawsactiverejected - computed: false, optional: true, required: false
  private _pawsactiverejected?: number; 
  public get pawsactiverejected() {
    return this.getNumberAttribute('pawsactiverejected');
  }
  public set pawsactiverejected(value: number) {
    this._pawsactiverejected = value;
  }
  public resetPawsactiverejected() {
    this._pawsactiverejected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pawsactiverejectedInput() {
    return this._pawsactiverejected;
  }

  // recv_mem - computed: false, optional: true, required: false
  private _recvMem?: number; 
  public get recvMem() {
    return this.getNumberAttribute('recv_mem');
  }
  public set recvMem(value: number) {
    this._recvMem = value;
  }
  public resetRecvMem() {
    this._recvMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvMemInput() {
    return this._recvMem;
  }

  // retranssegs - computed: false, optional: true, required: false
  private _retranssegs?: number; 
  public get retranssegs() {
    return this.getNumberAttribute('retranssegs');
  }
  public set retranssegs(value: number) {
    this._retranssegs = value;
  }
  public resetRetranssegs() {
    this._retranssegs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retranssegsInput() {
    return this._retranssegs;
  }

  // send_mem - computed: false, optional: true, required: false
  private _sendMem?: number; 
  public get sendMem() {
    return this.getNumberAttribute('send_mem');
  }
  public set sendMem(value: number) {
    this._sendMem = value;
  }
  public resetSendMem() {
    this._sendMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMemInput() {
    return this._sendMem;
  }

  // sock_alloc - computed: false, optional: true, required: false
  private _sockAlloc?: number; 
  public get sockAlloc() {
    return this.getNumberAttribute('sock_alloc');
  }
  public set sockAlloc(value: number) {
    this._sockAlloc = value;
  }
  public resetSockAlloc() {
    this._sockAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sockAllocInput() {
    return this._sockAlloc;
  }

  // syn_rcv_ack - computed: false, optional: true, required: false
  private _synRcvAck?: number; 
  public get synRcvAck() {
    return this.getNumberAttribute('syn_rcv_ack');
  }
  public set synRcvAck(value: number) {
    this._synRcvAck = value;
  }
  public resetSynRcvAck() {
    this._synRcvAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRcvAckInput() {
    return this._synRcvAck;
  }

  // syn_rcv_rst - computed: false, optional: true, required: false
  private _synRcvRst?: number; 
  public get synRcvRst() {
    return this.getNumberAttribute('syn_rcv_rst');
  }
  public set synRcvRst(value: number) {
    this._synRcvRst = value;
  }
  public resetSynRcvRst() {
    this._synRcvRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRcvRstInput() {
    return this._synRcvRst;
  }

  // syn_rcv_rstack - computed: false, optional: true, required: false
  private _synRcvRstack?: number; 
  public get synRcvRstack() {
    return this.getNumberAttribute('syn_rcv_rstack');
  }
  public set synRcvRstack(value: number) {
    this._synRcvRstack = value;
  }
  public resetSynRcvRstack() {
    this._synRcvRstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRcvRstackInput() {
    return this._synRcvRstack;
  }

  // tcpabortontimeout - computed: false, optional: true, required: false
  private _tcpabortontimeout?: number; 
  public get tcpabortontimeout() {
    return this.getNumberAttribute('tcpabortontimeout');
  }
  public set tcpabortontimeout(value: number) {
    this._tcpabortontimeout = value;
  }
  public resetTcpabortontimeout() {
    this._tcpabortontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpabortontimeoutInput() {
    return this._tcpabortontimeout;
  }

  // tfo_actives - computed: false, optional: true, required: false
  private _tfoActives?: number; 
  public get tfoActives() {
    return this.getNumberAttribute('tfo_actives');
  }
  public set tfoActives(value: number) {
    this._tfoActives = value;
  }
  public resetTfoActives() {
    this._tfoActives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfoActivesInput() {
    return this._tfoActives;
  }

  // tfo_conns - computed: false, optional: true, required: false
  private _tfoConns?: number; 
  public get tfoConns() {
    return this.getNumberAttribute('tfo_conns');
  }
  public set tfoConns(value: number) {
    this._tfoConns = value;
  }
  public resetTfoConns() {
    this._tfoConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfoConnsInput() {
    return this._tfoConns;
  }

  // tfo_denied - computed: false, optional: true, required: false
  private _tfoDenied?: number; 
  public get tfoDenied() {
    return this.getNumberAttribute('tfo_denied');
  }
  public set tfoDenied(value: number) {
    this._tfoDenied = value;
  }
  public resetTfoDenied() {
    this._tfoDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfoDeniedInput() {
    return this._tfoDenied;
  }
}

export class DataThunderSystemTcpOperOperTcpCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemTcpOperOperTcpCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemTcpOperOperTcpCpuListStructOutputReference {
    return new DataThunderSystemTcpOperOperTcpCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemTcpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#cpu_count DataThunderSystemTcpOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * tcp_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#tcp_cpu_list DataThunderSystemTcpOper#tcp_cpu_list}
  */
  readonly tcpCpuList?: DataThunderSystemTcpOperOperTcpCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSystemTcpOperOperToTerraform(struct?: DataThunderSystemTcpOperOperOutputReference | DataThunderSystemTcpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    tcp_cpu_list: cdktf.listMapper(dataThunderSystemTcpOperOperTcpCpuListStructToTerraform, true)(struct!.tcpCpuList),
  }
}


export function dataThunderSystemTcpOperOperToHclTerraform(struct?: DataThunderSystemTcpOperOperOutputReference | DataThunderSystemTcpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSystemTcpOperOperTcpCpuListStructToHclTerraform, true)(struct!.tcpCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTcpOperOperTcpCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTcpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._tcpCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCpuList = this._tcpCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._tcpCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._tcpCpuList.internalValue = value.tcpCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // tcp_cpu_list - computed: false, optional: true, required: false
  private _tcpCpuList = new DataThunderSystemTcpOperOperTcpCpuListStructList(this, "tcp_cpu_list", false);
  public get tcpCpuList() {
    return this._tcpCpuList;
  }
  public putTcpCpuList(value: DataThunderSystemTcpOperOperTcpCpuListStruct[] | cdktf.IResolvable) {
    this._tcpCpuList.internalValue = value;
  }
  public resetTcpCpuList() {
    this._tcpCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCpuListInput() {
    return this._tcpCpuList.internalValue;
  }
}
export interface DataThunderSystemTcpOperRateLimitResetUnknownConnOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#unknown_conn_current_rate DataThunderSystemTcpOper#unknown_conn_current_rate}
  */
  readonly unknownConnCurrentRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#unknown_conn_rate_limit DataThunderSystemTcpOper#unknown_conn_rate_limit}
  */
  readonly unknownConnRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#unknown_conn_rate_limit_drop DataThunderSystemTcpOper#unknown_conn_rate_limit_drop}
  */
  readonly unknownConnRateLimitDrop?: number;
}

export function dataThunderSystemTcpOperRateLimitResetUnknownConnOperToTerraform(struct?: DataThunderSystemTcpOperRateLimitResetUnknownConnOperOutputReference | DataThunderSystemTcpOperRateLimitResetUnknownConnOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknown_conn_current_rate: cdktf.numberToTerraform(struct!.unknownConnCurrentRate),
    unknown_conn_rate_limit: cdktf.numberToTerraform(struct!.unknownConnRateLimit),
    unknown_conn_rate_limit_drop: cdktf.numberToTerraform(struct!.unknownConnRateLimitDrop),
  }
}


export function dataThunderSystemTcpOperRateLimitResetUnknownConnOperToHclTerraform(struct?: DataThunderSystemTcpOperRateLimitResetUnknownConnOperOutputReference | DataThunderSystemTcpOperRateLimitResetUnknownConnOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknown_conn_current_rate: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnCurrentRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_conn_rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.unknownConnRateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpOperRateLimitResetUnknownConnOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTcpOperRateLimitResetUnknownConnOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknownConnCurrentRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnCurrentRate = this._unknownConnCurrentRate;
    }
    if (this._unknownConnRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnRateLimit = this._unknownConnRateLimit;
    }
    if (this._unknownConnRateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownConnRateLimitDrop = this._unknownConnRateLimitDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpOperRateLimitResetUnknownConnOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unknownConnCurrentRate = undefined;
      this._unknownConnRateLimit = undefined;
      this._unknownConnRateLimitDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unknownConnCurrentRate = value.unknownConnCurrentRate;
      this._unknownConnRateLimit = value.unknownConnRateLimit;
      this._unknownConnRateLimitDrop = value.unknownConnRateLimitDrop;
    }
  }

  // unknown_conn_current_rate - computed: false, optional: true, required: false
  private _unknownConnCurrentRate?: number; 
  public get unknownConnCurrentRate() {
    return this.getNumberAttribute('unknown_conn_current_rate');
  }
  public set unknownConnCurrentRate(value: number) {
    this._unknownConnCurrentRate = value;
  }
  public resetUnknownConnCurrentRate() {
    this._unknownConnCurrentRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnCurrentRateInput() {
    return this._unknownConnCurrentRate;
  }

  // unknown_conn_rate_limit - computed: false, optional: true, required: false
  private _unknownConnRateLimit?: number; 
  public get unknownConnRateLimit() {
    return this.getNumberAttribute('unknown_conn_rate_limit');
  }
  public set unknownConnRateLimit(value: number) {
    this._unknownConnRateLimit = value;
  }
  public resetUnknownConnRateLimit() {
    this._unknownConnRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnRateLimitInput() {
    return this._unknownConnRateLimit;
  }

  // unknown_conn_rate_limit_drop - computed: false, optional: true, required: false
  private _unknownConnRateLimitDrop?: number; 
  public get unknownConnRateLimitDrop() {
    return this.getNumberAttribute('unknown_conn_rate_limit_drop');
  }
  public set unknownConnRateLimitDrop(value: number) {
    this._unknownConnRateLimitDrop = value;
  }
  public resetUnknownConnRateLimitDrop() {
    this._unknownConnRateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownConnRateLimitDropInput() {
    return this._unknownConnRateLimitDrop;
  }
}
export interface DataThunderSystemTcpOperRateLimitResetUnknownConn {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#oper DataThunderSystemTcpOper#oper}
  */
  readonly oper?: DataThunderSystemTcpOperRateLimitResetUnknownConnOper;
}

export function dataThunderSystemTcpOperRateLimitResetUnknownConnToTerraform(struct?: DataThunderSystemTcpOperRateLimitResetUnknownConnOutputReference | DataThunderSystemTcpOperRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderSystemTcpOperRateLimitResetUnknownConnOperToTerraform(struct!.oper),
  }
}


export function dataThunderSystemTcpOperRateLimitResetUnknownConnToHclTerraform(struct?: DataThunderSystemTcpOperRateLimitResetUnknownConnOutputReference | DataThunderSystemTcpOperRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderSystemTcpOperRateLimitResetUnknownConnOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemTcpOperRateLimitResetUnknownConnOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTcpOperRateLimitResetUnknownConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTcpOperRateLimitResetUnknownConn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTcpOperRateLimitResetUnknownConn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSystemTcpOperRateLimitResetUnknownConnOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTcpOperRateLimitResetUnknownConnOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper thunder_system_tcp_oper}
*/
export class DataThunderSystemTcpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_tcp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTcpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTcpOper to import
  * @param importFromId The id of the existing DataThunderSystemTcpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTcpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_tcp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_tcp_oper thunder_system_tcp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTcpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTcpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_tcp_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._rateLimitResetUnknownConn.internalValue = config.rateLimitResetUnknownConn;
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
  private _oper = new DataThunderSystemTcpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemTcpOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // rate_limit_reset_unknown_conn - computed: false, optional: true, required: false
  private _rateLimitResetUnknownConn = new DataThunderSystemTcpOperRateLimitResetUnknownConnOutputReference(this, "rate_limit_reset_unknown_conn");
  public get rateLimitResetUnknownConn() {
    return this._rateLimitResetUnknownConn;
  }
  public putRateLimitResetUnknownConn(value: DataThunderSystemTcpOperRateLimitResetUnknownConn) {
    this._rateLimitResetUnknownConn.internalValue = value;
  }
  public resetRateLimitResetUnknownConn() {
    this._rateLimitResetUnknownConn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResetUnknownConnInput() {
    return this._rateLimitResetUnknownConn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSystemTcpOperOperToTerraform(this._oper.internalValue),
      rate_limit_reset_unknown_conn: dataThunderSystemTcpOperRateLimitResetUnknownConnToTerraform(this._rateLimitResetUnknownConn.internalValue),
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
        value: dataThunderSystemTcpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTcpOperOperList",
      },
      rate_limit_reset_unknown_conn: {
        value: dataThunderSystemTcpOperRateLimitResetUnknownConnToHclTerraform(this._rateLimitResetUnknownConn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTcpOperRateLimitResetUnknownConnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
