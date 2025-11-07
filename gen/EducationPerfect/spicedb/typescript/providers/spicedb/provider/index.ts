// https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpicedbProviderConfig {
  /**
  * SpiceDB gRPC API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs#endpoint SpicedbProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Connect over a plaintext connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs#insecure SpicedbProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * SpiceDB API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs#token SpicedbProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs#alias SpicedbProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs spicedb}
*/
export class SpicedbProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spicedb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpicedbProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpicedbProvider to import
  * @param importFromId The id of the existing SpicedbProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpicedbProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spicedb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/educationperfect/spicedb/0.1.0/docs spicedb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpicedbProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SpicedbProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'spicedb',
      terraformGeneratorMetadata: {
        providerName: 'spicedb',
        providerVersion: '0.1.0'
      },
      terraformProviderSource: 'EducationPerfect/spicedb'
    });
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
