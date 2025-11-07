// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_alerts_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaPublishersAlertsConfigurationConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_alerts_configuration netskope_npa_publishers_alerts_configuration}
*/
export class DataNetskopeNpaPublishersAlertsConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_publishers_alerts_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaPublishersAlertsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaPublishersAlertsConfiguration to import
  * @param importFromId The id of the existing DataNetskopeNpaPublishersAlertsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_alerts_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaPublishersAlertsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_publishers_alerts_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_publishers_alerts_configuration netskope_npa_publishers_alerts_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaPublishersAlertsConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaPublishersAlertsConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_publishers_alerts_configuration',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
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

  // admin_users - computed: true, optional: false, required: false
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }

  // event_types - computed: true, optional: false, required: false
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }

  // selected_users - computed: true, optional: false, required: false
  public get selectedUsers() {
    return this.getStringAttribute('selected_users');
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
