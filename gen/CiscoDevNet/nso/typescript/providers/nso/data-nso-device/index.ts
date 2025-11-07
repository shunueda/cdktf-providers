// https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsoDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An instance name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device#instance DataNsoDevice#instance}
  */
  readonly instance?: string;
  /**
  * A string uniquely identifying the managed device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device#name DataNsoDevice#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device nso_device}
*/
export class DataNsoDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nso_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsoDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsoDevice to import
  * @param importFromId The id of the existing DataNsoDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsoDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nso_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device nso_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsoDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsoDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'nso_device',
      terraformGeneratorMetadata: {
        providerName: 'nso',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instance = config.instance;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }

  // authgroup - computed: true, optional: false, required: false
  public get authgroup() {
    return this.getStringAttribute('authgroup');
  }

  // cli_ned_id - computed: true, optional: false, required: false
  public get cliNedId() {
    return this.getStringAttribute('cli_ned_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netconf_net_id - computed: true, optional: false, required: false
  public get netconfNetId() {
    return this.getStringAttribute('netconf_net_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
