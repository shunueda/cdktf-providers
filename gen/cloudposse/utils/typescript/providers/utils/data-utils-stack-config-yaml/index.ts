// https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUtilsStackConfigYamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Stack config base path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#base_path DataUtilsStackConfigYaml#base_path}
  */
  readonly basePath?: string;
  /**
  * Map of ENV vars in the format 'key=value'. These ENV vars will be set before executing the data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#env DataUtilsStackConfigYaml#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#id DataUtilsStackConfigYaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of stack config file names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#input DataUtilsStackConfigYaml#input}
  */
  readonly input: string[];
  /**
  * A boolean flag to enable/disable processing config dependencies for the components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#process_component_deps DataUtilsStackConfigYaml#process_component_deps}
  */
  readonly processComponentDeps?: boolean | cdktf.IResolvable;
  /**
  * A boolean flag to enable/disable processing all stack dependencies for the components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#process_stack_deps DataUtilsStackConfigYaml#process_stack_deps}
  */
  readonly processStackDeps?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml utils_stack_config_yaml}
*/
export class DataUtilsStackConfigYaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "utils_stack_config_yaml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUtilsStackConfigYaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUtilsStackConfigYaml to import
  * @param importFromId The id of the existing DataUtilsStackConfigYaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUtilsStackConfigYaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "utils_stack_config_yaml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/stack_config_yaml utils_stack_config_yaml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUtilsStackConfigYamlConfig
  */
  public constructor(scope: Construct, id: string, config: DataUtilsStackConfigYamlConfig) {
    super(scope, id, {
      terraformResourceType: 'utils_stack_config_yaml',
      terraformGeneratorMetadata: {
        providerName: 'utils',
        providerVersion: '1.31.0',
        providerVersionConstraint: '1.31.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basePath = config.basePath;
    this._env = config.env;
    this._id = config.id;
    this._input = config.input;
    this._processComponentDeps = config.processComponentDeps;
    this._processStackDeps = config.processStackDeps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // input - computed: false, optional: false, required: true
  private _input?: string[]; 
  public get input() {
    return this.getListAttribute('input');
  }
  public set input(value: string[]) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getListAttribute('output');
  }

  // process_component_deps - computed: false, optional: true, required: false
  private _processComponentDeps?: boolean | cdktf.IResolvable; 
  public get processComponentDeps() {
    return this.getBooleanAttribute('process_component_deps');
  }
  public set processComponentDeps(value: boolean | cdktf.IResolvable) {
    this._processComponentDeps = value;
  }
  public resetProcessComponentDeps() {
    this._processComponentDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processComponentDepsInput() {
    return this._processComponentDeps;
  }

  // process_stack_deps - computed: false, optional: true, required: false
  private _processStackDeps?: boolean | cdktf.IResolvable; 
  public get processStackDeps() {
    return this.getBooleanAttribute('process_stack_deps');
  }
  public set processStackDeps(value: boolean | cdktf.IResolvable) {
    this._processStackDeps = value;
  }
  public resetProcessStackDeps() {
    this._processStackDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processStackDepsInput() {
    return this._processStackDeps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_path: cdktf.stringToTerraform(this._basePath),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.listMapper(cdktf.stringToTerraform, false)(this._input),
      process_component_deps: cdktf.booleanToTerraform(this._processComponentDeps),
      process_stack_deps: cdktf.booleanToTerraform(this._processStackDeps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._input),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      process_component_deps: {
        value: cdktf.booleanToHclTerraform(this._processComponentDeps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      process_stack_deps: {
        value: cdktf.booleanToHclTerraform(this._processStackDeps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
