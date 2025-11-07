// https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlgoliaProviderConfig {
  /**
  * The API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs#api_key AlgoliaProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * The Algolia application ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs#application_id AlgoliaProvider#application_id}
  */
  readonly applicationId: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs#alias AlgoliaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs algolia}
*/
export class AlgoliaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlgoliaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlgoliaProvider to import
  * @param importFromId The id of the existing AlgoliaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlgoliaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philippe-vandermoere/algolia/0.7.0/docs algolia} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlgoliaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AlgoliaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.7.0'
      },
      terraformProviderSource: 'philippe-vandermoere/algolia'
    });
    this._apiKey = config.apiKey;
    this._applicationId = config.applicationId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      application_id: cdktf.stringToTerraform(this._applicationId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
