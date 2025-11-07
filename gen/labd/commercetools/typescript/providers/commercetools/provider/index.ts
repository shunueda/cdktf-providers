// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommercetoolsProviderConfig {
  /**
  * The API URL of the commercetools platform. https://docs.commercetools.com/api/general-concepts#hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#api_url CommercetoolsProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The OAuth Client ID for a commercetools platform project. https://docs.commercetools.com/api/authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#client_id CommercetoolsProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth Client Secret for a commercetools platform project. https://docs.commercetools.com/api/authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#client_secret CommercetoolsProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The project key of commercetools platform project. https://docs.commercetools.com/getting-started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#project_key CommercetoolsProvider#project_key}
  */
  readonly projectKey?: string;
  /**
  * A list as string of OAuth scopes assigned to a project key, to access resources in a commercetools platform project. https://docs.commercetools.com/api/authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#scopes CommercetoolsProvider#scopes}
  */
  readonly scopes?: string;
  /**
  * The authentication URL of the commercetools platform. https://docs.commercetools.com/api/authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#token_url CommercetoolsProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#alias CommercetoolsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs commercetools}
*/
export class CommercetoolsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommercetoolsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommercetoolsProvider to import
  * @param importFromId The id of the existing CommercetoolsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommercetoolsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs commercetools} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommercetoolsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CommercetoolsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commercetools',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
      },
      terraformProviderSource: 'labd/commercetools'
    });
    this._apiUrl = config.apiUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._projectKey = config.projectKey;
    this._scopes = config.scopes;
    this._tokenUrl = config.tokenUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

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

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this._projectKey;
  }
  public set projectKey(value: string | undefined) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public set tokenUrl(value: string | undefined) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      project_key: cdktf.stringToTerraform(this._projectKey),
      scopes: cdktf.stringToTerraform(this._scopes),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.stringToHclTerraform(this._scopes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
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
