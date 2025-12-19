// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPop3ProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#id DataThunderSlbPop3ProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#oper DataThunderSlbPop3ProxyOper#oper}
  */
  readonly oper?: DataThunderSlbPop3ProxyOperOper;
}
export interface DataThunderSlbPop3ProxyOperOperL4CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#bad_seq DataThunderSlbPop3ProxyOper#bad_seq}
  */
  readonly badSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#client_est_state_err DataThunderSlbPop3ProxyOper#client_est_state_err}
  */
  readonly clientEstStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#client_rq_state_err DataThunderSlbPop3ProxyOper#client_rq_state_err}
  */
  readonly clientRqStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#control_chn_ssl DataThunderSlbPop3ProxyOper#control_chn_ssl}
  */
  readonly controlChnSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#current_proxy_conns DataThunderSlbPop3ProxyOper#current_proxy_conns}
  */
  readonly currentProxyConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#inv_start_line DataThunderSlbPop3ProxyOper#inv_start_line}
  */
  readonly invStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#no_route_failure DataThunderSlbPop3ProxyOper#no_route_failure}
  */
  readonly noRouteFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#other_cmd DataThunderSlbPop3ProxyOper#other_cmd}
  */
  readonly otherCmd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#pop3_line_too_long DataThunderSlbPop3ProxyOper#pop3_line_too_long}
  */
  readonly pop3LineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#request_line_freed DataThunderSlbPop3ProxyOper#request_line_freed}
  */
  readonly requestLineFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_ctng_state_err DataThunderSlbPop3ProxyOper#serv_ctng_state_err}
  */
  readonly servCtngStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_resp_state_err DataThunderSlbPop3ProxyOper#serv_resp_state_err}
  */
  readonly servRespStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_sel_ins_tpl_fail DataThunderSlbPop3ProxyOper#serv_sel_ins_tpl_fail}
  */
  readonly servSelInsTplFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_sel_persist_fail DataThunderSlbPop3ProxyOper#serv_sel_persist_fail}
  */
  readonly servSelPersistFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_sel_smpv4_fail DataThunderSlbPop3ProxyOper#serv_sel_smpv4_fail}
  */
  readonly servSelSmpv4Fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#serv_sel_smpv6_fail DataThunderSlbPop3ProxyOper#serv_sel_smpv6_fail}
  */
  readonly servSelSmpv6Fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#server_selection_failure DataThunderSlbPop3ProxyOper#server_selection_failure}
  */
  readonly serverSelectionFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#source_nat_failure DataThunderSlbPop3ProxyOper#source_nat_failure}
  */
  readonly sourceNatFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#stls_packet DataThunderSlbPop3ProxyOper#stls_packet}
  */
  readonly stlsPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#total_pop3_request DataThunderSlbPop3ProxyOper#total_pop3_request}
  */
  readonly totalPop3Request?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#total_proxy_conns DataThunderSlbPop3ProxyOper#total_proxy_conns}
  */
  readonly totalProxyConns?: number;
}

export function dataThunderSlbPop3ProxyOperOperL4CpuListStructToTerraform(struct?: DataThunderSlbPop3ProxyOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_seq: cdktf.numberToTerraform(struct!.badSeq),
    client_est_state_err: cdktf.numberToTerraform(struct!.clientEstStateErr),
    client_rq_state_err: cdktf.numberToTerraform(struct!.clientRqStateErr),
    control_chn_ssl: cdktf.numberToTerraform(struct!.controlChnSsl),
    current_proxy_conns: cdktf.numberToTerraform(struct!.currentProxyConns),
    inv_start_line: cdktf.numberToTerraform(struct!.invStartLine),
    no_route_failure: cdktf.numberToTerraform(struct!.noRouteFailure),
    other_cmd: cdktf.numberToTerraform(struct!.otherCmd),
    pop3_line_too_long: cdktf.numberToTerraform(struct!.pop3LineTooLong),
    request_line_freed: cdktf.numberToTerraform(struct!.requestLineFreed),
    serv_ctng_state_err: cdktf.numberToTerraform(struct!.servCtngStateErr),
    serv_resp_state_err: cdktf.numberToTerraform(struct!.servRespStateErr),
    serv_sel_ins_tpl_fail: cdktf.numberToTerraform(struct!.servSelInsTplFail),
    serv_sel_persist_fail: cdktf.numberToTerraform(struct!.servSelPersistFail),
    serv_sel_smpv4_fail: cdktf.numberToTerraform(struct!.servSelSmpv4Fail),
    serv_sel_smpv6_fail: cdktf.numberToTerraform(struct!.servSelSmpv6Fail),
    server_selection_failure: cdktf.numberToTerraform(struct!.serverSelectionFailure),
    source_nat_failure: cdktf.numberToTerraform(struct!.sourceNatFailure),
    stls_packet: cdktf.numberToTerraform(struct!.stlsPacket),
    total_pop3_request: cdktf.numberToTerraform(struct!.totalPop3Request),
    total_proxy_conns: cdktf.numberToTerraform(struct!.totalProxyConns),
  }
}


