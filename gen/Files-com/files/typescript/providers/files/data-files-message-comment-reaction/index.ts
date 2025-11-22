// https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/message_comment_reaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesMessageCommentReactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reaction ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/message_comment_reaction#id DataFilesMessageCommentReaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/message_comment_reaction files_message_comment_reaction}
*/
export class DataFilesMessageCommentReaction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_message_comment_reaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesMessageCommentReaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesMessageCommentReaction to import
  * @param importFromId The id of the existing DataFilesMessageCommentReaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/message_comment_reaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesMessageCommentReaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_message_comment_reaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/message_comment_reaction files_message_comment_reaction} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesMessageCommentReactionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesMessageCommentReactionConfig) {
    super(scope, id, {
      terraformResourceType: 'files_message_comment_reaction',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.394',
        providerVersionConstraint: '0.1.394'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // emoji - computed: true, optional: false, required: false
  public get emoji() {
    return this.getStringAttribute('emoji');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
