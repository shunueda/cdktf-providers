// https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsoDeviceConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * An NSO device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config#device DataNsoDeviceConfigA#device}
  */
  readonly device: string;
  /**
  * An instance name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config#instance DataNsoDeviceConfigA#instance}
  */
  readonly instance?: string;
  /**
  * A RESTCONF/YANG config path, e.g. `tailf-ned-cisco-ios:access-list/access-list=1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config#path DataNsoDeviceConfigA#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config nso_device_config}
*/
export class DataNsoDeviceConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nso_device_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsoDeviceConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsoDeviceConfigA to import
  * @param importFromId The id of the existing DataNsoDeviceConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsoDeviceConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nso_device_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/data-sources/device_config nso_device_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsoDeviceConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsoDeviceConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'nso_device_config',
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
    this._device = config.device;
    this._instance = config.instance;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      instance: cdktf.stringToTerraform(this._instance),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
