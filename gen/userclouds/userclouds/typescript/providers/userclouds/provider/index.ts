// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsercloudsProviderConfig {
  /**
  * UserClouds API Client ID. May also be set using the `USERCLOUDS_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs#client_id UsercloudsProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * UserClouds API Client Secret. May also be set using the `USERCLOUDS_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs#client_secret UsercloudsProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * URL of the UserClouds tenant. May also be set using the `USERCLOUDS_TENANT_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs#tenant_url UsercloudsProvider#tenant_url}
  */
  readonly tenantUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs#alias UsercloudsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs userclouds}
*/
export class UsercloudsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UsercloudsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UsercloudsProvider to import
  * @param importFromId The id of the existing UsercloudsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UsercloudsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs userclouds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsercloudsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UsercloudsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'userclouds',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      terraformProviderSource: 'userclouds/userclouds'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._tenantUrl = config.tenantUrl;
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

  // tenant_url - computed: false, optional: true, required: false
  private _tenantUrl?: string; 
  public get tenantUrl() {
    return this._tenantUrl;
  }
  public set tenantUrl(value: string | undefined) {
    this._tenantUrl = value;
  }
  public resetTenantUrl() {
    this._tenantUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantUrlInput() {
    return this._tenantUrl;
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
      tenant_url: cdktf.stringToTerraform(this._tenantUrl),
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
      tenant_url: {
        value: cdktf.stringToHclTerraform(this._tenantUrl),
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
