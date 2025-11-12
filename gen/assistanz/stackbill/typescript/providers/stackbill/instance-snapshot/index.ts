// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#description InstanceSnapshot#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#id InstanceSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#name InstanceSnapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#snapshot_memory InstanceSnapshot#snapshot_memory}
  */
  readonly snapshotMemory: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#virtual_machine_uuid InstanceSnapshot#virtual_machine_uuid}
  */
  readonly virtualMachineUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#zone_uuid InstanceSnapshot#zone_uuid}
  */
  readonly zoneUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot stackbill_instance_snapshot}
*/
export class InstanceSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_instance_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceSnapshot to import
  * @param importFromId The id of the existing InstanceSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_instance_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_snapshot stackbill_instance_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_instance_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._snapshotMemory = config.snapshotMemory;
    this._virtualMachineUuid = config.virtualMachineUuid;
    this._zoneUuid = config.zoneUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // snapshot_memory - computed: false, optional: false, required: true
  private _snapshotMemory?: boolean | cdktf.IResolvable; 
  public get snapshotMemory() {
    return this.getBooleanAttribute('snapshot_memory');
  }
  public set snapshotMemory(value: boolean | cdktf.IResolvable) {
    this._snapshotMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotMemoryInput() {
    return this._snapshotMemory;
  }

  // virtual_machine_uuid - computed: false, optional: false, required: true
  private _virtualMachineUuid?: string; 
  public get virtualMachineUuid() {
    return this.getStringAttribute('virtual_machine_uuid');
  }
  public set virtualMachineUuid(value: string) {
    this._virtualMachineUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineUuidInput() {
    return this._virtualMachineUuid;
  }

  // zone_uuid - computed: false, optional: false, required: true
  private _zoneUuid?: string; 
  public get zoneUuid() {
    return this.getStringAttribute('zone_uuid');
  }
  public set zoneUuid(value: string) {
    this._zoneUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUuidInput() {
    return this._zoneUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snapshot_memory: cdktf.booleanToTerraform(this._snapshotMemory),
      virtual_machine_uuid: cdktf.stringToTerraform(this._virtualMachineUuid),
      zone_uuid: cdktf.stringToTerraform(this._zoneUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      snapshot_memory: {
        value: cdktf.booleanToHclTerraform(this._snapshotMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_machine_uuid: {
        value: cdktf.stringToHclTerraform(this._virtualMachineUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_uuid: {
        value: cdktf.stringToHclTerraform(this._zoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
