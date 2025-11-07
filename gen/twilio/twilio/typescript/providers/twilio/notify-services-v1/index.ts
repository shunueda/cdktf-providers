// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotifyServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#alexa_skill_id NotifyServicesV1#alexa_skill_id}
  */
  readonly alexaSkillId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#apn_credential_sid NotifyServicesV1#apn_credential_sid}
  */
  readonly apnCredentialSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#default_alexa_notification_protocol_version NotifyServicesV1#default_alexa_notification_protocol_version}
  */
  readonly defaultAlexaNotificationProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#default_apn_notification_protocol_version NotifyServicesV1#default_apn_notification_protocol_version}
  */
  readonly defaultApnNotificationProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#default_fcm_notification_protocol_version NotifyServicesV1#default_fcm_notification_protocol_version}
  */
  readonly defaultFcmNotificationProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#default_gcm_notification_protocol_version NotifyServicesV1#default_gcm_notification_protocol_version}
  */
  readonly defaultGcmNotificationProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#delivery_callback_enabled NotifyServicesV1#delivery_callback_enabled}
  */
  readonly deliveryCallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#delivery_callback_url NotifyServicesV1#delivery_callback_url}
  */
  readonly deliveryCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#facebook_messenger_page_id NotifyServicesV1#facebook_messenger_page_id}
  */
  readonly facebookMessengerPageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#fcm_credential_sid NotifyServicesV1#fcm_credential_sid}
  */
  readonly fcmCredentialSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#friendly_name NotifyServicesV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#gcm_credential_sid NotifyServicesV1#gcm_credential_sid}
  */
  readonly gcmCredentialSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#id NotifyServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#log_enabled NotifyServicesV1#log_enabled}
  */
  readonly logEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#messaging_service_sid NotifyServicesV1#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1 twilio_notify_services_v1}
