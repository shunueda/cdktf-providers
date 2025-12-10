// https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJujuMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Juju id of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine#machine_id DataJujuMachine#machine_id}
  */
  readonly machineId: string;
  /**
  * The UUID of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine#model_uuid DataJujuMachine#model_uuid}
  */
  readonly modelUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine juju_machine}
*/
export class DataJujuMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJujuMachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJujuMachine to import
  * @param importFromId The id of the existing DataJujuMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJujuMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/data-sources/machine juju_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJujuMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataJujuMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_machine',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._machineId = config.machineId;
    this._modelUuid = config.modelUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_id - computed: false, optional: false, required: true
  private _machineId?: string; 
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }
  public set machineId(value: string) {
    this._machineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineIdInput() {
    return this._machineId;
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      machine_id: cdktf.stringToTerraform(this._machineId),
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      machine_id: {
        value: cdktf.stringToHclTerraform(this._machineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_uuid: {
        value: cdktf.stringToHclTerraform(this._modelUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
