// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of block device ids to be included in this volume group.
  * *Note*: For the boot disk, a partition should be supplied instead, as MAAS would otherwise automatically create one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#block_devices VolumeGroup#block_devices}
  */
  readonly blockDevices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#id VolumeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The machine identifier (system ID, hostname, or FQDN) that owns the volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#machine VolumeGroup#machine}
  */
  readonly machine: string;
  /**
  * The name for this volume group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#name VolumeGroup#name}
  */
  readonly name: string;
  /**
  * The list of partition ids to be included in this volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#partitions VolumeGroup#partitions}
  */
  readonly partitions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group maas_volume_group}
*/
export class VolumeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_volume_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeGroup to import
  * @param importFromId The id of the existing VolumeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_volume_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/volume_group maas_volume_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_volume_group',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockDevices = config.blockDevices;
    this._id = config.id;
    this._machine = config.machine;
    this._name = config.name;
    this._partitions = config.partitions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_devices - computed: false, optional: true, required: false
  private _blockDevices?: string[]; 
  public get blockDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('block_devices'));
  }
  public set blockDevices(value: string[]) {
    this._blockDevices = value;
  }
  public resetBlockDevices() {
    this._blockDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDevicesInput() {
    return this._blockDevices;
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

  // machine - computed: false, optional: false, required: true
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
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

  // partitions - computed: false, optional: true, required: false
  private _partitions?: string[]; 
  public get partitions() {
    return cdktf.Fn.tolist(this.getListAttribute('partitions'));
  }
  public set partitions(value: string[]) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // size_gigabytes - computed: true, optional: false, required: false
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockDevices),
      id: cdktf.stringToTerraform(this._id),
      machine: cdktf.stringToTerraform(this._machine),
      name: cdktf.stringToTerraform(this._name),
      partitions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockDevices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
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
      partitions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partitions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
