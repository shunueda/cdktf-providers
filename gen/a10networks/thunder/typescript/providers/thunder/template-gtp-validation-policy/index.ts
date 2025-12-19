// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpValidationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#anomaly_action TemplateGtpValidationPolicy#anomaly_action}
  */
  readonly anomalyAction?: string;
  /**
  * 'enable': Enable Anomaly Checks for GTP Messages; 'disable': Disable Anomaly Checks for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#anomaly_checks TemplateGtpValidationPolicy#anomaly_checks}
  */
  readonly anomalyChecks?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#anti_spoofing_action TemplateGtpValidationPolicy#anti_spoofing_action}
  */
  readonly antiSpoofingAction?: string;
  /**
  * 'enable': Enable Spoofed IP Address Check for GTP-U Messages; 'disable': Disable Spoofed IP Address Check for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#anti_spoofing_check TemplateGtpValidationPolicy#anti_spoofing_check}
  */
  readonly antiSpoofingCheck?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#crosslayer_corr_action TemplateGtpValidationPolicy#crosslayer_corr_action}
  */
  readonly crosslayerCorrAction?: string;
  /**
  * 'enable': Enable Cross Layer Correlation for GTP Messages; 'disable': Disable Cross Layer Correlation for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#crosslayer_correlation TemplateGtpValidationPolicy#crosslayer_correlation}
  */
  readonly crosslayerCorrelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#id TemplateGtpValidationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#mandatory_ie_action TemplateGtpValidationPolicy#mandatory_ie_action}
  */
  readonly mandatoryIeAction?: string;
  /**
  * 'enable': Enable Mandatory IE Check for GTP Messages; 'disable': Disable Mandatory IE Check for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#mandatory_ie_check TemplateGtpValidationPolicy#mandatory_ie_check}
  */
  readonly mandatoryIeCheck?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#msisdn_imsi_corr_action TemplateGtpValidationPolicy#msisdn_imsi_corr_action}
  */
  readonly msisdnImsiCorrAction?: string;
  /**
  * 'enable': Enable Country Code Correlation in MSISDN and IMSI for GTP Messages; 'disable': Disable Country Code Correlation in MSISDN and IMSI for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#msisdn_imsi_correlation TemplateGtpValidationPolicy#msisdn_imsi_correlation}
  */
  readonly msisdnImsiCorrelation?: string;
  /**
  * Specify name of the GTP Validation Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#name TemplateGtpValidationPolicy#name}
  */
  readonly name: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#out_of_order_ie_action TemplateGtpValidationPolicy#out_of_order_ie_action}
  */
  readonly outOfOrderIeAction?: string;
  /**
  * 'enable': Enable Out of Order IE Check for GTP Messages; 'disable': Disable Out of Order IE Check for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#out_of_order_ie_check TemplateGtpValidationPolicy#out_of_order_ie_check}
  */
  readonly outOfOrderIeCheck?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#out_of_state_ie_action TemplateGtpValidationPolicy#out_of_state_ie_action}
  */
  readonly outOfStateIeAction?: string;
  /**
  * 'enable': Enable Out of State IE Check for GTP Messages; 'disable': Disable Out of State IE Check for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#out_of_state_ie_check TemplateGtpValidationPolicy#out_of_state_ie_check}
  */
  readonly outOfStateIeCheck?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#reserved_ie_action TemplateGtpValidationPolicy#reserved_ie_action}
  */
  readonly reservedIeAction?: string;
  /**
  * 'enable': Enable Reserved IE Check for GTP Messages; 'disable': Disable Reserved IE Check for GTP Messages;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#reserved_ie_check TemplateGtpValidationPolicy#reserved_ie_check}
  */
  readonly reservedIeCheck?: string;
  /**
  * 'monitor': Forward failed packet; 'drop': drop check failed packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#sequence_num_corr_action TemplateGtpValidationPolicy#sequence_num_corr_action}
  */
  readonly sequenceNumCorrAction?: string;
  /**
  * 'enable': Enable Sequence number correlation between GTP Request and Responses; 'disable': Disable Sequence number correlation between GTP Request and Responses;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#sequence_num_correlation TemplateGtpValidationPolicy#sequence_num_correlation}
  */
  readonly sequenceNumCorrelation?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#user_tag TemplateGtpValidationPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#uuid TemplateGtpValidationPolicy#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy thunder_template_gtp_validation_policy}
