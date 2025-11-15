// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this variable is a Terraform or an environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable#category Variable#category}
  */
  readonly category: string;
  /**
  * This variable's key (within its namespace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable#key Variable#key}
  */
  readonly key: string;
  /**
  * The path to this variable's namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable#namespace_path Variable#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * This variable's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable#value Variable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable tharsis_variable}
*/
export class Variable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Variable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Variable to import
  * @param importFromId The id of the existing Variable that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Variable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/variable tharsis_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableConfig
  */
  public constructor(scope: Construct, id: string, config: VariableConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_variable',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._key = config.key;
    this._namespacePath = config.namespacePath;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_path - computed: false, optional: false, required: true
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      key: cdktf.stringToTerraform(this._key),
      namespace_path: cdktf.stringToTerraform(this._namespacePath),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_path: {
        value: cdktf.stringToHclTerraform(this._namespacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
