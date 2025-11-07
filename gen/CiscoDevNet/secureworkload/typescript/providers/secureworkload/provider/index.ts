// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureworkloadProviderConfig {
  /**
  * API key for calculating request signatures for SecureWorkload API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#api_key SecureworkloadProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * API secret for calculating request signatures for SecureWorkload API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#api_secret SecureworkloadProvider#api_secret}
  */
  readonly apiSecret: string;
  /**
  * URL for a SecureWorkload API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#api_url SecureworkloadProvider#api_url}
  */
  readonly apiUrl: string;
  /**
  * Allow connections to SecureWorkload endpoints without validating their TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#disable_tls_verification SecureworkloadProvider#disable_tls_verification}
  */
  readonly disableTlsVerification?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#alias SecureworkloadProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs secureworkload}
*/
export class SecureworkloadProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureworkloadProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureworkloadProvider to import
  * @param importFromId The id of the existing SecureworkloadProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureworkloadProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs secureworkload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureworkloadProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SecureworkloadProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      terraformProviderSource: 'CiscoDevNet/secureworkload'
    });
    this._apiKey = config.apiKey;
    this._apiSecret = config.apiSecret;
    this._apiUrl = config.apiUrl;
    this._disableTlsVerification = config.disableTlsVerification;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret - computed: false, optional: false, required: true
  private _apiSecret?: string; 
  public get apiSecret() {
    return this._apiSecret;
  }
  public set apiSecret(value: string | undefined) {
    this._apiSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // disable_tls_verification - computed: false, optional: true, required: false
  private _disableTlsVerification?: boolean | cdktf.IResolvable; 
  public get disableTlsVerification() {
    return this._disableTlsVerification;
  }
  public set disableTlsVerification(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTlsVerification = value;
  }
  public resetDisableTlsVerification() {
    this._disableTlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsVerificationInput() {
    return this._disableTlsVerification;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      disable_tls_verification: cdktf.booleanToTerraform(this._disableTlsVerification),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_tls_verification: {
        value: cdktf.booleanToHclTerraform(this._disableTlsVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