*/
export class TemplateGtpValidationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_validation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpValidationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpValidationPolicy to import
  * @param importFromId The id of the existing TemplateGtpValidationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpValidationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_validation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_validation_policy thunder_template_gtp_validation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpValidationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpValidationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_validation_policy',
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
    this._anomalyAction = config.anomalyAction;
    this._anomalyChecks = config.anomalyChecks;
    this._antiSpoofingAction = config.antiSpoofingAction;
    this._antiSpoofingCheck = config.antiSpoofingCheck;
    this._crosslayerCorrAction = config.crosslayerCorrAction;
    this._crosslayerCorrelation = config.crosslayerCorrelation;
    this._id = config.id;
    this._mandatoryIeAction = config.mandatoryIeAction;
    this._mandatoryIeCheck = config.mandatoryIeCheck;
    this._msisdnImsiCorrAction = config.msisdnImsiCorrAction;
    this._msisdnImsiCorrelation = config.msisdnImsiCorrelation;
    this._name = config.name;
    this._outOfOrderIeAction = config.outOfOrderIeAction;
    this._outOfOrderIeCheck = config.outOfOrderIeCheck;
    this._outOfStateIeAction = config.outOfStateIeAction;
    this._outOfStateIeCheck = config.outOfStateIeCheck;
    this._reservedIeAction = config.reservedIeAction;
    this._reservedIeCheck = config.reservedIeCheck;
    this._sequenceNumCorrAction = config.sequenceNumCorrAction;
    this._sequenceNumCorrelation = config.sequenceNumCorrelation;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_action - computed: false, optional: true, required: false
  private _anomalyAction?: string; 
  public get anomalyAction() {
    return this.getStringAttribute('anomaly_action');
  }
  public set anomalyAction(value: string) {
    this._anomalyAction = value;
  }
  public resetAnomalyAction() {
    this._anomalyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyActionInput() {
    return this._anomalyAction;
  }

  // anomaly_checks - computed: false, optional: true, required: false
  private _anomalyChecks?: string; 
  public get anomalyChecks() {
    return this.getStringAttribute('anomaly_checks');
  }
  public set anomalyChecks(value: string) {
    this._anomalyChecks = value;
  }
  public resetAnomalyChecks() {
    this._anomalyChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyChecksInput() {
    return this._anomalyChecks;
  }

  // anti_spoofing_action - computed: false, optional: true, required: false
  private _antiSpoofingAction?: string; 
  public get antiSpoofingAction() {
    return this.getStringAttribute('anti_spoofing_action');
  }
  public set antiSpoofingAction(value: string) {
    this._antiSpoofingAction = value;
  }
  public resetAntiSpoofingAction() {
    this._antiSpoofingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingActionInput() {
    return this._antiSpoofingAction;
  }

  // anti_spoofing_check - computed: false, optional: true, required: false
  private _antiSpoofingCheck?: string; 
  public get antiSpoofingCheck() {
    return this.getStringAttribute('anti_spoofing_check');
  }
  public set antiSpoofingCheck(value: string) {
    this._antiSpoofingCheck = value;
  }
  public resetAntiSpoofingCheck() {
    this._antiSpoofingCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingCheckInput() {
    return this._antiSpoofingCheck;
  }

  // crosslayer_corr_action - computed: false, optional: true, required: false
  private _crosslayerCorrAction?: string; 
  public get crosslayerCorrAction() {
    return this.getStringAttribute('crosslayer_corr_action');
  }
  public set crosslayerCorrAction(value: string) {
    this._crosslayerCorrAction = value;
  }
  public resetCrosslayerCorrAction() {
    this._crosslayerCorrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosslayerCorrActionInput() {
    return this._crosslayerCorrAction;
  }

  // crosslayer_correlation - computed: false, optional: true, required: false
  private _crosslayerCorrelation?: string; 
  public get crosslayerCorrelation() {
    return this.getStringAttribute('crosslayer_correlation');
  }
  public set crosslayerCorrelation(value: string) {
    this._crosslayerCorrelation = value;
  }
  public resetCrosslayerCorrelation() {
    this._crosslayerCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crosslayerCorrelationInput() {
    return this._crosslayerCorrelation;
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

  // mandatory_ie_action - computed: false, optional: true, required: false
  private _mandatoryIeAction?: string; 
  public get mandatoryIeAction() {
    return this.getStringAttribute('mandatory_ie_action');
  }
  public set mandatoryIeAction(value: string) {
    this._mandatoryIeAction = value;
  }
  public resetMandatoryIeAction() {
    this._mandatoryIeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryIeActionInput() {
    return this._mandatoryIeAction;
  }

  // mandatory_ie_check - computed: false, optional: true, required: false
  private _mandatoryIeCheck?: string; 
  public get mandatoryIeCheck() {
    return this.getStringAttribute('mandatory_ie_check');
  }
  public set mandatoryIeCheck(value: string) {
    this._mandatoryIeCheck = value;
  }
  public resetMandatoryIeCheck() {
    this._mandatoryIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryIeCheckInput() {
    return this._mandatoryIeCheck;
  }

  // msisdn_imsi_corr_action - computed: false, optional: true, required: false
  private _msisdnImsiCorrAction?: string; 
  public get msisdnImsiCorrAction() {
    return this.getStringAttribute('msisdn_imsi_corr_action');
  }
  public set msisdnImsiCorrAction(value: string) {
    this._msisdnImsiCorrAction = value;
  }
  public resetMsisdnImsiCorrAction() {
    this._msisdnImsiCorrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnImsiCorrActionInput() {
    return this._msisdnImsiCorrAction;
  }

  // msisdn_imsi_correlation - computed: false, optional: true, required: false
  private _msisdnImsiCorrelation?: string; 
  public get msisdnImsiCorrelation() {
    return this.getStringAttribute('msisdn_imsi_correlation');
  }
  public set msisdnImsiCorrelation(value: string) {
    this._msisdnImsiCorrelation = value;
  }
  public resetMsisdnImsiCorrelation() {
    this._msisdnImsiCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msisdnImsiCorrelationInput() {
    return this._msisdnImsiCorrelation;
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

  // out_of_order_ie_action - computed: false, optional: true, required: false
  private _outOfOrderIeAction?: string; 
  public get outOfOrderIeAction() {
    return this.getStringAttribute('out_of_order_ie_action');
  }
  public set outOfOrderIeAction(value: string) {
    this._outOfOrderIeAction = value;
  }
  public resetOutOfOrderIeAction() {
    this._outOfOrderIeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderIeActionInput() {
    return this._outOfOrderIeAction;
  }

  // out_of_order_ie_check - computed: false, optional: true, required: false
  private _outOfOrderIeCheck?: string; 
  public get outOfOrderIeCheck() {
    return this.getStringAttribute('out_of_order_ie_check');
  }
  public set outOfOrderIeCheck(value: string) {
    this._outOfOrderIeCheck = value;
  }
  public resetOutOfOrderIeCheck() {
    this._outOfOrderIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderIeCheckInput() {
    return this._outOfOrderIeCheck;
  }

  // out_of_state_ie_action - computed: false, optional: true, required: false
  private _outOfStateIeAction?: string; 
  public get outOfStateIeAction() {
    return this.getStringAttribute('out_of_state_ie_action');
  }
  public set outOfStateIeAction(value: string) {
    this._outOfStateIeAction = value;
  }
  public resetOutOfStateIeAction() {
    this._outOfStateIeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfStateIeActionInput() {
    return this._outOfStateIeAction;
  }

  // out_of_state_ie_check - computed: false, optional: true, required: false
  private _outOfStateIeCheck?: string; 
  public get outOfStateIeCheck() {
    return this.getStringAttribute('out_of_state_ie_check');
  }
  public set outOfStateIeCheck(value: string) {
    this._outOfStateIeCheck = value;
  }
  public resetOutOfStateIeCheck() {
    this._outOfStateIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfStateIeCheckInput() {
    return this._outOfStateIeCheck;
  }

  // reserved_ie_action - computed: false, optional: true, required: false
  private _reservedIeAction?: string; 
  public get reservedIeAction() {
    return this.getStringAttribute('reserved_ie_action');
  }
  public set reservedIeAction(value: string) {
    this._reservedIeAction = value;
  }
  public resetReservedIeAction() {
    this._reservedIeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIeActionInput() {
    return this._reservedIeAction;
  }

  // reserved_ie_check - computed: false, optional: true, required: false
  private _reservedIeCheck?: string; 
  public get reservedIeCheck() {
    return this.getStringAttribute('reserved_ie_check');
  }
  public set reservedIeCheck(value: string) {
    this._reservedIeCheck = value;
  }
  public resetReservedIeCheck() {
    this._reservedIeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIeCheckInput() {
    return this._reservedIeCheck;
  }

  // sequence_num_corr_action - computed: false, optional: true, required: false
  private _sequenceNumCorrAction?: string; 
  public get sequenceNumCorrAction() {
    return this.getStringAttribute('sequence_num_corr_action');
  }
  public set sequenceNumCorrAction(value: string) {
    this._sequenceNumCorrAction = value;
  }
  public resetSequenceNumCorrAction() {
    this._sequenceNumCorrAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumCorrActionInput() {
    return this._sequenceNumCorrAction;
  }

  // sequence_num_correlation - computed: false, optional: true, required: false
  private _sequenceNumCorrelation?: string; 
  public get sequenceNumCorrelation() {
    return this.getStringAttribute('sequence_num_correlation');
  }
  public set sequenceNumCorrelation(value: string) {
    this._sequenceNumCorrelation = value;
  }
  public resetSequenceNumCorrelation() {
    this._sequenceNumCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumCorrelationInput() {
    return this._sequenceNumCorrelation;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_action: cdktf.stringToTerraform(this._anomalyAction),
      anomaly_checks: cdktf.stringToTerraform(this._anomalyChecks),
      anti_spoofing_action: cdktf.stringToTerraform(this._antiSpoofingAction),
      anti_spoofing_check: cdktf.stringToTerraform(this._antiSpoofingCheck),
      crosslayer_corr_action: cdktf.stringToTerraform(this._crosslayerCorrAction),
      crosslayer_correlation: cdktf.stringToTerraform(this._crosslayerCorrelation),
      id: cdktf.stringToTerraform(this._id),
      mandatory_ie_action: cdktf.stringToTerraform(this._mandatoryIeAction),
      mandatory_ie_check: cdktf.stringToTerraform(this._mandatoryIeCheck),
      msisdn_imsi_corr_action: cdktf.stringToTerraform(this._msisdnImsiCorrAction),
      msisdn_imsi_correlation: cdktf.stringToTerraform(this._msisdnImsiCorrelation),
      name: cdktf.stringToTerraform(this._name),
      out_of_order_ie_action: cdktf.stringToTerraform(this._outOfOrderIeAction),
      out_of_order_ie_check: cdktf.stringToTerraform(this._outOfOrderIeCheck),
      out_of_state_ie_action: cdktf.stringToTerraform(this._outOfStateIeAction),
      out_of_state_ie_check: cdktf.stringToTerraform(this._outOfStateIeCheck),
      reserved_ie_action: cdktf.stringToTerraform(this._reservedIeAction),
      reserved_ie_check: cdktf.stringToTerraform(this._reservedIeCheck),
      sequence_num_corr_action: cdktf.stringToTerraform(this._sequenceNumCorrAction),
      sequence_num_correlation: cdktf.stringToTerraform(this._sequenceNumCorrelation),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly_action: {
        value: cdktf.stringToHclTerraform(this._anomalyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly_checks: {
        value: cdktf.stringToHclTerraform(this._anomalyChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_spoofing_action: {
        value: cdktf.stringToHclTerraform(this._antiSpoofingAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_spoofing_check: {
        value: cdktf.stringToHclTerraform(this._antiSpoofingCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crosslayer_corr_action: {
        value: cdktf.stringToHclTerraform(this._crosslayerCorrAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crosslayer_correlation: {
        value: cdktf.stringToHclTerraform(this._crosslayerCorrelation),
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
      mandatory_ie_action: {
        value: cdktf.stringToHclTerraform(this._mandatoryIeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory_ie_check: {
        value: cdktf.stringToHclTerraform(this._mandatoryIeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn_imsi_corr_action: {
        value: cdktf.stringToHclTerraform(this._msisdnImsiCorrAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msisdn_imsi_correlation: {
        value: cdktf.stringToHclTerraform(this._msisdnImsiCorrelation),
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
      out_of_order_ie_action: {
        value: cdktf.stringToHclTerraform(this._outOfOrderIeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_order_ie_check: {
        value: cdktf.stringToHclTerraform(this._outOfOrderIeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_state_ie_action: {
        value: cdktf.stringToHclTerraform(this._outOfStateIeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_state_ie_check: {
        value: cdktf.stringToHclTerraform(this._outOfStateIeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ie_action: {
        value: cdktf.stringToHclTerraform(this._reservedIeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ie_check: {
        value: cdktf.stringToHclTerraform(this._reservedIeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_num_corr_action: {
        value: cdktf.stringToHclTerraform(this._sequenceNumCorrAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_num_correlation: {
        value: cdktf.stringToHclTerraform(this._sequenceNumCorrelation),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
