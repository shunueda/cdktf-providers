// https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfluentSchemaRegistryProviderConfig {
  /**
  * Static bearer token for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#bearer_token ConfluentSchemaRegistryProvider#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * OAuth2 client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#oauth2_client_id ConfluentSchemaRegistryProvider#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * OAuth2 client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#oauth2_client_secret ConfluentSchemaRegistryProvider#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
  /**
  * OAuth2 scopes to request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#oauth2_scopes ConfluentSchemaRegistryProvider#oauth2_scopes}
  */
  readonly oauth2Scopes?: string[];
  /**
  * OAuth2 token endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#oauth2_token_url ConfluentSchemaRegistryProvider#oauth2_token_url}
  */
  readonly oauth2TokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#password ConfluentSchemaRegistryProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#schema_registry_url ConfluentSchemaRegistryProvider#schema_registry_url}
  */
  readonly schemaRegistryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#username ConfluentSchemaRegistryProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#alias ConfluentSchemaRegistryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs confluent-schema-registry}
*/
export class ConfluentSchemaRegistryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent-schema-registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfluentSchemaRegistryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfluentSchemaRegistryProvider to import
  * @param importFromId The id of the existing ConfluentSchemaRegistryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfluentSchemaRegistryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent-schema-registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/1.0.0/docs confluent-schema-registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfluentSchemaRegistryProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfluentSchemaRegistryProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent-schema-registry',
      terraformGeneratorMetadata: {
        providerName: 'confluent-schema-registry',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      terraformProviderSource: 'DrFaust92/confluent-schema-registry'
    });
    this._bearerToken = config.bearerToken;
    this._oauth2ClientId = config.oauth2ClientId;
    this._oauth2ClientSecret = config.oauth2ClientSecret;
    this._oauth2Scopes = config.oauth2Scopes;
    this._oauth2TokenUrl = config.oauth2TokenUrl;
    this._password = config.password;
    this._schemaRegistryUrl = config.schemaRegistryUrl;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this._bearerToken;
  }
  public set bearerToken(value: string | undefined) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this._oauth2ClientId;
  }
  public set oauth2ClientId(value: string | undefined) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this._oauth2ClientSecret;
  }
  public set oauth2ClientSecret(value: string | undefined) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_scopes - computed: false, optional: true, required: false
  private _oauth2Scopes?: string[]; 
  public get oauth2Scopes() {
    return this._oauth2Scopes;
  }
  public set oauth2Scopes(value: string[] | undefined) {
    this._oauth2Scopes = value;
  }
  public resetOauth2Scopes() {
    this._oauth2Scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ScopesInput() {
    return this._oauth2Scopes;
  }

  // oauth2_token_url - computed: false, optional: true, required: false
  private _oauth2TokenUrl?: string; 
  public get oauth2TokenUrl() {
    return this._oauth2TokenUrl;
  }
  public set oauth2TokenUrl(value: string | undefined) {
    this._oauth2TokenUrl = value;
  }
  public resetOauth2TokenUrl() {
    this._oauth2TokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TokenUrlInput() {
    return this._oauth2TokenUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // schema_registry_url - computed: false, optional: true, required: false
  private _schemaRegistryUrl?: string; 
  public get schemaRegistryUrl() {
    return this._schemaRegistryUrl;
  }
  public set schemaRegistryUrl(value: string | undefined) {
    this._schemaRegistryUrl = value;
  }
  public resetSchemaRegistryUrl() {
    this._schemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUrlInput() {
    return this._schemaRegistryUrl;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      oauth2_client_id: cdktf.stringToTerraform(this._oauth2ClientId),
      oauth2_client_secret: cdktf.stringToTerraform(this._oauth2ClientSecret),
      oauth2_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauth2Scopes),
      oauth2_token_url: cdktf.stringToTerraform(this._oauth2TokenUrl),
      password: cdktf.stringToTerraform(this._password),
      schema_registry_url: cdktf.stringToTerraform(this._schemaRegistryUrl),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_id: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauth2Scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oauth2_token_url: {
        value: cdktf.stringToHclTerraform(this._oauth2TokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_url: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
