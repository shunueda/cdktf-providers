// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpMessageFilteringPolicyVersionV1AConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#create_mbms TemplateGtpMessageFilteringPolicyVersionV1A#create_mbms}
  */
  readonly createMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#create_pdp TemplateGtpMessageFilteringPolicyVersionV1A#create_pdp}
  */
  readonly createPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#delete_mbms TemplateGtpMessageFilteringPolicyVersionV1A#delete_mbms}
  */
  readonly deleteMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#delete_pdp TemplateGtpMessageFilteringPolicyVersionV1A#delete_pdp}
  */
  readonly deletePdp?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#enable_disable_action TemplateGtpMessageFilteringPolicyVersionV1A#enable_disable_action}
  */
  readonly enableDisableAction: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#gtp_pdu TemplateGtpMessageFilteringPolicyVersionV1A#gtp_pdu}
  */
  readonly gtpPdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#id TemplateGtpMessageFilteringPolicyVersionV1A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#initiate_pdp TemplateGtpMessageFilteringPolicyVersionV1A#initiate_pdp}
  */
  readonly initiatePdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#mbms_deregistration TemplateGtpMessageFilteringPolicyVersionV1A#mbms_deregistration}
  */
  readonly mbmsDeregistration?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#mbms_notification TemplateGtpMessageFilteringPolicyVersionV1A#mbms_notification}
  */
  readonly mbmsNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#mbms_registration TemplateGtpMessageFilteringPolicyVersionV1A#mbms_registration}
  */
  readonly mbmsRegistration?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#mbms_session TemplateGtpMessageFilteringPolicyVersionV1A#mbms_session}
  */
  readonly mbmsSession?: string;
  /**
  * Message_filtering_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#message_filtering_policy_name TemplateGtpMessageFilteringPolicyVersionV1A#message_filtering_policy_name}
  */
  readonly messageFilteringPolicyName: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#message_type TemplateGtpMessageFilteringPolicyVersionV1A#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#ms_info_change TemplateGtpMessageFilteringPolicyVersionV1A#ms_info_change}
  */
  readonly msInfoChange?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#pdu_notification TemplateGtpMessageFilteringPolicyVersionV1A#pdu_notification}
  */
  readonly pduNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#reserved_messages TemplateGtpMessageFilteringPolicyVersionV1A#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#update_mbms TemplateGtpMessageFilteringPolicyVersionV1A#update_mbms}
  */
  readonly updateMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#update_pdp TemplateGtpMessageFilteringPolicyVersionV1A#update_pdp}
  */
  readonly updatePdp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#uuid TemplateGtpMessageFilteringPolicyVersionV1A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1 thunder_template_gtp_message_filtering_policy_version_v1}
