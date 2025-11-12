// https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KentikCloudexportProviderConfig {
  /**
  * CloudExport API server URL (optional). Can also be specified with KTAPI_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#apiurl KentikCloudexportProvider#apiurl}
  */
  readonly apiurl?: string;
  /**
  * Authorization email (required). Can also be specified with KTAPI_AUTH_EMAIL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#email KentikCloudexportProvider#email}
  */
  readonly email: string;
  /**
  * Log payloads flag enables verbose debug logs of requests and responses (optional). Can also be specified with KTAPI_LOG_PAYLOADS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#log_payloads KentikCloudexportProvider#log_payloads}
  */
  readonly logPayloads?: boolean | cdktf.IResolvable;
  /**
  * Authorization token (required). Can also be specified with KTAPI_AUTH_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#token KentikCloudexportProvider#token}
  */
  readonly token: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#alias KentikCloudexportProvider#alias}
  */
  readonly alias?: string;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#retry KentikCloudexportProvider#retry}
  */
  readonly retry?: KentikCloudexportProviderRetry;
}
export interface KentikCloudexportProviderRetry {
  /**
  * Maximum number of request retry attempts. Minimum valid value: 1 (0 fallbacks to default). Default: 100. Can also be specified with KTAPI_RETRY_MAX_ATTEMPTS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#max_attempts KentikCloudexportProvider#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Maximum delay before request retry. Expected Go time duration format, e.g. 1s (see: <https://pkg.go.dev/time#ParseDuration>). Default: 5m (5 minutes). Can also be specified with KTAPI_RETRY_MAX_DELAY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#max_delay KentikCloudexportProvider#max_delay}
  */
  readonly maxDelay?: string;
  /**
  * Minimum delay before request retry. Expected Go time duration format, e.g. 1s (see: <https://pkg.go.dev/time#ParseDuration>). Default: 1s (1 second). Can also be specified with KTAPI_RETRY_MIN_DELAY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#min_delay KentikCloudexportProvider#min_delay}
  */
  readonly minDelay?: string;
}

export function kentikCloudexportProviderRetryToTerraform(struct?: KentikCloudexportProviderRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_delay: cdktf.stringToTerraform(struct!.maxDelay),
    min_delay: cdktf.stringToTerraform(struct!.minDelay),
  }
}


export function kentikCloudexportProviderRetryToHclTerraform(struct?: KentikCloudexportProviderRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_delay: {
      value: cdktf.stringToHclTerraform(struct!.minDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs kentik-cloudexport}
*/
export class KentikCloudexportProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kentik-cloudexport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KentikCloudexportProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KentikCloudexportProvider to import
  * @param importFromId The id of the existing KentikCloudexportProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KentikCloudexportProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kentik-cloudexport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kentik/kentik-cloudexport/0.4.1/docs kentik-cloudexport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KentikCloudexportProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KentikCloudexportProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'kentik-cloudexport',
      terraformGeneratorMetadata: {
        providerName: 'kentik-cloudexport',
        providerVersion: '0.4.1',
        providerVersionConstraint: '0.4.1'
      },
      terraformProviderSource: 'kentik/kentik-cloudexport'
    });
    this._apiurl = config.apiurl;
    this._email = config.email;
    this._logPayloads = config.logPayloads;
    this._token = config.token;
    this._alias = config.alias;
    this._retry = config.retry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiurl - computed: false, optional: true, required: false
  private _apiurl?: string; 
  public get apiurl() {
    return this._apiurl;
  }
  public set apiurl(value: string | undefined) {
    this._apiurl = value;
  }
  public resetApiurl() {
    this._apiurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiurlInput() {
    return this._apiurl;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // log_payloads - computed: false, optional: true, required: false
  private _logPayloads?: boolean | cdktf.IResolvable; 
  public get logPayloads() {
    return this._logPayloads;
  }
  public set logPayloads(value: boolean | cdktf.IResolvable | undefined) {
    this._logPayloads = value;
  }
  public resetLogPayloads() {
    this._logPayloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPayloadsInput() {
    return this._logPayloads;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // retry - computed: false, optional: true, required: false
  private _retry?: KentikCloudexportProviderRetry; 
  public get retry() {
    return this._retry;
  }
  public set retry(value: KentikCloudexportProviderRetry | undefined) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apiurl: cdktf.stringToTerraform(this._apiurl),
      email: cdktf.stringToTerraform(this._email),
      log_payloads: cdktf.booleanToTerraform(this._logPayloads),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
      retry: kentikCloudexportProviderRetryToTerraform(this._retry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiurl: {
        value: cdktf.stringToHclTerraform(this._apiurl),
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
      log_payloads: {
        value: cdktf.booleanToHclTerraform(this._logPayloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
      retry: {
        value: kentikCloudexportProviderRetryToHclTerraform(this._retry),
        isBlock: true,
        type: "list",
        storageClassType: "KentikCloudexportProviderRetryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
