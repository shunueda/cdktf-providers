// https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`. Identifies whether members external to your organization can join the group. If true, Google Workspace users external to your organization can become members of this group. If false, users not belonging to the organization are not allowed to become members of this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}
  */
  readonly allowExternalMembers?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`. Allows posting from web. If true, allows any member to post to the group forum. If false, Members only use Gmail to communicate with the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}
  */
  readonly allowWebPosting?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`. Allows the group to be archived only. If true, Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browsable and searchable. If true, the `who_can_post_message` property is set to `NONE_CAN_POST`. If reverted from true to false, `who_can_post_message` is set to `ALL_MANAGERS_CAN_POST`. If false, The group is active and can receive messages. When false, updating `who_can_post_message` to `NONE_CAN_POST`, results in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#archive_only GroupSettings#archive_only}
  */
  readonly archiveOnly?: boolean | cdktf.IResolvable;
  /**
  * Set the content of custom footer text. The maximum number of characters is 1,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}
  */
  readonly customFooterText?: string;
  /**
  * An email address used when replying to a message if the `reply_to` property is set to `REPLY_TO_CUSTOM`. This address is defined by an account administrator. When the group's `reply_to` property is set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds a custom email address used when replying to a message, the `custom_reply_to` property must have a text value or an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}
  */
  readonly customReplyTo?: string;
  /**
  * When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Requires `send_message_deny_notification` property to be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#default_message_deny_notification_text GroupSettings#default_message_deny_notification_text}
  */
  readonly defaultMessageDenyNotificationText?: string;
  /**
  * The group's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#email GroupSettings#email}
  */
  readonly email: string;
  /**
  * Defaults to `false`. Specifies whether a collaborative inbox will remain turned on for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#enable_collaborative_inbox GroupSettings#enable_collaborative_inbox}
  */
  readonly enableCollaborativeInbox?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`. Whether to include custom footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}
  */
  readonly includeCustomFooter?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`. Enables the group to be included in the Global Address List. If true, the group is included in the Global Address List. If false, it is not included in the Global Address List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}
  */
  readonly includeInGlobalAddressList?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`. Allows the Group contents to be archived. If true, archive messages sent to the group. If false, Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#is_archived GroupSettings#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`. Enables members to post messages as the group. If true, group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. If false, members can not post in behalf of the group's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}
  */
  readonly membersCanPostAsTheGroup?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `MODERATE_NONE`. Moderation level of incoming messages. Possible values are: 
  * 	- `MODERATE_ALL_MESSAGES`: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
  * 	- `MODERATE_NON_MEMBERS`: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
  * 	- `MODERATE_NEW_MEMBERS`: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. 
  * 	- `MODERATE_NONE`: No moderator approval is required. Messages are delivered directly to the group.
  * 	Note: When the `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the `message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam.When `member_can_post_as_the_group` is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}
  */
  readonly messageModerationLevel?: string;
  /**
  * Defaults to `en_US`. The primary language for group. For a group's primary language use the language tags from the Google Workspace languages found at Google Workspace Email Settings API Email Language Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#primary_language GroupSettings#primary_language}
  */
  readonly primaryLanguage?: string;
  /**
  * Defaults to `REPLY_TO_IGNORE`. Specifies who receives the default reply. Possible values are: 
  * 	- `REPLY_TO_CUSTOM`: For replies to messages, use the group's custom email address. When set to `REPLY_TO_CUSTOM`, the `custom_reply_to` property holds the custom email address used when replying to a message, the customReplyTo property must have a value. Otherwise an error is returned. 
  * 	- `REPLY_TO_SENDER`: The reply sent to author of message. 
  * 	- `REPLY_TO_LIST`: This reply message is sent to the group. 
  * 	- `REPLY_TO_OWNER`: The reply is sent to the owner(s) of the group. This does not include the group's managers. 
  * 	- `REPLY_TO_IGNORE`: Group users individually decide where the message reply is sent. 
  * 	- `REPLY_TO_MANAGERS`: This reply message is sent to the group's managers, which includes all managers and the group owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#reply_to GroupSettings#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Defaults to `false`. Allows a member to be notified if the member's message to the group is denied by the group owner. If true, when a message is rejected, send the deny message notification to the message author. The `default_message_deny_notification_text` property is dependent on the `send_message_deny_notification` property being true. If false, when a message is rejected, no notification is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}
  */
  readonly sendMessageDenyNotification?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `MODERATE`. Specifies moderation levels for messages detected as spam. Possible values are: 
  * 	- `ALLOW`: Post the message to the group. 
  * 	- `MODERATE`: Send the message to the moderation queue. This is the default. 
  * 	- `SILENTLY_MODERATE`: Send the message to the moderation queue, but do not send notification to moderators. 
  * 	- `REJECT`: Immediately reject the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}
  */
  readonly spamModerationLevel?: string;
  /**
  * Defaults to `NONE`. Specifies who can moderate metadata. Possible values are: 
  * 	- `ALL_MEMBERS`
  * 	- `OWNERS_AND_MANAGERS`
  * 	- `MANAGERS_ONLY`
  * 	- `OWNERS_ONLY`
  * 	- `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}
  */
  readonly whoCanAssistContent?: string;
  /**
  * Defaults to `ANYONE_CAN_CONTACT`. Permission to contact owner of the group via web UI. Possible values are: 
  * 	- `ALL_IN_DOMAIN_CAN_CONTACT`
  * 	- `ALL_MANAGERS_CAN_CONTACT`
  * 	- `ALL_MEMBERS_CAN_CONTACT`
  * 	- `ANYONE_CAN_CONTACT`
  * 	- `ALL_OWNERS_CAN_CONTACT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}
  */
  readonly whoCanContactOwner?: string;
  /**
  * Defaults to `ALL_IN_DOMAIN_CAN_DISCOVER`. Specifies the set of users for whom this group is discoverable. Possible values are: 
  * 	- `ANYONE_CAN_DISCOVER`
  * 	- `ALL_IN_DOMAIN_CAN_DISCOVER`
  * 	- `ALL_MEMBERS_CAN_DISCOVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}
  */
  readonly whoCanDiscoverGroup?: string;
  /**
  * Defaults to `CAN_REQUEST_TO_JOIN`. Permission to join group. Possible values are: 
  * 	- `ANYONE_CAN_JOIN`: Any Internet user, both inside and outside your domain, can join the group. 
  * 	- `ALL_IN_DOMAIN_CAN_JOIN`: Anyone in the account domain can join. This includes accounts with multiple domains. 
  * 	- `INVITED_CAN_JOIN`: Candidates for membership can be invited to join. 
  * 	- `CAN_REQUEST_TO_JOIN`: Non members can request an invitation to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}
  */
  readonly whoCanJoin?: string;
  /**
  * Defaults to `ALL_MEMBERS_CAN_LEAVE`. Permission to leave the group. Possible values are:
  * 	- `ALL_OWNERS_CAN_LEAVE`
  * 	- `ALL_MANAGERS_CAN_LEAVE`
  * 	- `ALL_MEMBERS_CAN_LEAVE`
  * 	- `NONE_CAN_LEAVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}
  */
  readonly whoCanLeaveGroup?: string;
  /**
  * Defaults to `OWNERS_AND_MANAGERS`. Specifies who can moderate content. Possible values are: 
  * 	- `ALL_MEMBERS`
  * 	- `OWNERS_AND_MANAGERS`
  * 	- `OWNERS_ONLY`
  * 	- `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}
  */
  readonly whoCanModerateContent?: string;
  /**
  * Defaults to `OWNERS_AND_MANAGERS`. Specifies who can manage members. Possible values are: 
  * 	- `ALL_MEMBERS`
  * 	- `OWNERS_AND_MANAGERS`
  * 	- `OWNERS_ONLY`
  * 	- `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}
  */
  readonly whoCanModerateMembers?: string;
  /**
  * Permissions to post messages. Possible values are: 
  * 	- `NONE_CAN_POST`: The group is disabled and archived. No one can post a message to this group. * When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. * If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST. 
  * 	- `ALL_MANAGERS_CAN_POST`: Managers, including group owners, can post messages. 
  * 	- `ALL_MEMBERS_CAN_POST`: Any group member can post a message. 
  * 	- `ALL_OWNERS_CAN_POST`: Only group owners can post a message. 
  * 	- `ALL_IN_DOMAIN_CAN_POST`: Anyone in the account can post a message. 
  * 	- `ANYONE_CAN_POST`: Any Internet user who outside your account can access your Google Groups service and post a message. 
  * 	*Note: When `who_can_post_message` is set to `ANYONE_CAN_POST`, we recommend the`message_moderation_level` be set to `MODERATE_NON_MEMBERS` to protect the group from possible spam. Users not belonging to the organization are not allowed to become members of this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_post_message GroupSettings#who_can_post_message}
  */
  readonly whoCanPostMessage?: string;
  /**
  * Defaults to `ALL_MEMBERS_CAN_VIEW`. Permissions to view group messages. Possible values are: 
  * 	- `ANYONE_CAN_VIEW`: Any Internet user can view the group's messages. 
  * 	- `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in your account can view this group's messages. 
  * 	- `ALL_MEMBERS_CAN_VIEW`: All group members can view the group's messages. 
  * 	- `ALL_MANAGERS_CAN_VIEW`: Any group manager can view this group's messages. 
  * 	- `ALL_OWNERS_CAN_VIEW`: The group owners can view this group's messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}
  */
  readonly whoCanViewGroup?: string;
  /**
  * Defaults to `ALL_MEMBERS_CAN_VIEW`. Permissions to view membership. Possible values are: 
  * 	- `ALL_IN_DOMAIN_CAN_VIEW`: Anyone in the account can view the group members list. If a group already has external members, those members can still send email to this group. 
  * 	- `ALL_MEMBERS_CAN_VIEW`: The group members can view the group members list. 
  * 	- `ALL_MANAGERS_CAN_VIEW`: The group managers can view group members list. 
  * 	- `ALL_OWNERS_CAN_VIEW`: The group owners can view group members list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#who_can_view_membership GroupSettings#who_can_view_membership}
  */
  readonly whoCanViewMembership?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#timeouts GroupSettings#timeouts}
  */
  readonly timeouts?: GroupSettingsTimeouts;
}
export interface GroupSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#create GroupSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#update GroupSettings#update}
  */
  readonly update?: string;
}

