// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaasProviderConfig {
  /**
  * The MAAS API key. If not provided, it will be read from the MAAS_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#api_key MaasProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The MAAS API URL (eg: http://127.0.0.1:5240/MAAS). If not provided, it will be read from the MAAS_API_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#api_url MaasProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * The MAAS API version (default 2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#api_version MaasProvider#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The MAAS installation method. Valid options: `snap`, and `deb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#installation_method MaasProvider#installation_method}
  */
  readonly installationMethod?: string;
  /**
  * Certificate CA bundle path to use to verify the MAAS certificate. If not provided, it will be read from the MAAS_API_CACERT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#tls_ca_cert_path MaasProvider#tls_ca_cert_path}
  */
  readonly tlsCaCertPath?: string;
  /**
  * Skip TLS certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#tls_insecure_skip_verify MaasProvider#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#alias MaasProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs maas}
*/
export class MaasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaasProvider to import
  * @param importFromId The id of the existing MaasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs maas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaasProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MaasProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'maas',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      terraformProviderSource: 'canonical/maas'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._apiVersion = config.apiVersion;
    this._installationMethod = config.installationMethod;
    this._tlsCaCertPath = config.tlsCaCertPath;
    this._tlsInsecureSkipVerify = config.tlsInsecureSkipVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // installation_method - computed: false, optional: true, required: false
  private _installationMethod?: string; 
  public get installationMethod() {
    return this._installationMethod;
  }
  public set installationMethod(value: string | undefined) {
    this._installationMethod = value;
  }
  public resetInstallationMethod() {
    this._installationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationMethodInput() {
    return this._installationMethod;
  }

  // tls_ca_cert_path - computed: false, optional: true, required: false
  private _tlsCaCertPath?: string; 
  public get tlsCaCertPath() {
    return this._tlsCaCertPath;
  }
  public set tlsCaCertPath(value: string | undefined) {
    this._tlsCaCertPath = value;
  }
  public resetTlsCaCertPath() {
    this._tlsCaCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertPathInput() {
    return this._tlsCaCertPath;
  }

  // tls_insecure_skip_verify - computed: false, optional: true, required: false
  private _tlsInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkipVerify() {
    return this._tlsInsecureSkipVerify;
  }
  public set tlsInsecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecureSkipVerify = value;
  }
  public resetTlsInsecureSkipVerify() {
    this._tlsInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipVerifyInput() {
    return this._tlsInsecureSkipVerify;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      installation_method: cdktf.stringToTerraform(this._installationMethod),
      tls_ca_cert_path: cdktf.stringToTerraform(this._tlsCaCertPath),
      tls_insecure_skip_verify: cdktf.booleanToTerraform(this._tlsInsecureSkipVerify),
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
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_method: {
        value: cdktf.stringToHclTerraform(this._installationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ca_cert_path: {
        value: cdktf.stringToHclTerraform(this._tlsCaCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkipVerify),
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
