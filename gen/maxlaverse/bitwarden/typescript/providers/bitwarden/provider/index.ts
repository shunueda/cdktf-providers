// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BitwardenProviderConfig {
  /**
  * Machine Account Access Token (env: `BWS_ACCESS_TOKEN`)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#access_token BitwardenProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Client ID (env: `BW_CLIENTID`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#client_id BitwardenProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client Secret (env: `BW_CLIENTSECRET`). Do not commit this information in Git unless you know what you're doing. Prefer using a Terraform `variable {}` in order to inject this value from the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#client_secret BitwardenProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Login Email of the Vault (env: `BW_EMAIL`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#email BitwardenProvider#email}
  */
  readonly email?: string;
  /**
  * Extends the well known 'root' CAs (like VeriSign) with the extra certificates in file (env: `NODE_EXTRA_CA_CERTS`, doesn't work with embedded client).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#extra_ca_certs BitwardenProvider#extra_ca_certs}
  */
  readonly extraCaCerts?: string;
  /**
  * Master password of the Vault (env: `BW_PASSWORD`). Do not commit this information in Git unless you know what you're doing. Prefer using a Terraform `variable {}` in order to inject this value from the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#master_password BitwardenProvider#master_password}
  */
  readonly masterPassword?: string;
  /**
  * Bitwarden Server URL (default: `https://vault.bitwarden.com`, env: `BW_URL` or `BWS_SERVER_URL`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#server BitwardenProvider#server}
  */
  readonly server?: string;
  /**
  * A Bitwarden Session Key (env: `BW_SESSION`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#session_key BitwardenProvider#session_key}
  */
  readonly sessionKey?: string;
  /**
  * Alternative directory for storing the Vault locally (default: `.bitwarden/`, env: `BITWARDENCLI_APPDATA_DIR`; set to empty string to use CLI default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#vault_path BitwardenProvider#vault_path}
  */
  readonly vaultPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#alias BitwardenProvider#alias}
  */
  readonly alias?: string;
  /**
  * experimental block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#experimental BitwardenProvider#experimental}
  */
  readonly experimental?: BitwardenProviderExperimental[] | cdktf.IResolvable;
}
export interface BitwardenProviderExperimental {
  /**
  * Skip verification of server-side modifications (like timestamp updates) after write operations - useful when the Bitwarden server makes minor, non-functional changes to objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#disable_sync_after_write_verification BitwardenProvider#disable_sync_after_write_verification}
  */
  readonly disableSyncAfterWriteVerification?: boolean | cdktf.IResolvable;
  /**
  * Use the embedded client instead of an external binary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#embedded_client BitwardenProvider#embedded_client}
  */
  readonly embeddedClient?: boolean | cdktf.IResolvable;
}

export function bitwardenProviderExperimentalToTerraform(struct?: BitwardenProviderExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sync_after_write_verification: cdktf.booleanToTerraform(struct!.disableSyncAfterWriteVerification),
    embedded_client: cdktf.booleanToTerraform(struct!.embeddedClient),
  }
}


export function bitwardenProviderExperimentalToHclTerraform(struct?: BitwardenProviderExperimental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sync_after_write_verification: {
      value: cdktf.booleanToHclTerraform(struct!.disableSyncAfterWriteVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    embedded_client: {
      value: cdktf.booleanToHclTerraform(struct!.embeddedClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs bitwarden}
*/
export class BitwardenProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BitwardenProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BitwardenProvider to import
  * @param importFromId The id of the existing BitwardenProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BitwardenProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs bitwarden} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BitwardenProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BitwardenProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bitwarden',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      terraformProviderSource: 'maxlaverse/bitwarden'
    });
    this._accessToken = config.accessToken;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._email = config.email;
    this._extraCaCerts = config.extraCaCerts;
    this._masterPassword = config.masterPassword;
    this._server = config.server;
    this._sessionKey = config.sessionKey;
    this._vaultPath = config.vaultPath;
    this._alias = config.alias;
    this._experimental = config.experimental;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extra_ca_certs - computed: false, optional: true, required: false
  private _extraCaCerts?: string; 
  public get extraCaCerts() {
    return this._extraCaCerts;
  }
  public set extraCaCerts(value: string | undefined) {
    this._extraCaCerts = value;
  }
  public resetExtraCaCerts() {
    this._extraCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCaCertsInput() {
    return this._extraCaCerts;
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string; 
  public get masterPassword() {
    return this._masterPassword;
  }
  public set masterPassword(value: string | undefined) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this._server;
  }
  public set server(value: string | undefined) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // session_key - computed: false, optional: true, required: false
  private _sessionKey?: string; 
  public get sessionKey() {
    return this._sessionKey;
  }
  public set sessionKey(value: string | undefined) {
    this._sessionKey = value;
  }
  public resetSessionKey() {
    this._sessionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionKeyInput() {
    return this._sessionKey;
  }

  // vault_path - computed: false, optional: true, required: false
  private _vaultPath?: string; 
  public get vaultPath() {
    return this._vaultPath;
  }
  public set vaultPath(value: string | undefined) {
    this._vaultPath = value;
  }
  public resetVaultPath() {
    this._vaultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPathInput() {
    return this._vaultPath;
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

  // experimental - computed: false, optional: true, required: false
  private _experimental?: BitwardenProviderExperimental[] | cdktf.IResolvable; 
  public get experimental() {
    return this._experimental;
  }
  public set experimental(value: BitwardenProviderExperimental[] | cdktf.IResolvable | undefined) {
    this._experimental = value;
  }
  public resetExperimental() {
    this._experimental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalInput() {
    return this._experimental;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      email: cdktf.stringToTerraform(this._email),
      extra_ca_certs: cdktf.stringToTerraform(this._extraCaCerts),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      server: cdktf.stringToTerraform(this._server),
      session_key: cdktf.stringToTerraform(this._sessionKey),
      vault_path: cdktf.stringToTerraform(this._vaultPath),
      alias: cdktf.stringToTerraform(this._alias),
      experimental: cdktf.listMapper(bitwardenProviderExperimentalToTerraform, true)(this._experimental),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_ca_certs: {
        value: cdktf.stringToHclTerraform(this._extraCaCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_password: {
        value: cdktf.stringToHclTerraform(this._masterPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_key: {
        value: cdktf.stringToHclTerraform(this._sessionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_path: {
        value: cdktf.stringToHclTerraform(this._vaultPath),
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
      experimental: {
        value: cdktf.listMapperHcl(bitwardenProviderExperimentalToHclTerraform, true)(this._experimental),
        isBlock: true,
        type: "set",
        storageClassType: "BitwardenProviderExperimentalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
