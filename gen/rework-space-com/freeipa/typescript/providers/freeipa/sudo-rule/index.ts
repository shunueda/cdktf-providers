// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SudoRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Command category the sudo rule is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#commandcategory SudoRule#commandcategory}
  */
  readonly commandcategory?: string;
  /**
  * Sudo rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#description SudoRule#description}
  */
  readonly description?: string;
  /**
  * Enable this sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#enabled SudoRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host category the sudo rule is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#hostcategory SudoRule#hostcategory}
  */
  readonly hostcategory?: string;
  /**
  * Name of the sudo rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#name SudoRule#name}
  */
  readonly name: string;
  /**
  * Sudo rule order (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#order SudoRule#order}
  */
  readonly order?: number;
  /**
  * Run as group category the sudo rule is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#runasgroupcategory SudoRule#runasgroupcategory}
  */
  readonly runasgroupcategory?: string;
  /**
  * Run as user category the sudo rule is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#runasusercategory SudoRule#runasusercategory}
  */
  readonly runasusercategory?: string;
  /**
  * User category the sudo rule is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#usercategory SudoRule#usercategory}
  */
  readonly usercategory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule freeipa_sudo_rule}
*/
export class SudoRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_sudo_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SudoRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SudoRule to import
  * @param importFromId The id of the existing SudoRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SudoRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_sudo_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/sudo_rule freeipa_sudo_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SudoRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SudoRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_sudo_rule',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandcategory = config.commandcategory;
    this._description = config.description;
    this._enabled = config.enabled;
    this._hostcategory = config.hostcategory;
    this._name = config.name;
    this._order = config.order;
    this._runasgroupcategory = config.runasgroupcategory;
    this._runasusercategory = config.runasusercategory;
    this._usercategory = config.usercategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commandcategory - computed: false, optional: true, required: false
  private _commandcategory?: string; 
  public get commandcategory() {
    return this.getStringAttribute('commandcategory');
  }
  public set commandcategory(value: string) {
    this._commandcategory = value;
  }
  public resetCommandcategory() {
    this._commandcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandcategoryInput() {
    return this._commandcategory;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hostcategory - computed: false, optional: true, required: false
  private _hostcategory?: string; 
  public get hostcategory() {
    return this.getStringAttribute('hostcategory');
  }
  public set hostcategory(value: string) {
    this._hostcategory = value;
  }
  public resetHostcategory() {
    this._hostcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostcategoryInput() {
    return this._hostcategory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // runasgroupcategory - computed: false, optional: true, required: false
  private _runasgroupcategory?: string; 
  public get runasgroupcategory() {
    return this.getStringAttribute('runasgroupcategory');
  }
  public set runasgroupcategory(value: string) {
    this._runasgroupcategory = value;
  }
  public resetRunasgroupcategory() {
    this._runasgroupcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasgroupcategoryInput() {
    return this._runasgroupcategory;
  }

  // runasusercategory - computed: false, optional: true, required: false
  private _runasusercategory?: string; 
  public get runasusercategory() {
    return this.getStringAttribute('runasusercategory');
  }
  public set runasusercategory(value: string) {
    this._runasusercategory = value;
  }
  public resetRunasusercategory() {
    this._runasusercategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runasusercategoryInput() {
    return this._runasusercategory;
  }

  // usercategory - computed: false, optional: true, required: false
  private _usercategory?: string; 
  public get usercategory() {
    return this.getStringAttribute('usercategory');
  }
  public set usercategory(value: string) {
    this._usercategory = value;
  }
  public resetUsercategory() {
    this._usercategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usercategoryInput() {
    return this._usercategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commandcategory: cdktf.stringToTerraform(this._commandcategory),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostcategory: cdktf.stringToTerraform(this._hostcategory),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      runasgroupcategory: cdktf.stringToTerraform(this._runasgroupcategory),
      runasusercategory: cdktf.stringToTerraform(this._runasusercategory),
      usercategory: cdktf.stringToTerraform(this._usercategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commandcategory: {
        value: cdktf.stringToHclTerraform(this._commandcategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostcategory: {
        value: cdktf.stringToHclTerraform(this._hostcategory),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runasgroupcategory: {
        value: cdktf.stringToHclTerraform(this._runasgroupcategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runasusercategory: {
        value: cdktf.stringToHclTerraform(this._runasusercategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usercategory: {
        value: cdktf.stringToHclTerraform(this._usercategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
