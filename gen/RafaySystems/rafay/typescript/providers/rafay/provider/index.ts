// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RafayProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs#ignore_insecure_tls_error RafayProvider#ignore_insecure_tls_error}
  */
  readonly ignoreInsecureTlsError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs#provider_config_file RafayProvider#provider_config_file}
  */
  readonly providerConfigFile?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs#alias RafayProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs rafay}
*/
export class RafayProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RafayProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RafayProvider to import
  * @param importFromId The id of the existing RafayProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RafayProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs rafay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RafayProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RafayProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
      },
      terraformProviderSource: 'RafaySystems/rafay'
    });
    this._ignoreInsecureTlsError = config.ignoreInsecureTlsError;
    this._providerConfigFile = config.providerConfigFile;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ignore_insecure_tls_error - computed: false, optional: true, required: false
  private _ignoreInsecureTlsError?: boolean | cdktf.IResolvable; 
  public get ignoreInsecureTlsError() {
    return this._ignoreInsecureTlsError;
  }
  public set ignoreInsecureTlsError(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreInsecureTlsError = value;
  }
  public resetIgnoreInsecureTlsError() {
    this._ignoreInsecureTlsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInsecureTlsErrorInput() {
    return this._ignoreInsecureTlsError;
  }

  // provider_config_file - computed: false, optional: true, required: false
  private _providerConfigFile?: string; 
  public get providerConfigFile() {
    return this._providerConfigFile;
  }
  public set providerConfigFile(value: string | undefined) {
    this._providerConfigFile = value;
  }
  public resetProviderConfigFile() {
    this._providerConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigFileInput() {
    return this._providerConfigFile;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_insecure_tls_error: cdktf.booleanToTerraform(this._ignoreInsecureTlsError),
      provider_config_file: cdktf.stringToTerraform(this._providerConfigFile),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ignore_insecure_tls_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreInsecureTlsError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_config_file: {
        value: cdktf.stringToHclTerraform(this._providerConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
