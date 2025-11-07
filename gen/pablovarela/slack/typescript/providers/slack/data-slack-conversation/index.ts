// https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSlackConversationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation#channel_id DataSlackConversation#channel_id}
  */
  readonly channelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation#id DataSlackConversation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation#is_private DataSlackConversation#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation#name DataSlackConversation#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation slack_conversation}
*/
export class DataSlackConversation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_conversation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSlackConversation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSlackConversation to import
  * @param importFromId The id of the existing DataSlackConversation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSlackConversation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "slack_conversation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pablovarela/slack/1.2.2/docs/data-sources/conversation slack_conversation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSlackConversationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSlackConversationConfig = {}) {
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
    this._channelId = config.channelId;
    this._id = config.id;
    this._isPrivate = config.isPrivate;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
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

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
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

  // is_private - computed: false, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_id: cdktf.stringToTerraform(this._channelId),
      id: cdktf.stringToTerraform(this._id),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_id: {
        value: cdktf.stringToHclTerraform(this._channelId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
