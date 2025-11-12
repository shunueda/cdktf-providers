// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpalProviderConfig {
  /**
  * HTTP Bearer. Configurable via environment variable `OPAL_AUTH_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs#bearer_auth OpalProvider#bearer_auth}
  */
  readonly bearerAuth?: string;
  /**
  * HTTP headers to include in all requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs#http_headers OpalProvider#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Server URL (defaults to https://api.opal.dev/v1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs#server_url OpalProvider#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs#alias OpalProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs opal}
*/
export class OpalProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpalProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpalProvider to import
  * @param importFromId The id of the existing OpalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpalProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs opal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpalProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpalProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opal',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
      },
      terraformProviderSource: 'opalsecurity/opal'
    });
    this._bearerAuth = config.bearerAuth;
    this._httpHeaders = config.httpHeaders;
    this._serverUrl = config.serverUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_auth - computed: false, optional: true, required: false
  private _bearerAuth?: string; 
  public get bearerAuth() {
    return this._bearerAuth;
  }
  public set bearerAuth(value: string | undefined) {
    this._bearerAuth = value;
  }
  public resetBearerAuth() {
    this._bearerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerAuthInput() {
    return this._bearerAuth;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public set httpHeaders(value: { [key: string]: string } | undefined) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
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
      bearer_auth: cdktf.stringToTerraform(this._bearerAuth),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_auth: {
        value: cdktf.stringToHclTerraform(this._bearerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
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
