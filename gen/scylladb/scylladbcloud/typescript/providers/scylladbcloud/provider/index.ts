// https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScylladbcloudProviderConfig {
  /**
  * URL of the Scylla Cloud endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs#endpoint ScylladbcloudProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to preload deployment metadata for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs#metadata ScylladbcloudProvider#metadata}
  */
  readonly metadata?: boolean | cdktf.IResolvable;
  /**
  * Bearer token used to authenticate with the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs#token ScylladbcloudProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs#alias ScylladbcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs scylladbcloud}
*/
export class ScylladbcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scylladbcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScylladbcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScylladbcloudProvider to import
  * @param importFromId The id of the existing ScylladbcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScylladbcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scylladbcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs scylladbcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScylladbcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ScylladbcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scylladbcloud',
      terraformGeneratorMetadata: {
        providerName: 'scylladbcloud',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      terraformProviderSource: 'scylladb/scylladbcloud'
    });
    this._endpoint = config.endpoint;
    this._metadata = config.metadata;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: boolean | cdktf.IResolvable; 
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: boolean | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
      metadata: cdktf.booleanToTerraform(this._metadata),
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
      metadata: {
        value: cdktf.booleanToHclTerraform(this._metadata),
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
