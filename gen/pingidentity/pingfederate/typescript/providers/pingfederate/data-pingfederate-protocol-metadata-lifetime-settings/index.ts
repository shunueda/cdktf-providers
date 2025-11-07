// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/protocol_metadata_lifetime_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateProtocolMetadataLifetimeSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/protocol_metadata_lifetime_settings pingfederate_protocol_metadata_lifetime_settings}
*/
export class DataPingfederateProtocolMetadataLifetimeSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_protocol_metadata_lifetime_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateProtocolMetadataLifetimeSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateProtocolMetadataLifetimeSettings to import
  * @param importFromId The id of the existing DataPingfederateProtocolMetadataLifetimeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/protocol_metadata_lifetime_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateProtocolMetadataLifetimeSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_protocol_metadata_lifetime_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/protocol_metadata_lifetime_settings pingfederate_protocol_metadata_lifetime_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateProtocolMetadataLifetimeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateProtocolMetadataLifetimeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_protocol_metadata_lifetime_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
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

  // cache_duration - computed: true, optional: false, required: false
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }

  // reload_delay - computed: true, optional: false, required: false
  public get reloadDelay() {
    return this.getNumberAttribute('reload_delay');
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
