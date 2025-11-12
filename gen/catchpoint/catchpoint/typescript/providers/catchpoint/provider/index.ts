// https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatchpointProviderConfig {
  /**
  * The Catchpoint API v2 token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs#api_token CatchpointProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Set the environment to stage, qa or prod. This is for internal use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs#catchpoint_environment CatchpointProvider#catchpoint_environment}
  */
  readonly catchpointEnvironment?: string;
  /**
  * Enable or disable test json payload logging for debugging. Accepts string and converts to bool using ParseBool function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs#log_json CatchpointProvider#log_json}
  */
  readonly logJson?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs#alias CatchpointProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs catchpoint}
*/
export class CatchpointProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catchpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatchpointProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatchpointProvider to import
  * @param importFromId The id of the existing CatchpointProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatchpointProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catchpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs catchpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatchpointProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CatchpointProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'catchpoint',
      terraformGeneratorMetadata: {
        providerName: 'catchpoint',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      terraformProviderSource: 'catchpoint/catchpoint'
    });
    this._apiToken = config.apiToken;
    this._catchpointEnvironment = config.catchpointEnvironment;
    this._logJson = config.logJson;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // catchpoint_environment - computed: false, optional: true, required: false
  private _catchpointEnvironment?: string; 
  public get catchpointEnvironment() {
    return this._catchpointEnvironment;
  }
  public set catchpointEnvironment(value: string | undefined) {
    this._catchpointEnvironment = value;
  }
  public resetCatchpointEnvironment() {
    this._catchpointEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchpointEnvironmentInput() {
    return this._catchpointEnvironment;
  }

  // log_json - computed: false, optional: true, required: false
  private _logJson?: string; 
  public get logJson() {
    return this._logJson;
  }
  public set logJson(value: string | undefined) {
    this._logJson = value;
  }
  public resetLogJson() {
    this._logJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logJsonInput() {
    return this._logJson;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      catchpoint_environment: cdktf.stringToTerraform(this._catchpointEnvironment),
      log_json: cdktf.stringToTerraform(this._logJson),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catchpoint_environment: {
        value: cdktf.stringToHclTerraform(this._catchpointEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_json: {
        value: cdktf.stringToHclTerraform(this._logJson),
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
