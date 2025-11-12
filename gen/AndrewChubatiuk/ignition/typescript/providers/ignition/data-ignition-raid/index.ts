// https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionRaidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#devices DataIgnitionRaid#devices}
  */
  readonly devices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#id DataIgnitionRaid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#level DataIgnitionRaid#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#name DataIgnitionRaid#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#spares DataIgnitionRaid#spares}
  */
  readonly spares?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid ignition_raid}
*/
export class DataIgnitionRaid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_raid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionRaid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionRaid to import
  * @param importFromId The id of the existing DataIgnitionRaid that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionRaid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_raid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/raid ignition_raid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionRaidConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionRaidConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_raid',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._devices = config.devices;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._spares = config.spares;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices - computed: false, optional: true, required: false
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // spares - computed: false, optional: true, required: false
  private _spares?: number; 
  public get spares() {
    return this.getNumberAttribute('spares');
  }
  public set spares(value: number) {
    this._spares = value;
  }
  public resetSpares() {
    this._spares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparesInput() {
    return this._spares;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devices),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      spares: cdktf.numberToTerraform(this._spares),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      spares: {
        value: cdktf.numberToHclTerraform(this._spares),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
