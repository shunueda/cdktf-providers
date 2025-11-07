// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbL7SessionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#id DataThunderSlbL7SessionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#stats DataThunderSlbL7SessionStats#stats}
  */
  readonly stats?: DataThunderSlbL7SessionStatsStats;
}
export interface DataThunderSlbL7SessionStatsStats {
  /**
  * FIN from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#client_fin DataThunderSlbL7SessionStats#client_fin}
  */
  readonly clientFin?: number;
  /**
  * RST from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#client_rst DataThunderSlbL7SessionStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Conn does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#conn_not_exist DataThunderSlbL7SessionStats#conn_not_exist}
  */
  readonly connNotExist?: number;
  /**
  * Curr proxy conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#curr_proxy DataThunderSlbL7SessionStats#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Data event callback fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#data_cb_failed DataThunderSlbL7SessionStats#data_cb_failed}
  */
  readonly dataCbFailed?: number;
  /**
  * Data event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#data_event DataThunderSlbL7SessionStats#data_event}
  */
  readonly dataEvent?: number;
  /**
  * Err event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#err_cb_failed DataThunderSlbL7SessionStats#err_cb_failed}
  */
  readonly errCbFailed?: number;
  /**
  * Err event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#err_event DataThunderSlbL7SessionStats#err_event}
  */
  readonly errEvent?: number;
  /**
  * Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#hps_fwdreq_fail DataThunderSlbL7SessionStats#hps_fwdreq_fail}
  */
  readonly hpsFwdreqFail?: number;
  /**
  * Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#server_conn_failed DataThunderSlbL7SessionStats#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * FIN from server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#server_fin DataThunderSlbL7SessionStats#server_fin}
  */
  readonly serverFin?: number;
  /**
  * RST from server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#server_rst DataThunderSlbL7SessionStats#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#server_select_fail DataThunderSlbL7SessionStats#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Start Server Conn Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#start_server_conn_succ DataThunderSlbL7SessionStats#start_server_conn_succ}
  */
  readonly startServerConnSucc?: number;
  /**
  * Total proxy conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#total_proxy DataThunderSlbL7SessionStats#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Data event from UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#udp_data_event DataThunderSlbL7SessionStats#udp_data_event}
  */
  readonly udpDataEvent?: number;
  /**
  * Wbuf event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#wbuf_cb_failed DataThunderSlbL7SessionStats#wbuf_cb_failed}
  */
  readonly wbufCbFailed?: number;
  /**
  * Wbuf event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#wbuf_event DataThunderSlbL7SessionStats#wbuf_event}
  */
  readonly wbufEvent?: number;
}

export function dataThunderSlbL7SessionStatsStatsToTerraform(struct?: DataThunderSlbL7SessionStatsStatsOutputReference | DataThunderSlbL7SessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_fin: cdktf.numberToTerraform(struct!.clientFin),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    conn_not_exist: cdktf.numberToTerraform(struct!.connNotExist),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    data_cb_failed: cdktf.numberToTerraform(struct!.dataCbFailed),
    data_event: cdktf.numberToTerraform(struct!.dataEvent),
    err_cb_failed: cdktf.numberToTerraform(struct!.errCbFailed),
    err_event: cdktf.numberToTerraform(struct!.errEvent),
    hps_fwdreq_fail: cdktf.numberToTerraform(struct!.hpsFwdreqFail),
    server_conn_failed: cdktf.numberToTerraform(struct!.serverConnFailed),
    server_fin: cdktf.numberToTerraform(struct!.serverFin),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    start_server_conn_succ: cdktf.numberToTerraform(struct!.startServerConnSucc),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    udp_data_event: cdktf.numberToTerraform(struct!.udpDataEvent),
    wbuf_cb_failed: cdktf.numberToTerraform(struct!.wbufCbFailed),
    wbuf_event: cdktf.numberToTerraform(struct!.wbufEvent),
  }
}


