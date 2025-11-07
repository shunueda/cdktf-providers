// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbMlbOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#id DataThunderSlbMlbOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#oper DataThunderSlbMlbOper#oper}
  */
  readonly oper?: DataThunderSlbMlbOperOper;
}
export interface DataThunderSlbMlbOperOperL4CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#client_conn_closed DataThunderSlbMlbOper#client_conn_closed}
  */
  readonly clientConnClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#client_conn_created DataThunderSlbMlbOper#client_conn_created}
  */
  readonly clientConnCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#client_conn_not_found DataThunderSlbMlbOper#client_conn_not_found}
  */
  readonly clientConnNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#client_msg_sent DataThunderSlbMlbOper#client_msg_sent}
  */
  readonly clientMsgSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_dcmsg_alloc DataThunderSlbMlbOper#mlb_dcmsg_alloc}
  */
  readonly mlbDcmsgAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_dcmsg_error DataThunderSlbMlbOper#mlb_dcmsg_error}
  */
  readonly mlbDcmsgError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_dcmsg_free DataThunderSlbMlbOper#mlb_dcmsg_free}
  */
  readonly mlbDcmsgFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_dcmsg_received DataThunderSlbMlbOper#mlb_dcmsg_received}
  */
  readonly mlbDcmsgReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_dcmsg_sent DataThunderSlbMlbOper#mlb_dcmsg_sent}
  */
  readonly mlbDcmsgSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_server_down DataThunderSlbMlbOper#mlb_server_down}
  */
  readonly mlbServerDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#mlb_server_probe DataThunderSlbMlbOper#mlb_server_probe}
  */
  readonly mlbServerProbe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#msg_dropped DataThunderSlbMlbOper#msg_dropped}
  */
  readonly msgDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#msg_rerouted DataThunderSlbMlbOper#msg_rerouted}
  */
  readonly msgRerouted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#server_conn_closed DataThunderSlbMlbOper#server_conn_closed}
  */
  readonly serverConnClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#server_conn_created DataThunderSlbMlbOper#server_conn_created}
  */
  readonly serverConnCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#server_conn_failed DataThunderSlbMlbOper#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#server_conn_rst DataThunderSlbMlbOper#server_conn_rst}
  */
  readonly serverConnRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#server_msg_received DataThunderSlbMlbOper#server_msg_received}
  */
  readonly serverMsgReceived?: number;
}

export function dataThunderSlbMlbOperOperL4CpuListStructToTerraform(struct?: DataThunderSlbMlbOperOperL4CpuListStruct | cdktf.IResolvable): any {
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


export function dataThunderSlbMlbOperOperL4CpuListStructToHclTerraform(struct?: DataThunderSlbMlbOperOperL4CpuListStruct | cdktf.IResolvable): any {
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

export class DataThunderSlbMlbOperOperL4CpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbMlbOperOperL4CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataThunderSlbMlbOperOperL4CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataThunderSlbMlbOperOperL4CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbMlbOperOperL4CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbMlbOperOperL4CpuListStructOutputReference {
    return new DataThunderSlbMlbOperOperL4CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbMlbOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#cpu_count DataThunderSlbMlbOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * l4_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#l4_cpu_list DataThunderSlbMlbOper#l4_cpu_list}
  */
  readonly l4CpuList?: DataThunderSlbMlbOperOperL4CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbMlbOperOperToTerraform(struct?: DataThunderSlbMlbOperOperOutputReference | DataThunderSlbMlbOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    l4_cpu_list: cdktf.listMapper(dataThunderSlbMlbOperOperL4CpuListStructToTerraform, true)(struct!.l4CpuList),
  }
}


export function dataThunderSlbMlbOperOperToHclTerraform(struct?: DataThunderSlbMlbOperOperOutputReference | DataThunderSlbMlbOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderSlbMlbOperOperL4CpuListStructToHclTerraform, true)(struct!.l4CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbMlbOperOperL4CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbMlbOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbMlbOperOper | undefined {
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

  public set internalValue(value: DataThunderSlbMlbOperOper | undefined) {
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
  private _l4CpuList = new DataThunderSlbMlbOperOperL4CpuListStructList(this, "l4_cpu_list", false);
  public get l4CpuList() {
    return this._l4CpuList;
  }
  public putL4CpuList(value: DataThunderSlbMlbOperOperL4CpuListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper thunder_slb_mlb_oper}
*/
export class DataThunderSlbMlbOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_mlb_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbMlbOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbMlbOper to import
  * @param importFromId The id of the existing DataThunderSlbMlbOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbMlbOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_mlb_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_mlb_oper thunder_slb_mlb_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbMlbOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbMlbOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_mlb_oper',
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
  private _oper = new DataThunderSlbMlbOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbMlbOperOper) {
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
      oper: dataThunderSlbMlbOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbMlbOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbMlbOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
