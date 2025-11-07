// https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MimirtoolProviderConfig {
  /**
  * Address to use when contacting Grafana Mimir. May alternatively be set via the `MIMIRTOOL_ADDRESS` or `MIMIR_ADDRESS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#address MimirtoolProvider#address}
  */
  readonly address?: string;
  /**
  * Path prefix to use for alertmanager. May alternatively be set via the `MIMIRTOOL_ALERTMANAGER_HTTP_PREFIX` or `MIMIR_ALERTMANAGER_HTTP_PREFIX` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#alertmanager_http_prefix MimirtoolProvider#alertmanager_http_prefix}
  */
  readonly alertmanagerHttpPrefix?: string;
  /**
  * API key to use when contacting Grafana Mimir. May alternatively be set via the `MIMIRTOOL_API_KEY` or `MIMIR_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#api_key MimirtoolProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * API user to use when contacting Grafana Mimir. May alternatively be set via the `MIMIRTOOL_API_USER` or `MIMIR_API_USER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#api_user MimirtoolProvider#api_user}
  */
  readonly apiUser?: string;
  /**
  * Authentication token for bearer token or JWT auth when contacting Grafana Mimir. May alternatively be set via the `MIMIRTOOL_AUTH_TOKEN` or `MIMIR_AUTH_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#auth_token MimirtoolProvider#auth_token}
  */
  readonly authToken?: string;
  /**
  * Skip TLS certificate verification. May alternatively be set via the `MIMIRTOOL_INSECURE_SKIP_VERIFY` or `MIMIR_INSECURE_SKIP_VERIFY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#insecure_skip_verify MimirtoolProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Path prefix to use for rules. May alternatively be set via the `MIMIRTOOL_PROMETHEUS_HTTP_PREFIX` or `MIMIR_PROMETHEUS_HTTP_PREFIX` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#prometheus_http_prefix MimirtoolProvider#prometheus_http_prefix}
  */
  readonly prometheusHttpPrefix?: string;
  /**
  * Tenant ID to use when contacting Grafana Mimir. May alternatively be set via the `MIMIRTOOL_TENANT_ID` or `MIMIR_TENANT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#tenant_id MimirtoolProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Certificate CA bundle to use to verify the MIMIR server's certificate. May alternatively be set via the `MIMIRTOOL_TLS_CA_PATH` or `MIMIR_TLS_CA_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#tls_ca_path MimirtoolProvider#tls_ca_path}
  */
  readonly tlsCaPath?: string;
  /**
  * Client TLS certificate file to use to authenticate to the MIMIR server. May alternatively be set via the `MIMIRTOOL_TLS_CERT_PATH` or `MIMIR_TLS_CERT_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#tls_cert_path MimirtoolProvider#tls_cert_path}
  */
  readonly tlsCertPath?: string;
  /**
  * Client TLS key file to use to authenticate to the MIMIR server. May alternatively be set via the `MIMIRTOOL_TLS_KEY_PATH` or `MIMIR_TLS_KEY_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#tls_key_path MimirtoolProvider#tls_key_path}
  */
  readonly tlsKeyPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#alias MimirtoolProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs mimirtool}
*/
export class MimirtoolProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimirtool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MimirtoolProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MimirtoolProvider to import
  * @param importFromId The id of the existing MimirtoolProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MimirtoolProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimirtool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs mimirtool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MimirtoolProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MimirtoolProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mimirtool',
      terraformGeneratorMetadata: {
        providerName: 'mimirtool',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'ovh/mimirtool'
    });
    this._address = config.address;
    this._alertmanagerHttpPrefix = config.alertmanagerHttpPrefix;
    this._apiKey = config.apiKey;
    this._apiUser = config.apiUser;
    this._authToken = config.authToken;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._prometheusHttpPrefix = config.prometheusHttpPrefix;
    this._tenantId = config.tenantId;
    this._tlsCaPath = config.tlsCaPath;
    this._tlsCertPath = config.tlsCertPath;
    this._tlsKeyPath = config.tlsKeyPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // alertmanager_http_prefix - computed: false, optional: true, required: false
  private _alertmanagerHttpPrefix?: string; 
  public get alertmanagerHttpPrefix() {
    return this._alertmanagerHttpPrefix;
  }
  public set alertmanagerHttpPrefix(value: string | undefined) {
    this._alertmanagerHttpPrefix = value;
  }
  public resetAlertmanagerHttpPrefix() {
    this._alertmanagerHttpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerHttpPrefixInput() {
    return this._alertmanagerHttpPrefix;
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

  // api_user - computed: false, optional: true, required: false
  private _apiUser?: string; 
  public get apiUser() {
    return this._apiUser;
  }
  public set apiUser(value: string | undefined) {
    this._apiUser = value;
  }
  public resetApiUser() {
    this._apiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this._insecureSkipVerify;
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // prometheus_http_prefix - computed: false, optional: true, required: false
  private _prometheusHttpPrefix?: string; 
  public get prometheusHttpPrefix() {
    return this._prometheusHttpPrefix;
  }
  public set prometheusHttpPrefix(value: string | undefined) {
    this._prometheusHttpPrefix = value;
  }
  public resetPrometheusHttpPrefix() {
    this._prometheusHttpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusHttpPrefixInput() {
    return this._prometheusHttpPrefix;
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

  // tls_ca_path - computed: false, optional: true, required: false
  private _tlsCaPath?: string; 
  public get tlsCaPath() {
    return this._tlsCaPath;
  }
  public set tlsCaPath(value: string | undefined) {
    this._tlsCaPath = value;
  }
  public resetTlsCaPath() {
    this._tlsCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaPathInput() {
    return this._tlsCaPath;
  }

  // tls_cert_path - computed: false, optional: true, required: false
  private _tlsCertPath?: string; 
  public get tlsCertPath() {
    return this._tlsCertPath;
  }
  public set tlsCertPath(value: string | undefined) {
    this._tlsCertPath = value;
  }
  public resetTlsCertPath() {
    this._tlsCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertPathInput() {
    return this._tlsCertPath;
  }

  // tls_key_path - computed: false, optional: true, required: false
  private _tlsKeyPath?: string; 
  public get tlsKeyPath() {
    return this._tlsKeyPath;
  }
  public set tlsKeyPath(value: string | undefined) {
    this._tlsKeyPath = value;
  }
  public resetTlsKeyPath() {
    this._tlsKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyPathInput() {
    return this._tlsKeyPath;
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
      address: cdktf.stringToTerraform(this._address),
      alertmanager_http_prefix: cdktf.stringToTerraform(this._alertmanagerHttpPrefix),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_user: cdktf.stringToTerraform(this._apiUser),
      auth_token: cdktf.stringToTerraform(this._authToken),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      prometheus_http_prefix: cdktf.stringToTerraform(this._prometheusHttpPrefix),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tls_ca_path: cdktf.stringToTerraform(this._tlsCaPath),
      tls_cert_path: cdktf.stringToTerraform(this._tlsCertPath),
      tls_key_path: cdktf.stringToTerraform(this._tlsKeyPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alertmanager_http_prefix: {
        value: cdktf.stringToHclTerraform(this._alertmanagerHttpPrefix),
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
      api_user: {
        value: cdktf.stringToHclTerraform(this._apiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prometheus_http_prefix: {
        value: cdktf.stringToHclTerraform(this._prometheusHttpPrefix),
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
      tls_ca_path: {
        value: cdktf.stringToHclTerraform(this._tlsCaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cert_path: {
        value: cdktf.stringToHclTerraform(this._tlsCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_key_path: {
        value: cdktf.stringToHclTerraform(this._tlsKeyPath),
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
