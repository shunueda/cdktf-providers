// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoCmdgroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier to differentiate multiple sudo command group membership resources on the same sudo command group. Manadatory for using sudocmds configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership#identifier SudoCmdgroupMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * Name of the sudo command group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership#name SudoCmdgroupMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** Sudo command to add as a member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership#sudocmd SudoCmdgroupMembership#sudocmd}
  */
  readonly sudocmd?: string;
  /**
  * List of sudo command to add as a member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership#sudocmds SudoCmdgroupMembership#sudocmds}
  */
  readonly sudocmds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership freeipa_sudo_cmdgroup_membership}
*/
export class SudoCmdgroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_cmdgroup_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoCmdgroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoCmdgroupMembership to import
  * @param importFromId The id of the existing SudoCmdgroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoCmdgroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_cmdgroup_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_cmdgroup_membership freeipa_sudo_cmdgroup_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoCmdgroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: SudoCmdgroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_cmdgroup_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identifier = config.identifier;
    this._name = config.name;
    this._sudocmd = config.sudocmd;
    this._sudocmds = config.sudocmds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // sudocmd - computed: false, optional: true, required: false
  private _sudocmd?: string; 
  public get sudocmd() {
    return this.getStringAttribute('sudocmd');
  }
  public set sudocmd(value: string) {
    this._sudocmd = value;
  }
  public resetSudocmd() {
    this._sudocmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudocmdInput() {
    return this._sudocmd;
  }

  // sudocmds - computed: false, optional: true, required: false
  private _sudocmds?: string[]; 
  public get sudocmds() {
    return this.getListAttribute('sudocmds');
  }
  public set sudocmds(value: string[]) {
    this._sudocmds = value;
  }
  public resetSudocmds() {
    this._sudocmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudocmdsInput() {
    return this._sudocmds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      sudocmd: cdktf.stringToTerraform(this._sudocmd),
      sudocmds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sudocmds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sudocmd: {
        value: cdktf.stringToHclTerraform(this._sudocmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sudocmds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sudocmds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
