// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6StatefulFirewallAlgSipStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#id DataThunderCgnv6StatefulFirewallAlgSipStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#stats DataThunderCgnv6StatefulFirewallAlgSipStats#stats}
  */
  readonly stats?: DataThunderCgnv6StatefulFirewallAlgSipStatsStats;
}
export interface DataThunderCgnv6StatefulFirewallAlgSipStatsStats {
  /**
  * Method ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_ack DataThunderCgnv6StatefulFirewallAlgSipStats#method_ack}
  */
  readonly methodAck?: number;
  /**
  * Method BYE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_bye DataThunderCgnv6StatefulFirewallAlgSipStats#method_bye}
  */
  readonly methodBye?: number;
  /**
  * Method CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_cancel DataThunderCgnv6StatefulFirewallAlgSipStats#method_cancel}
  */
  readonly methodCancel?: number;
  /**
  * Method INFO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_info DataThunderCgnv6StatefulFirewallAlgSipStats#method_info}
  */
  readonly methodInfo?: number;
  /**
  * Method INVITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_invite DataThunderCgnv6StatefulFirewallAlgSipStats#method_invite}
  */
  readonly methodInvite?: number;
  /**
  * Method MESSAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_message DataThunderCgnv6StatefulFirewallAlgSipStats#method_message}
  */
  readonly methodMessage?: number;
  /**
  * Method NOTIFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_notify DataThunderCgnv6StatefulFirewallAlgSipStats#method_notify}
  */
  readonly methodNotify?: number;
  /**
  * Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_port_config DataThunderCgnv6StatefulFirewallAlgSipStats#method_port_config}
  */
  readonly methodPortConfig?: number;
  /**
  * Method PRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_prack DataThunderCgnv6StatefulFirewallAlgSipStats#method_prack}
  */
  readonly methodPrack?: number;
  /**
  * Method PUBLISH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_publish DataThunderCgnv6StatefulFirewallAlgSipStats#method_publish}
  */
  readonly methodPublish?: number;
  /**
  * Method REFER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_refer DataThunderCgnv6StatefulFirewallAlgSipStats#method_refer}
  */
  readonly methodRefer?: number;
  /**
  * Method REGISTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_register DataThunderCgnv6StatefulFirewallAlgSipStats#method_register}
  */
  readonly methodRegister?: number;
  /**
  * Method SUBSCRIBE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_subscribe DataThunderCgnv6StatefulFirewallAlgSipStats#method_subscribe}
  */
  readonly methodSubscribe?: number;
  /**
  * Method Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_unknown DataThunderCgnv6StatefulFirewallAlgSipStats#method_unknown}
  */
  readonly methodUnknown?: number;
  /**
  * Method UPDATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#method_update DataThunderCgnv6StatefulFirewallAlgSipStats#method_update}
  */
  readonly methodUpdate?: number;
  /**
  * Request Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#stat_request DataThunderCgnv6StatefulFirewallAlgSipStats#stat_request}
  */
  readonly statRequest?: number;
  /**
  * Response Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#stat_response DataThunderCgnv6StatefulFirewallAlgSipStats#stat_response}
  */
  readonly statResponse?: number;
}

export function dataThunderCgnv6StatefulFirewallAlgSipStatsStatsToTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgSipStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgSipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_ack: cdktf.numberToTerraform(struct!.methodAck),
    method_bye: cdktf.numberToTerraform(struct!.methodBye),
    method_cancel: cdktf.numberToTerraform(struct!.methodCancel),
    method_info: cdktf.numberToTerraform(struct!.methodInfo),
    method_invite: cdktf.numberToTerraform(struct!.methodInvite),
    method_message: cdktf.numberToTerraform(struct!.methodMessage),
    method_notify: cdktf.numberToTerraform(struct!.methodNotify),
    method_port_config: cdktf.numberToTerraform(struct!.methodPortConfig),
    method_prack: cdktf.numberToTerraform(struct!.methodPrack),
    method_publish: cdktf.numberToTerraform(struct!.methodPublish),
    method_refer: cdktf.numberToTerraform(struct!.methodRefer),
    method_register: cdktf.numberToTerraform(struct!.methodRegister),
    method_subscribe: cdktf.numberToTerraform(struct!.methodSubscribe),
    method_unknown: cdktf.numberToTerraform(struct!.methodUnknown),
    method_update: cdktf.numberToTerraform(struct!.methodUpdate),
    stat_request: cdktf.numberToTerraform(struct!.statRequest),
    stat_response: cdktf.numberToTerraform(struct!.statResponse),
  }
}


