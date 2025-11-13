// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZpaProviderConfig {
  /**
  * Use exponential back off strategy for rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#backoff ZpaProvider#backoff}
  */
  readonly backoff?: boolean | cdktf.IResolvable;
  /**
  * zpa client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#client_id ZpaProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * zpa client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#client_secret ZpaProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * zpa customer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#customer_id ZpaProvider#customer_id}
  */
  readonly customerId?: string;
  /**
  * Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#http_proxy ZpaProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * maximum number of retries to attempt before erroring out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#max_retries ZpaProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#max_wait_seconds ZpaProvider#max_wait_seconds}
  */
  readonly maxWaitSeconds?: number;
  /**
  * zpa microtenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#microtenant_id ZpaProvider#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#min_wait_seconds ZpaProvider#min_wait_seconds}
  */
  readonly minWaitSeconds?: number;
  /**
  * Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://help.zscaler.com/zpa/understanding-rate-limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#parallelism ZpaProvider#parallelism}
  */
  readonly parallelism?: number;
  /**
  * zpa private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#private_key ZpaProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Timeout for single request (in seconds) which is made to Zscaler, the default is `0` (means no limit is set). The maximum value can be `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#request_timeout ZpaProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Enables interaction with the ZPA legacy API framework
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#use_legacy_client ZpaProvider#use_legacy_client}
  */
  readonly useLegacyClient?: boolean | cdktf.IResolvable;
  /**
  * Zscaler Vanity Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#vanity_domain ZpaProvider#vanity_domain}
  */
  readonly vanityDomain?: string;
  /**
  * zpa client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#zpa_client_id ZpaProvider#zpa_client_id}
  */
  readonly zpaClientId?: string;
  /**
  * zpa client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#zpa_client_secret ZpaProvider#zpa_client_secret}
  */
  readonly zpaClientSecret?: string;
  /**
  * Cloud to use PRODUCTION, ZPATWO, BETA, GOV, GOVUS, PREVIEW, DEV, QA, QA2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#zpa_cloud ZpaProvider#zpa_cloud}
  */
  readonly zpaCloud?: string;
  /**
  * zpa customer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#zpa_customer_id ZpaProvider#zpa_customer_id}
  */
  readonly zpaCustomerId?: string;
  /**
  * Zscaler Cloud Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#zscaler_cloud ZpaProvider#zscaler_cloud}
  */
  readonly zscalerCloud?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#alias ZpaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs zpa}
