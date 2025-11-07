// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApstraProviderConfig {
  /**
  * Timeout in seconds for completing API transactions with the Apstra server. Omit for default value of 10 seconds. Value of 0 results in infinite timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#api_timeout ApstraProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * Blueprint mutexes are indicators that changes are being made in a staging Blueprint and other automation processes (including other instances of Terraform) should wait before beginning to make changes of their own. Setting this attribute 'true' causes the provider to lock a blueprint-specific mutex before making any changes. [More info here](https://github.com/Juniper/terraform-provider-apstra/blob/main/kb/blueprint_mutex.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#blueprint_mutex_enabled ApstraProvider#blueprint_mutex_enabled}
  */
  readonly blueprintMutexEnabled?: boolean | cdktf.IResolvable;
  /**
  * Blueprint mutexes are signals that changes are being made in a staging Blueprint and other automation processes (including other instances of Terraform) should wait before beginning to make changes of their own. The mutexes embed a human-readable field to reduce confusion in the event a mutex needs to be cleared manually. This attribute overrides the default message in that field: "locked by terraform at $DATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#blueprint_mutex_message ApstraProvider#blueprint_mutex_message}
  */
  readonly blueprintMutexMessage?: string;
  /**
  * This attribute defines a prefix which redefines all of the `APSTRA_*` environment variables. For example, setting `env_var_prefix = "FOO_"` will cause the provider to learn the Apstra service URL from the `FOO_APSTRA_URL` environment variable rather than the `APSTRA_URL` environment variable. This capability is intended to be used when configuring multiple instances of the Apstra provider (which talk to multiple Apstra servers) in a single Terraform project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#env_var_prefix ApstraProvider#env_var_prefix}
  */
  readonly envVarPrefix?: string;
  /**
  * Enable *experimental* features. In this release that means:
  *   - Set the `experimental` flag in the underlying Apstra SDK client object. Doing so permits connections to Apstra instances not supported by the SDK.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#experimental ApstraProvider#experimental}
  */
  readonly experimental?: boolean | cdktf.IResolvable;
  /**
  * Set 'true' to disable TLS certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#tls_validation_disabled ApstraProvider#tls_validation_disabled}
  */
  readonly tlsValidationDisabled?: boolean | cdktf.IResolvable;
  /**
  * URL of the apstra server, e.g. `https://apstra.example.com`
  *  It is possible to include Apstra API credentials in the URL using [standard syntax](https://datatracker.ietf.org/doc/html/rfc1738#section-3.1). Care should be taken to ensure that these credentials aren't accidentally committed to version control, etc... The preferred approach is to pass the credentials as environment variables `APSTRA_USER`  and `APSTRA_PASS`.
  *  If `url` is omitted, environment variable `APSTRA_URL` can be used to in its place.
  *  When the username or password are embedded in the URL string, any special characters must be URL-encoded. For example, `pass^word` would become `pass%5eword`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#url ApstraProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#alias ApstraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs apstra}
*/
export class ApstraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApstraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApstraProvider to import
  * @param importFromId The id of the existing ApstraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApstraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs apstra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApstraProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApstraProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      terraformProviderSource: 'Juniper/apstra'
    });
    this._apiTimeout = config.apiTimeout;
    this._blueprintMutexEnabled = config.blueprintMutexEnabled;
    this._blueprintMutexMessage = config.blueprintMutexMessage;
    this._envVarPrefix = config.envVarPrefix;
    this._experimental = config.experimental;
    this._tlsValidationDisabled = config.tlsValidationDisabled;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // blueprint_mutex_enabled - computed: false, optional: true, required: false
  private _blueprintMutexEnabled?: boolean | cdktf.IResolvable; 
  public get blueprintMutexEnabled() {
    return this._blueprintMutexEnabled;
  }
  public set blueprintMutexEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._blueprintMutexEnabled = value;
  }
  public resetBlueprintMutexEnabled() {
    this._blueprintMutexEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintMutexEnabledInput() {
    return this._blueprintMutexEnabled;
  }

  // blueprint_mutex_message - computed: false, optional: true, required: false
  private _blueprintMutexMessage?: string; 
  public get blueprintMutexMessage() {
    return this._blueprintMutexMessage;
  }
  public set blueprintMutexMessage(value: string | undefined) {
    this._blueprintMutexMessage = value;
  }
  public resetBlueprintMutexMessage() {
    this._blueprintMutexMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintMutexMessageInput() {
    return this._blueprintMutexMessage;
  }

  // env_var_prefix - computed: false, optional: true, required: false
  private _envVarPrefix?: string; 
  public get envVarPrefix() {
    return this._envVarPrefix;
  }
  public set envVarPrefix(value: string | undefined) {
    this._envVarPrefix = value;
  }
  public resetEnvVarPrefix() {
    this._envVarPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarPrefixInput() {
    return this._envVarPrefix;
  }

  // experimental - computed: false, optional: true, required: false
  private _experimental?: boolean | cdktf.IResolvable; 
  public get experimental() {
    return this._experimental;
  }
  public set experimental(value: boolean | cdktf.IResolvable | undefined) {
    this._experimental = value;
  }
  public resetExperimental() {
    this._experimental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentalInput() {
    return this._experimental;
  }

  // tls_validation_disabled - computed: false, optional: true, required: false
  private _tlsValidationDisabled?: boolean | cdktf.IResolvable; 
  public get tlsValidationDisabled() {
    return this._tlsValidationDisabled;
  }
  public set tlsValidationDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsValidationDisabled = value;
  }
  public resetTlsValidationDisabled() {
    this._tlsValidationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsValidationDisabledInput() {
    return this._tlsValidationDisabled;
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
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      blueprint_mutex_enabled: cdktf.booleanToTerraform(this._blueprintMutexEnabled),
      blueprint_mutex_message: cdktf.stringToTerraform(this._blueprintMutexMessage),
      env_var_prefix: cdktf.stringToTerraform(this._envVarPrefix),
      experimental: cdktf.booleanToTerraform(this._experimental),
      tls_validation_disabled: cdktf.booleanToTerraform(this._tlsValidationDisabled),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_timeout: {
        value: cdktf.numberToHclTerraform(this._apiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blueprint_mutex_enabled: {
        value: cdktf.booleanToHclTerraform(this._blueprintMutexEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blueprint_mutex_message: {
        value: cdktf.stringToHclTerraform(this._blueprintMutexMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_var_prefix: {
        value: cdktf.stringToHclTerraform(this._envVarPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      experimental: {
        value: cdktf.booleanToHclTerraform(this._experimental),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_validation_disabled: {
        value: cdktf.booleanToHclTerraform(this._tlsValidationDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
