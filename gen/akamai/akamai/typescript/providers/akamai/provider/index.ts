// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AkamaiProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#cache_enabled AkamaiProvider#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * The section of the edgerc file to use for configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#config_section AkamaiProvider#config_section}
  */
  readonly configSection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#edgerc AkamaiProvider#edgerc}
  */
  readonly edgerc?: string;
  /**
  * The maximum number of API requests to be made per second (0 for no limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#request_limit AkamaiProvider#request_limit}
  */
  readonly requestLimit?: number;
  /**
  * Should the retries of API requests be disabled, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#retry_disabled AkamaiProvider#retry_disabled}
  */
  readonly retryDisabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number retires of API requests, default 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#retry_max AkamaiProvider#retry_max}
  */
  readonly retryMax?: number;
  /**
  * The maximum wait time in seconds between API requests retries, default is 30 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#retry_wait_max AkamaiProvider#retry_wait_max}
  */
  readonly retryWaitMax?: number;
  /**
  * The minimum wait time in seconds between API requests retries, default is 1 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#retry_wait_min AkamaiProvider#retry_wait_min}
  */
  readonly retryWaitMin?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#alias AkamaiProvider#alias}
  */
  readonly alias?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#config AkamaiProvider#config}
  */
  readonly config?: AkamaiProviderConfigA[] | cdktf.IResolvable;
}
export interface AkamaiProviderConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#access_token AkamaiProvider#access_token}
  */
  readonly accessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#account_key AkamaiProvider#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#client_secret AkamaiProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#client_token AkamaiProvider#client_token}
  */
  readonly clientToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#host AkamaiProvider#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#max_body AkamaiProvider#max_body}
  */
  readonly maxBody?: number;
}

export function akamaiProviderConfigAToTerraform(struct?: AkamaiProviderConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    client_token: cdktf.stringToTerraform(struct!.clientToken),
    host: cdktf.stringToTerraform(struct!.host),
    max_body: cdktf.numberToTerraform(struct!.maxBody),
  }
}


export function akamaiProviderConfigAToHclTerraform(struct?: AkamaiProviderConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_token: {
      value: cdktf.stringToHclTerraform(struct!.clientToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_body: {
      value: cdktf.numberToHclTerraform(struct!.maxBody),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs akamai}
*/
export class AkamaiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AkamaiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AkamaiProvider to import
  * @param importFromId The id of the existing AkamaiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AkamaiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs akamai} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AkamaiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AkamaiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      terraformProviderSource: 'akamai/akamai'
    });
    this._cacheEnabled = config.cacheEnabled;
    this._configSection = config.configSection;
    this._edgerc = config.edgerc;
    this._requestLimit = config.requestLimit;
    this._retryDisabled = config.retryDisabled;
    this._retryMax = config.retryMax;
    this._retryWaitMax = config.retryWaitMax;
    this._retryWaitMin = config.retryWaitMin;
    this._alias = config.alias;
    this._config = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this._cacheEnabled;
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // config_section - computed: false, optional: true, required: false
  private _configSection?: string; 
  public get configSection() {
    return this._configSection;
  }
  public set configSection(value: string | undefined) {
    this._configSection = value;
  }
  public resetConfigSection() {
    this._configSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSectionInput() {
    return this._configSection;
  }

  // edgerc - computed: false, optional: true, required: false
  private _edgerc?: string; 
  public get edgerc() {
    return this._edgerc;
  }
  public set edgerc(value: string | undefined) {
    this._edgerc = value;
  }
  public resetEdgerc() {
    this._edgerc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgercInput() {
    return this._edgerc;
  }

  // request_limit - computed: false, optional: true, required: false
  private _requestLimit?: number; 
  public get requestLimit() {
    return this._requestLimit;
  }
  public set requestLimit(value: number | undefined) {
    this._requestLimit = value;
  }
  public resetRequestLimit() {
    this._requestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLimitInput() {
    return this._requestLimit;
  }

  // retry_disabled - computed: false, optional: true, required: false
  private _retryDisabled?: boolean | cdktf.IResolvable; 
  public get retryDisabled() {
    return this._retryDisabled;
  }
  public set retryDisabled(value: boolean | cdktf.IResolvable | undefined) {
    this._retryDisabled = value;
  }
  public resetRetryDisabled() {
    this._retryDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDisabledInput() {
    return this._retryDisabled;
  }

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number; 
  public get retryMax() {
    return this._retryMax;
  }
  public set retryMax(value: number | undefined) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax;
  }

  // retry_wait_max - computed: false, optional: true, required: false
  private _retryWaitMax?: number; 
  public get retryWaitMax() {
    return this._retryWaitMax;
  }
  public set retryWaitMax(value: number | undefined) {
    this._retryWaitMax = value;
  }
  public resetRetryWaitMax() {
    this._retryWaitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMaxInput() {
    return this._retryWaitMax;
  }

  // retry_wait_min - computed: false, optional: true, required: false
  private _retryWaitMin?: number; 
  public get retryWaitMin() {
    return this._retryWaitMin;
  }
  public set retryWaitMin(value: number | undefined) {
    this._retryWaitMin = value;
  }
  public resetRetryWaitMin() {
    this._retryWaitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMinInput() {
    return this._retryWaitMin;
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

  // config - computed: false, optional: true, required: false
  private _config?: AkamaiProviderConfigA[] | cdktf.IResolvable; 
  public get config() {
    return this._config;
  }
  public set config(value: AkamaiProviderConfigA[] | cdktf.IResolvable | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_enabled: cdktf.booleanToTerraform(this._cacheEnabled),
      config_section: cdktf.stringToTerraform(this._configSection),
      edgerc: cdktf.stringToTerraform(this._edgerc),
      request_limit: cdktf.numberToTerraform(this._requestLimit),
      retry_disabled: cdktf.booleanToTerraform(this._retryDisabled),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      retry_wait_max: cdktf.numberToTerraform(this._retryWaitMax),
      retry_wait_min: cdktf.numberToTerraform(this._retryWaitMin),
      alias: cdktf.stringToTerraform(this._alias),
      config: cdktf.listMapper(akamaiProviderConfigAToTerraform, true)(this._config),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._cacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_section: {
        value: cdktf.stringToHclTerraform(this._configSection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgerc: {
        value: cdktf.stringToHclTerraform(this._edgerc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_limit: {
        value: cdktf.numberToHclTerraform(this._requestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_disabled: {
        value: cdktf.booleanToHclTerraform(this._retryDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retry_max: {
        value: cdktf.numberToHclTerraform(this._retryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_max: {
        value: cdktf.numberToHclTerraform(this._retryWaitMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_wait_min: {
        value: cdktf.numberToHclTerraform(this._retryWaitMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(akamaiProviderConfigAToHclTerraform, true)(this._config),
        isBlock: true,
        type: "set",
        storageClassType: "AkamaiProviderConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
