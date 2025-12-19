// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpMessageFilteringPolicyVersionV2AConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#bearer_resource TemplateGtpMessageFilteringPolicyVersionV2A#bearer_resource}
  */
  readonly bearerResource?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#change_notification TemplateGtpMessageFilteringPolicyVersionV2A#change_notification}
  */
  readonly changeNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#create_bearer TemplateGtpMessageFilteringPolicyVersionV2A#create_bearer}
  */
  readonly createBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#create_session TemplateGtpMessageFilteringPolicyVersionV2A#create_session}
  */
  readonly createSession?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#delete_bearer TemplateGtpMessageFilteringPolicyVersionV2A#delete_bearer}
  */
  readonly deleteBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#delete_command TemplateGtpMessageFilteringPolicyVersionV2A#delete_command}
  */
  readonly deleteCommand?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#delete_pdn TemplateGtpMessageFilteringPolicyVersionV2A#delete_pdn}
  */
  readonly deletePdn?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#delete_session TemplateGtpMessageFilteringPolicyVersionV2A#delete_session}
  */
  readonly deleteSession?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#enable_disable_action TemplateGtpMessageFilteringPolicyVersionV2A#enable_disable_action}
  */
  readonly enableDisableAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#id TemplateGtpMessageFilteringPolicyVersionV2A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Message_filtering_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#message_filtering_policy_name TemplateGtpMessageFilteringPolicyVersionV2A#message_filtering_policy_name}
  */
  readonly messageFilteringPolicyName: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#message_type TemplateGtpMessageFilteringPolicyVersionV2A#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#modify_bearer TemplateGtpMessageFilteringPolicyVersionV2A#modify_bearer}
  */
  readonly modifyBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#modify_command TemplateGtpMessageFilteringPolicyVersionV2A#modify_command}
  */
  readonly modifyCommand?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#pgw_downlink_trigger TemplateGtpMessageFilteringPolicyVersionV2A#pgw_downlink_trigger}
  */
  readonly pgwDownlinkTrigger?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#remote_ue_report TemplateGtpMessageFilteringPolicyVersionV2A#remote_ue_report}
  */
  readonly remoteUeReport?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#reserved_messages TemplateGtpMessageFilteringPolicyVersionV2A#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#resume TemplateGtpMessageFilteringPolicyVersionV2A#resume}
  */
  readonly resume?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#suspend TemplateGtpMessageFilteringPolicyVersionV2A#suspend}
  */
  readonly suspend?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#trace_session TemplateGtpMessageFilteringPolicyVersionV2A#trace_session}
  */
  readonly traceSession?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#update_bearer TemplateGtpMessageFilteringPolicyVersionV2A#update_bearer}
  */
  readonly updateBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#update_pdn TemplateGtpMessageFilteringPolicyVersionV2A#update_pdn}
  */
  readonly updatePdn?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#uuid TemplateGtpMessageFilteringPolicyVersionV2A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2 thunder_template_gtp_message_filtering_policy_version_v2}
