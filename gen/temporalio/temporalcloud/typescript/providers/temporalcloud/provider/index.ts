// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemporalcloudProviderConfig {
  /**
  * If set to True, it allows for an insecure connection to the Temporal Cloud API. This should never be set to 'true' in production and defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#allow_insecure TemporalcloudProvider#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the account to operate on. Prevents accidental mutation of accounts other than that provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#allowed_account_id TemporalcloudProvider#allowed_account_id}
  */
  readonly allowedAccountId?: string;
  /**
  * The API key for Temporal Cloud. See [this documentation](https://docs.temporal.io/cloud/api-keys) for information on how to obtain an API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#api_key TemporalcloudProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The endpoint for the Temporal Cloud API. Defaults to `saas-api.tmprl.cloud:443`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#endpoint TemporalcloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#alias TemporalcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs temporalcloud}
*/
export class TemporalcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemporalcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemporalcloudProvider to import
  * @param importFromId The id of the existing TemporalcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemporalcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.1/docs temporalcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemporalcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TemporalcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.1'
      },
      terraformProviderSource: 'temporalio/temporalcloud'
    });
    this._allowInsecure = config.allowInsecure;
    this._allowedAccountId = config.allowedAccountId;
    this._apiKey = config.apiKey;
    this._endpoint = config.endpoint;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this._allowInsecure;
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // allowed_account_id - computed: false, optional: true, required: false
  private _allowedAccountId?: string; 
  public get allowedAccountId() {
    return this._allowedAccountId;
  }
  public set allowedAccountId(value: string | undefined) {
    this._allowedAccountId = value;
  }
  public resetAllowedAccountId() {
    this._allowedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdInput() {
    return this._allowedAccountId;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
      allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
      allowed_account_id: cdktf.stringToTerraform(this._allowedAccountId),
      api_key: cdktf.stringToTerraform(this._apiKey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_insecure: {
        value: cdktf.booleanToHclTerraform(this._allowInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_account_id: {
        value: cdktf.stringToHclTerraform(this._allowedAccountId),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
