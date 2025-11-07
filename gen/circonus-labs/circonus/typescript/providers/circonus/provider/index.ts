// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CirconusProviderConfig {
  /**
  * URL of the Circonus API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs#api_url CirconusProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Signals that the provider should automatically add a tag to all API calls denoting that the resource was created by Terraform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs#auto_tag CirconusProvider#auto_tag}
  */
  readonly autoTag?: boolean | cdktf.IResolvable;
  /**
  * API token used to authenticate with the Circonus API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs#key CirconusProvider#key}
  */
  readonly key: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs#alias CirconusProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs circonus}
*/
export class CirconusProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CirconusProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CirconusProvider to import
  * @param importFromId The id of the existing CirconusProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CirconusProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs circonus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CirconusProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CirconusProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      terraformProviderSource: 'circonus-labs/circonus'
    });
    this._apiUrl = config.apiUrl;
    this._autoTag = config.autoTag;
    this._key = config.key;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auto_tag - computed: false, optional: true, required: false
  private _autoTag?: boolean | cdktf.IResolvable; 
  public get autoTag() {
    return this._autoTag;
  }
  public set autoTag(value: boolean | cdktf.IResolvable | undefined) {
    this._autoTag = value;
  }
  public resetAutoTag() {
    this._autoTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTagInput() {
    return this._autoTag;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      auto_tag: cdktf.booleanToTerraform(this._autoTag),
      key: cdktf.stringToTerraform(this._key),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_tag: {
        value: cdktf.booleanToHclTerraform(this._autoTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
