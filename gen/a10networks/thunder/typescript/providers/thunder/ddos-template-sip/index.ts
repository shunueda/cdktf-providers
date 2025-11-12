// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateSipConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets for sip connection; 'reset': Send RST for sip-tcp connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#action DdosTemplateSip#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#id DdosTemplateSip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set the the idle timeout value for sip-tcp connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#idle_timeout DdosTemplateSip#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Don't reset idle timer on packets with zero payload length from clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#ignore_zero_payload DdosTemplateSip#ignore_zero_payload}
  */
  readonly ignoreZeroPayload?: number;
  /**
  * DDOS SIP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_tmpl_name DdosTemplateSip#sip_tmpl_name}
  */
  readonly sipTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#user_tag DdosTemplateSip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#uuid DdosTemplateSip#uuid}
  */
  readonly uuid?: string;
  /**
  * dst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst DdosTemplateSip#dst}
  */
  readonly dst?: DdosTemplateSipDst;
  /**
  * filter_header_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#filter_header_list DdosTemplateSip#filter_header_list}
  */
  readonly filterHeaderList?: DdosTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable;
  /**
  * malformed_sip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip DdosTemplateSip#malformed_sip}
  */
  readonly malformedSip?: DdosTemplateSipMalformedSip;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#multi_pu_threshold_distribution DdosTemplateSip#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosTemplateSipMultiPuThresholdDistribution;
  /**
  * src block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src DdosTemplateSip#src}
  */
  readonly src?: DdosTemplateSipSrc;
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodByeCfg {
  /**
  * BYE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_bye_cfg_flag DdosTemplateSip#dst_sip_bye_cfg_flag}
  */
  readonly dstSipByeCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_bye_rate DdosTemplateSip#dst_sip_bye_rate}
  */
  readonly dstSipByeRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodByeCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_bye_cfg_flag: cdktf.numberToTerraform(struct!.dstSipByeCfgFlag),
    dst_sip_bye_rate: cdktf.numberToTerraform(struct!.dstSipByeRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodByeCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_bye_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipByeCfgFlag),
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

export class DdosTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodByeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipByeCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipByeCfgFlag = this._dstSipByeCfgFlag;
    }
    if (this._dstSipByeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipByeRate = this._dstSipByeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodByeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipByeCfgFlag = undefined;
      this._dstSipByeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipByeCfgFlag = value.dstSipByeCfgFlag;
      this._dstSipByeRate = value.dstSipByeRate;
    }
  }

  // dst_sip_bye_cfg_flag - computed: false, optional: true, required: false
  private _dstSipByeCfgFlag?: number; 
  public get dstSipByeCfgFlag() {
    return this.getNumberAttribute('dst_sip_bye_cfg_flag');
  }
  public set dstSipByeCfgFlag(value: number) {
    this._dstSipByeCfgFlag = value;
  }
  public resetDstSipByeCfgFlag() {
    this._dstSipByeCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipByeCfgFlagInput() {
    return this._dstSipByeCfgFlag;
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
export interface DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg {
  /**
  * INVITE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_invite_cfg_flag DdosTemplateSip#dst_sip_invite_cfg_flag}
  */
  readonly dstSipInviteCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_invite_rate DdosTemplateSip#dst_sip_invite_rate}
  */
  readonly dstSipInviteRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodInviteCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_invite_cfg_flag: cdktf.numberToTerraform(struct!.dstSipInviteCfgFlag),
    dst_sip_invite_rate: cdktf.numberToTerraform(struct!.dstSipInviteRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodInviteCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_invite_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipInviteCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_invite_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipInviteRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipInviteCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipInviteCfgFlag = this._dstSipInviteCfgFlag;
    }
    if (this._dstSipInviteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipInviteRate = this._dstSipInviteRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipInviteCfgFlag = undefined;
      this._dstSipInviteRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipInviteCfgFlag = value.dstSipInviteCfgFlag;
      this._dstSipInviteRate = value.dstSipInviteRate;
    }
  }

  // dst_sip_invite_cfg_flag - computed: false, optional: true, required: false
  private _dstSipInviteCfgFlag?: number; 
  public get dstSipInviteCfgFlag() {
    return this.getNumberAttribute('dst_sip_invite_cfg_flag');
  }
  public set dstSipInviteCfgFlag(value: number) {
    this._dstSipInviteCfgFlag = value;
  }
  public resetDstSipInviteCfgFlag() {
    this._dstSipInviteCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipInviteCfgFlagInput() {
    return this._dstSipInviteCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg {
  /**
  * MESSAGE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_message_cfg_flag DdosTemplateSip#dst_sip_message_cfg_flag}
  */
  readonly dstSipMessageCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_message_rate DdosTemplateSip#dst_sip_message_rate}
  */
  readonly dstSipMessageRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodMessageCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_message_cfg_flag: cdktf.numberToTerraform(struct!.dstSipMessageCfgFlag),
    dst_sip_message_rate: cdktf.numberToTerraform(struct!.dstSipMessageRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodMessageCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_message_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipMessageCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_message_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipMessageRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipMessageCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipMessageCfgFlag = this._dstSipMessageCfgFlag;
    }
    if (this._dstSipMessageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipMessageRate = this._dstSipMessageRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipMessageCfgFlag = undefined;
      this._dstSipMessageRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipMessageCfgFlag = value.dstSipMessageCfgFlag;
      this._dstSipMessageRate = value.dstSipMessageRate;
    }
  }

  // dst_sip_message_cfg_flag - computed: false, optional: true, required: false
  private _dstSipMessageCfgFlag?: number; 
  public get dstSipMessageCfgFlag() {
    return this.getNumberAttribute('dst_sip_message_cfg_flag');
  }
  public set dstSipMessageCfgFlag(value: number) {
    this._dstSipMessageCfgFlag = value;
  }
  public resetDstSipMessageCfgFlag() {
    this._dstSipMessageCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipMessageCfgFlagInput() {
    return this._dstSipMessageCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg {
  /**
  * NOTIFY method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_notify_cfg_flag DdosTemplateSip#dst_sip_notify_cfg_flag}
  */
  readonly dstSipNotifyCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_notify_rate DdosTemplateSip#dst_sip_notify_rate}
  */
  readonly dstSipNotifyRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodNotifyCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_notify_cfg_flag: cdktf.numberToTerraform(struct!.dstSipNotifyCfgFlag),
    dst_sip_notify_rate: cdktf.numberToTerraform(struct!.dstSipNotifyRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_notify_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipNotifyCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_notify_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipNotifyRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipNotifyCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipNotifyCfgFlag = this._dstSipNotifyCfgFlag;
    }
    if (this._dstSipNotifyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipNotifyRate = this._dstSipNotifyRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipNotifyCfgFlag = undefined;
      this._dstSipNotifyRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipNotifyCfgFlag = value.dstSipNotifyCfgFlag;
      this._dstSipNotifyRate = value.dstSipNotifyRate;
    }
  }

  // dst_sip_notify_cfg_flag - computed: false, optional: true, required: false
  private _dstSipNotifyCfgFlag?: number; 
  public get dstSipNotifyCfgFlag() {
    return this.getNumberAttribute('dst_sip_notify_cfg_flag');
  }
  public set dstSipNotifyCfgFlag(value: number) {
    this._dstSipNotifyCfgFlag = value;
  }
  public resetDstSipNotifyCfgFlag() {
    this._dstSipNotifyCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipNotifyCfgFlagInput() {
    return this._dstSipNotifyCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg {
  /**
  * OPTIONS method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_options_cfg_flag DdosTemplateSip#dst_sip_options_cfg_flag}
  */
  readonly dstSipOptionsCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_options_rate DdosTemplateSip#dst_sip_options_rate}
  */
  readonly dstSipOptionsRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodOptionsCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_options_cfg_flag: cdktf.numberToTerraform(struct!.dstSipOptionsCfgFlag),
    dst_sip_options_rate: cdktf.numberToTerraform(struct!.dstSipOptionsRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_options_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipOptionsCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_options_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipOptionsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipOptionsCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipOptionsCfgFlag = this._dstSipOptionsCfgFlag;
    }
    if (this._dstSipOptionsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipOptionsRate = this._dstSipOptionsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipOptionsCfgFlag = undefined;
      this._dstSipOptionsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipOptionsCfgFlag = value.dstSipOptionsCfgFlag;
      this._dstSipOptionsRate = value.dstSipOptionsRate;
    }
  }

  // dst_sip_options_cfg_flag - computed: false, optional: true, required: false
  private _dstSipOptionsCfgFlag?: number; 
  public get dstSipOptionsCfgFlag() {
    return this.getNumberAttribute('dst_sip_options_cfg_flag');
  }
  public set dstSipOptionsCfgFlag(value: number) {
    this._dstSipOptionsCfgFlag = value;
  }
  public resetDstSipOptionsCfgFlag() {
    this._dstSipOptionsCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipOptionsCfgFlagInput() {
    return this._dstSipOptionsCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodReferCfg {
  /**
  * REFER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_refer_cfg_flag DdosTemplateSip#dst_sip_refer_cfg_flag}
  */
  readonly dstSipReferCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_refer_rate DdosTemplateSip#dst_sip_refer_rate}
  */
  readonly dstSipReferRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodReferCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_refer_cfg_flag: cdktf.numberToTerraform(struct!.dstSipReferCfgFlag),
    dst_sip_refer_rate: cdktf.numberToTerraform(struct!.dstSipReferRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodReferCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_refer_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipReferCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_refer_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipReferRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodReferCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipReferCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipReferCfgFlag = this._dstSipReferCfgFlag;
    }
    if (this._dstSipReferRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipReferRate = this._dstSipReferRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodReferCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipReferCfgFlag = undefined;
      this._dstSipReferRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipReferCfgFlag = value.dstSipReferCfgFlag;
      this._dstSipReferRate = value.dstSipReferRate;
    }
  }

  // dst_sip_refer_cfg_flag - computed: false, optional: true, required: false
  private _dstSipReferCfgFlag?: number; 
  public get dstSipReferCfgFlag() {
    return this.getNumberAttribute('dst_sip_refer_cfg_flag');
  }
  public set dstSipReferCfgFlag(value: number) {
    this._dstSipReferCfgFlag = value;
  }
  public resetDstSipReferCfgFlag() {
    this._dstSipReferCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipReferCfgFlagInput() {
    return this._dstSipReferCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg {
  /**
  * REGISTER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_register_cfg_flag DdosTemplateSip#dst_sip_register_cfg_flag}
  */
  readonly dstSipRegisterCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_register_rate DdosTemplateSip#dst_sip_register_rate}
  */
  readonly dstSipRegisterRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodRegisterCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_register_cfg_flag: cdktf.numberToTerraform(struct!.dstSipRegisterCfgFlag),
    dst_sip_register_rate: cdktf.numberToTerraform(struct!.dstSipRegisterRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_register_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipRegisterCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_register_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipRegisterRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipRegisterCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipRegisterCfgFlag = this._dstSipRegisterCfgFlag;
    }
    if (this._dstSipRegisterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipRegisterRate = this._dstSipRegisterRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipRegisterCfgFlag = undefined;
      this._dstSipRegisterRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipRegisterCfgFlag = value.dstSipRegisterCfgFlag;
      this._dstSipRegisterRate = value.dstSipRegisterRate;
    }
  }

  // dst_sip_register_cfg_flag - computed: false, optional: true, required: false
  private _dstSipRegisterCfgFlag?: number; 
  public get dstSipRegisterCfgFlag() {
    return this.getNumberAttribute('dst_sip_register_cfg_flag');
  }
  public set dstSipRegisterCfgFlag(value: number) {
    this._dstSipRegisterCfgFlag = value;
  }
  public resetDstSipRegisterCfgFlag() {
    this._dstSipRegisterCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipRegisterCfgFlagInput() {
    return this._dstSipRegisterCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg {
  /**
  * SUBSCRIBE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_subscribe_cfg_flag DdosTemplateSip#dst_sip_subscribe_cfg_flag}
  */
  readonly dstSipSubscribeCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_subscribe_rate DdosTemplateSip#dst_sip_subscribe_rate}
  */
  readonly dstSipSubscribeRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_subscribe_cfg_flag: cdktf.numberToTerraform(struct!.dstSipSubscribeCfgFlag),
    dst_sip_subscribe_rate: cdktf.numberToTerraform(struct!.dstSipSubscribeRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_subscribe_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipSubscribeCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_subscribe_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipSubscribeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipSubscribeCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipSubscribeCfgFlag = this._dstSipSubscribeCfgFlag;
    }
    if (this._dstSipSubscribeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipSubscribeRate = this._dstSipSubscribeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipSubscribeCfgFlag = undefined;
      this._dstSipSubscribeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipSubscribeCfgFlag = value.dstSipSubscribeCfgFlag;
      this._dstSipSubscribeRate = value.dstSipSubscribeRate;
    }
  }

  // dst_sip_subscribe_cfg_flag - computed: false, optional: true, required: false
  private _dstSipSubscribeCfgFlag?: number; 
  public get dstSipSubscribeCfgFlag() {
    return this.getNumberAttribute('dst_sip_subscribe_cfg_flag');
  }
  public set dstSipSubscribeCfgFlag(value: number) {
    this._dstSipSubscribeCfgFlag = value;
  }
  public resetDstSipSubscribeCfgFlag() {
    this._dstSipSubscribeCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipSubscribeCfgFlagInput() {
    return this._dstSipSubscribeCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg {
  /**
  * UPDATE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_update_cfg_flag DdosTemplateSip#dst_sip_update_cfg_flag}
  */
  readonly dstSipUpdateCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#dst_sip_update_rate DdosTemplateSip#dst_sip_update_rate}
  */
  readonly dstSipUpdateRate?: number;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodUpdateCfgToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_sip_update_cfg_flag: cdktf.numberToTerraform(struct!.dstSipUpdateCfgFlag),
    dst_sip_update_rate: cdktf.numberToTerraform(struct!.dstSipUpdateRate),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference | DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_sip_update_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.dstSipUpdateCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sip_update_rate: {
      value: cdktf.numberToHclTerraform(struct!.dstSipUpdateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstSipUpdateCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipUpdateCfgFlag = this._dstSipUpdateCfgFlag;
    }
    if (this._dstSipUpdateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSipUpdateRate = this._dstSipUpdateRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstSipUpdateCfgFlag = undefined;
      this._dstSipUpdateRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstSipUpdateCfgFlag = value.dstSipUpdateCfgFlag;
      this._dstSipUpdateRate = value.dstSipUpdateRate;
    }
  }

  // dst_sip_update_cfg_flag - computed: false, optional: true, required: false
  private _dstSipUpdateCfgFlag?: number; 
  public get dstSipUpdateCfgFlag() {
    return this.getNumberAttribute('dst_sip_update_cfg_flag');
  }
  public set dstSipUpdateCfgFlag(value: number) {
    this._dstSipUpdateCfgFlag = value;
  }
  public resetDstSipUpdateCfgFlag() {
    this._dstSipUpdateCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSipUpdateCfgFlagInput() {
    return this._dstSipUpdateCfgFlag;
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
}
export interface DdosTemplateSipDstSipRequestRateLimitMethod {
  /**
  * bye_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#bye_cfg DdosTemplateSip#bye_cfg}
  */
  readonly byeCfg?: DdosTemplateSipDstSipRequestRateLimitMethodByeCfg;
  /**
  * invite_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#invite_cfg DdosTemplateSip#invite_cfg}
  */
  readonly inviteCfg?: DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg;
  /**
  * message_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#message_cfg DdosTemplateSip#message_cfg}
  */
  readonly messageCfg?: DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg;
  /**
  * notify_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#notify_cfg DdosTemplateSip#notify_cfg}
  */
  readonly notifyCfg?: DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg;
  /**
  * options_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#options_cfg DdosTemplateSip#options_cfg}
  */
  readonly optionsCfg?: DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg;
  /**
  * refer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#refer_cfg DdosTemplateSip#refer_cfg}
  */
  readonly referCfg?: DdosTemplateSipDstSipRequestRateLimitMethodReferCfg;
  /**
  * register_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#register_cfg DdosTemplateSip#register_cfg}
  */
  readonly registerCfg?: DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg;
  /**
  * subscribe_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#subscribe_cfg DdosTemplateSip#subscribe_cfg}
  */
  readonly subscribeCfg?: DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg;
  /**
  * update_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#update_cfg DdosTemplateSip#update_cfg}
  */
  readonly updateCfg?: DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg;
}

export function ddosTemplateSipDstSipRequestRateLimitMethodToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodOutputReference | DdosTemplateSipDstSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye_cfg: ddosTemplateSipDstSipRequestRateLimitMethodByeCfgToTerraform(struct!.byeCfg),
    invite_cfg: ddosTemplateSipDstSipRequestRateLimitMethodInviteCfgToTerraform(struct!.inviteCfg),
    message_cfg: ddosTemplateSipDstSipRequestRateLimitMethodMessageCfgToTerraform(struct!.messageCfg),
    notify_cfg: ddosTemplateSipDstSipRequestRateLimitMethodNotifyCfgToTerraform(struct!.notifyCfg),
    options_cfg: ddosTemplateSipDstSipRequestRateLimitMethodOptionsCfgToTerraform(struct!.optionsCfg),
    refer_cfg: ddosTemplateSipDstSipRequestRateLimitMethodReferCfgToTerraform(struct!.referCfg),
    register_cfg: ddosTemplateSipDstSipRequestRateLimitMethodRegisterCfgToTerraform(struct!.registerCfg),
    subscribe_cfg: ddosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToTerraform(struct!.subscribeCfg),
    update_cfg: ddosTemplateSipDstSipRequestRateLimitMethodUpdateCfgToTerraform(struct!.updateCfg),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitMethodToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitMethodOutputReference | DdosTemplateSipDstSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodByeCfgToHclTerraform(struct!.byeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodByeCfgList",
    },
    invite_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodInviteCfgToHclTerraform(struct!.inviteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodInviteCfgList",
    },
    message_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodMessageCfgToHclTerraform(struct!.messageCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodMessageCfgList",
    },
    notify_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct!.notifyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfgList",
    },
    options_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct!.optionsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfgList",
    },
    refer_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodReferCfgToHclTerraform(struct!.referCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodReferCfgList",
    },
    register_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct!.registerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfgList",
    },
    subscribe_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct!.subscribeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgList",
    },
    update_cfg: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct!.updateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimitMethod | undefined {
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

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimitMethod | undefined) {
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
  private _byeCfg = new DdosTemplateSipDstSipRequestRateLimitMethodByeCfgOutputReference(this, "bye_cfg");
  public get byeCfg() {
    return this._byeCfg;
  }
  public putByeCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodByeCfg) {
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
  private _inviteCfg = new DdosTemplateSipDstSipRequestRateLimitMethodInviteCfgOutputReference(this, "invite_cfg");
  public get inviteCfg() {
    return this._inviteCfg;
  }
  public putInviteCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodInviteCfg) {
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
  private _messageCfg = new DdosTemplateSipDstSipRequestRateLimitMethodMessageCfgOutputReference(this, "message_cfg");
  public get messageCfg() {
    return this._messageCfg;
  }
  public putMessageCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodMessageCfg) {
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
  private _notifyCfg = new DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfgOutputReference(this, "notify_cfg");
  public get notifyCfg() {
    return this._notifyCfg;
  }
  public putNotifyCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodNotifyCfg) {
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
  private _optionsCfg = new DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfgOutputReference(this, "options_cfg");
  public get optionsCfg() {
    return this._optionsCfg;
  }
  public putOptionsCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodOptionsCfg) {
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
  private _referCfg = new DdosTemplateSipDstSipRequestRateLimitMethodReferCfgOutputReference(this, "refer_cfg");
  public get referCfg() {
    return this._referCfg;
  }
  public putReferCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodReferCfg) {
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
  private _registerCfg = new DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfgOutputReference(this, "register_cfg");
  public get registerCfg() {
    return this._registerCfg;
  }
  public putRegisterCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodRegisterCfg) {
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
  private _subscribeCfg = new DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfgOutputReference(this, "subscribe_cfg");
  public get subscribeCfg() {
    return this._subscribeCfg;
  }
  public putSubscribeCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodSubscribeCfg) {
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
  private _updateCfg = new DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfgOutputReference(this, "update_cfg");
  public get updateCfg() {
    return this._updateCfg;
  }
  public putUpdateCfg(value: DdosTemplateSipDstSipRequestRateLimitMethodUpdateCfg) {
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
export interface DdosTemplateSipDstSipRequestRateLimit {
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#method DdosTemplateSip#method}
  */
  readonly method?: DdosTemplateSipDstSipRequestRateLimitMethod;
}

export function ddosTemplateSipDstSipRequestRateLimitToTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitOutputReference | DdosTemplateSipDstSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: ddosTemplateSipDstSipRequestRateLimitMethodToTerraform(struct!.method),
  }
}


export function ddosTemplateSipDstSipRequestRateLimitToHclTerraform(struct?: DdosTemplateSipDstSipRequestRateLimitOutputReference | DdosTemplateSipDstSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: ddosTemplateSipDstSipRequestRateLimitMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstSipRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDstSipRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDstSipRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method.internalValue = value.method;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method = new DdosTemplateSipDstSipRequestRateLimitMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DdosTemplateSipDstSipRequestRateLimitMethod) {
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
export interface DdosTemplateSipDst {
  /**
  * sip_request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_request_rate_limit DdosTemplateSip#sip_request_rate_limit}
  */
  readonly sipRequestRateLimit?: DdosTemplateSipDstSipRequestRateLimit;
}

export function ddosTemplateSipDstToTerraform(struct?: DdosTemplateSipDstOutputReference | DdosTemplateSipDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_request_rate_limit: ddosTemplateSipDstSipRequestRateLimitToTerraform(struct!.sipRequestRateLimit),
  }
}


export function ddosTemplateSipDstToHclTerraform(struct?: DdosTemplateSipDstOutputReference | DdosTemplateSipDst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_request_rate_limit: {
      value: ddosTemplateSipDstSipRequestRateLimitToHclTerraform(struct!.sipRequestRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipDstSipRequestRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipDstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipDst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipRequestRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRequestRateLimit = this._sipRequestRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipDst | undefined) {
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
  private _sipRequestRateLimit = new DdosTemplateSipDstSipRequestRateLimitOutputReference(this, "sip_request_rate_limit");
  public get sipRequestRateLimit() {
    return this._sipRequestRateLimit;
  }
  public putSipRequestRateLimit(value: DdosTemplateSipDstSipRequestRateLimit) {
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
export interface DdosTemplateSipFilterHeaderListStruct {
  /**
  * Also blacklist the source when action is taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_blacklist DdosTemplateSip#sip_filter_header_blacklist}
  */
  readonly sipFilterHeaderBlacklist?: number;
  /**
  * Take no action and continue processing the next filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_count_only DdosTemplateSip#sip_filter_header_count_only}
  */
  readonly sipFilterHeaderCountOnly?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_regex DdosTemplateSip#sip_filter_header_regex}
  */
  readonly sipFilterHeaderRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_seq DdosTemplateSip#sip_filter_header_seq}
  */
  readonly sipFilterHeaderSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_unmatched DdosTemplateSip#sip_filter_header_unmatched}
  */
  readonly sipFilterHeaderUnmatched?: number;
  /**
  * Whitelist the source after filter passes, packets are dropped until then
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_filter_header_whitelist DdosTemplateSip#sip_filter_header_whitelist}
  */
  readonly sipFilterHeaderWhitelist?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#user_tag DdosTemplateSip#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#uuid DdosTemplateSip#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateSipFilterHeaderListStructToTerraform(struct?: DdosTemplateSipFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_filter_header_blacklist: cdktf.numberToTerraform(struct!.sipFilterHeaderBlacklist),
    sip_filter_header_count_only: cdktf.numberToTerraform(struct!.sipFilterHeaderCountOnly),
    sip_filter_header_regex: cdktf.stringToTerraform(struct!.sipFilterHeaderRegex),
    sip_filter_header_seq: cdktf.numberToTerraform(struct!.sipFilterHeaderSeq),
    sip_filter_header_unmatched: cdktf.numberToTerraform(struct!.sipFilterHeaderUnmatched),
    sip_filter_header_whitelist: cdktf.numberToTerraform(struct!.sipFilterHeaderWhitelist),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateSipFilterHeaderListStructToHclTerraform(struct?: DdosTemplateSipFilterHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_filter_header_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_header_count_only: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderCountOnly),
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
    sip_filter_header_seq: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_header_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_header_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipFilterHeaderListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateSipFilterHeaderListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipFilterHeaderBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderBlacklist = this._sipFilterHeaderBlacklist;
    }
    if (this._sipFilterHeaderCountOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderCountOnly = this._sipFilterHeaderCountOnly;
    }
    if (this._sipFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderRegex = this._sipFilterHeaderRegex;
    }
    if (this._sipFilterHeaderSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderSeq = this._sipFilterHeaderSeq;
    }
    if (this._sipFilterHeaderUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderUnmatched = this._sipFilterHeaderUnmatched;
    }
    if (this._sipFilterHeaderWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderWhitelist = this._sipFilterHeaderWhitelist;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipFilterHeaderListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sipFilterHeaderBlacklist = undefined;
      this._sipFilterHeaderCountOnly = undefined;
      this._sipFilterHeaderRegex = undefined;
      this._sipFilterHeaderSeq = undefined;
      this._sipFilterHeaderUnmatched = undefined;
      this._sipFilterHeaderWhitelist = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sipFilterHeaderBlacklist = value.sipFilterHeaderBlacklist;
      this._sipFilterHeaderCountOnly = value.sipFilterHeaderCountOnly;
      this._sipFilterHeaderRegex = value.sipFilterHeaderRegex;
      this._sipFilterHeaderSeq = value.sipFilterHeaderSeq;
      this._sipFilterHeaderUnmatched = value.sipFilterHeaderUnmatched;
      this._sipFilterHeaderWhitelist = value.sipFilterHeaderWhitelist;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // sip_filter_header_blacklist - computed: false, optional: true, required: false
  private _sipFilterHeaderBlacklist?: number; 
  public get sipFilterHeaderBlacklist() {
    return this.getNumberAttribute('sip_filter_header_blacklist');
  }
  public set sipFilterHeaderBlacklist(value: number) {
    this._sipFilterHeaderBlacklist = value;
  }
  public resetSipFilterHeaderBlacklist() {
    this._sipFilterHeaderBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderBlacklistInput() {
    return this._sipFilterHeaderBlacklist;
  }

  // sip_filter_header_count_only - computed: false, optional: true, required: false
  private _sipFilterHeaderCountOnly?: number; 
  public get sipFilterHeaderCountOnly() {
    return this.getNumberAttribute('sip_filter_header_count_only');
  }
  public set sipFilterHeaderCountOnly(value: number) {
    this._sipFilterHeaderCountOnly = value;
  }
  public resetSipFilterHeaderCountOnly() {
    this._sipFilterHeaderCountOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderCountOnlyInput() {
    return this._sipFilterHeaderCountOnly;
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

  // sip_filter_header_seq - computed: false, optional: false, required: true
  private _sipFilterHeaderSeq?: number; 
  public get sipFilterHeaderSeq() {
    return this.getNumberAttribute('sip_filter_header_seq');
  }
  public set sipFilterHeaderSeq(value: number) {
    this._sipFilterHeaderSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderSeqInput() {
    return this._sipFilterHeaderSeq;
  }

  // sip_filter_header_unmatched - computed: false, optional: true, required: false
  private _sipFilterHeaderUnmatched?: number; 
  public get sipFilterHeaderUnmatched() {
    return this.getNumberAttribute('sip_filter_header_unmatched');
  }
  public set sipFilterHeaderUnmatched(value: number) {
    this._sipFilterHeaderUnmatched = value;
  }
  public resetSipFilterHeaderUnmatched() {
    this._sipFilterHeaderUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderUnmatchedInput() {
    return this._sipFilterHeaderUnmatched;
  }

  // sip_filter_header_whitelist - computed: false, optional: true, required: false
  private _sipFilterHeaderWhitelist?: number; 
  public get sipFilterHeaderWhitelist() {
    return this.getNumberAttribute('sip_filter_header_whitelist');
  }
  public set sipFilterHeaderWhitelist(value: number) {
    this._sipFilterHeaderWhitelist = value;
  }
  public resetSipFilterHeaderWhitelist() {
    this._sipFilterHeaderWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderWhitelistInput() {
    return this._sipFilterHeaderWhitelist;
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
}

export class DdosTemplateSipFilterHeaderListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateSipFilterHeaderListStructOutputReference {
    return new DdosTemplateSipFilterHeaderListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateSipMalformedSip {
  /**
  * Set the maximum call-id length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_call_id_max_length DdosTemplateSip#malformed_sip_call_id_max_length}
  */
  readonly malformedSipCallIdMaxLength?: number;
  /**
  * 'enable-check': Enable malformed SIP parameters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_check DdosTemplateSip#malformed_sip_check}
  */
  readonly malformedSipCheck?: string;
  /**
  * Set the maximum header name length. Default value is 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_max_header_name_length DdosTemplateSip#malformed_sip_max_header_name_length}
  */
  readonly malformedSipMaxHeaderNameLength?: number;
  /**
  * Set the maximum header value length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_max_header_value_length DdosTemplateSip#malformed_sip_max_header_value_length}
  */
  readonly malformedSipMaxHeaderValueLength?: number;
  /**
  * Set the maximum line size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_max_line_size DdosTemplateSip#malformed_sip_max_line_size}
  */
  readonly malformedSipMaxLineSize?: number;
  /**
  * Set the maximum uri size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_max_uri_length DdosTemplateSip#malformed_sip_max_uri_length}
  */
  readonly malformedSipMaxUriLength?: number;
  /**
  * Set the maxinum SDP content length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#malformed_sip_sdp_max_length DdosTemplateSip#malformed_sip_sdp_max_length}
  */
  readonly malformedSipSdpMaxLength?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#uuid DdosTemplateSip#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateSipMalformedSipToTerraform(struct?: DdosTemplateSipMalformedSipOutputReference | DdosTemplateSipMalformedSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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


export function ddosTemplateSipMalformedSipToHclTerraform(struct?: DdosTemplateSipMalformedSipOutputReference | DdosTemplateSipMalformedSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosTemplateSipMalformedSipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipMalformedSip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DdosTemplateSipMalformedSip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
export interface DdosTemplateSipMultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#multi_pu_threshold_distribution_disable DdosTemplateSip#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#multi_pu_threshold_distribution_value DdosTemplateSip#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosTemplateSipMultiPuThresholdDistributionToTerraform(struct?: DdosTemplateSipMultiPuThresholdDistributionOutputReference | DdosTemplateSipMultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosTemplateSipMultiPuThresholdDistributionToHclTerraform(struct?: DdosTemplateSipMultiPuThresholdDistributionOutputReference | DdosTemplateSipMultiPuThresholdDistribution): any {
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

export class DdosTemplateSipMultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipMultiPuThresholdDistribution | undefined {
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

  public set internalValue(value: DdosTemplateSipMultiPuThresholdDistribution | undefined) {
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg {
  /**
  * BYE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_bye_cfg_flag DdosTemplateSip#src_sip_bye_cfg_flag}
  */
  readonly srcSipByeCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_bye_rate DdosTemplateSip#src_sip_bye_rate}
  */
  readonly srcSipByeRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodByeCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_bye_cfg_flag: cdktf.numberToTerraform(struct!.srcSipByeCfgFlag),
    src_sip_bye_rate: cdktf.numberToTerraform(struct!.srcSipByeRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodByeCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_bye_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipByeCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipByeCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipByeCfgFlag = this._srcSipByeCfgFlag;
    }
    if (this._srcSipByeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipByeRate = this._srcSipByeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipByeCfgFlag = undefined;
      this._srcSipByeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipByeCfgFlag = value.srcSipByeCfgFlag;
      this._srcSipByeRate = value.srcSipByeRate;
    }
  }

  // src_sip_bye_cfg_flag - computed: false, optional: true, required: false
  private _srcSipByeCfgFlag?: number; 
  public get srcSipByeCfgFlag() {
    return this.getNumberAttribute('src_sip_bye_cfg_flag');
  }
  public set srcSipByeCfgFlag(value: number) {
    this._srcSipByeCfgFlag = value;
  }
  public resetSrcSipByeCfgFlag() {
    this._srcSipByeCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipByeCfgFlagInput() {
    return this._srcSipByeCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg {
  /**
  * INVITE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_invite_cfg_flag DdosTemplateSip#src_sip_invite_cfg_flag}
  */
  readonly srcSipInviteCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_invite_rate DdosTemplateSip#src_sip_invite_rate}
  */
  readonly srcSipInviteRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodInviteCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_invite_cfg_flag: cdktf.numberToTerraform(struct!.srcSipInviteCfgFlag),
    src_sip_invite_rate: cdktf.numberToTerraform(struct!.srcSipInviteRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodInviteCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_invite_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipInviteCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipInviteCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipInviteCfgFlag = this._srcSipInviteCfgFlag;
    }
    if (this._srcSipInviteRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipInviteRate = this._srcSipInviteRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipInviteCfgFlag = undefined;
      this._srcSipInviteRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipInviteCfgFlag = value.srcSipInviteCfgFlag;
      this._srcSipInviteRate = value.srcSipInviteRate;
    }
  }

  // src_sip_invite_cfg_flag - computed: false, optional: true, required: false
  private _srcSipInviteCfgFlag?: number; 
  public get srcSipInviteCfgFlag() {
    return this.getNumberAttribute('src_sip_invite_cfg_flag');
  }
  public set srcSipInviteCfgFlag(value: number) {
    this._srcSipInviteCfgFlag = value;
  }
  public resetSrcSipInviteCfgFlag() {
    this._srcSipInviteCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipInviteCfgFlagInput() {
    return this._srcSipInviteCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg {
  /**
  * MESSAGE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_message_cfg_flag DdosTemplateSip#src_sip_message_cfg_flag}
  */
  readonly srcSipMessageCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_message_rate DdosTemplateSip#src_sip_message_rate}
  */
  readonly srcSipMessageRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodMessageCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_message_cfg_flag: cdktf.numberToTerraform(struct!.srcSipMessageCfgFlag),
    src_sip_message_rate: cdktf.numberToTerraform(struct!.srcSipMessageRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodMessageCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_message_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipMessageCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipMessageCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipMessageCfgFlag = this._srcSipMessageCfgFlag;
    }
    if (this._srcSipMessageRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipMessageRate = this._srcSipMessageRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipMessageCfgFlag = undefined;
      this._srcSipMessageRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipMessageCfgFlag = value.srcSipMessageCfgFlag;
      this._srcSipMessageRate = value.srcSipMessageRate;
    }
  }

  // src_sip_message_cfg_flag - computed: false, optional: true, required: false
  private _srcSipMessageCfgFlag?: number; 
  public get srcSipMessageCfgFlag() {
    return this.getNumberAttribute('src_sip_message_cfg_flag');
  }
  public set srcSipMessageCfgFlag(value: number) {
    this._srcSipMessageCfgFlag = value;
  }
  public resetSrcSipMessageCfgFlag() {
    this._srcSipMessageCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipMessageCfgFlagInput() {
    return this._srcSipMessageCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg {
  /**
  * NOTIFY method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_notify_cfg_flag DdosTemplateSip#src_sip_notify_cfg_flag}
  */
  readonly srcSipNotifyCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_notify_rate DdosTemplateSip#src_sip_notify_rate}
  */
  readonly srcSipNotifyRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_notify_cfg_flag: cdktf.numberToTerraform(struct!.srcSipNotifyCfgFlag),
    src_sip_notify_rate: cdktf.numberToTerraform(struct!.srcSipNotifyRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_notify_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipNotifyCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipNotifyCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipNotifyCfgFlag = this._srcSipNotifyCfgFlag;
    }
    if (this._srcSipNotifyRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipNotifyRate = this._srcSipNotifyRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipNotifyCfgFlag = undefined;
      this._srcSipNotifyRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipNotifyCfgFlag = value.srcSipNotifyCfgFlag;
      this._srcSipNotifyRate = value.srcSipNotifyRate;
    }
  }

  // src_sip_notify_cfg_flag - computed: false, optional: true, required: false
  private _srcSipNotifyCfgFlag?: number; 
  public get srcSipNotifyCfgFlag() {
    return this.getNumberAttribute('src_sip_notify_cfg_flag');
  }
  public set srcSipNotifyCfgFlag(value: number) {
    this._srcSipNotifyCfgFlag = value;
  }
  public resetSrcSipNotifyCfgFlag() {
    this._srcSipNotifyCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipNotifyCfgFlagInput() {
    return this._srcSipNotifyCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg {
  /**
  * OPTIONS method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_options_cfg_flag DdosTemplateSip#src_sip_options_cfg_flag}
  */
  readonly srcSipOptionsCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_options_rate DdosTemplateSip#src_sip_options_rate}
  */
  readonly srcSipOptionsRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_options_cfg_flag: cdktf.numberToTerraform(struct!.srcSipOptionsCfgFlag),
    src_sip_options_rate: cdktf.numberToTerraform(struct!.srcSipOptionsRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_options_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipOptionsCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipOptionsCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipOptionsCfgFlag = this._srcSipOptionsCfgFlag;
    }
    if (this._srcSipOptionsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipOptionsRate = this._srcSipOptionsRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipOptionsCfgFlag = undefined;
      this._srcSipOptionsRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipOptionsCfgFlag = value.srcSipOptionsCfgFlag;
      this._srcSipOptionsRate = value.srcSipOptionsRate;
    }
  }

  // src_sip_options_cfg_flag - computed: false, optional: true, required: false
  private _srcSipOptionsCfgFlag?: number; 
  public get srcSipOptionsCfgFlag() {
    return this.getNumberAttribute('src_sip_options_cfg_flag');
  }
  public set srcSipOptionsCfgFlag(value: number) {
    this._srcSipOptionsCfgFlag = value;
  }
  public resetSrcSipOptionsCfgFlag() {
    this._srcSipOptionsCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipOptionsCfgFlagInput() {
    return this._srcSipOptionsCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg {
  /**
  * REFER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_refer_cfg_flag DdosTemplateSip#src_sip_refer_cfg_flag}
  */
  readonly srcSipReferCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_refer_rate DdosTemplateSip#src_sip_refer_rate}
  */
  readonly srcSipReferRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodReferCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_refer_cfg_flag: cdktf.numberToTerraform(struct!.srcSipReferCfgFlag),
    src_sip_refer_rate: cdktf.numberToTerraform(struct!.srcSipReferRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodReferCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_refer_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipReferCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipReferCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipReferCfgFlag = this._srcSipReferCfgFlag;
    }
    if (this._srcSipReferRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipReferRate = this._srcSipReferRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipReferCfgFlag = undefined;
      this._srcSipReferRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipReferCfgFlag = value.srcSipReferCfgFlag;
      this._srcSipReferRate = value.srcSipReferRate;
    }
  }

  // src_sip_refer_cfg_flag - computed: false, optional: true, required: false
  private _srcSipReferCfgFlag?: number; 
  public get srcSipReferCfgFlag() {
    return this.getNumberAttribute('src_sip_refer_cfg_flag');
  }
  public set srcSipReferCfgFlag(value: number) {
    this._srcSipReferCfgFlag = value;
  }
  public resetSrcSipReferCfgFlag() {
    this._srcSipReferCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipReferCfgFlagInput() {
    return this._srcSipReferCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg {
  /**
  * REGISTER method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_register_cfg_flag DdosTemplateSip#src_sip_register_cfg_flag}
  */
  readonly srcSipRegisterCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_register_rate DdosTemplateSip#src_sip_register_rate}
  */
  readonly srcSipRegisterRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_register_cfg_flag: cdktf.numberToTerraform(struct!.srcSipRegisterCfgFlag),
    src_sip_register_rate: cdktf.numberToTerraform(struct!.srcSipRegisterRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_register_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipRegisterCfgFlag),
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

export class DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipRegisterCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipRegisterCfgFlag = this._srcSipRegisterCfgFlag;
    }
    if (this._srcSipRegisterRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipRegisterRate = this._srcSipRegisterRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipRegisterCfgFlag = undefined;
      this._srcSipRegisterRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipRegisterCfgFlag = value.srcSipRegisterCfgFlag;
      this._srcSipRegisterRate = value.srcSipRegisterRate;
    }
  }

  // src_sip_register_cfg_flag - computed: false, optional: true, required: false
  private _srcSipRegisterCfgFlag?: number; 
  public get srcSipRegisterCfgFlag() {
    return this.getNumberAttribute('src_sip_register_cfg_flag');
  }
  public set srcSipRegisterCfgFlag(value: number) {
    this._srcSipRegisterCfgFlag = value;
  }
  public resetSrcSipRegisterCfgFlag() {
    this._srcSipRegisterCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipRegisterCfgFlagInput() {
    return this._srcSipRegisterCfgFlag;
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
export interface DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg {
  /**
  * SUBSCRIBE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_subscribe_cfg_flag DdosTemplateSip#src_sip_subscribe_cfg_flag}
  */
  readonly srcSipSubscribeCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_subscribe_rate DdosTemplateSip#src_sip_subscribe_rate}
  */
  readonly srcSipSubscribeRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_subscribe_cfg_flag: cdktf.numberToTerraform(struct!.srcSipSubscribeCfgFlag),
    src_sip_subscribe_rate: cdktf.numberToTerraform(struct!.srcSipSubscribeRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_subscribe_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipSubscribeCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_subscribe_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipSubscribeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipSubscribeCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipSubscribeCfgFlag = this._srcSipSubscribeCfgFlag;
    }
    if (this._srcSipSubscribeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipSubscribeRate = this._srcSipSubscribeRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipSubscribeCfgFlag = undefined;
      this._srcSipSubscribeRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipSubscribeCfgFlag = value.srcSipSubscribeCfgFlag;
      this._srcSipSubscribeRate = value.srcSipSubscribeRate;
    }
  }

  // src_sip_subscribe_cfg_flag - computed: false, optional: true, required: false
  private _srcSipSubscribeCfgFlag?: number; 
  public get srcSipSubscribeCfgFlag() {
    return this.getNumberAttribute('src_sip_subscribe_cfg_flag');
  }
  public set srcSipSubscribeCfgFlag(value: number) {
    this._srcSipSubscribeCfgFlag = value;
  }
  public resetSrcSipSubscribeCfgFlag() {
    this._srcSipSubscribeCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipSubscribeCfgFlagInput() {
    return this._srcSipSubscribeCfgFlag;
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
}
export interface DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg {
  /**
  * UPDATE method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_update_cfg_flag DdosTemplateSip#src_sip_update_cfg_flag}
  */
  readonly srcSipUpdateCfgFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#src_sip_update_rate DdosTemplateSip#src_sip_update_rate}
  */
  readonly srcSipUpdateRate?: number;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_sip_update_cfg_flag: cdktf.numberToTerraform(struct!.srcSipUpdateCfgFlag),
    src_sip_update_rate: cdktf.numberToTerraform(struct!.srcSipUpdateRate),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_sip_update_cfg_flag: {
      value: cdktf.numberToHclTerraform(struct!.srcSipUpdateCfgFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_sip_update_rate: {
      value: cdktf.numberToHclTerraform(struct!.srcSipUpdateRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcSipUpdateCfgFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipUpdateCfgFlag = this._srcSipUpdateCfgFlag;
    }
    if (this._srcSipUpdateRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSipUpdateRate = this._srcSipUpdateRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcSipUpdateCfgFlag = undefined;
      this._srcSipUpdateRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcSipUpdateCfgFlag = value.srcSipUpdateCfgFlag;
      this._srcSipUpdateRate = value.srcSipUpdateRate;
    }
  }

  // src_sip_update_cfg_flag - computed: false, optional: true, required: false
  private _srcSipUpdateCfgFlag?: number; 
  public get srcSipUpdateCfgFlag() {
    return this.getNumberAttribute('src_sip_update_cfg_flag');
  }
  public set srcSipUpdateCfgFlag(value: number) {
    this._srcSipUpdateCfgFlag = value;
  }
  public resetSrcSipUpdateCfgFlag() {
    this._srcSipUpdateCfgFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSipUpdateCfgFlagInput() {
    return this._srcSipUpdateCfgFlag;
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
}
export interface DdosTemplateSipSrcSipRequestRateLimitMethod {
  /**
  * bye_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#bye_cfg DdosTemplateSip#bye_cfg}
  */
  readonly byeCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg;
  /**
  * invite_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#invite_cfg DdosTemplateSip#invite_cfg}
  */
  readonly inviteCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg;
  /**
  * message_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#message_cfg DdosTemplateSip#message_cfg}
  */
  readonly messageCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg;
  /**
  * notify_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#notify_cfg DdosTemplateSip#notify_cfg}
  */
  readonly notifyCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg;
  /**
  * options_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#options_cfg DdosTemplateSip#options_cfg}
  */
  readonly optionsCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg;
  /**
  * refer_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#refer_cfg DdosTemplateSip#refer_cfg}
  */
  readonly referCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg;
  /**
  * register_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#register_cfg DdosTemplateSip#register_cfg}
  */
  readonly registerCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg;
  /**
  * subscribe_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#subscribe_cfg DdosTemplateSip#subscribe_cfg}
  */
  readonly subscribeCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg;
  /**
  * update_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#update_cfg DdosTemplateSip#update_cfg}
  */
  readonly updateCfg?: DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg;
}

export function ddosTemplateSipSrcSipRequestRateLimitMethodToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bye_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodByeCfgToTerraform(struct!.byeCfg),
    invite_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodInviteCfgToTerraform(struct!.inviteCfg),
    message_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodMessageCfgToTerraform(struct!.messageCfg),
    notify_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToTerraform(struct!.notifyCfg),
    options_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToTerraform(struct!.optionsCfg),
    refer_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodReferCfgToTerraform(struct!.referCfg),
    register_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToTerraform(struct!.registerCfg),
    subscribe_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToTerraform(struct!.subscribeCfg),
    update_cfg: ddosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToTerraform(struct!.updateCfg),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitMethodToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitMethodOutputReference | DdosTemplateSipSrcSipRequestRateLimitMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bye_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodByeCfgToHclTerraform(struct!.byeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodByeCfgList",
    },
    invite_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodInviteCfgToHclTerraform(struct!.inviteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfgList",
    },
    message_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodMessageCfgToHclTerraform(struct!.messageCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfgList",
    },
    notify_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgToHclTerraform(struct!.notifyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgList",
    },
    options_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgToHclTerraform(struct!.optionsCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgList",
    },
    refer_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodReferCfgToHclTerraform(struct!.referCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodReferCfgList",
    },
    register_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgToHclTerraform(struct!.registerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgList",
    },
    subscribe_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgToHclTerraform(struct!.subscribeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgList",
    },
    update_cfg: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgToHclTerraform(struct!.updateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipSrcSipRequestRateLimitMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimitMethod | undefined {
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

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimitMethod | undefined) {
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
  private _byeCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodByeCfgOutputReference(this, "bye_cfg");
  public get byeCfg() {
    return this._byeCfg;
  }
  public putByeCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodByeCfg) {
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
  private _inviteCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfgOutputReference(this, "invite_cfg");
  public get inviteCfg() {
    return this._inviteCfg;
  }
  public putInviteCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodInviteCfg) {
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
  private _messageCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfgOutputReference(this, "message_cfg");
  public get messageCfg() {
    return this._messageCfg;
  }
  public putMessageCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodMessageCfg) {
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
  private _notifyCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfgOutputReference(this, "notify_cfg");
  public get notifyCfg() {
    return this._notifyCfg;
  }
  public putNotifyCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodNotifyCfg) {
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
  private _optionsCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfgOutputReference(this, "options_cfg");
  public get optionsCfg() {
    return this._optionsCfg;
  }
  public putOptionsCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodOptionsCfg) {
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
  private _referCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodReferCfgOutputReference(this, "refer_cfg");
  public get referCfg() {
    return this._referCfg;
  }
  public putReferCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodReferCfg) {
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
  private _registerCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfgOutputReference(this, "register_cfg");
  public get registerCfg() {
    return this._registerCfg;
  }
  public putRegisterCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodRegisterCfg) {
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
  private _subscribeCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfgOutputReference(this, "subscribe_cfg");
  public get subscribeCfg() {
    return this._subscribeCfg;
  }
  public putSubscribeCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodSubscribeCfg) {
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
  private _updateCfg = new DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfgOutputReference(this, "update_cfg");
  public get updateCfg() {
    return this._updateCfg;
  }
  public putUpdateCfg(value: DdosTemplateSipSrcSipRequestRateLimitMethodUpdateCfg) {
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
export interface DdosTemplateSipSrcSipRequestRateLimit {
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#method DdosTemplateSip#method}
  */
  readonly method?: DdosTemplateSipSrcSipRequestRateLimitMethod;
}

export function ddosTemplateSipSrcSipRequestRateLimitToTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitOutputReference | DdosTemplateSipSrcSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: ddosTemplateSipSrcSipRequestRateLimitMethodToTerraform(struct!.method),
  }
}


export function ddosTemplateSipSrcSipRequestRateLimitToHclTerraform(struct?: DdosTemplateSipSrcSipRequestRateLimitOutputReference | DdosTemplateSipSrcSipRequestRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: ddosTemplateSipSrcSipRequestRateLimitMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipSrcSipRequestRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrcSipRequestRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrcSipRequestRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method.internalValue = value.method;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method = new DdosTemplateSipSrcSipRequestRateLimitMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DdosTemplateSipSrcSipRequestRateLimitMethod) {
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
export interface DdosTemplateSipSrc {
  /**
  * sip_request_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#sip_request_rate_limit DdosTemplateSip#sip_request_rate_limit}
  */
  readonly sipRequestRateLimit?: DdosTemplateSipSrcSipRequestRateLimit;
}

export function ddosTemplateSipSrcToTerraform(struct?: DdosTemplateSipSrcOutputReference | DdosTemplateSipSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_request_rate_limit: ddosTemplateSipSrcSipRequestRateLimitToTerraform(struct!.sipRequestRateLimit),
  }
}


export function ddosTemplateSipSrcToHclTerraform(struct?: DdosTemplateSipSrcOutputReference | DdosTemplateSipSrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_request_rate_limit: {
      value: ddosTemplateSipSrcSipRequestRateLimitToHclTerraform(struct!.sipRequestRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosTemplateSipSrcSipRequestRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSipSrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSipSrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipRequestRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipRequestRateLimit = this._sipRequestRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSipSrc | undefined) {
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
  private _sipRequestRateLimit = new DdosTemplateSipSrcSipRequestRateLimitOutputReference(this, "sip_request_rate_limit");
  public get sipRequestRateLimit() {
    return this._sipRequestRateLimit;
  }
  public putSipRequestRateLimit(value: DdosTemplateSipSrcSipRequestRateLimit) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip thunder_ddos_template_sip}
*/
export class DdosTemplateSip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateSip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateSip to import
  * @param importFromId The id of the existing DdosTemplateSip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateSip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_sip thunder_ddos_template_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateSipConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateSipConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_sip',
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
    this._action = config.action;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ignoreZeroPayload = config.ignoreZeroPayload;
    this._sipTmplName = config.sipTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dst.internalValue = config.dst;
    this._filterHeaderList.internalValue = config.filterHeaderList;
    this._malformedSip.internalValue = config.malformedSip;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._src.internalValue = config.src;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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
  private _dst = new DdosTemplateSipDstOutputReference(this, "dst");
  public get dst() {
    return this._dst;
  }
  public putDst(value: DdosTemplateSipDst) {
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
  private _filterHeaderList = new DdosTemplateSipFilterHeaderListStructList(this, "filter_header_list", false);
  public get filterHeaderList() {
    return this._filterHeaderList;
  }
  public putFilterHeaderList(value: DdosTemplateSipFilterHeaderListStruct[] | cdktf.IResolvable) {
    this._filterHeaderList.internalValue = value;
  }
  public resetFilterHeaderList() {
    this._filterHeaderList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeaderListInput() {
    return this._filterHeaderList.internalValue;
  }

  // malformed_sip - computed: false, optional: true, required: false
  private _malformedSip = new DdosTemplateSipMalformedSipOutputReference(this, "malformed_sip");
  public get malformedSip() {
    return this._malformedSip;
  }
  public putMalformedSip(value: DdosTemplateSipMalformedSip) {
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
  private _multiPuThresholdDistribution = new DdosTemplateSipMultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosTemplateSipMultiPuThresholdDistribution) {
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
  private _src = new DdosTemplateSipSrcOutputReference(this, "src");
  public get src() {
    return this._src;
  }
  public putSrc(value: DdosTemplateSipSrc) {
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
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ignore_zero_payload: cdktf.numberToTerraform(this._ignoreZeroPayload),
      sip_tmpl_name: cdktf.stringToTerraform(this._sipTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dst: ddosTemplateSipDstToTerraform(this._dst.internalValue),
      filter_header_list: cdktf.listMapper(ddosTemplateSipFilterHeaderListStructToTerraform, true)(this._filterHeaderList.internalValue),
      malformed_sip: ddosTemplateSipMalformedSipToTerraform(this._malformedSip.internalValue),
      multi_pu_threshold_distribution: ddosTemplateSipMultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      src: ddosTemplateSipSrcToTerraform(this._src.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_zero_payload: {
        value: cdktf.numberToHclTerraform(this._ignoreZeroPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: ddosTemplateSipDstToHclTerraform(this._dst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSipDstList",
      },
      filter_header_list: {
        value: cdktf.listMapperHcl(ddosTemplateSipFilterHeaderListStructToHclTerraform, true)(this._filterHeaderList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSipFilterHeaderListStructList",
      },
      malformed_sip: {
        value: ddosTemplateSipMalformedSipToHclTerraform(this._malformedSip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSipMalformedSipList",
      },
      multi_pu_threshold_distribution: {
        value: ddosTemplateSipMultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSipMultiPuThresholdDistributionList",
      },
      src: {
        value: ddosTemplateSipSrcToHclTerraform(this._src.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSipSrcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
