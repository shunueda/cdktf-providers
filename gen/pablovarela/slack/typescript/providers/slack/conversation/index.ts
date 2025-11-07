// https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConversationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Either of none or archive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#action_on_destroy Conversation#action_on_destroy}
  */
  readonly actionOnDestroy?: string;
  /**
  * Either of none or kick
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#action_on_update_permanent_members Conversation#action_on_update_permanent_members}
  */
  readonly actionOnUpdatePermanentMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#adopt_existing_channel Conversation#adopt_existing_channel}
  */
  readonly adoptExistingChannel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#id Conversation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#is_archived Conversation#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#is_private Conversation#is_private}
  */
  readonly isPrivate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#name Conversation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#permanent_members Conversation#permanent_members}
  */
  readonly permanentMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#purpose Conversation#purpose}
  */
  readonly purpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#topic Conversation#topic}
  */
  readonly topic?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation slack_conversation}
*/
export class Conversation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_conversation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Conversation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Conversation to import
  * @param importFromId The id of the existing Conversation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Conversation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "slack_conversation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/resources/conversation slack_conversation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConversationConfig
  */
  public constructor(scope: Construct, id: string, config: ConversationConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_conversation',
      terraformGeneratorMetadata: {
        providerName: 'slack',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionOnDestroy = config.actionOnDestroy;
    this._actionOnUpdatePermanentMembers = config.actionOnUpdatePermanentMembers;
    this._adoptExistingChannel = config.adoptExistingChannel;
    this._id = config.id;
    this._isArchived = config.isArchived;
    this._isPrivate = config.isPrivate;
    this._name = config.name;
    this._permanentMembers = config.permanentMembers;
    this._purpose = config.purpose;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_on_destroy - computed: false, optional: true, required: false
  private _actionOnDestroy?: string; 
  public get actionOnDestroy() {
    return this.getStringAttribute('action_on_destroy');
  }
  public set actionOnDestroy(value: string) {
    this._actionOnDestroy = value;
  }
  public resetActionOnDestroy() {
    this._actionOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnDestroyInput() {
    return this._actionOnDestroy;
  }

  // action_on_update_permanent_members - computed: false, optional: true, required: false
  private _actionOnUpdatePermanentMembers?: string; 
  public get actionOnUpdatePermanentMembers() {
    return this.getStringAttribute('action_on_update_permanent_members');
  }
  public set actionOnUpdatePermanentMembers(value: string) {
    this._actionOnUpdatePermanentMembers = value;
  }
  public resetActionOnUpdatePermanentMembers() {
    this._actionOnUpdatePermanentMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnUpdatePermanentMembersInput() {
    return this._actionOnUpdatePermanentMembers;
  }

  // adopt_existing_channel - computed: false, optional: true, required: false
  private _adoptExistingChannel?: boolean | cdktf.IResolvable; 
  public get adoptExistingChannel() {
    return this.getBooleanAttribute('adopt_existing_channel');
  }
  public set adoptExistingChannel(value: boolean | cdktf.IResolvable) {
    this._adoptExistingChannel = value;
  }
  public resetAdoptExistingChannel() {
    this._adoptExistingChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adoptExistingChannelInput() {
    return this._adoptExistingChannel;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // is_ext_shared - computed: true, optional: false, required: false
  public get isExtShared() {
    return this.getBooleanAttribute('is_ext_shared');
  }

  // is_general - computed: true, optional: false, required: false
  public get isGeneral() {
    return this.getBooleanAttribute('is_general');
  }

  // is_org_shared - computed: true, optional: false, required: false
  public get isOrgShared() {
    return this.getBooleanAttribute('is_org_shared');
  }

  // is_private - computed: false, optional: false, required: true
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
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

  // permanent_members - computed: false, optional: true, required: false
  private _permanentMembers?: string[]; 
  public get permanentMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('permanent_members'));
  }
  public set permanentMembers(value: string[]) {
    this._permanentMembers = value;
  }
  public resetPermanentMembers() {
    this._permanentMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentMembersInput() {
    return this._permanentMembers;
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_on_destroy: cdktf.stringToTerraform(this._actionOnDestroy),
      action_on_update_permanent_members: cdktf.stringToTerraform(this._actionOnUpdatePermanentMembers),
      adopt_existing_channel: cdktf.booleanToTerraform(this._adoptExistingChannel),
      id: cdktf.stringToTerraform(this._id),
      is_archived: cdktf.booleanToTerraform(this._isArchived),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      name: cdktf.stringToTerraform(this._name),
      permanent_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permanentMembers),
      purpose: cdktf.stringToTerraform(this._purpose),
      topic: cdktf.stringToTerraform(this._topic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_on_destroy: {
        value: cdktf.stringToHclTerraform(this._actionOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_on_update_permanent_members: {
        value: cdktf.stringToHclTerraform(this._actionOnUpdatePermanentMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adopt_existing_channel: {
        value: cdktf.booleanToHclTerraform(this._adoptExistingChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_archived: {
        value: cdktf.booleanToHclTerraform(this._isArchived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permanentMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
