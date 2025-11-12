// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CouchbaseCapellaProviderConfig {
  /**
  * Capella API Token that serves as an authentication mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs#authentication_token CouchbaseCapellaProvider#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * Capella Public API HTTPS Host URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs#host CouchbaseCapellaProvider#host}
  */
  readonly host?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs#alias CouchbaseCapellaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs couchbase-capella}
*/
export class CouchbaseCapellaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CouchbaseCapellaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CouchbaseCapellaProvider to import
  * @param importFromId The id of the existing CouchbaseCapellaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CouchbaseCapellaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.5.3/docs couchbase-capella} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CouchbaseCapellaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CouchbaseCapellaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      terraformProviderSource: 'couchbasecloud/couchbase-capella'
    });
    this._authenticationToken = config.authenticationToken;
    this._host = config.host;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_token - computed: false, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this._authenticationToken;
  }
  public set authenticationToken(value: string | undefined) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
      authentication_token: cdktf.stringToTerraform(this._authenticationToken),
      host: cdktf.stringToTerraform(this._host),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_token: {
        value: cdktf.stringToHclTerraform(this._authenticationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
