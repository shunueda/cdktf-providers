// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamkapProviderConfig {
  /**
  * The Streamkap API client_id. If not set, Streamkap will use environment variable `STREAMKAP_CLIENT_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs#client_id StreamkapProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Streamkap API host. If not set, Streamkap will use environment variable `STREAMKAP_HOST`. Defaults to https://api.streamkap.com if both are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs#host StreamkapProvider#host}
  */
  readonly host?: string;
  /**
  * The Streamkap API secret. If not set, Streamkap will use environment variable `STREAMKAP_SECRET`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs#secret StreamkapProvider#secret}
  */
  readonly secret?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs#alias StreamkapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs streamkap}
*/
export class StreamkapProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamkapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamkapProvider to import
  * @param importFromId The id of the existing StreamkapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamkapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs streamkap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamkapProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StreamkapProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'streamkap',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.17',
        providerVersionConstraint: '2.1.17'
      },
      terraformProviderSource: 'streamkap-com/streamkap'
    });
    this._clientId = config.clientId;
    this._host = config.host;
    this._secret = config.secret;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this._secret;
  }
  public set secret(value: string | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      host: cdktf.stringToTerraform(this._host),
      secret: cdktf.stringToTerraform(this._secret),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
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
