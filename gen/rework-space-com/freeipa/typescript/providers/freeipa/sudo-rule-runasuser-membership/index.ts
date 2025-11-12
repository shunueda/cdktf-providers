// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleRunasuserMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier to differentiate multiple sudo rule runasuser membership resources on the same sudo rule. Manadatory for using runasusers configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership#identifier SudoRuleRunasuserMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * Sudo rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership#name SudoRuleRunasuserMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** Run As User to add to the sudo rule. Can be an external user (local user of ipa clients)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership#runasuser SudoRuleRunasuserMembership#runasuser}
  */
  readonly runasuser?: string;
  /**
  * List of Run As User to add to the sudo rule. Can be an external user (local user of ipa clients)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership#runasusers SudoRuleRunasuserMembership#runasusers}
  */
  readonly runasusers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership freeipa_sudo_rule_runasuser_membership}
*/
export class SudoRuleRunasuserMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule_runasuser_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRuleRunasuserMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRuleRunasuserMembership to import
  * @param importFromId The id of the existing SudoRuleRunasuserMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRuleRunasuserMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule_runasuser_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/sudo_rule_runasuser_membership freeipa_sudo_rule_runasuser_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleRunasuserMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleRunasuserMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule_runasuser_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3',
        providerVersionConstraint: '5.1.3'
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
    this._runasuser = config.runasuser;
    this._runasusers = config.runasusers;
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

  // runasuser - computed: false, optional: true, required: false
  private _runasuser?: string; 
  public get runasuser() {
    return this.getStringAttribute('runasuser');
  }
  public set runasuser(value: string) {
    this._runasuser = value;
  }
  public resetRunasuser() {
    this._runasuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasuserInput() {
    return this._runasuser;
  }

  // runasusers - computed: false, optional: true, required: false
  private _runasusers?: string[]; 
  public get runasusers() {
    return this.getListAttribute('runasusers');
  }
  public set runasusers(value: string[]) {
    this._runasusers = value;
  }
  public resetRunasusers() {
    this._runasusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasusersInput() {
    return this._runasusers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      runasuser: cdktf.stringToTerraform(this._runasuser),
      runasusers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runasusers),
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
      runasuser: {
        value: cdktf.stringToHclTerraform(this._runasuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runasusers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runasusers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
