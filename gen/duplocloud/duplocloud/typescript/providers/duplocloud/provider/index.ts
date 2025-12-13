// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuplocloudProviderConfig {
  /**
  * This is the base URL to the Duplo REST API.  It must be provided, but it can also be sourced from the `duplo_host` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#duplo_host DuplocloudProvider#duplo_host}
  */
  readonly duploHost?: string;
  /**
  * This is a bearer token used to authenticate to the Duplo REST API.  It must be provided, but it can also be sourced from the `duplo_token` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#duplo_token DuplocloudProvider#duplo_token}
  */
  readonly duploToken?: string;
  /**
  * Timeout for HTTP requests in seconds. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#http_timeout DuplocloudProvider#http_timeout}
  */
  readonly httpTimeout?: number;
  /**
  * Disable SSL certificate verification. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#ssl_no_verify DuplocloudProvider#ssl_no_verify}
  */
  readonly sslNoVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#alias DuplocloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs duplocloud}
*/
export class DuplocloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuplocloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuplocloudProvider to import
  * @param importFromId The id of the existing DuplocloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuplocloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs duplocloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuplocloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DuplocloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'duplocloud',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      terraformProviderSource: 'duplocloud/duplocloud'
    });
    this._duploHost = config.duploHost;
    this._duploToken = config.duploToken;
    this._httpTimeout = config.httpTimeout;
    this._sslNoVerify = config.sslNoVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duplo_host - computed: false, optional: true, required: false
  private _duploHost?: string; 
  public get duploHost() {
    return this._duploHost;
  }
  public set duploHost(value: string | undefined) {
    this._duploHost = value;
  }
  public resetDuploHost() {
    this._duploHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duploHostInput() {
    return this._duploHost;
  }

  // duplo_token - computed: false, optional: true, required: false
  private _duploToken?: string; 
  public get duploToken() {
    return this._duploToken;
  }
  public set duploToken(value: string | undefined) {
    this._duploToken = value;
  }
  public resetDuploToken() {
    this._duploToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duploTokenInput() {
    return this._duploToken;
  }

  // http_timeout - computed: false, optional: true, required: false
  private _httpTimeout?: number; 
  public get httpTimeout() {
    return this._httpTimeout;
  }
  public set httpTimeout(value: number | undefined) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // ssl_no_verify - computed: false, optional: true, required: false
  private _sslNoVerify?: boolean | cdktf.IResolvable; 
  public get sslNoVerify() {
    return this._sslNoVerify;
  }
  public set sslNoVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._sslNoVerify = value;
  }
  public resetSslNoVerify() {
    this._sslNoVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNoVerifyInput() {
    return this._sslNoVerify;
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
      duplo_host: cdktf.stringToTerraform(this._duploHost),
      duplo_token: cdktf.stringToTerraform(this._duploToken),
      http_timeout: cdktf.numberToTerraform(this._httpTimeout),
      ssl_no_verify: cdktf.booleanToTerraform(this._sslNoVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duplo_host: {
        value: cdktf.stringToHclTerraform(this._duploHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplo_token: {
        value: cdktf.stringToHclTerraform(this._duploToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_timeout: {
        value: cdktf.numberToHclTerraform(this._httpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_no_verify: {
        value: cdktf.booleanToHclTerraform(this._sslNoVerify),
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
