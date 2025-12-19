// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#id DataThunderSlbProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#stats DataThunderSlbProxyStats#stats}
  */
  readonly stats?: DataThunderSlbProxyStatsStats;
}
export interface DataThunderSlbProxyStatsStats {
  /**
  * Client FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#client_fin DataThunderSlbProxyStats#client_fin}
  */
  readonly clientFin?: number;
  /**
  * Client RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#client_rst DataThunderSlbProxyStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Conn not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#conn_not_exist DataThunderSlbProxyStats#conn_not_exist}
  */
  readonly connNotExist?: number;
  /**
  * App DATA callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#data_cb_failed DataThunderSlbProxyStats#data_cb_failed}
  */
  readonly dataCbFailed?: number;
  /**
  * Data received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#data_event DataThunderSlbProxyStats#data_event}
  */
  readonly dataEvent?: number;
  /**
  * App ERR callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#err_cb_failed DataThunderSlbProxyStats#err_cb_failed}
  */
  readonly errCbFailed?: number;
  /**
  * Error occured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#err_event DataThunderSlbProxyStats#err_event}
  */
  readonly errEvent?: number;
  /**
  * App EST callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#est_cb_failed DataThunderSlbProxyStats#est_cb_failed}
  */
  readonly estCbFailed?: number;
  /**
  * Connection established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#est_event DataThunderSlbProxyStats#est_event}
  */
  readonly estEvent?: number;
  /**
  * Event failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#event_failed DataThunderSlbProxyStats#event_failed}
  */
  readonly eventFailed?: number;
  /**
  * Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#line_too_long DataThunderSlbProxyStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * No memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#no_mem DataThunderSlbProxyStats#no_mem}
  */
  readonly noMem?: number;
  /**
  * Queue depth over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#queue_depth_over_limit DataThunderSlbProxyStats#queue_depth_over_limit}
  */
  readonly queueDepthOverLimit?: number;
  /**
  * Server FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#server_fin DataThunderSlbProxyStats#server_fin}
  */
  readonly serverFin?: number;
  /**
  * Server RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#server_rst DataThunderSlbProxyStats#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Service alloc callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#service_alloc_cb DataThunderSlbProxyStats#service_alloc_cb}
  */
  readonly serviceAllocCb?: number;
  /**
  * Service alloc callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#service_alloc_cb_failed DataThunderSlbProxyStats#service_alloc_cb_failed}
  */
  readonly serviceAllocCbFailed?: number;
  /**
  * Service free callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#service_free_cb DataThunderSlbProxyStats#service_free_cb}
  */
  readonly serviceFreeCb?: number;
  /**
  * Service free callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#service_free_cb_failed DataThunderSlbProxyStats#service_free_cb_failed}
  */
  readonly serviceFreeCbFailed?: number;
  /**
  * Start server conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn DataThunderSlbProxyStats#start_server_conn}
  */
  readonly startServerConn?: number;
  /**
  * No memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_fail_mem DataThunderSlbProxyStats#start_server_conn_fail_mem}
  */
  readonly startServerConnFailMem?: number;
  /**
  * Fail Persistence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_fail_persist DataThunderSlbProxyStats#start_server_conn_fail_persist}
  */
  readonly startServerConnFailPersist?: number;
  /**
  * Fail Server issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_fail_server DataThunderSlbProxyStats#start_server_conn_fail_server}
  */
  readonly startServerConnFailServer?: number;
  /**
  * Failed Source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_fail_snat DataThunderSlbProxyStats#start_server_conn_fail_snat}
  */
  readonly startServerConnFailSnat?: number;
  /**
  * Fail Tuple Issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_fail_tuple DataThunderSlbProxyStats#start_server_conn_fail_tuple}
  */
  readonly startServerConnFailTuple?: number;
  /**
  * No route to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_no_route DataThunderSlbProxyStats#start_server_conn_no_route}
  */
  readonly startServerConnNoRoute?: number;
  /**
  * Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#start_server_conn_succ DataThunderSlbProxyStats#start_server_conn_succ}
  */
  readonly startServerConnSucc?: number;
  /**
  * TCP stack event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#tcp_event DataThunderSlbProxyStats#tcp_event}
  */
  readonly tcpEvent?: number;
  /**
  * App WBUF callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#wbuf_cb_failed DataThunderSlbProxyStats#wbuf_cb_failed}
  */
  readonly wbufCbFailed?: number;
  /**
  * Ready to send data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#wbuf_event DataThunderSlbProxyStats#wbuf_event}
  */
  readonly wbufEvent?: number;
}

