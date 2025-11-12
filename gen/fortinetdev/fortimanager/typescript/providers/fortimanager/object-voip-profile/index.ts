// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVoipProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#adom ObjectVoipProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#comment ObjectVoipProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#feature_set ObjectVoipProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#id ObjectVoipProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#name ObjectVoipProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#scopetype ObjectVoipProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * msrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#msrp ObjectVoipProfile#msrp}
  */
  readonly msrp?: ObjectVoipProfileMsrp;
  /**
  * sccp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#sccp ObjectVoipProfile#sccp}
  */
  readonly sccp?: ObjectVoipProfileSccp;
  /**
  * sip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#sip ObjectVoipProfile#sip}
  */
  readonly sip?: ObjectVoipProfileSip;
}
export interface ObjectVoipProfileMsrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#log_violations ObjectVoipProfile#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_msg_size ObjectVoipProfile#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_msg_size_action ObjectVoipProfile#max_msg_size_action}
  */
  readonly maxMsgSizeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#status ObjectVoipProfile#status}
  */
  readonly status?: string;
}

export function objectVoipProfileMsrpToTerraform(struct?: ObjectVoipProfileMsrpOutputReference | ObjectVoipProfileMsrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_violations: cdktf.stringToTerraform(struct!.logViolations),
    max_msg_size: cdktf.numberToTerraform(struct!.maxMsgSize),
    max_msg_size_action: cdktf.stringToTerraform(struct!.maxMsgSizeAction),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectVoipProfileMsrpToHclTerraform(struct?: ObjectVoipProfileMsrpOutputReference | ObjectVoipProfileMsrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_violations: {
      value: cdktf.stringToHclTerraform(struct!.logViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_msg_size: {
      value: cdktf.numberToHclTerraform(struct!.maxMsgSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_msg_size_action: {
      value: cdktf.stringToHclTerraform(struct!.maxMsgSizeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVoipProfileMsrpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectVoipProfileMsrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.logViolations = this._logViolations;
    }
    if (this._maxMsgSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMsgSize = this._maxMsgSize;
    }
    if (this._maxMsgSizeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMsgSizeAction = this._maxMsgSizeAction;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVoipProfileMsrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logViolations = undefined;
      this._maxMsgSize = undefined;
      this._maxMsgSizeAction = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logViolations = value.logViolations;
      this._maxMsgSize = value.maxMsgSize;
      this._maxMsgSizeAction = value.maxMsgSizeAction;
      this._status = value.status;
    }
  }

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
  }

  // max_msg_size - computed: false, optional: true, required: false
  private _maxMsgSize?: number; 
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }
  public set maxMsgSize(value: number) {
    this._maxMsgSize = value;
  }
  public resetMaxMsgSize() {
    this._maxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeInput() {
    return this._maxMsgSize;
  }

  // max_msg_size_action - computed: true, optional: true, required: false
  private _maxMsgSizeAction?: string; 
  public get maxMsgSizeAction() {
    return this.getStringAttribute('max_msg_size_action');
  }
  public set maxMsgSizeAction(value: string) {
    this._maxMsgSizeAction = value;
  }
  public resetMaxMsgSizeAction() {
    this._maxMsgSizeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeActionInput() {
    return this._maxMsgSizeAction;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ObjectVoipProfileSccp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_mcast ObjectVoipProfile#block_mcast}
  */
  readonly blockMcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#log_call_summary ObjectVoipProfile#log_call_summary}
  */
  readonly logCallSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#log_violations ObjectVoipProfile#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_calls ObjectVoipProfile#max_calls}
  */
  readonly maxCalls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#status ObjectVoipProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#verify_header ObjectVoipProfile#verify_header}
  */
  readonly verifyHeader?: string;
}

export function objectVoipProfileSccpToTerraform(struct?: ObjectVoipProfileSccpOutputReference | ObjectVoipProfileSccp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_mcast: cdktf.stringToTerraform(struct!.blockMcast),
    log_call_summary: cdktf.stringToTerraform(struct!.logCallSummary),
    log_violations: cdktf.stringToTerraform(struct!.logViolations),
    max_calls: cdktf.numberToTerraform(struct!.maxCalls),
    status: cdktf.stringToTerraform(struct!.status),
    verify_header: cdktf.stringToTerraform(struct!.verifyHeader),
  }
}


export function objectVoipProfileSccpToHclTerraform(struct?: ObjectVoipProfileSccpOutputReference | ObjectVoipProfileSccp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_mcast: {
      value: cdktf.stringToHclTerraform(struct!.blockMcast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_call_summary: {
      value: cdktf.stringToHclTerraform(struct!.logCallSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_violations: {
      value: cdktf.stringToHclTerraform(struct!.logViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_calls: {
      value: cdktf.numberToHclTerraform(struct!.maxCalls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_header: {
      value: cdktf.stringToHclTerraform(struct!.verifyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVoipProfileSccpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectVoipProfileSccp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockMcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMcast = this._blockMcast;
    }
    if (this._logCallSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCallSummary = this._logCallSummary;
    }
    if (this._logViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.logViolations = this._logViolations;
    }
    if (this._maxCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCalls = this._maxCalls;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._verifyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyHeader = this._verifyHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVoipProfileSccp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockMcast = undefined;
      this._logCallSummary = undefined;
      this._logViolations = undefined;
      this._maxCalls = undefined;
      this._status = undefined;
      this._verifyHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockMcast = value.blockMcast;
      this._logCallSummary = value.logCallSummary;
      this._logViolations = value.logViolations;
      this._maxCalls = value.maxCalls;
      this._status = value.status;
      this._verifyHeader = value.verifyHeader;
    }
  }

  // block_mcast - computed: true, optional: true, required: false
  private _blockMcast?: string; 
  public get blockMcast() {
    return this.getStringAttribute('block_mcast');
  }
  public set blockMcast(value: string) {
    this._blockMcast = value;
  }
  public resetBlockMcast() {
    this._blockMcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMcastInput() {
    return this._blockMcast;
  }

  // log_call_summary - computed: true, optional: true, required: false
  private _logCallSummary?: string; 
  public get logCallSummary() {
    return this.getStringAttribute('log_call_summary');
  }
  public set logCallSummary(value: string) {
    this._logCallSummary = value;
  }
  public resetLogCallSummary() {
    this._logCallSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCallSummaryInput() {
    return this._logCallSummary;
  }

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
  }

  // max_calls - computed: false, optional: true, required: false
  private _maxCalls?: number; 
  public get maxCalls() {
    return this.getNumberAttribute('max_calls');
  }
  public set maxCalls(value: number) {
    this._maxCalls = value;
  }
  public resetMaxCalls() {
    this._maxCalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallsInput() {
    return this._maxCalls;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // verify_header - computed: true, optional: true, required: false
  private _verifyHeader?: string; 
  public get verifyHeader() {
    return this.getStringAttribute('verify_header');
  }
  public set verifyHeader(value: string) {
    this._verifyHeader = value;
  }
  public resetVerifyHeader() {
    this._verifyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyHeaderInput() {
    return this._verifyHeader;
  }
}
export interface ObjectVoipProfileSip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ack_rate ObjectVoipProfile#ack_rate}
  */
  readonly ackRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ack_rate_track ObjectVoipProfile#ack_rate_track}
  */
  readonly ackRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_ack ObjectVoipProfile#block_ack}
  */
  readonly blockAck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_bye ObjectVoipProfile#block_bye}
  */
  readonly blockBye?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_cancel ObjectVoipProfile#block_cancel}
  */
  readonly blockCancel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_geo_red_options ObjectVoipProfile#block_geo_red_options}
  */
  readonly blockGeoRedOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_info ObjectVoipProfile#block_info}
  */
  readonly blockInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_invite ObjectVoipProfile#block_invite}
  */
  readonly blockInvite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_long_lines ObjectVoipProfile#block_long_lines}
  */
  readonly blockLongLines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_message ObjectVoipProfile#block_message}
  */
  readonly blockMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_notify ObjectVoipProfile#block_notify}
  */
  readonly blockNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_options ObjectVoipProfile#block_options}
  */
  readonly blockOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_prack ObjectVoipProfile#block_prack}
  */
  readonly blockPrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_publish ObjectVoipProfile#block_publish}
  */
  readonly blockPublish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_refer ObjectVoipProfile#block_refer}
  */
  readonly blockRefer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_register ObjectVoipProfile#block_register}
  */
  readonly blockRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_subscribe ObjectVoipProfile#block_subscribe}
  */
  readonly blockSubscribe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_unknown ObjectVoipProfile#block_unknown}
  */
  readonly blockUnknown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#block_update ObjectVoipProfile#block_update}
  */
  readonly blockUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#bye_rate ObjectVoipProfile#bye_rate}
  */
  readonly byeRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#bye_rate_track ObjectVoipProfile#bye_rate_track}
  */
  readonly byeRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#call_id_regex ObjectVoipProfile#call_id_regex}
  */
  readonly callIdRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#call_keepalive ObjectVoipProfile#call_keepalive}
  */
  readonly callKeepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#cancel_rate ObjectVoipProfile#cancel_rate}
  */
  readonly cancelRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#cancel_rate_track ObjectVoipProfile#cancel_rate_track}
  */
  readonly cancelRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#contact_fixup ObjectVoipProfile#contact_fixup}
  */
  readonly contactFixup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#content_type_regex ObjectVoipProfile#content_type_regex}
  */
  readonly contentTypeRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#hnt_restrict_source_ip ObjectVoipProfile#hnt_restrict_source_ip}
  */
  readonly hntRestrictSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#hosted_nat_traversal ObjectVoipProfile#hosted_nat_traversal}
  */
  readonly hostedNatTraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#info_rate ObjectVoipProfile#info_rate}
  */
  readonly infoRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#info_rate_track ObjectVoipProfile#info_rate_track}
  */
  readonly infoRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#invite_rate ObjectVoipProfile#invite_rate}
  */
  readonly inviteRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#invite_rate_track ObjectVoipProfile#invite_rate_track}
  */
  readonly inviteRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ips_rtp ObjectVoipProfile#ips_rtp}
  */
  readonly ipsRtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#log_call_summary ObjectVoipProfile#log_call_summary}
  */
  readonly logCallSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#log_violations ObjectVoipProfile#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_allow ObjectVoipProfile#malformed_header_allow}
  */
  readonly malformedHeaderAllow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_call_id ObjectVoipProfile#malformed_header_call_id}
  */
  readonly malformedHeaderCallId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_contact ObjectVoipProfile#malformed_header_contact}
  */
  readonly malformedHeaderContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_content_length ObjectVoipProfile#malformed_header_content_length}
  */
  readonly malformedHeaderContentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_content_type ObjectVoipProfile#malformed_header_content_type}
  */
  readonly malformedHeaderContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_cseq ObjectVoipProfile#malformed_header_cseq}
  */
  readonly malformedHeaderCseq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_expires ObjectVoipProfile#malformed_header_expires}
  */
  readonly malformedHeaderExpires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_from ObjectVoipProfile#malformed_header_from}
  */
  readonly malformedHeaderFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_max_forwards ObjectVoipProfile#malformed_header_max_forwards}
  */
  readonly malformedHeaderMaxForwards?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_no_proxy_require ObjectVoipProfile#malformed_header_no_proxy_require}
  */
  readonly malformedHeaderNoProxyRequire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_no_require ObjectVoipProfile#malformed_header_no_require}
  */
  readonly malformedHeaderNoRequire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_p_asserted_identity ObjectVoipProfile#malformed_header_p_asserted_identity}
  */
  readonly malformedHeaderPAssertedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_rack ObjectVoipProfile#malformed_header_rack}
  */
  readonly malformedHeaderRack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_record_route ObjectVoipProfile#malformed_header_record_route}
  */
  readonly malformedHeaderRecordRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_route ObjectVoipProfile#malformed_header_route}
  */
  readonly malformedHeaderRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_rseq ObjectVoipProfile#malformed_header_rseq}
  */
  readonly malformedHeaderRseq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_a ObjectVoipProfile#malformed_header_sdp_a}
  */
  readonly malformedHeaderSdpA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_b ObjectVoipProfile#malformed_header_sdp_b}
  */
  readonly malformedHeaderSdpB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_c ObjectVoipProfile#malformed_header_sdp_c}
  */
  readonly malformedHeaderSdpC?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_i ObjectVoipProfile#malformed_header_sdp_i}
  */
  readonly malformedHeaderSdpI?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_k ObjectVoipProfile#malformed_header_sdp_k}
  */
  readonly malformedHeaderSdpK?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_m ObjectVoipProfile#malformed_header_sdp_m}
  */
  readonly malformedHeaderSdpM?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_o ObjectVoipProfile#malformed_header_sdp_o}
  */
  readonly malformedHeaderSdpO?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_r ObjectVoipProfile#malformed_header_sdp_r}
  */
  readonly malformedHeaderSdpR?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_s ObjectVoipProfile#malformed_header_sdp_s}
  */
  readonly malformedHeaderSdpS?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_t ObjectVoipProfile#malformed_header_sdp_t}
  */
  readonly malformedHeaderSdpT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_v ObjectVoipProfile#malformed_header_sdp_v}
  */
  readonly malformedHeaderSdpV?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_sdp_z ObjectVoipProfile#malformed_header_sdp_z}
  */
  readonly malformedHeaderSdpZ?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_to ObjectVoipProfile#malformed_header_to}
  */
  readonly malformedHeaderTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_header_via ObjectVoipProfile#malformed_header_via}
  */
  readonly malformedHeaderVia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#malformed_request_line ObjectVoipProfile#malformed_request_line}
  */
  readonly malformedRequestLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_body_length ObjectVoipProfile#max_body_length}
  */
  readonly maxBodyLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_dialogs ObjectVoipProfile#max_dialogs}
  */
  readonly maxDialogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_idle_dialogs ObjectVoipProfile#max_idle_dialogs}
  */
  readonly maxIdleDialogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#max_line_length ObjectVoipProfile#max_line_length}
  */
  readonly maxLineLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#message_rate ObjectVoipProfile#message_rate}
  */
  readonly messageRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#message_rate_track ObjectVoipProfile#message_rate_track}
  */
  readonly messageRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#nat_port_range ObjectVoipProfile#nat_port_range}
  */
  readonly natPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#nat_trace ObjectVoipProfile#nat_trace}
  */
  readonly natTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#no_sdp_fixup ObjectVoipProfile#no_sdp_fixup}
  */
  readonly noSdpFixup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#notify_rate ObjectVoipProfile#notify_rate}
  */
  readonly notifyRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#notify_rate_track ObjectVoipProfile#notify_rate_track}
  */
  readonly notifyRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#open_contact_pinhole ObjectVoipProfile#open_contact_pinhole}
  */
  readonly openContactPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#open_record_route_pinhole ObjectVoipProfile#open_record_route_pinhole}
  */
  readonly openRecordRoutePinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#open_register_pinhole ObjectVoipProfile#open_register_pinhole}
  */
  readonly openRegisterPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#open_via_pinhole ObjectVoipProfile#open_via_pinhole}
  */
  readonly openViaPinhole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#options_rate ObjectVoipProfile#options_rate}
  */
  readonly optionsRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#options_rate_track ObjectVoipProfile#options_rate_track}
  */
  readonly optionsRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#prack_rate ObjectVoipProfile#prack_rate}
  */
  readonly prackRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#prack_rate_track ObjectVoipProfile#prack_rate_track}
  */
  readonly prackRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#preserve_override ObjectVoipProfile#preserve_override}
  */
  readonly preserveOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#provisional_invite_expiry_time ObjectVoipProfile#provisional_invite_expiry_time}
  */
  readonly provisionalInviteExpiryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#publish_rate ObjectVoipProfile#publish_rate}
  */
  readonly publishRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#publish_rate_track ObjectVoipProfile#publish_rate_track}
  */
  readonly publishRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#refer_rate ObjectVoipProfile#refer_rate}
  */
  readonly referRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#refer_rate_track ObjectVoipProfile#refer_rate_track}
  */
  readonly referRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#register_contact_trace ObjectVoipProfile#register_contact_trace}
  */
  readonly registerContactTrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#register_rate ObjectVoipProfile#register_rate}
  */
  readonly registerRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#register_rate_track ObjectVoipProfile#register_rate_track}
  */
  readonly registerRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#rfc2543_branch ObjectVoipProfile#rfc2543_branch}
  */
  readonly rfc2543Branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#rtp ObjectVoipProfile#rtp}
  */
  readonly rtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_algorithm ObjectVoipProfile#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_auth_client ObjectVoipProfile#ssl_auth_client}
  */
  readonly sslAuthClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_auth_server ObjectVoipProfile#ssl_auth_server}
  */
  readonly sslAuthServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_client_certificate ObjectVoipProfile#ssl_client_certificate}
  */
  readonly sslClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_client_renegotiation ObjectVoipProfile#ssl_client_renegotiation}
  */
  readonly sslClientRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_max_version ObjectVoipProfile#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_min_version ObjectVoipProfile#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_mode ObjectVoipProfile#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_pfs ObjectVoipProfile#ssl_pfs}
  */
  readonly sslPfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_send_empty_frags ObjectVoipProfile#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#ssl_server_certificate ObjectVoipProfile#ssl_server_certificate}
  */
  readonly sslServerCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#status ObjectVoipProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#strict_register ObjectVoipProfile#strict_register}
  */
  readonly strictRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#subscribe_rate ObjectVoipProfile#subscribe_rate}
  */
  readonly subscribeRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#subscribe_rate_track ObjectVoipProfile#subscribe_rate_track}
  */
  readonly subscribeRateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#unknown_header ObjectVoipProfile#unknown_header}
  */
  readonly unknownHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#update_rate ObjectVoipProfile#update_rate}
  */
  readonly updateRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#update_rate_track ObjectVoipProfile#update_rate_track}
  */
  readonly updateRateTrack?: string;
}

export function objectVoipProfileSipToTerraform(struct?: ObjectVoipProfileSipOutputReference | ObjectVoipProfileSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_rate: cdktf.numberToTerraform(struct!.ackRate),
    ack_rate_track: cdktf.stringToTerraform(struct!.ackRateTrack),
    block_ack: cdktf.stringToTerraform(struct!.blockAck),
    block_bye: cdktf.stringToTerraform(struct!.blockBye),
    block_cancel: cdktf.stringToTerraform(struct!.blockCancel),
    block_geo_red_options: cdktf.stringToTerraform(struct!.blockGeoRedOptions),
    block_info: cdktf.stringToTerraform(struct!.blockInfo),
    block_invite: cdktf.stringToTerraform(struct!.blockInvite),
    block_long_lines: cdktf.stringToTerraform(struct!.blockLongLines),
    block_message: cdktf.stringToTerraform(struct!.blockMessage),
    block_notify: cdktf.stringToTerraform(struct!.blockNotify),
    block_options: cdktf.stringToTerraform(struct!.blockOptions),
    block_prack: cdktf.stringToTerraform(struct!.blockPrack),
    block_publish: cdktf.stringToTerraform(struct!.blockPublish),
    block_refer: cdktf.stringToTerraform(struct!.blockRefer),
    block_register: cdktf.stringToTerraform(struct!.blockRegister),
    block_subscribe: cdktf.stringToTerraform(struct!.blockSubscribe),
    block_unknown: cdktf.stringToTerraform(struct!.blockUnknown),
    block_update: cdktf.stringToTerraform(struct!.blockUpdate),
    bye_rate: cdktf.numberToTerraform(struct!.byeRate),
    bye_rate_track: cdktf.stringToTerraform(struct!.byeRateTrack),
    call_id_regex: cdktf.stringToTerraform(struct!.callIdRegex),
    call_keepalive: cdktf.numberToTerraform(struct!.callKeepalive),
    cancel_rate: cdktf.numberToTerraform(struct!.cancelRate),
    cancel_rate_track: cdktf.stringToTerraform(struct!.cancelRateTrack),
    contact_fixup: cdktf.stringToTerraform(struct!.contactFixup),
    content_type_regex: cdktf.stringToTerraform(struct!.contentTypeRegex),
    hnt_restrict_source_ip: cdktf.stringToTerraform(struct!.hntRestrictSourceIp),
    hosted_nat_traversal: cdktf.stringToTerraform(struct!.hostedNatTraversal),
    info_rate: cdktf.numberToTerraform(struct!.infoRate),
    info_rate_track: cdktf.stringToTerraform(struct!.infoRateTrack),
    invite_rate: cdktf.numberToTerraform(struct!.inviteRate),
    invite_rate_track: cdktf.stringToTerraform(struct!.inviteRateTrack),
    ips_rtp: cdktf.stringToTerraform(struct!.ipsRtp),
    log_call_summary: cdktf.stringToTerraform(struct!.logCallSummary),
    log_violations: cdktf.stringToTerraform(struct!.logViolations),
    malformed_header_allow: cdktf.stringToTerraform(struct!.malformedHeaderAllow),
    malformed_header_call_id: cdktf.stringToTerraform(struct!.malformedHeaderCallId),
    malformed_header_contact: cdktf.stringToTerraform(struct!.malformedHeaderContact),
    malformed_header_content_length: cdktf.stringToTerraform(struct!.malformedHeaderContentLength),
    malformed_header_content_type: cdktf.stringToTerraform(struct!.malformedHeaderContentType),
    malformed_header_cseq: cdktf.stringToTerraform(struct!.malformedHeaderCseq),
    malformed_header_expires: cdktf.stringToTerraform(struct!.malformedHeaderExpires),
    malformed_header_from: cdktf.stringToTerraform(struct!.malformedHeaderFrom),
    malformed_header_max_forwards: cdktf.stringToTerraform(struct!.malformedHeaderMaxForwards),
    malformed_header_no_proxy_require: cdktf.stringToTerraform(struct!.malformedHeaderNoProxyRequire),
    malformed_header_no_require: cdktf.stringToTerraform(struct!.malformedHeaderNoRequire),
    malformed_header_p_asserted_identity: cdktf.stringToTerraform(struct!.malformedHeaderPAssertedIdentity),
    malformed_header_rack: cdktf.stringToTerraform(struct!.malformedHeaderRack),
    malformed_header_record_route: cdktf.stringToTerraform(struct!.malformedHeaderRecordRoute),
    malformed_header_route: cdktf.stringToTerraform(struct!.malformedHeaderRoute),
    malformed_header_rseq: cdktf.stringToTerraform(struct!.malformedHeaderRseq),
    malformed_header_sdp_a: cdktf.stringToTerraform(struct!.malformedHeaderSdpA),
    malformed_header_sdp_b: cdktf.stringToTerraform(struct!.malformedHeaderSdpB),
    malformed_header_sdp_c: cdktf.stringToTerraform(struct!.malformedHeaderSdpC),
    malformed_header_sdp_i: cdktf.stringToTerraform(struct!.malformedHeaderSdpI),
    malformed_header_sdp_k: cdktf.stringToTerraform(struct!.malformedHeaderSdpK),
    malformed_header_sdp_m: cdktf.stringToTerraform(struct!.malformedHeaderSdpM),
    malformed_header_sdp_o: cdktf.stringToTerraform(struct!.malformedHeaderSdpO),
    malformed_header_sdp_r: cdktf.stringToTerraform(struct!.malformedHeaderSdpR),
    malformed_header_sdp_s: cdktf.stringToTerraform(struct!.malformedHeaderSdpS),
    malformed_header_sdp_t: cdktf.stringToTerraform(struct!.malformedHeaderSdpT),
    malformed_header_sdp_v: cdktf.stringToTerraform(struct!.malformedHeaderSdpV),
    malformed_header_sdp_z: cdktf.stringToTerraform(struct!.malformedHeaderSdpZ),
    malformed_header_to: cdktf.stringToTerraform(struct!.malformedHeaderTo),
    malformed_header_via: cdktf.stringToTerraform(struct!.malformedHeaderVia),
    malformed_request_line: cdktf.stringToTerraform(struct!.malformedRequestLine),
    max_body_length: cdktf.numberToTerraform(struct!.maxBodyLength),
    max_dialogs: cdktf.numberToTerraform(struct!.maxDialogs),
    max_idle_dialogs: cdktf.numberToTerraform(struct!.maxIdleDialogs),
    max_line_length: cdktf.numberToTerraform(struct!.maxLineLength),
    message_rate: cdktf.numberToTerraform(struct!.messageRate),
    message_rate_track: cdktf.stringToTerraform(struct!.messageRateTrack),
    nat_port_range: cdktf.stringToTerraform(struct!.natPortRange),
    nat_trace: cdktf.stringToTerraform(struct!.natTrace),
    no_sdp_fixup: cdktf.stringToTerraform(struct!.noSdpFixup),
    notify_rate: cdktf.numberToTerraform(struct!.notifyRate),
    notify_rate_track: cdktf.stringToTerraform(struct!.notifyRateTrack),
    open_contact_pinhole: cdktf.stringToTerraform(struct!.openContactPinhole),
    open_record_route_pinhole: cdktf.stringToTerraform(struct!.openRecordRoutePinhole),
    open_register_pinhole: cdktf.stringToTerraform(struct!.openRegisterPinhole),
    open_via_pinhole: cdktf.stringToTerraform(struct!.openViaPinhole),
    options_rate: cdktf.numberToTerraform(struct!.optionsRate),
    options_rate_track: cdktf.stringToTerraform(struct!.optionsRateTrack),
    prack_rate: cdktf.numberToTerraform(struct!.prackRate),
    prack_rate_track: cdktf.stringToTerraform(struct!.prackRateTrack),
    preserve_override: cdktf.stringToTerraform(struct!.preserveOverride),
    provisional_invite_expiry_time: cdktf.numberToTerraform(struct!.provisionalInviteExpiryTime),
    publish_rate: cdktf.numberToTerraform(struct!.publishRate),
    publish_rate_track: cdktf.stringToTerraform(struct!.publishRateTrack),
    refer_rate: cdktf.numberToTerraform(struct!.referRate),
    refer_rate_track: cdktf.stringToTerraform(struct!.referRateTrack),
    register_contact_trace: cdktf.stringToTerraform(struct!.registerContactTrace),
    register_rate: cdktf.numberToTerraform(struct!.registerRate),
    register_rate_track: cdktf.stringToTerraform(struct!.registerRateTrack),
    rfc2543_branch: cdktf.stringToTerraform(struct!.rfc2543Branch),
    rtp: cdktf.stringToTerraform(struct!.rtp),
    ssl_algorithm: cdktf.stringToTerraform(struct!.sslAlgorithm),
    ssl_auth_client: cdktf.stringToTerraform(struct!.sslAuthClient),
    ssl_auth_server: cdktf.stringToTerraform(struct!.sslAuthServer),
    ssl_client_certificate: cdktf.stringToTerraform(struct!.sslClientCertificate),
    ssl_client_renegotiation: cdktf.stringToTerraform(struct!.sslClientRenegotiation),
    ssl_max_version: cdktf.stringToTerraform(struct!.sslMaxVersion),
    ssl_min_version: cdktf.stringToTerraform(struct!.sslMinVersion),
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
    ssl_pfs: cdktf.stringToTerraform(struct!.sslPfs),
    ssl_send_empty_frags: cdktf.stringToTerraform(struct!.sslSendEmptyFrags),
    ssl_server_certificate: cdktf.stringToTerraform(struct!.sslServerCertificate),
    status: cdktf.stringToTerraform(struct!.status),
    strict_register: cdktf.stringToTerraform(struct!.strictRegister),
    subscribe_rate: cdktf.numberToTerraform(struct!.subscribeRate),
    subscribe_rate_track: cdktf.stringToTerraform(struct!.subscribeRateTrack),
    unknown_header: cdktf.stringToTerraform(struct!.unknownHeader),
    update_rate: cdktf.numberToTerraform(struct!.updateRate),
    update_rate_track: cdktf.stringToTerraform(struct!.updateRateTrack),
  }
}


export function objectVoipProfileSipToHclTerraform(struct?: ObjectVoipProfileSipOutputReference | ObjectVoipProfileSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_rate: {
      value: cdktf.numberToHclTerraform(struct!.ackRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.ackRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ack: {
      value: cdktf.stringToHclTerraform(struct!.blockAck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_bye: {
      value: cdktf.stringToHclTerraform(struct!.blockBye),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_cancel: {
      value: cdktf.stringToHclTerraform(struct!.blockCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_geo_red_options: {
      value: cdktf.stringToHclTerraform(struct!.blockGeoRedOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_info: {
      value: cdktf.stringToHclTerraform(struct!.blockInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_invite: {
      value: cdktf.stringToHclTerraform(struct!.blockInvite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_long_lines: {
      value: cdktf.stringToHclTerraform(struct!.blockLongLines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_message: {
      value: cdktf.stringToHclTerraform(struct!.blockMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_notify: {
      value: cdktf.stringToHclTerraform(struct!.blockNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_options: {
      value: cdktf.stringToHclTerraform(struct!.blockOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_prack: {
      value: cdktf.stringToHclTerraform(struct!.blockPrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_publish: {
      value: cdktf.stringToHclTerraform(struct!.blockPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_refer: {
      value: cdktf.stringToHclTerraform(struct!.blockRefer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_register: {
      value: cdktf.stringToHclTerraform(struct!.blockRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_subscribe: {
      value: cdktf.stringToHclTerraform(struct!.blockSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_unknown: {
      value: cdktf.stringToHclTerraform(struct!.blockUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_update: {
      value: cdktf.stringToHclTerraform(struct!.blockUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bye_rate: {
      value: cdktf.numberToHclTerraform(struct!.byeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bye_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.byeRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.callIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.callKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancel_rate: {
      value: cdktf.numberToHclTerraform(struct!.cancelRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancel_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.cancelRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_fixup: {
      value: cdktf.stringToHclTerraform(struct!.contactFixup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_regex: {
      value: cdktf.stringToHclTerraform(struct!.contentTypeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hnt_restrict_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.hntRestrictSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosted_nat_traversal: {
      value: cdktf.stringToHclTerraform(struct!.hostedNatTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_rate: {
      value: cdktf.numberToHclTerraform(struct!.infoRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.infoRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invite_rate: {
      value: cdktf.numberToHclTerraform(struct!.inviteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invite_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.inviteRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips_rtp: {
      value: cdktf.stringToHclTerraform(struct!.ipsRtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_call_summary: {
      value: cdktf.stringToHclTerraform(struct!.logCallSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_violations: {
      value: cdktf.stringToHclTerraform(struct!.logViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_allow: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_call_id: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_contact: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_content_length: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_content_type: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_cseq: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderCseq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_expires: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderExpires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_from: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_max_forwards: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderMaxForwards),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_no_proxy_require: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderNoProxyRequire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_no_require: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderNoRequire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_p_asserted_identity: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderPAssertedIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_rack: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderRack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_record_route: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderRecordRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_route: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_rseq: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderRseq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_a: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_b: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_c: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpC),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_i: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpI),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_k: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpK),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_m: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpM),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_o: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpO),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_r: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpR),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_s: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpS),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_t: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpT),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_v: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpV),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_sdp_z: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderSdpZ),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_to: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_header_via: {
      value: cdktf.stringToHclTerraform(struct!.malformedHeaderVia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_request_line: {
      value: cdktf.stringToHclTerraform(struct!.malformedRequestLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_body_length: {
      value: cdktf.numberToHclTerraform(struct!.maxBodyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dialogs: {
      value: cdktf.numberToHclTerraform(struct!.maxDialogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_dialogs: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleDialogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_line_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_rate: {
      value: cdktf.numberToHclTerraform(struct!.messageRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.messageRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_port_range: {
      value: cdktf.stringToHclTerraform(struct!.natPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_trace: {
      value: cdktf.stringToHclTerraform(struct!.natTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_sdp_fixup: {
      value: cdktf.stringToHclTerraform(struct!.noSdpFixup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_rate: {
      value: cdktf.numberToHclTerraform(struct!.notifyRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.notifyRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_contact_pinhole: {
      value: cdktf.stringToHclTerraform(struct!.openContactPinhole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_record_route_pinhole: {
      value: cdktf.stringToHclTerraform(struct!.openRecordRoutePinhole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_register_pinhole: {
      value: cdktf.stringToHclTerraform(struct!.openRegisterPinhole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_via_pinhole: {
      value: cdktf.stringToHclTerraform(struct!.openViaPinhole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options_rate: {
      value: cdktf.numberToHclTerraform(struct!.optionsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.optionsRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prack_rate: {
      value: cdktf.numberToHclTerraform(struct!.prackRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prack_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.prackRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_override: {
      value: cdktf.stringToHclTerraform(struct!.preserveOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisional_invite_expiry_time: {
      value: cdktf.numberToHclTerraform(struct!.provisionalInviteExpiryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    publish_rate: {
      value: cdktf.numberToHclTerraform(struct!.publishRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    publish_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.publishRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refer_rate: {
      value: cdktf.numberToHclTerraform(struct!.referRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refer_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.referRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_contact_trace: {
      value: cdktf.stringToHclTerraform(struct!.registerContactTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_rate: {
      value: cdktf.numberToHclTerraform(struct!.registerRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    register_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.registerRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc2543_branch: {
      value: cdktf.stringToHclTerraform(struct!.rfc2543Branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rtp: {
      value: cdktf.stringToHclTerraform(struct!.rtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_auth_client: {
      value: cdktf.stringToHclTerraform(struct!.sslAuthClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_auth_server: {
      value: cdktf.stringToHclTerraform(struct!.sslAuthServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_renegotiation: {
      value: cdktf.stringToHclTerraform(struct!.sslClientRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_min_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_pfs: {
      value: cdktf.stringToHclTerraform(struct!.sslPfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_send_empty_frags: {
      value: cdktf.stringToHclTerraform(struct!.sslSendEmptyFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_server_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslServerCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_register: {
      value: cdktf.stringToHclTerraform(struct!.strictRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_rate: {
      value: cdktf.numberToHclTerraform(struct!.subscribeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subscribe_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.subscribeRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_header: {
      value: cdktf.stringToHclTerraform(struct!.unknownHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_rate: {
      value: cdktf.numberToHclTerraform(struct!.updateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_rate_track: {
      value: cdktf.stringToHclTerraform(struct!.updateRateTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVoipProfileSipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectVoipProfileSip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRate = this._ackRate;
    }
    if (this._ackRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRateTrack = this._ackRateTrack;
    }
    if (this._blockAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAck = this._blockAck;
    }
    if (this._blockBye !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockBye = this._blockBye;
    }
    if (this._blockCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockCancel = this._blockCancel;
    }
    if (this._blockGeoRedOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockGeoRedOptions = this._blockGeoRedOptions;
    }
    if (this._blockInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockInfo = this._blockInfo;
    }
    if (this._blockInvite !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockInvite = this._blockInvite;
    }
    if (this._blockLongLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockLongLines = this._blockLongLines;
    }
    if (this._blockMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMessage = this._blockMessage;
    }
    if (this._blockNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockNotify = this._blockNotify;
    }
    if (this._blockOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOptions = this._blockOptions;
    }
    if (this._blockPrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPrack = this._blockPrack;
    }
    if (this._blockPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublish = this._blockPublish;
    }
    if (this._blockRefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockRefer = this._blockRefer;
    }
    if (this._blockRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockRegister = this._blockRegister;
    }
    if (this._blockSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSubscribe = this._blockSubscribe;
    }
    if (this._blockUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUnknown = this._blockUnknown;
    }
    if (this._blockUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUpdate = this._blockUpdate;
    }
    if (this._byeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.byeRate = this._byeRate;
    }
    if (this._byeRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.byeRateTrack = this._byeRateTrack;
    }
    if (this._callIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.callIdRegex = this._callIdRegex;
    }
    if (this._callKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.callKeepalive = this._callKeepalive;
    }
    if (this._cancelRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelRate = this._cancelRate;
    }
    if (this._cancelRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelRateTrack = this._cancelRateTrack;
    }
    if (this._contactFixup !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactFixup = this._contactFixup;
    }
    if (this._contentTypeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeRegex = this._contentTypeRegex;
    }
    if (this._hntRestrictSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hntRestrictSourceIp = this._hntRestrictSourceIp;
    }
    if (this._hostedNatTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedNatTraversal = this._hostedNatTraversal;
    }
    if (this._infoRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoRate = this._infoRate;
    }
    if (this._infoRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoRateTrack = this._infoRateTrack;
    }
    if (this._inviteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRate = this._inviteRate;
    }
    if (this._inviteRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteRateTrack = this._inviteRateTrack;
    }
    if (this._ipsRtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsRtp = this._ipsRtp;
    }
    if (this._logCallSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCallSummary = this._logCallSummary;
    }
    if (this._logViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.logViolations = this._logViolations;
    }
    if (this._malformedHeaderAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderAllow = this._malformedHeaderAllow;
    }
    if (this._malformedHeaderCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderCallId = this._malformedHeaderCallId;
    }
    if (this._malformedHeaderContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderContact = this._malformedHeaderContact;
    }
    if (this._malformedHeaderContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderContentLength = this._malformedHeaderContentLength;
    }
    if (this._malformedHeaderContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderContentType = this._malformedHeaderContentType;
    }
    if (this._malformedHeaderCseq !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderCseq = this._malformedHeaderCseq;
    }
    if (this._malformedHeaderExpires !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderExpires = this._malformedHeaderExpires;
    }
    if (this._malformedHeaderFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderFrom = this._malformedHeaderFrom;
    }
    if (this._malformedHeaderMaxForwards !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderMaxForwards = this._malformedHeaderMaxForwards;
    }
    if (this._malformedHeaderNoProxyRequire !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderNoProxyRequire = this._malformedHeaderNoProxyRequire;
    }
    if (this._malformedHeaderNoRequire !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderNoRequire = this._malformedHeaderNoRequire;
    }
    if (this._malformedHeaderPAssertedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderPAssertedIdentity = this._malformedHeaderPAssertedIdentity;
    }
    if (this._malformedHeaderRack !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderRack = this._malformedHeaderRack;
    }
    if (this._malformedHeaderRecordRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderRecordRoute = this._malformedHeaderRecordRoute;
    }
    if (this._malformedHeaderRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderRoute = this._malformedHeaderRoute;
    }
    if (this._malformedHeaderRseq !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderRseq = this._malformedHeaderRseq;
    }
    if (this._malformedHeaderSdpA !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpA = this._malformedHeaderSdpA;
    }
    if (this._malformedHeaderSdpB !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpB = this._malformedHeaderSdpB;
    }
    if (this._malformedHeaderSdpC !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpC = this._malformedHeaderSdpC;
    }
    if (this._malformedHeaderSdpI !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpI = this._malformedHeaderSdpI;
    }
    if (this._malformedHeaderSdpK !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpK = this._malformedHeaderSdpK;
    }
    if (this._malformedHeaderSdpM !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpM = this._malformedHeaderSdpM;
    }
    if (this._malformedHeaderSdpO !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpO = this._malformedHeaderSdpO;
    }
    if (this._malformedHeaderSdpR !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpR = this._malformedHeaderSdpR;
    }
    if (this._malformedHeaderSdpS !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpS = this._malformedHeaderSdpS;
    }
    if (this._malformedHeaderSdpT !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpT = this._malformedHeaderSdpT;
    }
    if (this._malformedHeaderSdpV !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpV = this._malformedHeaderSdpV;
    }
    if (this._malformedHeaderSdpZ !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderSdpZ = this._malformedHeaderSdpZ;
    }
    if (this._malformedHeaderTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderTo = this._malformedHeaderTo;
    }
    if (this._malformedHeaderVia !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHeaderVia = this._malformedHeaderVia;
    }
    if (this._malformedRequestLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedRequestLine = this._malformedRequestLine;
    }
    if (this._maxBodyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBodyLength = this._maxBodyLength;
    }
    if (this._maxDialogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDialogs = this._maxDialogs;
    }
    if (this._maxIdleDialogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleDialogs = this._maxIdleDialogs;
    }
    if (this._maxLineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLineLength = this._maxLineLength;
    }
    if (this._messageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRate = this._messageRate;
    }
    if (this._messageRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRateTrack = this._messageRateTrack;
    }
    if (this._natPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortRange = this._natPortRange;
    }
    if (this._natTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTrace = this._natTrace;
    }
    if (this._noSdpFixup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSdpFixup = this._noSdpFixup;
    }
    if (this._notifyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyRate = this._notifyRate;
    }
    if (this._notifyRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyRateTrack = this._notifyRateTrack;
    }
    if (this._openContactPinhole !== undefined) {
      hasAnyValues = true;
      internalValueResult.openContactPinhole = this._openContactPinhole;
    }
    if (this._openRecordRoutePinhole !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRecordRoutePinhole = this._openRecordRoutePinhole;
    }
    if (this._openRegisterPinhole !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRegisterPinhole = this._openRegisterPinhole;
    }
    if (this._openViaPinhole !== undefined) {
      hasAnyValues = true;
      internalValueResult.openViaPinhole = this._openViaPinhole;
    }
    if (this._optionsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsRate = this._optionsRate;
    }
    if (this._optionsRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsRateTrack = this._optionsRateTrack;
    }
    if (this._prackRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prackRate = this._prackRate;
    }
    if (this._prackRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.prackRateTrack = this._prackRateTrack;
    }
    if (this._preserveOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveOverride = this._preserveOverride;
    }
    if (this._provisionalInviteExpiryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionalInviteExpiryTime = this._provisionalInviteExpiryTime;
    }
    if (this._publishRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishRate = this._publishRate;
    }
    if (this._publishRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishRateTrack = this._publishRateTrack;
    }
    if (this._referRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.referRate = this._referRate;
    }
    if (this._referRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.referRateTrack = this._referRateTrack;
    }
    if (this._registerContactTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerContactTrace = this._registerContactTrace;
    }
    if (this._registerRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerRate = this._registerRate;
    }
    if (this._registerRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerRateTrack = this._registerRateTrack;
    }
    if (this._rfc2543Branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc2543Branch = this._rfc2543Branch;
    }
    if (this._rtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtp = this._rtp;
    }
    if (this._sslAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAlgorithm = this._sslAlgorithm;
    }
    if (this._sslAuthClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAuthClient = this._sslAuthClient;
    }
    if (this._sslAuthServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAuthServer = this._sslAuthServer;
    }
    if (this._sslClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificate = this._sslClientCertificate;
    }
    if (this._sslClientRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientRenegotiation = this._sslClientRenegotiation;
    }
    if (this._sslMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMaxVersion = this._sslMaxVersion;
    }
    if (this._sslMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMinVersion = this._sslMinVersion;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    if (this._sslPfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPfs = this._sslPfs;
    }
    if (this._sslSendEmptyFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSendEmptyFrags = this._sslSendEmptyFrags;
    }
    if (this._sslServerCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerCertificate = this._sslServerCertificate;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strictRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictRegister = this._strictRegister;
    }
    if (this._subscribeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeRate = this._subscribeRate;
    }
    if (this._subscribeRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeRateTrack = this._subscribeRateTrack;
    }
    if (this._unknownHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownHeader = this._unknownHeader;
    }
    if (this._updateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateRate = this._updateRate;
    }
    if (this._updateRateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateRateTrack = this._updateRateTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVoipProfileSip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackRate = undefined;
      this._ackRateTrack = undefined;
      this._blockAck = undefined;
      this._blockBye = undefined;
      this._blockCancel = undefined;
      this._blockGeoRedOptions = undefined;
      this._blockInfo = undefined;
      this._blockInvite = undefined;
      this._blockLongLines = undefined;
      this._blockMessage = undefined;
      this._blockNotify = undefined;
      this._blockOptions = undefined;
      this._blockPrack = undefined;
      this._blockPublish = undefined;
      this._blockRefer = undefined;
      this._blockRegister = undefined;
      this._blockSubscribe = undefined;
      this._blockUnknown = undefined;
      this._blockUpdate = undefined;
      this._byeRate = undefined;
      this._byeRateTrack = undefined;
      this._callIdRegex = undefined;
      this._callKeepalive = undefined;
      this._cancelRate = undefined;
      this._cancelRateTrack = undefined;
      this._contactFixup = undefined;
      this._contentTypeRegex = undefined;
      this._hntRestrictSourceIp = undefined;
      this._hostedNatTraversal = undefined;
      this._infoRate = undefined;
      this._infoRateTrack = undefined;
      this._inviteRate = undefined;
      this._inviteRateTrack = undefined;
      this._ipsRtp = undefined;
      this._logCallSummary = undefined;
      this._logViolations = undefined;
      this._malformedHeaderAllow = undefined;
      this._malformedHeaderCallId = undefined;
      this._malformedHeaderContact = undefined;
      this._malformedHeaderContentLength = undefined;
      this._malformedHeaderContentType = undefined;
      this._malformedHeaderCseq = undefined;
      this._malformedHeaderExpires = undefined;
      this._malformedHeaderFrom = undefined;
      this._malformedHeaderMaxForwards = undefined;
      this._malformedHeaderNoProxyRequire = undefined;
      this._malformedHeaderNoRequire = undefined;
      this._malformedHeaderPAssertedIdentity = undefined;
      this._malformedHeaderRack = undefined;
      this._malformedHeaderRecordRoute = undefined;
      this._malformedHeaderRoute = undefined;
      this._malformedHeaderRseq = undefined;
      this._malformedHeaderSdpA = undefined;
      this._malformedHeaderSdpB = undefined;
      this._malformedHeaderSdpC = undefined;
      this._malformedHeaderSdpI = undefined;
      this._malformedHeaderSdpK = undefined;
      this._malformedHeaderSdpM = undefined;
      this._malformedHeaderSdpO = undefined;
      this._malformedHeaderSdpR = undefined;
      this._malformedHeaderSdpS = undefined;
      this._malformedHeaderSdpT = undefined;
      this._malformedHeaderSdpV = undefined;
      this._malformedHeaderSdpZ = undefined;
      this._malformedHeaderTo = undefined;
      this._malformedHeaderVia = undefined;
      this._malformedRequestLine = undefined;
      this._maxBodyLength = undefined;
      this._maxDialogs = undefined;
      this._maxIdleDialogs = undefined;
      this._maxLineLength = undefined;
      this._messageRate = undefined;
      this._messageRateTrack = undefined;
      this._natPortRange = undefined;
      this._natTrace = undefined;
      this._noSdpFixup = undefined;
      this._notifyRate = undefined;
      this._notifyRateTrack = undefined;
      this._openContactPinhole = undefined;
      this._openRecordRoutePinhole = undefined;
      this._openRegisterPinhole = undefined;
      this._openViaPinhole = undefined;
      this._optionsRate = undefined;
      this._optionsRateTrack = undefined;
      this._prackRate = undefined;
      this._prackRateTrack = undefined;
      this._preserveOverride = undefined;
      this._provisionalInviteExpiryTime = undefined;
      this._publishRate = undefined;
      this._publishRateTrack = undefined;
      this._referRate = undefined;
      this._referRateTrack = undefined;
      this._registerContactTrace = undefined;
      this._registerRate = undefined;
      this._registerRateTrack = undefined;
      this._rfc2543Branch = undefined;
      this._rtp = undefined;
      this._sslAlgorithm = undefined;
      this._sslAuthClient = undefined;
      this._sslAuthServer = undefined;
      this._sslClientCertificate = undefined;
      this._sslClientRenegotiation = undefined;
      this._sslMaxVersion = undefined;
      this._sslMinVersion = undefined;
      this._sslMode = undefined;
      this._sslPfs = undefined;
      this._sslSendEmptyFrags = undefined;
      this._sslServerCertificate = undefined;
      this._status = undefined;
      this._strictRegister = undefined;
      this._subscribeRate = undefined;
      this._subscribeRateTrack = undefined;
      this._unknownHeader = undefined;
      this._updateRate = undefined;
      this._updateRateTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackRate = value.ackRate;
      this._ackRateTrack = value.ackRateTrack;
      this._blockAck = value.blockAck;
      this._blockBye = value.blockBye;
      this._blockCancel = value.blockCancel;
      this._blockGeoRedOptions = value.blockGeoRedOptions;
      this._blockInfo = value.blockInfo;
      this._blockInvite = value.blockInvite;
      this._blockLongLines = value.blockLongLines;
      this._blockMessage = value.blockMessage;
      this._blockNotify = value.blockNotify;
      this._blockOptions = value.blockOptions;
      this._blockPrack = value.blockPrack;
      this._blockPublish = value.blockPublish;
      this._blockRefer = value.blockRefer;
      this._blockRegister = value.blockRegister;
      this._blockSubscribe = value.blockSubscribe;
      this._blockUnknown = value.blockUnknown;
      this._blockUpdate = value.blockUpdate;
      this._byeRate = value.byeRate;
      this._byeRateTrack = value.byeRateTrack;
      this._callIdRegex = value.callIdRegex;
      this._callKeepalive = value.callKeepalive;
      this._cancelRate = value.cancelRate;
      this._cancelRateTrack = value.cancelRateTrack;
      this._contactFixup = value.contactFixup;
      this._contentTypeRegex = value.contentTypeRegex;
      this._hntRestrictSourceIp = value.hntRestrictSourceIp;
      this._hostedNatTraversal = value.hostedNatTraversal;
      this._infoRate = value.infoRate;
      this._infoRateTrack = value.infoRateTrack;
      this._inviteRate = value.inviteRate;
      this._inviteRateTrack = value.inviteRateTrack;
      this._ipsRtp = value.ipsRtp;
      this._logCallSummary = value.logCallSummary;
      this._logViolations = value.logViolations;
      this._malformedHeaderAllow = value.malformedHeaderAllow;
      this._malformedHeaderCallId = value.malformedHeaderCallId;
      this._malformedHeaderContact = value.malformedHeaderContact;
      this._malformedHeaderContentLength = value.malformedHeaderContentLength;
      this._malformedHeaderContentType = value.malformedHeaderContentType;
      this._malformedHeaderCseq = value.malformedHeaderCseq;
      this._malformedHeaderExpires = value.malformedHeaderExpires;
      this._malformedHeaderFrom = value.malformedHeaderFrom;
      this._malformedHeaderMaxForwards = value.malformedHeaderMaxForwards;
      this._malformedHeaderNoProxyRequire = value.malformedHeaderNoProxyRequire;
      this._malformedHeaderNoRequire = value.malformedHeaderNoRequire;
      this._malformedHeaderPAssertedIdentity = value.malformedHeaderPAssertedIdentity;
      this._malformedHeaderRack = value.malformedHeaderRack;
      this._malformedHeaderRecordRoute = value.malformedHeaderRecordRoute;
      this._malformedHeaderRoute = value.malformedHeaderRoute;
      this._malformedHeaderRseq = value.malformedHeaderRseq;
      this._malformedHeaderSdpA = value.malformedHeaderSdpA;
      this._malformedHeaderSdpB = value.malformedHeaderSdpB;
      this._malformedHeaderSdpC = value.malformedHeaderSdpC;
      this._malformedHeaderSdpI = value.malformedHeaderSdpI;
      this._malformedHeaderSdpK = value.malformedHeaderSdpK;
      this._malformedHeaderSdpM = value.malformedHeaderSdpM;
      this._malformedHeaderSdpO = value.malformedHeaderSdpO;
      this._malformedHeaderSdpR = value.malformedHeaderSdpR;
      this._malformedHeaderSdpS = value.malformedHeaderSdpS;
      this._malformedHeaderSdpT = value.malformedHeaderSdpT;
      this._malformedHeaderSdpV = value.malformedHeaderSdpV;
      this._malformedHeaderSdpZ = value.malformedHeaderSdpZ;
      this._malformedHeaderTo = value.malformedHeaderTo;
      this._malformedHeaderVia = value.malformedHeaderVia;
      this._malformedRequestLine = value.malformedRequestLine;
      this._maxBodyLength = value.maxBodyLength;
      this._maxDialogs = value.maxDialogs;
      this._maxIdleDialogs = value.maxIdleDialogs;
      this._maxLineLength = value.maxLineLength;
      this._messageRate = value.messageRate;
      this._messageRateTrack = value.messageRateTrack;
      this._natPortRange = value.natPortRange;
      this._natTrace = value.natTrace;
      this._noSdpFixup = value.noSdpFixup;
      this._notifyRate = value.notifyRate;
      this._notifyRateTrack = value.notifyRateTrack;
      this._openContactPinhole = value.openContactPinhole;
      this._openRecordRoutePinhole = value.openRecordRoutePinhole;
      this._openRegisterPinhole = value.openRegisterPinhole;
      this._openViaPinhole = value.openViaPinhole;
      this._optionsRate = value.optionsRate;
      this._optionsRateTrack = value.optionsRateTrack;
      this._prackRate = value.prackRate;
      this._prackRateTrack = value.prackRateTrack;
      this._preserveOverride = value.preserveOverride;
      this._provisionalInviteExpiryTime = value.provisionalInviteExpiryTime;
      this._publishRate = value.publishRate;
      this._publishRateTrack = value.publishRateTrack;
      this._referRate = value.referRate;
      this._referRateTrack = value.referRateTrack;
      this._registerContactTrace = value.registerContactTrace;
      this._registerRate = value.registerRate;
      this._registerRateTrack = value.registerRateTrack;
      this._rfc2543Branch = value.rfc2543Branch;
      this._rtp = value.rtp;
      this._sslAlgorithm = value.sslAlgorithm;
      this._sslAuthClient = value.sslAuthClient;
      this._sslAuthServer = value.sslAuthServer;
      this._sslClientCertificate = value.sslClientCertificate;
      this._sslClientRenegotiation = value.sslClientRenegotiation;
      this._sslMaxVersion = value.sslMaxVersion;
      this._sslMinVersion = value.sslMinVersion;
      this._sslMode = value.sslMode;
      this._sslPfs = value.sslPfs;
      this._sslSendEmptyFrags = value.sslSendEmptyFrags;
      this._sslServerCertificate = value.sslServerCertificate;
      this._status = value.status;
      this._strictRegister = value.strictRegister;
      this._subscribeRate = value.subscribeRate;
      this._subscribeRateTrack = value.subscribeRateTrack;
      this._unknownHeader = value.unknownHeader;
      this._updateRate = value.updateRate;
      this._updateRateTrack = value.updateRateTrack;
    }
  }

  // ack_rate - computed: false, optional: true, required: false
  private _ackRate?: number; 
  public get ackRate() {
    return this.getNumberAttribute('ack_rate');
  }
  public set ackRate(value: number) {
    this._ackRate = value;
  }
  public resetAckRate() {
    this._ackRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRateInput() {
    return this._ackRate;
  }

  // ack_rate_track - computed: true, optional: true, required: false
  private _ackRateTrack?: string; 
  public get ackRateTrack() {
    return this.getStringAttribute('ack_rate_track');
  }
  public set ackRateTrack(value: string) {
    this._ackRateTrack = value;
  }
  public resetAckRateTrack() {
    this._ackRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRateTrackInput() {
    return this._ackRateTrack;
  }

  // block_ack - computed: true, optional: true, required: false
  private _blockAck?: string; 
  public get blockAck() {
    return this.getStringAttribute('block_ack');
  }
  public set blockAck(value: string) {
    this._blockAck = value;
  }
  public resetBlockAck() {
    this._blockAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAckInput() {
    return this._blockAck;
  }

  // block_bye - computed: true, optional: true, required: false
  private _blockBye?: string; 
  public get blockBye() {
    return this.getStringAttribute('block_bye');
  }
  public set blockBye(value: string) {
    this._blockBye = value;
  }
  public resetBlockBye() {
    this._blockBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockByeInput() {
    return this._blockBye;
  }

  // block_cancel - computed: true, optional: true, required: false
  private _blockCancel?: string; 
  public get blockCancel() {
    return this.getStringAttribute('block_cancel');
  }
  public set blockCancel(value: string) {
    this._blockCancel = value;
  }
  public resetBlockCancel() {
    this._blockCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCancelInput() {
    return this._blockCancel;
  }

  // block_geo_red_options - computed: true, optional: true, required: false
  private _blockGeoRedOptions?: string; 
  public get blockGeoRedOptions() {
    return this.getStringAttribute('block_geo_red_options');
  }
  public set blockGeoRedOptions(value: string) {
    this._blockGeoRedOptions = value;
  }
  public resetBlockGeoRedOptions() {
    this._blockGeoRedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockGeoRedOptionsInput() {
    return this._blockGeoRedOptions;
  }

  // block_info - computed: true, optional: true, required: false
  private _blockInfo?: string; 
  public get blockInfo() {
    return this.getStringAttribute('block_info');
  }
  public set blockInfo(value: string) {
    this._blockInfo = value;
  }
  public resetBlockInfo() {
    this._blockInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInfoInput() {
    return this._blockInfo;
  }

  // block_invite - computed: true, optional: true, required: false
  private _blockInvite?: string; 
  public get blockInvite() {
    return this.getStringAttribute('block_invite');
  }
  public set blockInvite(value: string) {
    this._blockInvite = value;
  }
  public resetBlockInvite() {
    this._blockInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInviteInput() {
    return this._blockInvite;
  }

  // block_long_lines - computed: true, optional: true, required: false
  private _blockLongLines?: string; 
  public get blockLongLines() {
    return this.getStringAttribute('block_long_lines');
  }
  public set blockLongLines(value: string) {
    this._blockLongLines = value;
  }
  public resetBlockLongLines() {
    this._blockLongLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockLongLinesInput() {
    return this._blockLongLines;
  }

  // block_message - computed: true, optional: true, required: false
  private _blockMessage?: string; 
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }
  public set blockMessage(value: string) {
    this._blockMessage = value;
  }
  public resetBlockMessage() {
    this._blockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage;
  }

  // block_notify - computed: true, optional: true, required: false
  private _blockNotify?: string; 
  public get blockNotify() {
    return this.getStringAttribute('block_notify');
  }
  public set blockNotify(value: string) {
    this._blockNotify = value;
  }
  public resetBlockNotify() {
    this._blockNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNotifyInput() {
    return this._blockNotify;
  }

  // block_options - computed: true, optional: true, required: false
  private _blockOptions?: string; 
  public get blockOptions() {
    return this.getStringAttribute('block_options');
  }
  public set blockOptions(value: string) {
    this._blockOptions = value;
  }
  public resetBlockOptions() {
    this._blockOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOptionsInput() {
    return this._blockOptions;
  }

  // block_prack - computed: true, optional: true, required: false
  private _blockPrack?: string; 
  public get blockPrack() {
    return this.getStringAttribute('block_prack');
  }
  public set blockPrack(value: string) {
    this._blockPrack = value;
  }
  public resetBlockPrack() {
    this._blockPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPrackInput() {
    return this._blockPrack;
  }

  // block_publish - computed: true, optional: true, required: false
  private _blockPublish?: string; 
  public get blockPublish() {
    return this.getStringAttribute('block_publish');
  }
  public set blockPublish(value: string) {
    this._blockPublish = value;
  }
  public resetBlockPublish() {
    this._blockPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublishInput() {
    return this._blockPublish;
  }

  // block_refer - computed: true, optional: true, required: false
  private _blockRefer?: string; 
  public get blockRefer() {
    return this.getStringAttribute('block_refer');
  }
  public set blockRefer(value: string) {
    this._blockRefer = value;
  }
  public resetBlockRefer() {
    this._blockRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReferInput() {
    return this._blockRefer;
  }

  // block_register - computed: true, optional: true, required: false
  private _blockRegister?: string; 
  public get blockRegister() {
    return this.getStringAttribute('block_register');
  }
  public set blockRegister(value: string) {
    this._blockRegister = value;
  }
  public resetBlockRegister() {
    this._blockRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRegisterInput() {
    return this._blockRegister;
  }

  // block_subscribe - computed: true, optional: true, required: false
  private _blockSubscribe?: string; 
  public get blockSubscribe() {
    return this.getStringAttribute('block_subscribe');
  }
  public set blockSubscribe(value: string) {
    this._blockSubscribe = value;
  }
  public resetBlockSubscribe() {
    this._blockSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSubscribeInput() {
    return this._blockSubscribe;
  }

  // block_unknown - computed: true, optional: true, required: false
  private _blockUnknown?: string; 
  public get blockUnknown() {
    return this.getStringAttribute('block_unknown');
  }
  public set blockUnknown(value: string) {
    this._blockUnknown = value;
  }
  public resetBlockUnknown() {
    this._blockUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnknownInput() {
    return this._blockUnknown;
  }

  // block_update - computed: true, optional: true, required: false
  private _blockUpdate?: string; 
  public get blockUpdate() {
    return this.getStringAttribute('block_update');
  }
  public set blockUpdate(value: string) {
    this._blockUpdate = value;
  }
  public resetBlockUpdate() {
    this._blockUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUpdateInput() {
    return this._blockUpdate;
  }

  // bye_rate - computed: false, optional: true, required: false
  private _byeRate?: number; 
  public get byeRate() {
    return this.getNumberAttribute('bye_rate');
  }
  public set byeRate(value: number) {
    this._byeRate = value;
  }
  public resetByeRate() {
    this._byeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeRateInput() {
    return this._byeRate;
  }

  // bye_rate_track - computed: true, optional: true, required: false
  private _byeRateTrack?: string; 
  public get byeRateTrack() {
    return this.getStringAttribute('bye_rate_track');
  }
  public set byeRateTrack(value: string) {
    this._byeRateTrack = value;
  }
  public resetByeRateTrack() {
    this._byeRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeRateTrackInput() {
    return this._byeRateTrack;
  }

  // call_id_regex - computed: false, optional: true, required: false
  private _callIdRegex?: string; 
  public get callIdRegex() {
    return this.getStringAttribute('call_id_regex');
  }
  public set callIdRegex(value: string) {
    this._callIdRegex = value;
  }
  public resetCallIdRegex() {
    this._callIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callIdRegexInput() {
    return this._callIdRegex;
  }

  // call_keepalive - computed: false, optional: true, required: false
  private _callKeepalive?: number; 
  public get callKeepalive() {
    return this.getNumberAttribute('call_keepalive');
  }
  public set callKeepalive(value: number) {
    this._callKeepalive = value;
  }
  public resetCallKeepalive() {
    this._callKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callKeepaliveInput() {
    return this._callKeepalive;
  }

  // cancel_rate - computed: false, optional: true, required: false
  private _cancelRate?: number; 
  public get cancelRate() {
    return this.getNumberAttribute('cancel_rate');
  }
  public set cancelRate(value: number) {
    this._cancelRate = value;
  }
  public resetCancelRate() {
    this._cancelRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelRateInput() {
    return this._cancelRate;
  }

  // cancel_rate_track - computed: true, optional: true, required: false
  private _cancelRateTrack?: string; 
  public get cancelRateTrack() {
    return this.getStringAttribute('cancel_rate_track');
  }
  public set cancelRateTrack(value: string) {
    this._cancelRateTrack = value;
  }
  public resetCancelRateTrack() {
    this._cancelRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelRateTrackInput() {
    return this._cancelRateTrack;
  }

  // contact_fixup - computed: true, optional: true, required: false
  private _contactFixup?: string; 
  public get contactFixup() {
    return this.getStringAttribute('contact_fixup');
  }
  public set contactFixup(value: string) {
    this._contactFixup = value;
  }
  public resetContactFixup() {
    this._contactFixup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFixupInput() {
    return this._contactFixup;
  }

  // content_type_regex - computed: false, optional: true, required: false
  private _contentTypeRegex?: string; 
  public get contentTypeRegex() {
    return this.getStringAttribute('content_type_regex');
  }
  public set contentTypeRegex(value: string) {
    this._contentTypeRegex = value;
  }
  public resetContentTypeRegex() {
    this._contentTypeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeRegexInput() {
    return this._contentTypeRegex;
  }

  // hnt_restrict_source_ip - computed: true, optional: true, required: false
  private _hntRestrictSourceIp?: string; 
  public get hntRestrictSourceIp() {
    return this.getStringAttribute('hnt_restrict_source_ip');
  }
  public set hntRestrictSourceIp(value: string) {
    this._hntRestrictSourceIp = value;
  }
  public resetHntRestrictSourceIp() {
    this._hntRestrictSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hntRestrictSourceIpInput() {
    return this._hntRestrictSourceIp;
  }

  // hosted_nat_traversal - computed: true, optional: true, required: false
  private _hostedNatTraversal?: string; 
  public get hostedNatTraversal() {
    return this.getStringAttribute('hosted_nat_traversal');
  }
  public set hostedNatTraversal(value: string) {
    this._hostedNatTraversal = value;
  }
  public resetHostedNatTraversal() {
    this._hostedNatTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedNatTraversalInput() {
    return this._hostedNatTraversal;
  }

  // info_rate - computed: false, optional: true, required: false
  private _infoRate?: number; 
  public get infoRate() {
    return this.getNumberAttribute('info_rate');
  }
  public set infoRate(value: number) {
    this._infoRate = value;
  }
  public resetInfoRate() {
    this._infoRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoRateInput() {
    return this._infoRate;
  }

  // info_rate_track - computed: true, optional: true, required: false
  private _infoRateTrack?: string; 
  public get infoRateTrack() {
    return this.getStringAttribute('info_rate_track');
  }
  public set infoRateTrack(value: string) {
    this._infoRateTrack = value;
  }
  public resetInfoRateTrack() {
    this._infoRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoRateTrackInput() {
    return this._infoRateTrack;
  }

  // invite_rate - computed: false, optional: true, required: false
  private _inviteRate?: number; 
  public get inviteRate() {
    return this.getNumberAttribute('invite_rate');
  }
  public set inviteRate(value: number) {
    this._inviteRate = value;
  }
  public resetInviteRate() {
    this._inviteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRateInput() {
    return this._inviteRate;
  }

  // invite_rate_track - computed: true, optional: true, required: false
  private _inviteRateTrack?: string; 
  public get inviteRateTrack() {
    return this.getStringAttribute('invite_rate_track');
  }
  public set inviteRateTrack(value: string) {
    this._inviteRateTrack = value;
  }
  public resetInviteRateTrack() {
    this._inviteRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteRateTrackInput() {
    return this._inviteRateTrack;
  }

  // ips_rtp - computed: true, optional: true, required: false
  private _ipsRtp?: string; 
  public get ipsRtp() {
    return this.getStringAttribute('ips_rtp');
  }
  public set ipsRtp(value: string) {
    this._ipsRtp = value;
  }
  public resetIpsRtp() {
    this._ipsRtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsRtpInput() {
    return this._ipsRtp;
  }

  // log_call_summary - computed: true, optional: true, required: false
  private _logCallSummary?: string; 
  public get logCallSummary() {
    return this.getStringAttribute('log_call_summary');
  }
  public set logCallSummary(value: string) {
    this._logCallSummary = value;
  }
  public resetLogCallSummary() {
    this._logCallSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCallSummaryInput() {
    return this._logCallSummary;
  }

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
  }

  // malformed_header_allow - computed: true, optional: true, required: false
  private _malformedHeaderAllow?: string; 
  public get malformedHeaderAllow() {
    return this.getStringAttribute('malformed_header_allow');
  }
  public set malformedHeaderAllow(value: string) {
    this._malformedHeaderAllow = value;
  }
  public resetMalformedHeaderAllow() {
    this._malformedHeaderAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderAllowInput() {
    return this._malformedHeaderAllow;
  }

  // malformed_header_call_id - computed: true, optional: true, required: false
  private _malformedHeaderCallId?: string; 
  public get malformedHeaderCallId() {
    return this.getStringAttribute('malformed_header_call_id');
  }
  public set malformedHeaderCallId(value: string) {
    this._malformedHeaderCallId = value;
  }
  public resetMalformedHeaderCallId() {
    this._malformedHeaderCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderCallIdInput() {
    return this._malformedHeaderCallId;
  }

  // malformed_header_contact - computed: true, optional: true, required: false
  private _malformedHeaderContact?: string; 
  public get malformedHeaderContact() {
    return this.getStringAttribute('malformed_header_contact');
  }
  public set malformedHeaderContact(value: string) {
    this._malformedHeaderContact = value;
  }
  public resetMalformedHeaderContact() {
    this._malformedHeaderContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContactInput() {
    return this._malformedHeaderContact;
  }

  // malformed_header_content_length - computed: true, optional: true, required: false
  private _malformedHeaderContentLength?: string; 
  public get malformedHeaderContentLength() {
    return this.getStringAttribute('malformed_header_content_length');
  }
  public set malformedHeaderContentLength(value: string) {
    this._malformedHeaderContentLength = value;
  }
  public resetMalformedHeaderContentLength() {
    this._malformedHeaderContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContentLengthInput() {
    return this._malformedHeaderContentLength;
  }

  // malformed_header_content_type - computed: true, optional: true, required: false
  private _malformedHeaderContentType?: string; 
  public get malformedHeaderContentType() {
    return this.getStringAttribute('malformed_header_content_type');
  }
  public set malformedHeaderContentType(value: string) {
    this._malformedHeaderContentType = value;
  }
  public resetMalformedHeaderContentType() {
    this._malformedHeaderContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderContentTypeInput() {
    return this._malformedHeaderContentType;
  }

  // malformed_header_cseq - computed: true, optional: true, required: false
  private _malformedHeaderCseq?: string; 
  public get malformedHeaderCseq() {
    return this.getStringAttribute('malformed_header_cseq');
  }
  public set malformedHeaderCseq(value: string) {
    this._malformedHeaderCseq = value;
  }
  public resetMalformedHeaderCseq() {
    this._malformedHeaderCseq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderCseqInput() {
    return this._malformedHeaderCseq;
  }

  // malformed_header_expires - computed: true, optional: true, required: false
  private _malformedHeaderExpires?: string; 
  public get malformedHeaderExpires() {
    return this.getStringAttribute('malformed_header_expires');
  }
  public set malformedHeaderExpires(value: string) {
    this._malformedHeaderExpires = value;
  }
  public resetMalformedHeaderExpires() {
    this._malformedHeaderExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderExpiresInput() {
    return this._malformedHeaderExpires;
  }

  // malformed_header_from - computed: true, optional: true, required: false
  private _malformedHeaderFrom?: string; 
  public get malformedHeaderFrom() {
    return this.getStringAttribute('malformed_header_from');
  }
  public set malformedHeaderFrom(value: string) {
    this._malformedHeaderFrom = value;
  }
  public resetMalformedHeaderFrom() {
    this._malformedHeaderFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderFromInput() {
    return this._malformedHeaderFrom;
  }

  // malformed_header_max_forwards - computed: true, optional: true, required: false
  private _malformedHeaderMaxForwards?: string; 
  public get malformedHeaderMaxForwards() {
    return this.getStringAttribute('malformed_header_max_forwards');
  }
  public set malformedHeaderMaxForwards(value: string) {
    this._malformedHeaderMaxForwards = value;
  }
  public resetMalformedHeaderMaxForwards() {
    this._malformedHeaderMaxForwards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderMaxForwardsInput() {
    return this._malformedHeaderMaxForwards;
  }

  // malformed_header_no_proxy_require - computed: true, optional: true, required: false
  private _malformedHeaderNoProxyRequire?: string; 
  public get malformedHeaderNoProxyRequire() {
    return this.getStringAttribute('malformed_header_no_proxy_require');
  }
  public set malformedHeaderNoProxyRequire(value: string) {
    this._malformedHeaderNoProxyRequire = value;
  }
  public resetMalformedHeaderNoProxyRequire() {
    this._malformedHeaderNoProxyRequire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderNoProxyRequireInput() {
    return this._malformedHeaderNoProxyRequire;
  }

  // malformed_header_no_require - computed: true, optional: true, required: false
  private _malformedHeaderNoRequire?: string; 
  public get malformedHeaderNoRequire() {
    return this.getStringAttribute('malformed_header_no_require');
  }
  public set malformedHeaderNoRequire(value: string) {
    this._malformedHeaderNoRequire = value;
  }
  public resetMalformedHeaderNoRequire() {
    this._malformedHeaderNoRequire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderNoRequireInput() {
    return this._malformedHeaderNoRequire;
  }

  // malformed_header_p_asserted_identity - computed: true, optional: true, required: false
  private _malformedHeaderPAssertedIdentity?: string; 
  public get malformedHeaderPAssertedIdentity() {
    return this.getStringAttribute('malformed_header_p_asserted_identity');
  }
  public set malformedHeaderPAssertedIdentity(value: string) {
    this._malformedHeaderPAssertedIdentity = value;
  }
  public resetMalformedHeaderPAssertedIdentity() {
    this._malformedHeaderPAssertedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderPAssertedIdentityInput() {
    return this._malformedHeaderPAssertedIdentity;
  }

  // malformed_header_rack - computed: true, optional: true, required: false
  private _malformedHeaderRack?: string; 
  public get malformedHeaderRack() {
    return this.getStringAttribute('malformed_header_rack');
  }
  public set malformedHeaderRack(value: string) {
    this._malformedHeaderRack = value;
  }
  public resetMalformedHeaderRack() {
    this._malformedHeaderRack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRackInput() {
    return this._malformedHeaderRack;
  }

  // malformed_header_record_route - computed: true, optional: true, required: false
  private _malformedHeaderRecordRoute?: string; 
  public get malformedHeaderRecordRoute() {
    return this.getStringAttribute('malformed_header_record_route');
  }
  public set malformedHeaderRecordRoute(value: string) {
    this._malformedHeaderRecordRoute = value;
  }
  public resetMalformedHeaderRecordRoute() {
    this._malformedHeaderRecordRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRecordRouteInput() {
    return this._malformedHeaderRecordRoute;
  }

  // malformed_header_route - computed: true, optional: true, required: false
  private _malformedHeaderRoute?: string; 
  public get malformedHeaderRoute() {
    return this.getStringAttribute('malformed_header_route');
  }
  public set malformedHeaderRoute(value: string) {
    this._malformedHeaderRoute = value;
  }
  public resetMalformedHeaderRoute() {
    this._malformedHeaderRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRouteInput() {
    return this._malformedHeaderRoute;
  }

  // malformed_header_rseq - computed: true, optional: true, required: false
  private _malformedHeaderRseq?: string; 
  public get malformedHeaderRseq() {
    return this.getStringAttribute('malformed_header_rseq');
  }
  public set malformedHeaderRseq(value: string) {
    this._malformedHeaderRseq = value;
  }
  public resetMalformedHeaderRseq() {
    this._malformedHeaderRseq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderRseqInput() {
    return this._malformedHeaderRseq;
  }

  // malformed_header_sdp_a - computed: true, optional: true, required: false
  private _malformedHeaderSdpA?: string; 
  public get malformedHeaderSdpA() {
    return this.getStringAttribute('malformed_header_sdp_a');
  }
  public set malformedHeaderSdpA(value: string) {
    this._malformedHeaderSdpA = value;
  }
  public resetMalformedHeaderSdpA() {
    this._malformedHeaderSdpA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpAInput() {
    return this._malformedHeaderSdpA;
  }

  // malformed_header_sdp_b - computed: true, optional: true, required: false
  private _malformedHeaderSdpB?: string; 
  public get malformedHeaderSdpB() {
    return this.getStringAttribute('malformed_header_sdp_b');
  }
  public set malformedHeaderSdpB(value: string) {
    this._malformedHeaderSdpB = value;
  }
  public resetMalformedHeaderSdpB() {
    this._malformedHeaderSdpB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpBInput() {
    return this._malformedHeaderSdpB;
  }

  // malformed_header_sdp_c - computed: true, optional: true, required: false
  private _malformedHeaderSdpC?: string; 
  public get malformedHeaderSdpC() {
    return this.getStringAttribute('malformed_header_sdp_c');
  }
  public set malformedHeaderSdpC(value: string) {
    this._malformedHeaderSdpC = value;
  }
  public resetMalformedHeaderSdpC() {
    this._malformedHeaderSdpC = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpCInput() {
    return this._malformedHeaderSdpC;
  }

  // malformed_header_sdp_i - computed: true, optional: true, required: false
  private _malformedHeaderSdpI?: string; 
  public get malformedHeaderSdpI() {
    return this.getStringAttribute('malformed_header_sdp_i');
  }
  public set malformedHeaderSdpI(value: string) {
    this._malformedHeaderSdpI = value;
  }
  public resetMalformedHeaderSdpI() {
    this._malformedHeaderSdpI = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpIInput() {
    return this._malformedHeaderSdpI;
  }

  // malformed_header_sdp_k - computed: true, optional: true, required: false
  private _malformedHeaderSdpK?: string; 
  public get malformedHeaderSdpK() {
    return this.getStringAttribute('malformed_header_sdp_k');
  }
  public set malformedHeaderSdpK(value: string) {
    this._malformedHeaderSdpK = value;
  }
  public resetMalformedHeaderSdpK() {
    this._malformedHeaderSdpK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpKInput() {
    return this._malformedHeaderSdpK;
  }

  // malformed_header_sdp_m - computed: true, optional: true, required: false
  private _malformedHeaderSdpM?: string; 
  public get malformedHeaderSdpM() {
    return this.getStringAttribute('malformed_header_sdp_m');
  }
  public set malformedHeaderSdpM(value: string) {
    this._malformedHeaderSdpM = value;
  }
  public resetMalformedHeaderSdpM() {
    this._malformedHeaderSdpM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpMInput() {
    return this._malformedHeaderSdpM;
  }

  // malformed_header_sdp_o - computed: true, optional: true, required: false
  private _malformedHeaderSdpO?: string; 
  public get malformedHeaderSdpO() {
    return this.getStringAttribute('malformed_header_sdp_o');
  }
  public set malformedHeaderSdpO(value: string) {
    this._malformedHeaderSdpO = value;
  }
  public resetMalformedHeaderSdpO() {
    this._malformedHeaderSdpO = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpOInput() {
    return this._malformedHeaderSdpO;
  }

  // malformed_header_sdp_r - computed: true, optional: true, required: false
  private _malformedHeaderSdpR?: string; 
  public get malformedHeaderSdpR() {
    return this.getStringAttribute('malformed_header_sdp_r');
  }
  public set malformedHeaderSdpR(value: string) {
    this._malformedHeaderSdpR = value;
  }
  public resetMalformedHeaderSdpR() {
    this._malformedHeaderSdpR = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpRInput() {
    return this._malformedHeaderSdpR;
  }

  // malformed_header_sdp_s - computed: true, optional: true, required: false
  private _malformedHeaderSdpS?: string; 
  public get malformedHeaderSdpS() {
    return this.getStringAttribute('malformed_header_sdp_s');
  }
  public set malformedHeaderSdpS(value: string) {
    this._malformedHeaderSdpS = value;
  }
  public resetMalformedHeaderSdpS() {
    this._malformedHeaderSdpS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpSInput() {
    return this._malformedHeaderSdpS;
  }

  // malformed_header_sdp_t - computed: true, optional: true, required: false
  private _malformedHeaderSdpT?: string; 
  public get malformedHeaderSdpT() {
    return this.getStringAttribute('malformed_header_sdp_t');
  }
  public set malformedHeaderSdpT(value: string) {
    this._malformedHeaderSdpT = value;
  }
  public resetMalformedHeaderSdpT() {
    this._malformedHeaderSdpT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpTInput() {
    return this._malformedHeaderSdpT;
  }

  // malformed_header_sdp_v - computed: true, optional: true, required: false
  private _malformedHeaderSdpV?: string; 
  public get malformedHeaderSdpV() {
    return this.getStringAttribute('malformed_header_sdp_v');
  }
  public set malformedHeaderSdpV(value: string) {
    this._malformedHeaderSdpV = value;
  }
  public resetMalformedHeaderSdpV() {
    this._malformedHeaderSdpV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpVInput() {
    return this._malformedHeaderSdpV;
  }

  // malformed_header_sdp_z - computed: true, optional: true, required: false
  private _malformedHeaderSdpZ?: string; 
  public get malformedHeaderSdpZ() {
    return this.getStringAttribute('malformed_header_sdp_z');
  }
  public set malformedHeaderSdpZ(value: string) {
    this._malformedHeaderSdpZ = value;
  }
  public resetMalformedHeaderSdpZ() {
    this._malformedHeaderSdpZ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderSdpZInput() {
    return this._malformedHeaderSdpZ;
  }

  // malformed_header_to - computed: true, optional: true, required: false
  private _malformedHeaderTo?: string; 
  public get malformedHeaderTo() {
    return this.getStringAttribute('malformed_header_to');
  }
  public set malformedHeaderTo(value: string) {
    this._malformedHeaderTo = value;
  }
  public resetMalformedHeaderTo() {
    this._malformedHeaderTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderToInput() {
    return this._malformedHeaderTo;
  }

  // malformed_header_via - computed: true, optional: true, required: false
  private _malformedHeaderVia?: string; 
  public get malformedHeaderVia() {
    return this.getStringAttribute('malformed_header_via');
  }
  public set malformedHeaderVia(value: string) {
    this._malformedHeaderVia = value;
  }
  public resetMalformedHeaderVia() {
    this._malformedHeaderVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHeaderViaInput() {
    return this._malformedHeaderVia;
  }

  // malformed_request_line - computed: true, optional: true, required: false
  private _malformedRequestLine?: string; 
  public get malformedRequestLine() {
    return this.getStringAttribute('malformed_request_line');
  }
  public set malformedRequestLine(value: string) {
    this._malformedRequestLine = value;
  }
  public resetMalformedRequestLine() {
    this._malformedRequestLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedRequestLineInput() {
    return this._malformedRequestLine;
  }

  // max_body_length - computed: false, optional: true, required: false
  private _maxBodyLength?: number; 
  public get maxBodyLength() {
    return this.getNumberAttribute('max_body_length');
  }
  public set maxBodyLength(value: number) {
    this._maxBodyLength = value;
  }
  public resetMaxBodyLength() {
    this._maxBodyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodyLengthInput() {
    return this._maxBodyLength;
  }

  // max_dialogs - computed: false, optional: true, required: false
  private _maxDialogs?: number; 
  public get maxDialogs() {
    return this.getNumberAttribute('max_dialogs');
  }
  public set maxDialogs(value: number) {
    this._maxDialogs = value;
  }
  public resetMaxDialogs() {
    this._maxDialogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDialogsInput() {
    return this._maxDialogs;
  }

  // max_idle_dialogs - computed: false, optional: true, required: false
  private _maxIdleDialogs?: number; 
  public get maxIdleDialogs() {
    return this.getNumberAttribute('max_idle_dialogs');
  }
  public set maxIdleDialogs(value: number) {
    this._maxIdleDialogs = value;
  }
  public resetMaxIdleDialogs() {
    this._maxIdleDialogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleDialogsInput() {
    return this._maxIdleDialogs;
  }

  // max_line_length - computed: true, optional: true, required: false
  private _maxLineLength?: number; 
  public get maxLineLength() {
    return this.getNumberAttribute('max_line_length');
  }
  public set maxLineLength(value: number) {
    this._maxLineLength = value;
  }
  public resetMaxLineLength() {
    this._maxLineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLineLengthInput() {
    return this._maxLineLength;
  }

  // message_rate - computed: false, optional: true, required: false
  private _messageRate?: number; 
  public get messageRate() {
    return this.getNumberAttribute('message_rate');
  }
  public set messageRate(value: number) {
    this._messageRate = value;
  }
  public resetMessageRate() {
    this._messageRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateInput() {
    return this._messageRate;
  }

  // message_rate_track - computed: true, optional: true, required: false
  private _messageRateTrack?: string; 
  public get messageRateTrack() {
    return this.getStringAttribute('message_rate_track');
  }
  public set messageRateTrack(value: string) {
    this._messageRateTrack = value;
  }
  public resetMessageRateTrack() {
    this._messageRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRateTrackInput() {
    return this._messageRateTrack;
  }

  // nat_port_range - computed: true, optional: true, required: false
  private _natPortRange?: string; 
  public get natPortRange() {
    return this.getStringAttribute('nat_port_range');
  }
  public set natPortRange(value: string) {
    this._natPortRange = value;
  }
  public resetNatPortRange() {
    this._natPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortRangeInput() {
    return this._natPortRange;
  }

  // nat_trace - computed: true, optional: true, required: false
  private _natTrace?: string; 
  public get natTrace() {
    return this.getStringAttribute('nat_trace');
  }
  public set natTrace(value: string) {
    this._natTrace = value;
  }
  public resetNatTrace() {
    this._natTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraceInput() {
    return this._natTrace;
  }

  // no_sdp_fixup - computed: true, optional: true, required: false
  private _noSdpFixup?: string; 
  public get noSdpFixup() {
    return this.getStringAttribute('no_sdp_fixup');
  }
  public set noSdpFixup(value: string) {
    this._noSdpFixup = value;
  }
  public resetNoSdpFixup() {
    this._noSdpFixup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSdpFixupInput() {
    return this._noSdpFixup;
  }

  // notify_rate - computed: false, optional: true, required: false
  private _notifyRate?: number; 
  public get notifyRate() {
    return this.getNumberAttribute('notify_rate');
  }
  public set notifyRate(value: number) {
    this._notifyRate = value;
  }
  public resetNotifyRate() {
    this._notifyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRateInput() {
    return this._notifyRate;
  }

  // notify_rate_track - computed: true, optional: true, required: false
  private _notifyRateTrack?: string; 
  public get notifyRateTrack() {
    return this.getStringAttribute('notify_rate_track');
  }
  public set notifyRateTrack(value: string) {
    this._notifyRateTrack = value;
  }
  public resetNotifyRateTrack() {
    this._notifyRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRateTrackInput() {
    return this._notifyRateTrack;
  }

  // open_contact_pinhole - computed: true, optional: true, required: false
  private _openContactPinhole?: string; 
  public get openContactPinhole() {
    return this.getStringAttribute('open_contact_pinhole');
  }
  public set openContactPinhole(value: string) {
    this._openContactPinhole = value;
  }
  public resetOpenContactPinhole() {
    this._openContactPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openContactPinholeInput() {
    return this._openContactPinhole;
  }

  // open_record_route_pinhole - computed: true, optional: true, required: false
  private _openRecordRoutePinhole?: string; 
  public get openRecordRoutePinhole() {
    return this.getStringAttribute('open_record_route_pinhole');
  }
  public set openRecordRoutePinhole(value: string) {
    this._openRecordRoutePinhole = value;
  }
  public resetOpenRecordRoutePinhole() {
    this._openRecordRoutePinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRecordRoutePinholeInput() {
    return this._openRecordRoutePinhole;
  }

  // open_register_pinhole - computed: true, optional: true, required: false
  private _openRegisterPinhole?: string; 
  public get openRegisterPinhole() {
    return this.getStringAttribute('open_register_pinhole');
  }
  public set openRegisterPinhole(value: string) {
    this._openRegisterPinhole = value;
  }
  public resetOpenRegisterPinhole() {
    this._openRegisterPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRegisterPinholeInput() {
    return this._openRegisterPinhole;
  }

  // open_via_pinhole - computed: true, optional: true, required: false
  private _openViaPinhole?: string; 
  public get openViaPinhole() {
    return this.getStringAttribute('open_via_pinhole');
  }
  public set openViaPinhole(value: string) {
    this._openViaPinhole = value;
  }
  public resetOpenViaPinhole() {
    this._openViaPinhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openViaPinholeInput() {
    return this._openViaPinhole;
  }

  // options_rate - computed: false, optional: true, required: false
  private _optionsRate?: number; 
  public get optionsRate() {
    return this.getNumberAttribute('options_rate');
  }
  public set optionsRate(value: number) {
    this._optionsRate = value;
  }
  public resetOptionsRate() {
    this._optionsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsRateInput() {
    return this._optionsRate;
  }

  // options_rate_track - computed: true, optional: true, required: false
  private _optionsRateTrack?: string; 
  public get optionsRateTrack() {
    return this.getStringAttribute('options_rate_track');
  }
  public set optionsRateTrack(value: string) {
    this._optionsRateTrack = value;
  }
  public resetOptionsRateTrack() {
    this._optionsRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsRateTrackInput() {
    return this._optionsRateTrack;
  }

  // prack_rate - computed: false, optional: true, required: false
  private _prackRate?: number; 
  public get prackRate() {
    return this.getNumberAttribute('prack_rate');
  }
  public set prackRate(value: number) {
    this._prackRate = value;
  }
  public resetPrackRate() {
    this._prackRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prackRateInput() {
    return this._prackRate;
  }

  // prack_rate_track - computed: true, optional: true, required: false
  private _prackRateTrack?: string; 
  public get prackRateTrack() {
    return this.getStringAttribute('prack_rate_track');
  }
  public set prackRateTrack(value: string) {
    this._prackRateTrack = value;
  }
  public resetPrackRateTrack() {
    this._prackRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prackRateTrackInput() {
    return this._prackRateTrack;
  }

  // preserve_override - computed: true, optional: true, required: false
  private _preserveOverride?: string; 
  public get preserveOverride() {
    return this.getStringAttribute('preserve_override');
  }
  public set preserveOverride(value: string) {
    this._preserveOverride = value;
  }
  public resetPreserveOverride() {
    this._preserveOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveOverrideInput() {
    return this._preserveOverride;
  }

  // provisional_invite_expiry_time - computed: true, optional: true, required: false
  private _provisionalInviteExpiryTime?: number; 
  public get provisionalInviteExpiryTime() {
    return this.getNumberAttribute('provisional_invite_expiry_time');
  }
  public set provisionalInviteExpiryTime(value: number) {
    this._provisionalInviteExpiryTime = value;
  }
  public resetProvisionalInviteExpiryTime() {
    this._provisionalInviteExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionalInviteExpiryTimeInput() {
    return this._provisionalInviteExpiryTime;
  }

  // publish_rate - computed: false, optional: true, required: false
  private _publishRate?: number; 
  public get publishRate() {
    return this.getNumberAttribute('publish_rate');
  }
  public set publishRate(value: number) {
    this._publishRate = value;
  }
  public resetPublishRate() {
    this._publishRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRateInput() {
    return this._publishRate;
  }

  // publish_rate_track - computed: true, optional: true, required: false
  private _publishRateTrack?: string; 
  public get publishRateTrack() {
    return this.getStringAttribute('publish_rate_track');
  }
  public set publishRateTrack(value: string) {
    this._publishRateTrack = value;
  }
  public resetPublishRateTrack() {
    this._publishRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRateTrackInput() {
    return this._publishRateTrack;
  }

  // refer_rate - computed: false, optional: true, required: false
  private _referRate?: number; 
  public get referRate() {
    return this.getNumberAttribute('refer_rate');
  }
  public set referRate(value: number) {
    this._referRate = value;
  }
  public resetReferRate() {
    this._referRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referRateInput() {
    return this._referRate;
  }

  // refer_rate_track - computed: true, optional: true, required: false
  private _referRateTrack?: string; 
  public get referRateTrack() {
    return this.getStringAttribute('refer_rate_track');
  }
  public set referRateTrack(value: string) {
    this._referRateTrack = value;
  }
  public resetReferRateTrack() {
    this._referRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referRateTrackInput() {
    return this._referRateTrack;
  }

  // register_contact_trace - computed: true, optional: true, required: false
  private _registerContactTrace?: string; 
  public get registerContactTrace() {
    return this.getStringAttribute('register_contact_trace');
  }
  public set registerContactTrace(value: string) {
    this._registerContactTrace = value;
  }
  public resetRegisterContactTrace() {
    this._registerContactTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerContactTraceInput() {
    return this._registerContactTrace;
  }

  // register_rate - computed: false, optional: true, required: false
  private _registerRate?: number; 
  public get registerRate() {
    return this.getNumberAttribute('register_rate');
  }
  public set registerRate(value: number) {
    this._registerRate = value;
  }
  public resetRegisterRate() {
    this._registerRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateInput() {
    return this._registerRate;
  }

  // register_rate_track - computed: true, optional: true, required: false
  private _registerRateTrack?: string; 
  public get registerRateTrack() {
    return this.getStringAttribute('register_rate_track');
  }
  public set registerRateTrack(value: string) {
    this._registerRateTrack = value;
  }
  public resetRegisterRateTrack() {
    this._registerRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerRateTrackInput() {
    return this._registerRateTrack;
  }

  // rfc2543_branch - computed: true, optional: true, required: false
  private _rfc2543Branch?: string; 
  public get rfc2543Branch() {
    return this.getStringAttribute('rfc2543_branch');
  }
  public set rfc2543Branch(value: string) {
    this._rfc2543Branch = value;
  }
  public resetRfc2543Branch() {
    this._rfc2543Branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc2543BranchInput() {
    return this._rfc2543Branch;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp?: string; 
  public get rtp() {
    return this.getStringAttribute('rtp');
  }
  public set rtp(value: string) {
    this._rtp = value;
  }
  public resetRtp() {
    this._rtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp;
  }

  // ssl_algorithm - computed: false, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
  }

  // ssl_auth_client - computed: false, optional: true, required: false
  private _sslAuthClient?: string; 
  public get sslAuthClient() {
    return this.getStringAttribute('ssl_auth_client');
  }
  public set sslAuthClient(value: string) {
    this._sslAuthClient = value;
  }
  public resetSslAuthClient() {
    this._sslAuthClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthClientInput() {
    return this._sslAuthClient;
  }

  // ssl_auth_server - computed: false, optional: true, required: false
  private _sslAuthServer?: string; 
  public get sslAuthServer() {
    return this.getStringAttribute('ssl_auth_server');
  }
  public set sslAuthServer(value: string) {
    this._sslAuthServer = value;
  }
  public resetSslAuthServer() {
    this._sslAuthServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAuthServerInput() {
    return this._sslAuthServer;
  }

  // ssl_client_certificate - computed: false, optional: true, required: false
  private _sslClientCertificate?: string; 
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }
  public set sslClientCertificate(value: string) {
    this._sslClientCertificate = value;
  }
  public resetSslClientCertificate() {
    this._sslClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateInput() {
    return this._sslClientCertificate;
  }

  // ssl_client_renegotiation - computed: false, optional: true, required: false
  private _sslClientRenegotiation?: string; 
  public get sslClientRenegotiation() {
    return this.getStringAttribute('ssl_client_renegotiation');
  }
  public set sslClientRenegotiation(value: string) {
    this._sslClientRenegotiation = value;
  }
  public resetSslClientRenegotiation() {
    this._sslClientRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientRenegotiationInput() {
    return this._sslClientRenegotiation;
  }

  // ssl_max_version - computed: false, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
  }

  // ssl_min_version - computed: false, optional: true, required: false
  private _sslMinVersion?: string; 
  public get sslMinVersion() {
    return this.getStringAttribute('ssl_min_version');
  }
  public set sslMinVersion(value: string) {
    this._sslMinVersion = value;
  }
  public resetSslMinVersion() {
    this._sslMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinVersionInput() {
    return this._sslMinVersion;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }

  // ssl_pfs - computed: true, optional: true, required: false
  private _sslPfs?: string; 
  public get sslPfs() {
    return this.getStringAttribute('ssl_pfs');
  }
  public set sslPfs(value: string) {
    this._sslPfs = value;
  }
  public resetSslPfs() {
    this._sslPfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPfsInput() {
    return this._sslPfs;
  }

  // ssl_send_empty_frags - computed: false, optional: true, required: false
  private _sslSendEmptyFrags?: string; 
  public get sslSendEmptyFrags() {
    return this.getStringAttribute('ssl_send_empty_frags');
  }
  public set sslSendEmptyFrags(value: string) {
    this._sslSendEmptyFrags = value;
  }
  public resetSslSendEmptyFrags() {
    this._sslSendEmptyFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSendEmptyFragsInput() {
    return this._sslSendEmptyFrags;
  }

  // ssl_server_certificate - computed: false, optional: true, required: false
  private _sslServerCertificate?: string; 
  public get sslServerCertificate() {
    return this.getStringAttribute('ssl_server_certificate');
  }
  public set sslServerCertificate(value: string) {
    this._sslServerCertificate = value;
  }
  public resetSslServerCertificate() {
    this._sslServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerCertificateInput() {
    return this._sslServerCertificate;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strict_register - computed: true, optional: true, required: false
  private _strictRegister?: string; 
  public get strictRegister() {
    return this.getStringAttribute('strict_register');
  }
  public set strictRegister(value: string) {
    this._strictRegister = value;
  }
  public resetStrictRegister() {
    this._strictRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRegisterInput() {
    return this._strictRegister;
  }

  // subscribe_rate - computed: false, optional: true, required: false
  private _subscribeRate?: number; 
  public get subscribeRate() {
    return this.getNumberAttribute('subscribe_rate');
  }
  public set subscribeRate(value: number) {
    this._subscribeRate = value;
  }
  public resetSubscribeRate() {
    this._subscribeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeRateInput() {
    return this._subscribeRate;
  }

  // subscribe_rate_track - computed: true, optional: true, required: false
  private _subscribeRateTrack?: string; 
  public get subscribeRateTrack() {
    return this.getStringAttribute('subscribe_rate_track');
  }
  public set subscribeRateTrack(value: string) {
    this._subscribeRateTrack = value;
  }
  public resetSubscribeRateTrack() {
    this._subscribeRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeRateTrackInput() {
    return this._subscribeRateTrack;
  }

  // unknown_header - computed: true, optional: true, required: false
  private _unknownHeader?: string; 
  public get unknownHeader() {
    return this.getStringAttribute('unknown_header');
  }
  public set unknownHeader(value: string) {
    this._unknownHeader = value;
  }
  public resetUnknownHeader() {
    this._unknownHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHeaderInput() {
    return this._unknownHeader;
  }

  // update_rate - computed: false, optional: true, required: false
  private _updateRate?: number; 
  public get updateRate() {
    return this.getNumberAttribute('update_rate');
  }
  public set updateRate(value: number) {
    this._updateRate = value;
  }
  public resetUpdateRate() {
    this._updateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRateInput() {
    return this._updateRate;
  }

  // update_rate_track - computed: true, optional: true, required: false
  private _updateRateTrack?: string; 
  public get updateRateTrack() {
    return this.getStringAttribute('update_rate_track');
  }
  public set updateRateTrack(value: string) {
    this._updateRateTrack = value;
  }
  public resetUpdateRateTrack() {
    this._updateRateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRateTrackInput() {
    return this._updateRateTrack;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile fortimanager_object_voip_profile}
*/
export class ObjectVoipProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_voip_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVoipProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVoipProfile to import
  * @param importFromId The id of the existing ObjectVoipProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVoipProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_voip_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_voip_profile fortimanager_object_voip_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVoipProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVoipProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_voip_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._comment = config.comment;
    this._featureSet = config.featureSet;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._msrp.internalValue = config.msrp;
    this._sccp.internalValue = config.sccp;
    this._sip.internalValue = config.sip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // msrp - computed: false, optional: true, required: false
  private _msrp = new ObjectVoipProfileMsrpOutputReference(this, "msrp");
  public get msrp() {
    return this._msrp;
  }
  public putMsrp(value: ObjectVoipProfileMsrp) {
    this._msrp.internalValue = value;
  }
  public resetMsrp() {
    this._msrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msrpInput() {
    return this._msrp.internalValue;
  }

  // sccp - computed: false, optional: true, required: false
  private _sccp = new ObjectVoipProfileSccpOutputReference(this, "sccp");
  public get sccp() {
    return this._sccp;
  }
  public putSccp(value: ObjectVoipProfileSccp) {
    this._sccp.internalValue = value;
  }
  public resetSccp() {
    this._sccp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccpInput() {
    return this._sccp.internalValue;
  }

  // sip - computed: false, optional: true, required: false
  private _sip = new ObjectVoipProfileSipOutputReference(this, "sip");
  public get sip() {
    return this._sip;
  }
  public putSip(value: ObjectVoipProfileSip) {
    this._sip.internalValue = value;
  }
  public resetSip() {
    this._sip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      msrp: objectVoipProfileMsrpToTerraform(this._msrp.internalValue),
      sccp: objectVoipProfileSccpToTerraform(this._sccp.internalValue),
      sip: objectVoipProfileSipToTerraform(this._sip.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msrp: {
        value: objectVoipProfileMsrpToHclTerraform(this._msrp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVoipProfileMsrpList",
      },
      sccp: {
        value: objectVoipProfileSccpToHclTerraform(this._sccp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVoipProfileSccpList",
      },
      sip: {
        value: objectVoipProfileSipToHclTerraform(this._sip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVoipProfileSipList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
