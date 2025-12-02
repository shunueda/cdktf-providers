// https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of share group members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group#members ShareGroup#members}
  */
  readonly members: { [key: string]: any };
  /**
  * Name of the share group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group#name ShareGroup#name}
  */
  readonly name: string;
  /**
  * Additional notes of the share group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group#notes ShareGroup#notes}
  */
  readonly notes?: string;
  /**
  * Owner User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group#user_id ShareGroup#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group files_share_group}
*/
export class ShareGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_share_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShareGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShareGroup to import
  * @param importFromId The id of the existing ShareGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShareGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_share_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.401/docs/resources/share_group files_share_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ShareGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'files_share_group',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.401',
        providerVersionConstraint: '0.1.401'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._members = config.members;
    this._name = config.name;
    this._notes = config.notes;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members?: { [key: string]: any }; 
  public get members() {
    return this.getAnyMapAttribute('members');
  }
  public set members(value: { [key: string]: any }) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // user_id - computed: true, optional: true, required: false
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
      members: cdktf.hashMapper(cdktf.anyToTerraform)(this._members),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      members: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._members),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
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
