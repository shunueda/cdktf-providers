// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSipStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#id DataThunderSlbSipStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#stats DataThunderSlbSipStats#stats}
  */
  readonly stats?: DataThunderSlbSipStatsStats;
}
export interface DataThunderSlbSipStatsStats {
  /**
  * Connecting server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_connection DataThunderSlbSipStats#msg_proxy_client_connection}
  */
  readonly msgProxyClientConnection?: number;
  /**
  * Number of AX drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_drop DataThunderSlbSipStats#msg_proxy_client_drop}
  */
  readonly msgProxyClientDrop?: number;
  /**
  * Number of SIP messages received from client but failed to forward to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_fail DataThunderSlbSipStats#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Number of packet which contains incomplete message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_incomplete DataThunderSlbSipStats#msg_proxy_client_incomplete}
  */
  readonly msgProxyClientIncomplete?: number;
  /**
  * Number of SIP messages received from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_recv DataThunderSlbSipStats#msg_proxy_client_recv}
  */
  readonly msgProxyClientRecv?: number;
  /**
  * Number of SIP messages received from client and forwarded to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_client_send_success DataThunderSlbSipStats#msg_proxy_client_send_success}
  */
  readonly msgProxyClientSendSuccess?: number;
  /**
  * Number of server connection system tries to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_create_server_conn DataThunderSlbSipStats#msg_proxy_create_server_conn}
  */
  readonly msgProxyCreateServerConn?: number;
  /**
  * Number of current sip proxy connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_current DataThunderSlbSipStats#msg_proxy_current}
  */
  readonly msgProxyCurrent?: number;
  /**
  * Number of server connection create failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_fail_start_server_conn DataThunderSlbSipStats#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Number of AX drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_server_drop DataThunderSlbSipStats#msg_proxy_server_drop}
  */
  readonly msgProxyServerDrop?: number;
  /**
  * Number of SIP messages received from server but failed to forward to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_server_fail DataThunderSlbSipStats#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Number of packet which contains incomplete message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_server_incomplete DataThunderSlbSipStats#msg_proxy_server_incomplete}
  */
  readonly msgProxyServerIncomplete?: number;
  /**
  * Number of SIP messages received from server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_server_recv DataThunderSlbSipStats#msg_proxy_server_recv}
  */
  readonly msgProxyServerRecv?: number;
  /**
  * Number of SIP messages received from server and forwarded to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_server_send_success DataThunderSlbSipStats#msg_proxy_server_send_success}
  */
  readonly msgProxyServerSendSuccess?: number;
  /**
  * Number of server connection created successfully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_start_server_conn DataThunderSlbSipStats#msg_proxy_start_server_conn}
  */
  readonly msgProxyStartServerConn?: number;
  /**
  * Total number of sip proxy connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#msg_proxy_total DataThunderSlbSipStats#msg_proxy_total}
  */
  readonly msgProxyTotal?: number;
  /**
  * SIP Session created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#session_created DataThunderSlbSipStats#session_created}
  */
  readonly sessionCreated?: number;
  /**
  * SIP Session freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#session_freed DataThunderSlbSipStats#session_freed}
  */
  readonly sessionFreed?: number;
}

export function dataThunderSlbSipStatsStatsToTerraform(struct?: DataThunderSlbSipStatsStatsOutputReference | DataThunderSlbSipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
    session_created: cdktf.numberToTerraform(struct!.sessionCreated),
    session_freed: cdktf.numberToTerraform(struct!.sessionFreed),
  }
}


export function dataThunderSlbSipStatsStatsToHclTerraform(struct?: DataThunderSlbSipStatsStatsOutputReference | DataThunderSlbSipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    session_created: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_freed: {
      value: cdktf.numberToHclTerraform(struct!.sessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSipStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSipStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    if (this._sessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionFreed = this._sessionFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSipStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this._sessionCreated = undefined;
      this._sessionFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
      this._sessionCreated = value.sessionCreated;
      this._sessionFreed = value.sessionFreed;
    }
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

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: number; 
  public get sessionCreated() {
    return this.getNumberAttribute('session_created');
  }
  public set sessionCreated(value: number) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }

  // session_freed - computed: false, optional: true, required: false
  private _sessionFreed?: number; 
  public get sessionFreed() {
    return this.getNumberAttribute('session_freed');
  }
  public set sessionFreed(value: number) {
    this._sessionFreed = value;
  }
  public resetSessionFreed() {
    this._sessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionFreedInput() {
    return this._sessionFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats thunder_slb_sip_stats}
*/
export class DataThunderSlbSipStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_sip_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSipStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSipStats to import
  * @param importFromId The id of the existing DataThunderSlbSipStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSipStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_sip_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_stats thunder_slb_sip_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSipStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSipStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_sip_stats',
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
  private _stats = new DataThunderSlbSipStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSipStatsStats) {
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
      stats: dataThunderSlbSipStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSipStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSipStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
