// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbImapProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#id DataThunderSlbImapProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#oper DataThunderSlbImapProxyOper#oper}
  */
  readonly oper?: DataThunderSlbImapProxyOperOper;
}
export interface DataThunderSlbImapProxyOperOperImapProxyCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#alloc_error DataThunderSlbImapProxyOper#alloc_error}
  */
  readonly allocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#bad_seq DataThunderSlbImapProxyOper#bad_seq}
  */
  readonly badSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#boundary_error DataThunderSlbImapProxyOper#boundary_error}
  */
  readonly boundaryError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#capability_packet DataThunderSlbImapProxyOper#capability_packet}
  */
  readonly capabilityPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#client_est_state_err DataThunderSlbImapProxyOper#client_est_state_err}
  */
  readonly clientEstStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#client_rq_state_err DataThunderSlbImapProxyOper#client_rq_state_err}
  */
  readonly clientRqStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#control_chn_ssl DataThunderSlbImapProxyOper#control_chn_ssl}
  */
  readonly controlChnSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#current_proxy_conns DataThunderSlbImapProxyOper#current_proxy_conns}
  */
  readonly currentProxyConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#imap_line_too_long DataThunderSlbImapProxyOper#imap_line_too_long}
  */
  readonly imapLineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#inv_start_line DataThunderSlbImapProxyOper#inv_start_line}
  */
  readonly invStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#login_packet DataThunderSlbImapProxyOper#login_packet}
  */
  readonly loginPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#negative_error DataThunderSlbImapProxyOper#negative_error}
  */
  readonly negativeError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#no_route_failure DataThunderSlbImapProxyOper#no_route_failure}
  */
  readonly noRouteFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#other_cmd DataThunderSlbImapProxyOper#other_cmd}
  */
  readonly otherCmd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#realloc_error DataThunderSlbImapProxyOper#realloc_error}
  */
  readonly reallocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#request_line_freed DataThunderSlbImapProxyOper#request_line_freed}
  */
  readonly requestLineFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_ctng_state_err DataThunderSlbImapProxyOper#serv_ctng_state_err}
  */
  readonly servCtngStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_resp_state_err DataThunderSlbImapProxyOper#serv_resp_state_err}
  */
  readonly servRespStateErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_sel_ins_tpl_fail DataThunderSlbImapProxyOper#serv_sel_ins_tpl_fail}
  */
  readonly servSelInsTplFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_sel_persist_fail DataThunderSlbImapProxyOper#serv_sel_persist_fail}
  */
  readonly servSelPersistFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_sel_smpv4_fail DataThunderSlbImapProxyOper#serv_sel_smpv4_fail}
  */
  readonly servSelSmpv4Fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#serv_sel_smpv6_fail DataThunderSlbImapProxyOper#serv_sel_smpv6_fail}
  */
  readonly servSelSmpv6Fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#server_selection_failure DataThunderSlbImapProxyOper#server_selection_failure}
  */
  readonly serverSelectionFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#source_nat_failure DataThunderSlbImapProxyOper#source_nat_failure}
  */
  readonly sourceNatFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#start_tls_cmd DataThunderSlbImapProxyOper#start_tls_cmd}
  */
  readonly startTlsCmd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#total_imap_request DataThunderSlbImapProxyOper#total_imap_request}
  */
  readonly totalImapRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#total_proxy_conns DataThunderSlbImapProxyOper#total_proxy_conns}
  */
  readonly totalProxyConns?: number;
}

