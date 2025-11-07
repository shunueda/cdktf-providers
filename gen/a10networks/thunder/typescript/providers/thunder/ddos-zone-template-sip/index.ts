// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#id DdosZoneTemplateSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_tmpl_name DdosZoneTemplateSip#sip_tmpl_name}
  */
  readonly sipTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#user_tag DdosZoneTemplateSip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#uuid DdosZoneTemplateSip#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst DdosZoneTemplateSip#dst}
  */
  readonly dst?: DdosZoneTemplateSipDst;
  /**
  * filter_header_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#filter_header_list DdosZoneTemplateSip#filter_header_list}
  */
  readonly filterHeaderList?: DdosZoneTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable;
  /**
  * idle_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#idle_timeout DdosZoneTemplateSip#idle_timeout}
  */
  readonly idleTimeout?: DdosZoneTemplateSipIdleTimeout;
  /**
  * malformed_sip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip DdosZoneTemplateSip#malformed_sip}
  */
  readonly malformedSip?: DdosZoneTemplateSipMalformedSip;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#multi_pu_threshold_distribution DdosZoneTemplateSip#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosZoneTemplateSipMultiPuThresholdDistribution;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src DdosZoneTemplateSip#src}
  */
  readonly src?: DdosZoneTemplateSipSrc;
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg {
  /**
  * BYE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#bye DdosZoneTemplateSip#bye}
  */
  readonly bye?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_bye_rate DdosZoneTemplateSip#dst_sip_bye_rate}
  */
  readonly dstSipByeRate?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye: cdktf.numberToTerraform(struct!.bye),
    dst_sip_bye_rate: cdktf.numberToTerraform(struct!.dstSipByeRate),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye: {
      value: cdktf.numberToHclTerraform(struct!.bye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_bye_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipByeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bye !== undefined) {
      hasAnyValues = true;
      internalValueResult.bye = this._bye;
    }
    if (this._dstSipByeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipByeRate = this._dstSipByeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bye = undefined;
      this._dstSipByeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bye = value.bye;
      this._dstSipByeRate = value.dstSipByeRate;
    }
  }

  // bye - computed: false, optional: true, required: false
  private _bye?: number; 
  public get bye() {
    return this.getNumberAttribute('bye');
  }
  public set bye(value: number) {
    this._bye = value;
  }
  public resetBye() {
    this._bye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeInput() {
    return this._bye;
  }

  // dst_sip_bye_rate - computed: false, optional: true, required: false
  private _dstSipByeRate?: number; 
  public get dstSipByeRate() {
    return this.getNumberAttribute('dst_sip_bye_rate');
  }
  public set dstSipByeRate(value: number) {
    this._dstSipByeRate = value;
  }
  public resetDstSipByeRate() {
    this._dstSipByeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipByeRateInput() {
    return this._dstSipByeRate;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_invite_rate DdosZoneTemplateSip#dst_sip_invite_rate}
  */
  readonly dstSipInviteRate?: number;
  /**
  * INVITE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#invite DdosZoneTemplateSip#invite}
  */
  readonly invite?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_invite_rate: cdktf.numberToTerraform(struct!.dstSipInviteRate),
    invite: cdktf.numberToTerraform(struct!.invite),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_invite_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipInviteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invite: {
      value: cdktf.numberToHclTerraform(struct!.invite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipInviteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipInviteRate = this._dstSipInviteRate;
    }
    if (this._invite !== undefined) {
      hasAnyValues = true;
      internalValueResult.invite = this._invite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipInviteRate = undefined;
      this._invite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipInviteRate = value.dstSipInviteRate;
      this._invite = value.invite;
    }
  }

  // dst_sip_invite_rate - computed: false, optional: true, required: false
  private _dstSipInviteRate?: number; 
  public get dstSipInviteRate() {
    return this.getNumberAttribute('dst_sip_invite_rate');
  }
  public set dstSipInviteRate(value: number) {
    this._dstSipInviteRate = value;
  }
  public resetDstSipInviteRate() {
    this._dstSipInviteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipInviteRateInput() {
    return this._dstSipInviteRate;
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: number; 
  public get invite() {
    return this.getNumberAttribute('invite');
  }
  public set invite(value: number) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_message_rate DdosZoneTemplateSip#dst_sip_message_rate}
  */
  readonly dstSipMessageRate?: number;
  /**
  * MESSAGE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#message DdosZoneTemplateSip#message}
  */
  readonly message?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_message_rate: cdktf.numberToTerraform(struct!.dstSipMessageRate),
    message: cdktf.numberToTerraform(struct!.message),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_message_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipMessageRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.numberToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipMessageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipMessageRate = this._dstSipMessageRate;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipMessageRate = undefined;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipMessageRate = value.dstSipMessageRate;
      this._message = value.message;
    }
  }

  // dst_sip_message_rate - computed: false, optional: true, required: false
  private _dstSipMessageRate?: number; 
  public get dstSipMessageRate() {
    return this.getNumberAttribute('dst_sip_message_rate');
  }
  public set dstSipMessageRate(value: number) {
    this._dstSipMessageRate = value;
  }
  public resetDstSipMessageRate() {
    this._dstSipMessageRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipMessageRateInput() {
    return this._dstSipMessageRate;
  }

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_notify_rate DdosZoneTemplateSip#dst_sip_notify_rate}
  */
  readonly dstSipNotifyRate?: number;
  /**
  * NOTIFY method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#notify DdosZoneTemplateSip#notify}
  */
  readonly notify?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_notify_rate: cdktf.numberToTerraform(struct!.dstSipNotifyRate),
    notify: cdktf.numberToTerraform(struct!.notify),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_notify_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipNotifyRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify: {
      value: cdktf.numberToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipNotifyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipNotifyRate = this._dstSipNotifyRate;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipNotifyRate = undefined;
      this._notify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipNotifyRate = value.dstSipNotifyRate;
      this._notify = value.notify;
    }
  }

  // dst_sip_notify_rate - computed: false, optional: true, required: false
  private _dstSipNotifyRate?: number; 
  public get dstSipNotifyRate() {
    return this.getNumberAttribute('dst_sip_notify_rate');
  }
  public set dstSipNotifyRate(value: number) {
    this._dstSipNotifyRate = value;
  }
  public resetDstSipNotifyRate() {
    this._dstSipNotifyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipNotifyRateInput() {
    return this._dstSipNotifyRate;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: number; 
  public get notify() {
    return this.getNumberAttribute('notify');
  }
  public set notify(value: number) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_options_rate DdosZoneTemplateSip#dst_sip_options_rate}
  */
  readonly dstSipOptionsRate?: number;
  /**
  * OPTIONS method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#options DdosZoneTemplateSip#options}
  */
  readonly options?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_options_rate: cdktf.numberToTerraform(struct!.dstSipOptionsRate),
    options: cdktf.numberToTerraform(struct!.options),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_options_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipOptionsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.numberToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipOptionsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipOptionsRate = this._dstSipOptionsRate;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipOptionsRate = undefined;
      this._options = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipOptionsRate = value.dstSipOptionsRate;
      this._options = value.options;
    }
  }

  // dst_sip_options_rate - computed: false, optional: true, required: false
  private _dstSipOptionsRate?: number; 
  public get dstSipOptionsRate() {
    return this.getNumberAttribute('dst_sip_options_rate');
  }
  public set dstSipOptionsRate(value: number) {
    this._dstSipOptionsRate = value;
  }
  public resetDstSipOptionsRate() {
    this._dstSipOptionsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipOptionsRateInput() {
    return this._dstSipOptionsRate;
  }

  // options - computed: false, optional: true, required: false
  private _options?: number; 
  public get options() {
    return this.getNumberAttribute('options');
  }
  public set options(value: number) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_refer_rate DdosZoneTemplateSip#dst_sip_refer_rate}
  */
  readonly dstSipReferRate?: number;
  /**
  * REFER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#refer DdosZoneTemplateSip#refer}
  */
  readonly refer?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_refer_rate: cdktf.numberToTerraform(struct!.dstSipReferRate),
    refer: cdktf.numberToTerraform(struct!.refer),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_refer_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipReferRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refer: {
      value: cdktf.numberToHclTerraform(struct!.refer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipReferRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipReferRate = this._dstSipReferRate;
    }
    if (this._refer !== undefined) {
      hasAnyValues = true;
      internalValueResult.refer = this._refer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipReferRate = undefined;
      this._refer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipReferRate = value.dstSipReferRate;
      this._refer = value.refer;
    }
  }

  // dst_sip_refer_rate - computed: false, optional: true, required: false
  private _dstSipReferRate?: number; 
  public get dstSipReferRate() {
    return this.getNumberAttribute('dst_sip_refer_rate');
  }
  public set dstSipReferRate(value: number) {
    this._dstSipReferRate = value;
  }
  public resetDstSipReferRate() {
    this._dstSipReferRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipReferRateInput() {
    return this._dstSipReferRate;
  }

  // refer - computed: false, optional: true, required: false
  private _refer?: number; 
  public get refer() {
    return this.getNumberAttribute('refer');
  }
  public set refer(value: number) {
    this._refer = value;
  }
  public resetRefer() {
    this._refer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referInput() {
    return this._refer;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_register_rate DdosZoneTemplateSip#dst_sip_register_rate}
  */
  readonly dstSipRegisterRate?: number;
  /**
  * REGISTER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#register DdosZoneTemplateSip#register}
  */
  readonly register?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_register_rate: cdktf.numberToTerraform(struct!.dstSipRegisterRate),
    register: cdktf.numberToTerraform(struct!.register),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_register_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipRegisterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    register: {
      value: cdktf.numberToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipRegisterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipRegisterRate = this._dstSipRegisterRate;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipRegisterRate = undefined;
      this._register = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipRegisterRate = value.dstSipRegisterRate;
      this._register = value.register;
    }
  }

  // dst_sip_register_rate - computed: false, optional: true, required: false
  private _dstSipRegisterRate?: number; 
  public get dstSipRegisterRate() {
    return this.getNumberAttribute('dst_sip_register_rate');
  }
  public set dstSipRegisterRate(value: number) {
    this._dstSipRegisterRate = value;
  }
  public resetDstSipRegisterRate() {
    this._dstSipRegisterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipRegisterRateInput() {
    return this._dstSipRegisterRate;
  }

  // register - computed: false, optional: true, required: false
  private _register?: number; 
  public get register() {
    return this.getNumberAttribute('register');
  }
  public set register(value: number) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_subscribe_rate DdosZoneTemplateSip#dst_sip_subscribe_rate}
  */
  readonly dstSipSubscribeRate?: number;
  /**
  * SUBSCRIBE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#subscribe DdosZoneTemplateSip#subscribe}
  */
  readonly subscribe?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_subscribe_rate: cdktf.numberToTerraform(struct!.dstSipSubscribeRate),
    subscribe: cdktf.numberToTerraform(struct!.subscribe),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_subscribe_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipSubscribeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subscribe: {
      value: cdktf.numberToHclTerraform(struct!.subscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipSubscribeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipSubscribeRate = this._dstSipSubscribeRate;
    }
    if (this._subscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribe = this._subscribe;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipSubscribeRate = undefined;
      this._subscribe = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipSubscribeRate = value.dstSipSubscribeRate;
      this._subscribe = value.subscribe;
    }
  }

  // dst_sip_subscribe_rate - computed: false, optional: true, required: false
  private _dstSipSubscribeRate?: number; 
  public get dstSipSubscribeRate() {
    return this.getNumberAttribute('dst_sip_subscribe_rate');
  }
  public set dstSipSubscribeRate(value: number) {
    this._dstSipSubscribeRate = value;
  }
  public resetDstSipSubscribeRate() {
    this._dstSipSubscribeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipSubscribeRateInput() {
    return this._dstSipSubscribeRate;
  }

  // subscribe - computed: false, optional: true, required: false
  private _subscribe?: number; 
  public get subscribe() {
    return this.getNumberAttribute('subscribe');
  }
  public set subscribe(value: number) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_update_rate DdosZoneTemplateSip#dst_sip_update_rate}
  */
  readonly dstSipUpdateRate?: number;
  /**
  * UPDATE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#update DdosZoneTemplateSip#update}
  */
  readonly update?: number;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_update_rate: cdktf.numberToTerraform(struct!.dstSipUpdateRate),
    update: cdktf.numberToTerraform(struct!.update),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_update_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipUpdateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipUpdateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipUpdateRate = this._dstSipUpdateRate;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipUpdateRate = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipUpdateRate = value.dstSipUpdateRate;
      this._update = value.update;
    }
  }

  // dst_sip_update_rate - computed: false, optional: true, required: false
  private _dstSipUpdateRate?: number; 
  public get dstSipUpdateRate() {
    return this.getNumberAttribute('dst_sip_update_rate');
  }
  public set dstSipUpdateRate(value: number) {
    this._dstSipUpdateRate = value;
  }
  public resetDstSipUpdateRate() {
    this._dstSipUpdateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipUpdateRateInput() {
    return this._dstSipUpdateRate;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimitMethod {
  /**
  * bye_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#bye_cfg DdosZoneTemplateSip#bye_cfg}
  */
  readonly byeCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg;
  /**
  * invite_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#invite_cfg DdosZoneTemplateSip#invite_cfg}
  */
  readonly inviteCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg;
  /**
  * message_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#message_cfg DdosZoneTemplateSip#message_cfg}
  */
  readonly messageCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg;
  /**
  * notify_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#notify_cfg DdosZoneTemplateSip#notify_cfg}
  */
  readonly notifyCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg;
  /**
  * options_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#options_cfg DdosZoneTemplateSip#options_cfg}
  */
  readonly optionsCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg;
  /**
  * refer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#refer_cfg DdosZoneTemplateSip#refer_cfg}
  */
  readonly referCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg;
  /**
  * register_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#register_cfg DdosZoneTemplateSip#register_cfg}
  */
  readonly registerCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg;
  /**
  * subscribe_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#subscribe_cfg DdosZoneTemplateSip#subscribe_cfg}
  */
  readonly subscribeCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg;
  /**
  * update_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#update_cfg DdosZoneTemplateSip#update_cfg}
  */
  readonly updateCfg?: DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitMethodToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgToTerraform(struct!.byeCfg),
    invite_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgToTerraform(struct!.inviteCfg),
    message_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgToTerraform(struct!.messageCfg),
    notify_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgToTerraform(struct!.notifyCfg),
    options_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgToTerraform(struct!.optionsCfg),
    refer_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgToTerraform(struct!.referCfg),
    register_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgToTerraform(struct!.registerCfg),
    subscribe_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToTerraform(struct!.subscribeCfg),
    update_cfg: ddosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgToTerraform(struct!.updateCfg),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitMethodToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitMethodOutputReference | DdosZoneTemplateSipDstSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgToHclTerraform(struct!.byeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgList",
    },
    invite_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgToHclTerraform(struct!.inviteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgList",
    },
    message_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgToHclTerraform(struct!.messageCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgList",
    },
    notify_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct!.notifyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgList",
    },
    options_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct!.optionsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgList",
    },
    refer_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgToHclTerraform(struct!.referCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgList",
    },
    register_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct!.registerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgList",
    },
    subscribe_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct!.subscribeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgList",
    },
    update_cfg: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct!.updateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimitMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byeCfg = this._byeCfg?.internalValue;
    }
    if (this._inviteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteCfg = this._inviteCfg?.internalValue;
    }
    if (this._messageCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCfg = this._messageCfg?.internalValue;
    }
    if (this._notifyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyCfg = this._notifyCfg?.internalValue;
    }
    if (this._optionsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsCfg = this._optionsCfg?.internalValue;
    }
    if (this._referCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referCfg = this._referCfg?.internalValue;
    }
    if (this._registerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerCfg = this._registerCfg?.internalValue;
    }
    if (this._subscribeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeCfg = this._subscribeCfg?.internalValue;
    }
    if (this._updateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCfg = this._updateCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimitMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byeCfg.internalValue = undefined;
      this._inviteCfg.internalValue = undefined;
      this._messageCfg.internalValue = undefined;
      this._notifyCfg.internalValue = undefined;
      this._optionsCfg.internalValue = undefined;
      this._referCfg.internalValue = undefined;
      this._registerCfg.internalValue = undefined;
      this._subscribeCfg.internalValue = undefined;
      this._updateCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byeCfg.internalValue = value.byeCfg;
      this._inviteCfg.internalValue = value.inviteCfg;
      this._messageCfg.internalValue = value.messageCfg;
      this._notifyCfg.internalValue = value.notifyCfg;
      this._optionsCfg.internalValue = value.optionsCfg;
      this._referCfg.internalValue = value.referCfg;
      this._registerCfg.internalValue = value.registerCfg;
      this._subscribeCfg.internalValue = value.subscribeCfg;
      this._updateCfg.internalValue = value.updateCfg;
    }
  }

  // bye_cfg - computed: false, optional: true, required: false
  private _byeCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference(this, "bye_cfg");
  public get byeCfg() {
    return this._byeCfg;
  }
  public putByeCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodByeCfg) {
    this._byeCfg.internalValue = value;
  }
  public resetByeCfg() {
    this._byeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeCfgInput() {
    return this._byeCfg.internalValue;
  }

  // invite_cfg - computed: false, optional: true, required: false
  private _inviteCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference(this, "invite_cfg");
  public get inviteCfg() {
    return this._inviteCfg;
  }
  public putInviteCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodInviteCfg) {
    this._inviteCfg.internalValue = value;
  }
  public resetInviteCfg() {
    this._inviteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteCfgInput() {
    return this._inviteCfg.internalValue;
  }

  // message_cfg - computed: false, optional: true, required: false
  private _messageCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference(this, "message_cfg");
  public get messageCfg() {
    return this._messageCfg;
  }
  public putMessageCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodMessageCfg) {
    this._messageCfg.internalValue = value;
  }
  public resetMessageCfg() {
    this._messageCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCfgInput() {
    return this._messageCfg.internalValue;
  }

  // notify_cfg - computed: false, optional: true, required: false
  private _notifyCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference(this, "notify_cfg");
  public get notifyCfg() {
    return this._notifyCfg;
  }
  public putNotifyCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodNotifyCfg) {
    this._notifyCfg.internalValue = value;
  }
  public resetNotifyCfg() {
    this._notifyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyCfgInput() {
    return this._notifyCfg.internalValue;
  }

  // options_cfg - computed: false, optional: true, required: false
  private _optionsCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference(this, "options_cfg");
  public get optionsCfg() {
    return this._optionsCfg;
  }
  public putOptionsCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodOptionsCfg) {
    this._optionsCfg.internalValue = value;
  }
  public resetOptionsCfg() {
    this._optionsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsCfgInput() {
    return this._optionsCfg.internalValue;
  }

  // refer_cfg - computed: false, optional: true, required: false
  private _referCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference(this, "refer_cfg");
  public get referCfg() {
    return this._referCfg;
  }
  public putReferCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodReferCfg) {
    this._referCfg.internalValue = value;
  }
  public resetReferCfg() {
    this._referCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referCfgInput() {
    return this._referCfg.internalValue;
  }

  // register_cfg - computed: false, optional: true, required: false
  private _registerCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference(this, "register_cfg");
  public get registerCfg() {
    return this._registerCfg;
  }
  public putRegisterCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodRegisterCfg) {
    this._registerCfg.internalValue = value;
  }
  public resetRegisterCfg() {
    this._registerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerCfgInput() {
    return this._registerCfg.internalValue;
  }

  // subscribe_cfg - computed: false, optional: true, required: false
  private _subscribeCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference(this, "subscribe_cfg");
  public get subscribeCfg() {
    return this._subscribeCfg;
  }
  public putSubscribeCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodSubscribeCfg) {
    this._subscribeCfg.internalValue = value;
  }
  public resetSubscribeCfg() {
    this._subscribeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeCfgInput() {
    return this._subscribeCfg.internalValue;
  }

  // update_cfg - computed: false, optional: true, required: false
  private _updateCfg = new DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference(this, "update_cfg");
  public get updateCfg() {
    return this._updateCfg;
  }
  public putUpdateCfg(value: DdosZoneTemplateSipDstSipRequestRateLimitMethodUpdateCfg) {
    this._updateCfg.internalValue = value;
  }
  public resetUpdateCfg() {
    this._updateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCfgInput() {
    return this._updateCfg.internalValue;
  }
}
export interface DdosZoneTemplateSipDstSipRequestRateLimit {
  /**
  * 'drop': Drop packets(Default); 'ignore': Take no action; 'reset': Reset (sip-tcp) client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_rate_action DdosZoneTemplateSip#dst_sip_rate_action}
  */
  readonly dstSipRateAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#dst_sip_rate_action_list_name DdosZoneTemplateSip#dst_sip_rate_action_list_name}
  */
  readonly dstSipRateActionListName?: string;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#method DdosZoneTemplateSip#method}
  */
  readonly method?: DdosZoneTemplateSipDstSipRequestRateLimitMethod;
}

export function ddosZoneTemplateSipDstSipRequestRateLimitToTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitOutputReference | DdosZoneTemplateSipDstSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_rate_action: cdktf.stringToTerraform(struct!.dstSipRateAction),
    dst_sip_rate_action_list_name: cdktf.stringToTerraform(struct!.dstSipRateActionListName),
    method: ddosZoneTemplateSipDstSipRequestRateLimitMethodToTerraform(struct!.method),
  }
}


export function ddosZoneTemplateSipDstSipRequestRateLimitToHclTerraform(struct?: DdosZoneTemplateSipDstSipRequestRateLimitOutputReference | DdosZoneTemplateSipDstSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.dstSipRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_sip_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.dstSipRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstSipRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDstSipRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipRateAction = this._dstSipRateAction;
    }
    if (this._dstSipRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipRateActionListName = this._dstSipRateActionListName;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDstSipRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipRateAction = undefined;
      this._dstSipRateActionListName = undefined;
      this._method.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipRateAction = value.dstSipRateAction;
      this._dstSipRateActionListName = value.dstSipRateActionListName;
      this._method.internalValue = value.method;
    }
  }

  // dst_sip_rate_action - computed: false, optional: true, required: false
  private _dstSipRateAction?: string; 
  public get dstSipRateAction() {
    return this.getStringAttribute('dst_sip_rate_action');
  }
  public set dstSipRateAction(value: string) {
    this._dstSipRateAction = value;
  }
  public resetDstSipRateAction() {
    this._dstSipRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipRateActionInput() {
    return this._dstSipRateAction;
  }

  // dst_sip_rate_action_list_name - computed: false, optional: true, required: false
  private _dstSipRateActionListName?: string; 
  public get dstSipRateActionListName() {
    return this.getStringAttribute('dst_sip_rate_action_list_name');
  }
  public set dstSipRateActionListName(value: string) {
    this._dstSipRateActionListName = value;
  }
  public resetDstSipRateActionListName() {
    this._dstSipRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipRateActionListNameInput() {
    return this._dstSipRateActionListName;
  }

  // method - computed: false, optional: true, required: false
  private _method = new DdosZoneTemplateSipDstSipRequestRateLimitMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DdosZoneTemplateSipDstSipRequestRateLimitMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}
export interface DdosZoneTemplateSipDst {
  /**
  * sip_request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_request_rate_limit DdosZoneTemplateSip#sip_request_rate_limit}
  */
  readonly sipRequestRateLimit?: DdosZoneTemplateSipDstSipRequestRateLimit;
}

export function ddosZoneTemplateSipDstToTerraform(struct?: DdosZoneTemplateSipDstOutputReference | DdosZoneTemplateSipDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_request_rate_limit: ddosZoneTemplateSipDstSipRequestRateLimitToTerraform(struct!.sipRequestRateLimit),
  }
}


export function ddosZoneTemplateSipDstToHclTerraform(struct?: DdosZoneTemplateSipDstOutputReference | DdosZoneTemplateSipDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_request_rate_limit: {
      value: ddosZoneTemplateSipDstSipRequestRateLimitToHclTerraform(struct!.sipRequestRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipDstSipRequestRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipRequestRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRequestRateLimit = this._sipRequestRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipDst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sipRequestRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sipRequestRateLimit.internalValue = value.sipRequestRateLimit;
    }
  }

  // sip_request_rate_limit - computed: false, optional: true, required: false
  private _sipRequestRateLimit = new DdosZoneTemplateSipDstSipRequestRateLimitOutputReference(this, "sip_request_rate_limit");
  public get sipRequestRateLimit() {
    return this._sipRequestRateLimit;
  }
  public putSipRequestRateLimit(value: DdosZoneTemplateSipDstSipRequestRateLimit) {
    this._sipRequestRateLimit.internalValue = value;
  }
  public resetSipRequestRateLimit() {
    this._sipRequestRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRequestRateLimitInput() {
    return this._sipRequestRateLimit.internalValue;
  }
}
export interface DdosZoneTemplateSipFilterHeaderListSipHeaderCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_header_inverse_match DdosZoneTemplateSip#sip_filter_header_inverse_match}
  */
  readonly sipFilterHeaderInverseMatch?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_header_regex DdosZoneTemplateSip#sip_filter_header_regex}
  */
  readonly sipFilterHeaderRegex?: string;
}

export function ddosZoneTemplateSipFilterHeaderListSipHeaderCfgToTerraform(struct?: DdosZoneTemplateSipFilterHeaderListSipHeaderCfgOutputReference | DdosZoneTemplateSipFilterHeaderListSipHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_filter_header_inverse_match: cdktf.numberToTerraform(struct!.sipFilterHeaderInverseMatch),
    sip_filter_header_regex: cdktf.stringToTerraform(struct!.sipFilterHeaderRegex),
  }
}


