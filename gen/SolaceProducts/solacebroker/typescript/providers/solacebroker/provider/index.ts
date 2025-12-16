// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerProviderConfig {
  /**
  * A bearer token that will be sent in the Authorization header of SEMP requests. Requires TLS transport enabled. Conflicts with username and password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#bearer_token SolacebrokerProvider#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Disable validation of server SSL certificates, accept/ignore self-signed. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#insecure_skip_verify SolacebrokerProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The password to connect to the broker with. Requires username and conflicts with bearer_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#password SolacebrokerProvider#password}
  */
  readonly password?: string;
  /**
  * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the minimum interval between requests; this serves as a rate limit. This setting does not apply to retries. Set to 0 for no rate limit. The default value is 100ms (which equates to a rate limit of 10 calls per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#request_min_interval SolacebrokerProvider#request_min_interval}
  */
  readonly requestMinInterval?: string;
  /**
  * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum time to wait for a SEMP request.  The default value is 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#request_timeout_duration SolacebrokerProvider#request_timeout_duration}
  */
  readonly requestTimeoutDuration?: string;
  /**
  * The number of retries for a SEMP call. The default value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#retries SolacebrokerProvider#retries}
  */
  readonly retries?: number;
  /**
  * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum retry interval. The default value is 30s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#retry_max_interval SolacebrokerProvider#retry_max_interval}
  */
  readonly retryMaxInterval?: string;
  /**
  * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating how long to wait after an initial failed request before the first retry.  Exponential backoff is used, up to the limit set by retry_max_interval. The default value is 3s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#retry_min_interval SolacebrokerProvider#retry_min_interval}
  */
  readonly retryMinInterval?: string;
  /**
  * Disable validation of the broker SEMP API for supported platform and minimum version. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#skip_api_check SolacebrokerProvider#skip_api_check}
  */
  readonly skipApiCheck?: boolean | cdktf.IResolvable;
  /**
  * The base URL of the event broker, for example `https://mybroker.example.org:<semp-service-port>/`. The trailing / can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#url SolacebrokerProvider#url}
  */
  readonly url: string;
  /**
  * The username to connect to the broker with.  Requires password and conflicts with bearer_token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#username SolacebrokerProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#alias SolacebrokerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs solacebroker}
*/
export class SolacebrokerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerProvider to import
  * @param importFromId The id of the existing SolacebrokerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs solacebroker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      terraformProviderSource: 'SolaceProducts/solacebroker'
    });
    this._bearerToken = config.bearerToken;
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._password = config.password;
    this._requestMinInterval = config.requestMinInterval;
    this._requestTimeoutDuration = config.requestTimeoutDuration;
    this._retries = config.retries;
    this._retryMaxInterval = config.retryMaxInterval;
    this._retryMinInterval = config.retryMinInterval;
    this._skipApiCheck = config.skipApiCheck;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this._bearerToken;
  }
  public set bearerToken(value: string | undefined) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_min_interval - computed: false, optional: true, required: false
  private _requestMinInterval?: string; 
  public get requestMinInterval() {
    return this._requestMinInterval;
  }
  public set requestMinInterval(value: string | undefined) {
    this._requestMinInterval = value;
  }
  public resetRequestMinInterval() {
    this._requestMinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMinIntervalInput() {
    return this._requestMinInterval;
  }

  // request_timeout_duration - computed: false, optional: true, required: false
  private _requestTimeoutDuration?: string; 
  public get requestTimeoutDuration() {
    return this._requestTimeoutDuration;
  }
  public set requestTimeoutDuration(value: string | undefined) {
    this._requestTimeoutDuration = value;
  }
  public resetRequestTimeoutDuration() {
    this._requestTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutDurationInput() {
    return this._requestTimeoutDuration;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_max_interval - computed: false, optional: true, required: false
  private _retryMaxInterval?: string; 
  public get retryMaxInterval() {
    return this._retryMaxInterval;
  }
  public set retryMaxInterval(value: string | undefined) {
    this._retryMaxInterval = value;
  }
  public resetRetryMaxInterval() {
    this._retryMaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxIntervalInput() {
    return this._retryMaxInterval;
  }

  // retry_min_interval - computed: false, optional: true, required: false
  private _retryMinInterval?: string; 
  public get retryMinInterval() {
    return this._retryMinInterval;
  }
  public set retryMinInterval(value: string | undefined) {
    this._retryMinInterval = value;
  }
  public resetRetryMinInterval() {
    this._retryMinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMinIntervalInput() {
    return this._retryMinInterval;
  }

  // skip_api_check - computed: false, optional: true, required: false
  private _skipApiCheck?: boolean | cdktf.IResolvable; 
  public get skipApiCheck() {
    return this._skipApiCheck;
  }
  public set skipApiCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._skipApiCheck = value;
  }
  public resetSkipApiCheck() {
    this._skipApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipApiCheckInput() {
    return this._skipApiCheck;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      password: cdktf.stringToTerraform(this._password),
      request_min_interval: cdktf.stringToTerraform(this._requestMinInterval),
      request_timeout_duration: cdktf.stringToTerraform(this._requestTimeoutDuration),
      retries: cdktf.numberToTerraform(this._retries),
      retry_max_interval: cdktf.stringToTerraform(this._retryMaxInterval),
      retry_min_interval: cdktf.stringToTerraform(this._retryMinInterval),
      skip_api_check: cdktf.booleanToTerraform(this._skipApiCheck),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_min_interval: {
        value: cdktf.stringToHclTerraform(this._requestMinInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout_duration: {
        value: cdktf.stringToHclTerraform(this._requestTimeoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_max_interval: {
        value: cdktf.stringToHclTerraform(this._retryMaxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_min_interval: {
        value: cdktf.stringToHclTerraform(this._retryMinInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_api_check: {
        value: cdktf.booleanToHclTerraform(this._skipApiCheck),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
