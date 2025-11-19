// https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageReactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Emoji used in the reaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction#emoji MessageReaction#emoji}
  */
  readonly emoji: string;
  /**
  * User ID.  Provide a value of `0` to operate the current session's user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction#user_id MessageReaction#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction files_message_reaction}
*/
export class MessageReaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_message_reaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageReaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageReaction to import
  * @param importFromId The id of the existing MessageReaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageReaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_message_reaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.388/docs/resources/message_reaction files_message_reaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageReactionConfig
  */
  public constructor(scope: Construct, id: string, config: MessageReactionConfig) {
    super(scope, id, {
      terraformResourceType: 'files_message_reaction',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.388',
        providerVersionConstraint: '0.1.388'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emoji = config.emoji;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // emoji - computed: false, optional: false, required: true
  private _emoji?: string; 
  public get emoji() {
    return this.getStringAttribute('emoji');
  }
  public set emoji(value: string) {
    this._emoji = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emojiInput() {
    return this._emoji;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      emoji: cdktf.stringToTerraform(this._emoji),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      emoji: {
        value: cdktf.stringToHclTerraform(this._emoji),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