export function dataThunderSlbProxyStatsStatsToTerraform(struct?: DataThunderSlbProxyStatsStatsOutputReference | DataThunderSlbProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_fin: cdktf.numberToTerraform(struct!.clientFin),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    conn_not_exist: cdktf.numberToTerraform(struct!.connNotExist),
    data_cb_failed: cdktf.numberToTerraform(struct!.dataCbFailed),
    data_event: cdktf.numberToTerraform(struct!.dataEvent),
    err_cb_failed: cdktf.numberToTerraform(struct!.errCbFailed),
    err_event: cdktf.numberToTerraform(struct!.errEvent),
    est_cb_failed: cdktf.numberToTerraform(struct!.estCbFailed),
    est_event: cdktf.numberToTerraform(struct!.estEvent),
    event_failed: cdktf.numberToTerraform(struct!.eventFailed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_mem: cdktf.numberToTerraform(struct!.noMem),
    queue_depth_over_limit: cdktf.numberToTerraform(struct!.queueDepthOverLimit),
    server_fin: cdktf.numberToTerraform(struct!.serverFin),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    service_alloc_cb: cdktf.numberToTerraform(struct!.serviceAllocCb),
    service_alloc_cb_failed: cdktf.numberToTerraform(struct!.serviceAllocCbFailed),
    service_free_cb: cdktf.numberToTerraform(struct!.serviceFreeCb),
    service_free_cb_failed: cdktf.numberToTerraform(struct!.serviceFreeCbFailed),
    start_server_conn: cdktf.numberToTerraform(struct!.startServerConn),
    start_server_conn_fail_mem: cdktf.numberToTerraform(struct!.startServerConnFailMem),
    start_server_conn_fail_persist: cdktf.numberToTerraform(struct!.startServerConnFailPersist),
    start_server_conn_fail_server: cdktf.numberToTerraform(struct!.startServerConnFailServer),
    start_server_conn_fail_snat: cdktf.numberToTerraform(struct!.startServerConnFailSnat),
    start_server_conn_fail_tuple: cdktf.numberToTerraform(struct!.startServerConnFailTuple),
    start_server_conn_no_route: cdktf.numberToTerraform(struct!.startServerConnNoRoute),
    start_server_conn_succ: cdktf.numberToTerraform(struct!.startServerConnSucc),
    tcp_event: cdktf.numberToTerraform(struct!.tcpEvent),
    wbuf_cb_failed: cdktf.numberToTerraform(struct!.wbufCbFailed),
    wbuf_event: cdktf.numberToTerraform(struct!.wbufEvent),
  }
}


