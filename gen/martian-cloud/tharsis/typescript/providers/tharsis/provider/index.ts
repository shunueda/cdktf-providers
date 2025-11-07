// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TharsisProviderConfig {
  /**
  * This is the hostname for the Tharsis API (e.g. https://tharsis.example.com).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#host TharsisProvider#host}
  */
  readonly host?: string;
  /**
  * A Service account path to use for authenticating with the Tharsis API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#service_account_path TharsisProvider#service_account_path}
  */
  readonly serviceAccountPath?: string;
  /**
  * A Service account token to use for authenticating with the Tharsis API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#service_account_token TharsisProvider#service_account_token}
  */
  readonly serviceAccountToken?: string;
  /**
  * A static token to use to authenticate with the Tharsis API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#static_token TharsisProvider#static_token}
  */
  readonly staticToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#alias TharsisProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs tharsis}
*/
export class TharsisProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TharsisProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TharsisProvider to import
  * @param importFromId The id of the existing TharsisProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TharsisProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs tharsis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TharsisProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TharsisProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tharsis',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1'
      },
      terraformProviderSource: 'martian-cloud/tharsis'
    });
    this._host = config.host;
    this._serviceAccountPath = config.serviceAccountPath;
    this._serviceAccountToken = config.serviceAccountToken;
    this._staticToken = config.staticToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // service_account_path - computed: false, optional: true, required: false
  private _serviceAccountPath?: string; 
  public get serviceAccountPath() {
    return this._serviceAccountPath;
  }
  public set serviceAccountPath(value: string | undefined) {
    this._serviceAccountPath = value;
  }
  public resetServiceAccountPath() {
    this._serviceAccountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPathInput() {
    return this._serviceAccountPath;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken?: string; 
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public set serviceAccountToken(value: string | undefined) {
    this._serviceAccountToken = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken;
  }

  // static_token - computed: false, optional: true, required: false
  private _staticToken?: string; 
  public get staticToken() {
    return this._staticToken;
  }
  public set staticToken(value: string | undefined) {
    this._staticToken = value;
  }
  public resetStaticToken() {
    this._staticToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTokenInput() {
    return this._staticToken;
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
      host: cdktf.stringToTerraform(this._host),
      service_account_path: cdktf.stringToTerraform(this._serviceAccountPath),
      service_account_token: cdktf.stringToTerraform(this._serviceAccountToken),
      static_token: cdktf.stringToTerraform(this._staticToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_path: {
        value: cdktf.stringToHclTerraform(this._serviceAccountPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_token: {
        value: cdktf.stringToHclTerraform(this._staticToken),
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
