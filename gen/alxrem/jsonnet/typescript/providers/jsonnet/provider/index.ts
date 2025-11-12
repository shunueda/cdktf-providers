// https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JsonnetProviderConfig {
  /**
  * Paths used to search additional Jsonnet libraries. Can be specified by `JSONNET_PATH` environment variable with multiple paths separated by colons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs#jsonnet_path JsonnetProvider#jsonnet_path}
  */
  readonly jsonnetPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs#alias JsonnetProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs jsonnet}
*/
export class JsonnetProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jsonnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JsonnetProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JsonnetProvider to import
  * @param importFromId The id of the existing JsonnetProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JsonnetProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jsonnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alxrem/jsonnet/2.5.0/docs jsonnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JsonnetProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JsonnetProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'jsonnet',
      terraformGeneratorMetadata: {
        providerName: 'jsonnet',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
      },
      terraformProviderSource: 'alxrem/jsonnet'
    });
    this._jsonnetPath = config.jsonnetPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jsonnet_path - computed: false, optional: true, required: false
  private _jsonnetPath?: string; 
  public get jsonnetPath() {
    return this._jsonnetPath;
  }
  public set jsonnetPath(value: string | undefined) {
    this._jsonnetPath = value;
  }
  public resetJsonnetPath() {
    this._jsonnetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetPathInput() {
    return this._jsonnetPath;
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
      jsonnet_path: cdktf.stringToTerraform(this._jsonnetPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jsonnet_path: {
        value: cdktf.stringToHclTerraform(this._jsonnetPath),
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
