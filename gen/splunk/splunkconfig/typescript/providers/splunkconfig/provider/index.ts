// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplunkconfigProviderConfig {
  /**
  * YAML content containing the abstracted configuration. Exactly one of `configuration`, `configuration_file`, or `configuration_path` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs#configuration SplunkconfigProvider#configuration}
  */
  readonly configuration?: string;
  /**
  * Full path to YAML file containing the abstracted configuration. Exactly one of `configuration`, `configuration_file`, or `configuration_path` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs#configuration_file SplunkconfigProvider#configuration_file}
  */
  readonly configurationFile?: string;
  /**
  * Full path to directory containing one or more YAML files containing the abstracted configuration. Exactly one of `configuration`, `configuration_file`, or `configuration_path` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs#configuration_path SplunkconfigProvider#configuration_path}
  */
  readonly configurationPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs#alias SplunkconfigProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs splunkconfig}
*/
export class SplunkconfigProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SplunkconfigProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SplunkconfigProvider to import
  * @param importFromId The id of the existing SplunkconfigProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SplunkconfigProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs splunkconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplunkconfigProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SplunkconfigProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
      },
      terraformProviderSource: 'splunk/splunkconfig'
    });
    this._configuration = config.configuration;
    this._configurationFile = config.configurationFile;
    this._configurationPath = config.configurationPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: string | undefined) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // configuration_file - computed: false, optional: true, required: false
  private _configurationFile?: string; 
  public get configurationFile() {
    return this._configurationFile;
  }
  public set configurationFile(value: string | undefined) {
    this._configurationFile = value;
  }
  public resetConfigurationFile() {
    this._configurationFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationFileInput() {
    return this._configurationFile;
  }

  // configuration_path - computed: false, optional: true, required: false
  private _configurationPath?: string; 
  public get configurationPath() {
    return this._configurationPath;
  }
  public set configurationPath(value: string | undefined) {
    this._configurationPath = value;
  }
  public resetConfigurationPath() {
    this._configurationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPathInput() {
    return this._configurationPath;
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
      configuration: cdktf.stringToTerraform(this._configuration),
      configuration_file: cdktf.stringToTerraform(this._configurationFile),
      configuration_path: cdktf.stringToTerraform(this._configurationPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_file: {
        value: cdktf.stringToHclTerraform(this._configurationFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_path: {
        value: cdktf.stringToHclTerraform(this._configurationPath),
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
