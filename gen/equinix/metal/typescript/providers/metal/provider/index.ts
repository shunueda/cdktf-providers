// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalProviderConfig {
  /**
  * The API auth key for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs#auth_token MetalProvider#auth_token}
  */
  readonly authToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs#max_retries MetalProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs#max_retry_wait_seconds MetalProvider#max_retry_wait_seconds}
  */
  readonly maxRetryWaitSeconds?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs#alias MetalProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs metal}
*/
export class MetalProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalProvider to import
  * @param importFromId The id of the existing MetalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs metal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MetalProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'metal',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0'
      },
      terraformProviderSource: 'equinix/metal'
    });
    this._authToken = config.authToken;
    this._maxRetries = config.maxRetries;
    this._maxRetryWaitSeconds = config.maxRetryWaitSeconds;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_token - computed: false, optional: false, required: true
  private _authToken?: string; 
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
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

  // max_retry_wait_seconds - computed: false, optional: true, required: false
  private _maxRetryWaitSeconds?: number; 
  public get maxRetryWaitSeconds() {
    return this._maxRetryWaitSeconds;
  }
  public set maxRetryWaitSeconds(value: number | undefined) {
    this._maxRetryWaitSeconds = value;
  }
  public resetMaxRetryWaitSeconds() {
    this._maxRetryWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryWaitSecondsInput() {
    return this._maxRetryWaitSeconds;
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
      auth_token: cdktf.stringToTerraform(this._authToken),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_retry_wait_seconds: cdktf.numberToTerraform(this._maxRetryWaitSeconds),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_token: {
        value: cdktf.stringToHclTerraform(this._authToken),
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
      max_retry_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._maxRetryWaitSeconds),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