*/
export class TemplateGtpMessageFilteringPolicyVersionV2A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_message_filtering_policy_version_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpMessageFilteringPolicyVersionV2A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpMessageFilteringPolicyVersionV2A to import
  * @param importFromId The id of the existing TemplateGtpMessageFilteringPolicyVersionV2A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpMessageFilteringPolicyVersionV2A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_message_filtering_policy_version_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy_version_v2 thunder_template_gtp_message_filtering_policy_version_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpMessageFilteringPolicyVersionV2AConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpMessageFilteringPolicyVersionV2AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_message_filtering_policy_version_v2',
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
    this._bearerResource = config.bearerResource;
    this._changeNotification = config.changeNotification;
    this._createBearer = config.createBearer;
    this._createSession = config.createSession;
    this._deleteBearer = config.deleteBearer;
    this._deleteCommand = config.deleteCommand;
    this._deletePdn = config.deletePdn;
    this._deleteSession = config.deleteSession;
    this._enableDisableAction = config.enableDisableAction;
    this._id = config.id;
    this._messageFilteringPolicyName = config.messageFilteringPolicyName;
    this._messageType = config.messageType;
    this._modifyBearer = config.modifyBearer;
    this._modifyCommand = config.modifyCommand;
    this._pgwDownlinkTrigger = config.pgwDownlinkTrigger;
    this._remoteUeReport = config.remoteUeReport;
    this._reservedMessages = config.reservedMessages;
    this._resume = config.resume;
    this._suspend = config.suspend;
    this._traceSession = config.traceSession;
    this._updateBearer = config.updateBearer;
    this._updatePdn = config.updatePdn;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_resource - computed: false, optional: true, required: false
  private _bearerResource?: string; 
  public get bearerResource() {
    return this.getStringAttribute('bearer_resource');
  }
  public set bearerResource(value: string) {
    this._bearerResource = value;
  }
  public resetBearerResource() {
    this._bearerResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerResourceInput() {
    return this._bearerResource;
  }

  // change_notification - computed: false, optional: true, required: false
  private _changeNotification?: string; 
  public get changeNotification() {
    return this.getStringAttribute('change_notification');
  }
  public set changeNotification(value: string) {
    this._changeNotification = value;
  }
  public resetChangeNotification() {
    this._changeNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeNotificationInput() {
    return this._changeNotification;
  }

  // create_bearer - computed: false, optional: true, required: false
  private _createBearer?: string; 
  public get createBearer() {
    return this.getStringAttribute('create_bearer');
  }
  public set createBearer(value: string) {
    this._createBearer = value;
  }
  public resetCreateBearer() {
    this._createBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createBearerInput() {
    return this._createBearer;
  }

  // create_session - computed: false, optional: true, required: false
  private _createSession?: string; 
  public get createSession() {
    return this.getStringAttribute('create_session');
  }
  public set createSession(value: string) {
    this._createSession = value;
  }
  public resetCreateSession() {
    this._createSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSessionInput() {
    return this._createSession;
  }

  // delete_bearer - computed: false, optional: true, required: false
  private _deleteBearer?: string; 
  public get deleteBearer() {
    return this.getStringAttribute('delete_bearer');
  }
  public set deleteBearer(value: string) {
    this._deleteBearer = value;
  }
  public resetDeleteBearer() {
    this._deleteBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBearerInput() {
    return this._deleteBearer;
  }

  // delete_command - computed: false, optional: true, required: false
  private _deleteCommand?: string; 
  public get deleteCommand() {
    return this.getStringAttribute('delete_command');
  }
  public set deleteCommand(value: string) {
    this._deleteCommand = value;
  }
  public resetDeleteCommand() {
    this._deleteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCommandInput() {
    return this._deleteCommand;
  }

  // delete_pdn - computed: false, optional: true, required: false
  private _deletePdn?: string; 
  public get deletePdn() {
    return this.getStringAttribute('delete_pdn');
  }
  public set deletePdn(value: string) {
    this._deletePdn = value;
  }
  public resetDeletePdn() {
    this._deletePdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePdnInput() {
    return this._deletePdn;
  }

  // delete_session - computed: false, optional: true, required: false
  private _deleteSession?: string; 
  public get deleteSession() {
    return this.getStringAttribute('delete_session');
  }
  public set deleteSession(value: string) {
    this._deleteSession = value;
  }
  public resetDeleteSession() {
    this._deleteSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSessionInput() {
    return this._deleteSession;
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

  // modify_bearer - computed: false, optional: true, required: false
  private _modifyBearer?: string; 
  public get modifyBearer() {
    return this.getStringAttribute('modify_bearer');
  }
  public set modifyBearer(value: string) {
    this._modifyBearer = value;
  }
  public resetModifyBearer() {
    this._modifyBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyBearerInput() {
    return this._modifyBearer;
  }

  // modify_command - computed: false, optional: true, required: false
  private _modifyCommand?: string; 
  public get modifyCommand() {
    return this.getStringAttribute('modify_command');
  }
  public set modifyCommand(value: string) {
    this._modifyCommand = value;
  }
  public resetModifyCommand() {
    this._modifyCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyCommandInput() {
    return this._modifyCommand;
  }

  // pgw_downlink_trigger - computed: false, optional: true, required: false
  private _pgwDownlinkTrigger?: string; 
  public get pgwDownlinkTrigger() {
    return this.getStringAttribute('pgw_downlink_trigger');
  }
  public set pgwDownlinkTrigger(value: string) {
    this._pgwDownlinkTrigger = value;
  }
  public resetPgwDownlinkTrigger() {
    this._pgwDownlinkTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgwDownlinkTriggerInput() {
    return this._pgwDownlinkTrigger;
  }

  // remote_ue_report - computed: false, optional: true, required: false
  private _remoteUeReport?: string; 
  public get remoteUeReport() {
    return this.getStringAttribute('remote_ue_report');
  }
  public set remoteUeReport(value: string) {
    this._remoteUeReport = value;
  }
  public resetRemoteUeReport() {
    this._remoteUeReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUeReportInput() {
    return this._remoteUeReport;
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

  // resume - computed: false, optional: true, required: false
  private _resume?: string; 
  public get resume() {
    return this.getStringAttribute('resume');
  }
  public set resume(value: string) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: string; 
  public get suspend() {
    return this.getStringAttribute('suspend');
  }
  public set suspend(value: string) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // trace_session - computed: false, optional: true, required: false
  private _traceSession?: string; 
  public get traceSession() {
    return this.getStringAttribute('trace_session');
  }
  public set traceSession(value: string) {
    this._traceSession = value;
  }
  public resetTraceSession() {
    this._traceSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceSessionInput() {
    return this._traceSession;
  }

  // update_bearer - computed: false, optional: true, required: false
  private _updateBearer?: string; 
  public get updateBearer() {
    return this.getStringAttribute('update_bearer');
  }
  public set updateBearer(value: string) {
    this._updateBearer = value;
  }
  public resetUpdateBearer() {
    this._updateBearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBearerInput() {
    return this._updateBearer;
  }

  // update_pdn - computed: false, optional: true, required: false
  private _updatePdn?: string; 
  public get updatePdn() {
    return this.getStringAttribute('update_pdn');
  }
  public set updatePdn(value: string) {
    this._updatePdn = value;
  }
  public resetUpdatePdn() {
    this._updatePdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePdnInput() {
    return this._updatePdn;
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
      bearer_resource: cdktf.stringToTerraform(this._bearerResource),
      change_notification: cdktf.stringToTerraform(this._changeNotification),
      create_bearer: cdktf.stringToTerraform(this._createBearer),
      create_session: cdktf.stringToTerraform(this._createSession),
      delete_bearer: cdktf.stringToTerraform(this._deleteBearer),
      delete_command: cdktf.stringToTerraform(this._deleteCommand),
      delete_pdn: cdktf.stringToTerraform(this._deletePdn),
      delete_session: cdktf.stringToTerraform(this._deleteSession),
      enable_disable_action: cdktf.stringToTerraform(this._enableDisableAction),
      id: cdktf.stringToTerraform(this._id),
      message_filtering_policy_name: cdktf.stringToTerraform(this._messageFilteringPolicyName),
      message_type: cdktf.numberToTerraform(this._messageType),
      modify_bearer: cdktf.stringToTerraform(this._modifyBearer),
      modify_command: cdktf.stringToTerraform(this._modifyCommand),
      pgw_downlink_trigger: cdktf.stringToTerraform(this._pgwDownlinkTrigger),
      remote_ue_report: cdktf.stringToTerraform(this._remoteUeReport),
      reserved_messages: cdktf.stringToTerraform(this._reservedMessages),
      resume: cdktf.stringToTerraform(this._resume),
      suspend: cdktf.stringToTerraform(this._suspend),
      trace_session: cdktf.stringToTerraform(this._traceSession),
      update_bearer: cdktf.stringToTerraform(this._updateBearer),
      update_pdn: cdktf.stringToTerraform(this._updatePdn),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_resource: {
        value: cdktf.stringToHclTerraform(this._bearerResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_notification: {
        value: cdktf.stringToHclTerraform(this._changeNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_bearer: {
        value: cdktf.stringToHclTerraform(this._createBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_session: {
        value: cdktf.stringToHclTerraform(this._createSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_bearer: {
        value: cdktf.stringToHclTerraform(this._deleteBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_command: {
        value: cdktf.stringToHclTerraform(this._deleteCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_pdn: {
        value: cdktf.stringToHclTerraform(this._deletePdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_session: {
        value: cdktf.stringToHclTerraform(this._deleteSession),
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
      modify_bearer: {
        value: cdktf.stringToHclTerraform(this._modifyBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_command: {
        value: cdktf.stringToHclTerraform(this._modifyCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgw_downlink_trigger: {
        value: cdktf.stringToHclTerraform(this._pgwDownlinkTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ue_report: {
        value: cdktf.stringToHclTerraform(this._remoteUeReport),
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
      resume: {
        value: cdktf.stringToHclTerraform(this._resume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend: {
        value: cdktf.stringToHclTerraform(this._suspend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_session: {
        value: cdktf.stringToHclTerraform(this._traceSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_bearer: {
        value: cdktf.stringToHclTerraform(this._updateBearer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_pdn: {
        value: cdktf.stringToHclTerraform(this._updatePdn),
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
