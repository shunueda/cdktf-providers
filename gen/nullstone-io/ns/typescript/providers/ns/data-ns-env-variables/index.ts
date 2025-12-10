// https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsEnvVariablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The raw environment variables before they are interpolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables#input_env_variables DataNsEnvVariables#input_env_variables}
  */
  readonly inputEnvVariables: { [key: string]: string };
  /**
  * The raw secrets before they are interpolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables#input_secrets DataNsEnvVariables#input_secrets}
  */
  readonly inputSecrets: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables ns_env_variables}
*/
export class DataNsEnvVariables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_env_variables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsEnvVariables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsEnvVariables to import
  * @param importFromId The id of the existing DataNsEnvVariables that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsEnvVariables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_env_variables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/env_variables ns_env_variables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsEnvVariablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsEnvVariablesConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_env_variables',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._inputEnvVariables = config.inputEnvVariables;
    this._inputSecrets = config.inputSecrets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_variables - computed: true, optional: false, required: false
  private _envVariables = new cdktf.StringMap(this, "env_variables");
  public get envVariables() {
    return this._envVariables;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_env_variables - computed: false, optional: false, required: true
  private _inputEnvVariables?: { [key: string]: string }; 
  public get inputEnvVariables() {
    return this.getStringMapAttribute('input_env_variables');
  }
  public set inputEnvVariables(value: { [key: string]: string }) {
    this._inputEnvVariables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputEnvVariablesInput() {
    return this._inputEnvVariables;
  }

  // input_secrets - computed: false, optional: false, required: true
  private _inputSecrets?: { [key: string]: string }; 
  public get inputSecrets() {
    return this.getStringMapAttribute('input_secrets');
  }
  public set inputSecrets(value: { [key: string]: string }) {
    this._inputSecrets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSecretsInput() {
    return this._inputSecrets;
  }

  // secret_refs - computed: true, optional: false, required: false
  private _secretRefs = new cdktf.StringMap(this, "secret_refs");
  public get secretRefs() {
    return this._secretRefs;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new cdktf.StringMap(this, "secrets");
  public get secrets() {
    return this._secrets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_env_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputEnvVariables),
      input_secrets: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputSecrets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      input_env_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inputEnvVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      input_secrets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inputSecrets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
