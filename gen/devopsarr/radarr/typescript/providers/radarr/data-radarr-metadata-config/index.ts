// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/metadata_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrMetadataConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/metadata_config radarr_metadata_config}
*/
export class DataRadarrMetadataConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_metadata_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrMetadataConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrMetadataConfigA to import
  * @param importFromId The id of the existing DataRadarrMetadataConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/metadata_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrMetadataConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_metadata_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/metadata_config radarr_metadata_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrMetadataConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrMetadataConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_metadata_config',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certification_country - computed: true, optional: false, required: false
  public get certificationCountry() {
    return this.getStringAttribute('certification_country');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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
