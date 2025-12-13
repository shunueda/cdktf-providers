// https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MessageCommentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment#body MessageComment#body}
  */
  readonly body: string;
  /**
  * User ID.  Provide a value of `0` to operate the current session's user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment#user_id MessageComment#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment files_message_comment}
*/
export class MessageComment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_message_comment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MessageComment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MessageComment to import
  * @param importFromId The id of the existing MessageComment that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MessageComment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_message_comment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/message_comment files_message_comment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MessageCommentConfig
  */
  public constructor(scope: Construct, id: string, config: MessageCommentConfig) {
    super(scope, id, {
      terraformResourceType: 'files_message_comment',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.412',
        providerVersionConstraint: '0.1.412'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // reactions - computed: true, optional: false, required: false
  private _reactions = new cdktf.AnyMap(this, "reactions");
  public get reactions() {
    return this._reactions;
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
      body: cdktf.stringToTerraform(this._body),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
