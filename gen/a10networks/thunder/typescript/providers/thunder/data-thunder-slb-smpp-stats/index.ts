// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSmppStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#id DataThunderSlbSmppStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#stats DataThunderSlbSmppStats#stats}
  */
  readonly stats?: DataThunderSlbSmppStatsStats;
}
export interface DataThunderSlbSmppStatsStats {
  /**
  * Number of packet which AX responds directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#ax_response_directly DataThunderSlbSmppStats#ax_response_directly}
  */
  readonly axResponseDirectly?: number;
  /**
  * Connecting server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_connection DataThunderSlbSmppStats#msg_proxy_client_connection}
  */
  readonly msgProxyClientConnection?: number;
  /**
  * AX responds directly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_drop DataThunderSlbSmppStats#msg_proxy_client_drop}
  */
  readonly msgProxyClientDrop?: number;
  /**
  * Number of SMPP messages received from client but failed to forward to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_fail DataThunderSlbSmppStats#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Incomplete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_incomplete DataThunderSlbSmppStats#msg_proxy_client_incomplete}
  */
  readonly msgProxyClientIncomplete?: number;
  /**
  * Client message rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_recv DataThunderSlbSmppStats#msg_proxy_client_recv}
  */
  readonly msgProxyClientRecv?: number;
  /**
  * Sent to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_client_send_success DataThunderSlbSmppStats#msg_proxy_client_send_success}
  */
  readonly msgProxyClientSendSuccess?: number;
  /**
  * Server conn created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_create_server_conn DataThunderSlbSmppStats#msg_proxy_create_server_conn}
  */
  readonly msgProxyCreateServerConn?: number;
  /**
  * Curr SMPP Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_current DataThunderSlbSmppStats#msg_proxy_current}
  */
  readonly msgProxyCurrent?: number;
  /**
  * Number of server connection created failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_fail_start_server_conn DataThunderSlbSmppStats#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Number of the packet AX drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_server_drop DataThunderSlbSmppStats#msg_proxy_server_drop}
  */
  readonly msgProxyServerDrop?: number;
  /**
  * Number of SMPP messages received from server but failed to forward to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_server_fail DataThunderSlbSmppStats#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Incomplete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_server_incomplete DataThunderSlbSmppStats#msg_proxy_server_incomplete}
  */
  readonly msgProxyServerIncomplete?: number;
  /**
  * Server message rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_server_recv DataThunderSlbSmppStats#msg_proxy_server_recv}
  */
  readonly msgProxyServerRecv?: number;
  /**
  * Sent to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_server_send_success DataThunderSlbSmppStats#msg_proxy_server_send_success}
  */
  readonly msgProxyServerSendSuccess?: number;
  /**
  * Number of server connection created successfully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_start_server_conn DataThunderSlbSmppStats#msg_proxy_start_server_conn}
  */
  readonly msgProxyStartServerConn?: number;
  /**
  * Total SMPP Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#msg_proxy_total DataThunderSlbSmppStats#msg_proxy_total}
  */
  readonly msgProxyTotal?: number;
  /**
  * Select by conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_client_by_conn DataThunderSlbSmppStats#select_client_by_conn}
  */
  readonly selectClientByConn?: number;
  /**
  * Select by request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_client_by_req DataThunderSlbSmppStats#select_client_by_req}
  */
  readonly selectClientByReq?: number;
  /**
  * Client conn selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_client_conn DataThunderSlbSmppStats#select_client_conn}
  */
  readonly selectClientConn?: number;
  /**
  * Select failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_client_fail DataThunderSlbSmppStats#select_client_fail}
  */
  readonly selectClientFail?: number;
  /**
  * Select by roundbin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_client_from_list DataThunderSlbSmppStats#select_client_from_list}
  */
  readonly selectClientFromList?: number;
  /**
  * Select server conn by client conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_server_by_conn DataThunderSlbSmppStats#select_server_by_conn}
  */
  readonly selectServerByConn?: number;
  /**
  * Select by request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_server_by_req DataThunderSlbSmppStats#select_server_by_req}
  */
  readonly selectServerByReq?: number;
  /**
  * Server conn selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_server_conn DataThunderSlbSmppStats#select_server_conn}
  */
  readonly selectServerConn?: number;
  /**
  * Fail to select server conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_server_fail DataThunderSlbSmppStats#select_server_fail}
  */
  readonly selectServerFail?: number;
  /**
  * Select by roundbin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#select_server_from_list DataThunderSlbSmppStats#select_server_from_list}
  */
  readonly selectServerFromList?: number;
}

