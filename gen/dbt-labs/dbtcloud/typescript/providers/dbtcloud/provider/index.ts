// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbtcloudProviderConfig {
  /**
  * Account identifier for your dbt Cloud implementation. Instead of setting the parameter, you can set the environment variable `DBT_CLOUD_ACCOUNT_ID`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#account_id DbtcloudProvider#account_id}
  */
  readonly accountId?: number;
  /**
  * If set to true, the provider will not retry requests that fail due to rate limiting. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#disable_retry DbtcloudProvider#disable_retry}
  */
  readonly disableRetry?: boolean | cdktf.IResolvable;
  /**
  * URL for your dbt Cloud deployment. Instead of setting the parameter, you can set the environment variable `DBT_CLOUD_HOST_URL` - Defaults to https://cloud.getdbt.com/api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#host_url DbtcloudProvider#host_url}
  */
  readonly hostUrl?: string;
  /**
  * The maximum number of retries to attempt for requests that fail due to rate limiting. Defaults to 3 retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#max_retries DbtcloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * List of HTTP status codes that should be retried when encountered. Defaults to [429, 500, 502, 503, 504].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#retriable_status_codes DbtcloudProvider#retriable_status_codes}
  */
  readonly retriableStatusCodes?: string[];
  /**
  * The number of seconds to wait before retrying a request that failed due to rate limiting. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#retry_interval_seconds DbtcloudProvider#retry_interval_seconds}
  */
  readonly retryIntervalSeconds?: number;
  /**
  * If set to true, the provider will not validate credentials during initialization. This can be useful for testing and for dbt Cloud API implementations that do not have standard authentication available. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#skip_credentials_validation DbtcloudProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * API token for your dbt Cloud. Instead of setting the parameter, you can set the environment variable `DBT_CLOUD_TOKEN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#token DbtcloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#alias DbtcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs dbtcloud}
*/
export class DbtcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbtcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbtcloudProvider to import
  * @param importFromId The id of the existing DbtcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbtcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs dbtcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbtcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DbtcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      terraformProviderSource: 'dbt-labs/dbtcloud'
    });
    this._accountId = config.accountId;
    this._disableRetry = config.disableRetry;
    this._hostUrl = config.hostUrl;
    this._maxRetries = config.maxRetries;
    this._retriableStatusCodes = config.retriableStatusCodes;
    this._retryIntervalSeconds = config.retryIntervalSeconds;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: number | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // disable_retry - computed: false, optional: true, required: false
  private _disableRetry?: boolean | cdktf.IResolvable; 
  public get disableRetry() {
    return this._disableRetry;
  }
  public set disableRetry(value: boolean | cdktf.IResolvable | undefined) {
    this._disableRetry = value;
  }
  public resetDisableRetry() {
    this._disableRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRetryInput() {
    return this._disableRetry;
  }

  // host_url - computed: false, optional: true, required: false
  private _hostUrl?: string; 
  public get hostUrl() {
    return this._hostUrl;
  }
  public set hostUrl(value: string | undefined) {
    this._hostUrl = value;
  }
  public resetHostUrl() {
    this._hostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // retriable_status_codes - computed: false, optional: true, required: false
  private _retriableStatusCodes?: string[]; 
  public get retriableStatusCodes() {
    return this._retriableStatusCodes;
  }
  public set retriableStatusCodes(value: string[] | undefined) {
    this._retriableStatusCodes = value;
  }
  public resetRetriableStatusCodes() {
    this._retriableStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableStatusCodesInput() {
    return this._retriableStatusCodes;
  }

  // retry_interval_seconds - computed: false, optional: true, required: false
  private _retryIntervalSeconds?: number; 
  public get retryIntervalSeconds() {
    return this._retryIntervalSeconds;
  }
  public set retryIntervalSeconds(value: number | undefined) {
    this._retryIntervalSeconds = value;
  }
  public resetRetryIntervalSeconds() {
    this._retryIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalSecondsInput() {
    return this._retryIntervalSeconds;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      disable_retry: cdktf.booleanToTerraform(this._disableRetry),
      host_url: cdktf.stringToTerraform(this._hostUrl),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      retriable_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retriableStatusCodes),
      retry_interval_seconds: cdktf.numberToTerraform(this._retryIntervalSeconds),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_retry: {
        value: cdktf.booleanToHclTerraform(this._disableRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_url: {
        value: cdktf.stringToHclTerraform(this._hostUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retriable_status_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retriableStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retry_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._retryIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_credentials_validation: {
        value: cdktf.booleanToHclTerraform(this._skipCredentialsValidation),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
