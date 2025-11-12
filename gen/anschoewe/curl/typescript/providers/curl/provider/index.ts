// https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurlProviderConfig {
  /**
  * OAuth2 client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#client_id CurlProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth2 value expected by Azure AD when issuing tokens.  It affects the 'audience' in the issued access_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#resource CurlProvider#resource}
  */
  readonly resource?: string;
  /**
  * OAuth2 secret.  Instead of setting the secret in the Terraform file, using the CURL_CLIENT_SECRET environment variable is advised.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#secret CurlProvider#secret}
  */
  readonly secret?: string;
  /**
  * OAuth2 value expected by Azure AD when issuing tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#tenant_id CurlProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#alias CurlProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs curl}
*/
export class CurlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "curl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CurlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurlProvider to import
  * @param importFromId The id of the existing CurlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "curl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anschoewe/curl/1.0.2/docs curl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CurlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'curl',
      terraformGeneratorMetadata: {
        providerName: 'curl',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      terraformProviderSource: 'anschoewe/curl'
    });
    this._clientId = config.clientId;
    this._resource = config.resource;
    this._secret = config.secret;
    this._tenantId = config.tenantId;
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this._resource;
  }
  public set resource(value: string | undefined) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
      resource: cdktf.stringToTerraform(this._resource),
      secret: cdktf.stringToTerraform(this._secret),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
