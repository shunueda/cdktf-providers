// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleRunasgroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership#id SudoRuleRunasgroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sudo rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership#name SudoRuleRunasgroupMembership#name}
  */
  readonly name: string;
  /**
  * Run As Group to add to the sudo rule. Can be an external group (local group of ipa clients)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership#runasgroup SudoRuleRunasgroupMembership#runasgroup}
  */
  readonly runasgroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership freeipa_sudo_rule_runasgroup_membership}
*/
export class SudoRuleRunasgroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule_runasgroup_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRuleRunasgroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRuleRunasgroupMembership to import
  * @param importFromId The id of the existing SudoRuleRunasgroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRuleRunasgroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule_runasgroup_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_runasgroup_membership freeipa_sudo_rule_runasgroup_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleRunasgroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleRunasgroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule_runasgroup_membership',
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
    this._runasgroup = config.runasgroup;
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

  // runasgroup - computed: false, optional: true, required: false
  private _runasgroup?: string; 
  public get runasgroup() {
    return this.getStringAttribute('runasgroup');
  }
  public set runasgroup(value: string) {
    this._runasgroup = value;
  }
  public resetRunasgroup() {
    this._runasgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasgroupInput() {
    return this._runasgroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      runasgroup: cdktf.stringToTerraform(this._runasgroup),
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
      runasgroup: {
        value: cdktf.stringToHclTerraform(this._runasgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