*/
export class NotifyServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_notify_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotifyServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotifyServicesV1 to import
  * @param importFromId The id of the existing NotifyServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotifyServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_notify_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/notify_services_v1 twilio_notify_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotifyServicesV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: NotifyServicesV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_notify_services_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alexaSkillId = config.alexaSkillId;
    this._apnCredentialSid = config.apnCredentialSid;
    this._defaultAlexaNotificationProtocolVersion = config.defaultAlexaNotificationProtocolVersion;
    this._defaultApnNotificationProtocolVersion = config.defaultApnNotificationProtocolVersion;
    this._defaultFcmNotificationProtocolVersion = config.defaultFcmNotificationProtocolVersion;
    this._defaultGcmNotificationProtocolVersion = config.defaultGcmNotificationProtocolVersion;
    this._deliveryCallbackEnabled = config.deliveryCallbackEnabled;
    this._deliveryCallbackUrl = config.deliveryCallbackUrl;
    this._facebookMessengerPageId = config.facebookMessengerPageId;
    this._fcmCredentialSid = config.fcmCredentialSid;
    this._friendlyName = config.friendlyName;
    this._gcmCredentialSid = config.gcmCredentialSid;
    this._id = config.id;
    this._logEnabled = config.logEnabled;
    this._messagingServiceSid = config.messagingServiceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alexa_skill_id - computed: true, optional: true, required: false
  private _alexaSkillId?: string; 
  public get alexaSkillId() {
    return this.getStringAttribute('alexa_skill_id');
  }
  public set alexaSkillId(value: string) {
    this._alexaSkillId = value;
  }
  public resetAlexaSkillId() {
    this._alexaSkillId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alexaSkillIdInput() {
    return this._alexaSkillId;
  }

  // apn_credential_sid - computed: true, optional: true, required: false
  private _apnCredentialSid?: string; 
  public get apnCredentialSid() {
    return this.getStringAttribute('apn_credential_sid');
  }
  public set apnCredentialSid(value: string) {
    this._apnCredentialSid = value;
  }
  public resetApnCredentialSid() {
    this._apnCredentialSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnCredentialSidInput() {
    return this._apnCredentialSid;
  }

  // default_alexa_notification_protocol_version - computed: true, optional: true, required: false
  private _defaultAlexaNotificationProtocolVersion?: string; 
  public get defaultAlexaNotificationProtocolVersion() {
    return this.getStringAttribute('default_alexa_notification_protocol_version');
  }
  public set defaultAlexaNotificationProtocolVersion(value: string) {
    this._defaultAlexaNotificationProtocolVersion = value;
  }
  public resetDefaultAlexaNotificationProtocolVersion() {
    this._defaultAlexaNotificationProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAlexaNotificationProtocolVersionInput() {
    return this._defaultAlexaNotificationProtocolVersion;
  }

  // default_apn_notification_protocol_version - computed: true, optional: true, required: false
  private _defaultApnNotificationProtocolVersion?: string; 
  public get defaultApnNotificationProtocolVersion() {
    return this.getStringAttribute('default_apn_notification_protocol_version');
  }
  public set defaultApnNotificationProtocolVersion(value: string) {
    this._defaultApnNotificationProtocolVersion = value;
  }
  public resetDefaultApnNotificationProtocolVersion() {
    this._defaultApnNotificationProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApnNotificationProtocolVersionInput() {
    return this._defaultApnNotificationProtocolVersion;
  }

  // default_fcm_notification_protocol_version - computed: true, optional: true, required: false
  private _defaultFcmNotificationProtocolVersion?: string; 
  public get defaultFcmNotificationProtocolVersion() {
    return this.getStringAttribute('default_fcm_notification_protocol_version');
  }
  public set defaultFcmNotificationProtocolVersion(value: string) {
    this._defaultFcmNotificationProtocolVersion = value;
  }
  public resetDefaultFcmNotificationProtocolVersion() {
    this._defaultFcmNotificationProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFcmNotificationProtocolVersionInput() {
    return this._defaultFcmNotificationProtocolVersion;
  }

  // default_gcm_notification_protocol_version - computed: true, optional: true, required: false
  private _defaultGcmNotificationProtocolVersion?: string; 
  public get defaultGcmNotificationProtocolVersion() {
    return this.getStringAttribute('default_gcm_notification_protocol_version');
  }
  public set defaultGcmNotificationProtocolVersion(value: string) {
    this._defaultGcmNotificationProtocolVersion = value;
  }
  public resetDefaultGcmNotificationProtocolVersion() {
    this._defaultGcmNotificationProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGcmNotificationProtocolVersionInput() {
    return this._defaultGcmNotificationProtocolVersion;
  }

  // delivery_callback_enabled - computed: true, optional: true, required: false
  private _deliveryCallbackEnabled?: boolean | cdktf.IResolvable; 
  public get deliveryCallbackEnabled() {
    return this.getBooleanAttribute('delivery_callback_enabled');
  }
  public set deliveryCallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._deliveryCallbackEnabled = value;
  }
  public resetDeliveryCallbackEnabled() {
    this._deliveryCallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryCallbackEnabledInput() {
    return this._deliveryCallbackEnabled;
  }

  // delivery_callback_url - computed: true, optional: true, required: false
  private _deliveryCallbackUrl?: string; 
  public get deliveryCallbackUrl() {
    return this.getStringAttribute('delivery_callback_url');
  }
  public set deliveryCallbackUrl(value: string) {
    this._deliveryCallbackUrl = value;
  }
  public resetDeliveryCallbackUrl() {
    this._deliveryCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryCallbackUrlInput() {
    return this._deliveryCallbackUrl;
  }

  // facebook_messenger_page_id - computed: true, optional: true, required: false
  private _facebookMessengerPageId?: string; 
  public get facebookMessengerPageId() {
    return this.getStringAttribute('facebook_messenger_page_id');
  }
  public set facebookMessengerPageId(value: string) {
    this._facebookMessengerPageId = value;
  }
  public resetFacebookMessengerPageId() {
    this._facebookMessengerPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facebookMessengerPageIdInput() {
    return this._facebookMessengerPageId;
  }

  // fcm_credential_sid - computed: true, optional: true, required: false
  private _fcmCredentialSid?: string; 
  public get fcmCredentialSid() {
    return this.getStringAttribute('fcm_credential_sid');
  }
  public set fcmCredentialSid(value: string) {
    this._fcmCredentialSid = value;
  }
  public resetFcmCredentialSid() {
    this._fcmCredentialSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcmCredentialSidInput() {
    return this._fcmCredentialSid;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // gcm_credential_sid - computed: true, optional: true, required: false
  private _gcmCredentialSid?: string; 
  public get gcmCredentialSid() {
    return this.getStringAttribute('gcm_credential_sid');
  }
  public set gcmCredentialSid(value: string) {
    this._gcmCredentialSid = value;
  }
  public resetGcmCredentialSid() {
    this._gcmCredentialSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmCredentialSidInput() {
    return this._gcmCredentialSid;
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

  // log_enabled - computed: true, optional: true, required: false
  private _logEnabled?: boolean | cdktf.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktf.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // messaging_service_sid - computed: true, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alexa_skill_id: cdktf.stringToTerraform(this._alexaSkillId),
      apn_credential_sid: cdktf.stringToTerraform(this._apnCredentialSid),
      default_alexa_notification_protocol_version: cdktf.stringToTerraform(this._defaultAlexaNotificationProtocolVersion),
      default_apn_notification_protocol_version: cdktf.stringToTerraform(this._defaultApnNotificationProtocolVersion),
      default_fcm_notification_protocol_version: cdktf.stringToTerraform(this._defaultFcmNotificationProtocolVersion),
      default_gcm_notification_protocol_version: cdktf.stringToTerraform(this._defaultGcmNotificationProtocolVersion),
      delivery_callback_enabled: cdktf.booleanToTerraform(this._deliveryCallbackEnabled),
      delivery_callback_url: cdktf.stringToTerraform(this._deliveryCallbackUrl),
      facebook_messenger_page_id: cdktf.stringToTerraform(this._facebookMessengerPageId),
      fcm_credential_sid: cdktf.stringToTerraform(this._fcmCredentialSid),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      gcm_credential_sid: cdktf.stringToTerraform(this._gcmCredentialSid),
      id: cdktf.stringToTerraform(this._id),
      log_enabled: cdktf.booleanToTerraform(this._logEnabled),
      messaging_service_sid: cdktf.stringToTerraform(this._messagingServiceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alexa_skill_id: {
        value: cdktf.stringToHclTerraform(this._alexaSkillId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apn_credential_sid: {
        value: cdktf.stringToHclTerraform(this._apnCredentialSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_alexa_notification_protocol_version: {
        value: cdktf.stringToHclTerraform(this._defaultAlexaNotificationProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_apn_notification_protocol_version: {
        value: cdktf.stringToHclTerraform(this._defaultApnNotificationProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_fcm_notification_protocol_version: {
        value: cdktf.stringToHclTerraform(this._defaultFcmNotificationProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gcm_notification_protocol_version: {
        value: cdktf.stringToHclTerraform(this._defaultGcmNotificationProtocolVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_callback_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliveryCallbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_callback_url: {
        value: cdktf.stringToHclTerraform(this._deliveryCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facebook_messenger_page_id: {
        value: cdktf.stringToHclTerraform(this._facebookMessengerPageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fcm_credential_sid: {
        value: cdktf.stringToHclTerraform(this._fcmCredentialSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcm_credential_sid: {
        value: cdktf.stringToHclTerraform(this._gcmCredentialSid),
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
      log_enabled: {
        value: cdktf.booleanToHclTerraform(this._logEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      messaging_service_sid: {
        value: cdktf.stringToHclTerraform(this._messagingServiceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