export function dataThunderSlbL7SessionStatsStatsToHclTerraform(struct?: DataThunderSlbL7SessionStatsStatsOutputReference | DataThunderSlbL7SessionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_fin: {
      value: cdktf.numberToHclTerraform(struct!.clientFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_not_exist: {
      value: cdktf.numberToHclTerraform(struct!.connNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.dataCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_event: {
      value: cdktf.numberToHclTerraform(struct!.dataEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.errCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_event: {
      value: cdktf.numberToHclTerraform(struct!.errEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.hpsFwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fin: {
      value: cdktf.numberToHclTerraform(struct!.serverFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_succ: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_data_event: {
      value: cdktf.numberToHclTerraform(struct!.udpDataEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wbuf_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.wbufCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wbuf_event: {
      value: cdktf.numberToHclTerraform(struct!.wbufEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbL7SessionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbL7SessionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFin = this._clientFin;
    }
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._connNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNotExist = this._connNotExist;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._dataCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbFailed = this._dataCbFailed;
    }
    if (this._dataEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEvent = this._dataEvent;
    }
    if (this._errCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errCbFailed = this._errCbFailed;
    }
    if (this._errEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEvent = this._errEvent;
    }
    if (this._hpsFwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsFwdreqFail = this._hpsFwdreqFail;
    }
    if (this._serverConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailed = this._serverConnFailed;
    }
    if (this._serverFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFin = this._serverFin;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._startServerConnSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnSucc = this._startServerConnSucc;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._udpDataEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDataEvent = this._udpDataEvent;
    }
    if (this._wbufCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbufCbFailed = this._wbufCbFailed;
    }
    if (this._wbufEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbufEvent = this._wbufEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbL7SessionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientFin = undefined;
      this._clientRst = undefined;
      this._connNotExist = undefined;
      this._currProxy = undefined;
      this._dataCbFailed = undefined;
      this._dataEvent = undefined;
      this._errCbFailed = undefined;
      this._errEvent = undefined;
      this._hpsFwdreqFail = undefined;
      this._serverConnFailed = undefined;
      this._serverFin = undefined;
      this._serverRst = undefined;
      this._serverSelectFail = undefined;
      this._startServerConnSucc = undefined;
      this._totalProxy = undefined;
      this._udpDataEvent = undefined;
      this._wbufCbFailed = undefined;
      this._wbufEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientFin = value.clientFin;
      this._clientRst = value.clientRst;
      this._connNotExist = value.connNotExist;
      this._currProxy = value.currProxy;
      this._dataCbFailed = value.dataCbFailed;
      this._dataEvent = value.dataEvent;
      this._errCbFailed = value.errCbFailed;
      this._errEvent = value.errEvent;
      this._hpsFwdreqFail = value.hpsFwdreqFail;
      this._serverConnFailed = value.serverConnFailed;
      this._serverFin = value.serverFin;
      this._serverRst = value.serverRst;
      this._serverSelectFail = value.serverSelectFail;
      this._startServerConnSucc = value.startServerConnSucc;
      this._totalProxy = value.totalProxy;
      this._udpDataEvent = value.udpDataEvent;
      this._wbufCbFailed = value.wbufCbFailed;
      this._wbufEvent = value.wbufEvent;
    }
  }

  // client_fin - computed: false, optional: true, required: false
  private _clientFin?: number; 
  public get clientFin() {
    return this.getNumberAttribute('client_fin');
  }
  public set clientFin(value: number) {
    this._clientFin = value;
  }
  public resetClientFin() {
    this._clientFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFinInput() {
    return this._clientFin;
  }

  // client_rst - computed: false, optional: true, required: false
  private _clientRst?: number; 
  public get clientRst() {
    return this.getNumberAttribute('client_rst');
  }
  public set clientRst(value: number) {
    this._clientRst = value;
  }
  public resetClientRst() {
    this._clientRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstInput() {
    return this._clientRst;
  }

  // conn_not_exist - computed: false, optional: true, required: false
  private _connNotExist?: number; 
  public get connNotExist() {
    return this.getNumberAttribute('conn_not_exist');
  }
  public set connNotExist(value: number) {
    this._connNotExist = value;
  }
  public resetConnNotExist() {
    this._connNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNotExistInput() {
    return this._connNotExist;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // data_cb_failed - computed: false, optional: true, required: false
  private _dataCbFailed?: number; 
  public get dataCbFailed() {
    return this.getNumberAttribute('data_cb_failed');
  }
  public set dataCbFailed(value: number) {
    this._dataCbFailed = value;
  }
  public resetDataCbFailed() {
    this._dataCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCbFailedInput() {
    return this._dataCbFailed;
  }

  // data_event - computed: false, optional: true, required: false
  private _dataEvent?: number; 
  public get dataEvent() {
    return this.getNumberAttribute('data_event');
  }
  public set dataEvent(value: number) {
    this._dataEvent = value;
  }
  public resetDataEvent() {
    this._dataEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEventInput() {
    return this._dataEvent;
  }

  // err_cb_failed - computed: false, optional: true, required: false
  private _errCbFailed?: number; 
  public get errCbFailed() {
    return this.getNumberAttribute('err_cb_failed');
  }
  public set errCbFailed(value: number) {
    this._errCbFailed = value;
  }
  public resetErrCbFailed() {
    this._errCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errCbFailedInput() {
    return this._errCbFailed;
  }

  // err_event - computed: false, optional: true, required: false
  private _errEvent?: number; 
  public get errEvent() {
    return this.getNumberAttribute('err_event');
  }
  public set errEvent(value: number) {
    this._errEvent = value;
  }
  public resetErrEvent() {
    this._errEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEventInput() {
    return this._errEvent;
  }

  // hps_fwdreq_fail - computed: false, optional: true, required: false
  private _hpsFwdreqFail?: number; 
  public get hpsFwdreqFail() {
    return this.getNumberAttribute('hps_fwdreq_fail');
  }
  public set hpsFwdreqFail(value: number) {
    this._hpsFwdreqFail = value;
  }
  public resetHpsFwdreqFail() {
    this._hpsFwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsFwdreqFailInput() {
    return this._hpsFwdreqFail;
  }

  // server_conn_failed - computed: false, optional: true, required: false
  private _serverConnFailed?: number; 
  public get serverConnFailed() {
    return this.getNumberAttribute('server_conn_failed');
  }
  public set serverConnFailed(value: number) {
    this._serverConnFailed = value;
  }
  public resetServerConnFailed() {
    this._serverConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailedInput() {
    return this._serverConnFailed;
  }

  // server_fin - computed: false, optional: true, required: false
  private _serverFin?: number; 
  public get serverFin() {
    return this.getNumberAttribute('server_fin');
  }
  public set serverFin(value: number) {
    this._serverFin = value;
  }
  public resetServerFin() {
    this._serverFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFinInput() {
    return this._serverFin;
  }

  // server_rst - computed: false, optional: true, required: false
  private _serverRst?: number; 
  public get serverRst() {
    return this.getNumberAttribute('server_rst');
  }
  public set serverRst(value: number) {
    this._serverRst = value;
  }
  public resetServerRst() {
    this._serverRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstInput() {
    return this._serverRst;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // start_server_conn_succ - computed: false, optional: true, required: false
  private _startServerConnSucc?: number; 
  public get startServerConnSucc() {
    return this.getNumberAttribute('start_server_conn_succ');
  }
  public set startServerConnSucc(value: number) {
    this._startServerConnSucc = value;
  }
  public resetStartServerConnSucc() {
    this._startServerConnSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnSuccInput() {
    return this._startServerConnSucc;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }

  // udp_data_event - computed: false, optional: true, required: false
  private _udpDataEvent?: number; 
  public get udpDataEvent() {
    return this.getNumberAttribute('udp_data_event');
  }
  public set udpDataEvent(value: number) {
    this._udpDataEvent = value;
  }
  public resetUdpDataEvent() {
    this._udpDataEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDataEventInput() {
    return this._udpDataEvent;
  }

  // wbuf_cb_failed - computed: false, optional: true, required: false
  private _wbufCbFailed?: number; 
  public get wbufCbFailed() {
    return this.getNumberAttribute('wbuf_cb_failed');
  }
  public set wbufCbFailed(value: number) {
    this._wbufCbFailed = value;
  }
  public resetWbufCbFailed() {
    this._wbufCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbufCbFailedInput() {
    return this._wbufCbFailed;
  }

  // wbuf_event - computed: false, optional: true, required: false
  private _wbufEvent?: number; 
  public get wbufEvent() {
    return this.getNumberAttribute('wbuf_event');
  }
  public set wbufEvent(value: number) {
    this._wbufEvent = value;
  }
  public resetWbufEvent() {
    this._wbufEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbufEventInput() {
    return this._wbufEvent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats thunder_slb_l7session_stats}
*/
export class DataThunderSlbL7SessionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_l7session_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbL7SessionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbL7SessionStats to import
  * @param importFromId The id of the existing DataThunderSlbL7SessionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbL7SessionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_l7session_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l7session_stats thunder_slb_l7session_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbL7SessionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbL7SessionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_l7session_stats',
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
  private _stats = new DataThunderSlbL7SessionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbL7SessionStatsStats) {
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
      stats: dataThunderSlbL7SessionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbL7SessionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbL7SessionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
