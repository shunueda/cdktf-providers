// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdPerformanceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#id DataThunderRrdPerformanceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#oper DataThunderRrdPerformanceOper#oper}
  */
  readonly oper?: DataThunderRrdPerformanceOperOper;
}
export interface DataThunderRrdPerformanceOperOperPerformanceData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_avail_sess DataThunderRrdPerformanceOper#lsn_avail_sess}
  */
  readonly lsnAvailSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_cps DataThunderRrdPerformanceOper#lsn_cps}
  */
  readonly lsnCps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_tcp_port_avail DataThunderRrdPerformanceOper#lsn_tcp_port_avail}
  */
  readonly lsnTcpPortAvail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_tcp_port_used DataThunderRrdPerformanceOper#lsn_tcp_port_used}
  */
  readonly lsnTcpPortUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_udp_port_avail DataThunderRrdPerformanceOper#lsn_udp_port_avail}
  */
  readonly lsnUdpPortAvail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_udp_port_used DataThunderRrdPerformanceOper#lsn_udp_port_used}
  */
  readonly lsnUdpPortUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#lsn_used_sess DataThunderRrdPerformanceOper#lsn_used_sess}
  */
  readonly lsnUsedSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_cur_conns DataThunderRrdPerformanceOper#ov_cur_conns}
  */
  readonly ovCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_ip_cur_conns DataThunderRrdPerformanceOper#ov_ip_cur_conns}
  */
  readonly ovIpCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_l7_req DataThunderRrdPerformanceOper#ov_l7_req}
  */
  readonly ovL7Req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_ipnat DataThunderRrdPerformanceOper#ov_new_conn_ipnat}
  */
  readonly ovNewConnIpnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_l4 DataThunderRrdPerformanceOper#ov_new_conn_l4}
  */
  readonly ovNewConnL4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_l7 DataThunderRrdPerformanceOper#ov_new_conn_l7}
  */
  readonly ovNewConnL7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_srv_ssl DataThunderRrdPerformanceOper#ov_new_conn_srv_ssl}
  */
  readonly ovNewConnSrvSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_ssl DataThunderRrdPerformanceOper#ov_new_conn_ssl}
  */
  readonly ovNewConnSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_new_conn_tot DataThunderRrdPerformanceOper#ov_new_conn_tot}
  */
  readonly ovNewConnTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_other_cur_conns DataThunderRrdPerformanceOper#ov_other_cur_conns}
  */
  readonly ovOtherCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_puts DataThunderRrdPerformanceOper#ov_puts}
  */
  readonly ovPuts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_sctp_cur_conns DataThunderRrdPerformanceOper#ov_sctp_cur_conns}
  */
  readonly ovSctpCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_tcp_cur_conns DataThunderRrdPerformanceOper#ov_tcp_cur_conns}
  */
  readonly ovTcpCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#ov_udp_cur_conns DataThunderRrdPerformanceOper#ov_udp_cur_conns}
  */
  readonly ovUdpCurConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#rus_c_conns_cur DataThunderRrdPerformanceOper#rus_c_conns_cur}
  */
  readonly rusCConnsCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#rus_c_conns_tot DataThunderRrdPerformanceOper#rus_c_conns_tot}
  */
  readonly rusCConnsTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#rus_s_conns_act DataThunderRrdPerformanceOper#rus_s_conns_act}
  */
  readonly rusSConnsAct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#rus_s_conns_cur DataThunderRrdPerformanceOper#rus_s_conns_cur}
  */
  readonly rusSConnsCur?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#rus_s_conns_tot DataThunderRrdPerformanceOper#rus_s_conns_tot}
  */
  readonly rusSConnsTot?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#syn_fail DataThunderRrdPerformanceOper#syn_fail}
  */
  readonly synFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#syn_recv DataThunderRrdPerformanceOper#syn_recv}
  */
  readonly synRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#time DataThunderRrdPerformanceOper#time}
  */
  readonly time?: number;
}

