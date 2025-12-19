// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpMessageFilteringPolicyVersionV0AConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#create_aa_pdp TemplateGtpMessageFilteringPolicyVersionV0A#create_aa_pdp}
  */
  readonly createAaPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#create_pdp TemplateGtpMessageFilteringPolicyVersionV0A#create_pdp}
  */
  readonly createPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#delete_aa_pdp TemplateGtpMessageFilteringPolicyVersionV0A#delete_aa_pdp}
  */
  readonly deleteAaPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#delete_pdp TemplateGtpMessageFilteringPolicyVersionV0A#delete_pdp}
  */
  readonly deletePdp?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#enable_disable_action TemplateGtpMessageFilteringPolicyVersionV0A#enable_disable_action}
  */
  readonly enableDisableAction: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#gtp_pdu TemplateGtpMessageFilteringPolicyVersionV0A#gtp_pdu}
  */
  readonly gtpPdu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#id TemplateGtpMessageFilteringPolicyVersionV0A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Message_filtering_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#message_filtering_policy_name TemplateGtpMessageFilteringPolicyVersionV0A#message_filtering_policy_name}
  */
  readonly messageFilteringPolicyName: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#message_type TemplateGtpMessageFilteringPolicyVersionV0A#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#pdu_notification TemplateGtpMessageFilteringPolicyVersionV0A#pdu_notification}
  */
  readonly pduNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#reserved_messages TemplateGtpMessageFilteringPolicyVersionV0A#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#update_pdp TemplateGtpMessageFilteringPolicyVersionV0A#update_pdp}
  */
  readonly updatePdp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#uuid TemplateGtpMessageFilteringPolicyVersionV0A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0 thunder_template_gtp_message_filtering_policy_version_v0}
*/
export class TemplateGtpMessageFilteringPolicyVersionV0A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_message_filtering_policy_version_v0";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpMessageFilteringPolicyVersionV0A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpMessageFilteringPolicyVersionV0A to import
  * @param importFromId The id of the existing TemplateGtpMessageFilteringPolicyVersionV0A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpMessageFilteringPolicyVersionV0A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_message_filtering_policy_version_v0", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v0 thunder_template_gtp_message_filtering_policy_version_v0} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpMessageFilteringPolicyVersionV0AConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpMessageFilteringPolicyVersionV0AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_message_filtering_policy_version_v0',
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
    this._createAaPdp = config.createAaPdp;
    this._createPdp = config.createPdp;
    this._deleteAaPdp = config.deleteAaPdp;
    this._deletePdp = config.deletePdp;
    this._enableDisableAction = config.enableDisableAction;
    this._gtpPdu = config.gtpPdu;
    this._id = config.id;
    this._messageFilteringPolicyName = config.messageFilteringPolicyName;
    this._messageType = config.messageType;
    this._pduNotification = config.pduNotification;
    this._reservedMessages = config.reservedMessages;
    this._updatePdp = config.updatePdp;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_aa_pdp - computed: false, optional: true, required: false
  private _createAaPdp?: string; 
  public get createAaPdp() {
    return this.getStringAttribute('create_aa_pdp');
  }
  public set createAaPdp(value: string) {
    this._createAaPdp = value;
  }
  public resetCreateAaPdp() {
    this._createAaPdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAaPdpInput() {
    return this._createAaPdp;
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

  // delete_aa_pdp - computed: false, optional: true, required: false
  private _deleteAaPdp?: string; 
  public get deleteAaPdp() {
    return this.getStringAttribute('delete_aa_pdp');
  }
  public set deleteAaPdp(value: string) {
    this._deleteAaPdp = value;
  }
  public resetDeleteAaPdp() {
    this._deleteAaPdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAaPdpInput() {
    return this._deleteAaPdp;
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
      create_aa_pdp: cdktf.stringToTerraform(this._createAaPdp),
      create_pdp: cdktf.stringToTerraform(this._createPdp),
      delete_aa_pdp: cdktf.stringToTerraform(this._deleteAaPdp),
      delete_pdp: cdktf.stringToTerraform(this._deletePdp),
      enable_disable_action: cdktf.stringToTerraform(this._enableDisableAction),
      gtp_pdu: cdktf.stringToTerraform(this._gtpPdu),
      id: cdktf.stringToTerraform(this._id),
      message_filtering_policy_name: cdktf.stringToTerraform(this._messageFilteringPolicyName),
      message_type: cdktf.numberToTerraform(this._messageType),
      pdu_notification: cdktf.stringToTerraform(this._pduNotification),
      reserved_messages: cdktf.stringToTerraform(this._reservedMessages),
      update_pdp: cdktf.stringToTerraform(this._updatePdp),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_aa_pdp: {
        value: cdktf.stringToHclTerraform(this._createAaPdp),
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
      delete_aa_pdp: {
        value: cdktf.stringToHclTerraform(this._deleteAaPdp),
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
