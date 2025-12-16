// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CriblioProviderConfig {
  /**
  * HTTP Bearer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#bearer_auth CriblioProvider#bearer_auth}
  */
  readonly bearerAuth?: string;
  /**
  * OAuth2 Client Credentials Flow client identifier. Configurable via environment variable `CRIBL_CLIENT_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#client_id CriblioProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth2 Client Credentials Flow client secret. Configurable via environment variable `CRIBL_CLIENT_SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#client_secret CriblioProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Cribl Cloud domain name (defaults to cribl.cloud)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#cloud_domain CriblioProvider#cloud_domain}
  */
  readonly cloudDomain?: string;
  /**
  * The Organization ID (defaults to ian)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#organization_id CriblioProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Server URL (defaults to https://{workspaceId}-{organizationId}.{cloudDomain})
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#server_url CriblioProvider#server_url}
  */
  readonly serverUrl?: string;
  /**
  * OAuth2 Client Credentials Flow token URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#token_url CriblioProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * The Workspace name (defaults to main)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#workspace_id CriblioProvider#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#alias CriblioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs criblio}
*/
export class CriblioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CriblioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CriblioProvider to import
  * @param importFromId The id of the existing CriblioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CriblioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs criblio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CriblioProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CriblioProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      terraformProviderSource: 'criblio/criblio'
    });
    this._bearerAuth = config.bearerAuth;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._cloudDomain = config.cloudDomain;
    this._organizationId = config.organizationId;
    this._serverUrl = config.serverUrl;
    this._tokenUrl = config.tokenUrl;
    this._workspaceId = config.workspaceId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_auth - computed: false, optional: true, required: false
  private _bearerAuth?: string; 
  public get bearerAuth() {
    return this._bearerAuth;
  }
  public set bearerAuth(value: string | undefined) {
    this._bearerAuth = value;
  }
  public resetBearerAuth() {
    this._bearerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerAuthInput() {
    return this._bearerAuth;
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

  // cloud_domain - computed: false, optional: true, required: false
  private _cloudDomain?: string; 
  public get cloudDomain() {
    return this._cloudDomain;
  }
  public set cloudDomain(value: string | undefined) {
    this._cloudDomain = value;
  }
  public resetCloudDomain() {
    this._cloudDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDomainInput() {
    return this._cloudDomain;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this._workspaceId;
  }
  public set workspaceId(value: string | undefined) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
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
      bearer_auth: cdktf.stringToTerraform(this._bearerAuth),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      cloud_domain: cdktf.stringToTerraform(this._cloudDomain),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_auth: {
        value: cdktf.stringToHclTerraform(this._bearerAuth),
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
      cloud_domain: {
        value: cdktf.stringToHclTerraform(this._cloudDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
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