export function groupSettingsTimeoutsToTerraform(struct?: GroupSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function groupSettingsTimeoutsToHclTerraform(struct?: GroupSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings googleworkspace_group_settings}
*/
export class GroupSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_group_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSettings to import
  * @param importFromId The id of the existing GroupSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_group_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.0/docs/resources/group_settings googleworkspace_group_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_group_settings',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowExternalMembers = config.allowExternalMembers;
    this._allowWebPosting = config.allowWebPosting;
    this._archiveOnly = config.archiveOnly;
    this._customFooterText = config.customFooterText;
    this._customReplyTo = config.customReplyTo;
    this._defaultMessageDenyNotificationText = config.defaultMessageDenyNotificationText;
    this._email = config.email;
    this._enableCollaborativeInbox = config.enableCollaborativeInbox;
    this._includeCustomFooter = config.includeCustomFooter;
    this._includeInGlobalAddressList = config.includeInGlobalAddressList;
    this._isArchived = config.isArchived;
    this._membersCanPostAsTheGroup = config.membersCanPostAsTheGroup;
    this._messageModerationLevel = config.messageModerationLevel;
    this._primaryLanguage = config.primaryLanguage;
    this._replyTo = config.replyTo;
    this._sendMessageDenyNotification = config.sendMessageDenyNotification;
    this._spamModerationLevel = config.spamModerationLevel;
    this._whoCanAssistContent = config.whoCanAssistContent;
    this._whoCanContactOwner = config.whoCanContactOwner;
    this._whoCanDiscoverGroup = config.whoCanDiscoverGroup;
    this._whoCanJoin = config.whoCanJoin;
    this._whoCanLeaveGroup = config.whoCanLeaveGroup;
    this._whoCanModerateContent = config.whoCanModerateContent;
    this._whoCanModerateMembers = config.whoCanModerateMembers;
    this._whoCanPostMessage = config.whoCanPostMessage;
    this._whoCanViewGroup = config.whoCanViewGroup;
    this._whoCanViewMembership = config.whoCanViewMembership;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_members - computed: false, optional: true, required: false
  private _allowExternalMembers?: boolean | cdktf.IResolvable; 
  public get allowExternalMembers() {
    return this.getBooleanAttribute('allow_external_members');
  }
  public set allowExternalMembers(value: boolean | cdktf.IResolvable) {
    this._allowExternalMembers = value;
  }
  public resetAllowExternalMembers() {
    this._allowExternalMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalMembersInput() {
    return this._allowExternalMembers;
  }

  // allow_web_posting - computed: false, optional: true, required: false
  private _allowWebPosting?: boolean | cdktf.IResolvable; 
  public get allowWebPosting() {
    return this.getBooleanAttribute('allow_web_posting');
  }
  public set allowWebPosting(value: boolean | cdktf.IResolvable) {
    this._allowWebPosting = value;
  }
  public resetAllowWebPosting() {
    this._allowWebPosting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWebPostingInput() {
    return this._allowWebPosting;
  }

  // archive_only - computed: false, optional: true, required: false
  private _archiveOnly?: boolean | cdktf.IResolvable; 
  public get archiveOnly() {
    return this.getBooleanAttribute('archive_only');
  }
  public set archiveOnly(value: boolean | cdktf.IResolvable) {
    this._archiveOnly = value;
  }
  public resetArchiveOnly() {
    this._archiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnlyInput() {
    return this._archiveOnly;
  }

  // custom_footer_text - computed: false, optional: true, required: false
  private _customFooterText?: string; 
  public get customFooterText() {
    return this.getStringAttribute('custom_footer_text');
  }
  public set customFooterText(value: string) {
    this._customFooterText = value;
  }
  public resetCustomFooterText() {
    this._customFooterText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFooterTextInput() {
    return this._customFooterText;
  }

  // custom_reply_to - computed: false, optional: true, required: false
  private _customReplyTo?: string; 
  public get customReplyTo() {
    return this.getStringAttribute('custom_reply_to');
  }
  public set customReplyTo(value: string) {
    this._customReplyTo = value;
  }
  public resetCustomReplyTo() {
    this._customReplyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReplyToInput() {
    return this._customReplyTo;
  }

  // custom_roles_enabled_for_settings_to_be_merged - computed: true, optional: false, required: false
  public get customRolesEnabledForSettingsToBeMerged() {
    return this.getBooleanAttribute('custom_roles_enabled_for_settings_to_be_merged');
  }

  // default_message_deny_notification_text - computed: false, optional: true, required: false
  private _defaultMessageDenyNotificationText?: string; 
  public get defaultMessageDenyNotificationText() {
    return this.getStringAttribute('default_message_deny_notification_text');
  }
  public set defaultMessageDenyNotificationText(value: string) {
    this._defaultMessageDenyNotificationText = value;
  }
  public resetDefaultMessageDenyNotificationText() {
    this._defaultMessageDenyNotificationText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageDenyNotificationTextInput() {
    return this._defaultMessageDenyNotificationText;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_collaborative_inbox - computed: false, optional: true, required: false
  private _enableCollaborativeInbox?: boolean | cdktf.IResolvable; 
  public get enableCollaborativeInbox() {
    return this.getBooleanAttribute('enable_collaborative_inbox');
  }
  public set enableCollaborativeInbox(value: boolean | cdktf.IResolvable) {
    this._enableCollaborativeInbox = value;
  }
  public resetEnableCollaborativeInbox() {
    this._enableCollaborativeInbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCollaborativeInboxInput() {
    return this._enableCollaborativeInbox;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_custom_footer - computed: false, optional: true, required: false
  private _includeCustomFooter?: boolean | cdktf.IResolvable; 
  public get includeCustomFooter() {
    return this.getBooleanAttribute('include_custom_footer');
  }
  public set includeCustomFooter(value: boolean | cdktf.IResolvable) {
    this._includeCustomFooter = value;
  }
  public resetIncludeCustomFooter() {
    this._includeCustomFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCustomFooterInput() {
    return this._includeCustomFooter;
  }

  // include_in_global_address_list - computed: false, optional: true, required: false
  private _includeInGlobalAddressList?: boolean | cdktf.IResolvable; 
  public get includeInGlobalAddressList() {
    return this.getBooleanAttribute('include_in_global_address_list');
  }
  public set includeInGlobalAddressList(value: boolean | cdktf.IResolvable) {
    this._includeInGlobalAddressList = value;
  }
  public resetIncludeInGlobalAddressList() {
    this._includeInGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalAddressListInput() {
    return this._includeInGlobalAddressList;
  }

  // is_archived - computed: false, optional: true, required: false
  private _isArchived?: boolean | cdktf.IResolvable; 
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }
  public set isArchived(value: boolean | cdktf.IResolvable) {
    this._isArchived = value;
  }
  public resetIsArchived() {
    this._isArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArchivedInput() {
    return this._isArchived;
  }

  // members_can_post_as_the_group - computed: false, optional: true, required: false
  private _membersCanPostAsTheGroup?: boolean | cdktf.IResolvable; 
  public get membersCanPostAsTheGroup() {
    return this.getBooleanAttribute('members_can_post_as_the_group');
  }
  public set membersCanPostAsTheGroup(value: boolean | cdktf.IResolvable) {
    this._membersCanPostAsTheGroup = value;
  }
  public resetMembersCanPostAsTheGroup() {
    this._membersCanPostAsTheGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanPostAsTheGroupInput() {
    return this._membersCanPostAsTheGroup;
  }

  // message_moderation_level - computed: false, optional: true, required: false
  private _messageModerationLevel?: string; 
  public get messageModerationLevel() {
    return this.getStringAttribute('message_moderation_level');
  }
  public set messageModerationLevel(value: string) {
    this._messageModerationLevel = value;
  }
  public resetMessageModerationLevel() {
    this._messageModerationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageModerationLevelInput() {
    return this._messageModerationLevel;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_language - computed: false, optional: true, required: false
  private _primaryLanguage?: string; 
  public get primaryLanguage() {
    return this.getStringAttribute('primary_language');
  }
  public set primaryLanguage(value: string) {
    this._primaryLanguage = value;
  }
  public resetPrimaryLanguage() {
    this._primaryLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLanguageInput() {
    return this._primaryLanguage;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }

  // send_message_deny_notification - computed: false, optional: true, required: false
  private _sendMessageDenyNotification?: boolean | cdktf.IResolvable; 
  public get sendMessageDenyNotification() {
    return this.getBooleanAttribute('send_message_deny_notification');
  }
  public set sendMessageDenyNotification(value: boolean | cdktf.IResolvable) {
    this._sendMessageDenyNotification = value;
  }
  public resetSendMessageDenyNotification() {
    this._sendMessageDenyNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMessageDenyNotificationInput() {
    return this._sendMessageDenyNotification;
  }

  // spam_moderation_level - computed: false, optional: true, required: false
  private _spamModerationLevel?: string; 
  public get spamModerationLevel() {
    return this.getStringAttribute('spam_moderation_level');
  }
  public set spamModerationLevel(value: string) {
    this._spamModerationLevel = value;
  }
  public resetSpamModerationLevel() {
    this._spamModerationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamModerationLevelInput() {
    return this._spamModerationLevel;
  }

  // who_can_assist_content - computed: false, optional: true, required: false
  private _whoCanAssistContent?: string; 
  public get whoCanAssistContent() {
    return this.getStringAttribute('who_can_assist_content');
  }
  public set whoCanAssistContent(value: string) {
    this._whoCanAssistContent = value;
  }
  public resetWhoCanAssistContent() {
    this._whoCanAssistContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanAssistContentInput() {
    return this._whoCanAssistContent;
  }

  // who_can_contact_owner - computed: false, optional: true, required: false
  private _whoCanContactOwner?: string; 
  public get whoCanContactOwner() {
    return this.getStringAttribute('who_can_contact_owner');
  }
  public set whoCanContactOwner(value: string) {
    this._whoCanContactOwner = value;
  }
  public resetWhoCanContactOwner() {
    this._whoCanContactOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanContactOwnerInput() {
    return this._whoCanContactOwner;
  }

  // who_can_discover_group - computed: false, optional: true, required: false
  private _whoCanDiscoverGroup?: string; 
  public get whoCanDiscoverGroup() {
    return this.getStringAttribute('who_can_discover_group');
  }
  public set whoCanDiscoverGroup(value: string) {
    this._whoCanDiscoverGroup = value;
  }
  public resetWhoCanDiscoverGroup() {
    this._whoCanDiscoverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanDiscoverGroupInput() {
    return this._whoCanDiscoverGroup;
  }

  // who_can_join - computed: false, optional: true, required: false
  private _whoCanJoin?: string; 
  public get whoCanJoin() {
    return this.getStringAttribute('who_can_join');
  }
  public set whoCanJoin(value: string) {
    this._whoCanJoin = value;
  }
  public resetWhoCanJoin() {
    this._whoCanJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanJoinInput() {
    return this._whoCanJoin;
  }

  // who_can_leave_group - computed: false, optional: true, required: false
  private _whoCanLeaveGroup?: string; 
  public get whoCanLeaveGroup() {
    return this.getStringAttribute('who_can_leave_group');
  }
  public set whoCanLeaveGroup(value: string) {
    this._whoCanLeaveGroup = value;
  }
  public resetWhoCanLeaveGroup() {
    this._whoCanLeaveGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanLeaveGroupInput() {
    return this._whoCanLeaveGroup;
  }

  // who_can_moderate_content - computed: false, optional: true, required: false
  private _whoCanModerateContent?: string; 
  public get whoCanModerateContent() {
    return this.getStringAttribute('who_can_moderate_content');
  }
  public set whoCanModerateContent(value: string) {
    this._whoCanModerateContent = value;
  }
  public resetWhoCanModerateContent() {
    this._whoCanModerateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanModerateContentInput() {
    return this._whoCanModerateContent;
  }

  // who_can_moderate_members - computed: false, optional: true, required: false
  private _whoCanModerateMembers?: string; 
  public get whoCanModerateMembers() {
    return this.getStringAttribute('who_can_moderate_members');
  }
  public set whoCanModerateMembers(value: string) {
    this._whoCanModerateMembers = value;
  }
  public resetWhoCanModerateMembers() {
    this._whoCanModerateMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanModerateMembersInput() {
    return this._whoCanModerateMembers;
  }

  // who_can_post_message - computed: true, optional: true, required: false
  private _whoCanPostMessage?: string; 
  public get whoCanPostMessage() {
    return this.getStringAttribute('who_can_post_message');
  }
  public set whoCanPostMessage(value: string) {
    this._whoCanPostMessage = value;
  }
  public resetWhoCanPostMessage() {
    this._whoCanPostMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanPostMessageInput() {
    return this._whoCanPostMessage;
  }

  // who_can_view_group - computed: false, optional: true, required: false
  private _whoCanViewGroup?: string; 
  public get whoCanViewGroup() {
    return this.getStringAttribute('who_can_view_group');
  }
  public set whoCanViewGroup(value: string) {
    this._whoCanViewGroup = value;
  }
  public resetWhoCanViewGroup() {
    this._whoCanViewGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanViewGroupInput() {
    return this._whoCanViewGroup;
  }

  // who_can_view_membership - computed: false, optional: true, required: false
  private _whoCanViewMembership?: string; 
  public get whoCanViewMembership() {
    return this.getStringAttribute('who_can_view_membership');
  }
  public set whoCanViewMembership(value: string) {
    this._whoCanViewMembership = value;
  }
  public resetWhoCanViewMembership() {
    this._whoCanViewMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanViewMembershipInput() {
    return this._whoCanViewMembership;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_external_members: cdktf.booleanToTerraform(this._allowExternalMembers),
      allow_web_posting: cdktf.booleanToTerraform(this._allowWebPosting),
      archive_only: cdktf.booleanToTerraform(this._archiveOnly),
      custom_footer_text: cdktf.stringToTerraform(this._customFooterText),
      custom_reply_to: cdktf.stringToTerraform(this._customReplyTo),
      default_message_deny_notification_text: cdktf.stringToTerraform(this._defaultMessageDenyNotificationText),
      email: cdktf.stringToTerraform(this._email),
      enable_collaborative_inbox: cdktf.booleanToTerraform(this._enableCollaborativeInbox),
      include_custom_footer: cdktf.booleanToTerraform(this._includeCustomFooter),
      include_in_global_address_list: cdktf.booleanToTerraform(this._includeInGlobalAddressList),
      is_archived: cdktf.booleanToTerraform(this._isArchived),
      members_can_post_as_the_group: cdktf.booleanToTerraform(this._membersCanPostAsTheGroup),
      message_moderation_level: cdktf.stringToTerraform(this._messageModerationLevel),
      primary_language: cdktf.stringToTerraform(this._primaryLanguage),
      reply_to: cdktf.stringToTerraform(this._replyTo),
      send_message_deny_notification: cdktf.booleanToTerraform(this._sendMessageDenyNotification),
      spam_moderation_level: cdktf.stringToTerraform(this._spamModerationLevel),
      who_can_assist_content: cdktf.stringToTerraform(this._whoCanAssistContent),
      who_can_contact_owner: cdktf.stringToTerraform(this._whoCanContactOwner),
      who_can_discover_group: cdktf.stringToTerraform(this._whoCanDiscoverGroup),
      who_can_join: cdktf.stringToTerraform(this._whoCanJoin),
      who_can_leave_group: cdktf.stringToTerraform(this._whoCanLeaveGroup),
      who_can_moderate_content: cdktf.stringToTerraform(this._whoCanModerateContent),
      who_can_moderate_members: cdktf.stringToTerraform(this._whoCanModerateMembers),
      who_can_post_message: cdktf.stringToTerraform(this._whoCanPostMessage),
      who_can_view_group: cdktf.stringToTerraform(this._whoCanViewGroup),
      who_can_view_membership: cdktf.stringToTerraform(this._whoCanViewMembership),
      timeouts: groupSettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_external_members: {
        value: cdktf.booleanToHclTerraform(this._allowExternalMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_web_posting: {
        value: cdktf.booleanToHclTerraform(this._allowWebPosting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_only: {
        value: cdktf.booleanToHclTerraform(this._archiveOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_footer_text: {
        value: cdktf.stringToHclTerraform(this._customFooterText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_reply_to: {
        value: cdktf.stringToHclTerraform(this._customReplyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_message_deny_notification_text: {
        value: cdktf.stringToHclTerraform(this._defaultMessageDenyNotificationText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_collaborative_inbox: {
        value: cdktf.booleanToHclTerraform(this._enableCollaborativeInbox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_custom_footer: {
        value: cdktf.booleanToHclTerraform(this._includeCustomFooter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_in_global_address_list: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_archived: {
        value: cdktf.booleanToHclTerraform(this._isArchived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      members_can_post_as_the_group: {
        value: cdktf.booleanToHclTerraform(this._membersCanPostAsTheGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message_moderation_level: {
        value: cdktf.stringToHclTerraform(this._messageModerationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_language: {
        value: cdktf.stringToHclTerraform(this._primaryLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reply_to: {
        value: cdktf.stringToHclTerraform(this._replyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_message_deny_notification: {
        value: cdktf.booleanToHclTerraform(this._sendMessageDenyNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spam_moderation_level: {
        value: cdktf.stringToHclTerraform(this._spamModerationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_assist_content: {
        value: cdktf.stringToHclTerraform(this._whoCanAssistContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_contact_owner: {
        value: cdktf.stringToHclTerraform(this._whoCanContactOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_discover_group: {
        value: cdktf.stringToHclTerraform(this._whoCanDiscoverGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_join: {
        value: cdktf.stringToHclTerraform(this._whoCanJoin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_leave_group: {
        value: cdktf.stringToHclTerraform(this._whoCanLeaveGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_moderate_content: {
        value: cdktf.stringToHclTerraform(this._whoCanModerateContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_moderate_members: {
        value: cdktf.stringToHclTerraform(this._whoCanModerateMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_post_message: {
        value: cdktf.stringToHclTerraform(this._whoCanPostMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_view_group: {
        value: cdktf.stringToHclTerraform(this._whoCanViewGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_view_membership: {
        value: cdktf.stringToHclTerraform(this._whoCanViewMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: groupSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
