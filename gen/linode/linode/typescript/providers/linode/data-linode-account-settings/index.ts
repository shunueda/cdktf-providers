// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeAccountSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_settings linode_account_settings}
*/
export class DataLinodeAccountSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_account_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeAccountSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeAccountSettings to import
  * @param importFromId The id of the existing DataLinodeAccountSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeAccountSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_account_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/account_settings linode_account_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeAccountSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeAccountSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_account_settings',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
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

  // backups_enabled - computed: true, optional: false, required: false
  public get backupsEnabled() {
    return this.getBooleanAttribute('backups_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces_for_new_linodes - computed: true, optional: false, required: false
  public get interfacesForNewLinodes() {
    return this.getStringAttribute('interfaces_for_new_linodes');
  }

  // longview_subscription - computed: true, optional: false, required: false
  public get longviewSubscription() {
    return this.getStringAttribute('longview_subscription');
  }

  // maintenance_policy - computed: true, optional: false, required: false
  public get maintenancePolicy() {
    return this.getStringAttribute('maintenance_policy');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // network_helper - computed: true, optional: false, required: false
  public get networkHelper() {
    return this.getBooleanAttribute('network_helper');
  }

  // object_storage - computed: true, optional: false, required: false
  public get objectStorage() {
    return this.getStringAttribute('object_storage');
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
