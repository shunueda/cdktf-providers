// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPop3ProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#id DataThunderSlbPop3ProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#stats DataThunderSlbPop3ProxyStats#stats}
  */
  readonly stats?: DataThunderSlbPop3ProxyStatsStats;
}
export interface DataThunderSlbPop3ProxyStatsStats {
  /**
  * Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#bad_sequence DataThunderSlbPop3ProxyStats#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#cl_est_err DataThunderSlbPop3ProxyStats#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#cl_request_err DataThunderSlbPop3ProxyStats#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Control chn ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#control_to_ssl DataThunderSlbPop3ProxyStats#control_to_ssl}
  */
  readonly controlToSsl?: number;
  /**
  * Current proxy conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#curr DataThunderSlbPop3ProxyStats#curr}
  */
  readonly curr?: number;
  /**
  * Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#insert_tuple_fail DataThunderSlbPop3ProxyStats#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#invalid_start_line DataThunderSlbPop3ProxyStats#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * request line freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#line_mem_freed DataThunderSlbPop3ProxyStats#line_mem_freed}
  */
  readonly lineMemFreed?: number;
  /**
  * line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#line_too_long DataThunderSlbPop3ProxyStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#no_route DataThunderSlbPop3ProxyStats#no_route}
  */
  readonly noRoute?: number;
  /**
  * Num
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#num DataThunderSlbPop3ProxyStats#num}
  */
  readonly num?: number;
  /**
  * Total POP3 Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#request DataThunderSlbPop3ProxyStats#request}
  */
  readonly request?: number;
  /**
  * other cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#request_dont_care DataThunderSlbPop3ProxyStats#request_dont_care}
  */
  readonly requestDontCare?: number;
  /**
  * Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#rsv_persist_conn_fail DataThunderSlbPop3ProxyStats#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#ser_connecting_err DataThunderSlbPop3ProxyStats#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#server_response_err DataThunderSlbPop3ProxyStats#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#smp_v4_fail DataThunderSlbPop3ProxyStats#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#smp_v6_fail DataThunderSlbPop3ProxyStats#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#snat_fail DataThunderSlbPop3ProxyStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * stls cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#stls DataThunderSlbPop3ProxyStats#stls}
  */
  readonly stls?: number;
  /**
  * Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#svrsel_fail DataThunderSlbPop3ProxyStats#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Total proxy conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#total DataThunderSlbPop3ProxyStats#total}
  */
  readonly total?: number;
  /**
  * Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#unsupported_command DataThunderSlbPop3ProxyStats#unsupported_command}
  */
  readonly unsupportedCommand?: number;
}

