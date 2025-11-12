// https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluenceGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership#group_id DataConfluenceGroupMembership#group_id}
  */
  readonly groupId?: string;
  /**
  * The members of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership#group_members DataConfluenceGroupMembership#group_members}
  */
  readonly groupMembers?: { [key: string]: string };
  /**
  * The name of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership#group_name DataConfluenceGroupMembership#group_name}
  */
  readonly groupName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership confluence_group_membership}
*/
export class DataConfluenceGroupMembership extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluence_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluenceGroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluenceGroupMembership to import
  * @param importFromId The id of the existing DataConfluenceGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluenceGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluence_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fabiogermann/confluence/0.2.16/docs/data-sources/group_membership confluence_group_membership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluenceGroupMembershipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConfluenceGroupMembershipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluence_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'confluence',
        providerVersion: '0.2.16',
        providerVersionConstraint: '0.2.16'
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
    this._groupMembers = config.groupMembers;
    this._groupName = config.groupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_members - computed: true, optional: true, required: false
  private _groupMembers?: { [key: string]: string }; 
  public get groupMembers() {
    return this.getStringMapAttribute('group_members');
  }
  public set groupMembers(value: { [key: string]: string }) {
    this._groupMembers = value;
  }
  public resetGroupMembers() {
    this._groupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembersInput() {
    return this._groupMembers;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      group_members: cdktf.hashMapper(cdktf.stringToTerraform)(this._groupMembers),
      group_name: cdktf.stringToTerraform(this._groupName),
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
      group_members: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._groupMembers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
