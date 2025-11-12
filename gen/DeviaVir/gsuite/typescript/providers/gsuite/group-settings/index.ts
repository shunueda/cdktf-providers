// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#allow_external_members GroupSettings#allow_external_members}
  */
  readonly allowExternalMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#allow_google_communication GroupSettings#allow_google_communication}
  */
  readonly allowGoogleCommunication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#allow_web_posting GroupSettings#allow_web_posting}
  */
  readonly allowWebPosting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#archive_only GroupSettings#archive_only}
  */
  readonly archiveOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#custom_footer_text GroupSettings#custom_footer_text}
  */
  readonly customFooterText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#custom_reply_to GroupSettings#custom_reply_to}
  */
  readonly customReplyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#email GroupSettings#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#favorite_replies_on_top GroupSettings#favorite_replies_on_top}
  */
  readonly favoriteRepliesOnTop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#id GroupSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#include_custom_footer GroupSettings#include_custom_footer}
  */
  readonly includeCustomFooter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#include_in_global_address_list GroupSettings#include_in_global_address_list}
  */
  readonly includeInGlobalAddressList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#max_message_bytes GroupSettings#max_message_bytes}
  */
  readonly maxMessageBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#members_can_post_as_the_group GroupSettings#members_can_post_as_the_group}
  */
  readonly membersCanPostAsTheGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#message_display_font GroupSettings#message_display_font}
  */
  readonly messageDisplayFont?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#message_moderation_level GroupSettings#message_moderation_level}
  */
  readonly messageModerationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#primary_language GroupSettings#primary_language}
  */
  readonly primaryLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#reply_to GroupSettings#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#send_message_deny_notification GroupSettings#send_message_deny_notification}
  */
  readonly sendMessageDenyNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#show_in_group_directory GroupSettings#show_in_group_directory}
  */
  readonly showInGroupDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#spam_moderation_level GroupSettings#spam_moderation_level}
  */
  readonly spamModerationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_add GroupSettings#who_can_add}
  */
  readonly whoCanAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_add_references GroupSettings#who_can_add_references}
  */
  readonly whoCanAddReferences?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_approve_members GroupSettings#who_can_approve_members}
  */
  readonly whoCanApproveMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_approve_messages GroupSettings#who_can_approve_messages}
  */
  readonly whoCanApproveMessages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_assign_topics GroupSettings#who_can_assign_topics}
  */
  readonly whoCanAssignTopics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_assist_content GroupSettings#who_can_assist_content}
  */
  readonly whoCanAssistContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_ban_users GroupSettings#who_can_ban_users}
  */
  readonly whoCanBanUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_contact_owner GroupSettings#who_can_contact_owner}
  */
  readonly whoCanContactOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_delete_any_post GroupSettings#who_can_delete_any_post}
  */
  readonly whoCanDeleteAnyPost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_delete_topics GroupSettings#who_can_delete_topics}
  */
  readonly whoCanDeleteTopics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_discover_group GroupSettings#who_can_discover_group}
  */
  readonly whoCanDiscoverGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_enter_free_form_tags GroupSettings#who_can_enter_free_form_tags}
  */
  readonly whoCanEnterFreeFormTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_hide_abuse GroupSettings#who_can_hide_abuse}
  */
  readonly whoCanHideAbuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_invite GroupSettings#who_can_invite}
  */
  readonly whoCanInvite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_join GroupSettings#who_can_join}
  */
  readonly whoCanJoin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_leave_group GroupSettings#who_can_leave_group}
  */
  readonly whoCanLeaveGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_lock_topics GroupSettings#who_can_lock_topics}
  */
  readonly whoCanLockTopics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_make_topics_sticky GroupSettings#who_can_make_topics_sticky}
  */
  readonly whoCanMakeTopicsSticky?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_mark_duplicate GroupSettings#who_can_mark_duplicate}
  */
  readonly whoCanMarkDuplicate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_mark_favorite_reply_on_any_topic GroupSettings#who_can_mark_favorite_reply_on_any_topic}
  */
  readonly whoCanMarkFavoriteReplyOnAnyTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_mark_favorite_reply_on_own_topic GroupSettings#who_can_mark_favorite_reply_on_own_topic}
  */
  readonly whoCanMarkFavoriteReplyOnOwnTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_mark_no_response_needed GroupSettings#who_can_mark_no_response_needed}
  */
  readonly whoCanMarkNoResponseNeeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_moderate_content GroupSettings#who_can_moderate_content}
  */
  readonly whoCanModerateContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_moderate_members GroupSettings#who_can_moderate_members}
  */
  readonly whoCanModerateMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_modify_members GroupSettings#who_can_modify_members}
  */
  readonly whoCanModifyMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_modify_tags_and_categories GroupSettings#who_can_modify_tags_and_categories}
  */
  readonly whoCanModifyTagsAndCategories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_move_topics_in GroupSettings#who_can_move_topics_in}
  */
  readonly whoCanMoveTopicsIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_move_topics_out GroupSettings#who_can_move_topics_out}
  */
  readonly whoCanMoveTopicsOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_post_announcements GroupSettings#who_can_post_announcements}
  */
  readonly whoCanPostAnnouncements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_post_message GroupSettings#who_can_post_message}
  */
  readonly whoCanPostMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_take_topics GroupSettings#who_can_take_topics}
  */
  readonly whoCanTakeTopics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_unassign_topic GroupSettings#who_can_unassign_topic}
  */
  readonly whoCanUnassignTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_unmark_favorite_reply_on_any_topic GroupSettings#who_can_unmark_favorite_reply_on_any_topic}
  */
  readonly whoCanUnmarkFavoriteReplyOnAnyTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_view_group GroupSettings#who_can_view_group}
  */
  readonly whoCanViewGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#who_can_view_membership GroupSettings#who_can_view_membership}
  */
  readonly whoCanViewMembership?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings gsuite_group_settings}
