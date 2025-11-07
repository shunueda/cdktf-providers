// https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsoDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An instance name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group#instance DataNsoDeviceGroup#instance}
  */
  readonly instance?: string;
  /**
  * Device group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group#name DataNsoDeviceGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group nso_device_group}
*/
export class DataNsoDeviceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nso_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsoDeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsoDeviceGroup to import
  * @param importFromId The id of the existing DataNsoDeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsoDeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nso_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_group nso_device_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsoDeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsoDeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nso_device_group',
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

  // device_groups - computed: true, optional: false, required: false
  public get deviceGroups() {
    return this.getListAttribute('device_groups');
  }

  // device_names - computed: true, optional: false, required: false
  public get deviceNames() {
    return this.getListAttribute('device_names');
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
