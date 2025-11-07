// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/indexer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrIndexerConfigAConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/indexer_config radarr_indexer_config}
*/
export class DataRadarrIndexerConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrIndexerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrIndexerConfigA to import
  * @param importFromId The id of the existing DataRadarrIndexerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/indexer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrIndexerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/indexer_config radarr_indexer_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrIndexerConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrIndexerConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer_config',
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

  // allow_hardcoded_subs - computed: true, optional: false, required: false
  public get allowHardcodedSubs() {
    return this.getBooleanAttribute('allow_hardcoded_subs');
  }

  // availability_delay - computed: true, optional: false, required: false
  public get availabilityDelay() {
    return this.getNumberAttribute('availability_delay');
  }

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

  // prefer_indexer_flags - computed: true, optional: false, required: false
  public get preferIndexerFlags() {
    return this.getBooleanAttribute('prefer_indexer_flags');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // rss_sync_interval - computed: true, optional: false, required: false
  public get rssSyncInterval() {
    return this.getNumberAttribute('rss_sync_interval');
  }

  // whitelisted_hardcoded_subs - computed: true, optional: false, required: false
  public get whitelistedHardcodedSubs() {
    return this.getStringAttribute('whitelisted_hardcoded_subs');
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
