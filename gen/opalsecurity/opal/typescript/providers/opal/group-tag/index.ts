// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the group to apply the tag to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag#group_id GroupTag#group_id}
  */
  readonly groupId: string;
  /**
  * The ID of the tag to apply. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag#tag_id GroupTag#tag_id}
  */
  readonly tagId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag opal_group_tag}
*/
export class GroupTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_group_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupTag to import
  * @param importFromId The id of the existing GroupTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_group_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/group_tag opal_group_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupTagConfig
  */
  public constructor(scope: Construct, id: string, config: GroupTagConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_group_tag',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._tagId = config.tagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // tag_id - computed: false, optional: false, required: true
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      tag_id: cdktf.stringToTerraform(this._tagId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_id: {
        value: cdktf.stringToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
