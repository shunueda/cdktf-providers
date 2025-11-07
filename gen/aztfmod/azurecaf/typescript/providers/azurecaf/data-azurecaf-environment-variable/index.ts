// https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurecafEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Throws an error if the environment variable is not set (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable#fails_if_empty DataAzurecafEnvironmentVariable#fails_if_empty}
  */
  readonly failsIfEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable#id DataAzurecafEnvironmentVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable#name DataAzurecafEnvironmentVariable#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable azurecaf_environment_variable}
*/
export class DataAzurecafEnvironmentVariable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurecaf_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurecafEnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurecafEnvironmentVariable to import
  * @param importFromId The id of the existing DataAzurecafEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurecafEnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurecaf_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aztfmod/azurecaf/1.2.31/docs/data-sources/environment_variable azurecaf_environment_variable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurecafEnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurecafEnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurecaf_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'azurecaf',
        providerVersion: '1.2.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failsIfEmpty = config.failsIfEmpty;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fails_if_empty - computed: false, optional: true, required: false
  private _failsIfEmpty?: boolean | cdktf.IResolvable; 
  public get failsIfEmpty() {
    return this.getBooleanAttribute('fails_if_empty');
  }
  public set failsIfEmpty(value: boolean | cdktf.IResolvable) {
    this._failsIfEmpty = value;
  }
  public resetFailsIfEmpty() {
    this._failsIfEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsIfEmptyInput() {
    return this._failsIfEmpty;
  }

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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fails_if_empty: cdktf.booleanToTerraform(this._failsIfEmpty),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fails_if_empty: {
        value: cdktf.booleanToHclTerraform(this._failsIfEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