export function dataThunderRrdPerformanceOperOperPerformanceDataToTerraform(struct?: DataThunderRrdPerformanceOperOperPerformanceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lsn_avail_sess: cdktf.numberToTerraform(struct!.lsnAvailSess),
    lsn_cps: cdktf.numberToTerraform(struct!.lsnCps),
    lsn_tcp_port_avail: cdktf.numberToTerraform(struct!.lsnTcpPortAvail),
    lsn_tcp_port_used: cdktf.numberToTerraform(struct!.lsnTcpPortUsed),
    lsn_udp_port_avail: cdktf.numberToTerraform(struct!.lsnUdpPortAvail),
    lsn_udp_port_used: cdktf.numberToTerraform(struct!.lsnUdpPortUsed),
    lsn_used_sess: cdktf.numberToTerraform(struct!.lsnUsedSess),
    ov_cur_conns: cdktf.numberToTerraform(struct!.ovCurConns),
    ov_ip_cur_conns: cdktf.numberToTerraform(struct!.ovIpCurConns),
    ov_l7_req: cdktf.numberToTerraform(struct!.ovL7Req),
    ov_new_conn_ipnat: cdktf.numberToTerraform(struct!.ovNewConnIpnat),
    ov_new_conn_l4: cdktf.numberToTerraform(struct!.ovNewConnL4),
    ov_new_conn_l7: cdktf.numberToTerraform(struct!.ovNewConnL7),
    ov_new_conn_srv_ssl: cdktf.numberToTerraform(struct!.ovNewConnSrvSsl),
    ov_new_conn_ssl: cdktf.numberToTerraform(struct!.ovNewConnSsl),
    ov_new_conn_tot: cdktf.numberToTerraform(struct!.ovNewConnTot),
    ov_other_cur_conns: cdktf.numberToTerraform(struct!.ovOtherCurConns),
    ov_puts: cdktf.numberToTerraform(struct!.ovPuts),
    ov_sctp_cur_conns: cdktf.numberToTerraform(struct!.ovSctpCurConns),
    ov_tcp_cur_conns: cdktf.numberToTerraform(struct!.ovTcpCurConns),
    ov_udp_cur_conns: cdktf.numberToTerraform(struct!.ovUdpCurConns),
    rus_c_conns_cur: cdktf.numberToTerraform(struct!.rusCConnsCur),
    rus_c_conns_tot: cdktf.numberToTerraform(struct!.rusCConnsTot),
    rus_s_conns_act: cdktf.numberToTerraform(struct!.rusSConnsAct),
    rus_s_conns_cur: cdktf.numberToTerraform(struct!.rusSConnsCur),
    rus_s_conns_tot: cdktf.numberToTerraform(struct!.rusSConnsTot),
    syn_fail: cdktf.numberToTerraform(struct!.synFail),
    syn_recv: cdktf.numberToTerraform(struct!.synRecv),
    time: cdktf.numberToTerraform(struct!.time),
  }
}