*/
export class TemplateGtpMessageFilteringPolicyVersionV1A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_message_filtering_policy_version_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpMessageFilteringPolicyVersionV1A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpMessageFilteringPolicyVersionV1A to import
  * @param importFromId The id of the existing TemplateGtpMessageFilteringPolicyVersionV1A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpMessageFilteringPolicyVersionV1A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_message_filtering_policy_version_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v1 thunder_template_gtp_message_filtering_policy_version_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpMessageFilteringPolicyVersionV1AConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpMessageFilteringPolicyVersionV1AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_message_filtering_policy_version_v1',
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
    this._createMbms = config.createMbms;
    this._createPdp = config.createPdp;
    this._deleteMbms = config.deleteMbms;
    this._deletePdp = config.deletePdp;
    this._enableDisableAction = config.enableDisableAction;
    this._gtpPdu = config.gtpPdu;
    this._id = config.id;
    this._initiatePdp = config.initiatePdp;
    this._mbmsDeregistration = config.mbmsDeregistration;
    this._mbmsNotification = config.mbmsNotification;
    this._mbmsRegistration = config.mbmsRegistration;
    this._mbmsSession = config.mbmsSession;
    this._messageFilteringPolicyName = config.messageFilteringPolicyName;
    this._messageType = config.messageType;
    this._msInfoChange = config.msInfoChange;
    this._pduNotification = config.pduNotification;
    this._reservedMessages = config.reservedMessages;
    this._updateMbms = config.updateMbms;
    this._updatePdp = config.updatePdp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_mbms - computed: false, optional: true, required: false
  private _createMbms?: string; 
  public get createMbms() {
    return this.getStringAttribute('create_mbms');
  }
  public set createMbms(value: string) {
    this._createMbms = value;
  }
  public resetCreateMbms() {
    this._createMbms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMbmsInput() {
    return this._createMbms;
  }

  // create_pdp - computed: false, optional: true, required: false
  private _createPdp?: string; 
  public get createPdp() {
    return this.getStringAttribute('create_pdp');
  }
  public set createPdp(value: string) {
    this._createPdp = value;
  }
  public resetCreatePdp() {
    this._createPdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPdpInput() {
    return this._createPdp;
  }

  // delete_mbms - computed: false, optional: true, required: false
  private _deleteMbms?: string; 
  public get deleteMbms() {
    return this.getStringAttribute('delete_mbms');
  }
  public set deleteMbms(value: string) {
    this._deleteMbms = value;
  }
  public resetDeleteMbms() {
    this._deleteMbms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMbmsInput() {
    return this._deleteMbms;
  }

  // delete_pdp - computed: false, optional: true, required: false
  private _deletePdp?: string; 
  public get deletePdp() {
    return this.getStringAttribute('delete_pdp');
  }
  public set deletePdp(value: string) {
    this._deletePdp = value;
  }
  public resetDeletePdp() {
    this._deletePdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdpInput() {
    return this._deletePdp;
  }

  // enable_disable_action - computed: false, optional: false, required: true
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableActionInput() {
    return this._enableDisableAction;
  }

  // gtp_pdu - computed: false, optional: true, required: false
  private _gtpPdu?: string; 
  public get gtpPdu() {
    return this.getStringAttribute('gtp_pdu');
  }
  public set gtpPdu(value: string) {
    this._gtpPdu = value;
  }
  public resetGtpPdu() {
    this._gtpPdu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpPduInput() {
    return this._gtpPdu;
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

  // initiate_pdp - computed: false, optional: true, required: false
  private _initiatePdp?: string; 
  public get initiatePdp() {
    return this.getStringAttribute('initiate_pdp');
  }
  public set initiatePdp(value: string) {
    this._initiatePdp = value;
  }
  public resetInitiatePdp() {
    this._initiatePdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatePdpInput() {
    return this._initiatePdp;
  }

  // mbms_deregistration - computed: false, optional: true, required: false
  private _mbmsDeregistration?: string; 
  public get mbmsDeregistration() {
    return this.getStringAttribute('mbms_deregistration');
  }
  public set mbmsDeregistration(value: string) {
    this._mbmsDeregistration = value;
  }
  public resetMbmsDeregistration() {
    this._mbmsDeregistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsDeregistrationInput() {
    return this._mbmsDeregistration;
  }

  // mbms_notification - computed: false, optional: true, required: false
  private _mbmsNotification?: string; 
  public get mbmsNotification() {
    return this.getStringAttribute('mbms_notification');
  }
  public set mbmsNotification(value: string) {
    this._mbmsNotification = value;
  }
  public resetMbmsNotification() {
    this._mbmsNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsNotificationInput() {
    return this._mbmsNotification;
  }

  // mbms_registration - computed: false, optional: true, required: false
  private _mbmsRegistration?: string; 
  public get mbmsRegistration() {
    return this.getStringAttribute('mbms_registration');
  }
  public set mbmsRegistration(value: string) {
    this._mbmsRegistration = value;
  }
  public resetMbmsRegistration() {
    this._mbmsRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsRegistrationInput() {
    return this._mbmsRegistration;
  }

  // mbms_session - computed: false, optional: true, required: false
  private _mbmsSession?: string; 
  public get mbmsSession() {
    return this.getStringAttribute('mbms_session');
  }
  public set mbmsSession(value: string) {
    this._mbmsSession = value;
  }
  public resetMbmsSession() {
    this._mbmsSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbmsSessionInput() {
    return this._mbmsSession;
  }

  // message_filtering_policy_name - computed: false, optional: false, required: true
  private _messageFilteringPolicyName?: string; 
  public get messageFilteringPolicyName() {
    return this.getStringAttribute('message_filtering_policy_name');
  }
  public set messageFilteringPolicyName(value: string) {
    this._messageFilteringPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFilteringPolicyNameInput() {
    return this._messageFilteringPolicyName;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: number; 
  public get messageType() {
    return this.getNumberAttribute('message_type');
  }
  public set messageType(value: number) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // ms_info_change - computed: false, optional: true, required: false
  private _msInfoChange?: string; 
  public get msInfoChange() {
    return this.getStringAttribute('ms_info_change');
  }
  public set msInfoChange(value: string) {
    this._msInfoChange = value;
  }
  public resetMsInfoChange() {
    this._msInfoChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msInfoChangeInput() {
    return this._msInfoChange;
  }

  // pdu_notification - computed: false, optional: true, required: false
  private _pduNotification?: string; 
  public get pduNotification() {
    return this.getStringAttribute('pdu_notification');
  }
  public set pduNotification(value: string) {
    this._pduNotification = value;
  }
  public resetPduNotification() {
    this._pduNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pduNotificationInput() {
    return this._pduNotification;
  }

  // reserved_messages - computed: false, optional: true, required: false
  private _reservedMessages?: string; 
  public get reservedMessages() {
    return this.getStringAttribute('reserved_messages');
  }
  public set reservedMessages(value: string) {
    this._reservedMessages = value;
  }
  public resetReservedMessages() {
    this._reservedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMessagesInput() {
    return this._reservedMessages;
  }

  // update_mbms - computed: false, optional: true, required: false
  private _updateMbms?: string; 
  public get updateMbms() {
    return this.getStringAttribute('update_mbms');
  }
  public set updateMbms(value: string) {
    this._updateMbms = value;
  }
  public resetUpdateMbms() {
    this._updateMbms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMbmsInput() {
    return this._updateMbms;
  }

  // update_pdp - computed: false, optional: true, required: false
  private _updatePdp?: string; 
  public get updatePdp() {
    return this.getStringAttribute('update_pdp');
  }
  public set updatePdp(value: string) {
    this._updatePdp = value;
  }
  public resetUpdatePdp() {
    this._updatePdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdpInput() {
    return this._updatePdp;
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
      create_mbms: cdktf.stringToTerraform(this._createMbms),
      create_pdp: cdktf.stringToTerraform(this._createPdp),
      delete_mbms: cdktf.stringToTerraform(this._deleteMbms),
      delete_pdp: cdktf.stringToTerraform(this._deletePdp),
      enable_disable_action: cdktf.stringToTerraform(this._enableDisableAction),
      gtp_pdu: cdktf.stringToTerraform(this._gtpPdu),
      id: cdktf.stringToTerraform(this._id),
      initiate_pdp: cdktf.stringToTerraform(this._initiatePdp),
      mbms_deregistration: cdktf.stringToTerraform(this._mbmsDeregistration),
      mbms_notification: cdktf.stringToTerraform(this._mbmsNotification),
      mbms_registration: cdktf.stringToTerraform(this._mbmsRegistration),
      mbms_session: cdktf.stringToTerraform(this._mbmsSession),
      message_filtering_policy_name: cdktf.stringToTerraform(this._messageFilteringPolicyName),
      message_type: cdktf.numberToTerraform(this._messageType),
      ms_info_change: cdktf.stringToTerraform(this._msInfoChange),
      pdu_notification: cdktf.stringToTerraform(this._pduNotification),
      reserved_messages: cdktf.stringToTerraform(this._reservedMessages),
      update_mbms: cdktf.stringToTerraform(this._updateMbms),
      update_pdp: cdktf.stringToTerraform(this._updatePdp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_mbms: {
        value: cdktf.stringToHclTerraform(this._createMbms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_pdp: {
        value: cdktf.stringToHclTerraform(this._createPdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mbms: {
        value: cdktf.stringToHclTerraform(this._deleteMbms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_pdp: {
        value: cdktf.stringToHclTerraform(this._deletePdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_disable_action: {
        value: cdktf.stringToHclTerraform(this._enableDisableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp_pdu: {
        value: cdktf.stringToHclTerraform(this._gtpPdu),
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
      initiate_pdp: {
        value: cdktf.stringToHclTerraform(this._initiatePdp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbms_deregistration: {
        value: cdktf.stringToHclTerraform(this._mbmsDeregistration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbms_notification: {
        value: cdktf.stringToHclTerraform(this._mbmsNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbms_registration: {
        value: cdktf.stringToHclTerraform(this._mbmsRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbms_session: {
        value: cdktf.stringToHclTerraform(this._mbmsSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_filtering_policy_name: {
        value: cdktf.stringToHclTerraform(this._messageFilteringPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_type: {
        value: cdktf.numberToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ms_info_change: {
        value: cdktf.stringToHclTerraform(this._msInfoChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdu_notification: {
        value: cdktf.stringToHclTerraform(this._pduNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_messages: {
        value: cdktf.stringToHclTerraform(this._reservedMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_mbms: {
        value: cdktf.stringToHclTerraform(this._updateMbms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_pdp: {
        value: cdktf.stringToHclTerraform(this._updatePdp),
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
