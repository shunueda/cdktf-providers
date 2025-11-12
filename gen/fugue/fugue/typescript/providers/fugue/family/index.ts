// https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the family will automatically be enabled on all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#always_enabled Family#always_enabled}
  */
  readonly alwaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * The description of the family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#description Family#description}
  */
  readonly description: string;
  /**
  * The name of the family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#name Family#name}
  */
  readonly name: string;
  /**
  * Whether the family is recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#recommended Family#recommended}
  */
  readonly recommended?: boolean | cdktf.IResolvable;
  /**
  * The rule IDs which belong to this family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#rule_ids Family#rule_ids}
  */
  readonly ruleIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family fugue_family}
*/
export class Family extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fugue_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Family resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Family to import
  * @param importFromId The id of the existing Family that should be imported. Refer to the {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Family to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fugue_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/family fugue_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FamilyConfig
  */
  public constructor(scope: Construct, id: string, config: FamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'fugue_family',
      terraformGeneratorMetadata: {
        providerName: 'fugue',
        providerVersion: '0.0.11',
        providerVersionConstraint: '0.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysEnabled = config.alwaysEnabled;
    this._description = config.description;
    this._name = config.name;
    this._recommended = config.recommended;
    this._ruleIds = config.ruleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_enabled - computed: false, optional: true, required: false
  private _alwaysEnabled?: boolean | cdktf.IResolvable; 
  public get alwaysEnabled() {
    return this.getBooleanAttribute('always_enabled');
  }
  public set alwaysEnabled(value: boolean | cdktf.IResolvable) {
    this._alwaysEnabled = value;
  }
  public resetAlwaysEnabled() {
    this._alwaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEnabledInput() {
    return this._alwaysEnabled;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // recommended - computed: false, optional: true, required: false
  private _recommended?: boolean | cdktf.IResolvable; 
  public get recommended() {
    return this.getBooleanAttribute('recommended');
  }
  public set recommended(value: boolean | cdktf.IResolvable) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_enabled: cdktf.booleanToTerraform(this._alwaysEnabled),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      recommended: cdktf.booleanToTerraform(this._recommended),
      rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_enabled: {
        value: cdktf.booleanToHclTerraform(this._alwaysEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      recommended: {
        value: cdktf.booleanToHclTerraform(this._recommended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
