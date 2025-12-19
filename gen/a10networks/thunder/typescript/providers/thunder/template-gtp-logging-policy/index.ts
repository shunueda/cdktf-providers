// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpLoggingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#id TemplateGtpLoggingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the GTP Logging Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#name TemplateGtpLoggingPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#user_tag TemplateGtpLoggingPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#uuid TemplateGtpLoggingPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#log TemplateGtpLoggingPolicy#log}
  */
  readonly log?: TemplateGtpLoggingPolicyLog;
}
export interface TemplateGtpLoggingPolicyLog {
  /**
  * Logging Packet Drop due to End User IP Address Spoofing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#anti_spoofing_check TemplateGtpLoggingPolicy#anti_spoofing_check}
  */
  readonly antiSpoofingCheck?: number;
  /**
  * Logging Packet Drop due to APN IMSI filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#apn_imsi_filtering TemplateGtpLoggingPolicy#apn_imsi_filtering}
  */
  readonly apnImsiFiltering?: number;
  /**
  * Logging Packet Drop due to mismatch in IP address and GTP FTEID/GSN address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#crosslayer_correlation TemplateGtpLoggingPolicy#crosslayer_correlation}
  */
  readonly crosslayerCorrelation?: number;
  /**
  * Logging Packet Drop due to GTP in GTP filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#gtp_in_gtp_filtering TemplateGtpLoggingPolicy#gtp_in_gtp_filtering}
  */
  readonly gtpInGtpFiltering?: number;
  /**
  * Logging Packet Drop due to Invalid Header checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#invalid_header_check TemplateGtpLoggingPolicy#invalid_header_check}
  */
  readonly invalidHeaderCheck?: number;
  /**
  * Logging Packet Drop due to Invalid Tunnel Endpoint Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#invalid_teid_check TemplateGtpLoggingPolicy#invalid_teid_check}
  */
  readonly invalidTeidCheck?: number;
  /**
  * Logging Packet Drop due to Missing Mandatory Information Element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#mandatory_ie_check TemplateGtpLoggingPolicy#mandatory_ie_check}
  */
  readonly mandatoryIeCheck?: number;
  /**
  * Logging Packet Drop due to Max Message Length Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#max_message_length_check TemplateGtpLoggingPolicy#max_message_length_check}
  */
  readonly maxMessageLengthCheck?: number;
  /**
  * Logging Packet Drop due to Message Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#message_filtering TemplateGtpLoggingPolicy#message_filtering}
  */
  readonly messageFiltering?: number;
  /**
  * Logging Packet Drop due to MSISDN Filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#msisdn_filtering TemplateGtpLoggingPolicy#msisdn_filtering}
  */
  readonly msisdnFiltering?: number;
  /**
  * Logging Packet Drop due to mismatch in Country Code and Mobile Country Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#msisdn_imsi_correlation TemplateGtpLoggingPolicy#msisdn_imsi_correlation}
  */
  readonly msisdnImsiCorrelation?: number;
  /**
  * Logging Packet Drop due to Out of Order Information Elements for GTPv1-C
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#out_of_order_ie_check TemplateGtpLoggingPolicy#out_of_order_ie_check}
  */
  readonly outOfOrderIeCheck?: number;
  /**
  * Logging Packet Drop due to Out of State Information Elements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#out_of_state_ie_check TemplateGtpLoggingPolicy#out_of_state_ie_check}
  */
  readonly outOfStateIeCheck?: number;
  /**
  * Logging Packet Drop due to RAT type filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#rat_type_filtering TemplateGtpLoggingPolicy#rat_type_filtering}
  */
  readonly ratTypeFiltering?: number;
  /**
  * Logging Packet Drop due to Presence of Reserved Information Element
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#reserved_ie_check TemplateGtpLoggingPolicy#reserved_ie_check}
  */
  readonly reservedIeCheck?: number;
  /**
  * Logging Packet Drop due to mismatch in Sequence number between GTP request and response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#sequence_num_correlation TemplateGtpLoggingPolicy#sequence_num_correlation}
  */
  readonly sequenceNumCorrelation?: number;
}

