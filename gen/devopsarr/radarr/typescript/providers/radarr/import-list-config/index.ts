// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean library level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_config#sync_level ImportListConfigA#sync_level}
  */
  readonly syncLevel: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_config radarr_import_list_config}
*/
export class ImportListConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListConfigA to import
  * @param importFromId The id of the existing ImportListConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/import_list_config radarr_import_list_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_config',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._syncLevel = config.syncLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // sync_level - computed: false, optional: false, required: true
  private _syncLevel?: string; 
  public get syncLevel() {
    return this.getStringAttribute('sync_level');
  }
  public set syncLevel(value: string) {
    this._syncLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncLevelInput() {
    return this._syncLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sync_level: cdktf.stringToTerraform(this._syncLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sync_level: {
        value: cdktf.stringToHclTerraform(this._syncLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