export function dataThunderSlbSmppStatsStatsToTerraform(struct?: DataThunderSlbSmppStatsStatsOutputReference | DataThunderSlbSmppStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ax_response_directly: cdktf.numberToTerraform(struct!.axResponseDirectly),
    msg_proxy_client_connection: cdktf.numberToTerraform(struct!.msgProxyClientConnection),
    msg_proxy_client_drop: cdktf.numberToTerraform(struct!.msgProxyClientDrop),
    msg_proxy_client_fail: cdktf.numberToTerraform(struct!.msgProxyClientFail),
    msg_proxy_client_incomplete: cdktf.numberToTerraform(struct!.msgProxyClientIncomplete),
    msg_proxy_client_recv: cdktf.numberToTerraform(struct!.msgProxyClientRecv),
    msg_proxy_client_send_success: cdktf.numberToTerraform(struct!.msgProxyClientSendSuccess),
    msg_proxy_create_server_conn: cdktf.numberToTerraform(struct!.msgProxyCreateServerConn),
    msg_proxy_current: cdktf.numberToTerraform(struct!.msgProxyCurrent),
    msg_proxy_fail_start_server_conn: cdktf.numberToTerraform(struct!.msgProxyFailStartServerConn),
    msg_proxy_server_drop: cdktf.numberToTerraform(struct!.msgProxyServerDrop),
    msg_proxy_server_fail: cdktf.numberToTerraform(struct!.msgProxyServerFail),
    msg_proxy_server_incomplete: cdktf.numberToTerraform(struct!.msgProxyServerIncomplete),
    msg_proxy_server_recv: cdktf.numberToTerraform(struct!.msgProxyServerRecv),
    msg_proxy_server_send_success: cdktf.numberToTerraform(struct!.msgProxyServerSendSuccess),
    msg_proxy_start_server_conn: cdktf.numberToTerraform(struct!.msgProxyStartServerConn),
    msg_proxy_total: cdktf.numberToTerraform(struct!.msgProxyTotal),
    select_client_by_conn: cdktf.numberToTerraform(struct!.selectClientByConn),
    select_client_by_req: cdktf.numberToTerraform(struct!.selectClientByReq),
    select_client_conn: cdktf.numberToTerraform(struct!.selectClientConn),
    select_client_fail: cdktf.numberToTerraform(struct!.selectClientFail),
    select_client_from_list: cdktf.numberToTerraform(struct!.selectClientFromList),
    select_server_by_conn: cdktf.numberToTerraform(struct!.selectServerByConn),
    select_server_by_req: cdktf.numberToTerraform(struct!.selectServerByReq),
    select_server_conn: cdktf.numberToTerraform(struct!.selectServerConn),
    select_server_fail: cdktf.numberToTerraform(struct!.selectServerFail),
    select_server_from_list: cdktf.numberToTerraform(struct!.selectServerFromList),
  }
}


