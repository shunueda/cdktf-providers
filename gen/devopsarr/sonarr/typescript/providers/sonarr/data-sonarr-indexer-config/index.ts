// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrIndexerConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer_config sonarr_indexer_config}
*/
export class DataSonarrIndexerConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrIndexerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrIndexerConfigA to import
  * @param importFromId The id of the existing DataSonarrIndexerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrIndexerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/indexer_config sonarr_indexer_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrIndexerConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrIndexerConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer_config',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
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

  // maximum_size - computed: true, optional: false, required: false
  public get maximumSize() {
    return this.getNumberAttribute('maximum_size');
  }

  // minimum_age - computed: true, optional: false, required: false
  public get minimumAge() {
    return this.getNumberAttribute('minimum_age');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // rss_sync_interval - computed: true, optional: false, required: false
  public get rssSyncInterval() {
    return this.getNumberAttribute('rss_sync_interval');
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
