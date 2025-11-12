// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Oauth2ConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional scopes key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#additional_scopes_key Oauth2Configuration#additional_scopes_key}
  */
  readonly additionalScopesKey?: string[];
  /**
  * Audience
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#audience Oauth2Configuration#audience}
  */
  readonly audience?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#instance_id Oauth2Configuration#instance_id}
  */
  readonly instanceId: number;
  /**
  * Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#issuer Oauth2Configuration#issuer}
  */
  readonly issuer: string;
  /**
  * Oauth client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#oauth_client_id Oauth2Configuration#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Oauth scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#oauth_scopes Oauth2Configuration#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Preferred username claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#preferred_username_claims Oauth2Configuration#preferred_username_claims}
  */
  readonly preferredUsernameClaims?: string[];
  /**
  * Resource server identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#resource_server_id Oauth2Configuration#resource_server_id}
  */
  readonly resourceServerId: string;
  /**
  * Scope aliases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#scope_aliases Oauth2Configuration#scope_aliases}
  */
  readonly scopeAliases?: { [key: string]: string };
  /**
  * Scope prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#scope_prefix Oauth2Configuration#scope_prefix}
  */
  readonly scopePrefix?: string;
  /**
  * Configurable sleep time in seconds between retries for OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#sleep Oauth2Configuration#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout time in seconds for OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#timeout Oauth2Configuration#timeout}
  */
  readonly timeout?: number;
  /**
  * Verify aud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#verify_aud Oauth2Configuration#verify_aud}
  */
  readonly verifyAud?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration cloudamqp_oauth2_configuration}
*/
export class Oauth2Configuration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_oauth2_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Oauth2Configuration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Oauth2Configuration to import
  * @param importFromId The id of the existing Oauth2Configuration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Oauth2Configuration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_oauth2_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.1/docs/resources/oauth2_configuration cloudamqp_oauth2_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Oauth2ConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Oauth2ConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_oauth2_configuration',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.1',
        providerVersionConstraint: '1.38.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalScopesKey = config.additionalScopesKey;
    this._audience = config.audience;
    this._instanceId = config.instanceId;
    this._issuer = config.issuer;
    this._oauthClientId = config.oauthClientId;
    this._oauthScopes = config.oauthScopes;
    this._preferredUsernameClaims = config.preferredUsernameClaims;
    this._resourceServerId = config.resourceServerId;
    this._scopeAliases = config.scopeAliases;
    this._scopePrefix = config.scopePrefix;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
    this._verifyAud = config.verifyAud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_scopes_key - computed: false, optional: true, required: false
  private _additionalScopesKey?: string[]; 
  public get additionalScopesKey() {
    return this.getListAttribute('additional_scopes_key');
  }
  public set additionalScopesKey(value: string[]) {
    this._additionalScopesKey = value;
  }
  public resetAdditionalScopesKey() {
    this._additionalScopesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalScopesKeyInput() {
    return this._additionalScopesKey;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preferred_username_claims - computed: false, optional: true, required: false
  private _preferredUsernameClaims?: string[]; 
  public get preferredUsernameClaims() {
    return this.getListAttribute('preferred_username_claims');
  }
  public set preferredUsernameClaims(value: string[]) {
    this._preferredUsernameClaims = value;
  }
  public resetPreferredUsernameClaims() {
    this._preferredUsernameClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameClaimsInput() {
    return this._preferredUsernameClaims;
  }

  // resource_server_id - computed: false, optional: false, required: true
  private _resourceServerId?: string; 
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }
  public set resourceServerId(value: string) {
    this._resourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdInput() {
    return this._resourceServerId;
  }

  // scope_aliases - computed: false, optional: true, required: false
  private _scopeAliases?: { [key: string]: string }; 
  public get scopeAliases() {
    return this.getStringMapAttribute('scope_aliases');
  }
  public set scopeAliases(value: { [key: string]: string }) {
    this._scopeAliases = value;
  }
  public resetScopeAliases() {
    this._scopeAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeAliasesInput() {
    return this._scopeAliases;
  }

  // scope_prefix - computed: false, optional: true, required: false
  private _scopePrefix?: string; 
  public get scopePrefix() {
    return this.getStringAttribute('scope_prefix');
  }
  public set scopePrefix(value: string) {
    this._scopePrefix = value;
  }
  public resetScopePrefix() {
    this._scopePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopePrefixInput() {
    return this._scopePrefix;
  }

  // sleep - computed: true, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // verify_aud - computed: true, optional: true, required: false
  private _verifyAud?: boolean | cdktf.IResolvable; 
  public get verifyAud() {
    return this.getBooleanAttribute('verify_aud');
  }
  public set verifyAud(value: boolean | cdktf.IResolvable) {
    this._verifyAud = value;
  }
  public resetVerifyAud() {
    this._verifyAud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAudInput() {
    return this._verifyAud;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_scopes_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalScopesKey),
      audience: cdktf.stringToTerraform(this._audience),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      issuer: cdktf.stringToTerraform(this._issuer),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthScopes),
      preferred_username_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredUsernameClaims),
      resource_server_id: cdktf.stringToTerraform(this._resourceServerId),
      scope_aliases: cdktf.hashMapper(cdktf.stringToTerraform)(this._scopeAliases),
      scope_prefix: cdktf.stringToTerraform(this._scopePrefix),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
      verify_aud: cdktf.booleanToTerraform(this._verifyAud),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_scopes_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalScopesKey),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_username_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredUsernameClaims),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_server_id: {
        value: cdktf.stringToHclTerraform(this._resourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_aliases: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._scopeAliases),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      scope_prefix: {
        value: cdktf.stringToHclTerraform(this._scopePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      verify_aud: {
        value: cdktf.booleanToHclTerraform(this._verifyAud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
