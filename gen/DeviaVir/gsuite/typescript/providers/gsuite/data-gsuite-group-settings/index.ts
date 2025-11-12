// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGsuiteGroupSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings#email DataGsuiteGroupSettings#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings#id DataGsuiteGroupSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings gsuite_group_settings}
*/
export class DataGsuiteGroupSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite_group_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGsuiteGroupSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGsuiteGroupSettings to import
  * @param importFromId The id of the existing DataGsuiteGroupSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGsuiteGroupSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite_group_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/group_settings gsuite_group_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGsuiteGroupSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGsuiteGroupSettingsConfig) {
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
    this._email = config.email;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_external_members - computed: true, optional: false, required: false
  public get allowExternalMembers() {
    return this.getStringAttribute('allow_external_members');
  }

  // allow_google_communication - computed: true, optional: false, required: false
  public get allowGoogleCommunication() {
    return this.getStringAttribute('allow_google_communication');
  }

  // allow_web_posting - computed: true, optional: false, required: false
  public get allowWebPosting() {
    return this.getStringAttribute('allow_web_posting');
  }

  // archive_only - computed: true, optional: false, required: false
  public get archiveOnly() {
    return this.getStringAttribute('archive_only');
  }

  // custom_footer_text - computed: true, optional: false, required: false
  public get customFooterText() {
    return this.getStringAttribute('custom_footer_text');
  }

  // custom_reply_to - computed: true, optional: false, required: false
  public get customReplyTo() {
    return this.getStringAttribute('custom_reply_to');
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

  // favorite_replies_on_top - computed: true, optional: false, required: false
  public get favoriteRepliesOnTop() {
    return this.getStringAttribute('favorite_replies_on_top');
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

  // include_custom_footer - computed: true, optional: false, required: false
  public get includeCustomFooter() {
    return this.getStringAttribute('include_custom_footer');
  }

  // include_in_global_address_list - computed: true, optional: false, required: false
  public get includeInGlobalAddressList() {
    return this.getStringAttribute('include_in_global_address_list');
  }

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getStringAttribute('is_archived');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // max_message_bytes - computed: true, optional: false, required: false
  public get maxMessageBytes() {
    return this.getNumberAttribute('max_message_bytes');
  }

  // members_can_post_as_the_group - computed: true, optional: false, required: false
  public get membersCanPostAsTheGroup() {
    return this.getStringAttribute('members_can_post_as_the_group');
  }

  // message_display_font - computed: true, optional: false, required: false
  public get messageDisplayFont() {
    return this.getStringAttribute('message_display_font');
  }

  // message_moderation_level - computed: true, optional: false, required: false
  public get messageModerationLevel() {
    return this.getStringAttribute('message_moderation_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_language - computed: true, optional: false, required: false
  public get primaryLanguage() {
    return this.getStringAttribute('primary_language');
  }

  // reply_to - computed: true, optional: false, required: false
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }

  // send_message_deny_notification - computed: true, optional: false, required: false
  public get sendMessageDenyNotification() {
    return this.getStringAttribute('send_message_deny_notification');
  }

  // show_in_group_directory - computed: true, optional: false, required: false
  public get showInGroupDirectory() {
    return this.getStringAttribute('show_in_group_directory');
  }

  // spam_moderation_level - computed: true, optional: false, required: false
  public get spamModerationLevel() {
    return this.getStringAttribute('spam_moderation_level');
  }

  // who_can_add - computed: true, optional: false, required: false
  public get whoCanAdd() {
    return this.getStringAttribute('who_can_add');
  }

  // who_can_add_references - computed: true, optional: false, required: false
  public get whoCanAddReferences() {
    return this.getStringAttribute('who_can_add_references');
  }

  // who_can_approve_members - computed: true, optional: false, required: false
  public get whoCanApproveMembers() {
    return this.getStringAttribute('who_can_approve_members');
  }

  // who_can_approve_messages - computed: true, optional: false, required: false
  public get whoCanApproveMessages() {
    return this.getStringAttribute('who_can_approve_messages');
  }

  // who_can_assign_topics - computed: true, optional: false, required: false
  public get whoCanAssignTopics() {
    return this.getStringAttribute('who_can_assign_topics');
  }

  // who_can_assist_content - computed: true, optional: false, required: false
  public get whoCanAssistContent() {
    return this.getStringAttribute('who_can_assist_content');
  }

  // who_can_ban_users - computed: true, optional: false, required: false
  public get whoCanBanUsers() {
    return this.getStringAttribute('who_can_ban_users');
  }

  // who_can_contact_owner - computed: true, optional: false, required: false
  public get whoCanContactOwner() {
    return this.getStringAttribute('who_can_contact_owner');
  }

  // who_can_delete_any_post - computed: true, optional: false, required: false
  public get whoCanDeleteAnyPost() {
    return this.getStringAttribute('who_can_delete_any_post');
  }

  // who_can_delete_topics - computed: true, optional: false, required: false
  public get whoCanDeleteTopics() {
    return this.getStringAttribute('who_can_delete_topics');
  }

  // who_can_discover_group - computed: true, optional: false, required: false
  public get whoCanDiscoverGroup() {
    return this.getStringAttribute('who_can_discover_group');
  }

  // who_can_enter_free_form_tags - computed: true, optional: false, required: false
  public get whoCanEnterFreeFormTags() {
    return this.getStringAttribute('who_can_enter_free_form_tags');
  }

  // who_can_hide_abuse - computed: true, optional: false, required: false
  public get whoCanHideAbuse() {
    return this.getStringAttribute('who_can_hide_abuse');
  }

  // who_can_invite - computed: true, optional: false, required: false
  public get whoCanInvite() {
    return this.getStringAttribute('who_can_invite');
  }

  // who_can_join - computed: true, optional: false, required: false
  public get whoCanJoin() {
    return this.getStringAttribute('who_can_join');
  }

  // who_can_leave_group - computed: true, optional: false, required: false
  public get whoCanLeaveGroup() {
    return this.getStringAttribute('who_can_leave_group');
  }

  // who_can_lock_topics - computed: true, optional: false, required: false
  public get whoCanLockTopics() {
    return this.getStringAttribute('who_can_lock_topics');
  }

  // who_can_make_topics_sticky - computed: true, optional: false, required: false
  public get whoCanMakeTopicsSticky() {
    return this.getStringAttribute('who_can_make_topics_sticky');
  }

  // who_can_mark_duplicate - computed: true, optional: false, required: false
  public get whoCanMarkDuplicate() {
    return this.getStringAttribute('who_can_mark_duplicate');
  }

  // who_can_mark_favorite_reply_on_any_topic - computed: true, optional: false, required: false
  public get whoCanMarkFavoriteReplyOnAnyTopic() {
    return this.getStringAttribute('who_can_mark_favorite_reply_on_any_topic');
  }

  // who_can_mark_favorite_reply_on_own_topic - computed: true, optional: false, required: false
  public get whoCanMarkFavoriteReplyOnOwnTopic() {
    return this.getStringAttribute('who_can_mark_favorite_reply_on_own_topic');
  }

  // who_can_mark_no_response_needed - computed: true, optional: false, required: false
  public get whoCanMarkNoResponseNeeded() {
    return this.getStringAttribute('who_can_mark_no_response_needed');
  }

  // who_can_moderate_content - computed: true, optional: false, required: false
  public get whoCanModerateContent() {
    return this.getStringAttribute('who_can_moderate_content');
  }

  // who_can_moderate_members - computed: true, optional: false, required: false
  public get whoCanModerateMembers() {
    return this.getStringAttribute('who_can_moderate_members');
  }

  // who_can_modify_members - computed: true, optional: false, required: false
  public get whoCanModifyMembers() {
    return this.getStringAttribute('who_can_modify_members');
  }

  // who_can_modify_tags_and_categories - computed: true, optional: false, required: false
  public get whoCanModifyTagsAndCategories() {
    return this.getStringAttribute('who_can_modify_tags_and_categories');
  }

  // who_can_move_topics_in - computed: true, optional: false, required: false
  public get whoCanMoveTopicsIn() {
    return this.getStringAttribute('who_can_move_topics_in');
  }

  // who_can_move_topics_out - computed: true, optional: false, required: false
  public get whoCanMoveTopicsOut() {
    return this.getStringAttribute('who_can_move_topics_out');
  }

  // who_can_post_announcements - computed: true, optional: false, required: false
  public get whoCanPostAnnouncements() {
    return this.getStringAttribute('who_can_post_announcements');
  }

  // who_can_post_message - computed: true, optional: false, required: false
  public get whoCanPostMessage() {
    return this.getStringAttribute('who_can_post_message');
  }

  // who_can_take_topics - computed: true, optional: false, required: false
  public get whoCanTakeTopics() {
    return this.getStringAttribute('who_can_take_topics');
  }

  // who_can_unassign_topic - computed: true, optional: false, required: false
  public get whoCanUnassignTopic() {
    return this.getStringAttribute('who_can_unassign_topic');
  }

  // who_can_unmark_favorite_reply_on_any_topic - computed: true, optional: false, required: false
  public get whoCanUnmarkFavoriteReplyOnAnyTopic() {
    return this.getStringAttribute('who_can_unmark_favorite_reply_on_any_topic');
  }

  // who_can_view_group - computed: true, optional: false, required: false
  public get whoCanViewGroup() {
    return this.getStringAttribute('who_can_view_group');
  }

  // who_can_view_membership - computed: true, optional: false, required: false
  public get whoCanViewMembership() {
    return this.getStringAttribute('who_can_view_membership');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
