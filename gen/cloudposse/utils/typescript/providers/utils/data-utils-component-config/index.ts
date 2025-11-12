// https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUtilsComponentConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * atmos base path to components and stacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#atmos_base_path DataUtilsComponentConfig#atmos_base_path}
  */
  readonly atmosBasePath?: string;
  /**
  * atmos CLI config path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#atmos_cli_config_path DataUtilsComponentConfig#atmos_cli_config_path}
  */
  readonly atmosCliConfigPath?: string;
  /**
  * Component name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#component DataUtilsComponentConfig#component}
  */
  readonly component: string;
  /**
  * Map of ENV vars in the format 'key=value'. These ENV vars will be set before executing the data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#env DataUtilsComponentConfig#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#environment DataUtilsComponentConfig#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#id DataUtilsComponentConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag to ignore errors if the component is not found in the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#ignore_errors DataUtilsComponentConfig#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#namespace DataUtilsComponentConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Stack name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#stack DataUtilsComponentConfig#stack}
  */
  readonly stack?: string;
  /**
  * Stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#stage DataUtilsComponentConfig#stage}
  */
  readonly stage?: string;
  /**
  * Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#tenant DataUtilsComponentConfig#tenant}
  */
  readonly tenant?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config utils_component_config}
*/
export class DataUtilsComponentConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "utils_component_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUtilsComponentConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUtilsComponentConfig to import
  * @param importFromId The id of the existing DataUtilsComponentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUtilsComponentConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "utils_component_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudposse/utils/1.31.0/docs/data-sources/component_config utils_component_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUtilsComponentConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataUtilsComponentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'utils_component_config',
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
    this._atmosBasePath = config.atmosBasePath;
    this._atmosCliConfigPath = config.atmosCliConfigPath;
    this._component = config.component;
    this._env = config.env;
    this._environment = config.environment;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._namespace = config.namespace;
    this._stack = config.stack;
    this._stage = config.stage;
    this._tenant = config.tenant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // atmos_base_path - computed: false, optional: true, required: false
  private _atmosBasePath?: string; 
  public get atmosBasePath() {
    return this.getStringAttribute('atmos_base_path');
  }
  public set atmosBasePath(value: string) {
    this._atmosBasePath = value;
  }
  public resetAtmosBasePath() {
    this._atmosBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmosBasePathInput() {
    return this._atmosBasePath;
  }

  // atmos_cli_config_path - computed: false, optional: true, required: false
  private _atmosCliConfigPath?: string; 
  public get atmosCliConfigPath() {
    return this.getStringAttribute('atmos_cli_config_path');
  }
  public set atmosCliConfigPath(value: string) {
    this._atmosCliConfigPath = value;
  }
  public resetAtmosCliConfigPath() {
    this._atmosCliConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmosCliConfigPathInput() {
    return this._atmosCliConfigPath;
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // stack - computed: false, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      atmos_base_path: cdktf.stringToTerraform(this._atmosBasePath),
      atmos_cli_config_path: cdktf.stringToTerraform(this._atmosCliConfigPath),
      component: cdktf.stringToTerraform(this._component),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      namespace: cdktf.stringToTerraform(this._namespace),
      stack: cdktf.stringToTerraform(this._stack),
      stage: cdktf.stringToTerraform(this._stage),
      tenant: cdktf.stringToTerraform(this._tenant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      atmos_base_path: {
        value: cdktf.stringToHclTerraform(this._atmosBasePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atmos_cli_config_path: {
        value: cdktf.stringToHclTerraform(this._atmosCliConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.stringToHclTerraform(this._component),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack: {
        value: cdktf.stringToHclTerraform(this._stack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage: {
        value: cdktf.stringToHclTerraform(this._stage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
