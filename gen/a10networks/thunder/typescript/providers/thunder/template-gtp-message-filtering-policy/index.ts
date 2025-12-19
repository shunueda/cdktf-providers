// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateGtpMessageFilteringPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#id TemplateGtpMessageFilteringPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'roaming': Roaming Interface(S8/Gp); 'non-roaming': Non-Roaming Interface(S5/Gn);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#interface_type TemplateGtpMessageFilteringPolicy#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Specify name of the GTP Message Filtering Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#name TemplateGtpMessageFilteringPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#user_tag TemplateGtpMessageFilteringPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#uuid TemplateGtpMessageFilteringPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * version_v0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#version_v0 TemplateGtpMessageFilteringPolicy#version_v0}
  */
  readonly versionV0?: TemplateGtpMessageFilteringPolicyVersionV0;
  /**
  * version_v1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#version_v1 TemplateGtpMessageFilteringPolicy#version_v1}
  */
  readonly versionV1?: TemplateGtpMessageFilteringPolicyVersionV1;
  /**
  * version_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#version_v2 TemplateGtpMessageFilteringPolicy#version_v2}
  */
  readonly versionV2?: TemplateGtpMessageFilteringPolicyVersionV2;
}
export interface TemplateGtpMessageFilteringPolicyVersionV0 {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_aa_pdp TemplateGtpMessageFilteringPolicy#create_aa_pdp}
  */
  readonly createAaPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_pdp TemplateGtpMessageFilteringPolicy#create_pdp}
  */
  readonly createPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_aa_pdp TemplateGtpMessageFilteringPolicy#delete_aa_pdp}
  */
  readonly deleteAaPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_pdp TemplateGtpMessageFilteringPolicy#delete_pdp}
  */
  readonly deletePdp?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#enable_disable_action TemplateGtpMessageFilteringPolicy#enable_disable_action}
  */
  readonly enableDisableAction?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#gtp_pdu TemplateGtpMessageFilteringPolicy#gtp_pdu}
  */
  readonly gtpPdu?: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#message_type TemplateGtpMessageFilteringPolicy#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#pdu_notification TemplateGtpMessageFilteringPolicy#pdu_notification}
  */
  readonly pduNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#reserved_messages TemplateGtpMessageFilteringPolicy#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#update_pdp TemplateGtpMessageFilteringPolicy#update_pdp}
  */
  readonly updatePdp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#uuid TemplateGtpMessageFilteringPolicy#uuid}
  */
  readonly uuid?: string;
}