export function templateGtpLoggingPolicyLogToTerraform(struct?: TemplateGtpLoggingPolicyLogOutputReference | TemplateGtpLoggingPolicyLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing_check: cdktf.numberToTerraform(struct!.antiSpoofingCheck),
    apn_imsi_filtering: cdktf.numberToTerraform(struct!.apnImsiFiltering),
    crosslayer_correlation: cdktf.numberToTerraform(struct!.crosslayerCorrelation),
    gtp_in_gtp_filtering: cdktf.numberToTerraform(struct!.gtpInGtpFiltering),
    invalid_header_check: cdktf.numberToTerraform(struct!.invalidHeaderCheck),
    invalid_teid_check: cdktf.numberToTerraform(struct!.invalidTeidCheck),
    mandatory_ie_check: cdktf.numberToTerraform(struct!.mandatoryIeCheck),
    max_message_length_check: cdktf.numberToTerraform(struct!.maxMessageLengthCheck),
    message_filtering: cdktf.numberToTerraform(struct!.messageFiltering),
    msisdn_filtering: cdktf.numberToTerraform(struct!.msisdnFiltering),
    msisdn_imsi_correlation: cdktf.numberToTerraform(struct!.msisdnImsiCorrelation),
    out_of_order_ie_check: cdktf.numberToTerraform(struct!.outOfOrderIeCheck),
    out_of_state_ie_check: cdktf.numberToTerraform(struct!.outOfStateIeCheck),
    rat_type_filtering: cdktf.numberToTerraform(struct!.ratTypeFiltering),
    reserved_ie_check: cdktf.numberToTerraform(struct!.reservedIeCheck),
    sequence_num_correlation: cdktf.numberToTerraform(struct!.sequenceNumCorrelation),
  }
}


