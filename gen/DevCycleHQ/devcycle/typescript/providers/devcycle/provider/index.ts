// https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevcycleProviderConfig {
  /**
  * API Authentication Client ID. Found in your DevCycle account settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs#client_id DevcycleProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * API Authentication Client Secret. Found in your DevCycle account settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs#client_secret DevcycleProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Server SDK Token. This is specific to a given project, and an environment. Used to identify and authenticate server sdk requests to evaluate feature flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs#server_sdk_token DevcycleProvider#server_sdk_token}
  */
  readonly serverSdkToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs#alias DevcycleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs devcycle}
*/
export class DevcycleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "devcycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevcycleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevcycleProvider to import
  * @param importFromId The id of the existing DevcycleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevcycleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "devcycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs devcycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevcycleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DevcycleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'devcycle',
      terraformGeneratorMetadata: {
        providerName: 'devcycle',
        providerVersion: '1.0.2'
      },
      terraformProviderSource: 'DevCycleHQ/devcycle'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._serverSdkToken = config.serverSdkToken;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // server_sdk_token - computed: false, optional: true, required: false
  private _serverSdkToken?: string; 
  public get serverSdkToken() {
    return this._serverSdkToken;
  }
  public set serverSdkToken(value: string | undefined) {
    this._serverSdkToken = value;
  }
  public resetServerSdkToken() {
    this._serverSdkToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSdkTokenInput() {
    return this._serverSdkToken;
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
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      server_sdk_token: cdktf.stringToTerraform(this._serverSdkToken),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_sdk_token: {
        value: cdktf.stringToHclTerraform(this._serverSdkToken),
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
