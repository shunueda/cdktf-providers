// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JmespathCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the JMESPath compliance check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#description JmespathCheck#description}
  */
  readonly description?: string;
  /**
  * The JMESPath compliance check expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#jmespath_expression JmespathCheck#jmespath_expression}
  */
  readonly jmespathExpression: string;
  /**
  * Name of the JMESPath compliance check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#name JmespathCheck#name}
  */
  readonly name: string;
  /**
  * The platforms the JMESPath compliance check is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#platforms JmespathCheck#platforms}
  */
  readonly platforms?: string[];
  /**
  * The name of the inventory source the JMESPath compliance check is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#source_name JmespathCheck#source_name}
  */
  readonly sourceName: string;
  /**
  * The IDs of the tags the JMESPath compliance check is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#tag_ids JmespathCheck#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check zentral_jmespath_check}
*/
export class JmespathCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_jmespath_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JmespathCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JmespathCheck to import
  * @param importFromId The id of the existing JmespathCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JmespathCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_jmespath_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/jmespath_check zentral_jmespath_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JmespathCheckConfig
  */
  public constructor(scope: Construct, id: string, config: JmespathCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_jmespath_check',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
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
    this._jmespathExpression = config.jmespathExpression;
    this._name = config.name;
    this._platforms = config.platforms;
    this._sourceName = config.sourceName;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // jmespath_expression - computed: false, optional: false, required: true
  private _jmespathExpression?: string; 
  public get jmespathExpression() {
    return this.getStringAttribute('jmespath_expression');
  }
  public set jmespathExpression(value: string) {
    this._jmespathExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jmespathExpressionInput() {
    return this._jmespathExpression;
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

  // platforms - computed: true, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      jmespath_expression: cdktf.stringToTerraform(this._jmespathExpression),
      name: cdktf.stringToTerraform(this._name),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      source_name: cdktf.stringToTerraform(this._sourceName),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
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
      jmespath_expression: {
        value: cdktf.stringToHclTerraform(this._jmespathExpression),
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
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