*/
export class GroupSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite_group_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSettings to import
  * @param importFromId The id of the existing GroupSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite_group_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/group_settings gsuite_group_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'gsuite_group_settings',
      terraformGeneratorMetadata: {
        providerName: 'gsuite',
        providerVersion: '0.1.62',
        providerVersionConstraint: '0.1.62'
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
    this._allowGoogleCommunication = config.allowGoogleCommunication;
    this._allowWebPosting = config.allowWebPosting;
    this._archiveOnly = config.archiveOnly;
    this._customFooterText = config.customFooterText;
    this._customReplyTo = config.customReplyTo;
    this._email = config.email;
    this._favoriteRepliesOnTop = config.favoriteRepliesOnTop;
    this._id = config.id;
    this._includeCustomFooter = config.includeCustomFooter;
    this._includeInGlobalAddressList = config.includeInGlobalAddressList;
    this._maxMessageBytes = config.maxMessageBytes;
    this._membersCanPostAsTheGroup = config.membersCanPostAsTheGroup;
    this._messageDisplayFont = config.messageDisplayFont;
    this._messageModerationLevel = config.messageModerationLevel;
    this._primaryLanguage = config.primaryLanguage;
    this._replyTo = config.replyTo;
    this._sendMessageDenyNotification = config.sendMessageDenyNotification;
    this._showInGroupDirectory = config.showInGroupDirectory;
    this._spamModerationLevel = config.spamModerationLevel;
    this._whoCanAdd = config.whoCanAdd;
    this._whoCanAddReferences = config.whoCanAddReferences;
    this._whoCanApproveMembers = config.whoCanApproveMembers;
    this._whoCanApproveMessages = config.whoCanApproveMessages;
    this._whoCanAssignTopics = config.whoCanAssignTopics;
    this._whoCanAssistContent = config.whoCanAssistContent;
    this._whoCanBanUsers = config.whoCanBanUsers;
    this._whoCanContactOwner = config.whoCanContactOwner;
    this._whoCanDeleteAnyPost = config.whoCanDeleteAnyPost;
    this._whoCanDeleteTopics = config.whoCanDeleteTopics;
    this._whoCanDiscoverGroup = config.whoCanDiscoverGroup;
    this._whoCanEnterFreeFormTags = config.whoCanEnterFreeFormTags;
    this._whoCanHideAbuse = config.whoCanHideAbuse;
    this._whoCanInvite = config.whoCanInvite;
    this._whoCanJoin = config.whoCanJoin;
    this._whoCanLeaveGroup = config.whoCanLeaveGroup;
    this._whoCanLockTopics = config.whoCanLockTopics;
    this._whoCanMakeTopicsSticky = config.whoCanMakeTopicsSticky;
    this._whoCanMarkDuplicate = config.whoCanMarkDuplicate;
    this._whoCanMarkFavoriteReplyOnAnyTopic = config.whoCanMarkFavoriteReplyOnAnyTopic;
    this._whoCanMarkFavoriteReplyOnOwnTopic = config.whoCanMarkFavoriteReplyOnOwnTopic;
    this._whoCanMarkNoResponseNeeded = config.whoCanMarkNoResponseNeeded;
    this._whoCanModerateContent = config.whoCanModerateContent;
    this._whoCanModerateMembers = config.whoCanModerateMembers;
    this._whoCanModifyMembers = config.whoCanModifyMembers;
    this._whoCanModifyTagsAndCategories = config.whoCanModifyTagsAndCategories;
    this._whoCanMoveTopicsIn = config.whoCanMoveTopicsIn;
    this._whoCanMoveTopicsOut = config.whoCanMoveTopicsOut;
    this._whoCanPostAnnouncements = config.whoCanPostAnnouncements;
    this._whoCanPostMessage = config.whoCanPostMessage;
    this._whoCanTakeTopics = config.whoCanTakeTopics;
    this._whoCanUnassignTopic = config.whoCanUnassignTopic;
    this._whoCanUnmarkFavoriteReplyOnAnyTopic = config.whoCanUnmarkFavoriteReplyOnAnyTopic;
    this._whoCanViewGroup = config.whoCanViewGroup;
    this._whoCanViewMembership = config.whoCanViewMembership;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_members - computed: false, optional: true, required: false
  private _allowExternalMembers?: string; 
  public get allowExternalMembers() {
    return this.getStringAttribute('allow_external_members');
  }
  public set allowExternalMembers(value: string) {
    this._allowExternalMembers = value;
  }
  public resetAllowExternalMembers() {
    this._allowExternalMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalMembersInput() {
    return this._allowExternalMembers;
  }

  // allow_google_communication - computed: false, optional: true, required: false
  private _allowGoogleCommunication?: string; 
  public get allowGoogleCommunication() {
    return this.getStringAttribute('allow_google_communication');
  }
  public set allowGoogleCommunication(value: string) {
    this._allowGoogleCommunication = value;
  }
  public resetAllowGoogleCommunication() {
    this._allowGoogleCommunication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoogleCommunicationInput() {
    return this._allowGoogleCommunication;
  }

  // allow_web_posting - computed: false, optional: true, required: false
  private _allowWebPosting?: string; 
  public get allowWebPosting() {
    return this.getStringAttribute('allow_web_posting');
  }
  public set allowWebPosting(value: string) {
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
  private _archiveOnly?: string; 
  public get archiveOnly() {
    return this.getStringAttribute('archive_only');
  }
  public set archiveOnly(value: string) {
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

  // favorite_replies_on_top - computed: false, optional: true, required: false
  private _favoriteRepliesOnTop?: string; 
  public get favoriteRepliesOnTop() {
    return this.getStringAttribute('favorite_replies_on_top');
  }
  public set favoriteRepliesOnTop(value: string) {
    this._favoriteRepliesOnTop = value;
  }
  public resetFavoriteRepliesOnTop() {
    this._favoriteRepliesOnTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favoriteRepliesOnTopInput() {
    return this._favoriteRepliesOnTop;
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

  // include_custom_footer - computed: false, optional: true, required: false
  private _includeCustomFooter?: string; 
  public get includeCustomFooter() {
    return this.getStringAttribute('include_custom_footer');
  }
  public set includeCustomFooter(value: string) {
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
  private _includeInGlobalAddressList?: string; 
  public get includeInGlobalAddressList() {
    return this.getStringAttribute('include_in_global_address_list');
  }
  public set includeInGlobalAddressList(value: string) {
    this._includeInGlobalAddressList = value;
  }
  public resetIncludeInGlobalAddressList() {
    this._includeInGlobalAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalAddressListInput() {
    return this._includeInGlobalAddressList;
  }

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getStringAttribute('is_archived');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // max_message_bytes - computed: false, optional: true, required: false
  private _maxMessageBytes?: number; 
  public get maxMessageBytes() {
    return this.getNumberAttribute('max_message_bytes');
  }
  public set maxMessageBytes(value: number) {
    this._maxMessageBytes = value;
  }
  public resetMaxMessageBytes() {
    this._maxMessageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageBytesInput() {
    return this._maxMessageBytes;
  }

  // members_can_post_as_the_group - computed: false, optional: true, required: false
  private _membersCanPostAsTheGroup?: string; 
  public get membersCanPostAsTheGroup() {
    return this.getStringAttribute('members_can_post_as_the_group');
  }
  public set membersCanPostAsTheGroup(value: string) {
    this._membersCanPostAsTheGroup = value;
  }
  public resetMembersCanPostAsTheGroup() {
    this._membersCanPostAsTheGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersCanPostAsTheGroupInput() {
    return this._membersCanPostAsTheGroup;
  }

  // message_display_font - computed: false, optional: true, required: false
  private _messageDisplayFont?: string; 
  public get messageDisplayFont() {
    return this.getStringAttribute('message_display_font');
  }
  public set messageDisplayFont(value: string) {
    this._messageDisplayFont = value;
  }
  public resetMessageDisplayFont() {
    this._messageDisplayFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDisplayFontInput() {
    return this._messageDisplayFont;
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
  private _sendMessageDenyNotification?: string; 
  public get sendMessageDenyNotification() {
    return this.getStringAttribute('send_message_deny_notification');
  }
  public set sendMessageDenyNotification(value: string) {
    this._sendMessageDenyNotification = value;
  }
  public resetSendMessageDenyNotification() {
    this._sendMessageDenyNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMessageDenyNotificationInput() {
    return this._sendMessageDenyNotification;
  }

  // show_in_group_directory - computed: false, optional: true, required: false
  private _showInGroupDirectory?: string; 
  public get showInGroupDirectory() {
    return this.getStringAttribute('show_in_group_directory');
  }
  public set showInGroupDirectory(value: string) {
    this._showInGroupDirectory = value;
  }
  public resetShowInGroupDirectory() {
    this._showInGroupDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInGroupDirectoryInput() {
    return this._showInGroupDirectory;
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

  // who_can_add - computed: false, optional: true, required: false
  private _whoCanAdd?: string; 
  public get whoCanAdd() {
    return this.getStringAttribute('who_can_add');
  }
  public set whoCanAdd(value: string) {
    this._whoCanAdd = value;
  }
  public resetWhoCanAdd() {
    this._whoCanAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanAddInput() {
    return this._whoCanAdd;
  }

  // who_can_add_references - computed: false, optional: true, required: false
  private _whoCanAddReferences?: string; 
  public get whoCanAddReferences() {
    return this.getStringAttribute('who_can_add_references');
  }
  public set whoCanAddReferences(value: string) {
    this._whoCanAddReferences = value;
  }
  public resetWhoCanAddReferences() {
    this._whoCanAddReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanAddReferencesInput() {
    return this._whoCanAddReferences;
  }

  // who_can_approve_members - computed: false, optional: true, required: false
  private _whoCanApproveMembers?: string; 
  public get whoCanApproveMembers() {
    return this.getStringAttribute('who_can_approve_members');
  }
  public set whoCanApproveMembers(value: string) {
    this._whoCanApproveMembers = value;
  }
  public resetWhoCanApproveMembers() {
    this._whoCanApproveMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanApproveMembersInput() {
    return this._whoCanApproveMembers;
  }

  // who_can_approve_messages - computed: false, optional: true, required: false
  private _whoCanApproveMessages?: string; 
  public get whoCanApproveMessages() {
    return this.getStringAttribute('who_can_approve_messages');
  }
  public set whoCanApproveMessages(value: string) {
    this._whoCanApproveMessages = value;
  }
  public resetWhoCanApproveMessages() {
    this._whoCanApproveMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanApproveMessagesInput() {
    return this._whoCanApproveMessages;
  }

  // who_can_assign_topics - computed: false, optional: true, required: false
  private _whoCanAssignTopics?: string; 
  public get whoCanAssignTopics() {
    return this.getStringAttribute('who_can_assign_topics');
  }
  public set whoCanAssignTopics(value: string) {
    this._whoCanAssignTopics = value;
  }
  public resetWhoCanAssignTopics() {
    this._whoCanAssignTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanAssignTopicsInput() {
    return this._whoCanAssignTopics;
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

  // who_can_ban_users - computed: false, optional: true, required: false
  private _whoCanBanUsers?: string; 
  public get whoCanBanUsers() {
    return this.getStringAttribute('who_can_ban_users');
  }
  public set whoCanBanUsers(value: string) {
    this._whoCanBanUsers = value;
  }
  public resetWhoCanBanUsers() {
    this._whoCanBanUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanBanUsersInput() {
    return this._whoCanBanUsers;
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

  // who_can_delete_any_post - computed: false, optional: true, required: false
  private _whoCanDeleteAnyPost?: string; 
  public get whoCanDeleteAnyPost() {
    return this.getStringAttribute('who_can_delete_any_post');
  }
  public set whoCanDeleteAnyPost(value: string) {
    this._whoCanDeleteAnyPost = value;
  }
  public resetWhoCanDeleteAnyPost() {
    this._whoCanDeleteAnyPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanDeleteAnyPostInput() {
    return this._whoCanDeleteAnyPost;
  }

  // who_can_delete_topics - computed: false, optional: true, required: false
  private _whoCanDeleteTopics?: string; 
  public get whoCanDeleteTopics() {
    return this.getStringAttribute('who_can_delete_topics');
  }
  public set whoCanDeleteTopics(value: string) {
    this._whoCanDeleteTopics = value;
  }
  public resetWhoCanDeleteTopics() {
    this._whoCanDeleteTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanDeleteTopicsInput() {
    return this._whoCanDeleteTopics;
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

  // who_can_enter_free_form_tags - computed: false, optional: true, required: false
  private _whoCanEnterFreeFormTags?: string; 
  public get whoCanEnterFreeFormTags() {
    return this.getStringAttribute('who_can_enter_free_form_tags');
  }
  public set whoCanEnterFreeFormTags(value: string) {
    this._whoCanEnterFreeFormTags = value;
  }
  public resetWhoCanEnterFreeFormTags() {
    this._whoCanEnterFreeFormTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanEnterFreeFormTagsInput() {
    return this._whoCanEnterFreeFormTags;
  }

  // who_can_hide_abuse - computed: false, optional: true, required: false
  private _whoCanHideAbuse?: string; 
  public get whoCanHideAbuse() {
    return this.getStringAttribute('who_can_hide_abuse');
  }
  public set whoCanHideAbuse(value: string) {
    this._whoCanHideAbuse = value;
  }
  public resetWhoCanHideAbuse() {
    this._whoCanHideAbuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanHideAbuseInput() {
    return this._whoCanHideAbuse;
  }

  // who_can_invite - computed: false, optional: true, required: false
  private _whoCanInvite?: string; 
  public get whoCanInvite() {
    return this.getStringAttribute('who_can_invite');
  }
  public set whoCanInvite(value: string) {
    this._whoCanInvite = value;
  }
  public resetWhoCanInvite() {
    this._whoCanInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanInviteInput() {
    return this._whoCanInvite;
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

  // who_can_lock_topics - computed: false, optional: true, required: false
  private _whoCanLockTopics?: string; 
  public get whoCanLockTopics() {
    return this.getStringAttribute('who_can_lock_topics');
  }
  public set whoCanLockTopics(value: string) {
    this._whoCanLockTopics = value;
  }
  public resetWhoCanLockTopics() {
    this._whoCanLockTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanLockTopicsInput() {
    return this._whoCanLockTopics;
  }

  // who_can_make_topics_sticky - computed: false, optional: true, required: false
  private _whoCanMakeTopicsSticky?: string; 
  public get whoCanMakeTopicsSticky() {
    return this.getStringAttribute('who_can_make_topics_sticky');
  }
  public set whoCanMakeTopicsSticky(value: string) {
    this._whoCanMakeTopicsSticky = value;
  }
  public resetWhoCanMakeTopicsSticky() {
    this._whoCanMakeTopicsSticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMakeTopicsStickyInput() {
    return this._whoCanMakeTopicsSticky;
  }

  // who_can_mark_duplicate - computed: false, optional: true, required: false
  private _whoCanMarkDuplicate?: string; 
  public get whoCanMarkDuplicate() {
    return this.getStringAttribute('who_can_mark_duplicate');
  }
  public set whoCanMarkDuplicate(value: string) {
    this._whoCanMarkDuplicate = value;
  }
  public resetWhoCanMarkDuplicate() {
    this._whoCanMarkDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMarkDuplicateInput() {
    return this._whoCanMarkDuplicate;
  }

  // who_can_mark_favorite_reply_on_any_topic - computed: false, optional: true, required: false
  private _whoCanMarkFavoriteReplyOnAnyTopic?: string; 
  public get whoCanMarkFavoriteReplyOnAnyTopic() {
    return this.getStringAttribute('who_can_mark_favorite_reply_on_any_topic');
  }
  public set whoCanMarkFavoriteReplyOnAnyTopic(value: string) {
    this._whoCanMarkFavoriteReplyOnAnyTopic = value;
  }
  public resetWhoCanMarkFavoriteReplyOnAnyTopic() {
    this._whoCanMarkFavoriteReplyOnAnyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMarkFavoriteReplyOnAnyTopicInput() {
    return this._whoCanMarkFavoriteReplyOnAnyTopic;
  }

  // who_can_mark_favorite_reply_on_own_topic - computed: false, optional: true, required: false
  private _whoCanMarkFavoriteReplyOnOwnTopic?: string; 
  public get whoCanMarkFavoriteReplyOnOwnTopic() {
    return this.getStringAttribute('who_can_mark_favorite_reply_on_own_topic');
  }
  public set whoCanMarkFavoriteReplyOnOwnTopic(value: string) {
    this._whoCanMarkFavoriteReplyOnOwnTopic = value;
  }
  public resetWhoCanMarkFavoriteReplyOnOwnTopic() {
    this._whoCanMarkFavoriteReplyOnOwnTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMarkFavoriteReplyOnOwnTopicInput() {
    return this._whoCanMarkFavoriteReplyOnOwnTopic;
  }

  // who_can_mark_no_response_needed - computed: false, optional: true, required: false
  private _whoCanMarkNoResponseNeeded?: string; 
  public get whoCanMarkNoResponseNeeded() {
    return this.getStringAttribute('who_can_mark_no_response_needed');
  }
  public set whoCanMarkNoResponseNeeded(value: string) {
    this._whoCanMarkNoResponseNeeded = value;
  }
  public resetWhoCanMarkNoResponseNeeded() {
    this._whoCanMarkNoResponseNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMarkNoResponseNeededInput() {
    return this._whoCanMarkNoResponseNeeded;
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

  // who_can_modify_members - computed: false, optional: true, required: false
  private _whoCanModifyMembers?: string; 
  public get whoCanModifyMembers() {
    return this.getStringAttribute('who_can_modify_members');
  }
  public set whoCanModifyMembers(value: string) {
    this._whoCanModifyMembers = value;
  }
  public resetWhoCanModifyMembers() {
    this._whoCanModifyMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanModifyMembersInput() {
    return this._whoCanModifyMembers;
  }

  // who_can_modify_tags_and_categories - computed: false, optional: true, required: false
  private _whoCanModifyTagsAndCategories?: string; 
  public get whoCanModifyTagsAndCategories() {
    return this.getStringAttribute('who_can_modify_tags_and_categories');
  }
  public set whoCanModifyTagsAndCategories(value: string) {
    this._whoCanModifyTagsAndCategories = value;
  }
  public resetWhoCanModifyTagsAndCategories() {
    this._whoCanModifyTagsAndCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanModifyTagsAndCategoriesInput() {
    return this._whoCanModifyTagsAndCategories;
  }

  // who_can_move_topics_in - computed: false, optional: true, required: false
  private _whoCanMoveTopicsIn?: string; 
  public get whoCanMoveTopicsIn() {
    return this.getStringAttribute('who_can_move_topics_in');
  }
  public set whoCanMoveTopicsIn(value: string) {
    this._whoCanMoveTopicsIn = value;
  }
  public resetWhoCanMoveTopicsIn() {
    this._whoCanMoveTopicsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMoveTopicsInInput() {
    return this._whoCanMoveTopicsIn;
  }

  // who_can_move_topics_out - computed: false, optional: true, required: false
  private _whoCanMoveTopicsOut?: string; 
  public get whoCanMoveTopicsOut() {
    return this.getStringAttribute('who_can_move_topics_out');
  }
  public set whoCanMoveTopicsOut(value: string) {
    this._whoCanMoveTopicsOut = value;
  }
  public resetWhoCanMoveTopicsOut() {
    this._whoCanMoveTopicsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanMoveTopicsOutInput() {
    return this._whoCanMoveTopicsOut;
  }

  // who_can_post_announcements - computed: false, optional: true, required: false
  private _whoCanPostAnnouncements?: string; 
  public get whoCanPostAnnouncements() {
    return this.getStringAttribute('who_can_post_announcements');
  }
  public set whoCanPostAnnouncements(value: string) {
    this._whoCanPostAnnouncements = value;
  }
  public resetWhoCanPostAnnouncements() {
    this._whoCanPostAnnouncements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanPostAnnouncementsInput() {
    return this._whoCanPostAnnouncements;
  }

  // who_can_post_message - computed: false, optional: true, required: false
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

  // who_can_take_topics - computed: false, optional: true, required: false
  private _whoCanTakeTopics?: string; 
  public get whoCanTakeTopics() {
    return this.getStringAttribute('who_can_take_topics');
  }
  public set whoCanTakeTopics(value: string) {
    this._whoCanTakeTopics = value;
  }
  public resetWhoCanTakeTopics() {
    this._whoCanTakeTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanTakeTopicsInput() {
    return this._whoCanTakeTopics;
  }

  // who_can_unassign_topic - computed: false, optional: true, required: false
  private _whoCanUnassignTopic?: string; 
  public get whoCanUnassignTopic() {
    return this.getStringAttribute('who_can_unassign_topic');
  }
  public set whoCanUnassignTopic(value: string) {
    this._whoCanUnassignTopic = value;
  }
  public resetWhoCanUnassignTopic() {
    this._whoCanUnassignTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanUnassignTopicInput() {
    return this._whoCanUnassignTopic;
  }

  // who_can_unmark_favorite_reply_on_any_topic - computed: false, optional: true, required: false
  private _whoCanUnmarkFavoriteReplyOnAnyTopic?: string; 
  public get whoCanUnmarkFavoriteReplyOnAnyTopic() {
    return this.getStringAttribute('who_can_unmark_favorite_reply_on_any_topic');
  }
  public set whoCanUnmarkFavoriteReplyOnAnyTopic(value: string) {
    this._whoCanUnmarkFavoriteReplyOnAnyTopic = value;
  }
  public resetWhoCanUnmarkFavoriteReplyOnAnyTopic() {
    this._whoCanUnmarkFavoriteReplyOnAnyTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whoCanUnmarkFavoriteReplyOnAnyTopicInput() {
    return this._whoCanUnmarkFavoriteReplyOnAnyTopic;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_external_members: cdktf.stringToTerraform(this._allowExternalMembers),
      allow_google_communication: cdktf.stringToTerraform(this._allowGoogleCommunication),
      allow_web_posting: cdktf.stringToTerraform(this._allowWebPosting),
      archive_only: cdktf.stringToTerraform(this._archiveOnly),
      custom_footer_text: cdktf.stringToTerraform(this._customFooterText),
      custom_reply_to: cdktf.stringToTerraform(this._customReplyTo),
      email: cdktf.stringToTerraform(this._email),
      favorite_replies_on_top: cdktf.stringToTerraform(this._favoriteRepliesOnTop),
      id: cdktf.stringToTerraform(this._id),
      include_custom_footer: cdktf.stringToTerraform(this._includeCustomFooter),
      include_in_global_address_list: cdktf.stringToTerraform(this._includeInGlobalAddressList),
      max_message_bytes: cdktf.numberToTerraform(this._maxMessageBytes),
      members_can_post_as_the_group: cdktf.stringToTerraform(this._membersCanPostAsTheGroup),
      message_display_font: cdktf.stringToTerraform(this._messageDisplayFont),
      message_moderation_level: cdktf.stringToTerraform(this._messageModerationLevel),
      primary_language: cdktf.stringToTerraform(this._primaryLanguage),
      reply_to: cdktf.stringToTerraform(this._replyTo),
      send_message_deny_notification: cdktf.stringToTerraform(this._sendMessageDenyNotification),
      show_in_group_directory: cdktf.stringToTerraform(this._showInGroupDirectory),
      spam_moderation_level: cdktf.stringToTerraform(this._spamModerationLevel),
      who_can_add: cdktf.stringToTerraform(this._whoCanAdd),
      who_can_add_references: cdktf.stringToTerraform(this._whoCanAddReferences),
      who_can_approve_members: cdktf.stringToTerraform(this._whoCanApproveMembers),
      who_can_approve_messages: cdktf.stringToTerraform(this._whoCanApproveMessages),
      who_can_assign_topics: cdktf.stringToTerraform(this._whoCanAssignTopics),
      who_can_assist_content: cdktf.stringToTerraform(this._whoCanAssistContent),
      who_can_ban_users: cdktf.stringToTerraform(this._whoCanBanUsers),
      who_can_contact_owner: cdktf.stringToTerraform(this._whoCanContactOwner),
      who_can_delete_any_post: cdktf.stringToTerraform(this._whoCanDeleteAnyPost),
      who_can_delete_topics: cdktf.stringToTerraform(this._whoCanDeleteTopics),
      who_can_discover_group: cdktf.stringToTerraform(this._whoCanDiscoverGroup),
      who_can_enter_free_form_tags: cdktf.stringToTerraform(this._whoCanEnterFreeFormTags),
      who_can_hide_abuse: cdktf.stringToTerraform(this._whoCanHideAbuse),
      who_can_invite: cdktf.stringToTerraform(this._whoCanInvite),
      who_can_join: cdktf.stringToTerraform(this._whoCanJoin),
      who_can_leave_group: cdktf.stringToTerraform(this._whoCanLeaveGroup),
      who_can_lock_topics: cdktf.stringToTerraform(this._whoCanLockTopics),
      who_can_make_topics_sticky: cdktf.stringToTerraform(this._whoCanMakeTopicsSticky),
      who_can_mark_duplicate: cdktf.stringToTerraform(this._whoCanMarkDuplicate),
      who_can_mark_favorite_reply_on_any_topic: cdktf.stringToTerraform(this._whoCanMarkFavoriteReplyOnAnyTopic),
      who_can_mark_favorite_reply_on_own_topic: cdktf.stringToTerraform(this._whoCanMarkFavoriteReplyOnOwnTopic),
      who_can_mark_no_response_needed: cdktf.stringToTerraform(this._whoCanMarkNoResponseNeeded),
      who_can_moderate_content: cdktf.stringToTerraform(this._whoCanModerateContent),
      who_can_moderate_members: cdktf.stringToTerraform(this._whoCanModerateMembers),
      who_can_modify_members: cdktf.stringToTerraform(this._whoCanModifyMembers),
      who_can_modify_tags_and_categories: cdktf.stringToTerraform(this._whoCanModifyTagsAndCategories),
      who_can_move_topics_in: cdktf.stringToTerraform(this._whoCanMoveTopicsIn),
      who_can_move_topics_out: cdktf.stringToTerraform(this._whoCanMoveTopicsOut),
      who_can_post_announcements: cdktf.stringToTerraform(this._whoCanPostAnnouncements),
      who_can_post_message: cdktf.stringToTerraform(this._whoCanPostMessage),
      who_can_take_topics: cdktf.stringToTerraform(this._whoCanTakeTopics),
      who_can_unassign_topic: cdktf.stringToTerraform(this._whoCanUnassignTopic),
      who_can_unmark_favorite_reply_on_any_topic: cdktf.stringToTerraform(this._whoCanUnmarkFavoriteReplyOnAnyTopic),
      who_can_view_group: cdktf.stringToTerraform(this._whoCanViewGroup),
      who_can_view_membership: cdktf.stringToTerraform(this._whoCanViewMembership),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_external_members: {
        value: cdktf.stringToHclTerraform(this._allowExternalMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_google_communication: {
        value: cdktf.stringToHclTerraform(this._allowGoogleCommunication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_web_posting: {
        value: cdktf.stringToHclTerraform(this._allowWebPosting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_only: {
        value: cdktf.stringToHclTerraform(this._archiveOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      favorite_replies_on_top: {
        value: cdktf.stringToHclTerraform(this._favoriteRepliesOnTop),
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
      include_custom_footer: {
        value: cdktf.stringToHclTerraform(this._includeCustomFooter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_global_address_list: {
        value: cdktf.stringToHclTerraform(this._includeInGlobalAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_bytes: {
        value: cdktf.numberToHclTerraform(this._maxMessageBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      members_can_post_as_the_group: {
        value: cdktf.stringToHclTerraform(this._membersCanPostAsTheGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_display_font: {
        value: cdktf.stringToHclTerraform(this._messageDisplayFont),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.stringToHclTerraform(this._sendMessageDenyNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_in_group_directory: {
        value: cdktf.stringToHclTerraform(this._showInGroupDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_moderation_level: {
        value: cdktf.stringToHclTerraform(this._spamModerationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_add: {
        value: cdktf.stringToHclTerraform(this._whoCanAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_add_references: {
        value: cdktf.stringToHclTerraform(this._whoCanAddReferences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_approve_members: {
        value: cdktf.stringToHclTerraform(this._whoCanApproveMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_approve_messages: {
        value: cdktf.stringToHclTerraform(this._whoCanApproveMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_assign_topics: {
        value: cdktf.stringToHclTerraform(this._whoCanAssignTopics),
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
      who_can_ban_users: {
        value: cdktf.stringToHclTerraform(this._whoCanBanUsers),
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
      who_can_delete_any_post: {
        value: cdktf.stringToHclTerraform(this._whoCanDeleteAnyPost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_delete_topics: {
        value: cdktf.stringToHclTerraform(this._whoCanDeleteTopics),
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
      who_can_enter_free_form_tags: {
        value: cdktf.stringToHclTerraform(this._whoCanEnterFreeFormTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_hide_abuse: {
        value: cdktf.stringToHclTerraform(this._whoCanHideAbuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_invite: {
        value: cdktf.stringToHclTerraform(this._whoCanInvite),
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
      who_can_lock_topics: {
        value: cdktf.stringToHclTerraform(this._whoCanLockTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_make_topics_sticky: {
        value: cdktf.stringToHclTerraform(this._whoCanMakeTopicsSticky),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_mark_duplicate: {
        value: cdktf.stringToHclTerraform(this._whoCanMarkDuplicate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_mark_favorite_reply_on_any_topic: {
        value: cdktf.stringToHclTerraform(this._whoCanMarkFavoriteReplyOnAnyTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_mark_favorite_reply_on_own_topic: {
        value: cdktf.stringToHclTerraform(this._whoCanMarkFavoriteReplyOnOwnTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_mark_no_response_needed: {
        value: cdktf.stringToHclTerraform(this._whoCanMarkNoResponseNeeded),
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
      who_can_modify_members: {
        value: cdktf.stringToHclTerraform(this._whoCanModifyMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_modify_tags_and_categories: {
        value: cdktf.stringToHclTerraform(this._whoCanModifyTagsAndCategories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_move_topics_in: {
        value: cdktf.stringToHclTerraform(this._whoCanMoveTopicsIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_move_topics_out: {
        value: cdktf.stringToHclTerraform(this._whoCanMoveTopicsOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_post_announcements: {
        value: cdktf.stringToHclTerraform(this._whoCanPostAnnouncements),
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
      who_can_take_topics: {
        value: cdktf.stringToHclTerraform(this._whoCanTakeTopics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_unassign_topic: {
        value: cdktf.stringToHclTerraform(this._whoCanUnassignTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      who_can_unmark_favorite_reply_on_any_topic: {
        value: cdktf.stringToHclTerraform(this._whoCanUnmarkFavoriteReplyOnAnyTopic),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