export function dataThunderCgnv6StatefulFirewallAlgSipStatsStatsToHclTerraform(struct?: DataThunderCgnv6StatefulFirewallAlgSipStatsStatsOutputReference | DataThunderCgnv6StatefulFirewallAlgSipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method_ack: {
      value: cdktf.numberToHclTerraform(struct!.methodAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_bye: {
      value: cdktf.numberToHclTerraform(struct!.methodBye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_cancel: {
      value: cdktf.numberToHclTerraform(struct!.methodCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_info: {
      value: cdktf.numberToHclTerraform(struct!.methodInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_invite: {
      value: cdktf.numberToHclTerraform(struct!.methodInvite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_message: {
      value: cdktf.numberToHclTerraform(struct!.methodMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_notify: {
      value: cdktf.numberToHclTerraform(struct!.methodNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_port_config: {
      value: cdktf.numberToHclTerraform(struct!.methodPortConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_prack: {
      value: cdktf.numberToHclTerraform(struct!.methodPrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_publish: {
      value: cdktf.numberToHclTerraform(struct!.methodPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_refer: {
      value: cdktf.numberToHclTerraform(struct!.methodRefer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_register: {
      value: cdktf.numberToHclTerraform(struct!.methodRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_subscribe: {
      value: cdktf.numberToHclTerraform(struct!.methodSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_unknown: {
      value: cdktf.numberToHclTerraform(struct!.methodUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method_update: {
      value: cdktf.numberToHclTerraform(struct!.methodUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat_request: {
      value: cdktf.numberToHclTerraform(struct!.statRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat_response: {
      value: cdktf.numberToHclTerraform(struct!.statResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6StatefulFirewallAlgSipStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6StatefulFirewallAlgSipStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methodAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodAck = this._methodAck;
    }
    if (this._methodBye !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodBye = this._methodBye;
    }
    if (this._methodCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodCancel = this._methodCancel;
    }
    if (this._methodInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodInfo = this._methodInfo;
    }
    if (this._methodInvite !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodInvite = this._methodInvite;
    }
    if (this._methodMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodMessage = this._methodMessage;
    }
    if (this._methodNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodNotify = this._methodNotify;
    }
    if (this._methodPortConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPortConfig = this._methodPortConfig;
    }
    if (this._methodPrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPrack = this._methodPrack;
    }
    if (this._methodPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPublish = this._methodPublish;
    }
    if (this._methodRefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodRefer = this._methodRefer;
    }
    if (this._methodRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodRegister = this._methodRegister;
    }
    if (this._methodSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSubscribe = this._methodSubscribe;
    }
    if (this._methodUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodUnknown = this._methodUnknown;
    }
    if (this._methodUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodUpdate = this._methodUpdate;
    }
    if (this._statRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.statRequest = this._statRequest;
    }
    if (this._statResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.statResponse = this._statResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6StatefulFirewallAlgSipStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methodAck = undefined;
      this._methodBye = undefined;
      this._methodCancel = undefined;
      this._methodInfo = undefined;
      this._methodInvite = undefined;
      this._methodMessage = undefined;
      this._methodNotify = undefined;
      this._methodPortConfig = undefined;
      this._methodPrack = undefined;
      this._methodPublish = undefined;
      this._methodRefer = undefined;
      this._methodRegister = undefined;
      this._methodSubscribe = undefined;
      this._methodUnknown = undefined;
      this._methodUpdate = undefined;
      this._statRequest = undefined;
      this._statResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methodAck = value.methodAck;
      this._methodBye = value.methodBye;
      this._methodCancel = value.methodCancel;
      this._methodInfo = value.methodInfo;
      this._methodInvite = value.methodInvite;
      this._methodMessage = value.methodMessage;
      this._methodNotify = value.methodNotify;
      this._methodPortConfig = value.methodPortConfig;
      this._methodPrack = value.methodPrack;
      this._methodPublish = value.methodPublish;
      this._methodRefer = value.methodRefer;
      this._methodRegister = value.methodRegister;
      this._methodSubscribe = value.methodSubscribe;
      this._methodUnknown = value.methodUnknown;
      this._methodUpdate = value.methodUpdate;
      this._statRequest = value.statRequest;
      this._statResponse = value.statResponse;
    }
  }

  // method_ack - computed: false, optional: true, required: false
  private _methodAck?: number; 
  public get methodAck() {
    return this.getNumberAttribute('method_ack');
  }
  public set methodAck(value: number) {
    this._methodAck = value;
  }
  public resetMethodAck() {
    this._methodAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodAckInput() {
    return this._methodAck;
  }

  // method_bye - computed: false, optional: true, required: false
  private _methodBye?: number; 
  public get methodBye() {
    return this.getNumberAttribute('method_bye');
  }
  public set methodBye(value: number) {
    this._methodBye = value;
  }
  public resetMethodBye() {
    this._methodBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodByeInput() {
    return this._methodBye;
  }

  // method_cancel - computed: false, optional: true, required: false
  private _methodCancel?: number; 
  public get methodCancel() {
    return this.getNumberAttribute('method_cancel');
  }
  public set methodCancel(value: number) {
    this._methodCancel = value;
  }
  public resetMethodCancel() {
    this._methodCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodCancelInput() {
    return this._methodCancel;
  }

  // method_info - computed: false, optional: true, required: false
  private _methodInfo?: number; 
  public get methodInfo() {
    return this.getNumberAttribute('method_info');
  }
  public set methodInfo(value: number) {
    this._methodInfo = value;
  }
  public resetMethodInfo() {
    this._methodInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInfoInput() {
    return this._methodInfo;
  }

  // method_invite - computed: false, optional: true, required: false
  private _methodInvite?: number; 
  public get methodInvite() {
    return this.getNumberAttribute('method_invite');
  }
  public set methodInvite(value: number) {
    this._methodInvite = value;
  }
  public resetMethodInvite() {
    this._methodInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInviteInput() {
    return this._methodInvite;
  }

  // method_message - computed: false, optional: true, required: false
  private _methodMessage?: number; 
  public get methodMessage() {
    return this.getNumberAttribute('method_message');
  }
  public set methodMessage(value: number) {
    this._methodMessage = value;
  }
  public resetMethodMessage() {
    this._methodMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodMessageInput() {
    return this._methodMessage;
  }

  // method_notify - computed: false, optional: true, required: false
  private _methodNotify?: number; 
  public get methodNotify() {
    return this.getNumberAttribute('method_notify');
  }
  public set methodNotify(value: number) {
    this._methodNotify = value;
  }
  public resetMethodNotify() {
    this._methodNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNotifyInput() {
    return this._methodNotify;
  }

  // method_port_config - computed: false, optional: true, required: false
  private _methodPortConfig?: number; 
  public get methodPortConfig() {
    return this.getNumberAttribute('method_port_config');
  }
  public set methodPortConfig(value: number) {
    this._methodPortConfig = value;
  }
  public resetMethodPortConfig() {
    this._methodPortConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPortConfigInput() {
    return this._methodPortConfig;
  }

  // method_prack - computed: false, optional: true, required: false
  private _methodPrack?: number; 
  public get methodPrack() {
    return this.getNumberAttribute('method_prack');
  }
  public set methodPrack(value: number) {
    this._methodPrack = value;
  }
  public resetMethodPrack() {
    this._methodPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPrackInput() {
    return this._methodPrack;
  }

  // method_publish - computed: false, optional: true, required: false
  private _methodPublish?: number; 
  public get methodPublish() {
    return this.getNumberAttribute('method_publish');
  }
  public set methodPublish(value: number) {
    this._methodPublish = value;
  }
  public resetMethodPublish() {
    this._methodPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPublishInput() {
    return this._methodPublish;
  }

  // method_refer - computed: false, optional: true, required: false
  private _methodRefer?: number; 
  public get methodRefer() {
    return this.getNumberAttribute('method_refer');
  }
  public set methodRefer(value: number) {
    this._methodRefer = value;
  }
  public resetMethodRefer() {
    this._methodRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodReferInput() {
    return this._methodRefer;
  }

  // method_register - computed: false, optional: true, required: false
  private _methodRegister?: number; 
  public get methodRegister() {
    return this.getNumberAttribute('method_register');
  }
  public set methodRegister(value: number) {
    this._methodRegister = value;
  }
  public resetMethodRegister() {
    this._methodRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodRegisterInput() {
    return this._methodRegister;
  }

  // method_subscribe - computed: false, optional: true, required: false
  private _methodSubscribe?: number; 
  public get methodSubscribe() {
    return this.getNumberAttribute('method_subscribe');
  }
  public set methodSubscribe(value: number) {
    this._methodSubscribe = value;
  }
  public resetMethodSubscribe() {
    this._methodSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSubscribeInput() {
    return this._methodSubscribe;
  }

  // method_unknown - computed: false, optional: true, required: false
  private _methodUnknown?: number; 
  public get methodUnknown() {
    return this.getNumberAttribute('method_unknown');
  }
  public set methodUnknown(value: number) {
    this._methodUnknown = value;
  }
  public resetMethodUnknown() {
    this._methodUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodUnknownInput() {
    return this._methodUnknown;
  }

  // method_update - computed: false, optional: true, required: false
  private _methodUpdate?: number; 
  public get methodUpdate() {
    return this.getNumberAttribute('method_update');
  }
  public set methodUpdate(value: number) {
    this._methodUpdate = value;
  }
  public resetMethodUpdate() {
    this._methodUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodUpdateInput() {
    return this._methodUpdate;
  }

  // stat_request - computed: false, optional: true, required: false
  private _statRequest?: number; 
  public get statRequest() {
    return this.getNumberAttribute('stat_request');
  }
  public set statRequest(value: number) {
    this._statRequest = value;
  }
  public resetStatRequest() {
    this._statRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statRequestInput() {
    return this._statRequest;
  }

  // stat_response - computed: false, optional: true, required: false
  private _statResponse?: number; 
  public get statResponse() {
    return this.getNumberAttribute('stat_response');
  }
  public set statResponse(value: number) {
    this._statResponse = value;
  }
  public resetStatResponse() {
    this._statResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statResponseInput() {
    return this._statResponse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats thunder_cgnv6_stateful_firewall_alg_sip_stats}
*/
export class DataThunderCgnv6StatefulFirewallAlgSipStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_alg_sip_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6StatefulFirewallAlgSipStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6StatefulFirewallAlgSipStats to import
  * @param importFromId The id of the existing DataThunderCgnv6StatefulFirewallAlgSipStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6StatefulFirewallAlgSipStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_alg_sip_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_stateful_firewall_alg_sip_stats thunder_cgnv6_stateful_firewall_alg_sip_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6StatefulFirewallAlgSipStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6StatefulFirewallAlgSipStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_alg_sip_stats',
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
  private _stats = new DataThunderCgnv6StatefulFirewallAlgSipStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6StatefulFirewallAlgSipStatsStats) {
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
      stats: dataThunderCgnv6StatefulFirewallAlgSipStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6StatefulFirewallAlgSipStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6StatefulFirewallAlgSipStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
