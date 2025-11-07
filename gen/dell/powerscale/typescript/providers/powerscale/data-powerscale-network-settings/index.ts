// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/network_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNetworkSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/network_settings powerscale_network_settings}
*/
export class DataPowerscaleNetworkSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_network_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNetworkSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNetworkSettings to import
  * @param importFromId The id of the existing DataPowerscaleNetworkSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/network_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNetworkSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_network_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/network_settings powerscale_network_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNetworkSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNetworkSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_network_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
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

  // default_groupnet - computed: true, optional: false, required: false
  public get defaultGroupnet() {
    return this.getStringAttribute('default_groupnet');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sc_rebalance_delay - computed: true, optional: false, required: false
  public get scRebalanceDelay() {
    return this.getNumberAttribute('sc_rebalance_delay');
  }

  // source_based_routing_enabled - computed: true, optional: false, required: false
  public get sourceBasedRoutingEnabled() {
    return this.getBooleanAttribute('source_based_routing_enabled');
  }

  // tcp_ports - computed: true, optional: false, required: false
  public get tcpPorts() {
    return this.getNumberListAttribute('tcp_ports');
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