export function dataThunderSlbImapProxyOperOperImapProxyCpuListStructToTerraform(struct?: DataThunderSlbImapProxyOperOperImapProxyCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_error: cdktf.numberToTerraform(struct!.allocError),
    bad_seq: cdktf.numberToTerraform(struct!.badSeq),
    boundary_error: cdktf.numberToTerraform(struct!.boundaryError),
    capability_packet: cdktf.numberToTerraform(struct!.capabilityPacket),
    client_est_state_err: cdktf.numberToTerraform(struct!.clientEstStateErr),
    client_rq_state_err: cdktf.numberToTerraform(struct!.clientRqStateErr),
    control_chn_ssl: cdktf.numberToTerraform(struct!.controlChnSsl),
    current_proxy_conns: cdktf.numberToTerraform(struct!.currentProxyConns),
    imap_line_too_long: cdktf.numberToTerraform(struct!.imapLineTooLong),
    inv_start_line: cdktf.numberToTerraform(struct!.invStartLine),
    login_packet: cdktf.numberToTerraform(struct!.loginPacket),
    negative_error: cdktf.numberToTerraform(struct!.negativeError),
    no_route_failure: cdktf.numberToTerraform(struct!.noRouteFailure),
    other_cmd: cdktf.numberToTerraform(struct!.otherCmd),
    realloc_error: cdktf.numberToTerraform(struct!.reallocError),
    request_line_freed: cdktf.numberToTerraform(struct!.requestLineFreed),
    serv_ctng_state_err: cdktf.numberToTerraform(struct!.servCtngStateErr),
    serv_resp_state_err: cdktf.numberToTerraform(struct!.servRespStateErr),
    serv_sel_ins_tpl_fail: cdktf.numberToTerraform(struct!.servSelInsTplFail),
    serv_sel_persist_fail: cdktf.numberToTerraform(struct!.servSelPersistFail),
    serv_sel_smpv4_fail: cdktf.numberToTerraform(struct!.servSelSmpv4Fail),
    serv_sel_smpv6_fail: cdktf.numberToTerraform(struct!.servSelSmpv6Fail),
    server_selection_failure: cdktf.numberToTerraform(struct!.serverSelectionFailure),
    source_nat_failure: cdktf.numberToTerraform(struct!.sourceNatFailure),
    start_tls_cmd: cdktf.numberToTerraform(struct!.startTlsCmd),
    total_imap_request: cdktf.numberToTerraform(struct!.totalImapRequest),
    total_proxy_conns: cdktf.numberToTerraform(struct!.totalProxyConns),
  }
}


