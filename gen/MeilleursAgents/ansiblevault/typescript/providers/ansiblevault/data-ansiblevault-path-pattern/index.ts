// https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAnsiblevaultPathPatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern#id DataAnsiblevaultPathPattern#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vault key searched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern#key DataAnsiblevaultPathPattern#key}
  */
  readonly key?: string;
  /**
  * Parameters for path pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern#path_params DataAnsiblevaultPathPattern#path_params}
  */
  readonly pathParams: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern ansiblevault_path_pattern}
*/
export class DataAnsiblevaultPathPattern extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansiblevault_path_pattern";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAnsiblevaultPathPattern resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAnsiblevaultPathPattern to import
  * @param importFromId The id of the existing DataAnsiblevaultPathPattern that should be imported. Refer to the {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAnsiblevaultPathPattern to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansiblevault_path_pattern", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/meilleursagents/ansiblevault/3.0.1/docs/data-sources/path_pattern ansiblevault_path_pattern} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAnsiblevaultPathPatternConfig
  */
  public constructor(scope: Construct, id: string, config: DataAnsiblevaultPathPatternConfig) {
    super(scope, id, {
      terraformResourceType: 'ansiblevault_path_pattern',
      terraformGeneratorMetadata: {
        providerName: 'ansiblevault',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._key = config.key;
    this._pathParams = config.pathParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path_params - computed: false, optional: false, required: true
  private _pathParams?: { [key: string]: string }; 
  public get pathParams() {
    return this.getStringMapAttribute('path_params');
  }
  public set pathParams(value: { [key: string]: string }) {
    this._pathParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathParamsInput() {
    return this._pathParams;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      path_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._pathParams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._pathParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