export function dataThunderSlbPop3ProxyStatsStatsToTerraform(struct?: DataThunderSlbPop3ProxyStatsStatsOutputReference | DataThunderSlbPop3ProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    control_to_ssl: cdktf.numberToTerraform(struct!.controlToSsl),
    curr: cdktf.numberToTerraform(struct!.curr),
    insert_tuple_fail: cdktf.numberToTerraform(struct!.insertTupleFail),
    invalid_start_line: cdktf.numberToTerraform(struct!.invalidStartLine),
    line_mem_freed: cdktf.numberToTerraform(struct!.lineMemFreed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    num: cdktf.numberToTerraform(struct!.num),
    request: cdktf.numberToTerraform(struct!.request),
    request_dont_care: cdktf.numberToTerraform(struct!.requestDontCare),
    rsv_persist_conn_fail: cdktf.numberToTerraform(struct!.rsvPersistConnFail),
    ser_connecting_err: cdktf.numberToTerraform(struct!.serConnectingErr),
    server_response_err: cdktf.numberToTerraform(struct!.serverResponseErr),
    smp_v4_fail: cdktf.numberToTerraform(struct!.smpV4Fail),
    smp_v6_fail: cdktf.numberToTerraform(struct!.smpV6Fail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    stls: cdktf.numberToTerraform(struct!.stls),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    total: cdktf.numberToTerraform(struct!.total),
    unsupported_command: cdktf.numberToTerraform(struct!.unsupportedCommand),
  }
}


export function dataThunderSlbPop3ProxyStatsStatsToHclTerraform(struct?: DataThunderSlbPop3ProxyStatsStatsOutputReference | DataThunderSlbPop3ProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_sequence: {
      value: cdktf.numberToHclTerraform(struct!.badSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_est_err: {
      value: cdktf.numberToHclTerraform(struct!.clEstErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_request_err: {
      value: cdktf.numberToHclTerraform(struct!.clRequestErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_to_ssl: {
      value: cdktf.numberToHclTerraform(struct!.controlToSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr: {
      value: cdktf.numberToHclTerraform(struct!.curr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_tuple_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertTupleFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_start_line: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_freed: {
      value: cdktf.numberToHclTerraform(struct!.lineMemFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_dont_care: {
      value: cdktf.numberToHclTerraform(struct!.requestDontCare),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsv_persist_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.rsvPersistConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ser_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.serConnectingErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_response_err: {
      value: cdktf.numberToHclTerraform(struct!.serverResponseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v4_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV4Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v6_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV6Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stls: {
      value: cdktf.numberToHclTerraform(struct!.stls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_command: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPop3ProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPop3ProxyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._controlToSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlToSsl = this._controlToSsl;
    }
    if (this._curr !== undefined) {
      hasAnyValues = true;
      internalValueResult.curr = this._curr;
    }
    if (this._insertTupleFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertTupleFail = this._insertTupleFail;
    }
    if (this._invalidStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLine = this._invalidStartLine;
    }
    if (this._lineMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemFreed = this._lineMemFreed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestDontCare !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDontCare = this._requestDontCare;
    }
    if (this._rsvPersistConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsvPersistConnFail = this._rsvPersistConnFail;
    }
    if (this._serConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serConnectingErr = this._serConnectingErr;
    }
    if (this._serverResponseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseErr = this._serverResponseErr;
    }
    if (this._smpV4Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV4Fail = this._smpV4Fail;
    }
    if (this._smpV6Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV6Fail = this._smpV6Fail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._stls !== undefined) {
      hasAnyValues = true;
      internalValueResult.stls = this._stls;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._unsupportedCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCommand = this._unsupportedCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPop3ProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badSequence = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._controlToSsl = undefined;
      this._curr = undefined;
      this._insertTupleFail = undefined;
      this._invalidStartLine = undefined;
      this._lineMemFreed = undefined;
      this._lineTooLong = undefined;
      this._noRoute = undefined;
      this._num = undefined;
      this._request = undefined;
      this._requestDontCare = undefined;
      this._rsvPersistConnFail = undefined;
      this._serConnectingErr = undefined;
      this._serverResponseErr = undefined;
      this._smpV4Fail = undefined;
      this._smpV6Fail = undefined;
      this._snatFail = undefined;
      this._stls = undefined;
      this._svrselFail = undefined;
      this._total = undefined;
      this._unsupportedCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badSequence = value.badSequence;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._controlToSsl = value.controlToSsl;
      this._curr = value.curr;
      this._insertTupleFail = value.insertTupleFail;
      this._invalidStartLine = value.invalidStartLine;
      this._lineMemFreed = value.lineMemFreed;
      this._lineTooLong = value.lineTooLong;
      this._noRoute = value.noRoute;
      this._num = value.num;
      this._request = value.request;
      this._requestDontCare = value.requestDontCare;
      this._rsvPersistConnFail = value.rsvPersistConnFail;
      this._serConnectingErr = value.serConnectingErr;
      this._serverResponseErr = value.serverResponseErr;
      this._smpV4Fail = value.smpV4Fail;
      this._smpV6Fail = value.smpV6Fail;
      this._snatFail = value.snatFail;
      this._stls = value.stls;
      this._svrselFail = value.svrselFail;
      this._total = value.total;
      this._unsupportedCommand = value.unsupportedCommand;
    }
  }

  // bad_sequence - computed: false, optional: true, required: false
  private _badSequence?: number; 
  public get badSequence() {
    return this.getNumberAttribute('bad_sequence');
  }
  public set badSequence(value: number) {
    this._badSequence = value;
  }
  public resetBadSequence() {
    this._badSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSequenceInput() {
    return this._badSequence;
  }

  // cl_est_err - computed: false, optional: true, required: false
  private _clEstErr?: number; 
  public get clEstErr() {
    return this.getNumberAttribute('cl_est_err');
  }
  public set clEstErr(value: number) {
    this._clEstErr = value;
  }
  public resetClEstErr() {
    this._clEstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clEstErrInput() {
    return this._clEstErr;
  }

  // cl_request_err - computed: false, optional: true, required: false
  private _clRequestErr?: number; 
  public get clRequestErr() {
    return this.getNumberAttribute('cl_request_err');
  }
  public set clRequestErr(value: number) {
    this._clRequestErr = value;
  }
  public resetClRequestErr() {
    this._clRequestErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clRequestErrInput() {
    return this._clRequestErr;
  }

  // control_to_ssl - computed: false, optional: true, required: false
  private _controlToSsl?: number; 
  public get controlToSsl() {
    return this.getNumberAttribute('control_to_ssl');
  }
  public set controlToSsl(value: number) {
    this._controlToSsl = value;
  }
  public resetControlToSsl() {
    this._controlToSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlToSslInput() {
    return this._controlToSsl;
  }

  // curr - computed: false, optional: true, required: false
  private _curr?: number; 
  public get curr() {
    return this.getNumberAttribute('curr');
  }
  public set curr(value: number) {
    this._curr = value;
  }
  public resetCurr() {
    this._curr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currInput() {
    return this._curr;
  }

  // insert_tuple_fail - computed: false, optional: true, required: false
  private _insertTupleFail?: number; 
  public get insertTupleFail() {
    return this.getNumberAttribute('insert_tuple_fail');
  }
  public set insertTupleFail(value: number) {
    this._insertTupleFail = value;
  }
  public resetInsertTupleFail() {
    this._insertTupleFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTupleFailInput() {
    return this._insertTupleFail;
  }

  // invalid_start_line - computed: false, optional: true, required: false
  private _invalidStartLine?: number; 
  public get invalidStartLine() {
    return this.getNumberAttribute('invalid_start_line');
  }
  public set invalidStartLine(value: number) {
    this._invalidStartLine = value;
  }
  public resetInvalidStartLine() {
    this._invalidStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineInput() {
    return this._invalidStartLine;
  }

  // line_mem_freed - computed: false, optional: true, required: false
  private _lineMemFreed?: number; 
  public get lineMemFreed() {
    return this.getNumberAttribute('line_mem_freed');
  }
  public set lineMemFreed(value: number) {
    this._lineMemFreed = value;
  }
  public resetLineMemFreed() {
    this._lineMemFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemFreedInput() {
    return this._lineMemFreed;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // request_dont_care - computed: false, optional: true, required: false
  private _requestDontCare?: number; 
  public get requestDontCare() {
    return this.getNumberAttribute('request_dont_care');
  }
  public set requestDontCare(value: number) {
    this._requestDontCare = value;
  }
  public resetRequestDontCare() {
    this._requestDontCare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDontCareInput() {
    return this._requestDontCare;
  }

  // rsv_persist_conn_fail - computed: false, optional: true, required: false
  private _rsvPersistConnFail?: number; 
  public get rsvPersistConnFail() {
    return this.getNumberAttribute('rsv_persist_conn_fail');
  }
  public set rsvPersistConnFail(value: number) {
    this._rsvPersistConnFail = value;
  }
  public resetRsvPersistConnFail() {
    this._rsvPersistConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsvPersistConnFailInput() {
    return this._rsvPersistConnFail;
  }

  // ser_connecting_err - computed: false, optional: true, required: false
  private _serConnectingErr?: number; 
  public get serConnectingErr() {
    return this.getNumberAttribute('ser_connecting_err');
  }
  public set serConnectingErr(value: number) {
    this._serConnectingErr = value;
  }
  public resetSerConnectingErr() {
    this._serConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serConnectingErrInput() {
    return this._serConnectingErr;
  }

  // server_response_err - computed: false, optional: true, required: false
  private _serverResponseErr?: number; 
  public get serverResponseErr() {
    return this.getNumberAttribute('server_response_err');
  }
  public set serverResponseErr(value: number) {
    this._serverResponseErr = value;
  }
  public resetServerResponseErr() {
    this._serverResponseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseErrInput() {
    return this._serverResponseErr;
  }

  // smp_v4_fail - computed: false, optional: true, required: false
  private _smpV4Fail?: number; 
  public get smpV4Fail() {
    return this.getNumberAttribute('smp_v4_fail');
  }
  public set smpV4Fail(value: number) {
    this._smpV4Fail = value;
  }
  public resetSmpV4Fail() {
    this._smpV4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV4FailInput() {
    return this._smpV4Fail;
  }

  // smp_v6_fail - computed: false, optional: true, required: false
  private _smpV6Fail?: number; 
  public get smpV6Fail() {
    return this.getNumberAttribute('smp_v6_fail');
  }
  public set smpV6Fail(value: number) {
    this._smpV6Fail = value;
  }
  public resetSmpV6Fail() {
    this._smpV6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV6FailInput() {
    return this._smpV6Fail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // stls - computed: false, optional: true, required: false
  private _stls?: number; 
  public get stls() {
    return this.getNumberAttribute('stls');
  }
  public set stls(value: number) {
    this._stls = value;
  }
  public resetStls() {
    this._stls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stlsInput() {
    return this._stls;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // unsupported_command - computed: false, optional: true, required: false
  private _unsupportedCommand?: number; 
  public get unsupportedCommand() {
    return this.getNumberAttribute('unsupported_command');
  }
  public set unsupportedCommand(value: number) {
    this._unsupportedCommand = value;
  }
  public resetUnsupportedCommand() {
    this._unsupportedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCommandInput() {
    return this._unsupportedCommand;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats thunder_slb_pop3_proxy_stats}
*/
export class DataThunderSlbPop3ProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_pop3_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPop3ProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPop3ProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbPop3ProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPop3ProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_pop3_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_pop3_proxy_stats thunder_slb_pop3_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPop3ProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPop3ProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_pop3_proxy_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbPop3ProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbPop3ProxyStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbPop3ProxyStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbPop3ProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPop3ProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
