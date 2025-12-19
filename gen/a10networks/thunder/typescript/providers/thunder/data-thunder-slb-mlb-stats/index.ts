// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbMlbStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#id DataThunderSlbMlbStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#stats DataThunderSlbMlbStats#stats}
  */
  readonly stats?: DataThunderSlbMlbStatsStats;
}
export interface DataThunderSlbMlbStatsStats {
  /**
  * Client connection closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#client_conn_closed DataThunderSlbMlbStats#client_conn_closed}
  */
  readonly clientConnClosed?: number;
  /**
  * Client connection created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#client_conn_created DataThunderSlbMlbStats#client_conn_created}
  */
  readonly clientConnCreated?: number;
  /**
  * Client connection not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#client_conn_not_found DataThunderSlbMlbStats#client_conn_not_found}
  */
  readonly clientConnNotFound?: number;
  /**
  * Client message sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#client_msg_sent DataThunderSlbMlbStats#client_msg_sent}
  */
  readonly clientMsgSent?: number;
  /**
  * Dcmsg alloc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_dcmsg_alloc DataThunderSlbMlbStats#mlb_dcmsg_alloc}
  */
  readonly mlbDcmsgAlloc?: number;
  /**
  * Dcmsg error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_dcmsg_error DataThunderSlbMlbStats#mlb_dcmsg_error}
  */
  readonly mlbDcmsgError?: number;
  /**
  * Dcmsg free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_dcmsg_free DataThunderSlbMlbStats#mlb_dcmsg_free}
  */
  readonly mlbDcmsgFree?: number;
  /**
  * Dcmsg received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_dcmsg_received DataThunderSlbMlbStats#mlb_dcmsg_received}
  */
  readonly mlbDcmsgReceived?: number;
  /**
  * Dcmsg sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_dcmsg_sent DataThunderSlbMlbStats#mlb_dcmsg_sent}
  */
  readonly mlbDcmsgSent?: number;
  /**
  * Server down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_server_down DataThunderSlbMlbStats#mlb_server_down}
  */
  readonly mlbServerDown?: number;
  /**
  * Server probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#mlb_server_probe DataThunderSlbMlbStats#mlb_server_probe}
  */
  readonly mlbServerProbe?: number;
  /**
  * Message dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#msg_dropped DataThunderSlbMlbStats#msg_dropped}
  */
  readonly msgDropped?: number;
  /**
  * Message rerouted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#msg_rerouted DataThunderSlbMlbStats#msg_rerouted}
  */
  readonly msgRerouted?: number;
  /**
  * Server connection closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#server_conn_closed DataThunderSlbMlbStats#server_conn_closed}
  */
  readonly serverConnClosed?: number;
  /**
  * Server connection created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#server_conn_created DataThunderSlbMlbStats#server_conn_created}
  */
  readonly serverConnCreated?: number;
  /**
  * Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#server_conn_failed DataThunderSlbMlbStats#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Server connection reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#server_conn_rst DataThunderSlbMlbStats#server_conn_rst}
  */
  readonly serverConnRst?: number;
  /**
  * Server message received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#server_msg_received DataThunderSlbMlbStats#server_msg_received}
  */
  readonly serverMsgReceived?: number;
}

export function dataThunderSlbMlbStatsStatsToTerraform(struct?: DataThunderSlbMlbStatsStatsOutputReference | DataThunderSlbMlbStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_conn_closed: cdktf.numberToTerraform(struct!.clientConnClosed),
    client_conn_created: cdktf.numberToTerraform(struct!.clientConnCreated),
    client_conn_not_found: cdktf.numberToTerraform(struct!.clientConnNotFound),
    client_msg_sent: cdktf.numberToTerraform(struct!.clientMsgSent),
    mlb_dcmsg_alloc: cdktf.numberToTerraform(struct!.mlbDcmsgAlloc),
    mlb_dcmsg_error: cdktf.numberToTerraform(struct!.mlbDcmsgError),
    mlb_dcmsg_free: cdktf.numberToTerraform(struct!.mlbDcmsgFree),
    mlb_dcmsg_received: cdktf.numberToTerraform(struct!.mlbDcmsgReceived),
    mlb_dcmsg_sent: cdktf.numberToTerraform(struct!.mlbDcmsgSent),
    mlb_server_down: cdktf.numberToTerraform(struct!.mlbServerDown),
    mlb_server_probe: cdktf.numberToTerraform(struct!.mlbServerProbe),
    msg_dropped: cdktf.numberToTerraform(struct!.msgDropped),
    msg_rerouted: cdktf.numberToTerraform(struct!.msgRerouted),
    server_conn_closed: cdktf.numberToTerraform(struct!.serverConnClosed),
    server_conn_created: cdktf.numberToTerraform(struct!.serverConnCreated),
    server_conn_failed: cdktf.numberToTerraform(struct!.serverConnFailed),
    server_conn_rst: cdktf.numberToTerraform(struct!.serverConnRst),
    server_msg_received: cdktf.numberToTerraform(struct!.serverMsgReceived),
  }
}