export function dataThunderRrdPerformanceOperOperPerformanceDataToHclTerraform(struct?: DataThunderRrdPerformanceOperOperPerformanceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lsn_avail_sess: {
      value: cdktf.numberToHclTerraform(struct!.lsnAvailSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_cps: {
      value: cdktf.numberToHclTerraform(struct!.lsnCps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_tcp_port_avail: {
      value: cdktf.numberToHclTerraform(struct!.lsnTcpPortAvail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_tcp_port_used: {
      value: cdktf.numberToHclTerraform(struct!.lsnTcpPortUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_udp_port_avail: {
      value: cdktf.numberToHclTerraform(struct!.lsnUdpPortAvail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_udp_port_used: {
      value: cdktf.numberToHclTerraform(struct!.lsnUdpPortUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_used_sess: {
      value: cdktf.numberToHclTerraform(struct!.lsnUsedSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_ip_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovIpCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_l7_req: {
      value: cdktf.numberToHclTerraform(struct!.ovL7Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_ipnat: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnIpnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_l4: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnL4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_l7: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnL7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_srv_ssl: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnSrvSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_ssl: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_new_conn_tot: {
      value: cdktf.numberToHclTerraform(struct!.ovNewConnTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_other_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovOtherCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_puts: {
      value: cdktf.numberToHclTerraform(struct!.ovPuts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_sctp_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovSctpCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_tcp_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovTcpCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ov_udp_cur_conns: {
      value: cdktf.numberToHclTerraform(struct!.ovUdpCurConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rus_c_conns_cur: {
      value: cdktf.numberToHclTerraform(struct!.rusCConnsCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rus_c_conns_tot: {
      value: cdktf.numberToHclTerraform(struct!.rusCConnsTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rus_s_conns_act: {
      value: cdktf.numberToHclTerraform(struct!.rusSConnsAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rus_s_conns_cur: {
      value: cdktf.numberToHclTerraform(struct!.rusSConnsCur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rus_s_conns_tot: {
      value: cdktf.numberToHclTerraform(struct!.rusSConnsTot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_fail: {
      value: cdktf.numberToHclTerraform(struct!.synFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_recv: {
      value: cdktf.numberToHclTerraform(struct!.synRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdPerformanceOperOperPerformanceDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdPerformanceOperOperPerformanceData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lsnAvailSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnAvailSess = this._lsnAvailSess;
    }
    if (this._lsnCps !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnCps = this._lsnCps;
    }
    if (this._lsnTcpPortAvail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnTcpPortAvail = this._lsnTcpPortAvail;
    }
    if (this._lsnTcpPortUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnTcpPortUsed = this._lsnTcpPortUsed;
    }
    if (this._lsnUdpPortAvail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnUdpPortAvail = this._lsnUdpPortAvail;
    }
    if (this._lsnUdpPortUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnUdpPortUsed = this._lsnUdpPortUsed;
    }
    if (this._lsnUsedSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnUsedSess = this._lsnUsedSess;
    }
    if (this._ovCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovCurConns = this._ovCurConns;
    }
    if (this._ovIpCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovIpCurConns = this._ovIpCurConns;
    }
    if (this._ovL7Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovL7Req = this._ovL7Req;
    }
    if (this._ovNewConnIpnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnIpnat = this._ovNewConnIpnat;
    }
    if (this._ovNewConnL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnL4 = this._ovNewConnL4;
    }
    if (this._ovNewConnL7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnL7 = this._ovNewConnL7;
    }
    if (this._ovNewConnSrvSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnSrvSsl = this._ovNewConnSrvSsl;
    }
    if (this._ovNewConnSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnSsl = this._ovNewConnSsl;
    }
    if (this._ovNewConnTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovNewConnTot = this._ovNewConnTot;
    }
    if (this._ovOtherCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovOtherCurConns = this._ovOtherCurConns;
    }
    if (this._ovPuts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovPuts = this._ovPuts;
    }
    if (this._ovSctpCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovSctpCurConns = this._ovSctpCurConns;
    }
    if (this._ovTcpCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovTcpCurConns = this._ovTcpCurConns;
    }
    if (this._ovUdpCurConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovUdpCurConns = this._ovUdpCurConns;
    }
    if (this._rusCConnsCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.rusCConnsCur = this._rusCConnsCur;
    }
    if (this._rusCConnsTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.rusCConnsTot = this._rusCConnsTot;
    }
    if (this._rusSConnsAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.rusSConnsAct = this._rusSConnsAct;
    }
    if (this._rusSConnsCur !== undefined) {
      hasAnyValues = true;
      internalValueResult.rusSConnsCur = this._rusSConnsCur;
    }
    if (this._rusSConnsTot !== undefined) {
      hasAnyValues = true;
      internalValueResult.rusSConnsTot = this._rusSConnsTot;
    }
    if (this._synFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFail = this._synFail;
    }
    if (this._synRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRecv = this._synRecv;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdPerformanceOperOperPerformanceData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lsnAvailSess = undefined;
      this._lsnCps = undefined;
      this._lsnTcpPortAvail = undefined;
      this._lsnTcpPortUsed = undefined;
      this._lsnUdpPortAvail = undefined;
      this._lsnUdpPortUsed = undefined;
      this._lsnUsedSess = undefined;
      this._ovCurConns = undefined;
      this._ovIpCurConns = undefined;
      this._ovL7Req = undefined;
      this._ovNewConnIpnat = undefined;
      this._ovNewConnL4 = undefined;
      this._ovNewConnL7 = undefined;
      this._ovNewConnSrvSsl = undefined;
      this._ovNewConnSsl = undefined;
      this._ovNewConnTot = undefined;
      this._ovOtherCurConns = undefined;
      this._ovPuts = undefined;
      this._ovSctpCurConns = undefined;
      this._ovTcpCurConns = undefined;
      this._ovUdpCurConns = undefined;
      this._rusCConnsCur = undefined;
      this._rusCConnsTot = undefined;
      this._rusSConnsAct = undefined;
      this._rusSConnsCur = undefined;
      this._rusSConnsTot = undefined;
      this._synFail = undefined;
      this._synRecv = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lsnAvailSess = value.lsnAvailSess;
      this._lsnCps = value.lsnCps;
      this._lsnTcpPortAvail = value.lsnTcpPortAvail;
      this._lsnTcpPortUsed = value.lsnTcpPortUsed;
      this._lsnUdpPortAvail = value.lsnUdpPortAvail;
      this._lsnUdpPortUsed = value.lsnUdpPortUsed;
      this._lsnUsedSess = value.lsnUsedSess;
      this._ovCurConns = value.ovCurConns;
      this._ovIpCurConns = value.ovIpCurConns;
      this._ovL7Req = value.ovL7Req;
      this._ovNewConnIpnat = value.ovNewConnIpnat;
      this._ovNewConnL4 = value.ovNewConnL4;
      this._ovNewConnL7 = value.ovNewConnL7;
      this._ovNewConnSrvSsl = value.ovNewConnSrvSsl;
      this._ovNewConnSsl = value.ovNewConnSsl;
      this._ovNewConnTot = value.ovNewConnTot;
      this._ovOtherCurConns = value.ovOtherCurConns;
      this._ovPuts = value.ovPuts;
      this._ovSctpCurConns = value.ovSctpCurConns;
      this._ovTcpCurConns = value.ovTcpCurConns;
      this._ovUdpCurConns = value.ovUdpCurConns;
      this._rusCConnsCur = value.rusCConnsCur;
      this._rusCConnsTot = value.rusCConnsTot;
      this._rusSConnsAct = value.rusSConnsAct;
      this._rusSConnsCur = value.rusSConnsCur;
      this._rusSConnsTot = value.rusSConnsTot;
      this._synFail = value.synFail;
      this._synRecv = value.synRecv;
      this._time = value.time;
    }
  }

  // lsn_avail_sess - computed: false, optional: true, required: false
  private _lsnAvailSess?: number; 
  public get lsnAvailSess() {
    return this.getNumberAttribute('lsn_avail_sess');
  }
  public set lsnAvailSess(value: number) {
    this._lsnAvailSess = value;
  }
  public resetLsnAvailSess() {
    this._lsnAvailSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnAvailSessInput() {
    return this._lsnAvailSess;
  }

  // lsn_cps - computed: false, optional: true, required: false
  private _lsnCps?: number; 
  public get lsnCps() {
    return this.getNumberAttribute('lsn_cps');
  }
  public set lsnCps(value: number) {
    this._lsnCps = value;
  }
  public resetLsnCps() {
    this._lsnCps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnCpsInput() {
    return this._lsnCps;
  }

  // lsn_tcp_port_avail - computed: false, optional: true, required: false
  private _lsnTcpPortAvail?: number; 
  public get lsnTcpPortAvail() {
    return this.getNumberAttribute('lsn_tcp_port_avail');
  }
  public set lsnTcpPortAvail(value: number) {
    this._lsnTcpPortAvail = value;
  }
  public resetLsnTcpPortAvail() {
    this._lsnTcpPortAvail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnTcpPortAvailInput() {
    return this._lsnTcpPortAvail;
  }

  // lsn_tcp_port_used - computed: false, optional: true, required: false
  private _lsnTcpPortUsed?: number; 
  public get lsnTcpPortUsed() {
    return this.getNumberAttribute('lsn_tcp_port_used');
  }
  public set lsnTcpPortUsed(value: number) {
    this._lsnTcpPortUsed = value;
  }
  public resetLsnTcpPortUsed() {
    this._lsnTcpPortUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnTcpPortUsedInput() {
    return this._lsnTcpPortUsed;
  }

  // lsn_udp_port_avail - computed: false, optional: true, required: false
  private _lsnUdpPortAvail?: number; 
  public get lsnUdpPortAvail() {
    return this.getNumberAttribute('lsn_udp_port_avail');
  }
  public set lsnUdpPortAvail(value: number) {
    this._lsnUdpPortAvail = value;
  }
  public resetLsnUdpPortAvail() {
    this._lsnUdpPortAvail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnUdpPortAvailInput() {
    return this._lsnUdpPortAvail;
  }

  // lsn_udp_port_used - computed: false, optional: true, required: false
  private _lsnUdpPortUsed?: number; 
  public get lsnUdpPortUsed() {
    return this.getNumberAttribute('lsn_udp_port_used');
  }
  public set lsnUdpPortUsed(value: number) {
    this._lsnUdpPortUsed = value;
  }
  public resetLsnUdpPortUsed() {
    this._lsnUdpPortUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnUdpPortUsedInput() {
    return this._lsnUdpPortUsed;
  }

  // lsn_used_sess - computed: false, optional: true, required: false
  private _lsnUsedSess?: number; 
  public get lsnUsedSess() {
    return this.getNumberAttribute('lsn_used_sess');
  }
  public set lsnUsedSess(value: number) {
    this._lsnUsedSess = value;
  }
  public resetLsnUsedSess() {
    this._lsnUsedSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnUsedSessInput() {
    return this._lsnUsedSess;
  }

  // ov_cur_conns - computed: false, optional: true, required: false
  private _ovCurConns?: number; 
  public get ovCurConns() {
    return this.getNumberAttribute('ov_cur_conns');
  }
  public set ovCurConns(value: number) {
    this._ovCurConns = value;
  }
  public resetOvCurConns() {
    this._ovCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovCurConnsInput() {
    return this._ovCurConns;
  }

  // ov_ip_cur_conns - computed: false, optional: true, required: false
  private _ovIpCurConns?: number; 
  public get ovIpCurConns() {
    return this.getNumberAttribute('ov_ip_cur_conns');
  }
  public set ovIpCurConns(value: number) {
    this._ovIpCurConns = value;
  }
  public resetOvIpCurConns() {
    this._ovIpCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovIpCurConnsInput() {
    return this._ovIpCurConns;
  }

  // ov_l7_req - computed: false, optional: true, required: false
  private _ovL7Req?: number; 
  public get ovL7Req() {
    return this.getNumberAttribute('ov_l7_req');
  }
  public set ovL7Req(value: number) {
    this._ovL7Req = value;
  }
  public resetOvL7Req() {
    this._ovL7Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovL7ReqInput() {
    return this._ovL7Req;
  }

  // ov_new_conn_ipnat - computed: false, optional: true, required: false
  private _ovNewConnIpnat?: number; 
  public get ovNewConnIpnat() {
    return this.getNumberAttribute('ov_new_conn_ipnat');
  }
  public set ovNewConnIpnat(value: number) {
    this._ovNewConnIpnat = value;
  }
  public resetOvNewConnIpnat() {
    this._ovNewConnIpnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnIpnatInput() {
    return this._ovNewConnIpnat;
  }

  // ov_new_conn_l4 - computed: false, optional: true, required: false
  private _ovNewConnL4?: number; 
  public get ovNewConnL4() {
    return this.getNumberAttribute('ov_new_conn_l4');
  }
  public set ovNewConnL4(value: number) {
    this._ovNewConnL4 = value;
  }
  public resetOvNewConnL4() {
    this._ovNewConnL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnL4Input() {
    return this._ovNewConnL4;
  }

  // ov_new_conn_l7 - computed: false, optional: true, required: false
  private _ovNewConnL7?: number; 
  public get ovNewConnL7() {
    return this.getNumberAttribute('ov_new_conn_l7');
  }
  public set ovNewConnL7(value: number) {
    this._ovNewConnL7 = value;
  }
  public resetOvNewConnL7() {
    this._ovNewConnL7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnL7Input() {
    return this._ovNewConnL7;
  }

  // ov_new_conn_srv_ssl - computed: false, optional: true, required: false
  private _ovNewConnSrvSsl?: number; 
  public get ovNewConnSrvSsl() {
    return this.getNumberAttribute('ov_new_conn_srv_ssl');
  }
  public set ovNewConnSrvSsl(value: number) {
    this._ovNewConnSrvSsl = value;
  }
  public resetOvNewConnSrvSsl() {
    this._ovNewConnSrvSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnSrvSslInput() {
    return this._ovNewConnSrvSsl;
  }

  // ov_new_conn_ssl - computed: false, optional: true, required: false
  private _ovNewConnSsl?: number; 
  public get ovNewConnSsl() {
    return this.getNumberAttribute('ov_new_conn_ssl');
  }
  public set ovNewConnSsl(value: number) {
    this._ovNewConnSsl = value;
  }
  public resetOvNewConnSsl() {
    this._ovNewConnSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnSslInput() {
    return this._ovNewConnSsl;
  }

  // ov_new_conn_tot - computed: false, optional: true, required: false
  private _ovNewConnTot?: number; 
  public get ovNewConnTot() {
    return this.getNumberAttribute('ov_new_conn_tot');
  }
  public set ovNewConnTot(value: number) {
    this._ovNewConnTot = value;
  }
  public resetOvNewConnTot() {
    this._ovNewConnTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovNewConnTotInput() {
    return this._ovNewConnTot;
  }

  // ov_other_cur_conns - computed: false, optional: true, required: false
  private _ovOtherCurConns?: number; 
  public get ovOtherCurConns() {
    return this.getNumberAttribute('ov_other_cur_conns');
  }
  public set ovOtherCurConns(value: number) {
    this._ovOtherCurConns = value;
  }
  public resetOvOtherCurConns() {
    this._ovOtherCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovOtherCurConnsInput() {
    return this._ovOtherCurConns;
  }

  // ov_puts - computed: false, optional: true, required: false
  private _ovPuts?: number; 
  public get ovPuts() {
    return this.getNumberAttribute('ov_puts');
  }
  public set ovPuts(value: number) {
    this._ovPuts = value;
  }
  public resetOvPuts() {
    this._ovPuts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovPutsInput() {
    return this._ovPuts;
  }

  // ov_sctp_cur_conns - computed: false, optional: true, required: false
  private _ovSctpCurConns?: number; 
  public get ovSctpCurConns() {
    return this.getNumberAttribute('ov_sctp_cur_conns');
  }
  public set ovSctpCurConns(value: number) {
    this._ovSctpCurConns = value;
  }
  public resetOvSctpCurConns() {
    this._ovSctpCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovSctpCurConnsInput() {
    return this._ovSctpCurConns;
  }

  // ov_tcp_cur_conns - computed: false, optional: true, required: false
  private _ovTcpCurConns?: number; 
  public get ovTcpCurConns() {
    return this.getNumberAttribute('ov_tcp_cur_conns');
  }
  public set ovTcpCurConns(value: number) {
    this._ovTcpCurConns = value;
  }
  public resetOvTcpCurConns() {
    this._ovTcpCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovTcpCurConnsInput() {
    return this._ovTcpCurConns;
  }

  // ov_udp_cur_conns - computed: false, optional: true, required: false
  private _ovUdpCurConns?: number; 
  public get ovUdpCurConns() {
    return this.getNumberAttribute('ov_udp_cur_conns');
  }
  public set ovUdpCurConns(value: number) {
    this._ovUdpCurConns = value;
  }
  public resetOvUdpCurConns() {
    this._ovUdpCurConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovUdpCurConnsInput() {
    return this._ovUdpCurConns;
  }

  // rus_c_conns_cur - computed: false, optional: true, required: false
  private _rusCConnsCur?: number; 
  public get rusCConnsCur() {
    return this.getNumberAttribute('rus_c_conns_cur');
  }
  public set rusCConnsCur(value: number) {
    this._rusCConnsCur = value;
  }
  public resetRusCConnsCur() {
    this._rusCConnsCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rusCConnsCurInput() {
    return this._rusCConnsCur;
  }

  // rus_c_conns_tot - computed: false, optional: true, required: false
  private _rusCConnsTot?: number; 
  public get rusCConnsTot() {
    return this.getNumberAttribute('rus_c_conns_tot');
  }
  public set rusCConnsTot(value: number) {
    this._rusCConnsTot = value;
  }
  public resetRusCConnsTot() {
    this._rusCConnsTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rusCConnsTotInput() {
    return this._rusCConnsTot;
  }

  // rus_s_conns_act - computed: false, optional: true, required: false
  private _rusSConnsAct?: number; 
  public get rusSConnsAct() {
    return this.getNumberAttribute('rus_s_conns_act');
  }
  public set rusSConnsAct(value: number) {
    this._rusSConnsAct = value;
  }
  public resetRusSConnsAct() {
    this._rusSConnsAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rusSConnsActInput() {
    return this._rusSConnsAct;
  }

  // rus_s_conns_cur - computed: false, optional: true, required: false
  private _rusSConnsCur?: number; 
  public get rusSConnsCur() {
    return this.getNumberAttribute('rus_s_conns_cur');
  }
  public set rusSConnsCur(value: number) {
    this._rusSConnsCur = value;
  }
  public resetRusSConnsCur() {
    this._rusSConnsCur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rusSConnsCurInput() {
    return this._rusSConnsCur;
  }

  // rus_s_conns_tot - computed: false, optional: true, required: false
  private _rusSConnsTot?: number; 
  public get rusSConnsTot() {
    return this.getNumberAttribute('rus_s_conns_tot');
  }
  public set rusSConnsTot(value: number) {
    this._rusSConnsTot = value;
  }
  public resetRusSConnsTot() {
    this._rusSConnsTot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rusSConnsTotInput() {
    return this._rusSConnsTot;
  }

  // syn_fail - computed: false, optional: true, required: false
  private _synFail?: number; 
  public get synFail() {
    return this.getNumberAttribute('syn_fail');
  }
  public set synFail(value: number) {
    this._synFail = value;
  }
  public resetSynFail() {
    this._synFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFailInput() {
    return this._synFail;
  }

  // syn_recv - computed: false, optional: true, required: false
  private _synRecv?: number; 
  public get synRecv() {
    return this.getNumberAttribute('syn_recv');
  }
  public set synRecv(value: number) {
    this._synRecv = value;
  }
  public resetSynRecv() {
    this._synRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRecvInput() {
    return this._synRecv;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class DataThunderRrdPerformanceOperOperPerformanceDataList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdPerformanceOperOperPerformanceData[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdPerformanceOperOperPerformanceDataOutputReference {
    return new DataThunderRrdPerformanceOperOperPerformanceDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdPerformanceOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#end_time DataThunderRrdPerformanceOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#start_time DataThunderRrdPerformanceOper#start_time}
  */
  readonly startTime?: number;
  /**
  * performance_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#performance_data DataThunderRrdPerformanceOper#performance_data}
  */
  readonly performanceData?: DataThunderRrdPerformanceOperOperPerformanceData[] | cdktf.IResolvable;
}

export function dataThunderRrdPerformanceOperOperToTerraform(struct?: DataThunderRrdPerformanceOperOperOutputReference | DataThunderRrdPerformanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    performance_data: cdktf.listMapper(dataThunderRrdPerformanceOperOperPerformanceDataToTerraform, true)(struct!.performanceData),
  }
}


export function dataThunderRrdPerformanceOperOperToHclTerraform(struct?: DataThunderRrdPerformanceOperOperOutputReference | DataThunderRrdPerformanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_data: {
      value: cdktf.listMapperHcl(dataThunderRrdPerformanceOperOperPerformanceDataToHclTerraform, true)(struct!.performanceData),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdPerformanceOperOperPerformanceDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdPerformanceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdPerformanceOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._performanceData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceData = this._performanceData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdPerformanceOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._performanceData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._performanceData.internalValue = value.performanceData;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // performance_data - computed: false, optional: true, required: false
  private _performanceData = new DataThunderRrdPerformanceOperOperPerformanceDataList(this, "performance_data", false);
  public get performanceData() {
    return this._performanceData;
  }
  public putPerformanceData(value: DataThunderRrdPerformanceOperOperPerformanceData[] | cdktf.IResolvable) {
    this._performanceData.internalValue = value;
  }
  public resetPerformanceData() {
    this._performanceData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDataInput() {
    return this._performanceData.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper thunder_rrd_performance_oper}
*/
export class DataThunderRrdPerformanceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_performance_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdPerformanceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdPerformanceOper to import
  * @param importFromId The id of the existing DataThunderRrdPerformanceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdPerformanceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_performance_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/rrd_performance_oper thunder_rrd_performance_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdPerformanceOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdPerformanceOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_performance_oper',
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
  private _oper = new DataThunderRrdPerformanceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdPerformanceOperOper) {
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
      oper: dataThunderRrdPerformanceOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdPerformanceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdPerformanceOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