export function dataThunderSlbSmppStatsStatsToHclTerraform(struct?: DataThunderSlbSmppStatsStatsOutputReference | DataThunderSlbSmppStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ax_response_directly: {
      value: cdktf.numberToHclTerraform(struct!.axResponseDirectly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_connection: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_drop: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_recv: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_send_success: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientSendSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_create_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyCreateServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_current: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailStartServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_drop: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_recv: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_send_success: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerSendSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyStartServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_total: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_by_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectClientByConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_by_req: {
      value: cdktf.numberToHclTerraform(struct!.selectClientByReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectClientConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_fail: {
      value: cdktf.numberToHclTerraform(struct!.selectClientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_from_list: {
      value: cdktf.numberToHclTerraform(struct!.selectClientFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_by_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectServerByConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_by_req: {
      value: cdktf.numberToHclTerraform(struct!.selectServerByReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_fail: {
      value: cdktf.numberToHclTerraform(struct!.selectServerFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_from_list: {
      value: cdktf.numberToHclTerraform(struct!.selectServerFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSmppStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSmppStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axResponseDirectly !== undefined) {
      hasAnyValues = true;
      internalValueResult.axResponseDirectly = this._axResponseDirectly;
    }
    if (this._msgProxyClientConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientConnection = this._msgProxyClientConnection;
    }
    if (this._msgProxyClientDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientDrop = this._msgProxyClientDrop;
    }
    if (this._msgProxyClientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFail = this._msgProxyClientFail;
    }
    if (this._msgProxyClientIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientIncomplete = this._msgProxyClientIncomplete;
    }
    if (this._msgProxyClientRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientRecv = this._msgProxyClientRecv;
    }
    if (this._msgProxyClientSendSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientSendSuccess = this._msgProxyClientSendSuccess;
    }
    if (this._msgProxyCreateServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyCreateServerConn = this._msgProxyCreateServerConn;
    }
    if (this._msgProxyCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyCurrent = this._msgProxyCurrent;
    }
    if (this._msgProxyFailStartServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailStartServerConn = this._msgProxyFailStartServerConn;
    }
    if (this._msgProxyServerDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerDrop = this._msgProxyServerDrop;
    }
    if (this._msgProxyServerFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFail = this._msgProxyServerFail;
    }
    if (this._msgProxyServerIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerIncomplete = this._msgProxyServerIncomplete;
    }
    if (this._msgProxyServerRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerRecv = this._msgProxyServerRecv;
    }
    if (this._msgProxyServerSendSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerSendSuccess = this._msgProxyServerSendSuccess;
    }
    if (this._msgProxyStartServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyStartServerConn = this._msgProxyStartServerConn;
    }
    if (this._msgProxyTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyTotal = this._msgProxyTotal;
    }
    if (this._selectClientByConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientByConn = this._selectClientByConn;
    }
    if (this._selectClientByReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientByReq = this._selectClientByReq;
    }
    if (this._selectClientConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientConn = this._selectClientConn;
    }
    if (this._selectClientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientFail = this._selectClientFail;
    }
    if (this._selectClientFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientFromList = this._selectClientFromList;
    }
    if (this._selectServerByConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerByConn = this._selectServerByConn;
    }
    if (this._selectServerByReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerByReq = this._selectServerByReq;
    }
    if (this._selectServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConn = this._selectServerConn;
    }
    if (this._selectServerFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerFail = this._selectServerFail;
    }
    if (this._selectServerFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerFromList = this._selectServerFromList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSmppStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axResponseDirectly = undefined;
      this._msgProxyClientConnection = undefined;
      this._msgProxyClientDrop = undefined;
      this._msgProxyClientFail = undefined;
      this._msgProxyClientIncomplete = undefined;
      this._msgProxyClientRecv = undefined;
      this._msgProxyClientSendSuccess = undefined;
      this._msgProxyCreateServerConn = undefined;
      this._msgProxyCurrent = undefined;
      this._msgProxyFailStartServerConn = undefined;
      this._msgProxyServerDrop = undefined;
      this._msgProxyServerFail = undefined;
      this._msgProxyServerIncomplete = undefined;
      this._msgProxyServerRecv = undefined;
      this._msgProxyServerSendSuccess = undefined;
      this._msgProxyStartServerConn = undefined;
      this._msgProxyTotal = undefined;
      this._selectClientByConn = undefined;
      this._selectClientByReq = undefined;
      this._selectClientConn = undefined;
      this._selectClientFail = undefined;
      this._selectClientFromList = undefined;
      this._selectServerByConn = undefined;
      this._selectServerByReq = undefined;
      this._selectServerConn = undefined;
      this._selectServerFail = undefined;
      this._selectServerFromList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axResponseDirectly = value.axResponseDirectly;
      this._msgProxyClientConnection = value.msgProxyClientConnection;
      this._msgProxyClientDrop = value.msgProxyClientDrop;
      this._msgProxyClientFail = value.msgProxyClientFail;
      this._msgProxyClientIncomplete = value.msgProxyClientIncomplete;
      this._msgProxyClientRecv = value.msgProxyClientRecv;
      this._msgProxyClientSendSuccess = value.msgProxyClientSendSuccess;
      this._msgProxyCreateServerConn = value.msgProxyCreateServerConn;
      this._msgProxyCurrent = value.msgProxyCurrent;
      this._msgProxyFailStartServerConn = value.msgProxyFailStartServerConn;
      this._msgProxyServerDrop = value.msgProxyServerDrop;
      this._msgProxyServerFail = value.msgProxyServerFail;
      this._msgProxyServerIncomplete = value.msgProxyServerIncomplete;
      this._msgProxyServerRecv = value.msgProxyServerRecv;
      this._msgProxyServerSendSuccess = value.msgProxyServerSendSuccess;
      this._msgProxyStartServerConn = value.msgProxyStartServerConn;
      this._msgProxyTotal = value.msgProxyTotal;
      this._selectClientByConn = value.selectClientByConn;
      this._selectClientByReq = value.selectClientByReq;
      this._selectClientConn = value.selectClientConn;
      this._selectClientFail = value.selectClientFail;
      this._selectClientFromList = value.selectClientFromList;
      this._selectServerByConn = value.selectServerByConn;
      this._selectServerByReq = value.selectServerByReq;
      this._selectServerConn = value.selectServerConn;
      this._selectServerFail = value.selectServerFail;
      this._selectServerFromList = value.selectServerFromList;
    }
  }

  // ax_response_directly - computed: false, optional: true, required: false
  private _axResponseDirectly?: number; 
  public get axResponseDirectly() {
    return this.getNumberAttribute('ax_response_directly');
  }
  public set axResponseDirectly(value: number) {
    this._axResponseDirectly = value;
  }
  public resetAxResponseDirectly() {
    this._axResponseDirectly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axResponseDirectlyInput() {
    return this._axResponseDirectly;
  }

  // msg_proxy_client_connection - computed: false, optional: true, required: false
  private _msgProxyClientConnection?: number; 
  public get msgProxyClientConnection() {
    return this.getNumberAttribute('msg_proxy_client_connection');
  }
  public set msgProxyClientConnection(value: number) {
    this._msgProxyClientConnection = value;
  }
  public resetMsgProxyClientConnection() {
    this._msgProxyClientConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientConnectionInput() {
    return this._msgProxyClientConnection;
  }

  // msg_proxy_client_drop - computed: false, optional: true, required: false
  private _msgProxyClientDrop?: number; 
  public get msgProxyClientDrop() {
    return this.getNumberAttribute('msg_proxy_client_drop');
  }
  public set msgProxyClientDrop(value: number) {
    this._msgProxyClientDrop = value;
  }
  public resetMsgProxyClientDrop() {
    this._msgProxyClientDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientDropInput() {
    return this._msgProxyClientDrop;
  }

  // msg_proxy_client_fail - computed: false, optional: true, required: false
  private _msgProxyClientFail?: number; 
  public get msgProxyClientFail() {
    return this.getNumberAttribute('msg_proxy_client_fail');
  }
  public set msgProxyClientFail(value: number) {
    this._msgProxyClientFail = value;
  }
  public resetMsgProxyClientFail() {
    this._msgProxyClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailInput() {
    return this._msgProxyClientFail;
  }

  // msg_proxy_client_incomplete - computed: false, optional: true, required: false
  private _msgProxyClientIncomplete?: number; 
  public get msgProxyClientIncomplete() {
    return this.getNumberAttribute('msg_proxy_client_incomplete');
  }
  public set msgProxyClientIncomplete(value: number) {
    this._msgProxyClientIncomplete = value;
  }
  public resetMsgProxyClientIncomplete() {
    this._msgProxyClientIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientIncompleteInput() {
    return this._msgProxyClientIncomplete;
  }

  // msg_proxy_client_recv - computed: false, optional: true, required: false
  private _msgProxyClientRecv?: number; 
  public get msgProxyClientRecv() {
    return this.getNumberAttribute('msg_proxy_client_recv');
  }
  public set msgProxyClientRecv(value: number) {
    this._msgProxyClientRecv = value;
  }
  public resetMsgProxyClientRecv() {
    this._msgProxyClientRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientRecvInput() {
    return this._msgProxyClientRecv;
  }

  // msg_proxy_client_send_success - computed: false, optional: true, required: false
  private _msgProxyClientSendSuccess?: number; 
  public get msgProxyClientSendSuccess() {
    return this.getNumberAttribute('msg_proxy_client_send_success');
  }
  public set msgProxyClientSendSuccess(value: number) {
    this._msgProxyClientSendSuccess = value;
  }
  public resetMsgProxyClientSendSuccess() {
    this._msgProxyClientSendSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientSendSuccessInput() {
    return this._msgProxyClientSendSuccess;
  }

  // msg_proxy_create_server_conn - computed: false, optional: true, required: false
  private _msgProxyCreateServerConn?: number; 
  public get msgProxyCreateServerConn() {
    return this.getNumberAttribute('msg_proxy_create_server_conn');
  }
  public set msgProxyCreateServerConn(value: number) {
    this._msgProxyCreateServerConn = value;
  }
  public resetMsgProxyCreateServerConn() {
    this._msgProxyCreateServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyCreateServerConnInput() {
    return this._msgProxyCreateServerConn;
  }

  // msg_proxy_current - computed: false, optional: true, required: false
  private _msgProxyCurrent?: number; 
  public get msgProxyCurrent() {
    return this.getNumberAttribute('msg_proxy_current');
  }
  public set msgProxyCurrent(value: number) {
    this._msgProxyCurrent = value;
  }
  public resetMsgProxyCurrent() {
    this._msgProxyCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyCurrentInput() {
    return this._msgProxyCurrent;
  }

  // msg_proxy_fail_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyFailStartServerConn?: number; 
  public get msgProxyFailStartServerConn() {
    return this.getNumberAttribute('msg_proxy_fail_start_server_conn');
  }
  public set msgProxyFailStartServerConn(value: number) {
    this._msgProxyFailStartServerConn = value;
  }
  public resetMsgProxyFailStartServerConn() {
    this._msgProxyFailStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailStartServerConnInput() {
    return this._msgProxyFailStartServerConn;
  }

  // msg_proxy_server_drop - computed: false, optional: true, required: false
  private _msgProxyServerDrop?: number; 
  public get msgProxyServerDrop() {
    return this.getNumberAttribute('msg_proxy_server_drop');
  }
  public set msgProxyServerDrop(value: number) {
    this._msgProxyServerDrop = value;
  }
  public resetMsgProxyServerDrop() {
    this._msgProxyServerDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerDropInput() {
    return this._msgProxyServerDrop;
  }

  // msg_proxy_server_fail - computed: false, optional: true, required: false
  private _msgProxyServerFail?: number; 
  public get msgProxyServerFail() {
    return this.getNumberAttribute('msg_proxy_server_fail');
  }
  public set msgProxyServerFail(value: number) {
    this._msgProxyServerFail = value;
  }
  public resetMsgProxyServerFail() {
    this._msgProxyServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailInput() {
    return this._msgProxyServerFail;
  }

  // msg_proxy_server_incomplete - computed: false, optional: true, required: false
  private _msgProxyServerIncomplete?: number; 
  public get msgProxyServerIncomplete() {
    return this.getNumberAttribute('msg_proxy_server_incomplete');
  }
  public set msgProxyServerIncomplete(value: number) {
    this._msgProxyServerIncomplete = value;
  }
  public resetMsgProxyServerIncomplete() {
    this._msgProxyServerIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerIncompleteInput() {
    return this._msgProxyServerIncomplete;
  }

  // msg_proxy_server_recv - computed: false, optional: true, required: false
  private _msgProxyServerRecv?: number; 
  public get msgProxyServerRecv() {
    return this.getNumberAttribute('msg_proxy_server_recv');
  }
  public set msgProxyServerRecv(value: number) {
    this._msgProxyServerRecv = value;
  }
  public resetMsgProxyServerRecv() {
    this._msgProxyServerRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerRecvInput() {
    return this._msgProxyServerRecv;
  }

  // msg_proxy_server_send_success - computed: false, optional: true, required: false
  private _msgProxyServerSendSuccess?: number; 
  public get msgProxyServerSendSuccess() {
    return this.getNumberAttribute('msg_proxy_server_send_success');
  }
  public set msgProxyServerSendSuccess(value: number) {
    this._msgProxyServerSendSuccess = value;
  }
  public resetMsgProxyServerSendSuccess() {
    this._msgProxyServerSendSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerSendSuccessInput() {
    return this._msgProxyServerSendSuccess;
  }

  // msg_proxy_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyStartServerConn?: number; 
  public get msgProxyStartServerConn() {
    return this.getNumberAttribute('msg_proxy_start_server_conn');
  }
  public set msgProxyStartServerConn(value: number) {
    this._msgProxyStartServerConn = value;
  }
  public resetMsgProxyStartServerConn() {
    this._msgProxyStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyStartServerConnInput() {
    return this._msgProxyStartServerConn;
  }

  // msg_proxy_total - computed: false, optional: true, required: false
  private _msgProxyTotal?: number; 
  public get msgProxyTotal() {
    return this.getNumberAttribute('msg_proxy_total');
  }
  public set msgProxyTotal(value: number) {
    this._msgProxyTotal = value;
  }
  public resetMsgProxyTotal() {
    this._msgProxyTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyTotalInput() {
    return this._msgProxyTotal;
  }

  // select_client_by_conn - computed: false, optional: true, required: false
  private _selectClientByConn?: number; 
  public get selectClientByConn() {
    return this.getNumberAttribute('select_client_by_conn');
  }
  public set selectClientByConn(value: number) {
    this._selectClientByConn = value;
  }
  public resetSelectClientByConn() {
    this._selectClientByConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientByConnInput() {
    return this._selectClientByConn;
  }

  // select_client_by_req - computed: false, optional: true, required: false
  private _selectClientByReq?: number; 
  public get selectClientByReq() {
    return this.getNumberAttribute('select_client_by_req');
  }
  public set selectClientByReq(value: number) {
    this._selectClientByReq = value;
  }
  public resetSelectClientByReq() {
    this._selectClientByReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientByReqInput() {
    return this._selectClientByReq;
  }

  // select_client_conn - computed: false, optional: true, required: false
  private _selectClientConn?: number; 
  public get selectClientConn() {
    return this.getNumberAttribute('select_client_conn');
  }
  public set selectClientConn(value: number) {
    this._selectClientConn = value;
  }
  public resetSelectClientConn() {
    this._selectClientConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientConnInput() {
    return this._selectClientConn;
  }

  // select_client_fail - computed: false, optional: true, required: false
  private _selectClientFail?: number; 
  public get selectClientFail() {
    return this.getNumberAttribute('select_client_fail');
  }
  public set selectClientFail(value: number) {
    this._selectClientFail = value;
  }
  public resetSelectClientFail() {
    this._selectClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientFailInput() {
    return this._selectClientFail;
  }

  // select_client_from_list - computed: false, optional: true, required: false
  private _selectClientFromList?: number; 
  public get selectClientFromList() {
    return this.getNumberAttribute('select_client_from_list');
  }
  public set selectClientFromList(value: number) {
    this._selectClientFromList = value;
  }
  public resetSelectClientFromList() {
    this._selectClientFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientFromListInput() {
    return this._selectClientFromList;
  }

  // select_server_by_conn - computed: false, optional: true, required: false
  private _selectServerByConn?: number; 
  public get selectServerByConn() {
    return this.getNumberAttribute('select_server_by_conn');
  }
  public set selectServerByConn(value: number) {
    this._selectServerByConn = value;
  }
  public resetSelectServerByConn() {
    this._selectServerByConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerByConnInput() {
    return this._selectServerByConn;
  }

  // select_server_by_req - computed: false, optional: true, required: false
  private _selectServerByReq?: number; 
  public get selectServerByReq() {
    return this.getNumberAttribute('select_server_by_req');
  }
  public set selectServerByReq(value: number) {
    this._selectServerByReq = value;
  }
  public resetSelectServerByReq() {
    this._selectServerByReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerByReqInput() {
    return this._selectServerByReq;
  }

  // select_server_conn - computed: false, optional: true, required: false
  private _selectServerConn?: number; 
  public get selectServerConn() {
    return this.getNumberAttribute('select_server_conn');
  }
  public set selectServerConn(value: number) {
    this._selectServerConn = value;
  }
  public resetSelectServerConn() {
    this._selectServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnInput() {
    return this._selectServerConn;
  }

  // select_server_fail - computed: false, optional: true, required: false
  private _selectServerFail?: number; 
  public get selectServerFail() {
    return this.getNumberAttribute('select_server_fail');
  }
  public set selectServerFail(value: number) {
    this._selectServerFail = value;
  }
  public resetSelectServerFail() {
    this._selectServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerFailInput() {
    return this._selectServerFail;
  }

  // select_server_from_list - computed: false, optional: true, required: false
  private _selectServerFromList?: number; 
  public get selectServerFromList() {
    return this.getNumberAttribute('select_server_from_list');
  }
  public set selectServerFromList(value: number) {
    this._selectServerFromList = value;
  }
  public resetSelectServerFromList() {
    this._selectServerFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerFromListInput() {
    return this._selectServerFromList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats thunder_slb_smpp_stats}
*/
export class DataThunderSlbSmppStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_smpp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSmppStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSmppStats to import
  * @param importFromId The id of the existing DataThunderSlbSmppStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSmppStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_smpp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_stats thunder_slb_smpp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSmppStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSmppStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_smpp_stats',
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
  private _stats = new DataThunderSlbSmppStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSmppStatsStats) {
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
      stats: dataThunderSlbSmppStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSmppStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSmppStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
