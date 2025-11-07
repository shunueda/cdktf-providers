// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMessagingServicesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#consumption_report_interval IpMessagingServicesV2#consumption_report_interval}
  */
  readonly consumptionReportInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#default_channel_creator_role_sid IpMessagingServicesV2#default_channel_creator_role_sid}
  */
  readonly defaultChannelCreatorRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#default_channel_role_sid IpMessagingServicesV2#default_channel_role_sid}
  */
  readonly defaultChannelRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#default_service_role_sid IpMessagingServicesV2#default_service_role_sid}
  */
  readonly defaultServiceRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#friendly_name IpMessagingServicesV2#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#id IpMessagingServicesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#limits_channel_members IpMessagingServicesV2#limits_channel_members}
  */
  readonly limitsChannelMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#limits_user_channels IpMessagingServicesV2#limits_user_channels}
  */
  readonly limitsUserChannels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#media_compatibility_message IpMessagingServicesV2#media_compatibility_message}
  */
  readonly mediaCompatibilityMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_added_to_channel_enabled IpMessagingServicesV2#notifications_added_to_channel_enabled}
  */
  readonly notificationsAddedToChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_added_to_channel_sound IpMessagingServicesV2#notifications_added_to_channel_sound}
  */
  readonly notificationsAddedToChannelSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_added_to_channel_template IpMessagingServicesV2#notifications_added_to_channel_template}
  */
  readonly notificationsAddedToChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_invited_to_channel_enabled IpMessagingServicesV2#notifications_invited_to_channel_enabled}
  */
  readonly notificationsInvitedToChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_invited_to_channel_sound IpMessagingServicesV2#notifications_invited_to_channel_sound}
  */
  readonly notificationsInvitedToChannelSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_invited_to_channel_template IpMessagingServicesV2#notifications_invited_to_channel_template}
  */
  readonly notificationsInvitedToChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_log_enabled IpMessagingServicesV2#notifications_log_enabled}
  */
  readonly notificationsLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_new_message_badge_count_enabled IpMessagingServicesV2#notifications_new_message_badge_count_enabled}
  */
  readonly notificationsNewMessageBadgeCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_new_message_enabled IpMessagingServicesV2#notifications_new_message_enabled}
  */
  readonly notificationsNewMessageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_new_message_sound IpMessagingServicesV2#notifications_new_message_sound}
  */
  readonly notificationsNewMessageSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_new_message_template IpMessagingServicesV2#notifications_new_message_template}
  */
  readonly notificationsNewMessageTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_removed_from_channel_enabled IpMessagingServicesV2#notifications_removed_from_channel_enabled}
  */
  readonly notificationsRemovedFromChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_removed_from_channel_sound IpMessagingServicesV2#notifications_removed_from_channel_sound}
  */
  readonly notificationsRemovedFromChannelSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#notifications_removed_from_channel_template IpMessagingServicesV2#notifications_removed_from_channel_template}
  */
  readonly notificationsRemovedFromChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#post_webhook_retry_count IpMessagingServicesV2#post_webhook_retry_count}
  */
  readonly postWebhookRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#post_webhook_url IpMessagingServicesV2#post_webhook_url}
  */
  readonly postWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#pre_webhook_retry_count IpMessagingServicesV2#pre_webhook_retry_count}
  */
  readonly preWebhookRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#pre_webhook_url IpMessagingServicesV2#pre_webhook_url}
  */
  readonly preWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#reachability_enabled IpMessagingServicesV2#reachability_enabled}
  */
  readonly reachabilityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#read_status_enabled IpMessagingServicesV2#read_status_enabled}
  */
  readonly readStatusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#typing_indicator_timeout IpMessagingServicesV2#typing_indicator_timeout}
  */
  readonly typingIndicatorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#webhook_filters IpMessagingServicesV2#webhook_filters}
  */
  readonly webhookFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#webhook_method IpMessagingServicesV2#webhook_method}
  */
  readonly webhookMethod?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2 twilio_ip_messaging_services_v2}
