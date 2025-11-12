// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbProtocolOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#id DataThunderGslbProtocolOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#oper DataThunderGslbProtocolOper#oper}
  */
  readonly oper?: DataThunderGslbProtocolOperOper;
}
export interface DataThunderGslbProtocolOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#connection_failed DataThunderGslbProtocolOper#connection_failed}
  */
  readonly connectionFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#connection_succeeded DataThunderGslbProtocolOper#connection_succeeded}
  */
  readonly connectionSucceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#keepalive_packet_received DataThunderGslbProtocolOper#keepalive_packet_received}
  */
  readonly keepalivePacketReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#keepalive_packet_sent DataThunderGslbProtocolOper#keepalive_packet_sent}
  */
  readonly keepalivePacketSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#message_header_error DataThunderGslbProtocolOper#message_header_error}
  */
  readonly messageHeaderError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#notify_packet_received DataThunderGslbProtocolOper#notify_packet_received}
  */
  readonly notifyPacketReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#notify_packet_sent DataThunderGslbProtocolOper#notify_packet_sent}
  */
  readonly notifyPacketSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#open_packet_received DataThunderGslbProtocolOper#open_packet_received}
  */
  readonly openPacketReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#open_packet_sent DataThunderGslbProtocolOper#open_packet_sent}
  */
  readonly openPacketSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#open_session_failed DataThunderGslbProtocolOper#open_session_failed}
  */
  readonly openSessionFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#open_session_succeeded DataThunderGslbProtocolOper#open_session_succeeded}
  */
  readonly openSessionSucceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#protocol_info DataThunderGslbProtocolOper#protocol_info}
  */
  readonly protocolInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#retry DataThunderGslbProtocolOper#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#secure_config DataThunderGslbProtocolOper#secure_config}
  */
  readonly secureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#secure_negotiation_fail DataThunderGslbProtocolOper#secure_negotiation_fail}
  */
  readonly secureNegotiationFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#secure_negotiation_success DataThunderGslbProtocolOper#secure_negotiation_success}
  */
  readonly secureNegotiationSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#secure_state DataThunderGslbProtocolOper#secure_state}
  */
  readonly secureState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#session_id DataThunderGslbProtocolOper#session_id}
  */
  readonly sessionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#sessions_dropped DataThunderGslbProtocolOper#sessions_dropped}
  */
  readonly sessionsDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#ssl_handshake_fail DataThunderGslbProtocolOper#ssl_handshake_fail}
  */
  readonly sslHandshakeFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#ssl_handshake_success DataThunderGslbProtocolOper#ssl_handshake_success}
  */
  readonly sslHandshakeSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#state DataThunderGslbProtocolOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#update_packet_received DataThunderGslbProtocolOper#update_packet_received}
  */
  readonly updatePacketReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#update_packet_sent DataThunderGslbProtocolOper#update_packet_sent}
  */
  readonly updatePacketSent?: number;
}

export function dataThunderGslbProtocolOperOperSessionListStructToTerraform(struct?: DataThunderGslbProtocolOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_failed: cdktf.numberToTerraform(struct!.connectionFailed),
    connection_succeeded: cdktf.numberToTerraform(struct!.connectionSucceeded),
    keepalive_packet_received: cdktf.numberToTerraform(struct!.keepalivePacketReceived),
    keepalive_packet_sent: cdktf.numberToTerraform(struct!.keepalivePacketSent),
    message_header_error: cdktf.numberToTerraform(struct!.messageHeaderError),
    notify_packet_received: cdktf.numberToTerraform(struct!.notifyPacketReceived),
    notify_packet_sent: cdktf.numberToTerraform(struct!.notifyPacketSent),
    open_packet_received: cdktf.numberToTerraform(struct!.openPacketReceived),
    open_packet_sent: cdktf.numberToTerraform(struct!.openPacketSent),
    open_session_failed: cdktf.numberToTerraform(struct!.openSessionFailed),
    open_session_succeeded: cdktf.numberToTerraform(struct!.openSessionSucceeded),
    protocol_info: cdktf.stringToTerraform(struct!.protocolInfo),
    retry: cdktf.numberToTerraform(struct!.retry),
    secure_config: cdktf.stringToTerraform(struct!.secureConfig),
    secure_negotiation_fail: cdktf.numberToTerraform(struct!.secureNegotiationFail),
    secure_negotiation_success: cdktf.numberToTerraform(struct!.secureNegotiationSuccess),
    secure_state: cdktf.stringToTerraform(struct!.secureState),
    session_id: cdktf.numberToTerraform(struct!.sessionId),
    sessions_dropped: cdktf.numberToTerraform(struct!.sessionsDropped),
    ssl_handshake_fail: cdktf.numberToTerraform(struct!.sslHandshakeFail),
    ssl_handshake_success: cdktf.numberToTerraform(struct!.sslHandshakeSuccess),
    state: cdktf.stringToTerraform(struct!.state),
    update_packet_received: cdktf.numberToTerraform(struct!.updatePacketReceived),
    update_packet_sent: cdktf.numberToTerraform(struct!.updatePacketSent),
  }
}


