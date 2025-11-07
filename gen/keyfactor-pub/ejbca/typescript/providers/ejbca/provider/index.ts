// https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EjbcaProviderConfig {
  /**
  * The path to the CA certificate file used to validate the EJBCA server's certificate. Certificates must be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#ca_cert_path EjbcaProvider#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * Hostname of the EJBCA instance. Hostname can include the port in the format {hostname}:{port}. If not specified, the environment variable EJBCA_HOSTNAME will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#hostname EjbcaProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#alias EjbcaProvider#alias}
  */
  readonly alias?: string;
  /**
  * cert_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#cert_auth EjbcaProvider#cert_auth}
  */
  readonly certAuth?: EjbcaProviderCertAuth;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#oauth EjbcaProvider#oauth}
  */
  readonly oauth?: EjbcaProviderOauth;
}
export interface EjbcaProviderCertAuth {
  /**
  * Local path to the client certificate used to authenticate to EJBCA. File must include a PEM formatted X509v3 certificate, and optionally an unencrypted, PEM formatted PKCS#8 private key. If not specified, the environment variable EJBCA_CLIENT_CERT_PATH will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#client_cert_path EjbcaProvider#client_cert_path}
  */
  readonly clientCertPath?: string;
  /**
  * Local path to the private key of the client certificate. Must be an unencrypted, PEM formatted PKCS#8 private key. If not specified, the environment variable EJBCA_CLIENT_CERT_KEY_PATH will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#client_key_path EjbcaProvider#client_key_path}
  */
  readonly clientKeyPath?: string;
}

export function ejbcaProviderCertAuthToTerraform(struct?: EjbcaProviderCertAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_path: cdktf.stringToTerraform(struct!.clientCertPath),
    client_key_path: cdktf.stringToTerraform(struct!.clientKeyPath),
  }
}


export function ejbcaProviderCertAuthToHclTerraform(struct?: EjbcaProviderCertAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.clientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_path: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface EjbcaProviderOauth {
  /**
  * The OAuth 2.0 audience used to obtain an access token. If not specified, the environment variable EJBCA_OAUTH_AUDIENCE will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#audience EjbcaProvider#audience}
  */
  readonly audience?: string;
  /**
  * The OAuth 2.0 client ID used to obtain an access token. If not specified, the environment variable EJBCA_OAUTH_CLIENT_ID will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#client_id EjbcaProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth 2.0 client secret used to obtain an access token. If not specified, the environment variable EJBCA_OAUTH_CLIENT_SECRET will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#client_secret EjbcaProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A comma-separated list of OAuth 2.0 scopes used to obtain an access token. If not specified, the environment variable EJBCA_OAUTH_SCOPES will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#scopes EjbcaProvider#scopes}
  */
  readonly scopes?: string;
  /**
  * The OAuth 2.0 token URL used to obtain an access token. If not specified, the environment variable EJBCA_OAUTH_TOKEN_URL will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#token_url EjbcaProvider#token_url}
  */
  readonly tokenUrl?: string;
}

export function ejbcaProviderOauthToTerraform(struct?: EjbcaProviderOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function ejbcaProviderOauthToHclTerraform(struct?: EjbcaProviderOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs ejbca}
*/
export class EjbcaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ejbca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EjbcaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EjbcaProvider to import
  * @param importFromId The id of the existing EjbcaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EjbcaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ejbca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs ejbca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EjbcaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EjbcaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ejbca',
      terraformGeneratorMetadata: {
        providerName: 'ejbca',
        providerVersion: '1.1.0'
      },
      terraformProviderSource: 'keyfactor-pub/ejbca'
    });
    this._caCertPath = config.caCertPath;
    this._hostname = config.hostname;
    this._alias = config.alias;
    this._certAuth = config.certAuth;
    this._oauth = config.oauth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this._caCertPath;
  }
  public set caCertPath(value: string | undefined) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // cert_auth - computed: false, optional: true, required: false
  private _certAuth?: EjbcaProviderCertAuth; 
  public get certAuth() {
    return this._certAuth;
  }
  public set certAuth(value: EjbcaProviderCertAuth | undefined) {
    this._certAuth = value;
  }
  public resetCertAuth() {
    this._certAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthInput() {
    return this._certAuth;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth?: EjbcaProviderOauth; 
  public get oauth() {
    return this._oauth;
  }
  public set oauth(value: EjbcaProviderOauth | undefined) {
    this._oauth = value;
  }
  public resetOauth() {
    this._oauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_path: cdktf.stringToTerraform(this._caCertPath),
      hostname: cdktf.stringToTerraform(this._hostname),
      alias: cdktf.stringToTerraform(this._alias),
      cert_auth: ejbcaProviderCertAuthToTerraform(this._certAuth),
      oauth: ejbcaProviderOauthToTerraform(this._oauth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert_path: {
        value: cdktf.stringToHclTerraform(this._caCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      cert_auth: {
        value: ejbcaProviderCertAuthToHclTerraform(this._certAuth),
        isBlock: true,
        type: "struct",
        storageClassType: "EjbcaProviderCertAuth",
      },
      oauth: {
        value: ejbcaProviderOauthToHclTerraform(this._oauth),
        isBlock: true,
        type: "struct",
        storageClassType: "EjbcaProviderOauth",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
