// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrImportListConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list_config radarr_import_list_config}
*/
export class DataRadarrImportListConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_import_list_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrImportListConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrImportListConfigA to import
  * @param importFromId The id of the existing DataRadarrImportListConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrImportListConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_import_list_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/data-sources/import_list_config radarr_import_list_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrImportListConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrImportListConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_import_list_config',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // sync_level - computed: true, optional: false, required: false
  public get syncLevel() {
    return this.getStringAttribute('sync_level');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
