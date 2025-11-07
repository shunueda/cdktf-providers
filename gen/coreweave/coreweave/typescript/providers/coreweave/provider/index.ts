// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreweaveProviderConfig {
  /**
  * CoreWeave API Endpoint. This can also be set via the COREWEAVE_API_ENDPOINT environment variable, which takes precedence. Defaults to https://api.coreweave.com/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#endpoint CoreweaveProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Timeout duration for the HTTP client to use. This can also be set via the COREWEAVE_HTTP_TIMEOUT environment variable, which takes precedence. If unset, defaults to 10 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#http_timeout CoreweaveProvider#http_timeout}
  */
  readonly httpTimeout?: string;
  /**
  * CoreWeave S3 Endpoint, used for CoreWeave Object Storage. This can also be set via the COREWEAVE_S3_ENDPOINT environment variable, which takes precedence. Defaults to https://cwobject.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#s3_endpoint CoreweaveProvider#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * CoreWeave API Token. In the form CW-SECRET-<secret>. This can also be set via the COREWEAVE_API_TOKEN environment variable, which takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#token CoreweaveProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#alias CoreweaveProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs coreweave}
*/
export class CoreweaveProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreweaveProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreweaveProvider to import
  * @param importFromId The id of the existing CoreweaveProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreweaveProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs coreweave} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreweaveProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CoreweaveProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coreweave',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0'
      },
      terraformProviderSource: 'coreweave/coreweave'
    });
    this._endpoint = config.endpoint;
    this._httpTimeout = config.httpTimeout;
    this._s3Endpoint = config.s3Endpoint;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // http_timeout - computed: false, optional: true, required: false
  private _httpTimeout?: string; 
  public get httpTimeout() {
    return this._httpTimeout;
  }
  public set httpTimeout(value: string | undefined) {
    this._httpTimeout = value;
  }
  public resetHttpTimeout() {
    this._httpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutInput() {
    return this._httpTimeout;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this._s3Endpoint;
  }
  public set s3Endpoint(value: string | undefined) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      http_timeout: cdktf.stringToTerraform(this._httpTimeout),
      s3_endpoint: cdktf.stringToTerraform(this._s3Endpoint),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_timeout: {
        value: cdktf.stringToHclTerraform(this._httpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_endpoint: {
        value: cdktf.stringToHclTerraform(this._s3Endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