export function ddosZoneTemplateSipFilterHeaderListSipHeaderCfgToHclTerraform(struct?: DdosZoneTemplateSipFilterHeaderListSipHeaderCfgOutputReference | DdosZoneTemplateSipFilterHeaderListSipHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_filter_header_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_header_regex: {
      value: cdktf.stringToHclTerraform(struct!.sipFilterHeaderRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipFilterHeaderListSipHeaderCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipFilterHeaderListSipHeaderCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipFilterHeaderInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderInverseMatch = this._sipFilterHeaderInverseMatch;
    }
    if (this._sipFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderRegex = this._sipFilterHeaderRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipFilterHeaderListSipHeaderCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sipFilterHeaderInverseMatch = undefined;
      this._sipFilterHeaderRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sipFilterHeaderInverseMatch = value.sipFilterHeaderInverseMatch;
      this._sipFilterHeaderRegex = value.sipFilterHeaderRegex;
    }
  }

  // sip_filter_header_inverse_match - computed: false, optional: true, required: false
  private _sipFilterHeaderInverseMatch?: number; 
  public get sipFilterHeaderInverseMatch() {
    return this.getNumberAttribute('sip_filter_header_inverse_match');
  }
  public set sipFilterHeaderInverseMatch(value: number) {
    this._sipFilterHeaderInverseMatch = value;
  }
  public resetSipFilterHeaderInverseMatch() {
    this._sipFilterHeaderInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderInverseMatchInput() {
    return this._sipFilterHeaderInverseMatch;
  }

  // sip_filter_header_regex - computed: false, optional: true, required: false
  private _sipFilterHeaderRegex?: string; 
  public get sipFilterHeaderRegex() {
    return this.getStringAttribute('sip_filter_header_regex');
  }
  public set sipFilterHeaderRegex(value: string) {
    this._sipFilterHeaderRegex = value;
  }
  public resetSipFilterHeaderRegex() {
    this._sipFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderRegexInput() {
    return this._sipFilterHeaderRegex;
  }
}
export interface DdosZoneTemplateSipFilterHeaderListStruct {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src; 'reset': Reset client connection(for sip-tcp);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_action DdosZoneTemplateSip#sip_filter_action}
  */
  readonly sipFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_action_list_name DdosZoneTemplateSip#sip_filter_action_list_name}
  */
  readonly sipFilterActionListName?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_header_seq DdosZoneTemplateSip#sip_filter_header_seq}
  */
  readonly sipFilterHeaderSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_filter_name DdosZoneTemplateSip#sip_filter_name}
  */
  readonly sipFilterName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#user_tag DdosZoneTemplateSip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#uuid DdosZoneTemplateSip#uuid}
  */
  readonly uuid?: string;
  /**
  * sip_header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_header_cfg DdosZoneTemplateSip#sip_header_cfg}
  */
  readonly sipHeaderCfg?: DdosZoneTemplateSipFilterHeaderListSipHeaderCfg;
}

export function ddosZoneTemplateSipFilterHeaderListStructToTerraform(struct?: DdosZoneTemplateSipFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_filter_action: cdktf.stringToTerraform(struct!.sipFilterAction),
    sip_filter_action_list_name: cdktf.stringToTerraform(struct!.sipFilterActionListName),
    sip_filter_header_seq: cdktf.numberToTerraform(struct!.sipFilterHeaderSeq),
    sip_filter_name: cdktf.stringToTerraform(struct!.sipFilterName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sip_header_cfg: ddosZoneTemplateSipFilterHeaderListSipHeaderCfgToTerraform(struct!.sipHeaderCfg),
  }
}


export function ddosZoneTemplateSipFilterHeaderListStructToHclTerraform(struct?: DdosZoneTemplateSipFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.sipFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_filter_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.sipFilterActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_filter_header_seq: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.sipFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_header_cfg: {
      value: ddosZoneTemplateSipFilterHeaderListSipHeaderCfgToHclTerraform(struct!.sipHeaderCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipFilterHeaderListSipHeaderCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipFilterHeaderListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosZoneTemplateSipFilterHeaderListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterAction = this._sipFilterAction;
    }
    if (this._sipFilterActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterActionListName = this._sipFilterActionListName;
    }
    if (this._sipFilterHeaderSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderSeq = this._sipFilterHeaderSeq;
    }
    if (this._sipFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterName = this._sipFilterName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._sipHeaderCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipHeaderCfg = this._sipHeaderCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipFilterHeaderListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sipFilterAction = undefined;
      this._sipFilterActionListName = undefined;
      this._sipFilterHeaderSeq = undefined;
      this._sipFilterName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._sipHeaderCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sipFilterAction = value.sipFilterAction;
      this._sipFilterActionListName = value.sipFilterActionListName;
      this._sipFilterHeaderSeq = value.sipFilterHeaderSeq;
      this._sipFilterName = value.sipFilterName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._sipHeaderCfg.internalValue = value.sipHeaderCfg;
    }
  }

  // sip_filter_action - computed: false, optional: true, required: false
  private _sipFilterAction?: string; 
  public get sipFilterAction() {
    return this.getStringAttribute('sip_filter_action');
  }
  public set sipFilterAction(value: string) {
    this._sipFilterAction = value;
  }
  public resetSipFilterAction() {
    this._sipFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterActionInput() {
    return this._sipFilterAction;
  }

  // sip_filter_action_list_name - computed: false, optional: true, required: false
  private _sipFilterActionListName?: string; 
  public get sipFilterActionListName() {
    return this.getStringAttribute('sip_filter_action_list_name');
  }
  public set sipFilterActionListName(value: string) {
    this._sipFilterActionListName = value;
  }
  public resetSipFilterActionListName() {
    this._sipFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterActionListNameInput() {
    return this._sipFilterActionListName;
  }

  // sip_filter_header_seq - computed: false, optional: true, required: false
  private _sipFilterHeaderSeq?: number; 
  public get sipFilterHeaderSeq() {
    return this.getNumberAttribute('sip_filter_header_seq');
  }
  public set sipFilterHeaderSeq(value: number) {
    this._sipFilterHeaderSeq = value;
  }
  public resetSipFilterHeaderSeq() {
    this._sipFilterHeaderSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderSeqInput() {
    return this._sipFilterHeaderSeq;
  }

  // sip_filter_name - computed: false, optional: false, required: true
  private _sipFilterName?: string; 
  public get sipFilterName() {
    return this.getStringAttribute('sip_filter_name');
  }
  public set sipFilterName(value: string) {
    this._sipFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterNameInput() {
    return this._sipFilterName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sip_header_cfg - computed: false, optional: true, required: false
  private _sipHeaderCfg = new DdosZoneTemplateSipFilterHeaderListSipHeaderCfgOutputReference(this, "sip_header_cfg");
  public get sipHeaderCfg() {
    return this._sipHeaderCfg;
  }
  public putSipHeaderCfg(value: DdosZoneTemplateSipFilterHeaderListSipHeaderCfg) {
    this._sipHeaderCfg.internalValue = value;
  }
  public resetSipHeaderCfg() {
    this._sipHeaderCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderCfgInput() {
    return this._sipHeaderCfg.internalValue;
  }
}

export class DdosZoneTemplateSipFilterHeaderListStructList extends cdktf.ComplexList {
  public internalValue? : DdosZoneTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosZoneTemplateSipFilterHeaderListStructOutputReference {
    return new DdosZoneTemplateSipFilterHeaderListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosZoneTemplateSipIdleTimeout {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src; 'reset': Reset (sip-tcp) client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#idle_timeout_action DdosZoneTemplateSip#idle_timeout_action}
  */
  readonly idleTimeoutAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#idle_timeout_action_list_name DdosZoneTemplateSip#idle_timeout_action_list_name}
  */
  readonly idleTimeoutActionListName?: string;
  /**
  * Set the the idle timeout value for SIP-TCP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#idle_timeout_value DdosZoneTemplateSip#idle_timeout_value}
  */
  readonly idleTimeoutValue?: number;
  /**
  * Don't reset idle timer on packets with zero payload length from clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#ignore_zero_payload DdosZoneTemplateSip#ignore_zero_payload}
  */
  readonly ignoreZeroPayload?: number;
}

export function ddosZoneTemplateSipIdleTimeoutToTerraform(struct?: DdosZoneTemplateSipIdleTimeoutOutputReference | DdosZoneTemplateSipIdleTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_action: cdktf.stringToTerraform(struct!.idleTimeoutAction),
    idle_timeout_action_list_name: cdktf.stringToTerraform(struct!.idleTimeoutActionListName),
    idle_timeout_value: cdktf.numberToTerraform(struct!.idleTimeoutValue),
    ignore_zero_payload: cdktf.numberToTerraform(struct!.ignoreZeroPayload),
  }
}


export function ddosZoneTemplateSipIdleTimeoutToHclTerraform(struct?: DdosZoneTemplateSipIdleTimeoutOutputReference | DdosZoneTemplateSipIdleTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeoutActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_value: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_zero_payload: {
      value: cdktf.numberToHclTerraform(struct!.ignoreZeroPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipIdleTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipIdleTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutAction = this._idleTimeoutAction;
    }
    if (this._idleTimeoutActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutActionListName = this._idleTimeoutActionListName;
    }
    if (this._idleTimeoutValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutValue = this._idleTimeoutValue;
    }
    if (this._ignoreZeroPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreZeroPayload = this._ignoreZeroPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipIdleTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutAction = undefined;
      this._idleTimeoutActionListName = undefined;
      this._idleTimeoutValue = undefined;
      this._ignoreZeroPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutAction = value.idleTimeoutAction;
      this._idleTimeoutActionListName = value.idleTimeoutActionListName;
      this._idleTimeoutValue = value.idleTimeoutValue;
      this._ignoreZeroPayload = value.ignoreZeroPayload;
    }
  }

  // idle_timeout_action - computed: false, optional: true, required: false
  private _idleTimeoutAction?: string; 
  public get idleTimeoutAction() {
    return this.getStringAttribute('idle_timeout_action');
  }
  public set idleTimeoutAction(value: string) {
    this._idleTimeoutAction = value;
  }
  public resetIdleTimeoutAction() {
    this._idleTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutActionInput() {
    return this._idleTimeoutAction;
  }

  // idle_timeout_action_list_name - computed: false, optional: true, required: false
  private _idleTimeoutActionListName?: string; 
  public get idleTimeoutActionListName() {
    return this.getStringAttribute('idle_timeout_action_list_name');
  }
  public set idleTimeoutActionListName(value: string) {
    this._idleTimeoutActionListName = value;
  }
  public resetIdleTimeoutActionListName() {
    this._idleTimeoutActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutActionListNameInput() {
    return this._idleTimeoutActionListName;
  }

  // idle_timeout_value - computed: false, optional: true, required: false
  private _idleTimeoutValue?: number; 
  public get idleTimeoutValue() {
    return this.getNumberAttribute('idle_timeout_value');
  }
  public set idleTimeoutValue(value: number) {
    this._idleTimeoutValue = value;
  }
  public resetIdleTimeoutValue() {
    this._idleTimeoutValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutValueInput() {
    return this._idleTimeoutValue;
  }

  // ignore_zero_payload - computed: false, optional: true, required: false
  private _ignoreZeroPayload?: number; 
  public get ignoreZeroPayload() {
    return this.getNumberAttribute('ignore_zero_payload');
  }
  public set ignoreZeroPayload(value: number) {
    this._ignoreZeroPayload = value;
  }
  public resetIgnoreZeroPayload() {
    this._ignoreZeroPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreZeroPayloadInput() {
    return this._ignoreZeroPayload;
  }
}
export interface DdosZoneTemplateSipMalformedSip {
  /**
  * 'drop': Drop packets (Default); 'reset': Reset (sip-tcp) client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_action DdosZoneTemplateSip#malformed_sip_action}
  */
  readonly malformedSipAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_action_list_name DdosZoneTemplateSip#malformed_sip_action_list_name}
  */
  readonly malformedSipActionListName?: string;
  /**
  * Set the maximum call-id length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_call_id_max_length DdosZoneTemplateSip#malformed_sip_call_id_max_length}
  */
  readonly malformedSipCallIdMaxLength?: number;
  /**
  * 'enable-check': Enable malformed SIP parameters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_check DdosZoneTemplateSip#malformed_sip_check}
  */
  readonly malformedSipCheck?: string;
  /**
  * Set the maximum header name length. Default value is 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_max_header_name_length DdosZoneTemplateSip#malformed_sip_max_header_name_length}
  */
  readonly malformedSipMaxHeaderNameLength?: number;
  /**
  * Set the maximum header value length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_max_header_value_length DdosZoneTemplateSip#malformed_sip_max_header_value_length}
  */
  readonly malformedSipMaxHeaderValueLength?: number;
  /**
  * Set the maximum line size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_max_line_size DdosZoneTemplateSip#malformed_sip_max_line_size}
  */
  readonly malformedSipMaxLineSize?: number;
  /**
  * Set the maximum uri size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_max_uri_length DdosZoneTemplateSip#malformed_sip_max_uri_length}
  */
  readonly malformedSipMaxUriLength?: number;
  /**
  * Set the maxinum SDP content length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#malformed_sip_sdp_max_length DdosZoneTemplateSip#malformed_sip_sdp_max_length}
  */
  readonly malformedSipSdpMaxLength?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#uuid DdosZoneTemplateSip#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateSipMalformedSipToTerraform(struct?: DdosZoneTemplateSipMalformedSipOutputReference | DdosZoneTemplateSipMalformedSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_sip_action: cdktf.stringToTerraform(struct!.malformedSipAction),
    malformed_sip_action_list_name: cdktf.stringToTerraform(struct!.malformedSipActionListName),
    malformed_sip_call_id_max_length: cdktf.numberToTerraform(struct!.malformedSipCallIdMaxLength),
    malformed_sip_check: cdktf.stringToTerraform(struct!.malformedSipCheck),
    malformed_sip_max_header_name_length: cdktf.numberToTerraform(struct!.malformedSipMaxHeaderNameLength),
    malformed_sip_max_header_value_length: cdktf.numberToTerraform(struct!.malformedSipMaxHeaderValueLength),
    malformed_sip_max_line_size: cdktf.numberToTerraform(struct!.malformedSipMaxLineSize),
    malformed_sip_max_uri_length: cdktf.numberToTerraform(struct!.malformedSipMaxUriLength),
    malformed_sip_sdp_max_length: cdktf.numberToTerraform(struct!.malformedSipSdpMaxLength),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateSipMalformedSipToHclTerraform(struct?: DdosZoneTemplateSipMalformedSipOutputReference | DdosZoneTemplateSipMalformedSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_sip_action: {
      value: cdktf.stringToHclTerraform(struct!.malformedSipAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_sip_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.malformedSipActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_sip_call_id_max_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipCallIdMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_sip_check: {
      value: cdktf.stringToHclTerraform(struct!.malformedSipCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_sip_max_header_name_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipMaxHeaderNameLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_sip_max_header_value_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipMaxHeaderValueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_sip_max_line_size: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipMaxLineSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_sip_max_uri_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipMaxUriLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_sip_sdp_max_length: {
      value: cdktf.numberToHclTerraform(struct!.malformedSipSdpMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipMalformedSipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipMalformedSip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedSipAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipAction = this._malformedSipAction;
    }
    if (this._malformedSipActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipActionListName = this._malformedSipActionListName;
    }
    if (this._malformedSipCallIdMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipCallIdMaxLength = this._malformedSipCallIdMaxLength;
    }
    if (this._malformedSipCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipCheck = this._malformedSipCheck;
    }
    if (this._malformedSipMaxHeaderNameLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipMaxHeaderNameLength = this._malformedSipMaxHeaderNameLength;
    }
    if (this._malformedSipMaxHeaderValueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipMaxHeaderValueLength = this._malformedSipMaxHeaderValueLength;
    }
    if (this._malformedSipMaxLineSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipMaxLineSize = this._malformedSipMaxLineSize;
    }
    if (this._malformedSipMaxUriLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipMaxUriLength = this._malformedSipMaxUriLength;
    }
    if (this._malformedSipSdpMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedSipSdpMaxLength = this._malformedSipSdpMaxLength;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipMalformedSip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malformedSipAction = undefined;
      this._malformedSipActionListName = undefined;
      this._malformedSipCallIdMaxLength = undefined;
      this._malformedSipCheck = undefined;
      this._malformedSipMaxHeaderNameLength = undefined;
      this._malformedSipMaxHeaderValueLength = undefined;
      this._malformedSipMaxLineSize = undefined;
      this._malformedSipMaxUriLength = undefined;
      this._malformedSipSdpMaxLength = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malformedSipAction = value.malformedSipAction;
      this._malformedSipActionListName = value.malformedSipActionListName;
      this._malformedSipCallIdMaxLength = value.malformedSipCallIdMaxLength;
      this._malformedSipCheck = value.malformedSipCheck;
      this._malformedSipMaxHeaderNameLength = value.malformedSipMaxHeaderNameLength;
      this._malformedSipMaxHeaderValueLength = value.malformedSipMaxHeaderValueLength;
      this._malformedSipMaxLineSize = value.malformedSipMaxLineSize;
      this._malformedSipMaxUriLength = value.malformedSipMaxUriLength;
      this._malformedSipSdpMaxLength = value.malformedSipSdpMaxLength;
      this._uuid = value.uuid;
    }
  }

  // malformed_sip_action - computed: false, optional: true, required: false
  private _malformedSipAction?: string; 
  public get malformedSipAction() {
    return this.getStringAttribute('malformed_sip_action');
  }
  public set malformedSipAction(value: string) {
    this._malformedSipAction = value;
  }
  public resetMalformedSipAction() {
    this._malformedSipAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipActionInput() {
    return this._malformedSipAction;
  }

  // malformed_sip_action_list_name - computed: false, optional: true, required: false
  private _malformedSipActionListName?: string; 
  public get malformedSipActionListName() {
    return this.getStringAttribute('malformed_sip_action_list_name');
  }
  public set malformedSipActionListName(value: string) {
    this._malformedSipActionListName = value;
  }
  public resetMalformedSipActionListName() {
    this._malformedSipActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipActionListNameInput() {
    return this._malformedSipActionListName;
  }

  // malformed_sip_call_id_max_length - computed: false, optional: true, required: false
  private _malformedSipCallIdMaxLength?: number; 
  public get malformedSipCallIdMaxLength() {
    return this.getNumberAttribute('malformed_sip_call_id_max_length');
  }
  public set malformedSipCallIdMaxLength(value: number) {
    this._malformedSipCallIdMaxLength = value;
  }
  public resetMalformedSipCallIdMaxLength() {
    this._malformedSipCallIdMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipCallIdMaxLengthInput() {
    return this._malformedSipCallIdMaxLength;
  }

  // malformed_sip_check - computed: false, optional: true, required: false
  private _malformedSipCheck?: string; 
  public get malformedSipCheck() {
    return this.getStringAttribute('malformed_sip_check');
  }
  public set malformedSipCheck(value: string) {
    this._malformedSipCheck = value;
  }
  public resetMalformedSipCheck() {
    this._malformedSipCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipCheckInput() {
    return this._malformedSipCheck;
  }

  // malformed_sip_max_header_name_length - computed: false, optional: true, required: false
  private _malformedSipMaxHeaderNameLength?: number; 
  public get malformedSipMaxHeaderNameLength() {
    return this.getNumberAttribute('malformed_sip_max_header_name_length');
  }
  public set malformedSipMaxHeaderNameLength(value: number) {
    this._malformedSipMaxHeaderNameLength = value;
  }
  public resetMalformedSipMaxHeaderNameLength() {
    this._malformedSipMaxHeaderNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxHeaderNameLengthInput() {
    return this._malformedSipMaxHeaderNameLength;
  }

  // malformed_sip_max_header_value_length - computed: false, optional: true, required: false
  private _malformedSipMaxHeaderValueLength?: number; 
  public get malformedSipMaxHeaderValueLength() {
    return this.getNumberAttribute('malformed_sip_max_header_value_length');
  }
  public set malformedSipMaxHeaderValueLength(value: number) {
    this._malformedSipMaxHeaderValueLength = value;
  }
  public resetMalformedSipMaxHeaderValueLength() {
    this._malformedSipMaxHeaderValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxHeaderValueLengthInput() {
    return this._malformedSipMaxHeaderValueLength;
  }

  // malformed_sip_max_line_size - computed: false, optional: true, required: false
  private _malformedSipMaxLineSize?: number; 
  public get malformedSipMaxLineSize() {
    return this.getNumberAttribute('malformed_sip_max_line_size');
  }
  public set malformedSipMaxLineSize(value: number) {
    this._malformedSipMaxLineSize = value;
  }
  public resetMalformedSipMaxLineSize() {
    this._malformedSipMaxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxLineSizeInput() {
    return this._malformedSipMaxLineSize;
  }

  // malformed_sip_max_uri_length - computed: false, optional: true, required: false
  private _malformedSipMaxUriLength?: number; 
  public get malformedSipMaxUriLength() {
    return this.getNumberAttribute('malformed_sip_max_uri_length');
  }
  public set malformedSipMaxUriLength(value: number) {
    this._malformedSipMaxUriLength = value;
  }
  public resetMalformedSipMaxUriLength() {
    this._malformedSipMaxUriLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxUriLengthInput() {
    return this._malformedSipMaxUriLength;
  }

  // malformed_sip_sdp_max_length - computed: false, optional: true, required: false
  private _malformedSipSdpMaxLength?: number; 
  public get malformedSipSdpMaxLength() {
    return this.getNumberAttribute('malformed_sip_sdp_max_length');
  }
  public set malformedSipSdpMaxLength(value: number) {
    this._malformedSipSdpMaxLength = value;
  }
  public resetMalformedSipSdpMaxLength() {
    this._malformedSipSdpMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipSdpMaxLengthInput() {
    return this._malformedSipSdpMaxLength;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosZoneTemplateSipMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#multi_pu_threshold_distribution_disable DdosZoneTemplateSip#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#multi_pu_threshold_distribution_value DdosZoneTemplateSip#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosZoneTemplateSipMultiPuThresholdDistributionToTerraform(struct?: DdosZoneTemplateSipMultiPuThresholdDistributionOutputReference | DdosZoneTemplateSipMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosZoneTemplateSipMultiPuThresholdDistributionToHclTerraform(struct?: DdosZoneTemplateSipMultiPuThresholdDistributionOutputReference | DdosZoneTemplateSipMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_pu_threshold_distribution_disable: {
      value: cdktf.stringToHclTerraform(struct!.multiPuThresholdDistributionDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_pu_threshold_distribution_value: {
      value: cdktf.numberToHclTerraform(struct!.multiPuThresholdDistributionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipMultiPuThresholdDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiPuThresholdDistributionDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionDisable = this._multiPuThresholdDistributionDisable;
    }
    if (this._multiPuThresholdDistributionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionValue = this._multiPuThresholdDistributionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipMultiPuThresholdDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiPuThresholdDistributionDisable = undefined;
      this._multiPuThresholdDistributionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiPuThresholdDistributionDisable = value.multiPuThresholdDistributionDisable;
      this._multiPuThresholdDistributionValue = value.multiPuThresholdDistributionValue;
    }
  }

  // multi_pu_threshold_distribution_disable - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionDisable?: string; 
  public get multiPuThresholdDistributionDisable() {
    return this.getStringAttribute('multi_pu_threshold_distribution_disable');
  }
  public set multiPuThresholdDistributionDisable(value: string) {
    this._multiPuThresholdDistributionDisable = value;
  }
  public resetMultiPuThresholdDistributionDisable() {
    this._multiPuThresholdDistributionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionDisableInput() {
    return this._multiPuThresholdDistributionDisable;
  }

  // multi_pu_threshold_distribution_value - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionValue?: number; 
  public get multiPuThresholdDistributionValue() {
    return this.getNumberAttribute('multi_pu_threshold_distribution_value');
  }
  public set multiPuThresholdDistributionValue(value: number) {
    this._multiPuThresholdDistributionValue = value;
  }
  public resetMultiPuThresholdDistributionValue() {
    this._multiPuThresholdDistributionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionValueInput() {
    return this._multiPuThresholdDistributionValue;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg {
  /**
  * BYE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#bye DdosZoneTemplateSip#bye}
  */
  readonly bye?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_bye_rate DdosZoneTemplateSip#src_sip_bye_rate}
  */
  readonly srcSipByeRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye: cdktf.numberToTerraform(struct!.bye),
    src_sip_bye_rate: cdktf.numberToTerraform(struct!.srcSipByeRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye: {
      value: cdktf.numberToHclTerraform(struct!.bye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_bye_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipByeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bye !== undefined) {
      hasAnyValues = true;
      internalValueResult.bye = this._bye;
    }
    if (this._srcSipByeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipByeRate = this._srcSipByeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bye = undefined;
      this._srcSipByeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bye = value.bye;
      this._srcSipByeRate = value.srcSipByeRate;
    }
  }

  // bye - computed: false, optional: true, required: false
  private _bye?: number; 
  public get bye() {
    return this.getNumberAttribute('bye');
  }
  public set bye(value: number) {
    this._bye = value;
  }
  public resetBye() {
    this._bye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeInput() {
    return this._bye;
  }

  // src_sip_bye_rate - computed: false, optional: true, required: false
  private _srcSipByeRate?: number; 
  public get srcSipByeRate() {
    return this.getNumberAttribute('src_sip_bye_rate');
  }
  public set srcSipByeRate(value: number) {
    this._srcSipByeRate = value;
  }
  public resetSrcSipByeRate() {
    this._srcSipByeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipByeRateInput() {
    return this._srcSipByeRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg {
  /**
  * INVITE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#invite DdosZoneTemplateSip#invite}
  */
  readonly invite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_invite_rate DdosZoneTemplateSip#src_sip_invite_rate}
  */
  readonly srcSipInviteRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invite: cdktf.numberToTerraform(struct!.invite),
    src_sip_invite_rate: cdktf.numberToTerraform(struct!.srcSipInviteRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invite: {
      value: cdktf.numberToHclTerraform(struct!.invite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_invite_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipInviteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invite !== undefined) {
      hasAnyValues = true;
      internalValueResult.invite = this._invite;
    }
    if (this._srcSipInviteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipInviteRate = this._srcSipInviteRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invite = undefined;
      this._srcSipInviteRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invite = value.invite;
      this._srcSipInviteRate = value.srcSipInviteRate;
    }
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: number; 
  public get invite() {
    return this.getNumberAttribute('invite');
  }
  public set invite(value: number) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite;
  }

  // src_sip_invite_rate - computed: false, optional: true, required: false
  private _srcSipInviteRate?: number; 
  public get srcSipInviteRate() {
    return this.getNumberAttribute('src_sip_invite_rate');
  }
  public set srcSipInviteRate(value: number) {
    this._srcSipInviteRate = value;
  }
  public resetSrcSipInviteRate() {
    this._srcSipInviteRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipInviteRateInput() {
    return this._srcSipInviteRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg {
  /**
  * MESSAGE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#message DdosZoneTemplateSip#message}
  */
  readonly message?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_message_rate DdosZoneTemplateSip#src_sip_message_rate}
  */
  readonly srcSipMessageRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.numberToTerraform(struct!.message),
    src_sip_message_rate: cdktf.numberToTerraform(struct!.srcSipMessageRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.numberToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_message_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipMessageRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._srcSipMessageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipMessageRate = this._srcSipMessageRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._srcSipMessageRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._srcSipMessageRate = value.srcSipMessageRate;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // src_sip_message_rate - computed: false, optional: true, required: false
  private _srcSipMessageRate?: number; 
  public get srcSipMessageRate() {
    return this.getNumberAttribute('src_sip_message_rate');
  }
  public set srcSipMessageRate(value: number) {
    this._srcSipMessageRate = value;
  }
  public resetSrcSipMessageRate() {
    this._srcSipMessageRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipMessageRateInput() {
    return this._srcSipMessageRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg {
  /**
  * NOTIFY method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#notify DdosZoneTemplateSip#notify}
  */
  readonly notify?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_notify_rate DdosZoneTemplateSip#src_sip_notify_rate}
  */
  readonly srcSipNotifyRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify: cdktf.numberToTerraform(struct!.notify),
    src_sip_notify_rate: cdktf.numberToTerraform(struct!.srcSipNotifyRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify: {
      value: cdktf.numberToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_notify_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipNotifyRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    if (this._srcSipNotifyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipNotifyRate = this._srcSipNotifyRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notify = undefined;
      this._srcSipNotifyRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notify = value.notify;
      this._srcSipNotifyRate = value.srcSipNotifyRate;
    }
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: number; 
  public get notify() {
    return this.getNumberAttribute('notify');
  }
  public set notify(value: number) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // src_sip_notify_rate - computed: false, optional: true, required: false
  private _srcSipNotifyRate?: number; 
  public get srcSipNotifyRate() {
    return this.getNumberAttribute('src_sip_notify_rate');
  }
  public set srcSipNotifyRate(value: number) {
    this._srcSipNotifyRate = value;
  }
  public resetSrcSipNotifyRate() {
    this._srcSipNotifyRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipNotifyRateInput() {
    return this._srcSipNotifyRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg {
  /**
  * OPTIONS method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#options DdosZoneTemplateSip#options}
  */
  readonly options?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_options_rate DdosZoneTemplateSip#src_sip_options_rate}
  */
  readonly srcSipOptionsRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.numberToTerraform(struct!.options),
    src_sip_options_rate: cdktf.numberToTerraform(struct!.srcSipOptionsRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.numberToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_options_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipOptionsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._srcSipOptionsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipOptionsRate = this._srcSipOptionsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._options = undefined;
      this._srcSipOptionsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._options = value.options;
      this._srcSipOptionsRate = value.srcSipOptionsRate;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: number; 
  public get options() {
    return this.getNumberAttribute('options');
  }
  public set options(value: number) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // src_sip_options_rate - computed: false, optional: true, required: false
  private _srcSipOptionsRate?: number; 
  public get srcSipOptionsRate() {
    return this.getNumberAttribute('src_sip_options_rate');
  }
  public set srcSipOptionsRate(value: number) {
    this._srcSipOptionsRate = value;
  }
  public resetSrcSipOptionsRate() {
    this._srcSipOptionsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipOptionsRateInput() {
    return this._srcSipOptionsRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg {
  /**
  * REFER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#refer DdosZoneTemplateSip#refer}
  */
  readonly refer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_refer_rate DdosZoneTemplateSip#src_sip_refer_rate}
  */
  readonly srcSipReferRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refer: cdktf.numberToTerraform(struct!.refer),
    src_sip_refer_rate: cdktf.numberToTerraform(struct!.srcSipReferRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refer: {
      value: cdktf.numberToHclTerraform(struct!.refer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_refer_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipReferRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refer !== undefined) {
      hasAnyValues = true;
      internalValueResult.refer = this._refer;
    }
    if (this._srcSipReferRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipReferRate = this._srcSipReferRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refer = undefined;
      this._srcSipReferRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refer = value.refer;
      this._srcSipReferRate = value.srcSipReferRate;
    }
  }

  // refer - computed: false, optional: true, required: false
  private _refer?: number; 
  public get refer() {
    return this.getNumberAttribute('refer');
  }
  public set refer(value: number) {
    this._refer = value;
  }
  public resetRefer() {
    this._refer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referInput() {
    return this._refer;
  }

  // src_sip_refer_rate - computed: false, optional: true, required: false
  private _srcSipReferRate?: number; 
  public get srcSipReferRate() {
    return this.getNumberAttribute('src_sip_refer_rate');
  }
  public set srcSipReferRate(value: number) {
    this._srcSipReferRate = value;
  }
  public resetSrcSipReferRate() {
    this._srcSipReferRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipReferRateInput() {
    return this._srcSipReferRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg {
  /**
  * REGISTER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#register DdosZoneTemplateSip#register}
  */
  readonly register?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_register_rate DdosZoneTemplateSip#src_sip_register_rate}
  */
  readonly srcSipRegisterRate?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    register: cdktf.numberToTerraform(struct!.register),
    src_sip_register_rate: cdktf.numberToTerraform(struct!.srcSipRegisterRate),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    register: {
      value: cdktf.numberToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_register_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipRegisterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    if (this._srcSipRegisterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipRegisterRate = this._srcSipRegisterRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._register = undefined;
      this._srcSipRegisterRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._register = value.register;
      this._srcSipRegisterRate = value.srcSipRegisterRate;
    }
  }

  // register - computed: false, optional: true, required: false
  private _register?: number; 
  public get register() {
    return this.getNumberAttribute('register');
  }
  public set register(value: number) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // src_sip_register_rate - computed: false, optional: true, required: false
  private _srcSipRegisterRate?: number; 
  public get srcSipRegisterRate() {
    return this.getNumberAttribute('src_sip_register_rate');
  }
  public set srcSipRegisterRate(value: number) {
    this._srcSipRegisterRate = value;
  }
  public resetSrcSipRegisterRate() {
    this._srcSipRegisterRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipRegisterRateInput() {
    return this._srcSipRegisterRate;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_subscribe_rate DdosZoneTemplateSip#src_sip_subscribe_rate}
  */
  readonly srcSipSubscribeRate?: number;
  /**
  * SUBSCRIBE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#subscribe DdosZoneTemplateSip#subscribe}
  */
  readonly subscribe?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_subscribe_rate: cdktf.numberToTerraform(struct!.srcSipSubscribeRate),
    subscribe: cdktf.numberToTerraform(struct!.subscribe),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_subscribe_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipSubscribeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subscribe: {
      value: cdktf.numberToHclTerraform(struct!.subscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipSubscribeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipSubscribeRate = this._srcSipSubscribeRate;
    }
    if (this._subscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribe = this._subscribe;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipSubscribeRate = undefined;
      this._subscribe = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipSubscribeRate = value.srcSipSubscribeRate;
      this._subscribe = value.subscribe;
    }
  }

  // src_sip_subscribe_rate - computed: false, optional: true, required: false
  private _srcSipSubscribeRate?: number; 
  public get srcSipSubscribeRate() {
    return this.getNumberAttribute('src_sip_subscribe_rate');
  }
  public set srcSipSubscribeRate(value: number) {
    this._srcSipSubscribeRate = value;
  }
  public resetSrcSipSubscribeRate() {
    this._srcSipSubscribeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipSubscribeRateInput() {
    return this._srcSipSubscribeRate;
  }

  // subscribe - computed: false, optional: true, required: false
  private _subscribe?: number; 
  public get subscribe() {
    return this.getNumberAttribute('subscribe');
  }
  public set subscribe(value: number) {
    this._subscribe = value;
  }
  public resetSubscribe() {
    this._subscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeInput() {
    return this._subscribe;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_update_rate DdosZoneTemplateSip#src_sip_update_rate}
  */
  readonly srcSipUpdateRate?: number;
  /**
  * UPDATE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#update DdosZoneTemplateSip#update}
  */
  readonly update?: number;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_update_rate: cdktf.numberToTerraform(struct!.srcSipUpdateRate),
    update: cdktf.numberToTerraform(struct!.update),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_update_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipUpdateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipUpdateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipUpdateRate = this._srcSipUpdateRate;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipUpdateRate = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipUpdateRate = value.srcSipUpdateRate;
      this._update = value.update;
    }
  }

  // src_sip_update_rate - computed: false, optional: true, required: false
  private _srcSipUpdateRate?: number; 
  public get srcSipUpdateRate() {
    return this.getNumberAttribute('src_sip_update_rate');
  }
  public set srcSipUpdateRate(value: number) {
    this._srcSipUpdateRate = value;
  }
  public resetSrcSipUpdateRate() {
    this._srcSipUpdateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipUpdateRateInput() {
    return this._srcSipUpdateRate;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimitMethod {
  /**
  * bye_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#bye_cfg DdosZoneTemplateSip#bye_cfg}
  */
  readonly byeCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg;
  /**
  * invite_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#invite_cfg DdosZoneTemplateSip#invite_cfg}
  */
  readonly inviteCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg;
  /**
  * message_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#message_cfg DdosZoneTemplateSip#message_cfg}
  */
  readonly messageCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg;
  /**
  * notify_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#notify_cfg DdosZoneTemplateSip#notify_cfg}
  */
  readonly notifyCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg;
  /**
  * options_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#options_cfg DdosZoneTemplateSip#options_cfg}
  */
  readonly optionsCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg;
  /**
  * refer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#refer_cfg DdosZoneTemplateSip#refer_cfg}
  */
  readonly referCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg;
  /**
  * register_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#register_cfg DdosZoneTemplateSip#register_cfg}
  */
  readonly registerCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg;
  /**
  * subscribe_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#subscribe_cfg DdosZoneTemplateSip#subscribe_cfg}
  */
  readonly subscribeCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg;
  /**
  * update_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#update_cfg DdosZoneTemplateSip#update_cfg}
  */
  readonly updateCfg?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgToTerraform(struct!.byeCfg),
    invite_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgToTerraform(struct!.inviteCfg),
    message_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgToTerraform(struct!.messageCfg),
    notify_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToTerraform(struct!.notifyCfg),
    options_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToTerraform(struct!.optionsCfg),
    refer_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgToTerraform(struct!.referCfg),
    register_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToTerraform(struct!.registerCfg),
    subscribe_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToTerraform(struct!.subscribeCfg),
    update_cfg: ddosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToTerraform(struct!.updateCfg),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitMethodToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgToHclTerraform(struct!.byeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgList",
    },
    invite_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgToHclTerraform(struct!.inviteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgList",
    },
    message_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgToHclTerraform(struct!.messageCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgList",
    },
    notify_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct!.notifyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgList",
    },
    options_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct!.optionsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgList",
    },
    refer_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgToHclTerraform(struct!.referCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgList",
    },
    register_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct!.registerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgList",
    },
    subscribe_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct!.subscribeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgList",
    },
    update_cfg: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct!.updateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimitMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byeCfg = this._byeCfg?.internalValue;
    }
    if (this._inviteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inviteCfg = this._inviteCfg?.internalValue;
    }
    if (this._messageCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCfg = this._messageCfg?.internalValue;
    }
    if (this._notifyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyCfg = this._notifyCfg?.internalValue;
    }
    if (this._optionsCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsCfg = this._optionsCfg?.internalValue;
    }
    if (this._referCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referCfg = this._referCfg?.internalValue;
    }
    if (this._registerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerCfg = this._registerCfg?.internalValue;
    }
    if (this._subscribeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeCfg = this._subscribeCfg?.internalValue;
    }
    if (this._updateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCfg = this._updateCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._byeCfg.internalValue = undefined;
      this._inviteCfg.internalValue = undefined;
      this._messageCfg.internalValue = undefined;
      this._notifyCfg.internalValue = undefined;
      this._optionsCfg.internalValue = undefined;
      this._referCfg.internalValue = undefined;
      this._registerCfg.internalValue = undefined;
      this._subscribeCfg.internalValue = undefined;
      this._updateCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._byeCfg.internalValue = value.byeCfg;
      this._inviteCfg.internalValue = value.inviteCfg;
      this._messageCfg.internalValue = value.messageCfg;
      this._notifyCfg.internalValue = value.notifyCfg;
      this._optionsCfg.internalValue = value.optionsCfg;
      this._referCfg.internalValue = value.referCfg;
      this._registerCfg.internalValue = value.registerCfg;
      this._subscribeCfg.internalValue = value.subscribeCfg;
      this._updateCfg.internalValue = value.updateCfg;
    }
  }

  // bye_cfg - computed: false, optional: true, required: false
  private _byeCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference(this, "bye_cfg");
  public get byeCfg() {
    return this._byeCfg;
  }
  public putByeCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodByeCfg) {
    this._byeCfg.internalValue = value;
  }
  public resetByeCfg() {
    this._byeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byeCfgInput() {
    return this._byeCfg.internalValue;
  }

  // invite_cfg - computed: false, optional: true, required: false
  private _inviteCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference(this, "invite_cfg");
  public get inviteCfg() {
    return this._inviteCfg;
  }
  public putInviteCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodInviteCfg) {
    this._inviteCfg.internalValue = value;
  }
  public resetInviteCfg() {
    this._inviteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteCfgInput() {
    return this._inviteCfg.internalValue;
  }

  // message_cfg - computed: false, optional: true, required: false
  private _messageCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference(this, "message_cfg");
  public get messageCfg() {
    return this._messageCfg;
  }
  public putMessageCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodMessageCfg) {
    this._messageCfg.internalValue = value;
  }
  public resetMessageCfg() {
    this._messageCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCfgInput() {
    return this._messageCfg.internalValue;
  }

  // notify_cfg - computed: false, optional: true, required: false
  private _notifyCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference(this, "notify_cfg");
  public get notifyCfg() {
    return this._notifyCfg;
  }
  public putNotifyCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodNotifyCfg) {
    this._notifyCfg.internalValue = value;
  }
  public resetNotifyCfg() {
    this._notifyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyCfgInput() {
    return this._notifyCfg.internalValue;
  }

  // options_cfg - computed: false, optional: true, required: false
  private _optionsCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference(this, "options_cfg");
  public get optionsCfg() {
    return this._optionsCfg;
  }
  public putOptionsCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodOptionsCfg) {
    this._optionsCfg.internalValue = value;
  }
  public resetOptionsCfg() {
    this._optionsCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsCfgInput() {
    return this._optionsCfg.internalValue;
  }

  // refer_cfg - computed: false, optional: true, required: false
  private _referCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference(this, "refer_cfg");
  public get referCfg() {
    return this._referCfg;
  }
  public putReferCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodReferCfg) {
    this._referCfg.internalValue = value;
  }
  public resetReferCfg() {
    this._referCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referCfgInput() {
    return this._referCfg.internalValue;
  }

  // register_cfg - computed: false, optional: true, required: false
  private _registerCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference(this, "register_cfg");
  public get registerCfg() {
    return this._registerCfg;
  }
  public putRegisterCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodRegisterCfg) {
    this._registerCfg.internalValue = value;
  }
  public resetRegisterCfg() {
    this._registerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerCfgInput() {
    return this._registerCfg.internalValue;
  }

  // subscribe_cfg - computed: false, optional: true, required: false
  private _subscribeCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference(this, "subscribe_cfg");
  public get subscribeCfg() {
    return this._subscribeCfg;
  }
  public putSubscribeCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg) {
    this._subscribeCfg.internalValue = value;
  }
  public resetSubscribeCfg() {
    this._subscribeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeCfgInput() {
    return this._subscribeCfg.internalValue;
  }

  // update_cfg - computed: false, optional: true, required: false
  private _updateCfg = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference(this, "update_cfg");
  public get updateCfg() {
    return this._updateCfg;
  }
  public putUpdateCfg(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethodUpdateCfg) {
    this._updateCfg.internalValue = value;
  }
  public resetUpdateCfg() {
    this._updateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCfgInput() {
    return this._updateCfg.internalValue;
  }
}
export interface DdosZoneTemplateSipSrcSipRequestRateLimit {
  /**
  * 'drop': Drop packets(Default); 'ignore': Take no action; 'reset': Reset (sip-tcp) client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_rate_action DdosZoneTemplateSip#src_sip_rate_action}
  */
  readonly srcSipRateAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#src_sip_rate_action_list_name DdosZoneTemplateSip#src_sip_rate_action_list_name}
  */
  readonly srcSipRateActionListName?: string;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#method DdosZoneTemplateSip#method}
  */
  readonly method?: DdosZoneTemplateSipSrcSipRequestRateLimitMethod;
}

export function ddosZoneTemplateSipSrcSipRequestRateLimitToTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_rate_action: cdktf.stringToTerraform(struct!.srcSipRateAction),
    src_sip_rate_action_list_name: cdktf.stringToTerraform(struct!.srcSipRateActionListName),
    method: ddosZoneTemplateSipSrcSipRequestRateLimitMethodToTerraform(struct!.method),
  }
}


export function ddosZoneTemplateSipSrcSipRequestRateLimitToHclTerraform(struct?: DdosZoneTemplateSipSrcSipRequestRateLimitOutputReference | DdosZoneTemplateSipSrcSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_rate_action: {
      value: cdktf.stringToHclTerraform(struct!.srcSipRateAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_sip_rate_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.srcSipRateActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcSipRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrcSipRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipRateAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipRateAction = this._srcSipRateAction;
    }
    if (this._srcSipRateActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipRateActionListName = this._srcSipRateActionListName;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrcSipRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipRateAction = undefined;
      this._srcSipRateActionListName = undefined;
      this._method.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipRateAction = value.srcSipRateAction;
      this._srcSipRateActionListName = value.srcSipRateActionListName;
      this._method.internalValue = value.method;
    }
  }

  // src_sip_rate_action - computed: false, optional: true, required: false
  private _srcSipRateAction?: string; 
  public get srcSipRateAction() {
    return this.getStringAttribute('src_sip_rate_action');
  }
  public set srcSipRateAction(value: string) {
    this._srcSipRateAction = value;
  }
  public resetSrcSipRateAction() {
    this._srcSipRateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipRateActionInput() {
    return this._srcSipRateAction;
  }

  // src_sip_rate_action_list_name - computed: false, optional: true, required: false
  private _srcSipRateActionListName?: string; 
  public get srcSipRateActionListName() {
    return this.getStringAttribute('src_sip_rate_action_list_name');
  }
  public set srcSipRateActionListName(value: string) {
    this._srcSipRateActionListName = value;
  }
  public resetSrcSipRateActionListName() {
    this._srcSipRateActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipRateActionListNameInput() {
    return this._srcSipRateActionListName;
  }

  // method - computed: false, optional: true, required: false
  private _method = new DdosZoneTemplateSipSrcSipRequestRateLimitMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DdosZoneTemplateSipSrcSipRequestRateLimitMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}
export interface DdosZoneTemplateSipSrc {
  /**
  * sip_request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#sip_request_rate_limit DdosZoneTemplateSip#sip_request_rate_limit}
  */
  readonly sipRequestRateLimit?: DdosZoneTemplateSipSrcSipRequestRateLimit;
}

export function ddosZoneTemplateSipSrcToTerraform(struct?: DdosZoneTemplateSipSrcOutputReference | DdosZoneTemplateSipSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_request_rate_limit: ddosZoneTemplateSipSrcSipRequestRateLimitToTerraform(struct!.sipRequestRateLimit),
  }
}


export function ddosZoneTemplateSipSrcToHclTerraform(struct?: DdosZoneTemplateSipSrcOutputReference | DdosZoneTemplateSipSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_request_rate_limit: {
      value: ddosZoneTemplateSipSrcSipRequestRateLimitToHclTerraform(struct!.sipRequestRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateSipSrcSipRequestRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipRequestRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRequestRateLimit = this._sipRequestRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipSrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sipRequestRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sipRequestRateLimit.internalValue = value.sipRequestRateLimit;
    }
  }

  // sip_request_rate_limit - computed: false, optional: true, required: false
  private _sipRequestRateLimit = new DdosZoneTemplateSipSrcSipRequestRateLimitOutputReference(this, "sip_request_rate_limit");
  public get sipRequestRateLimit() {
    return this._sipRequestRateLimit;
  }
  public putSipRequestRateLimit(value: DdosZoneTemplateSipSrcSipRequestRateLimit) {
    this._sipRequestRateLimit.internalValue = value;
  }
  public resetSipRequestRateLimit() {
    this._sipRequestRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipRequestRateLimitInput() {
    return this._sipRequestRateLimit.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip thunder_ddos_zone_template_sip}
*/
export class DdosZoneTemplateSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSip to import
  * @param importFromId The id of the existing DdosZoneTemplateSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip thunder_ddos_zone_template_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSipConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSipConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_sip',
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
    this._sipTmplName = config.sipTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dst.internalValue = config.dst;
    this._filterHeaderList.internalValue = config.filterHeaderList;
    this._idleTimeout.internalValue = config.idleTimeout;
    this._malformedSip.internalValue = config.malformedSip;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._src.internalValue = config.src;
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

  // sip_tmpl_name - computed: false, optional: false, required: true
  private _sipTmplName?: string; 
  public get sipTmplName() {
    return this.getStringAttribute('sip_tmpl_name');
  }
  public set sipTmplName(value: string) {
    this._sipTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTmplNameInput() {
    return this._sipTmplName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dst - computed: false, optional: true, required: false
  private _dst = new DdosZoneTemplateSipDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosZoneTemplateSipDst) {
    this._dst.internalValue = value;
  }
  public resetDst() {
    this._dst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst.internalValue;
  }

  // filter_header_list - computed: false, optional: true, required: false
  private _filterHeaderList = new DdosZoneTemplateSipFilterHeaderListStructList(this, "filter_header_list", false);
  public get filterHeaderList() {
    return this._filterHeaderList;
  }
  public putFilterHeaderList(value: DdosZoneTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable) {
    this._filterHeaderList.internalValue = value;
  }
  public resetFilterHeaderList() {
    this._filterHeaderList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeaderListInput() {
    return this._filterHeaderList.internalValue;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout = new DdosZoneTemplateSipIdleTimeoutOutputReference(this, "idle_timeout");
  public get idleTimeout() {
    return this._idleTimeout;
  }
  public putIdleTimeout(value: DdosZoneTemplateSipIdleTimeout) {
    this._idleTimeout.internalValue = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout.internalValue;
  }

  // malformed_sip - computed: false, optional: true, required: false
  private _malformedSip = new DdosZoneTemplateSipMalformedSipOutputReference(this, "malformed_sip");
  public get malformedSip() {
    return this._malformedSip;
  }
  public putMalformedSip(value: DdosZoneTemplateSipMalformedSip) {
    this._malformedSip.internalValue = value;
  }
  public resetMalformedSip() {
    this._malformedSip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipInput() {
    return this._malformedSip.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosZoneTemplateSipMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosZoneTemplateSipMultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // src - computed: false, optional: true, required: false
  private _src = new DdosZoneTemplateSipSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosZoneTemplateSipSrc) {
    this._src.internalValue = value;
  }
  public resetSrc() {
    this._src.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sip_tmpl_name: cdktf.stringToTerraform(this._sipTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dst: ddosZoneTemplateSipDstToTerraform(this._dst.internalValue),
      filter_header_list: cdktf.listMapper(ddosZoneTemplateSipFilterHeaderListStructToTerraform, true)(this._filterHeaderList.internalValue),
      idle_timeout: ddosZoneTemplateSipIdleTimeoutToTerraform(this._idleTimeout.internalValue),
      malformed_sip: ddosZoneTemplateSipMalformedSipToTerraform(this._malformedSip.internalValue),
      multi_pu_threshold_distribution: ddosZoneTemplateSipMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      src: ddosZoneTemplateSipSrcToTerraform(this._src.internalValue),
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
      sip_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sipTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: ddosZoneTemplateSipDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipDstList",
      },
      filter_header_list: {
        value: cdktf.listMapperHcl(ddosZoneTemplateSipFilterHeaderListStructToHclTerraform, true)(this._filterHeaderList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipFilterHeaderListStructList",
      },
      idle_timeout: {
        value: ddosZoneTemplateSipIdleTimeoutToHclTerraform(this._idleTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipIdleTimeoutList",
      },
      malformed_sip: {
        value: ddosZoneTemplateSipMalformedSipToHclTerraform(this._malformedSip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipMalformedSipList",
      },
      multi_pu_threshold_distribution: {
        value: ddosZoneTemplateSipMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipMultiPuThresholdDistributionList",
      },
      src: {
        value: ddosZoneTemplateSipSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipSrcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