export function templateGtpLoggingPolicyLogToHclTerraform(struct?: TemplateGtpLoggingPolicyLogOutputReference | TemplateGtpLoggingPolicyLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spoofing_check: {
      value: cdktf.numberToHclTerraform(struct!.antiSpoofingCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apn_imsi_filtering: {
      value: cdktf.numberToHclTerraform(struct!.apnImsiFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crosslayer_correlation: {
      value: cdktf.numberToHclTerraform(struct!.crosslayerCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_in_gtp_filtering: {
      value: cdktf.numberToHclTerraform(struct!.gtpInGtpFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_header_check: {
      value: cdktf.numberToHclTerraform(struct!.invalidHeaderCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_teid_check: {
      value: cdktf.numberToHclTerraform(struct!.invalidTeidCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mandatory_ie_check: {
      value: cdktf.numberToHclTerraform(struct!.mandatoryIeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_message_length_check: {
      value: cdktf.numberToHclTerraform(struct!.maxMessageLengthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_filtering: {
      value: cdktf.numberToHclTerraform(struct!.messageFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msisdn_filtering: {
      value: cdktf.numberToHclTerraform(struct!.msisdnFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msisdn_imsi_correlation: {
      value: cdktf.numberToHclTerraform(struct!.msisdnImsiCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_order_ie_check: {
      value: cdktf.numberToHclTerraform(struct!.outOfOrderIeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_state_ie_check: {
      value: cdktf.numberToHclTerraform(struct!.outOfStateIeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rat_type_filtering: {
      value: cdktf.numberToHclTerraform(struct!.ratTypeFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_ie_check: {
      value: cdktf.numberToHclTerraform(struct!.reservedIeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sequence_num_correlation: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumCorrelation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateGtpLoggingPolicyLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateGtpLoggingPolicyLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpoofingCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofingCheck = this._antiSpoofingCheck;
    }
    if (this._apnImsiFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.apnImsiFiltering = this._apnImsiFiltering;
    }
    if (this._crosslayerCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.crosslayerCorrelation = this._crosslayerCorrelation;
    }
    if (this._gtpInGtpFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpInGtpFiltering = this._gtpInGtpFiltering;
    }
    if (this._invalidHeaderCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeaderCheck = this._invalidHeaderCheck;
    }
    if (this._invalidTeidCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTeidCheck = this._invalidTeidCheck;
    }
    if (this._mandatoryIeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryIeCheck = this._mandatoryIeCheck;
    }
    if (this._maxMessageLengthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageLengthCheck = this._maxMessageLengthCheck;
    }
    if (this._messageFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFiltering = this._messageFiltering;
    }
    if (this._msisdnFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnFiltering = this._msisdnFiltering;
    }
    if (this._msisdnImsiCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.msisdnImsiCorrelation = this._msisdnImsiCorrelation;
    }
    if (this._outOfOrderIeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfOrderIeCheck = this._outOfOrderIeCheck;
    }
    if (this._outOfStateIeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfStateIeCheck = this._outOfStateIeCheck;
    }
    if (this._ratTypeFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratTypeFiltering = this._ratTypeFiltering;
    }
    if (this._reservedIeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIeCheck = this._reservedIeCheck;
    }
    if (this._sequenceNumCorrelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumCorrelation = this._sequenceNumCorrelation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpLoggingPolicyLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiSpoofingCheck = undefined;
      this._apnImsiFiltering = undefined;
      this._crosslayerCorrelation = undefined;
      this._gtpInGtpFiltering = undefined;
      this._invalidHeaderCheck = undefined;
      this._invalidTeidCheck = undefined;
      this._mandatoryIeCheck = undefined;
      this._maxMessageLengthCheck = undefined;
      this._messageFiltering = undefined;
      this._msisdnFiltering = undefined;
      this._msisdnImsiCorrelation = undefined;
      this._outOfOrderIeCheck = undefined;
      this._outOfStateIeCheck = undefined;
      this._ratTypeFiltering = undefined;
      this._reservedIeCheck = undefined;
      this._sequenceNumCorrelation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiSpoofingCheck = value.antiSpoofingCheck;
      this._apnImsiFiltering = value.apnImsiFiltering;
      this._crosslayerCorrelation = value.crosslayerCorrelation;
      this._gtpInGtpFiltering = value.gtpInGtpFiltering;
      this._invalidHeaderCheck = value.invalidHeaderCheck;
      this._invalidTeidCheck = value.invalidTeidCheck;
      this._mandatoryIeCheck = value.mandatoryIeCheck;
      this._maxMessageLengthCheck = value.maxMessageLengthCheck;
      this._messageFiltering = value.messageFiltering;
      this._msisdnFiltering = value.msisdnFiltering;
      this._msisdnImsiCorrelation = value.msisdnImsiCorrelation;
      this._outOfOrderIeCheck = value.outOfOrderIeCheck;
      this._outOfStateIeCheck = value.outOfStateIeCheck;
      this._ratTypeFiltering = value.ratTypeFiltering;
      this._reservedIeCheck = value.reservedIeCheck;
      this._sequenceNumCorrelation = value.sequenceNumCorrelation;
    }
  }

  // anti_spoofing_check - computed: false, optional: true, required: false
  private _antiSpoofingCheck?: number; 
  public get antiSpoofingCheck() {
    return this.getNumberAttribute('anti_spoofing_check');
  }
  public set antiSpoofingCheck(value: number) {
    this._antiSpoofingCheck = value;
  }
  public resetAntiSpoofingCheck() {
    this._antiSpoofingCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingCheckInput() {
    return this._antiSpoofingCheck;
  }

  // apn_imsi_filtering - computed: false, optional: true, required: false
  private _apnImsiFiltering?: number; 
  public get apnImsiFiltering() {
    return this.getNumberAttribute('apn_imsi_filtering');
  }
  public set apnImsiFiltering(value: number) {
    this._apnImsiFiltering = value;
  }
  public resetApnImsiFiltering() {
    this._apnImsiFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnImsiFilteringInput() {
    return this._apnImsiFiltering;
  }

  // crosslayer_correlation - computed: false, optional: true, required: false
  private _crosslayerCorrelation?: number; 
  public get crosslayerCorrelation() {
    return this.getNumberAttribute('crosslayer_correlation');
  }
  public set crosslayerCorrelation(value: number) {
    this._crosslayerCorrelation = value;
  }
  public resetCrosslayerCorrelation() {
    this._crosslayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosslayerCorrelationInput() {
    return this._crosslayerCorrelation;
  }

  // gtp_in_gtp_filtering - computed: false, optional: true, required: false
  private _gtpInGtpFiltering?: number; 
  public get gtpInGtpFiltering() {
    return this.getNumberAttribute('gtp_in_gtp_filtering');
  }
  public set gtpInGtpFiltering(value: number) {
    this._gtpInGtpFiltering = value;
  }
  public resetGtpInGtpFiltering() {
    this._gtpInGtpFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInGtpFilteringInput() {
    return this._gtpInGtpFiltering;
  }

  // invalid_header_check - computed: false, optional: true, required: false
  private _invalidHeaderCheck?: number; 
  public get invalidHeaderCheck() {
    return this.getNumberAttribute('invalid_header_check');
  }
  public set invalidHeaderCheck(value: number) {
    this._invalidHeaderCheck = value;
  }
  public resetInvalidHeaderCheck() {
    this._invalidHeaderCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHeaderCheckInput() {
    return this._invalidHeaderCheck;
  }

  // invalid_teid_check - computed: false, optional: true, required: false
  private _invalidTeidCheck?: number; 
  public get invalidTeidCheck() {
    return this.getNumberAttribute('invalid_teid_check');
  }
  public set invalidTeidCheck(value: number) {
    this._invalidTeidCheck = value;
  }
  public resetInvalidTeidCheck() {
    this._invalidTeidCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTeidCheckInput() {
    return this._invalidTeidCheck;
  }

  // mandatory_ie_check - computed: false, optional: true, required: false
  private _mandatoryIeCheck?: number; 
  public get mandatoryIeCheck() {
    return this.getNumberAttribute('mandatory_ie_check');
  }
  public set mandatoryIeCheck(value: number) {
    this._mandatoryIeCheck = value;
  }
  public resetMandatoryIeCheck() {
    this._mandatoryIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryIeCheckInput() {
    return this._mandatoryIeCheck;
  }

  // max_message_length_check - computed: false, optional: true, required: false
  private _maxMessageLengthCheck?: number; 
  public get maxMessageLengthCheck() {
    return this.getNumberAttribute('max_message_length_check');
  }
  public set maxMessageLengthCheck(value: number) {
    this._maxMessageLengthCheck = value;
  }
  public resetMaxMessageLengthCheck() {
    this._maxMessageLengthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageLengthCheckInput() {
    return this._maxMessageLengthCheck;
  }

  // message_filtering - computed: false, optional: true, required: false
  private _messageFiltering?: number; 
  public get messageFiltering() {
    return this.getNumberAttribute('message_filtering');
  }
  public set messageFiltering(value: number) {
    this._messageFiltering = value;
  }
  public resetMessageFiltering() {
    this._messageFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilteringInput() {
    return this._messageFiltering;
  }

  // msisdn_filtering - computed: false, optional: true, required: false
  private _msisdnFiltering?: number; 
  public get msisdnFiltering() {
    return this.getNumberAttribute('msisdn_filtering');
  }
  public set msisdnFiltering(value: number) {
    this._msisdnFiltering = value;
  }
  public resetMsisdnFiltering() {
    this._msisdnFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnFilteringInput() {
    return this._msisdnFiltering;
  }

  // msisdn_imsi_correlation - computed: false, optional: true, required: false
  private _msisdnImsiCorrelation?: number; 
  public get msisdnImsiCorrelation() {
    return this.getNumberAttribute('msisdn_imsi_correlation');
  }
  public set msisdnImsiCorrelation(value: number) {
    this._msisdnImsiCorrelation = value;
  }
  public resetMsisdnImsiCorrelation() {
    this._msisdnImsiCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnImsiCorrelationInput() {
    return this._msisdnImsiCorrelation;
  }

  // out_of_order_ie_check - computed: false, optional: true, required: false
  private _outOfOrderIeCheck?: number; 
  public get outOfOrderIeCheck() {
    return this.getNumberAttribute('out_of_order_ie_check');
  }
  public set outOfOrderIeCheck(value: number) {
    this._outOfOrderIeCheck = value;
  }
  public resetOutOfOrderIeCheck() {
    this._outOfOrderIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderIeCheckInput() {
    return this._outOfOrderIeCheck;
  }

  // out_of_state_ie_check - computed: false, optional: true, required: false
  private _outOfStateIeCheck?: number; 
  public get outOfStateIeCheck() {
    return this.getNumberAttribute('out_of_state_ie_check');
  }
  public set outOfStateIeCheck(value: number) {
    this._outOfStateIeCheck = value;
  }
  public resetOutOfStateIeCheck() {
    this._outOfStateIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfStateIeCheckInput() {
    return this._outOfStateIeCheck;
  }

  // rat_type_filtering - computed: false, optional: true, required: false
  private _ratTypeFiltering?: number; 
  public get ratTypeFiltering() {
    return this.getNumberAttribute('rat_type_filtering');
  }
  public set ratTypeFiltering(value: number) {
    this._ratTypeFiltering = value;
  }
  public resetRatTypeFiltering() {
    this._ratTypeFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratTypeFilteringInput() {
    return this._ratTypeFiltering;
  }

  // reserved_ie_check - computed: false, optional: true, required: false
  private _reservedIeCheck?: number; 
  public get reservedIeCheck() {
    return this.getNumberAttribute('reserved_ie_check');
  }
  public set reservedIeCheck(value: number) {
    this._reservedIeCheck = value;
  }
  public resetReservedIeCheck() {
    this._reservedIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIeCheckInput() {
    return this._reservedIeCheck;
  }

  // sequence_num_correlation - computed: false, optional: true, required: false
  private _sequenceNumCorrelation?: number; 
  public get sequenceNumCorrelation() {
    return this.getNumberAttribute('sequence_num_correlation');
  }
  public set sequenceNumCorrelation(value: number) {
    this._sequenceNumCorrelation = value;
  }
  public resetSequenceNumCorrelation() {
    this._sequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumCorrelationInput() {
    return this._sequenceNumCorrelation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy thunder_template_gtp_logging_policy}
*/
export class TemplateGtpLoggingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_logging_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpLoggingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpLoggingPolicy to import
  * @param importFromId The id of the existing TemplateGtpLoggingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpLoggingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_logging_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_logging_policy thunder_template_gtp_logging_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpLoggingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpLoggingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_logging_policy',
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
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._log.internalValue = config.log;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // log - computed: false, optional: true, required: false
  private _log = new TemplateGtpLoggingPolicyLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: TemplateGtpLoggingPolicyLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      log: templateGtpLoggingPolicyLogToTerraform(this._log.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      log: {
        value: templateGtpLoggingPolicyLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpLoggingPolicyLogList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
