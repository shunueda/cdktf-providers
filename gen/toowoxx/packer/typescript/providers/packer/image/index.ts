// https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional parameters to pass to Packer. Consult Packer documentation for details. Example: `additional_params = ["-parallel-builds=1"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#additional_params Image#additional_params}
  */
  readonly additionalParams?: string[];
  /**
  * Working directory to run Packer inside. Default is cwd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#directory Image#directory}
  */
  readonly directory?: string;
  /**
  * Environment variables to pass to Packer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#environment Image#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Packer file to use for building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#file Image#file}
  */
  readonly file?: string;
  /**
  * Force overwriting existing images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#force Image#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Prevents passing all environment variables of the provider through to Packer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#ignore_environment Image#ignore_environment}
  */
  readonly ignoreEnvironment?: boolean | cdktf.IResolvable;
  /**
  * Path to the Packer manifest JSON to read after build. If set, a manifest must be written to that path. If unset, the provider passes a temporary path via environment variable TPP_MANIFEST_PATH; if Packer does not create it, the manifest remains null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#manifest_path Image#manifest_path}
  */
  readonly manifestPath?: string;
  /**
  * Name of this build. This value is not passed to Packer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#name Image#name}
  */
  readonly name?: string;
  /**
  * Sensitive variables to pass to Packer (does the same as variables, but makes sure Terraform knows these values are sensitive). Can contain following types: bool, number, string, list(string), set(string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#sensitive_variables Image#sensitive_variables}
  */
  readonly sensitiveVariables?: { [key: string]: any };
  /**
  * Values that, when changed, trigger an update of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#triggers Image#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Variables to pass to Packer. Must be map or object. Can contain following types: bool, number, string, list(string), set(string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#variables Image#variables}
  */
  readonly variables?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image packer_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packer_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packer_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/toowoxx/packer/0.17.2/docs/resources/image packer_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'packer_image',
      terraformGeneratorMetadata: {
        providerName: 'packer',
        providerVersion: '0.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalParams = config.additionalParams;
    this._directory = config.directory;
    this._environment = config.environment;
    this._file = config.file;
    this._force = config.force;
    this._ignoreEnvironment = config.ignoreEnvironment;
    this._manifestPath = config.manifestPath;
    this._name = config.name;
    this._sensitiveVariables = config.sensitiveVariables;
    this._triggers = config.triggers;
    this._variables = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_params - computed: false, optional: true, required: false
  private _additionalParams?: string[]; 
  public get additionalParams() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_params'));
  }
  public set additionalParams(value: string[]) {
    this._additionalParams = value;
  }
  public resetAdditionalParams() {
    this._additionalParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParamsInput() {
    return this._additionalParams;
  }

  // build_uuid - computed: true, optional: false, required: false
  public get buildUuid() {
    return this.getStringAttribute('build_uuid');
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_environment - computed: false, optional: true, required: false
  private _ignoreEnvironment?: boolean | cdktf.IResolvable; 
  public get ignoreEnvironment() {
    return this.getBooleanAttribute('ignore_environment');
  }
  public set ignoreEnvironment(value: boolean | cdktf.IResolvable) {
    this._ignoreEnvironment = value;
  }
  public resetIgnoreEnvironment() {
    this._ignoreEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEnvironmentInput() {
    return this._ignoreEnvironment;
  }

  // manifest - computed: true, optional: false, required: false
  private _manifest = new cdktf.AnyMap(this, "manifest");
  public get manifest() {
    return this._manifest;
  }

  // manifest_path - computed: false, optional: true, required: false
  private _manifestPath?: string; 
  public get manifestPath() {
    return this.getStringAttribute('manifest_path');
  }
  public set manifestPath(value: string) {
    this._manifestPath = value;
  }
  public resetManifestPath() {
    this._manifestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestPathInput() {
    return this._manifestPath;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // packer_version - computed: true, optional: false, required: false
  public get packerVersion() {
    return this.getStringAttribute('packer_version');
  }

  // sensitive_variables - computed: false, optional: true, required: false
  private _sensitiveVariables?: { [key: string]: any }; 
  public get sensitiveVariables() {
    return this.getAnyMapAttribute('sensitive_variables');
  }
  public set sensitiveVariables(value: { [key: string]: any }) {
    this._sensitiveVariables = value;
  }
  public resetSensitiveVariables() {
    this._sensitiveVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveVariablesInput() {
    return this._sensitiveVariables;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: any }; 
  public get variables() {
    return this.getAnyMapAttribute('variables');
  }
  public set variables(value: { [key: string]: any }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_params: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalParams),
      directory: cdktf.stringToTerraform(this._directory),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      file: cdktf.stringToTerraform(this._file),
      force: cdktf.booleanToTerraform(this._force),
      ignore_environment: cdktf.booleanToTerraform(this._ignoreEnvironment),
      manifest_path: cdktf.stringToTerraform(this._manifestPath),
      name: cdktf.stringToTerraform(this._name),
      sensitive_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._sensitiveVariables),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_params: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalParams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_environment: {
        value: cdktf.booleanToHclTerraform(this._ignoreEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manifest_path: {
        value: cdktf.stringToHclTerraform(this._manifestPath),
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
      sensitive_variables: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._sensitiveVariables),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      variables: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._variables),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
