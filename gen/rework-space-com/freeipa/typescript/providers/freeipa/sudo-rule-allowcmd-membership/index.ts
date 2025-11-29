// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleAllowcmdMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier to differentiate multiple sudo rule denied membership resources on the same sudo rule. Manadatory for using sudocmds/sudocmd_groups configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#identifier SudoRuleAllowcmdMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * Sudo rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#name SudoRuleAllowcmdMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** Sudo command to allow by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#sudocmd SudoRuleAllowcmdMembership#sudocmd}
  */
  readonly sudocmd?: string;
  /**
  * **deprecated** Sudo command group to allow by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#sudocmd_group SudoRuleAllowcmdMembership#sudocmd_group}
  */
  readonly sudocmdGroup?: string;
  /**
  * List of sudo command group to allow by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#sudocmd_groups SudoRuleAllowcmdMembership#sudocmd_groups}
  */
  readonly sudocmdGroups?: string[];
  /**
  * List of Sudo command to allow by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#sudocmds SudoRuleAllowcmdMembership#sudocmds}
  */
  readonly sudocmds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership freeipa_sudo_rule_allowcmd_membership}
*/
export class SudoRuleAllowcmdMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule_allowcmd_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRuleAllowcmdMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRuleAllowcmdMembership to import
  * @param importFromId The id of the existing SudoRuleAllowcmdMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRuleAllowcmdMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule_allowcmd_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/sudo_rule_allowcmd_membership freeipa_sudo_rule_allowcmd_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleAllowcmdMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleAllowcmdMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule_allowcmd_membership',
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
    this._identifier = config.identifier;
    this._name = config.name;
    this._sudocmd = config.sudocmd;
    this._sudocmdGroup = config.sudocmdGroup;
    this._sudocmdGroups = config.sudocmdGroups;
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

  // sudocmd_group - computed: false, optional: true, required: false
  private _sudocmdGroup?: string; 
  public get sudocmdGroup() {
    return this.getStringAttribute('sudocmd_group');
  }
  public set sudocmdGroup(value: string) {
    this._sudocmdGroup = value;
  }
  public resetSudocmdGroup() {
    this._sudocmdGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudocmdGroupInput() {
    return this._sudocmdGroup;
  }

  // sudocmd_groups - computed: false, optional: true, required: false
  private _sudocmdGroups?: string[]; 
  public get sudocmdGroups() {
    return this.getListAttribute('sudocmd_groups');
  }
  public set sudocmdGroups(value: string[]) {
    this._sudocmdGroups = value;
  }
  public resetSudocmdGroups() {
    this._sudocmdGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudocmdGroupsInput() {
    return this._sudocmdGroups;
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
      sudocmd_group: cdktf.stringToTerraform(this._sudocmdGroup),
      sudocmd_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sudocmdGroups),
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
      sudocmd_group: {
        value: cdktf.stringToHclTerraform(this._sudocmdGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sudocmd_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sudocmdGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
