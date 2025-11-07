// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsSecretKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The raw environment variables before they are interpolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys#input_env_variables DataNsSecretKeys#input_env_variables}
  */
  readonly inputEnvVariables: { [key: string]: string };
  /**
  * The raw secrets before they are interpolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys#input_secret_keys DataNsSecretKeys#input_secret_keys}
  */
  readonly inputSecretKeys: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys ns_secret_keys}
*/
export class DataNsSecretKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_secret_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsSecretKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsSecretKeys to import
  * @param importFromId The id of the existing DataNsSecretKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsSecretKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_secret_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs/data-sources/secret_keys ns_secret_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsSecretKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsSecretKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_secret_keys',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.0'
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
    this._inputSecretKeys = config.inputSecretKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // input_secret_keys - computed: false, optional: false, required: true
  private _inputSecretKeys?: string[]; 
  public get inputSecretKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('input_secret_keys'));
  }
  public set inputSecretKeys(value: string[]) {
    this._inputSecretKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSecretKeysInput() {
    return this._inputSecretKeys;
  }

  // secret_keys - computed: true, optional: false, required: false
  public get secretKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_keys'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_env_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._inputEnvVariables),
      input_secret_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inputSecretKeys),
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
      input_secret_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inputSecretKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
