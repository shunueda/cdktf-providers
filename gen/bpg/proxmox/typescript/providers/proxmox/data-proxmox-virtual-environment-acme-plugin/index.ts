// https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_acme_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentAcmePluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * ACME Plugin ID name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_acme_plugin#plugin DataProxmoxVirtualEnvironmentAcmePlugin#plugin}
  */
  readonly plugin: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_acme_plugin proxmox_virtual_environment_acme_plugin}
*/
export class DataProxmoxVirtualEnvironmentAcmePlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_acme_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentAcmePlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentAcmePlugin to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentAcmePlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_acme_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentAcmePlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_acme_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_acme_plugin proxmox_virtual_environment_acme_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentAcmePluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentAcmePluginConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_acme_plugin',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.88.0',
        providerVersionConstraint: '0.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._plugin = config.plugin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_delay - computed: true, optional: false, required: false
  public get validationDelay() {
    return this.getNumberAttribute('validation_delay');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      plugin: cdktf.stringToTerraform(this._plugin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
