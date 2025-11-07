// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleDenycmdMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership#id SudoRuleDenycmdMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sudo rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership#name SudoRuleDenycmdMembership#name}
  */
  readonly name: string;
  /**
  * Sudo command to deny by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership#sudocmd SudoRuleDenycmdMembership#sudocmd}
  */
  readonly sudocmd?: string;
  /**
  * Sudo command group to deny by the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership#sudocmd_group SudoRuleDenycmdMembership#sudocmd_group}
  */
  readonly sudocmdGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership freeipa_sudo_rule_denycmd_membership}
*/
export class SudoRuleDenycmdMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule_denycmd_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRuleDenycmdMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRuleDenycmdMembership to import
  * @param importFromId The id of the existing SudoRuleDenycmdMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRuleDenycmdMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule_denycmd_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_denycmd_membership freeipa_sudo_rule_denycmd_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleDenycmdMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleDenycmdMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule_denycmd_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
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
    this._name = config.name;
    this._sudocmd = config.sudocmd;
    this._sudocmdGroup = config.sudocmdGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sudocmd: cdktf.stringToTerraform(this._sudocmd),
      sudocmd_group: cdktf.stringToTerraform(this._sudocmdGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
