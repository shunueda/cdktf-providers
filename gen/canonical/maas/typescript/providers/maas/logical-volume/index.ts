// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The file system type (e.g. `ext4`). If this is not set, the volume is unformatted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#fs_type LogicalVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#id LogicalVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The machine identifier (system ID, hostname, or FQDN) that owns the volume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#machine LogicalVolume#machine}
  */
  readonly machine: string;
  /**
  * Comma seperated options used for the logical volume mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#mount_options LogicalVolume#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * The mount point used. If this is not set, the logical volume is not mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#mount_point LogicalVolume#mount_point}
  */
  readonly mountPoint?: string;
  /**
  * The name for this logical volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#name LogicalVolume#name}
  */
  readonly name: string;
  /**
  * The volume size (given in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#size_gigabytes LogicalVolume#size_gigabytes}
  */
  readonly sizeGigabytes: number;
  /**
  * The volume group identifier (ID or name) to apply this logical volume on top of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#volume_group LogicalVolume#volume_group}
  */
  readonly volumeGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume maas_logical_volume}
*/
export class LogicalVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_logical_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalVolume to import
  * @param importFromId The id of the existing LogicalVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_logical_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/logical_volume maas_logical_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_logical_volume',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fsType = config.fsType;
    this._id = config.id;
    this._machine = config.machine;
    this._mountOptions = config.mountOptions;
    this._mountPoint = config.mountPoint;
    this._name = config.name;
    this._sizeGigabytes = config.sizeGigabytes;
    this._volumeGroup = config.volumeGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // size_gigabytes - computed: false, optional: false, required: true
  private _sizeGigabytes?: number; 
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
  public set sizeGigabytes(value: number) {
    this._sizeGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGigabytesInput() {
    return this._sizeGigabytes;
  }

  // volume_group - computed: false, optional: false, required: true
  private _volumeGroup?: string; 
  public get volumeGroup() {
    return this.getStringAttribute('volume_group');
  }
  public set volumeGroup(value: string) {
    this._volumeGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupInput() {
    return this._volumeGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fs_type: cdktf.stringToTerraform(this._fsType),
      id: cdktf.stringToTerraform(this._id),
      machine: cdktf.stringToTerraform(this._machine),
      mount_options: cdktf.stringToTerraform(this._mountOptions),
      mount_point: cdktf.stringToTerraform(this._mountPoint),
      name: cdktf.stringToTerraform(this._name),
      size_gigabytes: cdktf.numberToTerraform(this._sizeGigabytes),
      volume_group: cdktf.stringToTerraform(this._volumeGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      size_gigabytes: {
        value: cdktf.numberToHclTerraform(this._sizeGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_group: {
        value: cdktf.stringToHclTerraform(this._volumeGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
