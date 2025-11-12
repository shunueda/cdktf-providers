// https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemporalProviderConfig {
  /**
  * Audience of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#audience TemporalProvider#audience}
  */
  readonly audience?: string;
  /**
  * The OAuth2 Client ID for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#client_id TemporalProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth2 Client Secret for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#client_secret TemporalProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The Temporal server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#host TemporalProvider#host}
  */
  readonly host?: string;
  /**
  * Use insecure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#insecure TemporalProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The Temporal server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#port TemporalProvider#port}
  */
  readonly port?: string;
  /**
  * Oauth2 server URL to fetch token from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#token_url TemporalProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#alias TemporalProvider#alias}
  */
  readonly alias?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#tls TemporalProvider#tls}
  */
  readonly tls?: TemporalProviderTls;
}
export interface TemporalProviderTls {
  /**
  * CA certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#ca TemporalProvider#ca}
  */
  readonly ca?: string;
  /**
  * Client certificate PEM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#cert TemporalProvider#cert}
  */
  readonly cert?: string;
  /**
  * Certificate reload time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#cert_reload_time TemporalProvider#cert_reload_time}
  */
  readonly certReloadTime?: number;
  /**
  * Private key PEM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#key TemporalProvider#key}
  */
  readonly key?: string;
  /**
  * Used to verify the hostname and included in handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#server_name TemporalProvider#server_name}
  */
  readonly serverName?: string;
}

export function temporalProviderTlsToTerraform(struct?: TemporalProviderTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    cert: cdktf.stringToTerraform(struct!.cert),
    cert_reload_time: cdktf.numberToTerraform(struct!.certReloadTime),
    key: cdktf.stringToTerraform(struct!.key),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function temporalProviderTlsToHclTerraform(struct?: TemporalProviderTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_reload_time: {
      value: cdktf.numberToHclTerraform(struct!.certReloadTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs temporal}
*/
export class TemporalProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemporalProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemporalProvider to import
  * @param importFromId The id of the existing TemporalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemporalProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs temporal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemporalProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TemporalProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'temporal',
      terraformGeneratorMetadata: {
        providerName: 'temporal',
        providerVersion: '0.14.0',
        providerVersionConstraint: '0.14.0'
      },
      terraformProviderSource: 'platacard/temporal'
    });
    this._audience = config.audience;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._host = config.host;
    this._insecure = config.insecure;
    this._port = config.port;
    this._tokenUrl = config.tokenUrl;
    this._alias = config.alias;
    this._tls = config.tls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this._audience;
  }
  public set audience(value: string | undefined) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this._port;
  }
  public set port(value: string | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: TemporalProviderTls; 
  public get tls() {
    return this._tls;
  }
  public set tls(value: TemporalProviderTls | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audience: cdktf.stringToTerraform(this._audience),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      host: cdktf.stringToTerraform(this._host),
      insecure: cdktf.booleanToTerraform(this._insecure),
      port: cdktf.stringToTerraform(this._port),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      alias: cdktf.stringToTerraform(this._alias),
      tls: temporalProviderTlsToTerraform(this._tls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
      tls: {
        value: temporalProviderTlsToHclTerraform(this._tls),
        isBlock: true,
        type: "struct",
        storageClassType: "TemporalProviderTls",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