export function dataThunderSlbImapProxyOperOperImapProxyCpuListStructToHclTerraform(struct?: DataThunderSlbImapProxyOperOperImapProxyCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.allocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_seq: {
      value: cdktf.numberToHclTerraform(struct!.badSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    boundary_error: {
      value: cdktf.numberToHclTerraform(struct!.boundaryError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capability_packet: {
      value: cdktf.numberToHclTerraform(struct!.capabilityPacket),
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
    imap_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.imapLineTooLong),
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
    login_packet: {
      value: cdktf.numberToHclTerraform(struct!.loginPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_error: {
      value: cdktf.numberToHclTerraform(struct!.negativeError),
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
    realloc_error: {
      value: cdktf.numberToHclTerraform(struct!.reallocError),
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
    start_tls_cmd: {
      value: cdktf.numberToHclTerraform(struct!.startTlsCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_imap_request: {
      value: cdktf.numberToHclTerraform(struct!.totalImapRequest),
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

export class DataThunderSlbImapProxyOperOperImapProxyCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbImapProxyOperOperImapProxyCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocError = this._allocError;
    }
    if (this._badSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSeq = this._badSeq;
    }
    if (this._boundaryError !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundaryError = this._boundaryError;
    }
    if (this._capabilityPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityPacket = this._capabilityPacket;
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
    if (this._imapLineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapLineTooLong = this._imapLineTooLong;
    }
    if (this._invStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invStartLine = this._invStartLine;
    }
    if (this._loginPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPacket = this._loginPacket;
    }
    if (this._negativeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeError = this._negativeError;
    }
    if (this._noRouteFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteFailure = this._noRouteFailure;
    }
    if (this._otherCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherCmd = this._otherCmd;
    }
    if (this._reallocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.reallocError = this._reallocError;
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
    if (this._startTlsCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTlsCmd = this._startTlsCmd;
    }
    if (this._totalImapRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalImapRequest = this._totalImapRequest;
    }
    if (this._totalProxyConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxyConns = this._totalProxyConns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbImapProxyOperOperImapProxyCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocError = undefined;
      this._badSeq = undefined;
      this._boundaryError = undefined;
      this._capabilityPacket = undefined;
      this._clientEstStateErr = undefined;
      this._clientRqStateErr = undefined;
      this._controlChnSsl = undefined;
      this._currentProxyConns = undefined;
      this._imapLineTooLong = undefined;
      this._invStartLine = undefined;
      this._loginPacket = undefined;
      this._negativeError = undefined;
      this._noRouteFailure = undefined;
      this._otherCmd = undefined;
      this._reallocError = undefined;
      this._requestLineFreed = undefined;
      this._servCtngStateErr = undefined;
      this._servRespStateErr = undefined;
      this._servSelInsTplFail = undefined;
      this._servSelPersistFail = undefined;
      this._servSelSmpv4Fail = undefined;
      this._servSelSmpv6Fail = undefined;
      this._serverSelectionFailure = undefined;
      this._sourceNatFailure = undefined;
      this._startTlsCmd = undefined;
      this._totalImapRequest = undefined;
      this._totalProxyConns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocError = value.allocError;
      this._badSeq = value.badSeq;
      this._boundaryError = value.boundaryError;
      this._capabilityPacket = value.capabilityPacket;
      this._clientEstStateErr = value.clientEstStateErr;
      this._clientRqStateErr = value.clientRqStateErr;
      this._controlChnSsl = value.controlChnSsl;
      this._currentProxyConns = value.currentProxyConns;
      this._imapLineTooLong = value.imapLineTooLong;
      this._invStartLine = value.invStartLine;
      this._loginPacket = value.loginPacket;
      this._negativeError = value.negativeError;
      this._noRouteFailure = value.noRouteFailure;
      this._otherCmd = value.otherCmd;
      this._reallocError = value.reallocError;
      this._requestLineFreed = value.requestLineFreed;
      this._servCtngStateErr = value.servCtngStateErr;
      this._servRespStateErr = value.servRespStateErr;
      this._servSelInsTplFail = value.servSelInsTplFail;
      this._servSelPersistFail = value.servSelPersistFail;
      this._servSelSmpv4Fail = value.servSelSmpv4Fail;
      this._servSelSmpv6Fail = value.servSelSmpv6Fail;
      this._serverSelectionFailure = value.serverSelectionFailure;
      this._sourceNatFailure = value.sourceNatFailure;
      this._startTlsCmd = value.startTlsCmd;
      this._totalImapRequest = value.totalImapRequest;
      this._totalProxyConns = value.totalProxyConns;
    }
  }

  // alloc_error - computed: false, optional: true, required: false
  private _allocError?: number; 
  public get allocError() {
    return this.getNumberAttribute('alloc_error');
  }
  public set allocError(value: number) {
    this._allocError = value;
  }
  public resetAllocError() {
    this._allocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocErrorInput() {
    return this._allocError;
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

  // boundary_error - computed: false, optional: true, required: false
  private _boundaryError?: number; 
  public get boundaryError() {
    return this.getNumberAttribute('boundary_error');
  }
  public set boundaryError(value: number) {
    this._boundaryError = value;
  }
  public resetBoundaryError() {
    this._boundaryError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryErrorInput() {
    return this._boundaryError;
  }

  // capability_packet - computed: false, optional: true, required: false
  private _capabilityPacket?: number; 
  public get capabilityPacket() {
    return this.getNumberAttribute('capability_packet');
  }
  public set capabilityPacket(value: number) {
    this._capabilityPacket = value;
  }
  public resetCapabilityPacket() {
    this._capabilityPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityPacketInput() {
    return this._capabilityPacket;
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

  // imap_line_too_long - computed: false, optional: true, required: false
  private _imapLineTooLong?: number; 
  public get imapLineTooLong() {
    return this.getNumberAttribute('imap_line_too_long');
  }
  public set imapLineTooLong(value: number) {
    this._imapLineTooLong = value;
  }
  public resetImapLineTooLong() {
    this._imapLineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapLineTooLongInput() {
    return this._imapLineTooLong;
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

  // login_packet - computed: false, optional: true, required: false
  private _loginPacket?: number; 
  public get loginPacket() {
    return this.getNumberAttribute('login_packet');
  }
  public set loginPacket(value: number) {
    this._loginPacket = value;
  }
  public resetLoginPacket() {
    this._loginPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPacketInput() {
    return this._loginPacket;
  }

  // negative_error - computed: false, optional: true, required: false
  private _negativeError?: number; 
  public get negativeError() {
    return this.getNumberAttribute('negative_error');
  }
  public set negativeError(value: number) {
    this._negativeError = value;
  }
  public resetNegativeError() {
    this._negativeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeErrorInput() {
    return this._negativeError;
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

  // realloc_error - computed: false, optional: true, required: false
  private _reallocError?: number; 
  public get reallocError() {
    return this.getNumberAttribute('realloc_error');
  }
  public set reallocError(value: number) {
    this._reallocError = value;
  }
  public resetReallocError() {
    this._reallocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reallocErrorInput() {
    return this._reallocError;
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

  // start_tls_cmd - computed: false, optional: true, required: false
  private _startTlsCmd?: number; 
  public get startTlsCmd() {
    return this.getNumberAttribute('start_tls_cmd');
  }
  public set startTlsCmd(value: number) {
    this._startTlsCmd = value;
  }
  public resetStartTlsCmd() {
    this._startTlsCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsCmdInput() {
    return this._startTlsCmd;
  }

  // total_imap_request - computed: false, optional: true, required: false
  private _totalImapRequest?: number; 
  public get totalImapRequest() {
    return this.getNumberAttribute('total_imap_request');
  }
  public set totalImapRequest(value: number) {
    this._totalImapRequest = value;
  }
  public resetTotalImapRequest() {
    this._totalImapRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalImapRequestInput() {
    return this._totalImapRequest;
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

export class DataThunderSlbImapProxyOperOperImapProxyCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbImapProxyOperOperImapProxyCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbImapProxyOperOperImapProxyCpuListStructOutputReference {
    return new DataThunderSlbImapProxyOperOperImapProxyCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbImapProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#cpu_count DataThunderSlbImapProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * imap_proxy_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#imap_proxy_cpu_list DataThunderSlbImapProxyOper#imap_proxy_cpu_list}
  */
  readonly imapProxyCpuList?: DataThunderSlbImapProxyOperOperImapProxyCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbImapProxyOperOperToTerraform(struct?: DataThunderSlbImapProxyOperOperOutputReference | DataThunderSlbImapProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    imap_proxy_cpu_list: cdktf.listMapper(dataThunderSlbImapProxyOperOperImapProxyCpuListStructToTerraform, true)(struct!.imapProxyCpuList),
  }
}


export function dataThunderSlbImapProxyOperOperToHclTerraform(struct?: DataThunderSlbImapProxyOperOperOutputReference | DataThunderSlbImapProxyOperOper): any {
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
    imap_proxy_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbImapProxyOperOperImapProxyCpuListStructToHclTerraform, true)(struct!.imapProxyCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbImapProxyOperOperImapProxyCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbImapProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbImapProxyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._imapProxyCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapProxyCpuList = this._imapProxyCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbImapProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._imapProxyCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._imapProxyCpuList.internalValue = value.imapProxyCpuList;
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

  // imap_proxy_cpu_list - computed: false, optional: true, required: false
  private _imapProxyCpuList = new DataThunderSlbImapProxyOperOperImapProxyCpuListStructList(this, "imap_proxy_cpu_list", false);
  public get imapProxyCpuList() {
    return this._imapProxyCpuList;
  }
  public putImapProxyCpuList(value: DataThunderSlbImapProxyOperOperImapProxyCpuListStruct[] | cdktf.IResolvable) {
    this._imapProxyCpuList.internalValue = value;
  }
  public resetImapProxyCpuList() {
    this._imapProxyCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapProxyCpuListInput() {
    return this._imapProxyCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper thunder_slb_imap_proxy_oper}
*/
export class DataThunderSlbImapProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_imap_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbImapProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbImapProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbImapProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbImapProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_imap_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_imap_proxy_oper thunder_slb_imap_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbImapProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbImapProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_imap_proxy_oper',
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
  private _oper = new DataThunderSlbImapProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbImapProxyOperOper) {
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
      oper: dataThunderSlbImapProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbImapProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbImapProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