export function dataThunderSlbProxyStatsStatsToHclTerraform(struct?: DataThunderSlbProxyStatsStatsOutputReference | DataThunderSlbProxyStatsStats): any {
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
    est_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.estCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    est_event: {
      value: cdktf.numberToHclTerraform(struct!.estEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_failed: {
      value: cdktf.numberToHclTerraform(struct!.eventFailed),
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
    no_mem: {
      value: cdktf.numberToHclTerraform(struct!.noMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_depth_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.queueDepthOverLimit),
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
    service_alloc_cb: {
      value: cdktf.numberToHclTerraform(struct!.serviceAllocCb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_alloc_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.serviceAllocCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_free_cb: {
      value: cdktf.numberToHclTerraform(struct!.serviceFreeCb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_free_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.serviceFreeCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.startServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_fail_mem: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnFailMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_fail_persist: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnFailPersist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_fail_server: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnFailServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_fail_snat: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnFailSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_fail_tuple: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnFailTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_server_conn_no_route: {
      value: cdktf.numberToHclTerraform(struct!.startServerConnNoRoute),
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
    tcp_event: {
      value: cdktf.numberToHclTerraform(struct!.tcpEvent),
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

export class DataThunderSlbProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbProxyStatsStats | undefined {
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
    if (this._estCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.estCbFailed = this._estCbFailed;
    }
    if (this._estEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estEvent = this._estEvent;
    }
    if (this._eventFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFailed = this._eventFailed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMem = this._noMem;
    }
    if (this._queueDepthOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueDepthOverLimit = this._queueDepthOverLimit;
    }
    if (this._serverFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFin = this._serverFin;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._serviceAllocCb !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAllocCb = this._serviceAllocCb;
    }
    if (this._serviceAllocCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAllocCbFailed = this._serviceAllocCbFailed;
    }
    if (this._serviceFreeCb !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceFreeCb = this._serviceFreeCb;
    }
    if (this._serviceFreeCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceFreeCbFailed = this._serviceFreeCbFailed;
    }
    if (this._startServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConn = this._startServerConn;
    }
    if (this._startServerConnFailMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnFailMem = this._startServerConnFailMem;
    }
    if (this._startServerConnFailPersist !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnFailPersist = this._startServerConnFailPersist;
    }
    if (this._startServerConnFailServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnFailServer = this._startServerConnFailServer;
    }
    if (this._startServerConnFailSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnFailSnat = this._startServerConnFailSnat;
    }
    if (this._startServerConnFailTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnFailTuple = this._startServerConnFailTuple;
    }
    if (this._startServerConnNoRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnNoRoute = this._startServerConnNoRoute;
    }
    if (this._startServerConnSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.startServerConnSucc = this._startServerConnSucc;
    }
    if (this._tcpEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEvent = this._tcpEvent;
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

  public set internalValue(value: DataThunderSlbProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientFin = undefined;
      this._clientRst = undefined;
      this._connNotExist = undefined;
      this._dataCbFailed = undefined;
      this._dataEvent = undefined;
      this._errCbFailed = undefined;
      this._errEvent = undefined;
      this._estCbFailed = undefined;
      this._estEvent = undefined;
      this._eventFailed = undefined;
      this._lineTooLong = undefined;
      this._noMem = undefined;
      this._queueDepthOverLimit = undefined;
      this._serverFin = undefined;
      this._serverRst = undefined;
      this._serviceAllocCb = undefined;
      this._serviceAllocCbFailed = undefined;
      this._serviceFreeCb = undefined;
      this._serviceFreeCbFailed = undefined;
      this._startServerConn = undefined;
      this._startServerConnFailMem = undefined;
      this._startServerConnFailPersist = undefined;
      this._startServerConnFailServer = undefined;
      this._startServerConnFailSnat = undefined;
      this._startServerConnFailTuple = undefined;
      this._startServerConnNoRoute = undefined;
      this._startServerConnSucc = undefined;
      this._tcpEvent = undefined;
      this._wbufCbFailed = undefined;
      this._wbufEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientFin = value.clientFin;
      this._clientRst = value.clientRst;
      this._connNotExist = value.connNotExist;
      this._dataCbFailed = value.dataCbFailed;
      this._dataEvent = value.dataEvent;
      this._errCbFailed = value.errCbFailed;
      this._errEvent = value.errEvent;
      this._estCbFailed = value.estCbFailed;
      this._estEvent = value.estEvent;
      this._eventFailed = value.eventFailed;
      this._lineTooLong = value.lineTooLong;
      this._noMem = value.noMem;
      this._queueDepthOverLimit = value.queueDepthOverLimit;
      this._serverFin = value.serverFin;
      this._serverRst = value.serverRst;
      this._serviceAllocCb = value.serviceAllocCb;
      this._serviceAllocCbFailed = value.serviceAllocCbFailed;
      this._serviceFreeCb = value.serviceFreeCb;
      this._serviceFreeCbFailed = value.serviceFreeCbFailed;
      this._startServerConn = value.startServerConn;
      this._startServerConnFailMem = value.startServerConnFailMem;
      this._startServerConnFailPersist = value.startServerConnFailPersist;
      this._startServerConnFailServer = value.startServerConnFailServer;
      this._startServerConnFailSnat = value.startServerConnFailSnat;
      this._startServerConnFailTuple = value.startServerConnFailTuple;
      this._startServerConnNoRoute = value.startServerConnNoRoute;
      this._startServerConnSucc = value.startServerConnSucc;
      this._tcpEvent = value.tcpEvent;
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

  // est_cb_failed - computed: false, optional: true, required: false
  private _estCbFailed?: number; 
  public get estCbFailed() {
    return this.getNumberAttribute('est_cb_failed');
  }
  public set estCbFailed(value: number) {
    this._estCbFailed = value;
  }
  public resetEstCbFailed() {
    this._estCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estCbFailedInput() {
    return this._estCbFailed;
  }

  // est_event - computed: false, optional: true, required: false
  private _estEvent?: number; 
  public get estEvent() {
    return this.getNumberAttribute('est_event');
  }
  public set estEvent(value: number) {
    this._estEvent = value;
  }
  public resetEstEvent() {
    this._estEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estEventInput() {
    return this._estEvent;
  }

  // event_failed - computed: false, optional: true, required: false
  private _eventFailed?: number; 
  public get eventFailed() {
    return this.getNumberAttribute('event_failed');
  }
  public set eventFailed(value: number) {
    this._eventFailed = value;
  }
  public resetEventFailed() {
    this._eventFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFailedInput() {
    return this._eventFailed;
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

  // no_mem - computed: false, optional: true, required: false
  private _noMem?: number; 
  public get noMem() {
    return this.getNumberAttribute('no_mem');
  }
  public set noMem(value: number) {
    this._noMem = value;
  }
  public resetNoMem() {
    this._noMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMemInput() {
    return this._noMem;
  }

  // queue_depth_over_limit - computed: false, optional: true, required: false
  private _queueDepthOverLimit?: number; 
  public get queueDepthOverLimit() {
    return this.getNumberAttribute('queue_depth_over_limit');
  }
  public set queueDepthOverLimit(value: number) {
    this._queueDepthOverLimit = value;
  }
  public resetQueueDepthOverLimit() {
    this._queueDepthOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueDepthOverLimitInput() {
    return this._queueDepthOverLimit;
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

  // service_alloc_cb - computed: false, optional: true, required: false
  private _serviceAllocCb?: number; 
  public get serviceAllocCb() {
    return this.getNumberAttribute('service_alloc_cb');
  }
  public set serviceAllocCb(value: number) {
    this._serviceAllocCb = value;
  }
  public resetServiceAllocCb() {
    this._serviceAllocCb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAllocCbInput() {
    return this._serviceAllocCb;
  }

  // service_alloc_cb_failed - computed: false, optional: true, required: false
  private _serviceAllocCbFailed?: number; 
  public get serviceAllocCbFailed() {
    return this.getNumberAttribute('service_alloc_cb_failed');
  }
  public set serviceAllocCbFailed(value: number) {
    this._serviceAllocCbFailed = value;
  }
  public resetServiceAllocCbFailed() {
    this._serviceAllocCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAllocCbFailedInput() {
    return this._serviceAllocCbFailed;
  }

  // service_free_cb - computed: false, optional: true, required: false
  private _serviceFreeCb?: number; 
  public get serviceFreeCb() {
    return this.getNumberAttribute('service_free_cb');
  }
  public set serviceFreeCb(value: number) {
    this._serviceFreeCb = value;
  }
  public resetServiceFreeCb() {
    this._serviceFreeCb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFreeCbInput() {
    return this._serviceFreeCb;
  }

  // service_free_cb_failed - computed: false, optional: true, required: false
  private _serviceFreeCbFailed?: number; 
  public get serviceFreeCbFailed() {
    return this.getNumberAttribute('service_free_cb_failed');
  }
  public set serviceFreeCbFailed(value: number) {
    this._serviceFreeCbFailed = value;
  }
  public resetServiceFreeCbFailed() {
    this._serviceFreeCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFreeCbFailedInput() {
    return this._serviceFreeCbFailed;
  }

  // start_server_conn - computed: false, optional: true, required: false
  private _startServerConn?: number; 
  public get startServerConn() {
    return this.getNumberAttribute('start_server_conn');
  }
  public set startServerConn(value: number) {
    this._startServerConn = value;
  }
  public resetStartServerConn() {
    this._startServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnInput() {
    return this._startServerConn;
  }

  // start_server_conn_fail_mem - computed: false, optional: true, required: false
  private _startServerConnFailMem?: number; 
  public get startServerConnFailMem() {
    return this.getNumberAttribute('start_server_conn_fail_mem');
  }
  public set startServerConnFailMem(value: number) {
    this._startServerConnFailMem = value;
  }
  public resetStartServerConnFailMem() {
    this._startServerConnFailMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnFailMemInput() {
    return this._startServerConnFailMem;
  }

  // start_server_conn_fail_persist - computed: false, optional: true, required: false
  private _startServerConnFailPersist?: number; 
  public get startServerConnFailPersist() {
    return this.getNumberAttribute('start_server_conn_fail_persist');
  }
  public set startServerConnFailPersist(value: number) {
    this._startServerConnFailPersist = value;
  }
  public resetStartServerConnFailPersist() {
    this._startServerConnFailPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnFailPersistInput() {
    return this._startServerConnFailPersist;
  }

  // start_server_conn_fail_server - computed: false, optional: true, required: false
  private _startServerConnFailServer?: number; 
  public get startServerConnFailServer() {
    return this.getNumberAttribute('start_server_conn_fail_server');
  }
  public set startServerConnFailServer(value: number) {
    this._startServerConnFailServer = value;
  }
  public resetStartServerConnFailServer() {
    this._startServerConnFailServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnFailServerInput() {
    return this._startServerConnFailServer;
  }

  // start_server_conn_fail_snat - computed: false, optional: true, required: false
  private _startServerConnFailSnat?: number; 
  public get startServerConnFailSnat() {
    return this.getNumberAttribute('start_server_conn_fail_snat');
  }
  public set startServerConnFailSnat(value: number) {
    this._startServerConnFailSnat = value;
  }
  public resetStartServerConnFailSnat() {
    this._startServerConnFailSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnFailSnatInput() {
    return this._startServerConnFailSnat;
  }

  // start_server_conn_fail_tuple - computed: false, optional: true, required: false
  private _startServerConnFailTuple?: number; 
  public get startServerConnFailTuple() {
    return this.getNumberAttribute('start_server_conn_fail_tuple');
  }
  public set startServerConnFailTuple(value: number) {
    this._startServerConnFailTuple = value;
  }
  public resetStartServerConnFailTuple() {
    this._startServerConnFailTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnFailTupleInput() {
    return this._startServerConnFailTuple;
  }

  // start_server_conn_no_route - computed: false, optional: true, required: false
  private _startServerConnNoRoute?: number; 
  public get startServerConnNoRoute() {
    return this.getNumberAttribute('start_server_conn_no_route');
  }
  public set startServerConnNoRoute(value: number) {
    this._startServerConnNoRoute = value;
  }
  public resetStartServerConnNoRoute() {
    this._startServerConnNoRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startServerConnNoRouteInput() {
    return this._startServerConnNoRoute;
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

  // tcp_event - computed: false, optional: true, required: false
  private _tcpEvent?: number; 
  public get tcpEvent() {
    return this.getNumberAttribute('tcp_event');
  }
  public set tcpEvent(value: number) {
    this._tcpEvent = value;
  }
  public resetTcpEvent() {
    this._tcpEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEventInput() {
    return this._tcpEvent;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats thunder_slb_proxy_stats}
*/
export class DataThunderSlbProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_proxy_stats thunder_slb_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_proxy_stats',
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
  private _stats = new DataThunderSlbProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbProxyStatsStats) {
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
      stats: dataThunderSlbProxyStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
