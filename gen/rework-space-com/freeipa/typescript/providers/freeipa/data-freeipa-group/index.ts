// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group name
  * 
  * 	- The name must not exceed 32 characters.
  * 	- The name must contain only lowercase letters (a-z), digits (0-9), and the characters (. - _).
  * 	- The name must not start with a special character.
  * 	- A user and a group cannot have the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/data-sources/group#name DataFreeipaGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/data-sources/group freeipa_group}
*/
export class DataFreeipaGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaGroup to import
  * @param importFromId The id of the existing DataFreeipaGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/data-sources/group freeipa_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_group',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gid_number - computed: true, optional: false, required: false
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_external - computed: true, optional: false, required: false
  public get memberExternal() {
    return this.getListAttribute('member_external');
  }

  // member_group - computed: true, optional: false, required: false
  public get memberGroup() {
    return this.getListAttribute('member_group');
  }

  // member_indirect_group - computed: true, optional: false, required: false
  public get memberIndirectGroup() {
    return this.getListAttribute('member_indirect_group');
  }

  // member_indirect_user - computed: true, optional: false, required: false
  public get memberIndirectUser() {
    return this.getListAttribute('member_indirect_user');
  }

  // member_user - computed: true, optional: false, required: false
  public get memberUser() {
    return this.getListAttribute('member_user');
  }

  // memberof_group - computed: true, optional: false, required: false
  public get memberofGroup() {
    return this.getListAttribute('memberof_group');
  }

  // memberof_hbacrule - computed: true, optional: false, required: false
  public get memberofHbacrule() {
    return this.getListAttribute('memberof_hbacrule');
  }

  // memberof_indirect_group - computed: true, optional: false, required: false
  public get memberofIndirectGroup() {
    return this.getListAttribute('memberof_indirect_group');
  }

  // memberof_indirect_hbacrule - computed: true, optional: false, required: false
  public get memberofIndirectHbacrule() {
    return this.getListAttribute('memberof_indirect_hbacrule');
  }

  // memberof_indirect_sudorule - computed: true, optional: false, required: false
  public get memberofIndirectSudorule() {
    return this.getListAttribute('memberof_indirect_sudorule');
  }

  // memberof_sudorule - computed: true, optional: false, required: false
  public get memberofSudorule() {
    return this.getListAttribute('memberof_sudorule');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