*/
export class IpMessagingServicesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_ip_messaging_services_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMessagingServicesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMessagingServicesV2 to import
  * @param importFromId The id of the existing IpMessagingServicesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMessagingServicesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_ip_messaging_services_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v2 twilio_ip_messaging_services_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMessagingServicesV2Config
  */
  public constructor(scope: Construct, id: string, config: IpMessagingServicesV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_ip_messaging_services_v2',
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
    this._consumptionReportInterval = config.consumptionReportInterval;
    this._defaultChannelCreatorRoleSid = config.defaultChannelCreatorRoleSid;
    this._defaultChannelRoleSid = config.defaultChannelRoleSid;
    this._defaultServiceRoleSid = config.defaultServiceRoleSid;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._limitsChannelMembers = config.limitsChannelMembers;
    this._limitsUserChannels = config.limitsUserChannels;
    this._mediaCompatibilityMessage = config.mediaCompatibilityMessage;
    this._notificationsAddedToChannelEnabled = config.notificationsAddedToChannelEnabled;
    this._notificationsAddedToChannelSound = config.notificationsAddedToChannelSound;
    this._notificationsAddedToChannelTemplate = config.notificationsAddedToChannelTemplate;
    this._notificationsInvitedToChannelEnabled = config.notificationsInvitedToChannelEnabled;
    this._notificationsInvitedToChannelSound = config.notificationsInvitedToChannelSound;
    this._notificationsInvitedToChannelTemplate = config.notificationsInvitedToChannelTemplate;
    this._notificationsLogEnabled = config.notificationsLogEnabled;
    this._notificationsNewMessageBadgeCountEnabled = config.notificationsNewMessageBadgeCountEnabled;
    this._notificationsNewMessageEnabled = config.notificationsNewMessageEnabled;
    this._notificationsNewMessageSound = config.notificationsNewMessageSound;
    this._notificationsNewMessageTemplate = config.notificationsNewMessageTemplate;
    this._notificationsRemovedFromChannelEnabled = config.notificationsRemovedFromChannelEnabled;
    this._notificationsRemovedFromChannelSound = config.notificationsRemovedFromChannelSound;
    this._notificationsRemovedFromChannelTemplate = config.notificationsRemovedFromChannelTemplate;
    this._postWebhookRetryCount = config.postWebhookRetryCount;
    this._postWebhookUrl = config.postWebhookUrl;
    this._preWebhookRetryCount = config.preWebhookRetryCount;
    this._preWebhookUrl = config.preWebhookUrl;
    this._reachabilityEnabled = config.reachabilityEnabled;
    this._readStatusEnabled = config.readStatusEnabled;
    this._typingIndicatorTimeout = config.typingIndicatorTimeout;
    this._webhookFilters = config.webhookFilters;
    this._webhookMethod = config.webhookMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumption_report_interval - computed: true, optional: true, required: false
  private _consumptionReportInterval?: number; 
  public get consumptionReportInterval() {
    return this.getNumberAttribute('consumption_report_interval');
  }
  public set consumptionReportInterval(value: number) {
    this._consumptionReportInterval = value;
  }
  public resetConsumptionReportInterval() {
    this._consumptionReportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionReportIntervalInput() {
    return this._consumptionReportInterval;
  }

  // default_channel_creator_role_sid - computed: true, optional: true, required: false
  private _defaultChannelCreatorRoleSid?: string; 
  public get defaultChannelCreatorRoleSid() {
    return this.getStringAttribute('default_channel_creator_role_sid');
  }
  public set defaultChannelCreatorRoleSid(value: string) {
    this._defaultChannelCreatorRoleSid = value;
  }
  public resetDefaultChannelCreatorRoleSid() {
    this._defaultChannelCreatorRoleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultChannelCreatorRoleSidInput() {
    return this._defaultChannelCreatorRoleSid;
  }

  // default_channel_role_sid - computed: true, optional: true, required: false
  private _defaultChannelRoleSid?: string; 
  public get defaultChannelRoleSid() {
    return this.getStringAttribute('default_channel_role_sid');
  }
  public set defaultChannelRoleSid(value: string) {
    this._defaultChannelRoleSid = value;
  }
  public resetDefaultChannelRoleSid() {
    this._defaultChannelRoleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultChannelRoleSidInput() {
    return this._defaultChannelRoleSid;
  }

  // default_service_role_sid - computed: true, optional: true, required: false
  private _defaultServiceRoleSid?: string; 
  public get defaultServiceRoleSid() {
    return this.getStringAttribute('default_service_role_sid');
  }
  public set defaultServiceRoleSid(value: string) {
    this._defaultServiceRoleSid = value;
  }
  public resetDefaultServiceRoleSid() {
    this._defaultServiceRoleSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceRoleSidInput() {
    return this._defaultServiceRoleSid;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // limits_channel_members - computed: true, optional: true, required: false
  private _limitsChannelMembers?: number; 
  public get limitsChannelMembers() {
    return this.getNumberAttribute('limits_channel_members');
  }
  public set limitsChannelMembers(value: number) {
    this._limitsChannelMembers = value;
  }
  public resetLimitsChannelMembers() {
    this._limitsChannelMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsChannelMembersInput() {
    return this._limitsChannelMembers;
  }

  // limits_user_channels - computed: true, optional: true, required: false
  private _limitsUserChannels?: number; 
  public get limitsUserChannels() {
    return this.getNumberAttribute('limits_user_channels');
  }
  public set limitsUserChannels(value: number) {
    this._limitsUserChannels = value;
  }
  public resetLimitsUserChannels() {
    this._limitsUserChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsUserChannelsInput() {
    return this._limitsUserChannels;
  }

  // media_compatibility_message - computed: true, optional: true, required: false
  private _mediaCompatibilityMessage?: string; 
  public get mediaCompatibilityMessage() {
    return this.getStringAttribute('media_compatibility_message');
  }
  public set mediaCompatibilityMessage(value: string) {
    this._mediaCompatibilityMessage = value;
  }
  public resetMediaCompatibilityMessage() {
    this._mediaCompatibilityMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaCompatibilityMessageInput() {
    return this._mediaCompatibilityMessage;
  }

  // notifications_added_to_channel_enabled - computed: true, optional: true, required: false
  private _notificationsAddedToChannelEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsAddedToChannelEnabled() {
    return this.getBooleanAttribute('notifications_added_to_channel_enabled');
  }
  public set notificationsAddedToChannelEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsAddedToChannelEnabled = value;
  }
  public resetNotificationsAddedToChannelEnabled() {
    this._notificationsAddedToChannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsAddedToChannelEnabledInput() {
    return this._notificationsAddedToChannelEnabled;
  }

  // notifications_added_to_channel_sound - computed: true, optional: true, required: false
  private _notificationsAddedToChannelSound?: string; 
  public get notificationsAddedToChannelSound() {
    return this.getStringAttribute('notifications_added_to_channel_sound');
  }
  public set notificationsAddedToChannelSound(value: string) {
    this._notificationsAddedToChannelSound = value;
  }
  public resetNotificationsAddedToChannelSound() {
    this._notificationsAddedToChannelSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsAddedToChannelSoundInput() {
    return this._notificationsAddedToChannelSound;
  }

  // notifications_added_to_channel_template - computed: true, optional: true, required: false
  private _notificationsAddedToChannelTemplate?: string; 
  public get notificationsAddedToChannelTemplate() {
    return this.getStringAttribute('notifications_added_to_channel_template');
  }
  public set notificationsAddedToChannelTemplate(value: string) {
    this._notificationsAddedToChannelTemplate = value;
  }
  public resetNotificationsAddedToChannelTemplate() {
    this._notificationsAddedToChannelTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsAddedToChannelTemplateInput() {
    return this._notificationsAddedToChannelTemplate;
  }

  // notifications_invited_to_channel_enabled - computed: true, optional: true, required: false
  private _notificationsInvitedToChannelEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsInvitedToChannelEnabled() {
    return this.getBooleanAttribute('notifications_invited_to_channel_enabled');
  }
  public set notificationsInvitedToChannelEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsInvitedToChannelEnabled = value;
  }
  public resetNotificationsInvitedToChannelEnabled() {
    this._notificationsInvitedToChannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInvitedToChannelEnabledInput() {
    return this._notificationsInvitedToChannelEnabled;
  }

  // notifications_invited_to_channel_sound - computed: true, optional: true, required: false
  private _notificationsInvitedToChannelSound?: string; 
  public get notificationsInvitedToChannelSound() {
    return this.getStringAttribute('notifications_invited_to_channel_sound');
  }
  public set notificationsInvitedToChannelSound(value: string) {
    this._notificationsInvitedToChannelSound = value;
  }
  public resetNotificationsInvitedToChannelSound() {
    this._notificationsInvitedToChannelSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInvitedToChannelSoundInput() {
    return this._notificationsInvitedToChannelSound;
  }

  // notifications_invited_to_channel_template - computed: true, optional: true, required: false
  private _notificationsInvitedToChannelTemplate?: string; 
  public get notificationsInvitedToChannelTemplate() {
    return this.getStringAttribute('notifications_invited_to_channel_template');
  }
  public set notificationsInvitedToChannelTemplate(value: string) {
    this._notificationsInvitedToChannelTemplate = value;
  }
  public resetNotificationsInvitedToChannelTemplate() {
    this._notificationsInvitedToChannelTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInvitedToChannelTemplateInput() {
    return this._notificationsInvitedToChannelTemplate;
  }

  // notifications_log_enabled - computed: true, optional: true, required: false
  private _notificationsLogEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsLogEnabled() {
    return this.getBooleanAttribute('notifications_log_enabled');
  }
  public set notificationsLogEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsLogEnabled = value;
  }
  public resetNotificationsLogEnabled() {
    this._notificationsLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsLogEnabledInput() {
    return this._notificationsLogEnabled;
  }

  // notifications_new_message_badge_count_enabled - computed: true, optional: true, required: false
  private _notificationsNewMessageBadgeCountEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsNewMessageBadgeCountEnabled() {
    return this.getBooleanAttribute('notifications_new_message_badge_count_enabled');
  }
  public set notificationsNewMessageBadgeCountEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsNewMessageBadgeCountEnabled = value;
  }
  public resetNotificationsNewMessageBadgeCountEnabled() {
    this._notificationsNewMessageBadgeCountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsNewMessageBadgeCountEnabledInput() {
    return this._notificationsNewMessageBadgeCountEnabled;
  }

  // notifications_new_message_enabled - computed: true, optional: true, required: false
  private _notificationsNewMessageEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsNewMessageEnabled() {
    return this.getBooleanAttribute('notifications_new_message_enabled');
  }
  public set notificationsNewMessageEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsNewMessageEnabled = value;
  }
  public resetNotificationsNewMessageEnabled() {
    this._notificationsNewMessageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsNewMessageEnabledInput() {
    return this._notificationsNewMessageEnabled;
  }

  // notifications_new_message_sound - computed: true, optional: true, required: false
  private _notificationsNewMessageSound?: string; 
  public get notificationsNewMessageSound() {
    return this.getStringAttribute('notifications_new_message_sound');
  }
  public set notificationsNewMessageSound(value: string) {
    this._notificationsNewMessageSound = value;
  }
  public resetNotificationsNewMessageSound() {
    this._notificationsNewMessageSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsNewMessageSoundInput() {
    return this._notificationsNewMessageSound;
  }

  // notifications_new_message_template - computed: true, optional: true, required: false
  private _notificationsNewMessageTemplate?: string; 
  public get notificationsNewMessageTemplate() {
    return this.getStringAttribute('notifications_new_message_template');
  }
  public set notificationsNewMessageTemplate(value: string) {
    this._notificationsNewMessageTemplate = value;
  }
  public resetNotificationsNewMessageTemplate() {
    this._notificationsNewMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsNewMessageTemplateInput() {
    return this._notificationsNewMessageTemplate;
  }

  // notifications_removed_from_channel_enabled - computed: true, optional: true, required: false
  private _notificationsRemovedFromChannelEnabled?: boolean | cdktf.IResolvable; 
  public get notificationsRemovedFromChannelEnabled() {
    return this.getBooleanAttribute('notifications_removed_from_channel_enabled');
  }
  public set notificationsRemovedFromChannelEnabled(value: boolean | cdktf.IResolvable) {
    this._notificationsRemovedFromChannelEnabled = value;
  }
  public resetNotificationsRemovedFromChannelEnabled() {
    this._notificationsRemovedFromChannelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsRemovedFromChannelEnabledInput() {
    return this._notificationsRemovedFromChannelEnabled;
  }

  // notifications_removed_from_channel_sound - computed: true, optional: true, required: false
  private _notificationsRemovedFromChannelSound?: string; 
  public get notificationsRemovedFromChannelSound() {
    return this.getStringAttribute('notifications_removed_from_channel_sound');
  }
  public set notificationsRemovedFromChannelSound(value: string) {
    this._notificationsRemovedFromChannelSound = value;
  }
  public resetNotificationsRemovedFromChannelSound() {
    this._notificationsRemovedFromChannelSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsRemovedFromChannelSoundInput() {
    return this._notificationsRemovedFromChannelSound;
  }

  // notifications_removed_from_channel_template - computed: true, optional: true, required: false
  private _notificationsRemovedFromChannelTemplate?: string; 
  public get notificationsRemovedFromChannelTemplate() {
    return this.getStringAttribute('notifications_removed_from_channel_template');
  }
  public set notificationsRemovedFromChannelTemplate(value: string) {
    this._notificationsRemovedFromChannelTemplate = value;
  }
  public resetNotificationsRemovedFromChannelTemplate() {
    this._notificationsRemovedFromChannelTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsRemovedFromChannelTemplateInput() {
    return this._notificationsRemovedFromChannelTemplate;
  }

  // post_webhook_retry_count - computed: true, optional: true, required: false
  private _postWebhookRetryCount?: number; 
  public get postWebhookRetryCount() {
    return this.getNumberAttribute('post_webhook_retry_count');
  }
  public set postWebhookRetryCount(value: number) {
    this._postWebhookRetryCount = value;
  }
  public resetPostWebhookRetryCount() {
    this._postWebhookRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postWebhookRetryCountInput() {
    return this._postWebhookRetryCount;
  }

  // post_webhook_url - computed: true, optional: true, required: false
  private _postWebhookUrl?: string; 
  public get postWebhookUrl() {
    return this.getStringAttribute('post_webhook_url');
  }
  public set postWebhookUrl(value: string) {
    this._postWebhookUrl = value;
  }
  public resetPostWebhookUrl() {
    this._postWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postWebhookUrlInput() {
    return this._postWebhookUrl;
  }

  // pre_webhook_retry_count - computed: true, optional: true, required: false
  private _preWebhookRetryCount?: number; 
  public get preWebhookRetryCount() {
    return this.getNumberAttribute('pre_webhook_retry_count');
  }
  public set preWebhookRetryCount(value: number) {
    this._preWebhookRetryCount = value;
  }
  public resetPreWebhookRetryCount() {
    this._preWebhookRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWebhookRetryCountInput() {
    return this._preWebhookRetryCount;
  }

  // pre_webhook_url - computed: true, optional: true, required: false
  private _preWebhookUrl?: string; 
  public get preWebhookUrl() {
    return this.getStringAttribute('pre_webhook_url');
  }
  public set preWebhookUrl(value: string) {
    this._preWebhookUrl = value;
  }
  public resetPreWebhookUrl() {
    this._preWebhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preWebhookUrlInput() {
    return this._preWebhookUrl;
  }

  // reachability_enabled - computed: true, optional: true, required: false
  private _reachabilityEnabled?: boolean | cdktf.IResolvable; 
  public get reachabilityEnabled() {
    return this.getBooleanAttribute('reachability_enabled');
  }
  public set reachabilityEnabled(value: boolean | cdktf.IResolvable) {
    this._reachabilityEnabled = value;
  }
  public resetReachabilityEnabled() {
    this._reachabilityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityEnabledInput() {
    return this._reachabilityEnabled;
  }

  // read_status_enabled - computed: true, optional: true, required: false
  private _readStatusEnabled?: boolean | cdktf.IResolvable; 
  public get readStatusEnabled() {
    return this.getBooleanAttribute('read_status_enabled');
  }
  public set readStatusEnabled(value: boolean | cdktf.IResolvable) {
    this._readStatusEnabled = value;
  }
  public resetReadStatusEnabled() {
    this._readStatusEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readStatusEnabledInput() {
    return this._readStatusEnabled;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // typing_indicator_timeout - computed: true, optional: true, required: false
  private _typingIndicatorTimeout?: number; 
  public get typingIndicatorTimeout() {
    return this.getNumberAttribute('typing_indicator_timeout');
  }
  public set typingIndicatorTimeout(value: number) {
    this._typingIndicatorTimeout = value;
  }
  public resetTypingIndicatorTimeout() {
    this._typingIndicatorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typingIndicatorTimeoutInput() {
    return this._typingIndicatorTimeout;
  }

  // webhook_filters - computed: true, optional: true, required: false
  private _webhookFilters?: string[]; 
  public get webhookFilters() {
    return this.getListAttribute('webhook_filters');
  }
  public set webhookFilters(value: string[]) {
    this._webhookFilters = value;
  }
  public resetWebhookFilters() {
    this._webhookFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookFiltersInput() {
    return this._webhookFilters;
  }

  // webhook_method - computed: true, optional: true, required: false
  private _webhookMethod?: string; 
  public get webhookMethod() {
    return this.getStringAttribute('webhook_method');
  }
  public set webhookMethod(value: string) {
    this._webhookMethod = value;
  }
  public resetWebhookMethod() {
    this._webhookMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookMethodInput() {
    return this._webhookMethod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumption_report_interval: cdktf.numberToTerraform(this._consumptionReportInterval),
      default_channel_creator_role_sid: cdktf.stringToTerraform(this._defaultChannelCreatorRoleSid),
      default_channel_role_sid: cdktf.stringToTerraform(this._defaultChannelRoleSid),
      default_service_role_sid: cdktf.stringToTerraform(this._defaultServiceRoleSid),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      limits_channel_members: cdktf.numberToTerraform(this._limitsChannelMembers),
      limits_user_channels: cdktf.numberToTerraform(this._limitsUserChannels),
      media_compatibility_message: cdktf.stringToTerraform(this._mediaCompatibilityMessage),
      notifications_added_to_channel_enabled: cdktf.booleanToTerraform(this._notificationsAddedToChannelEnabled),
      notifications_added_to_channel_sound: cdktf.stringToTerraform(this._notificationsAddedToChannelSound),
      notifications_added_to_channel_template: cdktf.stringToTerraform(this._notificationsAddedToChannelTemplate),
      notifications_invited_to_channel_enabled: cdktf.booleanToTerraform(this._notificationsInvitedToChannelEnabled),
      notifications_invited_to_channel_sound: cdktf.stringToTerraform(this._notificationsInvitedToChannelSound),
      notifications_invited_to_channel_template: cdktf.stringToTerraform(this._notificationsInvitedToChannelTemplate),
      notifications_log_enabled: cdktf.booleanToTerraform(this._notificationsLogEnabled),
      notifications_new_message_badge_count_enabled: cdktf.booleanToTerraform(this._notificationsNewMessageBadgeCountEnabled),
      notifications_new_message_enabled: cdktf.booleanToTerraform(this._notificationsNewMessageEnabled),
      notifications_new_message_sound: cdktf.stringToTerraform(this._notificationsNewMessageSound),
      notifications_new_message_template: cdktf.stringToTerraform(this._notificationsNewMessageTemplate),
      notifications_removed_from_channel_enabled: cdktf.booleanToTerraform(this._notificationsRemovedFromChannelEnabled),
      notifications_removed_from_channel_sound: cdktf.stringToTerraform(this._notificationsRemovedFromChannelSound),
      notifications_removed_from_channel_template: cdktf.stringToTerraform(this._notificationsRemovedFromChannelTemplate),
      post_webhook_retry_count: cdktf.numberToTerraform(this._postWebhookRetryCount),
      post_webhook_url: cdktf.stringToTerraform(this._postWebhookUrl),
      pre_webhook_retry_count: cdktf.numberToTerraform(this._preWebhookRetryCount),
      pre_webhook_url: cdktf.stringToTerraform(this._preWebhookUrl),
      reachability_enabled: cdktf.booleanToTerraform(this._reachabilityEnabled),
      read_status_enabled: cdktf.booleanToTerraform(this._readStatusEnabled),
      typing_indicator_timeout: cdktf.numberToTerraform(this._typingIndicatorTimeout),
      webhook_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webhookFilters),
      webhook_method: cdktf.stringToTerraform(this._webhookMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumption_report_interval: {
        value: cdktf.numberToHclTerraform(this._consumptionReportInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_channel_creator_role_sid: {
        value: cdktf.stringToHclTerraform(this._defaultChannelCreatorRoleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_channel_role_sid: {
        value: cdktf.stringToHclTerraform(this._defaultChannelRoleSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_service_role_sid: {
        value: cdktf.stringToHclTerraform(this._defaultServiceRoleSid),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limits_channel_members: {
        value: cdktf.numberToHclTerraform(this._limitsChannelMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limits_user_channels: {
        value: cdktf.numberToHclTerraform(this._limitsUserChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      media_compatibility_message: {
        value: cdktf.stringToHclTerraform(this._mediaCompatibilityMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_added_to_channel_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsAddedToChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_added_to_channel_sound: {
        value: cdktf.stringToHclTerraform(this._notificationsAddedToChannelSound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_added_to_channel_template: {
        value: cdktf.stringToHclTerraform(this._notificationsAddedToChannelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_invited_to_channel_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsInvitedToChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_invited_to_channel_sound: {
        value: cdktf.stringToHclTerraform(this._notificationsInvitedToChannelSound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_invited_to_channel_template: {
        value: cdktf.stringToHclTerraform(this._notificationsInvitedToChannelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_new_message_badge_count_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsNewMessageBadgeCountEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_new_message_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsNewMessageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_new_message_sound: {
        value: cdktf.stringToHclTerraform(this._notificationsNewMessageSound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_new_message_template: {
        value: cdktf.stringToHclTerraform(this._notificationsNewMessageTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_removed_from_channel_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsRemovedFromChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notifications_removed_from_channel_sound: {
        value: cdktf.stringToHclTerraform(this._notificationsRemovedFromChannelSound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_removed_from_channel_template: {
        value: cdktf.stringToHclTerraform(this._notificationsRemovedFromChannelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_webhook_retry_count: {
        value: cdktf.numberToHclTerraform(this._postWebhookRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_webhook_url: {
        value: cdktf.stringToHclTerraform(this._postWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_webhook_retry_count: {
        value: cdktf.numberToHclTerraform(this._preWebhookRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_webhook_url: {
        value: cdktf.stringToHclTerraform(this._preWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachability_enabled: {
        value: cdktf.booleanToHclTerraform(this._reachabilityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_status_enabled: {
        value: cdktf.booleanToHclTerraform(this._readStatusEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      typing_indicator_timeout: {
        value: cdktf.numberToHclTerraform(this._typingIndicatorTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webhook_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webhookFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      webhook_method: {
        value: cdktf.stringToHclTerraform(this._webhookMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
