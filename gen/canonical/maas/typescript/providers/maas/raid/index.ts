// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RaidConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of block devices to be included in the RAID.
  * *Note*: The boot disk cannot participate in the RAID as a block device, a partition on top of it should be supplied instead.
  * *Note*: Block devices with partitions are not valid targets to construct a RAID, supply their partitions instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#block_devices Raid#block_devices}
  */
  readonly blockDevices?: string[];
  /**
  * The file system type (e.g. `ext4`). If this is not set, the RAID is unformatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#fs_type Raid#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#id Raid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The RAID Level. Valid levels are: `"0", "1", "5", "6", "10"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#level Raid#level}
  */
  readonly level: string;
  /**
  * The machine identifier (system ID, hostname, or FQDN) that owns the RAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#machine Raid#machine}
  */
  readonly machine: string;
  /**
  * Comma separated options used for the RAID mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#mount_options Raid#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * The mount point used. If this is not set, the RAID is not mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#mount_point Raid#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * The name for the RAID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#name Raid#name}
  */
  readonly name: string;
  /**
  * The list of partitions to be included in the RAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#partitions Raid#partitions}
  */
  readonly partitions?: string[];
  /**
  * The list of spare block devices for the RAID.
  * *Note*: The boot disk cannot participate in the RAID as a block device, a partition on top of it should be supplied instead.
  * *Note*: Block devices with partitions are not valid targets to construct a RAID, supply their partitions instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#spare_devices Raid#spare_devices}
  */
  readonly spareDevices?: string[];
  /**
  * The list of spare partitions for the RAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#spare_partitions Raid#spare_partitions}
  */
  readonly sparePartitions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid maas_raid}
*/
export class Raid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_raid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Raid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Raid to import
  * @param importFromId The id of the existing Raid that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Raid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_raid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/raid maas_raid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RaidConfig
  */
  public constructor(scope: Construct, id: string, config: RaidConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_raid',
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
    this._fsType = config.fsType;
    this._id = config.id;
    this._level = config.level;
    this._machine = config.machine;
    this._mountOptions = config.mountOptions;
    this._mountPoint = config.mountPoint;
    this._name = config.name;
    this._partitions = config.partitions;
    this._spareDevices = config.spareDevices;
    this._sparePartitions = config.sparePartitions;
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
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

  // spare_devices - computed: false, optional: true, required: false
  private _spareDevices?: string[]; 
  public get spareDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('spare_devices'));
  }
  public set spareDevices(value: string[]) {
    this._spareDevices = value;
  }
  public resetSpareDevices() {
    this._spareDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spareDevicesInput() {
    return this._spareDevices;
  }

  // spare_partitions - computed: false, optional: true, required: false
  private _sparePartitions?: string[]; 
  public get sparePartitions() {
    return cdktf.Fn.tolist(this.getListAttribute('spare_partitions'));
  }
  public set sparePartitions(value: string[]) {
    this._sparePartitions = value;
  }
  public resetSparePartitions() {
    this._sparePartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparePartitionsInput() {
    return this._sparePartitions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockDevices),
      fs_type: cdktf.stringToTerraform(this._fsType),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      machine: cdktf.stringToTerraform(this._machine),
      mount_options: cdktf.stringToTerraform(this._mountOptions),
      mount_point: cdktf.stringToTerraform(this._mountPoint),
      name: cdktf.stringToTerraform(this._name),
      partitions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitions),
      spare_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spareDevices),
      spare_partitions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sparePartitions),
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
      fs_type: {
        value: cdktf.stringToHclTerraform(this._fsType),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      mount_options: {
        value: cdktf.stringToHclTerraform(this._mountOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_point: {
        value: cdktf.stringToHclTerraform(this._mountPoint),
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
      spare_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spareDevices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      spare_partitions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sparePartitions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
