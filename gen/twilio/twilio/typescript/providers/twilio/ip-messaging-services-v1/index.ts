// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMessagingServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#consumption_report_interval IpMessagingServicesV1#consumption_report_interval}
  */
  readonly consumptionReportInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#default_channel_creator_role_sid IpMessagingServicesV1#default_channel_creator_role_sid}
  */
  readonly defaultChannelCreatorRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#default_channel_role_sid IpMessagingServicesV1#default_channel_role_sid}
  */
  readonly defaultChannelRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#default_service_role_sid IpMessagingServicesV1#default_service_role_sid}
  */
  readonly defaultServiceRoleSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#friendly_name IpMessagingServicesV1#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#id IpMessagingServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#limits_channel_members IpMessagingServicesV1#limits_channel_members}
  */
  readonly limitsChannelMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#limits_user_channels IpMessagingServicesV1#limits_user_channels}
  */
  readonly limitsUserChannels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_added_to_channel_enabled IpMessagingServicesV1#notifications_added_to_channel_enabled}
  */
  readonly notificationsAddedToChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_added_to_channel_template IpMessagingServicesV1#notifications_added_to_channel_template}
  */
  readonly notificationsAddedToChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_invited_to_channel_enabled IpMessagingServicesV1#notifications_invited_to_channel_enabled}
  */
  readonly notificationsInvitedToChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_invited_to_channel_template IpMessagingServicesV1#notifications_invited_to_channel_template}
  */
  readonly notificationsInvitedToChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_new_message_enabled IpMessagingServicesV1#notifications_new_message_enabled}
  */
  readonly notificationsNewMessageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_new_message_template IpMessagingServicesV1#notifications_new_message_template}
  */
  readonly notificationsNewMessageTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_removed_from_channel_enabled IpMessagingServicesV1#notifications_removed_from_channel_enabled}
  */
  readonly notificationsRemovedFromChannelEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#notifications_removed_from_channel_template IpMessagingServicesV1#notifications_removed_from_channel_template}
  */
  readonly notificationsRemovedFromChannelTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#post_webhook_url IpMessagingServicesV1#post_webhook_url}
  */
  readonly postWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#pre_webhook_url IpMessagingServicesV1#pre_webhook_url}
  */
  readonly preWebhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#reachability_enabled IpMessagingServicesV1#reachability_enabled}
  */
  readonly reachabilityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#read_status_enabled IpMessagingServicesV1#read_status_enabled}
  */
  readonly readStatusEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#typing_indicator_timeout IpMessagingServicesV1#typing_indicator_timeout}
  */
  readonly typingIndicatorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhook_filters IpMessagingServicesV1#webhook_filters}
  */
  readonly webhookFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhook_method IpMessagingServicesV1#webhook_method}
  */
  readonly webhookMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_add_method IpMessagingServicesV1#webhooks_on_channel_add_method}
  */
  readonly webhooksOnChannelAddMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_add_url IpMessagingServicesV1#webhooks_on_channel_add_url}
  */
  readonly webhooksOnChannelAddUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_added_method IpMessagingServicesV1#webhooks_on_channel_added_method}
  */
  readonly webhooksOnChannelAddedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_added_url IpMessagingServicesV1#webhooks_on_channel_added_url}
  */
  readonly webhooksOnChannelAddedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_destroy_method IpMessagingServicesV1#webhooks_on_channel_destroy_method}
  */
  readonly webhooksOnChannelDestroyMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_destroy_url IpMessagingServicesV1#webhooks_on_channel_destroy_url}
  */
  readonly webhooksOnChannelDestroyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_destroyed_method IpMessagingServicesV1#webhooks_on_channel_destroyed_method}
  */
  readonly webhooksOnChannelDestroyedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_destroyed_url IpMessagingServicesV1#webhooks_on_channel_destroyed_url}
  */
  readonly webhooksOnChannelDestroyedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_update_method IpMessagingServicesV1#webhooks_on_channel_update_method}
  */
  readonly webhooksOnChannelUpdateMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_update_url IpMessagingServicesV1#webhooks_on_channel_update_url}
  */
  readonly webhooksOnChannelUpdateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_updated_method IpMessagingServicesV1#webhooks_on_channel_updated_method}
  */
  readonly webhooksOnChannelUpdatedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_channel_updated_url IpMessagingServicesV1#webhooks_on_channel_updated_url}
  */
  readonly webhooksOnChannelUpdatedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_add_method IpMessagingServicesV1#webhooks_on_member_add_method}
  */
  readonly webhooksOnMemberAddMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_add_url IpMessagingServicesV1#webhooks_on_member_add_url}
  */
  readonly webhooksOnMemberAddUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_added_method IpMessagingServicesV1#webhooks_on_member_added_method}
  */
  readonly webhooksOnMemberAddedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_added_url IpMessagingServicesV1#webhooks_on_member_added_url}
  */
  readonly webhooksOnMemberAddedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_remove_method IpMessagingServicesV1#webhooks_on_member_remove_method}
  */
  readonly webhooksOnMemberRemoveMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_remove_url IpMessagingServicesV1#webhooks_on_member_remove_url}
  */
  readonly webhooksOnMemberRemoveUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_removed_method IpMessagingServicesV1#webhooks_on_member_removed_method}
  */
  readonly webhooksOnMemberRemovedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_member_removed_url IpMessagingServicesV1#webhooks_on_member_removed_url}
  */
  readonly webhooksOnMemberRemovedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_remove_method IpMessagingServicesV1#webhooks_on_message_remove_method}
  */
  readonly webhooksOnMessageRemoveMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_remove_url IpMessagingServicesV1#webhooks_on_message_remove_url}
  */
  readonly webhooksOnMessageRemoveUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_removed_method IpMessagingServicesV1#webhooks_on_message_removed_method}
  */
  readonly webhooksOnMessageRemovedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_removed_url IpMessagingServicesV1#webhooks_on_message_removed_url}
  */
  readonly webhooksOnMessageRemovedUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_send_method IpMessagingServicesV1#webhooks_on_message_send_method}
  */
  readonly webhooksOnMessageSendMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_send_url IpMessagingServicesV1#webhooks_on_message_send_url}
  */
  readonly webhooksOnMessageSendUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_sent_method IpMessagingServicesV1#webhooks_on_message_sent_method}
  */
  readonly webhooksOnMessageSentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_sent_url IpMessagingServicesV1#webhooks_on_message_sent_url}
  */
  readonly webhooksOnMessageSentUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_update_method IpMessagingServicesV1#webhooks_on_message_update_method}
  */
  readonly webhooksOnMessageUpdateMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_update_url IpMessagingServicesV1#webhooks_on_message_update_url}
  */
  readonly webhooksOnMessageUpdateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_updated_method IpMessagingServicesV1#webhooks_on_message_updated_method}
  */
  readonly webhooksOnMessageUpdatedMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#webhooks_on_message_updated_url IpMessagingServicesV1#webhooks_on_message_updated_url}
  */
  readonly webhooksOnMessageUpdatedUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1 twilio_ip_messaging_services_v1}
