// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VenafiProviderConfig {
  /**
  * Access token for Venafi TLSPDC, user should use this for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#access_token VenafiProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * API key for Venafi Control Plane. Example: 142231b7-cvb0-412e-886b-6aeght0bc93d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#api_key VenafiProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * application that will be using the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#client_id VenafiProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * When set to true, the resulting certificate will be issued by an ephemeral, no trust CA rather than enrolling using Venafi as a Service or Trust Protection Platform. Useful for development and testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#dev_mode VenafiProvider#dev_mode}
  */
  readonly devMode?: boolean | cdktf.IResolvable;
  /**
  * JWT of the identity provider associated to the Venafi Control Plane service account that is granting the access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#external_jwt VenafiProvider#external_jwt}
  */
  readonly externalJwt?: string;
  /**
  * Base64 encoded PKCS#12 keystore containing a client certificate, private key, and chain certificates to authenticate to TLSPDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#p12_cert_data VenafiProvider#p12_cert_data}
  */
  readonly p12CertData?: string;
  /**
  * Filename of PKCS#12 keystore containing a client certificate, private key, and chain certificates to authenticate to TLSPDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#p12_cert_filename VenafiProvider#p12_cert_filename}
  */
  readonly p12CertFilename?: string;
  /**
  * Password for the PKCS#12 keystore declared in p12_cert / p12_cert_data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#p12_cert_password VenafiProvider#p12_cert_password}
  */
  readonly p12CertPassword?: string;
  /**
  * When true, certificates will not be retired on Venafi platforms when terraform destroy is run. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#skip_retirement VenafiProvider#skip_retirement}
  */
  readonly skipRetirement?: boolean | cdktf.IResolvable;
  /**
  * Endpoint URL to request new Venafi Control Plane access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#token_url VenafiProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Password for WebSDK user. Example: password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#tpp_password VenafiProvider#tpp_password}
  */
  readonly tppPassword?: string;
  /**
  * WebSDK user for Venafi TLSPDC. Example: admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#tpp_username VenafiProvider#tpp_username}
  */
  readonly tppUsername?: string;
  /**
  * Use to specify a PEM-formatted file that contains certificates to be trust anchors for all communications with the Venafi Web Service.
  * Example:
  *   trust_bundle = "${file("chain.pem")}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#trust_bundle VenafiProvider#trust_bundle}
  */
  readonly trustBundle?: string;
  /**
  * The Venafi Platform URL. Example: https://tpp.venafi.example/vedsdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#url VenafiProvider#url}
  */
  readonly url?: string;
  /**
  * DN of the Venafi TLSPDC policy folder or name of the Venafi as a Service application plus issuing template alias. 
  * Example for Platform: testPolicy\\vault
  * Example for Venafi as a Service: myApp\\Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#zone VenafiProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#alias VenafiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs venafi}
*/
export class VenafiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VenafiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VenafiProvider to import
  * @param importFromId The id of the existing VenafiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VenafiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs venafi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VenafiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VenafiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'venafi',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1'
      },
      terraformProviderSource: 'Venafi/venafi'
    });
    this._accessToken = config.accessToken;
    this._apiKey = config.apiKey;
    this._clientId = config.clientId;
    this._devMode = config.devMode;
    this._externalJwt = config.externalJwt;
    this._p12CertData = config.p12CertData;
    this._p12CertFilename = config.p12CertFilename;
    this._p12CertPassword = config.p12CertPassword;
    this._skipRetirement = config.skipRetirement;
    this._tokenUrl = config.tokenUrl;
    this._tppPassword = config.tppPassword;
    this._tppUsername = config.tppUsername;
    this._trustBundle = config.trustBundle;
    this._url = config.url;
    this._zone = config.zone;
    this._alias = config.alias;
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

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // dev_mode - computed: false, optional: true, required: false
  private _devMode?: boolean | cdktf.IResolvable; 
  public get devMode() {
    return this._devMode;
  }
  public set devMode(value: boolean | cdktf.IResolvable | undefined) {
    this._devMode = value;
  }
  public resetDevMode() {
    this._devMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devModeInput() {
    return this._devMode;
  }

  // external_jwt - computed: false, optional: true, required: false
  private _externalJwt?: string; 
  public get externalJwt() {
    return this._externalJwt;
  }
  public set externalJwt(value: string | undefined) {
    this._externalJwt = value;
  }
  public resetExternalJwt() {
    this._externalJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalJwtInput() {
    return this._externalJwt;
  }

  // p12_cert_data - computed: false, optional: true, required: false
  private _p12CertData?: string; 
  public get p12CertData() {
    return this._p12CertData;
  }
  public set p12CertData(value: string | undefined) {
    this._p12CertData = value;
  }
  public resetP12CertData() {
    this._p12CertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p12CertDataInput() {
    return this._p12CertData;
  }

  // p12_cert_filename - computed: false, optional: true, required: false
  private _p12CertFilename?: string; 
  public get p12CertFilename() {
    return this._p12CertFilename;
  }
  public set p12CertFilename(value: string | undefined) {
    this._p12CertFilename = value;
  }
  public resetP12CertFilename() {
    this._p12CertFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p12CertFilenameInput() {
    return this._p12CertFilename;
  }

  // p12_cert_password - computed: false, optional: true, required: false
  private _p12CertPassword?: string; 
  public get p12CertPassword() {
    return this._p12CertPassword;
  }
  public set p12CertPassword(value: string | undefined) {
    this._p12CertPassword = value;
  }
  public resetP12CertPassword() {
    this._p12CertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p12CertPasswordInput() {
    return this._p12CertPassword;
  }

  // skip_retirement - computed: false, optional: true, required: false
  private _skipRetirement?: boolean | cdktf.IResolvable; 
  public get skipRetirement() {
    return this._skipRetirement;
  }
  public set skipRetirement(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRetirement = value;
  }
  public resetSkipRetirement() {
    this._skipRetirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRetirementInput() {
    return this._skipRetirement;
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

  // tpp_password - computed: false, optional: true, required: false
  private _tppPassword?: string; 
  public get tppPassword() {
    return this._tppPassword;
  }
  public set tppPassword(value: string | undefined) {
    this._tppPassword = value;
  }
  public resetTppPassword() {
    this._tppPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tppPasswordInput() {
    return this._tppPassword;
  }

  // tpp_username - computed: false, optional: true, required: false
  private _tppUsername?: string; 
  public get tppUsername() {
    return this._tppUsername;
  }
  public set tppUsername(value: string | undefined) {
    this._tppUsername = value;
  }
  public resetTppUsername() {
    this._tppUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tppUsernameInput() {
    return this._tppUsername;
  }

  // trust_bundle - computed: false, optional: true, required: false
  private _trustBundle?: string; 
  public get trustBundle() {
    return this._trustBundle;
  }
  public set trustBundle(value: string | undefined) {
    this._trustBundle = value;
  }
  public resetTrustBundle() {
    this._trustBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustBundleInput() {
    return this._trustBundle;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_key: cdktf.stringToTerraform(this._apiKey),
      client_id: cdktf.stringToTerraform(this._clientId),
      dev_mode: cdktf.booleanToTerraform(this._devMode),
      external_jwt: cdktf.stringToTerraform(this._externalJwt),
      p12_cert_data: cdktf.stringToTerraform(this._p12CertData),
      p12_cert_filename: cdktf.stringToTerraform(this._p12CertFilename),
      p12_cert_password: cdktf.stringToTerraform(this._p12CertPassword),
      skip_retirement: cdktf.booleanToTerraform(this._skipRetirement),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      tpp_password: cdktf.stringToTerraform(this._tppPassword),
      tpp_username: cdktf.stringToTerraform(this._tppUsername),
      trust_bundle: cdktf.stringToTerraform(this._trustBundle),
      url: cdktf.stringToTerraform(this._url),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
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
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      dev_mode: {
        value: cdktf.booleanToHclTerraform(this._devMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_jwt: {
        value: cdktf.stringToHclTerraform(this._externalJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p12_cert_data: {
        value: cdktf.stringToHclTerraform(this._p12CertData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p12_cert_filename: {
        value: cdktf.stringToHclTerraform(this._p12CertFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p12_cert_password: {
        value: cdktf.stringToHclTerraform(this._p12CertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_retirement: {
        value: cdktf.booleanToHclTerraform(this._skipRetirement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpp_password: {
        value: cdktf.stringToHclTerraform(this._tppPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpp_username: {
        value: cdktf.stringToHclTerraform(this._tppUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_bundle: {
        value: cdktf.stringToHclTerraform(this._trustBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
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