export function dataThunderGslbProtocolOperOperSessionListStructToHclTerraform(struct?: DataThunderGslbProtocolOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_succeeded: {
      value: cdktf.numberToHclTerraform(struct!.connectionSucceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_packet_sent: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePacketSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_header_error: {
      value: cdktf.numberToHclTerraform(struct!.messageHeaderError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.notifyPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_packet_sent: {
      value: cdktf.numberToHclTerraform(struct!.notifyPacketSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.openPacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_packet_sent: {
      value: cdktf.numberToHclTerraform(struct!.openPacketSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_session_failed: {
      value: cdktf.numberToHclTerraform(struct!.openSessionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_session_succeeded: {
      value: cdktf.numberToHclTerraform(struct!.openSessionSucceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_info: {
      value: cdktf.stringToHclTerraform(struct!.protocolInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_config: {
      value: cdktf.stringToHclTerraform(struct!.secureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_negotiation_fail: {
      value: cdktf.numberToHclTerraform(struct!.secureNegotiationFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_negotiation_success: {
      value: cdktf.numberToHclTerraform(struct!.secureNegotiationSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_state: {
      value: cdktf.stringToHclTerraform(struct!.secureState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_id: {
      value: cdktf.numberToHclTerraform(struct!.sessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_dropped: {
      value: cdktf.numberToHclTerraform(struct!.sessionsDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.sslHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_handshake_success: {
      value: cdktf.numberToHclTerraform(struct!.sslHandshakeSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_packet_received: {
      value: cdktf.numberToHclTerraform(struct!.updatePacketReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_packet_sent: {
      value: cdktf.numberToHclTerraform(struct!.updatePacketSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbProtocolOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbProtocolOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionFailed = this._connectionFailed;
    }
    if (this._connectionSucceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSucceeded = this._connectionSucceeded;
    }
    if (this._keepalivePacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePacketReceived = this._keepalivePacketReceived;
    }
    if (this._keepalivePacketSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePacketSent = this._keepalivePacketSent;
    }
    if (this._messageHeaderError !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageHeaderError = this._messageHeaderError;
    }
    if (this._notifyPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyPacketReceived = this._notifyPacketReceived;
    }
    if (this._notifyPacketSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyPacketSent = this._notifyPacketSent;
    }
    if (this._openPacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.openPacketReceived = this._openPacketReceived;
    }
    if (this._openPacketSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.openPacketSent = this._openPacketSent;
    }
    if (this._openSessionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSessionFailed = this._openSessionFailed;
    }
    if (this._openSessionSucceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSessionSucceeded = this._openSessionSucceeded;
    }
    if (this._protocolInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolInfo = this._protocolInfo;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._secureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureConfig = this._secureConfig;
    }
    if (this._secureNegotiationFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureNegotiationFail = this._secureNegotiationFail;
    }
    if (this._secureNegotiationSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureNegotiationSuccess = this._secureNegotiationSuccess;
    }
    if (this._secureState !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureState = this._secureState;
    }
    if (this._sessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionId = this._sessionId;
    }
    if (this._sessionsDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsDropped = this._sessionsDropped;
    }
    if (this._sslHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHandshakeFail = this._sslHandshakeFail;
    }
    if (this._sslHandshakeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHandshakeSuccess = this._sslHandshakeSuccess;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._updatePacketReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePacketReceived = this._updatePacketReceived;
    }
    if (this._updatePacketSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePacketSent = this._updatePacketSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbProtocolOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionFailed = undefined;
      this._connectionSucceeded = undefined;
      this._keepalivePacketReceived = undefined;
      this._keepalivePacketSent = undefined;
      this._messageHeaderError = undefined;
      this._notifyPacketReceived = undefined;
      this._notifyPacketSent = undefined;
      this._openPacketReceived = undefined;
      this._openPacketSent = undefined;
      this._openSessionFailed = undefined;
      this._openSessionSucceeded = undefined;
      this._protocolInfo = undefined;
      this._retry = undefined;
      this._secureConfig = undefined;
      this._secureNegotiationFail = undefined;
      this._secureNegotiationSuccess = undefined;
      this._secureState = undefined;
      this._sessionId = undefined;
      this._sessionsDropped = undefined;
      this._sslHandshakeFail = undefined;
      this._sslHandshakeSuccess = undefined;
      this._state = undefined;
      this._updatePacketReceived = undefined;
      this._updatePacketSent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionFailed = value.connectionFailed;
      this._connectionSucceeded = value.connectionSucceeded;
      this._keepalivePacketReceived = value.keepalivePacketReceived;
      this._keepalivePacketSent = value.keepalivePacketSent;
      this._messageHeaderError = value.messageHeaderError;
      this._notifyPacketReceived = value.notifyPacketReceived;
      this._notifyPacketSent = value.notifyPacketSent;
      this._openPacketReceived = value.openPacketReceived;
      this._openPacketSent = value.openPacketSent;
      this._openSessionFailed = value.openSessionFailed;
      this._openSessionSucceeded = value.openSessionSucceeded;
      this._protocolInfo = value.protocolInfo;
      this._retry = value.retry;
      this._secureConfig = value.secureConfig;
      this._secureNegotiationFail = value.secureNegotiationFail;
      this._secureNegotiationSuccess = value.secureNegotiationSuccess;
      this._secureState = value.secureState;
      this._sessionId = value.sessionId;
      this._sessionsDropped = value.sessionsDropped;
      this._sslHandshakeFail = value.sslHandshakeFail;
      this._sslHandshakeSuccess = value.sslHandshakeSuccess;
      this._state = value.state;
      this._updatePacketReceived = value.updatePacketReceived;
      this._updatePacketSent = value.updatePacketSent;
    }
  }

  // connection_failed - computed: false, optional: true, required: false
  private _connectionFailed?: number; 
  public get connectionFailed() {
    return this.getNumberAttribute('connection_failed');
  }
  public set connectionFailed(value: number) {
    this._connectionFailed = value;
  }
  public resetConnectionFailed() {
    this._connectionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFailedInput() {
    return this._connectionFailed;
  }

  // connection_succeeded - computed: false, optional: true, required: false
  private _connectionSucceeded?: number; 
  public get connectionSucceeded() {
    return this.getNumberAttribute('connection_succeeded');
  }
  public set connectionSucceeded(value: number) {
    this._connectionSucceeded = value;
  }
  public resetConnectionSucceeded() {
    this._connectionSucceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSucceededInput() {
    return this._connectionSucceeded;
  }

  // keepalive_packet_received - computed: false, optional: true, required: false
  private _keepalivePacketReceived?: number; 
  public get keepalivePacketReceived() {
    return this.getNumberAttribute('keepalive_packet_received');
  }
  public set keepalivePacketReceived(value: number) {
    this._keepalivePacketReceived = value;
  }
  public resetKeepalivePacketReceived() {
    this._keepalivePacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePacketReceivedInput() {
    return this._keepalivePacketReceived;
  }

  // keepalive_packet_sent - computed: false, optional: true, required: false
  private _keepalivePacketSent?: number; 
  public get keepalivePacketSent() {
    return this.getNumberAttribute('keepalive_packet_sent');
  }
  public set keepalivePacketSent(value: number) {
    this._keepalivePacketSent = value;
  }
  public resetKeepalivePacketSent() {
    this._keepalivePacketSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePacketSentInput() {
    return this._keepalivePacketSent;
  }

  // message_header_error - computed: false, optional: true, required: false
  private _messageHeaderError?: number; 
  public get messageHeaderError() {
    return this.getNumberAttribute('message_header_error');
  }
  public set messageHeaderError(value: number) {
    this._messageHeaderError = value;
  }
  public resetMessageHeaderError() {
    this._messageHeaderError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageHeaderErrorInput() {
    return this._messageHeaderError;
  }

  // notify_packet_received - computed: false, optional: true, required: false
  private _notifyPacketReceived?: number; 
  public get notifyPacketReceived() {
    return this.getNumberAttribute('notify_packet_received');
  }
  public set notifyPacketReceived(value: number) {
    this._notifyPacketReceived = value;
  }
  public resetNotifyPacketReceived() {
    this._notifyPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPacketReceivedInput() {
    return this._notifyPacketReceived;
  }

  // notify_packet_sent - computed: false, optional: true, required: false
  private _notifyPacketSent?: number; 
  public get notifyPacketSent() {
    return this.getNumberAttribute('notify_packet_sent');
  }
  public set notifyPacketSent(value: number) {
    this._notifyPacketSent = value;
  }
  public resetNotifyPacketSent() {
    this._notifyPacketSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPacketSentInput() {
    return this._notifyPacketSent;
  }

  // open_packet_received - computed: false, optional: true, required: false
  private _openPacketReceived?: number; 
  public get openPacketReceived() {
    return this.getNumberAttribute('open_packet_received');
  }
  public set openPacketReceived(value: number) {
    this._openPacketReceived = value;
  }
  public resetOpenPacketReceived() {
    this._openPacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPacketReceivedInput() {
    return this._openPacketReceived;
  }

  // open_packet_sent - computed: false, optional: true, required: false
  private _openPacketSent?: number; 
  public get openPacketSent() {
    return this.getNumberAttribute('open_packet_sent');
  }
  public set openPacketSent(value: number) {
    this._openPacketSent = value;
  }
  public resetOpenPacketSent() {
    this._openPacketSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPacketSentInput() {
    return this._openPacketSent;
  }

  // open_session_failed - computed: false, optional: true, required: false
  private _openSessionFailed?: number; 
  public get openSessionFailed() {
    return this.getNumberAttribute('open_session_failed');
  }
  public set openSessionFailed(value: number) {
    this._openSessionFailed = value;
  }
  public resetOpenSessionFailed() {
    this._openSessionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSessionFailedInput() {
    return this._openSessionFailed;
  }

  // open_session_succeeded - computed: false, optional: true, required: false
  private _openSessionSucceeded?: number; 
  public get openSessionSucceeded() {
    return this.getNumberAttribute('open_session_succeeded');
  }
  public set openSessionSucceeded(value: number) {
    this._openSessionSucceeded = value;
  }
  public resetOpenSessionSucceeded() {
    this._openSessionSucceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSessionSucceededInput() {
    return this._openSessionSucceeded;
  }

  // protocol_info - computed: false, optional: true, required: false
  private _protocolInfo?: string; 
  public get protocolInfo() {
    return this.getStringAttribute('protocol_info');
  }
  public set protocolInfo(value: string) {
    this._protocolInfo = value;
  }
  public resetProtocolInfo() {
    this._protocolInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInfoInput() {
    return this._protocolInfo;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // secure_config - computed: false, optional: true, required: false
  private _secureConfig?: string; 
  public get secureConfig() {
    return this.getStringAttribute('secure_config');
  }
  public set secureConfig(value: string) {
    this._secureConfig = value;
  }
  public resetSecureConfig() {
    this._secureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConfigInput() {
    return this._secureConfig;
  }

  // secure_negotiation_fail - computed: false, optional: true, required: false
  private _secureNegotiationFail?: number; 
  public get secureNegotiationFail() {
    return this.getNumberAttribute('secure_negotiation_fail');
  }
  public set secureNegotiationFail(value: number) {
    this._secureNegotiationFail = value;
  }
  public resetSecureNegotiationFail() {
    this._secureNegotiationFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureNegotiationFailInput() {
    return this._secureNegotiationFail;
  }

  // secure_negotiation_success - computed: false, optional: true, required: false
  private _secureNegotiationSuccess?: number; 
  public get secureNegotiationSuccess() {
    return this.getNumberAttribute('secure_negotiation_success');
  }
  public set secureNegotiationSuccess(value: number) {
    this._secureNegotiationSuccess = value;
  }
  public resetSecureNegotiationSuccess() {
    this._secureNegotiationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureNegotiationSuccessInput() {
    return this._secureNegotiationSuccess;
  }

  // secure_state - computed: false, optional: true, required: false
  private _secureState?: string; 
  public get secureState() {
    return this.getStringAttribute('secure_state');
  }
  public set secureState(value: string) {
    this._secureState = value;
  }
  public resetSecureState() {
    this._secureState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureStateInput() {
    return this._secureState;
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: number; 
  public get sessionId() {
    return this.getNumberAttribute('session_id');
  }
  public set sessionId(value: number) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // sessions_dropped - computed: false, optional: true, required: false
  private _sessionsDropped?: number; 
  public get sessionsDropped() {
    return this.getNumberAttribute('sessions_dropped');
  }
  public set sessionsDropped(value: number) {
    this._sessionsDropped = value;
  }
  public resetSessionsDropped() {
    this._sessionsDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsDroppedInput() {
    return this._sessionsDropped;
  }

  // ssl_handshake_fail - computed: false, optional: true, required: false
  private _sslHandshakeFail?: number; 
  public get sslHandshakeFail() {
    return this.getNumberAttribute('ssl_handshake_fail');
  }
  public set sslHandshakeFail(value: number) {
    this._sslHandshakeFail = value;
  }
  public resetSslHandshakeFail() {
    this._sslHandshakeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeFailInput() {
    return this._sslHandshakeFail;
  }

  // ssl_handshake_success - computed: false, optional: true, required: false
  private _sslHandshakeSuccess?: number; 
  public get sslHandshakeSuccess() {
    return this.getNumberAttribute('ssl_handshake_success');
  }
  public set sslHandshakeSuccess(value: number) {
    this._sslHandshakeSuccess = value;
  }
  public resetSslHandshakeSuccess() {
    this._sslHandshakeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeSuccessInput() {
    return this._sslHandshakeSuccess;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // update_packet_received - computed: false, optional: true, required: false
  private _updatePacketReceived?: number; 
  public get updatePacketReceived() {
    return this.getNumberAttribute('update_packet_received');
  }
  public set updatePacketReceived(value: number) {
    this._updatePacketReceived = value;
  }
  public resetUpdatePacketReceived() {
    this._updatePacketReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePacketReceivedInput() {
    return this._updatePacketReceived;
  }

  // update_packet_sent - computed: false, optional: true, required: false
  private _updatePacketSent?: number; 
  public get updatePacketSent() {
    return this.getNumberAttribute('update_packet_sent');
  }
  public set updatePacketSent(value: number) {
    this._updatePacketSent = value;
  }
  public resetUpdatePacketSent() {
    this._updatePacketSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePacketSentInput() {
    return this._updatePacketSent;
  }
}

export class DataThunderGslbProtocolOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbProtocolOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbProtocolOperOperSessionListStructOutputReference {
    return new DataThunderGslbProtocolOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbProtocolOperOper {
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#session_list DataThunderGslbProtocolOper#session_list}
  */
  readonly sessionList?: DataThunderGslbProtocolOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbProtocolOperOperToTerraform(struct?: DataThunderGslbProtocolOperOperOutputReference | DataThunderGslbProtocolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_list: cdktf.listMapper(dataThunderGslbProtocolOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderGslbProtocolOperOperToHclTerraform(struct?: DataThunderGslbProtocolOperOperOutputReference | DataThunderGslbProtocolOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_list: {
      value: cdktf.listMapperHcl(dataThunderGslbProtocolOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbProtocolOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbProtocolOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbProtocolOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbProtocolOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderGslbProtocolOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderGslbProtocolOperOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper thunder_gslb_protocol_oper}
*/
export class DataThunderGslbProtocolOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_protocol_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbProtocolOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbProtocolOper to import
  * @param importFromId The id of the existing DataThunderGslbProtocolOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbProtocolOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_protocol_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_protocol_oper thunder_gslb_protocol_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbProtocolOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbProtocolOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_protocol_oper',
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
  private _oper = new DataThunderGslbProtocolOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbProtocolOperOper) {
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
      oper: dataThunderGslbProtocolOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderGslbProtocolOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbProtocolOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