export function templateGtpMessageFilteringPolicyVersionV0ToTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV0OutputReference | TemplateGtpMessageFilteringPolicyVersionV0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_aa_pdp: cdktf.stringToTerraform(struct!.createAaPdp),
    create_pdp: cdktf.stringToTerraform(struct!.createPdp),
    delete_aa_pdp: cdktf.stringToTerraform(struct!.deleteAaPdp),
    delete_pdp: cdktf.stringToTerraform(struct!.deletePdp),
    enable_disable_action: cdktf.stringToTerraform(struct!.enableDisableAction),
    gtp_pdu: cdktf.stringToTerraform(struct!.gtpPdu),
    message_type: cdktf.numberToTerraform(struct!.messageType),
    pdu_notification: cdktf.stringToTerraform(struct!.pduNotification),
    reserved_messages: cdktf.stringToTerraform(struct!.reservedMessages),
    update_pdp: cdktf.stringToTerraform(struct!.updatePdp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateGtpMessageFilteringPolicyVersionV0ToHclTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV0OutputReference | TemplateGtpMessageFilteringPolicyVersionV0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_aa_pdp: {
      value: cdktf.stringToHclTerraform(struct!.createAaPdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_pdp: {
      value: cdktf.stringToHclTerraform(struct!.createPdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_aa_pdp: {
      value: cdktf.stringToHclTerraform(struct!.deleteAaPdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_pdp: {
      value: cdktf.stringToHclTerraform(struct!.deletePdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_disable_action: {
      value: cdktf.stringToHclTerraform(struct!.enableDisableAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_pdu: {
      value: cdktf.stringToHclTerraform(struct!.gtpPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.numberToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdu_notification: {
      value: cdktf.stringToHclTerraform(struct!.pduNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_messages: {
      value: cdktf.stringToHclTerraform(struct!.reservedMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_pdp: {
      value: cdktf.stringToHclTerraform(struct!.updatePdp),
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

export class TemplateGtpMessageFilteringPolicyVersionV0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateGtpMessageFilteringPolicyVersionV0 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAaPdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAaPdp = this._createAaPdp;
    }
    if (this._createPdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdp = this._createPdp;
    }
    if (this._deleteAaPdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAaPdp = this._deleteAaPdp;
    }
    if (this._deletePdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdp = this._deletePdp;
    }
    if (this._enableDisableAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDisableAction = this._enableDisableAction;
    }
    if (this._gtpPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPdu = this._gtpPdu;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._pduNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotification = this._pduNotification;
    }
    if (this._reservedMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMessages = this._reservedMessages;
    }
    if (this._updatePdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePdp = this._updatePdp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpMessageFilteringPolicyVersionV0 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createAaPdp = undefined;
      this._createPdp = undefined;
      this._deleteAaPdp = undefined;
      this._deletePdp = undefined;
      this._enableDisableAction = undefined;
      this._gtpPdu = undefined;
      this._messageType = undefined;
      this._pduNotification = undefined;
      this._reservedMessages = undefined;
      this._updatePdp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createAaPdp = value.createAaPdp;
      this._createPdp = value.createPdp;
      this._deleteAaPdp = value.deleteAaPdp;
      this._deletePdp = value.deletePdp;
      this._enableDisableAction = value.enableDisableAction;
      this._gtpPdu = value.gtpPdu;
      this._messageType = value.messageType;
      this._pduNotification = value.pduNotification;
      this._reservedMessages = value.reservedMessages;
      this._updatePdp = value.updatePdp;
      this._uuid = value.uuid;
    }
  }

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

  // enable_disable_action - computed: false, optional: true, required: false
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  public resetEnableDisableAction() {
    this._enableDisableAction = undefined;
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
}
export interface TemplateGtpMessageFilteringPolicyVersionV1 {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_mbms TemplateGtpMessageFilteringPolicy#create_mbms}
  */
  readonly createMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_pdp TemplateGtpMessageFilteringPolicy#create_pdp}
  */
  readonly createPdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_mbms TemplateGtpMessageFilteringPolicy#delete_mbms}
  */
  readonly deleteMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_pdp TemplateGtpMessageFilteringPolicy#delete_pdp}
  */
  readonly deletePdp?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#enable_disable_action TemplateGtpMessageFilteringPolicy#enable_disable_action}
  */
  readonly enableDisableAction?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#gtp_pdu TemplateGtpMessageFilteringPolicy#gtp_pdu}
  */
  readonly gtpPdu?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#initiate_pdp TemplateGtpMessageFilteringPolicy#initiate_pdp}
  */
  readonly initiatePdp?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#mbms_deregistration TemplateGtpMessageFilteringPolicy#mbms_deregistration}
  */
  readonly mbmsDeregistration?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#mbms_notification TemplateGtpMessageFilteringPolicy#mbms_notification}
  */
  readonly mbmsNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#mbms_registration TemplateGtpMessageFilteringPolicy#mbms_registration}
  */
  readonly mbmsRegistration?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#mbms_session TemplateGtpMessageFilteringPolicy#mbms_session}
  */
  readonly mbmsSession?: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#message_type TemplateGtpMessageFilteringPolicy#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#ms_info_change TemplateGtpMessageFilteringPolicy#ms_info_change}
  */
  readonly msInfoChange?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#pdu_notification TemplateGtpMessageFilteringPolicy#pdu_notification}
  */
  readonly pduNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#reserved_messages TemplateGtpMessageFilteringPolicy#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#update_mbms TemplateGtpMessageFilteringPolicy#update_mbms}
  */
  readonly updateMbms?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#update_pdp TemplateGtpMessageFilteringPolicy#update_pdp}
  */
  readonly updatePdp?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#uuid TemplateGtpMessageFilteringPolicy#uuid}
  */
  readonly uuid?: string;
}

export function templateGtpMessageFilteringPolicyVersionV1ToTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV1OutputReference | TemplateGtpMessageFilteringPolicyVersionV1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_mbms: cdktf.stringToTerraform(struct!.createMbms),
    create_pdp: cdktf.stringToTerraform(struct!.createPdp),
    delete_mbms: cdktf.stringToTerraform(struct!.deleteMbms),
    delete_pdp: cdktf.stringToTerraform(struct!.deletePdp),
    enable_disable_action: cdktf.stringToTerraform(struct!.enableDisableAction),
    gtp_pdu: cdktf.stringToTerraform(struct!.gtpPdu),
    initiate_pdp: cdktf.stringToTerraform(struct!.initiatePdp),
    mbms_deregistration: cdktf.stringToTerraform(struct!.mbmsDeregistration),
    mbms_notification: cdktf.stringToTerraform(struct!.mbmsNotification),
    mbms_registration: cdktf.stringToTerraform(struct!.mbmsRegistration),
    mbms_session: cdktf.stringToTerraform(struct!.mbmsSession),
    message_type: cdktf.numberToTerraform(struct!.messageType),
    ms_info_change: cdktf.stringToTerraform(struct!.msInfoChange),
    pdu_notification: cdktf.stringToTerraform(struct!.pduNotification),
    reserved_messages: cdktf.stringToTerraform(struct!.reservedMessages),
    update_mbms: cdktf.stringToTerraform(struct!.updateMbms),
    update_pdp: cdktf.stringToTerraform(struct!.updatePdp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateGtpMessageFilteringPolicyVersionV1ToHclTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV1OutputReference | TemplateGtpMessageFilteringPolicyVersionV1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_mbms: {
      value: cdktf.stringToHclTerraform(struct!.createMbms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_pdp: {
      value: cdktf.stringToHclTerraform(struct!.createPdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_mbms: {
      value: cdktf.stringToHclTerraform(struct!.deleteMbms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_pdp: {
      value: cdktf.stringToHclTerraform(struct!.deletePdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_disable_action: {
      value: cdktf.stringToHclTerraform(struct!.enableDisableAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_pdu: {
      value: cdktf.stringToHclTerraform(struct!.gtpPdu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiate_pdp: {
      value: cdktf.stringToHclTerraform(struct!.initiatePdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mbms_deregistration: {
      value: cdktf.stringToHclTerraform(struct!.mbmsDeregistration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mbms_notification: {
      value: cdktf.stringToHclTerraform(struct!.mbmsNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mbms_registration: {
      value: cdktf.stringToHclTerraform(struct!.mbmsRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mbms_session: {
      value: cdktf.stringToHclTerraform(struct!.mbmsSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.numberToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ms_info_change: {
      value: cdktf.stringToHclTerraform(struct!.msInfoChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdu_notification: {
      value: cdktf.stringToHclTerraform(struct!.pduNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_messages: {
      value: cdktf.stringToHclTerraform(struct!.reservedMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_mbms: {
      value: cdktf.stringToHclTerraform(struct!.updateMbms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_pdp: {
      value: cdktf.stringToHclTerraform(struct!.updatePdp),
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

export class TemplateGtpMessageFilteringPolicyVersionV1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateGtpMessageFilteringPolicyVersionV1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMbms !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMbms = this._createMbms;
    }
    if (this._createPdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPdp = this._createPdp;
    }
    if (this._deleteMbms !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMbms = this._deleteMbms;
    }
    if (this._deletePdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdp = this._deletePdp;
    }
    if (this._enableDisableAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDisableAction = this._enableDisableAction;
    }
    if (this._gtpPdu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPdu = this._gtpPdu;
    }
    if (this._initiatePdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatePdp = this._initiatePdp;
    }
    if (this._mbmsDeregistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsDeregistration = this._mbmsDeregistration;
    }
    if (this._mbmsNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsNotification = this._mbmsNotification;
    }
    if (this._mbmsRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsRegistration = this._mbmsRegistration;
    }
    if (this._mbmsSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbmsSession = this._mbmsSession;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._msInfoChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.msInfoChange = this._msInfoChange;
    }
    if (this._pduNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.pduNotification = this._pduNotification;
    }
    if (this._reservedMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMessages = this._reservedMessages;
    }
    if (this._updateMbms !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMbms = this._updateMbms;
    }
    if (this._updatePdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePdp = this._updatePdp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpMessageFilteringPolicyVersionV1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createMbms = undefined;
      this._createPdp = undefined;
      this._deleteMbms = undefined;
      this._deletePdp = undefined;
      this._enableDisableAction = undefined;
      this._gtpPdu = undefined;
      this._initiatePdp = undefined;
      this._mbmsDeregistration = undefined;
      this._mbmsNotification = undefined;
      this._mbmsRegistration = undefined;
      this._mbmsSession = undefined;
      this._messageType = undefined;
      this._msInfoChange = undefined;
      this._pduNotification = undefined;
      this._reservedMessages = undefined;
      this._updateMbms = undefined;
      this._updatePdp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createMbms = value.createMbms;
      this._createPdp = value.createPdp;
      this._deleteMbms = value.deleteMbms;
      this._deletePdp = value.deletePdp;
      this._enableDisableAction = value.enableDisableAction;
      this._gtpPdu = value.gtpPdu;
      this._initiatePdp = value.initiatePdp;
      this._mbmsDeregistration = value.mbmsDeregistration;
      this._mbmsNotification = value.mbmsNotification;
      this._mbmsRegistration = value.mbmsRegistration;
      this._mbmsSession = value.mbmsSession;
      this._messageType = value.messageType;
      this._msInfoChange = value.msInfoChange;
      this._pduNotification = value.pduNotification;
      this._reservedMessages = value.reservedMessages;
      this._updateMbms = value.updateMbms;
      this._updatePdp = value.updatePdp;
      this._uuid = value.uuid;
    }
  }

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

  // enable_disable_action - computed: false, optional: true, required: false
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  public resetEnableDisableAction() {
    this._enableDisableAction = undefined;
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
}
export interface TemplateGtpMessageFilteringPolicyVersionV2 {
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#bearer_resource TemplateGtpMessageFilteringPolicy#bearer_resource}
  */
  readonly bearerResource?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#change_notification TemplateGtpMessageFilteringPolicy#change_notification}
  */
  readonly changeNotification?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_bearer TemplateGtpMessageFilteringPolicy#create_bearer}
  */
  readonly createBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#create_session TemplateGtpMessageFilteringPolicy#create_session}
  */
  readonly createSession?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_bearer TemplateGtpMessageFilteringPolicy#delete_bearer}
  */
  readonly deleteBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_command TemplateGtpMessageFilteringPolicy#delete_command}
  */
  readonly deleteCommand?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_pdn TemplateGtpMessageFilteringPolicy#delete_pdn}
  */
  readonly deletePdn?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#delete_session TemplateGtpMessageFilteringPolicy#delete_session}
  */
  readonly deleteSession?: string;
  /**
  * 'enable': Enable Message Filtering on version; 'disable': Disable Message Filtering on version;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#enable_disable_action TemplateGtpMessageFilteringPolicy#enable_disable_action}
  */
  readonly enableDisableAction?: string;
  /**
  * Specify the Message Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#message_type TemplateGtpMessageFilteringPolicy#message_type}
  */
  readonly messageType?: number;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#modify_bearer TemplateGtpMessageFilteringPolicy#modify_bearer}
  */
  readonly modifyBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#modify_command TemplateGtpMessageFilteringPolicy#modify_command}
  */
  readonly modifyCommand?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#pgw_downlink_trigger TemplateGtpMessageFilteringPolicy#pgw_downlink_trigger}
  */
  readonly pgwDownlinkTrigger?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#remote_ue_report TemplateGtpMessageFilteringPolicy#remote_ue_report}
  */
  readonly remoteUeReport?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#reserved_messages TemplateGtpMessageFilteringPolicy#reserved_messages}
  */
  readonly reservedMessages?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#resume TemplateGtpMessageFilteringPolicy#resume}
  */
  readonly resume?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#suspend TemplateGtpMessageFilteringPolicy#suspend}
  */
  readonly suspend?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#trace_session TemplateGtpMessageFilteringPolicy#trace_session}
  */
  readonly traceSession?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#update_bearer TemplateGtpMessageFilteringPolicy#update_bearer}
  */
  readonly updateBearer?: string;
  /**
  * 'enable': Enable the Message Type; 'disable': Disable the Message Type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#update_pdn TemplateGtpMessageFilteringPolicy#update_pdn}
  */
  readonly updatePdn?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#uuid TemplateGtpMessageFilteringPolicy#uuid}
  */
  readonly uuid?: string;
}

export function templateGtpMessageFilteringPolicyVersionV2ToTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV2OutputReference | TemplateGtpMessageFilteringPolicyVersionV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_resource: cdktf.stringToTerraform(struct!.bearerResource),
    change_notification: cdktf.stringToTerraform(struct!.changeNotification),
    create_bearer: cdktf.stringToTerraform(struct!.createBearer),
    create_session: cdktf.stringToTerraform(struct!.createSession),
    delete_bearer: cdktf.stringToTerraform(struct!.deleteBearer),
    delete_command: cdktf.stringToTerraform(struct!.deleteCommand),
    delete_pdn: cdktf.stringToTerraform(struct!.deletePdn),
    delete_session: cdktf.stringToTerraform(struct!.deleteSession),
    enable_disable_action: cdktf.stringToTerraform(struct!.enableDisableAction),
    message_type: cdktf.numberToTerraform(struct!.messageType),
    modify_bearer: cdktf.stringToTerraform(struct!.modifyBearer),
    modify_command: cdktf.stringToTerraform(struct!.modifyCommand),
    pgw_downlink_trigger: cdktf.stringToTerraform(struct!.pgwDownlinkTrigger),
    remote_ue_report: cdktf.stringToTerraform(struct!.remoteUeReport),
    reserved_messages: cdktf.stringToTerraform(struct!.reservedMessages),
    resume: cdktf.stringToTerraform(struct!.resume),
    suspend: cdktf.stringToTerraform(struct!.suspend),
    trace_session: cdktf.stringToTerraform(struct!.traceSession),
    update_bearer: cdktf.stringToTerraform(struct!.updateBearer),
    update_pdn: cdktf.stringToTerraform(struct!.updatePdn),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateGtpMessageFilteringPolicyVersionV2ToHclTerraform(struct?: TemplateGtpMessageFilteringPolicyVersionV2OutputReference | TemplateGtpMessageFilteringPolicyVersionV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_resource: {
      value: cdktf.stringToHclTerraform(struct!.bearerResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change_notification: {
      value: cdktf.stringToHclTerraform(struct!.changeNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_bearer: {
      value: cdktf.stringToHclTerraform(struct!.createBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_session: {
      value: cdktf.stringToHclTerraform(struct!.createSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_bearer: {
      value: cdktf.stringToHclTerraform(struct!.deleteBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_command: {
      value: cdktf.stringToHclTerraform(struct!.deleteCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_pdn: {
      value: cdktf.stringToHclTerraform(struct!.deletePdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_session: {
      value: cdktf.stringToHclTerraform(struct!.deleteSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_disable_action: {
      value: cdktf.stringToHclTerraform(struct!.enableDisableAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.numberToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    modify_bearer: {
      value: cdktf.stringToHclTerraform(struct!.modifyBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_command: {
      value: cdktf.stringToHclTerraform(struct!.modifyCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pgw_downlink_trigger: {
      value: cdktf.stringToHclTerraform(struct!.pgwDownlinkTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ue_report: {
      value: cdktf.stringToHclTerraform(struct!.remoteUeReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_messages: {
      value: cdktf.stringToHclTerraform(struct!.reservedMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resume: {
      value: cdktf.stringToHclTerraform(struct!.resume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.stringToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace_session: {
      value: cdktf.stringToHclTerraform(struct!.traceSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_bearer: {
      value: cdktf.stringToHclTerraform(struct!.updateBearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_pdn: {
      value: cdktf.stringToHclTerraform(struct!.updatePdn),
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

export class TemplateGtpMessageFilteringPolicyVersionV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateGtpMessageFilteringPolicyVersionV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerResource = this._bearerResource;
    }
    if (this._changeNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeNotification = this._changeNotification;
    }
    if (this._createBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.createBearer = this._createBearer;
    }
    if (this._createSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSession = this._createSession;
    }
    if (this._deleteBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteBearer = this._deleteBearer;
    }
    if (this._deleteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteCommand = this._deleteCommand;
    }
    if (this._deletePdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePdn = this._deletePdn;
    }
    if (this._deleteSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteSession = this._deleteSession;
    }
    if (this._enableDisableAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDisableAction = this._enableDisableAction;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._modifyBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyBearer = this._modifyBearer;
    }
    if (this._modifyCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyCommand = this._modifyCommand;
    }
    if (this._pgwDownlinkTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgwDownlinkTrigger = this._pgwDownlinkTrigger;
    }
    if (this._remoteUeReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUeReport = this._remoteUeReport;
    }
    if (this._reservedMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMessages = this._reservedMessages;
    }
    if (this._resume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._traceSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceSession = this._traceSession;
    }
    if (this._updateBearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateBearer = this._updateBearer;
    }
    if (this._updatePdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePdn = this._updatePdn;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateGtpMessageFilteringPolicyVersionV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerResource = undefined;
      this._changeNotification = undefined;
      this._createBearer = undefined;
      this._createSession = undefined;
      this._deleteBearer = undefined;
      this._deleteCommand = undefined;
      this._deletePdn = undefined;
      this._deleteSession = undefined;
      this._enableDisableAction = undefined;
      this._messageType = undefined;
      this._modifyBearer = undefined;
      this._modifyCommand = undefined;
      this._pgwDownlinkTrigger = undefined;
      this._remoteUeReport = undefined;
      this._reservedMessages = undefined;
      this._resume = undefined;
      this._suspend = undefined;
      this._traceSession = undefined;
      this._updateBearer = undefined;
      this._updatePdn = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerResource = value.bearerResource;
      this._changeNotification = value.changeNotification;
      this._createBearer = value.createBearer;
      this._createSession = value.createSession;
      this._deleteBearer = value.deleteBearer;
      this._deleteCommand = value.deleteCommand;
      this._deletePdn = value.deletePdn;
      this._deleteSession = value.deleteSession;
      this._enableDisableAction = value.enableDisableAction;
      this._messageType = value.messageType;
      this._modifyBearer = value.modifyBearer;
      this._modifyCommand = value.modifyCommand;
      this._pgwDownlinkTrigger = value.pgwDownlinkTrigger;
      this._remoteUeReport = value.remoteUeReport;
      this._reservedMessages = value.reservedMessages;
      this._resume = value.resume;
      this._suspend = value.suspend;
      this._traceSession = value.traceSession;
      this._updateBearer = value.updateBearer;
      this._updatePdn = value.updatePdn;
      this._uuid = value.uuid;
    }
  }

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

  // enable_disable_action - computed: false, optional: true, required: false
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  public resetEnableDisableAction() {
    this._enableDisableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableActionInput() {
    return this._enableDisableAction;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy thunder_template_gtp_message_filtering_policy}
*/
export class TemplateGtpMessageFilteringPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_gtp_message_filtering_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateGtpMessageFilteringPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateGtpMessageFilteringPolicy to import
  * @param importFromId The id of the existing TemplateGtpMessageFilteringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateGtpMessageFilteringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_gtp_message_filtering_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_gtp_message_filtering_policy thunder_template_gtp_message_filtering_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateGtpMessageFilteringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateGtpMessageFilteringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_gtp_message_filtering_policy',
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
    this._interfaceType = config.interfaceType;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._versionV0.internalValue = config.versionV0;
    this._versionV1.internalValue = config.versionV1;
    this._versionV2.internalValue = config.versionV2;
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

  // interface_type - computed: false, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
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

  // version_v0 - computed: false, optional: true, required: false
  private _versionV0 = new TemplateGtpMessageFilteringPolicyVersionV0OutputReference(this, "version_v0");
  public get versionV0() {
    return this._versionV0;
  }
  public putVersionV0(value: TemplateGtpMessageFilteringPolicyVersionV0) {
    this._versionV0.internalValue = value;
  }
  public resetVersionV0() {
    this._versionV0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionV0Input() {
    return this._versionV0.internalValue;
  }

  // version_v1 - computed: false, optional: true, required: false
  private _versionV1 = new TemplateGtpMessageFilteringPolicyVersionV1OutputReference(this, "version_v1");
  public get versionV1() {
    return this._versionV1;
  }
  public putVersionV1(value: TemplateGtpMessageFilteringPolicyVersionV1) {
    this._versionV1.internalValue = value;
  }
  public resetVersionV1() {
    this._versionV1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionV1Input() {
    return this._versionV1.internalValue;
  }

  // version_v2 - computed: false, optional: true, required: false
  private _versionV2 = new TemplateGtpMessageFilteringPolicyVersionV2OutputReference(this, "version_v2");
  public get versionV2() {
    return this._versionV2;
  }
  public putVersionV2(value: TemplateGtpMessageFilteringPolicyVersionV2) {
    this._versionV2.internalValue = value;
  }
  public resetVersionV2() {
    this._versionV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionV2Input() {
    return this._versionV2.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface_type: cdktf.stringToTerraform(this._interfaceType),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      version_v0: templateGtpMessageFilteringPolicyVersionV0ToTerraform(this._versionV0.internalValue),
      version_v1: templateGtpMessageFilteringPolicyVersionV1ToTerraform(this._versionV1.internalValue),
      version_v2: templateGtpMessageFilteringPolicyVersionV2ToTerraform(this._versionV2.internalValue),
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
      interface_type: {
        value: cdktf.stringToHclTerraform(this._interfaceType),
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
      version_v0: {
        value: templateGtpMessageFilteringPolicyVersionV0ToHclTerraform(this._versionV0.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpMessageFilteringPolicyVersionV0List",
      },
      version_v1: {
        value: templateGtpMessageFilteringPolicyVersionV1ToHclTerraform(this._versionV1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpMessageFilteringPolicyVersionV1List",
      },
      version_v2: {
        value: templateGtpMessageFilteringPolicyVersionV2ToHclTerraform(this._versionV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateGtpMessageFilteringPolicyVersionV2List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