export function dataThunderSlbMlbStatsStatsToHclTerraform(struct?: DataThunderSlbMlbStatsStatsOutputReference | DataThunderSlbMlbStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_conn_closed: {
      value: cdktf.numberToHclTerraform(struct!.clientConnClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_created: {
      value: cdktf.numberToHclTerraform(struct!.clientConnCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_not_found: {
      value: cdktf.numberToHclTerraform(struct!.clientConnNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_msg_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientMsgSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_dcmsg_alloc: {
      value: cdktf.numberToHclTerraform(struct!.mlbDcmsgAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_dcmsg_error: {
      value: cdktf.numberToHclTerraform(struct!.mlbDcmsgError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_dcmsg_free: {
      value: cdktf.numberToHclTerraform(struct!.mlbDcmsgFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_dcmsg_received: {
      value: cdktf.numberToHclTerraform(struct!.mlbDcmsgReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_dcmsg_sent: {
      value: cdktf.numberToHclTerraform(struct!.mlbDcmsgSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_server_down: {
      value: cdktf.numberToHclTerraform(struct!.mlbServerDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mlb_server_probe: {
      value: cdktf.numberToHclTerraform(struct!.mlbServerProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_dropped: {
      value: cdktf.numberToHclTerraform(struct!.msgDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_rerouted: {
      value: cdktf.numberToHclTerraform(struct!.msgRerouted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_closed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_created: {
      value: cdktf.numberToHclTerraform(struct!.serverConnCreated),
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
    server_conn_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverConnRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_msg_received: {
      value: cdktf.numberToHclTerraform(struct!.serverMsgReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbMlbStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbMlbStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConnClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnClosed = this._clientConnClosed;
    }
    if (this._clientConnCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnCreated = this._clientConnCreated;
    }
    if (this._clientConnNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnNotFound = this._clientConnNotFound;
    }
    if (this._clientMsgSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMsgSent = this._clientMsgSent;
    }
    if (this._mlbDcmsgAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbDcmsgAlloc = this._mlbDcmsgAlloc;
    }
    if (this._mlbDcmsgError !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbDcmsgError = this._mlbDcmsgError;
    }
    if (this._mlbDcmsgFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbDcmsgFree = this._mlbDcmsgFree;
    }
    if (this._mlbDcmsgReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbDcmsgReceived = this._mlbDcmsgReceived;
    }
    if (this._mlbDcmsgSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbDcmsgSent = this._mlbDcmsgSent;
    }
    if (this._mlbServerDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbServerDown = this._mlbServerDown;
    }
    if (this._mlbServerProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlbServerProbe = this._mlbServerProbe;
    }
    if (this._msgDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgDropped = this._msgDropped;
    }
    if (this._msgRerouted !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgRerouted = this._msgRerouted;
    }
    if (this._serverConnClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnClosed = this._serverConnClosed;
    }
    if (this._serverConnCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnCreated = this._serverConnCreated;
    }
    if (this._serverConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailed = this._serverConnFailed;
    }
    if (this._serverConnRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnRst = this._serverConnRst;
    }
    if (this._serverMsgReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverMsgReceived = this._serverMsgReceived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbMlbStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientConnClosed = undefined;
      this._clientConnCreated = undefined;
      this._clientConnNotFound = undefined;
      this._clientMsgSent = undefined;
      this._mlbDcmsgAlloc = undefined;
      this._mlbDcmsgError = undefined;
      this._mlbDcmsgFree = undefined;
      this._mlbDcmsgReceived = undefined;
      this._mlbDcmsgSent = undefined;
      this._mlbServerDown = undefined;
      this._mlbServerProbe = undefined;
      this._msgDropped = undefined;
      this._msgRerouted = undefined;
      this._serverConnClosed = undefined;
      this._serverConnCreated = undefined;
      this._serverConnFailed = undefined;
      this._serverConnRst = undefined;
      this._serverMsgReceived = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientConnClosed = value.clientConnClosed;
      this._clientConnCreated = value.clientConnCreated;
      this._clientConnNotFound = value.clientConnNotFound;
      this._clientMsgSent = value.clientMsgSent;
      this._mlbDcmsgAlloc = value.mlbDcmsgAlloc;
      this._mlbDcmsgError = value.mlbDcmsgError;
      this._mlbDcmsgFree = value.mlbDcmsgFree;
      this._mlbDcmsgReceived = value.mlbDcmsgReceived;
      this._mlbDcmsgSent = value.mlbDcmsgSent;
      this._mlbServerDown = value.mlbServerDown;
      this._mlbServerProbe = value.mlbServerProbe;
      this._msgDropped = value.msgDropped;
      this._msgRerouted = value.msgRerouted;
      this._serverConnClosed = value.serverConnClosed;
      this._serverConnCreated = value.serverConnCreated;
      this._serverConnFailed = value.serverConnFailed;
      this._serverConnRst = value.serverConnRst;
      this._serverMsgReceived = value.serverMsgReceived;
    }
  }

  // client_conn_closed - computed: false, optional: true, required: false
  private _clientConnClosed?: number; 
  public get clientConnClosed() {
    return this.getNumberAttribute('client_conn_closed');
  }
  public set clientConnClosed(value: number) {
    this._clientConnClosed = value;
  }
  public resetClientConnClosed() {
    this._clientConnClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnClosedInput() {
    return this._clientConnClosed;
  }

  // client_conn_created - computed: false, optional: true, required: false
  private _clientConnCreated?: number; 
  public get clientConnCreated() {
    return this.getNumberAttribute('client_conn_created');
  }
  public set clientConnCreated(value: number) {
    this._clientConnCreated = value;
  }
  public resetClientConnCreated() {
    this._clientConnCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnCreatedInput() {
    return this._clientConnCreated;
  }

  // client_conn_not_found - computed: false, optional: true, required: false
  private _clientConnNotFound?: number; 
  public get clientConnNotFound() {
    return this.getNumberAttribute('client_conn_not_found');
  }
  public set clientConnNotFound(value: number) {
    this._clientConnNotFound = value;
  }
  public resetClientConnNotFound() {
    this._clientConnNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnNotFoundInput() {
    return this._clientConnNotFound;
  }

  // client_msg_sent - computed: false, optional: true, required: false
  private _clientMsgSent?: number; 
  public get clientMsgSent() {
    return this.getNumberAttribute('client_msg_sent');
  }
  public set clientMsgSent(value: number) {
    this._clientMsgSent = value;
  }
  public resetClientMsgSent() {
    this._clientMsgSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMsgSentInput() {
    return this._clientMsgSent;
  }

  // mlb_dcmsg_alloc - computed: false, optional: true, required: false
  private _mlbDcmsgAlloc?: number; 
  public get mlbDcmsgAlloc() {
    return this.getNumberAttribute('mlb_dcmsg_alloc');
  }
  public set mlbDcmsgAlloc(value: number) {
    this._mlbDcmsgAlloc = value;
  }
  public resetMlbDcmsgAlloc() {
    this._mlbDcmsgAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbDcmsgAllocInput() {
    return this._mlbDcmsgAlloc;
  }

  // mlb_dcmsg_error - computed: false, optional: true, required: false
  private _mlbDcmsgError?: number; 
  public get mlbDcmsgError() {
    return this.getNumberAttribute('mlb_dcmsg_error');
  }
  public set mlbDcmsgError(value: number) {
    this._mlbDcmsgError = value;
  }
  public resetMlbDcmsgError() {
    this._mlbDcmsgError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbDcmsgErrorInput() {
    return this._mlbDcmsgError;
  }

  // mlb_dcmsg_free - computed: false, optional: true, required: false
  private _mlbDcmsgFree?: number; 
  public get mlbDcmsgFree() {
    return this.getNumberAttribute('mlb_dcmsg_free');
  }
  public set mlbDcmsgFree(value: number) {
    this._mlbDcmsgFree = value;
  }
  public resetMlbDcmsgFree() {
    this._mlbDcmsgFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbDcmsgFreeInput() {
    return this._mlbDcmsgFree;
  }

  // mlb_dcmsg_received - computed: false, optional: true, required: false
  private _mlbDcmsgReceived?: number; 
  public get mlbDcmsgReceived() {
    return this.getNumberAttribute('mlb_dcmsg_received');
  }
  public set mlbDcmsgReceived(value: number) {
    this._mlbDcmsgReceived = value;
  }
  public resetMlbDcmsgReceived() {
    this._mlbDcmsgReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbDcmsgReceivedInput() {
    return this._mlbDcmsgReceived;
  }

  // mlb_dcmsg_sent - computed: false, optional: true, required: false
  private _mlbDcmsgSent?: number; 
  public get mlbDcmsgSent() {
    return this.getNumberAttribute('mlb_dcmsg_sent');
  }
  public set mlbDcmsgSent(value: number) {
    this._mlbDcmsgSent = value;
  }
  public resetMlbDcmsgSent() {
    this._mlbDcmsgSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbDcmsgSentInput() {
    return this._mlbDcmsgSent;
  }

  // mlb_server_down - computed: false, optional: true, required: false
  private _mlbServerDown?: number; 
  public get mlbServerDown() {
    return this.getNumberAttribute('mlb_server_down');
  }
  public set mlbServerDown(value: number) {
    this._mlbServerDown = value;
  }
  public resetMlbServerDown() {
    this._mlbServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbServerDownInput() {
    return this._mlbServerDown;
  }

  // mlb_server_probe - computed: false, optional: true, required: false
  private _mlbServerProbe?: number; 
  public get mlbServerProbe() {
    return this.getNumberAttribute('mlb_server_probe');
  }
  public set mlbServerProbe(value: number) {
    this._mlbServerProbe = value;
  }
  public resetMlbServerProbe() {
    this._mlbServerProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlbServerProbeInput() {
    return this._mlbServerProbe;
  }

  // msg_dropped - computed: false, optional: true, required: false
  private _msgDropped?: number; 
  public get msgDropped() {
    return this.getNumberAttribute('msg_dropped');
  }
  public set msgDropped(value: number) {
    this._msgDropped = value;
  }
  public resetMsgDropped() {
    this._msgDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgDroppedInput() {
    return this._msgDropped;
  }

  // msg_rerouted - computed: false, optional: true, required: false
  private _msgRerouted?: number; 
  public get msgRerouted() {
    return this.getNumberAttribute('msg_rerouted');
  }
  public set msgRerouted(value: number) {
    this._msgRerouted = value;
  }
  public resetMsgRerouted() {
    this._msgRerouted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgReroutedInput() {
    return this._msgRerouted;
  }

  // server_conn_closed - computed: false, optional: true, required: false
  private _serverConnClosed?: number; 
  public get serverConnClosed() {
    return this.getNumberAttribute('server_conn_closed');
  }
  public set serverConnClosed(value: number) {
    this._serverConnClosed = value;
  }
  public resetServerConnClosed() {
    this._serverConnClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnClosedInput() {
    return this._serverConnClosed;
  }

  // server_conn_created - computed: false, optional: true, required: false
  private _serverConnCreated?: number; 
  public get serverConnCreated() {
    return this.getNumberAttribute('server_conn_created');
  }
  public set serverConnCreated(value: number) {
    this._serverConnCreated = value;
  }
  public resetServerConnCreated() {
    this._serverConnCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnCreatedInput() {
    return this._serverConnCreated;
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

  // server_conn_rst - computed: false, optional: true, required: false
  private _serverConnRst?: number; 
  public get serverConnRst() {
    return this.getNumberAttribute('server_conn_rst');
  }
  public set serverConnRst(value: number) {
    this._serverConnRst = value;
  }
  public resetServerConnRst() {
    this._serverConnRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnRstInput() {
    return this._serverConnRst;
  }

  // server_msg_received - computed: false, optional: true, required: false
  private _serverMsgReceived?: number; 
  public get serverMsgReceived() {
    return this.getNumberAttribute('server_msg_received');
  }
  public set serverMsgReceived(value: number) {
    this._serverMsgReceived = value;
  }
  public resetServerMsgReceived() {
    this._serverMsgReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMsgReceivedInput() {
    return this._serverMsgReceived;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats thunder_slb_mlb_stats}
*/
export class DataThunderSlbMlbStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_mlb_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbMlbStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbMlbStats to import
  * @param importFromId The id of the existing DataThunderSlbMlbStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbMlbStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_mlb_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mlb_stats thunder_slb_mlb_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbMlbStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbMlbStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_mlb_stats',
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
  private _stats = new DataThunderSlbMlbStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbMlbStatsStats) {
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
      stats: dataThunderSlbMlbStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbMlbStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbMlbStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