*/
export class IpMessagingServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_ip_messaging_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMessagingServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMessagingServicesV1 to import
  * @param importFromId The id of the existing IpMessagingServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMessagingServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_ip_messaging_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/ip_messaging_services_v1 twilio_ip_messaging_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMessagingServicesV1Config
  */
  public constructor(scope: Construct, id: string, config: IpMessagingServicesV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_ip_messaging_services_v1',
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
    this._notificationsAddedToChannelEnabled = config.notificationsAddedToChannelEnabled;
    this._notificationsAddedToChannelTemplate = config.notificationsAddedToChannelTemplate;
    this._notificationsInvitedToChannelEnabled = config.notificationsInvitedToChannelEnabled;
    this._notificationsInvitedToChannelTemplate = config.notificationsInvitedToChannelTemplate;
    this._notificationsNewMessageEnabled = config.notificationsNewMessageEnabled;
    this._notificationsNewMessageTemplate = config.notificationsNewMessageTemplate;
    this._notificationsRemovedFromChannelEnabled = config.notificationsRemovedFromChannelEnabled;
    this._notificationsRemovedFromChannelTemplate = config.notificationsRemovedFromChannelTemplate;
    this._postWebhookUrl = config.postWebhookUrl;
    this._preWebhookUrl = config.preWebhookUrl;
    this._reachabilityEnabled = config.reachabilityEnabled;
    this._readStatusEnabled = config.readStatusEnabled;
    this._typingIndicatorTimeout = config.typingIndicatorTimeout;
    this._webhookFilters = config.webhookFilters;
    this._webhookMethod = config.webhookMethod;
    this._webhooksOnChannelAddMethod = config.webhooksOnChannelAddMethod;
    this._webhooksOnChannelAddUrl = config.webhooksOnChannelAddUrl;
    this._webhooksOnChannelAddedMethod = config.webhooksOnChannelAddedMethod;
    this._webhooksOnChannelAddedUrl = config.webhooksOnChannelAddedUrl;
    this._webhooksOnChannelDestroyMethod = config.webhooksOnChannelDestroyMethod;
    this._webhooksOnChannelDestroyUrl = config.webhooksOnChannelDestroyUrl;
    this._webhooksOnChannelDestroyedMethod = config.webhooksOnChannelDestroyedMethod;
    this._webhooksOnChannelDestroyedUrl = config.webhooksOnChannelDestroyedUrl;
    this._webhooksOnChannelUpdateMethod = config.webhooksOnChannelUpdateMethod;
    this._webhooksOnChannelUpdateUrl = config.webhooksOnChannelUpdateUrl;
    this._webhooksOnChannelUpdatedMethod = config.webhooksOnChannelUpdatedMethod;
    this._webhooksOnChannelUpdatedUrl = config.webhooksOnChannelUpdatedUrl;
    this._webhooksOnMemberAddMethod = config.webhooksOnMemberAddMethod;
    this._webhooksOnMemberAddUrl = config.webhooksOnMemberAddUrl;
    this._webhooksOnMemberAddedMethod = config.webhooksOnMemberAddedMethod;
    this._webhooksOnMemberAddedUrl = config.webhooksOnMemberAddedUrl;
    this._webhooksOnMemberRemoveMethod = config.webhooksOnMemberRemoveMethod;
    this._webhooksOnMemberRemoveUrl = config.webhooksOnMemberRemoveUrl;
    this._webhooksOnMemberRemovedMethod = config.webhooksOnMemberRemovedMethod;
    this._webhooksOnMemberRemovedUrl = config.webhooksOnMemberRemovedUrl;
    this._webhooksOnMessageRemoveMethod = config.webhooksOnMessageRemoveMethod;
    this._webhooksOnMessageRemoveUrl = config.webhooksOnMessageRemoveUrl;
    this._webhooksOnMessageRemovedMethod = config.webhooksOnMessageRemovedMethod;
    this._webhooksOnMessageRemovedUrl = config.webhooksOnMessageRemovedUrl;
    this._webhooksOnMessageSendMethod = config.webhooksOnMessageSendMethod;
    this._webhooksOnMessageSendUrl = config.webhooksOnMessageSendUrl;
    this._webhooksOnMessageSentMethod = config.webhooksOnMessageSentMethod;
    this._webhooksOnMessageSentUrl = config.webhooksOnMessageSentUrl;
    this._webhooksOnMessageUpdateMethod = config.webhooksOnMessageUpdateMethod;
    this._webhooksOnMessageUpdateUrl = config.webhooksOnMessageUpdateUrl;
    this._webhooksOnMessageUpdatedMethod = config.webhooksOnMessageUpdatedMethod;
    this._webhooksOnMessageUpdatedUrl = config.webhooksOnMessageUpdatedUrl;
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

  // webhooks_on_channel_add_method - computed: true, optional: true, required: false
  private _webhooksOnChannelAddMethod?: string; 
  public get webhooksOnChannelAddMethod() {
    return this.getStringAttribute('webhooks_on_channel_add_method');
  }
  public set webhooksOnChannelAddMethod(value: string) {
    this._webhooksOnChannelAddMethod = value;
  }
  public resetWebhooksOnChannelAddMethod() {
    this._webhooksOnChannelAddMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelAddMethodInput() {
    return this._webhooksOnChannelAddMethod;
  }

  // webhooks_on_channel_add_url - computed: true, optional: true, required: false
  private _webhooksOnChannelAddUrl?: string; 
  public get webhooksOnChannelAddUrl() {
    return this.getStringAttribute('webhooks_on_channel_add_url');
  }
  public set webhooksOnChannelAddUrl(value: string) {
    this._webhooksOnChannelAddUrl = value;
  }
  public resetWebhooksOnChannelAddUrl() {
    this._webhooksOnChannelAddUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelAddUrlInput() {
    return this._webhooksOnChannelAddUrl;
  }

  // webhooks_on_channel_added_method - computed: true, optional: true, required: false
  private _webhooksOnChannelAddedMethod?: string; 
  public get webhooksOnChannelAddedMethod() {
    return this.getStringAttribute('webhooks_on_channel_added_method');
  }
  public set webhooksOnChannelAddedMethod(value: string) {
    this._webhooksOnChannelAddedMethod = value;
  }
  public resetWebhooksOnChannelAddedMethod() {
    this._webhooksOnChannelAddedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelAddedMethodInput() {
    return this._webhooksOnChannelAddedMethod;
  }

  // webhooks_on_channel_added_url - computed: true, optional: true, required: false
  private _webhooksOnChannelAddedUrl?: string; 
  public get webhooksOnChannelAddedUrl() {
    return this.getStringAttribute('webhooks_on_channel_added_url');
  }
  public set webhooksOnChannelAddedUrl(value: string) {
    this._webhooksOnChannelAddedUrl = value;
  }
  public resetWebhooksOnChannelAddedUrl() {
    this._webhooksOnChannelAddedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelAddedUrlInput() {
    return this._webhooksOnChannelAddedUrl;
  }

  // webhooks_on_channel_destroy_method - computed: true, optional: true, required: false
  private _webhooksOnChannelDestroyMethod?: string; 
  public get webhooksOnChannelDestroyMethod() {
    return this.getStringAttribute('webhooks_on_channel_destroy_method');
  }
  public set webhooksOnChannelDestroyMethod(value: string) {
    this._webhooksOnChannelDestroyMethod = value;
  }
  public resetWebhooksOnChannelDestroyMethod() {
    this._webhooksOnChannelDestroyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelDestroyMethodInput() {
    return this._webhooksOnChannelDestroyMethod;
  }

  // webhooks_on_channel_destroy_url - computed: true, optional: true, required: false
  private _webhooksOnChannelDestroyUrl?: string; 
  public get webhooksOnChannelDestroyUrl() {
    return this.getStringAttribute('webhooks_on_channel_destroy_url');
  }
  public set webhooksOnChannelDestroyUrl(value: string) {
    this._webhooksOnChannelDestroyUrl = value;
  }
  public resetWebhooksOnChannelDestroyUrl() {
    this._webhooksOnChannelDestroyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelDestroyUrlInput() {
    return this._webhooksOnChannelDestroyUrl;
  }

  // webhooks_on_channel_destroyed_method - computed: true, optional: true, required: false
  private _webhooksOnChannelDestroyedMethod?: string; 
  public get webhooksOnChannelDestroyedMethod() {
    return this.getStringAttribute('webhooks_on_channel_destroyed_method');
  }
  public set webhooksOnChannelDestroyedMethod(value: string) {
    this._webhooksOnChannelDestroyedMethod = value;
  }
  public resetWebhooksOnChannelDestroyedMethod() {
    this._webhooksOnChannelDestroyedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelDestroyedMethodInput() {
    return this._webhooksOnChannelDestroyedMethod;
  }

  // webhooks_on_channel_destroyed_url - computed: true, optional: true, required: false
  private _webhooksOnChannelDestroyedUrl?: string; 
  public get webhooksOnChannelDestroyedUrl() {
    return this.getStringAttribute('webhooks_on_channel_destroyed_url');
  }
  public set webhooksOnChannelDestroyedUrl(value: string) {
    this._webhooksOnChannelDestroyedUrl = value;
  }
  public resetWebhooksOnChannelDestroyedUrl() {
    this._webhooksOnChannelDestroyedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelDestroyedUrlInput() {
    return this._webhooksOnChannelDestroyedUrl;
  }

  // webhooks_on_channel_update_method - computed: true, optional: true, required: false
  private _webhooksOnChannelUpdateMethod?: string; 
  public get webhooksOnChannelUpdateMethod() {
    return this.getStringAttribute('webhooks_on_channel_update_method');
  }
  public set webhooksOnChannelUpdateMethod(value: string) {
    this._webhooksOnChannelUpdateMethod = value;
  }
  public resetWebhooksOnChannelUpdateMethod() {
    this._webhooksOnChannelUpdateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelUpdateMethodInput() {
    return this._webhooksOnChannelUpdateMethod;
  }

  // webhooks_on_channel_update_url - computed: true, optional: true, required: false
  private _webhooksOnChannelUpdateUrl?: string; 
  public get webhooksOnChannelUpdateUrl() {
    return this.getStringAttribute('webhooks_on_channel_update_url');
  }
  public set webhooksOnChannelUpdateUrl(value: string) {
    this._webhooksOnChannelUpdateUrl = value;
  }
  public resetWebhooksOnChannelUpdateUrl() {
    this._webhooksOnChannelUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelUpdateUrlInput() {
    return this._webhooksOnChannelUpdateUrl;
  }

  // webhooks_on_channel_updated_method - computed: true, optional: true, required: false
  private _webhooksOnChannelUpdatedMethod?: string; 
  public get webhooksOnChannelUpdatedMethod() {
    return this.getStringAttribute('webhooks_on_channel_updated_method');
  }
  public set webhooksOnChannelUpdatedMethod(value: string) {
    this._webhooksOnChannelUpdatedMethod = value;
  }
  public resetWebhooksOnChannelUpdatedMethod() {
    this._webhooksOnChannelUpdatedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelUpdatedMethodInput() {
    return this._webhooksOnChannelUpdatedMethod;
  }

  // webhooks_on_channel_updated_url - computed: true, optional: true, required: false
  private _webhooksOnChannelUpdatedUrl?: string; 
  public get webhooksOnChannelUpdatedUrl() {
    return this.getStringAttribute('webhooks_on_channel_updated_url');
  }
  public set webhooksOnChannelUpdatedUrl(value: string) {
    this._webhooksOnChannelUpdatedUrl = value;
  }
  public resetWebhooksOnChannelUpdatedUrl() {
    this._webhooksOnChannelUpdatedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnChannelUpdatedUrlInput() {
    return this._webhooksOnChannelUpdatedUrl;
  }

  // webhooks_on_member_add_method - computed: true, optional: true, required: false
  private _webhooksOnMemberAddMethod?: string; 
  public get webhooksOnMemberAddMethod() {
    return this.getStringAttribute('webhooks_on_member_add_method');
  }
  public set webhooksOnMemberAddMethod(value: string) {
    this._webhooksOnMemberAddMethod = value;
  }
  public resetWebhooksOnMemberAddMethod() {
    this._webhooksOnMemberAddMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberAddMethodInput() {
    return this._webhooksOnMemberAddMethod;
  }

  // webhooks_on_member_add_url - computed: true, optional: true, required: false
  private _webhooksOnMemberAddUrl?: string; 
  public get webhooksOnMemberAddUrl() {
    return this.getStringAttribute('webhooks_on_member_add_url');
  }
  public set webhooksOnMemberAddUrl(value: string) {
    this._webhooksOnMemberAddUrl = value;
  }
  public resetWebhooksOnMemberAddUrl() {
    this._webhooksOnMemberAddUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberAddUrlInput() {
    return this._webhooksOnMemberAddUrl;
  }

  // webhooks_on_member_added_method - computed: true, optional: true, required: false
  private _webhooksOnMemberAddedMethod?: string; 
  public get webhooksOnMemberAddedMethod() {
    return this.getStringAttribute('webhooks_on_member_added_method');
  }
  public set webhooksOnMemberAddedMethod(value: string) {
    this._webhooksOnMemberAddedMethod = value;
  }
  public resetWebhooksOnMemberAddedMethod() {
    this._webhooksOnMemberAddedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberAddedMethodInput() {
    return this._webhooksOnMemberAddedMethod;
  }

  // webhooks_on_member_added_url - computed: true, optional: true, required: false
  private _webhooksOnMemberAddedUrl?: string; 
  public get webhooksOnMemberAddedUrl() {
    return this.getStringAttribute('webhooks_on_member_added_url');
  }
  public set webhooksOnMemberAddedUrl(value: string) {
    this._webhooksOnMemberAddedUrl = value;
  }
  public resetWebhooksOnMemberAddedUrl() {
    this._webhooksOnMemberAddedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberAddedUrlInput() {
    return this._webhooksOnMemberAddedUrl;
  }

  // webhooks_on_member_remove_method - computed: true, optional: true, required: false
  private _webhooksOnMemberRemoveMethod?: string; 
  public get webhooksOnMemberRemoveMethod() {
    return this.getStringAttribute('webhooks_on_member_remove_method');
  }
  public set webhooksOnMemberRemoveMethod(value: string) {
    this._webhooksOnMemberRemoveMethod = value;
  }
  public resetWebhooksOnMemberRemoveMethod() {
    this._webhooksOnMemberRemoveMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberRemoveMethodInput() {
    return this._webhooksOnMemberRemoveMethod;
  }

  // webhooks_on_member_remove_url - computed: true, optional: true, required: false
  private _webhooksOnMemberRemoveUrl?: string; 
  public get webhooksOnMemberRemoveUrl() {
    return this.getStringAttribute('webhooks_on_member_remove_url');
  }
  public set webhooksOnMemberRemoveUrl(value: string) {
    this._webhooksOnMemberRemoveUrl = value;
  }
  public resetWebhooksOnMemberRemoveUrl() {
    this._webhooksOnMemberRemoveUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberRemoveUrlInput() {
    return this._webhooksOnMemberRemoveUrl;
  }

  // webhooks_on_member_removed_method - computed: true, optional: true, required: false
  private _webhooksOnMemberRemovedMethod?: string; 
  public get webhooksOnMemberRemovedMethod() {
    return this.getStringAttribute('webhooks_on_member_removed_method');
  }
  public set webhooksOnMemberRemovedMethod(value: string) {
    this._webhooksOnMemberRemovedMethod = value;
  }
  public resetWebhooksOnMemberRemovedMethod() {
    this._webhooksOnMemberRemovedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberRemovedMethodInput() {
    return this._webhooksOnMemberRemovedMethod;
  }

  // webhooks_on_member_removed_url - computed: true, optional: true, required: false
  private _webhooksOnMemberRemovedUrl?: string; 
  public get webhooksOnMemberRemovedUrl() {
    return this.getStringAttribute('webhooks_on_member_removed_url');
  }
  public set webhooksOnMemberRemovedUrl(value: string) {
    this._webhooksOnMemberRemovedUrl = value;
  }
  public resetWebhooksOnMemberRemovedUrl() {
    this._webhooksOnMemberRemovedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMemberRemovedUrlInput() {
    return this._webhooksOnMemberRemovedUrl;
  }

  // webhooks_on_message_remove_method - computed: true, optional: true, required: false
  private _webhooksOnMessageRemoveMethod?: string; 
  public get webhooksOnMessageRemoveMethod() {
    return this.getStringAttribute('webhooks_on_message_remove_method');
  }
  public set webhooksOnMessageRemoveMethod(value: string) {
    this._webhooksOnMessageRemoveMethod = value;
  }
  public resetWebhooksOnMessageRemoveMethod() {
    this._webhooksOnMessageRemoveMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageRemoveMethodInput() {
    return this._webhooksOnMessageRemoveMethod;
  }

  // webhooks_on_message_remove_url - computed: true, optional: true, required: false
  private _webhooksOnMessageRemoveUrl?: string; 
  public get webhooksOnMessageRemoveUrl() {
    return this.getStringAttribute('webhooks_on_message_remove_url');
  }
  public set webhooksOnMessageRemoveUrl(value: string) {
    this._webhooksOnMessageRemoveUrl = value;
  }
  public resetWebhooksOnMessageRemoveUrl() {
    this._webhooksOnMessageRemoveUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageRemoveUrlInput() {
    return this._webhooksOnMessageRemoveUrl;
  }

  // webhooks_on_message_removed_method - computed: true, optional: true, required: false
  private _webhooksOnMessageRemovedMethod?: string; 
  public get webhooksOnMessageRemovedMethod() {
    return this.getStringAttribute('webhooks_on_message_removed_method');
  }
  public set webhooksOnMessageRemovedMethod(value: string) {
    this._webhooksOnMessageRemovedMethod = value;
  }
  public resetWebhooksOnMessageRemovedMethod() {
    this._webhooksOnMessageRemovedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageRemovedMethodInput() {
    return this._webhooksOnMessageRemovedMethod;
  }

  // webhooks_on_message_removed_url - computed: true, optional: true, required: false
  private _webhooksOnMessageRemovedUrl?: string; 
  public get webhooksOnMessageRemovedUrl() {
    return this.getStringAttribute('webhooks_on_message_removed_url');
  }
  public set webhooksOnMessageRemovedUrl(value: string) {
    this._webhooksOnMessageRemovedUrl = value;
  }
  public resetWebhooksOnMessageRemovedUrl() {
    this._webhooksOnMessageRemovedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageRemovedUrlInput() {
    return this._webhooksOnMessageRemovedUrl;
  }

  // webhooks_on_message_send_method - computed: true, optional: true, required: false
  private _webhooksOnMessageSendMethod?: string; 
  public get webhooksOnMessageSendMethod() {
    return this.getStringAttribute('webhooks_on_message_send_method');
  }
  public set webhooksOnMessageSendMethod(value: string) {
    this._webhooksOnMessageSendMethod = value;
  }
  public resetWebhooksOnMessageSendMethod() {
    this._webhooksOnMessageSendMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageSendMethodInput() {
    return this._webhooksOnMessageSendMethod;
  }

  // webhooks_on_message_send_url - computed: true, optional: true, required: false
  private _webhooksOnMessageSendUrl?: string; 
  public get webhooksOnMessageSendUrl() {
    return this.getStringAttribute('webhooks_on_message_send_url');
  }
  public set webhooksOnMessageSendUrl(value: string) {
    this._webhooksOnMessageSendUrl = value;
  }
  public resetWebhooksOnMessageSendUrl() {
    this._webhooksOnMessageSendUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageSendUrlInput() {
    return this._webhooksOnMessageSendUrl;
  }

  // webhooks_on_message_sent_method - computed: true, optional: true, required: false
  private _webhooksOnMessageSentMethod?: string; 
  public get webhooksOnMessageSentMethod() {
    return this.getStringAttribute('webhooks_on_message_sent_method');
  }
  public set webhooksOnMessageSentMethod(value: string) {
    this._webhooksOnMessageSentMethod = value;
  }
  public resetWebhooksOnMessageSentMethod() {
    this._webhooksOnMessageSentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageSentMethodInput() {
    return this._webhooksOnMessageSentMethod;
  }

  // webhooks_on_message_sent_url - computed: true, optional: true, required: false
  private _webhooksOnMessageSentUrl?: string; 
  public get webhooksOnMessageSentUrl() {
    return this.getStringAttribute('webhooks_on_message_sent_url');
  }
  public set webhooksOnMessageSentUrl(value: string) {
    this._webhooksOnMessageSentUrl = value;
  }
  public resetWebhooksOnMessageSentUrl() {
    this._webhooksOnMessageSentUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageSentUrlInput() {
    return this._webhooksOnMessageSentUrl;
  }

  // webhooks_on_message_update_method - computed: true, optional: true, required: false
  private _webhooksOnMessageUpdateMethod?: string; 
  public get webhooksOnMessageUpdateMethod() {
    return this.getStringAttribute('webhooks_on_message_update_method');
  }
  public set webhooksOnMessageUpdateMethod(value: string) {
    this._webhooksOnMessageUpdateMethod = value;
  }
  public resetWebhooksOnMessageUpdateMethod() {
    this._webhooksOnMessageUpdateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageUpdateMethodInput() {
    return this._webhooksOnMessageUpdateMethod;
  }

  // webhooks_on_message_update_url - computed: true, optional: true, required: false
  private _webhooksOnMessageUpdateUrl?: string; 
  public get webhooksOnMessageUpdateUrl() {
    return this.getStringAttribute('webhooks_on_message_update_url');
  }
  public set webhooksOnMessageUpdateUrl(value: string) {
    this._webhooksOnMessageUpdateUrl = value;
  }
  public resetWebhooksOnMessageUpdateUrl() {
    this._webhooksOnMessageUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageUpdateUrlInput() {
    return this._webhooksOnMessageUpdateUrl;
  }

  // webhooks_on_message_updated_method - computed: true, optional: true, required: false
  private _webhooksOnMessageUpdatedMethod?: string; 
  public get webhooksOnMessageUpdatedMethod() {
    return this.getStringAttribute('webhooks_on_message_updated_method');
  }
  public set webhooksOnMessageUpdatedMethod(value: string) {
    this._webhooksOnMessageUpdatedMethod = value;
  }
  public resetWebhooksOnMessageUpdatedMethod() {
    this._webhooksOnMessageUpdatedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageUpdatedMethodInput() {
    return this._webhooksOnMessageUpdatedMethod;
  }

  // webhooks_on_message_updated_url - computed: true, optional: true, required: false
  private _webhooksOnMessageUpdatedUrl?: string; 
  public get webhooksOnMessageUpdatedUrl() {
    return this.getStringAttribute('webhooks_on_message_updated_url');
  }
  public set webhooksOnMessageUpdatedUrl(value: string) {
    this._webhooksOnMessageUpdatedUrl = value;
  }
  public resetWebhooksOnMessageUpdatedUrl() {
    this._webhooksOnMessageUpdatedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksOnMessageUpdatedUrlInput() {
    return this._webhooksOnMessageUpdatedUrl;
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
      notifications_added_to_channel_enabled: cdktf.booleanToTerraform(this._notificationsAddedToChannelEnabled),
      notifications_added_to_channel_template: cdktf.stringToTerraform(this._notificationsAddedToChannelTemplate),
      notifications_invited_to_channel_enabled: cdktf.booleanToTerraform(this._notificationsInvitedToChannelEnabled),
      notifications_invited_to_channel_template: cdktf.stringToTerraform(this._notificationsInvitedToChannelTemplate),
      notifications_new_message_enabled: cdktf.booleanToTerraform(this._notificationsNewMessageEnabled),
      notifications_new_message_template: cdktf.stringToTerraform(this._notificationsNewMessageTemplate),
      notifications_removed_from_channel_enabled: cdktf.booleanToTerraform(this._notificationsRemovedFromChannelEnabled),
      notifications_removed_from_channel_template: cdktf.stringToTerraform(this._notificationsRemovedFromChannelTemplate),
      post_webhook_url: cdktf.stringToTerraform(this._postWebhookUrl),
      pre_webhook_url: cdktf.stringToTerraform(this._preWebhookUrl),
      reachability_enabled: cdktf.booleanToTerraform(this._reachabilityEnabled),
      read_status_enabled: cdktf.booleanToTerraform(this._readStatusEnabled),
      typing_indicator_timeout: cdktf.numberToTerraform(this._typingIndicatorTimeout),
      webhook_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webhookFilters),
      webhook_method: cdktf.stringToTerraform(this._webhookMethod),
      webhooks_on_channel_add_method: cdktf.stringToTerraform(this._webhooksOnChannelAddMethod),
      webhooks_on_channel_add_url: cdktf.stringToTerraform(this._webhooksOnChannelAddUrl),
      webhooks_on_channel_added_method: cdktf.stringToTerraform(this._webhooksOnChannelAddedMethod),
      webhooks_on_channel_added_url: cdktf.stringToTerraform(this._webhooksOnChannelAddedUrl),
      webhooks_on_channel_destroy_method: cdktf.stringToTerraform(this._webhooksOnChannelDestroyMethod),
      webhooks_on_channel_destroy_url: cdktf.stringToTerraform(this._webhooksOnChannelDestroyUrl),
      webhooks_on_channel_destroyed_method: cdktf.stringToTerraform(this._webhooksOnChannelDestroyedMethod),
      webhooks_on_channel_destroyed_url: cdktf.stringToTerraform(this._webhooksOnChannelDestroyedUrl),
      webhooks_on_channel_update_method: cdktf.stringToTerraform(this._webhooksOnChannelUpdateMethod),
      webhooks_on_channel_update_url: cdktf.stringToTerraform(this._webhooksOnChannelUpdateUrl),
      webhooks_on_channel_updated_method: cdktf.stringToTerraform(this._webhooksOnChannelUpdatedMethod),
      webhooks_on_channel_updated_url: cdktf.stringToTerraform(this._webhooksOnChannelUpdatedUrl),
      webhooks_on_member_add_method: cdktf.stringToTerraform(this._webhooksOnMemberAddMethod),
      webhooks_on_member_add_url: cdktf.stringToTerraform(this._webhooksOnMemberAddUrl),
      webhooks_on_member_added_method: cdktf.stringToTerraform(this._webhooksOnMemberAddedMethod),
      webhooks_on_member_added_url: cdktf.stringToTerraform(this._webhooksOnMemberAddedUrl),
      webhooks_on_member_remove_method: cdktf.stringToTerraform(this._webhooksOnMemberRemoveMethod),
      webhooks_on_member_remove_url: cdktf.stringToTerraform(this._webhooksOnMemberRemoveUrl),
      webhooks_on_member_removed_method: cdktf.stringToTerraform(this._webhooksOnMemberRemovedMethod),
      webhooks_on_member_removed_url: cdktf.stringToTerraform(this._webhooksOnMemberRemovedUrl),
      webhooks_on_message_remove_method: cdktf.stringToTerraform(this._webhooksOnMessageRemoveMethod),
      webhooks_on_message_remove_url: cdktf.stringToTerraform(this._webhooksOnMessageRemoveUrl),
      webhooks_on_message_removed_method: cdktf.stringToTerraform(this._webhooksOnMessageRemovedMethod),
      webhooks_on_message_removed_url: cdktf.stringToTerraform(this._webhooksOnMessageRemovedUrl),
      webhooks_on_message_send_method: cdktf.stringToTerraform(this._webhooksOnMessageSendMethod),
      webhooks_on_message_send_url: cdktf.stringToTerraform(this._webhooksOnMessageSendUrl),
      webhooks_on_message_sent_method: cdktf.stringToTerraform(this._webhooksOnMessageSentMethod),
      webhooks_on_message_sent_url: cdktf.stringToTerraform(this._webhooksOnMessageSentUrl),
      webhooks_on_message_update_method: cdktf.stringToTerraform(this._webhooksOnMessageUpdateMethod),
      webhooks_on_message_update_url: cdktf.stringToTerraform(this._webhooksOnMessageUpdateUrl),
      webhooks_on_message_updated_method: cdktf.stringToTerraform(this._webhooksOnMessageUpdatedMethod),
      webhooks_on_message_updated_url: cdktf.stringToTerraform(this._webhooksOnMessageUpdatedUrl),
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
      notifications_added_to_channel_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsAddedToChannelEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      notifications_invited_to_channel_template: {
        value: cdktf.stringToHclTerraform(this._notificationsInvitedToChannelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications_new_message_enabled: {
        value: cdktf.booleanToHclTerraform(this._notificationsNewMessageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      notifications_removed_from_channel_template: {
        value: cdktf.stringToHclTerraform(this._notificationsRemovedFromChannelTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_webhook_url: {
        value: cdktf.stringToHclTerraform(this._postWebhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      webhooks_on_channel_add_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelAddMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_add_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelAddUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_added_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelAddedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_added_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelAddedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_destroy_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelDestroyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_destroy_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelDestroyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_destroyed_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelDestroyedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_destroyed_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelDestroyedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_update_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelUpdateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_update_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelUpdateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_updated_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelUpdatedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_channel_updated_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnChannelUpdatedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_add_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberAddMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_add_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberAddUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_added_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberAddedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_added_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberAddedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_remove_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberRemoveMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_remove_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberRemoveUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_removed_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberRemovedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_member_removed_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMemberRemovedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_remove_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageRemoveMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_remove_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageRemoveUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_removed_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageRemovedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_removed_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageRemovedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_send_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageSendMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_send_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageSendUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_sent_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageSentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_sent_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageSentUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_update_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageUpdateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_update_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageUpdateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_updated_method: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageUpdatedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_on_message_updated_url: {
        value: cdktf.stringToHclTerraform(this._webhooksOnMessageUpdatedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