*/
export class ZpaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZpaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZpaProvider to import
  * @param importFromId The id of the existing ZpaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZpaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs zpa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZpaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZpaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      terraformProviderSource: 'zscaler/zpa'
    });
    this._backoff = config.backoff;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._customerId = config.customerId;
    this._httpProxy = config.httpProxy;
    this._maxRetries = config.maxRetries;
    this._maxWaitSeconds = config.maxWaitSeconds;
    this._microtenantId = config.microtenantId;
    this._minWaitSeconds = config.minWaitSeconds;
    this._parallelism = config.parallelism;
    this._privateKey = config.privateKey;
    this._requestTimeout = config.requestTimeout;
    this._useLegacyClient = config.useLegacyClient;
    this._vanityDomain = config.vanityDomain;
    this._zpaClientId = config.zpaClientId;
    this._zpaClientSecret = config.zpaClientSecret;
    this._zpaCloud = config.zpaCloud;
    this._zpaCustomerId = config.zpaCustomerId;
    this._zscalerCloud = config.zscalerCloud;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backoff - computed: false, optional: true, required: false
  private _backoff?: boolean | cdktf.IResolvable; 
  public get backoff() {
    return this._backoff;
  }
  public set backoff(value: boolean | cdktf.IResolvable | undefined) {
    this._backoff = value;
  }
  public resetBackoff() {
    this._backoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff;
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

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this._customerId;
  }
  public set customerId(value: string | undefined) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
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

  // max_wait_seconds - computed: false, optional: true, required: false
  private _maxWaitSeconds?: number; 
  public get maxWaitSeconds() {
    return this._maxWaitSeconds;
  }
  public set maxWaitSeconds(value: number | undefined) {
    this._maxWaitSeconds = value;
  }
  public resetMaxWaitSeconds() {
    this._maxWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitSecondsInput() {
    return this._maxWaitSeconds;
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this._microtenantId;
  }
  public set microtenantId(value: string | undefined) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // min_wait_seconds - computed: false, optional: true, required: false
  private _minWaitSeconds?: number; 
  public get minWaitSeconds() {
    return this._minWaitSeconds;
  }
  public set minWaitSeconds(value: number | undefined) {
    this._minWaitSeconds = value;
  }
  public resetMinWaitSeconds() {
    this._minWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWaitSecondsInput() {
    return this._minWaitSeconds;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this._parallelism;
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // use_legacy_client - computed: false, optional: true, required: false
  private _useLegacyClient?: boolean | cdktf.IResolvable; 
  public get useLegacyClient() {
    return this._useLegacyClient;
  }
  public set useLegacyClient(value: boolean | cdktf.IResolvable | undefined) {
    this._useLegacyClient = value;
  }
  public resetUseLegacyClient() {
    this._useLegacyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyClientInput() {
    return this._useLegacyClient;
  }

  // vanity_domain - computed: false, optional: true, required: false
  private _vanityDomain?: string; 
  public get vanityDomain() {
    return this._vanityDomain;
  }
  public set vanityDomain(value: string | undefined) {
    this._vanityDomain = value;
  }
  public resetVanityDomain() {
    this._vanityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityDomainInput() {
    return this._vanityDomain;
  }

  // zpa_client_id - computed: false, optional: true, required: false
  private _zpaClientId?: string; 
  public get zpaClientId() {
    return this._zpaClientId;
  }
  public set zpaClientId(value: string | undefined) {
    this._zpaClientId = value;
  }
  public resetZpaClientId() {
    this._zpaClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaClientIdInput() {
    return this._zpaClientId;
  }

  // zpa_client_secret - computed: false, optional: true, required: false
  private _zpaClientSecret?: string; 
  public get zpaClientSecret() {
    return this._zpaClientSecret;
  }
  public set zpaClientSecret(value: string | undefined) {
    this._zpaClientSecret = value;
  }
  public resetZpaClientSecret() {
    this._zpaClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaClientSecretInput() {
    return this._zpaClientSecret;
  }

  // zpa_cloud - computed: false, optional: true, required: false
  private _zpaCloud?: string; 
  public get zpaCloud() {
    return this._zpaCloud;
  }
  public set zpaCloud(value: string | undefined) {
    this._zpaCloud = value;
  }
  public resetZpaCloud() {
    this._zpaCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaCloudInput() {
    return this._zpaCloud;
  }

  // zpa_customer_id - computed: false, optional: true, required: false
  private _zpaCustomerId?: string; 
  public get zpaCustomerId() {
    return this._zpaCustomerId;
  }
  public set zpaCustomerId(value: string | undefined) {
    this._zpaCustomerId = value;
  }
  public resetZpaCustomerId() {
    this._zpaCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaCustomerIdInput() {
    return this._zpaCustomerId;
  }

  // zscaler_cloud - computed: false, optional: true, required: false
  private _zscalerCloud?: string; 
  public get zscalerCloud() {
    return this._zscalerCloud;
  }
  public set zscalerCloud(value: string | undefined) {
    this._zscalerCloud = value;
  }
  public resetZscalerCloud() {
    this._zscalerCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerCloudInput() {
    return this._zscalerCloud;
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
      backoff: cdktf.booleanToTerraform(this._backoff),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      customer_id: cdktf.stringToTerraform(this._customerId),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_wait_seconds: cdktf.numberToTerraform(this._maxWaitSeconds),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      min_wait_seconds: cdktf.numberToTerraform(this._minWaitSeconds),
      parallelism: cdktf.numberToTerraform(this._parallelism),
      private_key: cdktf.stringToTerraform(this._privateKey),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      use_legacy_client: cdktf.booleanToTerraform(this._useLegacyClient),
      vanity_domain: cdktf.stringToTerraform(this._vanityDomain),
      zpa_client_id: cdktf.stringToTerraform(this._zpaClientId),
      zpa_client_secret: cdktf.stringToTerraform(this._zpaClientSecret),
      zpa_cloud: cdktf.stringToTerraform(this._zpaCloud),
      zpa_customer_id: cdktf.stringToTerraform(this._zpaCustomerId),
      zscaler_cloud: cdktf.stringToTerraform(this._zscalerCloud),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backoff: {
        value: cdktf.booleanToHclTerraform(this._backoff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
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
      max_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._maxWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._minWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallelism: {
        value: cdktf.numberToHclTerraform(this._parallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_legacy_client: {
        value: cdktf.booleanToHclTerraform(this._useLegacyClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vanity_domain: {
        value: cdktf.stringToHclTerraform(this._vanityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpa_client_id: {
        value: cdktf.stringToHclTerraform(this._zpaClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpa_client_secret: {
        value: cdktf.stringToHclTerraform(this._zpaClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpa_cloud: {
        value: cdktf.stringToHclTerraform(this._zpaCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpa_customer_id: {
        value: cdktf.stringToHclTerraform(this._zpaCustomerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_cloud: {
        value: cdktf.stringToHclTerraform(this._zscalerCloud),
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
