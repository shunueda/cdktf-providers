// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderKeycloakConfig extends cdktf.TerraformMetaArguments {
  /**
  * must be 'keycloak'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#authsource IdentityProviderKeycloak#authsource}
  */
  readonly authsource?: string;
  /**
  * the Client ID assigned to mailcow Client in Keycloak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#client_id IdentityProviderKeycloak#client_id}
  */
  readonly clientId: string;
  /**
  * the Client Secret assigned to the mailcow client in Keycloak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#client_secret IdentityProviderKeycloak#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#id IdentityProviderKeycloak#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#ignore_ssl_error IdentityProviderKeycloak#ignore_ssl_error}
  */
  readonly ignoreSslError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#import_users IdentityProviderKeycloak#import_users}
  */
  readonly importUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#mailpassword_flow IdentityProviderKeycloak#mailpassword_flow}
  */
  readonly mailpasswordFlow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#periodic_sync IdentityProviderKeycloak#periodic_sync}
  */
  readonly periodicSync?: boolean | cdktf.IResolvable;
  /**
  * the Keycloak realm where the mailcow client is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#realm IdentityProviderKeycloak#realm}
  */
  readonly realm: string;
  /**
  * the redirect URL that Keycloak will use after authentication. This should point to your mailcow UI. Example: https://mail.mailcow.tld
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#redirect_url IdentityProviderKeycloak#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * the base URL of the Keycloak server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#server_url IdentityProviderKeycloak#server_url}
  */
  readonly serverUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#sync_interval IdentityProviderKeycloak#sync_interval}
  */
  readonly syncInterval?: number;
  /**
  * specifies the Keycloak version (cite from blog 'It is essential to know whether a version greater or smaller than 20 is used since mailcow needs to add the '“openid'” scope accordingly.')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#version IdentityProviderKeycloak#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak mailcow_identity_provider_keycloak}
*/
export class IdentityProviderKeycloak extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_identity_provider_keycloak";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProviderKeycloak resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProviderKeycloak to import
  * @param importFromId The id of the existing IdentityProviderKeycloak that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProviderKeycloak to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_identity_provider_keycloak", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/identity_provider_keycloak mailcow_identity_provider_keycloak} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderKeycloakConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderKeycloakConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_identity_provider_keycloak',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authsource = config.authsource;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._id = config.id;
    this._ignoreSslError = config.ignoreSslError;
    this._importUsers = config.importUsers;
    this._mailpasswordFlow = config.mailpasswordFlow;
    this._periodicSync = config.periodicSync;
    this._realm = config.realm;
    this._redirectUrl = config.redirectUrl;
    this._serverUrl = config.serverUrl;
    this._syncInterval = config.syncInterval;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authsource - computed: false, optional: true, required: false
  private _authsource?: string; 
  public get authsource() {
    return this.getStringAttribute('authsource');
  }
  public set authsource(value: string) {
    this._authsource = value;
  }
  public resetAuthsource() {
    this._authsource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authsourceInput() {
    return this._authsource;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_ssl_error - computed: false, optional: true, required: false
  private _ignoreSslError?: boolean | cdktf.IResolvable; 
  public get ignoreSslError() {
    return this.getBooleanAttribute('ignore_ssl_error');
  }
  public set ignoreSslError(value: boolean | cdktf.IResolvable) {
    this._ignoreSslError = value;
  }
  public resetIgnoreSslError() {
    this._ignoreSslError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslErrorInput() {
    return this._ignoreSslError;
  }

  // import_users - computed: false, optional: true, required: false
  private _importUsers?: boolean | cdktf.IResolvable; 
  public get importUsers() {
    return this.getBooleanAttribute('import_users');
  }
  public set importUsers(value: boolean | cdktf.IResolvable) {
    this._importUsers = value;
  }
  public resetImportUsers() {
    this._importUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUsersInput() {
    return this._importUsers;
  }

  // mailpassword_flow - computed: false, optional: true, required: false
  private _mailpasswordFlow?: boolean | cdktf.IResolvable; 
  public get mailpasswordFlow() {
    return this.getBooleanAttribute('mailpassword_flow');
  }
  public set mailpasswordFlow(value: boolean | cdktf.IResolvable) {
    this._mailpasswordFlow = value;
  }
  public resetMailpasswordFlow() {
    this._mailpasswordFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailpasswordFlowInput() {
    return this._mailpasswordFlow;
  }

  // periodic_sync - computed: false, optional: true, required: false
  private _periodicSync?: boolean | cdktf.IResolvable; 
  public get periodicSync() {
    return this.getBooleanAttribute('periodic_sync');
  }
  public set periodicSync(value: boolean | cdktf.IResolvable) {
    this._periodicSync = value;
  }
  public resetPeriodicSync() {
    this._periodicSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicSyncInput() {
    return this._periodicSync;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // server_url - computed: false, optional: false, required: true
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // sync_interval - computed: false, optional: true, required: false
  private _syncInterval?: number; 
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }
  public set syncInterval(value: number) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authsource: cdktf.stringToTerraform(this._authsource),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      id: cdktf.stringToTerraform(this._id),
      ignore_ssl_error: cdktf.booleanToTerraform(this._ignoreSslError),
      import_users: cdktf.booleanToTerraform(this._importUsers),
      mailpassword_flow: cdktf.booleanToTerraform(this._mailpasswordFlow),
      periodic_sync: cdktf.booleanToTerraform(this._periodicSync),
      realm: cdktf.stringToTerraform(this._realm),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      sync_interval: cdktf.numberToTerraform(this._syncInterval),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authsource: {
        value: cdktf.stringToHclTerraform(this._authsource),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_ssl_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreSslError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_users: {
        value: cdktf.booleanToHclTerraform(this._importUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mailpassword_flow: {
        value: cdktf.booleanToHclTerraform(this._mailpasswordFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      periodic_sync: {
        value: cdktf.booleanToHclTerraform(this._periodicSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
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
      sync_interval: {
        value: cdktf.numberToHclTerraform(this._syncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
