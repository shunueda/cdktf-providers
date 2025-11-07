// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumegroupSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the volume group snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#description VolumegroupSnapshot#description}
  */
  readonly description?: string;
  /**
  * Expiration Timestamp of the volume group snapshot.Only UTC (+Z) format is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#expiration_timestamp VolumegroupSnapshot#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Name of the volume group snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#name VolumegroupSnapshot#name}
  */
  readonly name: string;
  /**
  * ID of the volume group to take snapshot. Conflicts with `volume_group_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#volume_group_id VolumegroupSnapshot#volume_group_id}
  */
  readonly volumeGroupId?: string;
  /**
  * Name of the volume group to take snapshot. Conflicts with `volume_group_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#volume_group_name VolumegroupSnapshot#volume_group_name}
  */
  readonly volumeGroupName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot powerstore_volumegroup_snapshot}
*/
export class VolumegroupSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_volumegroup_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumegroupSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumegroupSnapshot to import
  * @param importFromId The id of the existing VolumegroupSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumegroupSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_volumegroup_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volumegroup_snapshot powerstore_volumegroup_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumegroupSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: VolumegroupSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_volumegroup_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
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
    this._expirationTimestamp = config.expirationTimestamp;
    this._name = config.name;
    this._volumeGroupId = config.volumeGroupId;
    this._volumeGroupName = config.volumeGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expiration_timestamp - computed: true, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // volume_group_id - computed: true, optional: true, required: false
  private _volumeGroupId?: string; 
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
  public set volumeGroupId(value: string) {
    this._volumeGroupId = value;
  }
  public resetVolumeGroupId() {
    this._volumeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupIdInput() {
    return this._volumeGroupId;
  }

  // volume_group_name - computed: false, optional: true, required: false
  private _volumeGroupName?: string; 
  public get volumeGroupName() {
    return this.getStringAttribute('volume_group_name');
  }
  public set volumeGroupName(value: string) {
    this._volumeGroupName = value;
  }
  public resetVolumeGroupName() {
    this._volumeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupNameInput() {
    return this._volumeGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      expiration_timestamp: cdktf.stringToTerraform(this._expirationTimestamp),
      name: cdktf.stringToTerraform(this._name),
      volume_group_id: cdktf.stringToTerraform(this._volumeGroupId),
      volume_group_name: cdktf.stringToTerraform(this._volumeGroupName),
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
      expiration_timestamp: {
        value: cdktf.stringToHclTerraform(this._expirationTimestamp),
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
      volume_group_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_group_name: {
        value: cdktf.stringToHclTerraform(this._volumeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
