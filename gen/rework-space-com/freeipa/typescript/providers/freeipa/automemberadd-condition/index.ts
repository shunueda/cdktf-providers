// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomemberaddConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automember rule condition description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#description AutomemberaddCondition#description}
  */
  readonly description?: string;
  /**
  * Regex expression for values that should be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#exclusiveregex AutomemberaddCondition#exclusiveregex}
  */
  readonly exclusiveregex?: string[];
  /**
  * Regex expression for values that should be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#inclusiveregex AutomemberaddCondition#inclusiveregex}
  */
  readonly inclusiveregex?: string[];
  /**
  * Automember rule condition key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#key AutomemberaddCondition#key}
  */
  readonly key: string;
  /**
  * Automember rule condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#name AutomemberaddCondition#name}
  */
  readonly name: string;
  /**
  * Automember rule condition type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#type AutomemberaddCondition#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition freeipa_automemberadd_condition}
*/
export class AutomemberaddCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_automemberadd_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomemberaddCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomemberaddCondition to import
  * @param importFromId The id of the existing AutomemberaddCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomemberaddCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_automemberadd_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.0/docs/resources/automemberadd_condition freeipa_automemberadd_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomemberaddConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AutomemberaddConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_automemberadd_condition',
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
    this._description = config.description;
    this._exclusiveregex = config.exclusiveregex;
    this._inclusiveregex = config.inclusiveregex;
    this._key = config.key;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // exclusiveregex - computed: false, optional: true, required: false
  private _exclusiveregex?: string[]; 
  public get exclusiveregex() {
    return this.getListAttribute('exclusiveregex');
  }
  public set exclusiveregex(value: string[]) {
    this._exclusiveregex = value;
  }
  public resetExclusiveregex() {
    this._exclusiveregex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveregexInput() {
    return this._exclusiveregex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusiveregex - computed: false, optional: true, required: false
  private _inclusiveregex?: string[]; 
  public get inclusiveregex() {
    return this.getListAttribute('inclusiveregex');
  }
  public set inclusiveregex(value: string[]) {
    this._inclusiveregex = value;
  }
  public resetInclusiveregex() {
    this._inclusiveregex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveregexInput() {
    return this._inclusiveregex;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      exclusiveregex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclusiveregex),
      inclusiveregex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inclusiveregex),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusiveregex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclusiveregex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      inclusiveregex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inclusiveregex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