export function dataThunderSlbPop3ProxyOperOperL4CpuListStructToHclTerraform(struct?: DataThunderSlbPop3ProxyOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_seq: {
      value: cdktf.numberToHclTerraform(struct!.badSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_est_state_err: {
      value: cdktf.numberToHclTerraform(struct!.clientEstStateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rq_state_err: {
      value: cdktf.numberToHclTerraform(struct!.clientRqStateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_chn_ssl: {
      value: cdktf.numberToHclTerraform(struct!.controlChnSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_proxy_conns: {
      value: cdktf.numberToHclTerraform(struct!.currentProxyConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inv_start_line: {
      value: cdktf.numberToHclTerraform(struct!.invStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route_failure: {
      value: cdktf.numberToHclTerraform(struct!.noRouteFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_cmd: {
      value: cdktf.numberToHclTerraform(struct!.otherCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pop3_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.pop3LineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_line_freed: {
      value: cdktf.numberToHclTerraform(struct!.requestLineFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_ctng_state_err: {
      value: cdktf.numberToHclTerraform(struct!.servCtngStateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_resp_state_err: {
      value: cdktf.numberToHclTerraform(struct!.servRespStateErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_ins_tpl_fail: {
      value: cdktf.numberToHclTerraform(struct!.servSelInsTplFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_persist_fail: {
      value: cdktf.numberToHclTerraform(struct!.servSelPersistFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_smpv4_fail: {
      value: cdktf.numberToHclTerraform(struct!.servSelSmpv4Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_smpv6_fail: {
      value: cdktf.numberToHclTerraform(struct!.servSelSmpv6Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_selection_failure: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectionFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_nat_failure: {
      value: cdktf.numberToHclTerraform(struct!.sourceNatFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stls_packet: {
      value: cdktf.numberToHclTerraform(struct!.stlsPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_pop3_request: {
      value: cdktf.numberToHclTerraform(struct!.totalPop3Request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy_conns: {
      value: cdktf.numberToHclTerraform(struct!.totalProxyConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPop3ProxyOperOperL4CpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbPop3ProxyOperOperL4CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSeq = this._badSeq;
    }
    if (this._clientEstStateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEstStateErr = this._clientEstStateErr;
    }
    if (this._clientRqStateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRqStateErr = this._clientRqStateErr;
    }
    if (this._controlChnSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlChnSsl = this._controlChnSsl;
    }
    if (this._currentProxyConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentProxyConns = this._currentProxyConns;
    }
    if (this._invStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invStartLine = this._invStartLine;
    }
    if (this._noRouteFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteFailure = this._noRouteFailure;
    }
    if (this._otherCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCmd = this._otherCmd;
    }
    if (this._pop3LineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3LineTooLong = this._pop3LineTooLong;
    }
    if (this._requestLineFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLineFreed = this._requestLineFreed;
    }
    if (this._servCtngStateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servCtngStateErr = this._servCtngStateErr;
    }
    if (this._servRespStateErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servRespStateErr = this._servRespStateErr;
    }
    if (this._servSelInsTplFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelInsTplFail = this._servSelInsTplFail;
    }
    if (this._servSelPersistFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelPersistFail = this._servSelPersistFail;
    }
    if (this._servSelSmpv4Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelSmpv4Fail = this._servSelSmpv4Fail;
    }
    if (this._servSelSmpv6Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelSmpv6Fail = this._servSelSmpv6Fail;
    }
    if (this._serverSelectionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectionFailure = this._serverSelectionFailure;
    }
    if (this._sourceNatFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNatFailure = this._sourceNatFailure;
    }
    if (this._stlsPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stlsPacket = this._stlsPacket;
    }
    if (this._totalPop3Request !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPop3Request = this._totalPop3Request;
    }
    if (this._totalProxyConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxyConns = this._totalProxyConns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPop3ProxyOperOperL4CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badSeq = undefined;
      this._clientEstStateErr = undefined;
      this._clientRqStateErr = undefined;
      this._controlChnSsl = undefined;
      this._currentProxyConns = undefined;
      this._invStartLine = undefined;
      this._noRouteFailure = undefined;
      this._otherCmd = undefined;
      this._pop3LineTooLong = undefined;
      this._requestLineFreed = undefined;
      this._servCtngStateErr = undefined;
      this._servRespStateErr = undefined;
      this._servSelInsTplFail = undefined;
      this._servSelPersistFail = undefined;
      this._servSelSmpv4Fail = undefined;
      this._servSelSmpv6Fail = undefined;
      this._serverSelectionFailure = undefined;
      this._sourceNatFailure = undefined;
      this._stlsPacket = undefined;
      this._totalPop3Request = undefined;
      this._totalProxyConns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badSeq = value.badSeq;
      this._clientEstStateErr = value.clientEstStateErr;
      this._clientRqStateErr = value.clientRqStateErr;
      this._controlChnSsl = value.controlChnSsl;
      this._currentProxyConns = value.currentProxyConns;
      this._invStartLine = value.invStartLine;
      this._noRouteFailure = value.noRouteFailure;
      this._otherCmd = value.otherCmd;
      this._pop3LineTooLong = value.pop3LineTooLong;
      this._requestLineFreed = value.requestLineFreed;
      this._servCtngStateErr = value.servCtngStateErr;
      this._servRespStateErr = value.servRespStateErr;
      this._servSelInsTplFail = value.servSelInsTplFail;
      this._servSelPersistFail = value.servSelPersistFail;
      this._servSelSmpv4Fail = value.servSelSmpv4Fail;
      this._servSelSmpv6Fail = value.servSelSmpv6Fail;
      this._serverSelectionFailure = value.serverSelectionFailure;
      this._sourceNatFailure = value.sourceNatFailure;
      this._stlsPacket = value.stlsPacket;
      this._totalPop3Request = value.totalPop3Request;
      this._totalProxyConns = value.totalProxyConns;
    }
  }

  // bad_seq - computed: false, optional: true, required: false
  private _badSeq?: number; 
  public get badSeq() {
    return this.getNumberAttribute('bad_seq');
  }
  public set badSeq(value: number) {
    this._badSeq = value;
  }
  public resetBadSeq() {
    this._badSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSeqInput() {
    return this._badSeq;
  }

  // client_est_state_err - computed: false, optional: true, required: false
  private _clientEstStateErr?: number; 
  public get clientEstStateErr() {
    return this.getNumberAttribute('client_est_state_err');
  }
  public set clientEstStateErr(value: number) {
    this._clientEstStateErr = value;
  }
  public resetClientEstStateErr() {
    this._clientEstStateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEstStateErrInput() {
    return this._clientEstStateErr;
  }

  // client_rq_state_err - computed: false, optional: true, required: false
  private _clientRqStateErr?: number; 
  public get clientRqStateErr() {
    return this.getNumberAttribute('client_rq_state_err');
  }
  public set clientRqStateErr(value: number) {
    this._clientRqStateErr = value;
  }
  public resetClientRqStateErr() {
    this._clientRqStateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRqStateErrInput() {
    return this._clientRqStateErr;
  }

  // control_chn_ssl - computed: false, optional: true, required: false
  private _controlChnSsl?: number; 
  public get controlChnSsl() {
    return this.getNumberAttribute('control_chn_ssl');
  }
  public set controlChnSsl(value: number) {
    this._controlChnSsl = value;
  }
  public resetControlChnSsl() {
    this._controlChnSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlChnSslInput() {
    return this._controlChnSsl;
  }

  // current_proxy_conns - computed: false, optional: true, required: false
  private _currentProxyConns?: number; 
  public get currentProxyConns() {
    return this.getNumberAttribute('current_proxy_conns');
  }
  public set currentProxyConns(value: number) {
    this._currentProxyConns = value;
  }
  public resetCurrentProxyConns() {
    this._currentProxyConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProxyConnsInput() {
    return this._currentProxyConns;
  }

  // inv_start_line - computed: false, optional: true, required: false
  private _invStartLine?: number; 
  public get invStartLine() {
    return this.getNumberAttribute('inv_start_line');
  }
  public set invStartLine(value: number) {
    this._invStartLine = value;
  }
  public resetInvStartLine() {
    this._invStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invStartLineInput() {
    return this._invStartLine;
  }

  // no_route_failure - computed: false, optional: true, required: false
  private _noRouteFailure?: number; 
  public get noRouteFailure() {
    return this.getNumberAttribute('no_route_failure');
  }
  public set noRouteFailure(value: number) {
    this._noRouteFailure = value;
  }
  public resetNoRouteFailure() {
    this._noRouteFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteFailureInput() {
    return this._noRouteFailure;
  }

  // other_cmd - computed: false, optional: true, required: false
  private _otherCmd?: number; 
  public get otherCmd() {
    return this.getNumberAttribute('other_cmd');
  }
  public set otherCmd(value: number) {
    this._otherCmd = value;
  }
  public resetOtherCmd() {
    this._otherCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherCmdInput() {
    return this._otherCmd;
  }

  // pop3_line_too_long - computed: false, optional: true, required: false
  private _pop3LineTooLong?: number; 
  public get pop3LineTooLong() {
    return this.getNumberAttribute('pop3_line_too_long');
  }
  public set pop3LineTooLong(value: number) {
    this._pop3LineTooLong = value;
  }
  public resetPop3LineTooLong() {
    this._pop3LineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3LineTooLongInput() {
    return this._pop3LineTooLong;
  }

  // request_line_freed - computed: false, optional: true, required: false
  private _requestLineFreed?: number; 
  public get requestLineFreed() {
    return this.getNumberAttribute('request_line_freed');
  }
  public set requestLineFreed(value: number) {
    this._requestLineFreed = value;
  }
  public resetRequestLineFreed() {
    this._requestLineFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLineFreedInput() {
    return this._requestLineFreed;
  }

  // serv_ctng_state_err - computed: false, optional: true, required: false
  private _servCtngStateErr?: number; 
  public get servCtngStateErr() {
    return this.getNumberAttribute('serv_ctng_state_err');
  }
  public set servCtngStateErr(value: number) {
    this._servCtngStateErr = value;
  }
  public resetServCtngStateErr() {
    this._servCtngStateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servCtngStateErrInput() {
    return this._servCtngStateErr;
  }

  // serv_resp_state_err - computed: false, optional: true, required: false
  private _servRespStateErr?: number; 
  public get servRespStateErr() {
    return this.getNumberAttribute('serv_resp_state_err');
  }
  public set servRespStateErr(value: number) {
    this._servRespStateErr = value;
  }
  public resetServRespStateErr() {
    this._servRespStateErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servRespStateErrInput() {
    return this._servRespStateErr;
  }

  // serv_sel_ins_tpl_fail - computed: false, optional: true, required: false
  private _servSelInsTplFail?: number; 
  public get servSelInsTplFail() {
    return this.getNumberAttribute('serv_sel_ins_tpl_fail');
  }
  public set servSelInsTplFail(value: number) {
    this._servSelInsTplFail = value;
  }
  public resetServSelInsTplFail() {
    this._servSelInsTplFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelInsTplFailInput() {
    return this._servSelInsTplFail;
  }

  // serv_sel_persist_fail - computed: false, optional: true, required: false
  private _servSelPersistFail?: number; 
  public get servSelPersistFail() {
    return this.getNumberAttribute('serv_sel_persist_fail');
  }
  public set servSelPersistFail(value: number) {
    this._servSelPersistFail = value;
  }
  public resetServSelPersistFail() {
    this._servSelPersistFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelPersistFailInput() {
    return this._servSelPersistFail;
  }

  // serv_sel_smpv4_fail - computed: false, optional: true, required: false
  private _servSelSmpv4Fail?: number; 
  public get servSelSmpv4Fail() {
    return this.getNumberAttribute('serv_sel_smpv4_fail');
  }
  public set servSelSmpv4Fail(value: number) {
    this._servSelSmpv4Fail = value;
  }
  public resetServSelSmpv4Fail() {
    this._servSelSmpv4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelSmpv4FailInput() {
    return this._servSelSmpv4Fail;
  }

  // serv_sel_smpv6_fail - computed: false, optional: true, required: false
  private _servSelSmpv6Fail?: number; 
  public get servSelSmpv6Fail() {
    return this.getNumberAttribute('serv_sel_smpv6_fail');
  }
  public set servSelSmpv6Fail(value: number) {
    this._servSelSmpv6Fail = value;
  }
  public resetServSelSmpv6Fail() {
    this._servSelSmpv6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelSmpv6FailInput() {
    return this._servSelSmpv6Fail;
  }

  // server_selection_failure - computed: false, optional: true, required: false
  private _serverSelectionFailure?: number; 
  public get serverSelectionFailure() {
    return this.getNumberAttribute('server_selection_failure');
  }
  public set serverSelectionFailure(value: number) {
    this._serverSelectionFailure = value;
  }
  public resetServerSelectionFailure() {
    this._serverSelectionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailureInput() {
    return this._serverSelectionFailure;
  }

  // source_nat_failure - computed: false, optional: true, required: false
  private _sourceNatFailure?: number; 
  public get sourceNatFailure() {
    return this.getNumberAttribute('source_nat_failure');
  }
  public set sourceNatFailure(value: number) {
    this._sourceNatFailure = value;
  }
  public resetSourceNatFailure() {
    this._sourceNatFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatFailureInput() {
    return this._sourceNatFailure;
  }

  // stls_packet - computed: false, optional: true, required: false
  private _stlsPacket?: number; 
  public get stlsPacket() {
    return this.getNumberAttribute('stls_packet');
  }
  public set stlsPacket(value: number) {
    this._stlsPacket = value;
  }
  public resetStlsPacket() {
    this._stlsPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stlsPacketInput() {
    return this._stlsPacket;
  }

  // total_pop3_request - computed: false, optional: true, required: false
  private _totalPop3Request?: number; 
  public get totalPop3Request() {
    return this.getNumberAttribute('total_pop3_request');
  }
  public set totalPop3Request(value: number) {
    this._totalPop3Request = value;
  }
  public resetTotalPop3Request() {
    this._totalPop3Request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPop3RequestInput() {
    return this._totalPop3Request;
  }

  // total_proxy_conns - computed: false, optional: true, required: false
  private _totalProxyConns?: number; 
  public get totalProxyConns() {
    return this.getNumberAttribute('total_proxy_conns');
  }
  public set totalProxyConns(value: number) {
    this._totalProxyConns = value;
  }
  public resetTotalProxyConns() {
    this._totalProxyConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyConnsInput() {
    return this._totalProxyConns;
  }
}

export class DataThunderSlbPop3ProxyOperOperL4CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbPop3ProxyOperOperL4CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbPop3ProxyOperOperL4CpuListStructOutputReference {
    return new DataThunderSlbPop3ProxyOperOperL4CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbPop3ProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#cpu_count DataThunderSlbPop3ProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * l4_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#l4_cpu_list DataThunderSlbPop3ProxyOper#l4_cpu_list}
  */
  readonly l4CpuList?: DataThunderSlbPop3ProxyOperOperL4CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbPop3ProxyOperOperToTerraform(struct?: DataThunderSlbPop3ProxyOperOperOutputReference | DataThunderSlbPop3ProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    l4_cpu_list: cdktf.listMapper(dataThunderSlbPop3ProxyOperOperL4CpuListStructToTerraform, true)(struct!.l4CpuList),
  }
}


export function dataThunderSlbPop3ProxyOperOperToHclTerraform(struct?: DataThunderSlbPop3ProxyOperOperOutputReference | DataThunderSlbPop3ProxyOperOper): any {
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
    l4_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbPop3ProxyOperOperL4CpuListStructToHclTerraform, true)(struct!.l4CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbPop3ProxyOperOperL4CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPop3ProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPop3ProxyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._l4CpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpuList = this._l4CpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPop3ProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._l4CpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._l4CpuList.internalValue = value.l4CpuList;
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

  // l4_cpu_list - computed: false, optional: true, required: false
  private _l4CpuList = new DataThunderSlbPop3ProxyOperOperL4CpuListStructList(this, "l4_cpu_list", false);
  public get l4CpuList() {
    return this._l4CpuList;
  }
  public putL4CpuList(value: DataThunderSlbPop3ProxyOperOperL4CpuListStruct[] | cdktf.IResolvable) {
    this._l4CpuList.internalValue = value;
  }
  public resetL4CpuList() {
    this._l4CpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpuListInput() {
    return this._l4CpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper thunder_slb_pop3_proxy_oper}
*/
export class DataThunderSlbPop3ProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_pop3_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPop3ProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPop3ProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbPop3ProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPop3ProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_pop3_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_pop3_proxy_oper thunder_slb_pop3_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPop3ProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPop3ProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_pop3_proxy_oper',
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
  private _oper = new DataThunderSlbPop3ProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbPop3ProxyOperOper) {
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
      oper: dataThunderSlbPop3ProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbPop3ProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPop3ProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
