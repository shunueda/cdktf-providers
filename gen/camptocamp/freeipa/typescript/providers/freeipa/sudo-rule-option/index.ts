// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option#id SudoRuleOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sudo rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option#name SudoRuleOption#name}
  */
  readonly name: string;
  /**
  * Sudo option to add to the sudo rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option#option SudoRuleOption#option}
  */
  readonly option?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option freeipa_sudo_rule_option}
*/
export class SudoRuleOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRuleOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRuleOption to import
  * @param importFromId The id of the existing SudoRuleOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRuleOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/sudo_rule_option freeipa_sudo_rule_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleOptionConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule_option',
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
    this._option = config.option;
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

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      option: cdktf.stringToTerraform(this._option),
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
      option: {
        value: cdktf.stringToHclTerraform(this._option),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
