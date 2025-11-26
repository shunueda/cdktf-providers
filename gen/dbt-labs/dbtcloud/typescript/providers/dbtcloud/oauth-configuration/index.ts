// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Application ID URI for the OAuth integration. Only for Entra
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#application_id_uri OauthConfiguration#application_id_uri}
  */
  readonly applicationIdUri?: string;
  /**
  * The Authorize URL for the OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#authorize_url OauthConfiguration#authorize_url}
  */
  readonly authorizeUrl: string;
  /**
  * The Client ID for the OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#client_id OauthConfiguration#client_id}
  */
  readonly clientId: string;
  /**
  * The Client secret for the OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#client_secret OauthConfiguration#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The name of OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#name OauthConfiguration#name}
  */
  readonly name: string;
  /**
  * The redirect URL for the OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#redirect_uri OauthConfiguration#redirect_uri}
  */
  readonly redirectUri: string;
  /**
  * The Token URL for the OAuth integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#token_url OauthConfiguration#token_url}
  */
  readonly tokenUrl: string;
  /**
  * The type of OAuth integration (`entra` or `okta`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#type OauthConfiguration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration dbtcloud_oauth_configuration}
*/
export class OauthConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_oauth_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthConfiguration to import
  * @param importFromId The id of the existing OauthConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_oauth_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/oauth_configuration dbtcloud_oauth_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: OauthConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_oauth_configuration',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIdUri = config.applicationIdUri;
    this._authorizeUrl = config.authorizeUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._name = config.name;
    this._redirectUri = config.redirectUri;
    this._tokenUrl = config.tokenUrl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id_uri - computed: true, optional: true, required: false
  private _applicationIdUri?: string; 
  public get applicationIdUri() {
    return this.getStringAttribute('application_id_uri');
  }
  public set applicationIdUri(value: string) {
    this._applicationIdUri = value;
  }
  public resetApplicationIdUri() {
    this._applicationIdUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdUriInput() {
    return this._applicationIdUri;
  }

  // authorize_url - computed: false, optional: false, required: true
  private _authorizeUrl?: string; 
  public get authorizeUrl() {
    return this.getStringAttribute('authorize_url');
  }
  public set authorizeUrl(value: string) {
    this._authorizeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeUrlInput() {
    return this._authorizeUrl;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id_uri: cdktf.stringToTerraform(this._applicationIdUri),
      authorize_url: cdktf.stringToTerraform(this._authorizeUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      name: cdktf.stringToTerraform(this._name),
      redirect_uri: cdktf.stringToTerraform(this._redirectUri),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id_uri: {
        value: cdktf.stringToHclTerraform(this._applicationIdUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorize_url: {
        value: cdktf.stringToHclTerraform(this._authorizeUrl),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uri: {
        value: cdktf.stringToHclTerraform(this._redirectUri),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
