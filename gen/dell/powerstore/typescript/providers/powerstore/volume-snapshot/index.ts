// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Creator Type of the volume snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#creator_type VolumeSnapshot#creator_type}
  */
  readonly creatorType?: string;
  /**
  * Description of the volume snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#description VolumeSnapshot#description}
  */
  readonly description?: string;
  /**
  * Expiration Timestamp of the volume snapshot.Only UTC (+Z) format is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#expiration_timestamp VolumeSnapshot#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Name of the volume snapshot.The default name of the volume snapshot is the date and time when the snapshot is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#name VolumeSnapshot#name}
  */
  readonly name?: string;
  /**
  * Performance Policy id of the volume snapshot. Valid values are default_medium, default_low, default_high.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#performance_policy_id VolumeSnapshot#performance_policy_id}
  */
  readonly performancePolicyId?: string;
  /**
  * ID of the volume to take snapshot. Conflicts with `volume_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#volume_id VolumeSnapshot#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Name of the volume to take snapshot. Conflicts with `volume_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#volume_name VolumeSnapshot#volume_name}
  */
  readonly volumeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot powerstore_volume_snapshot}
*/
export class VolumeSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_volume_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeSnapshot to import
  * @param importFromId The id of the existing VolumeSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_volume_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume_snapshot powerstore_volume_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeSnapshotConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VolumeSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerstore_volume_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creatorType = config.creatorType;
    this._description = config.description;
    this._expirationTimestamp = config.expirationTimestamp;
    this._name = config.name;
    this._performancePolicyId = config.performancePolicyId;
    this._volumeId = config.volumeId;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator_type - computed: true, optional: true, required: false
  private _creatorType?: string; 
  public get creatorType() {
    return this.getStringAttribute('creator_type');
  }
  public set creatorType(value: string) {
    this._creatorType = value;
  }
  public resetCreatorType() {
    this._creatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorTypeInput() {
    return this._creatorType;
  }

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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // performance_policy_id - computed: true, optional: true, required: false
  private _performancePolicyId?: string; 
  public get performancePolicyId() {
    return this.getStringAttribute('performance_policy_id');
  }
  public set performancePolicyId(value: string) {
    this._performancePolicyId = value;
  }
  public resetPerformancePolicyId() {
    this._performancePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performancePolicyIdInput() {
    return this._performancePolicyId;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creator_type: cdktf.stringToTerraform(this._creatorType),
      description: cdktf.stringToTerraform(this._description),
      expiration_timestamp: cdktf.stringToTerraform(this._expirationTimestamp),
      name: cdktf.stringToTerraform(this._name),
      performance_policy_id: cdktf.stringToTerraform(this._performancePolicyId),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      volume_name: cdktf.stringToTerraform(this._volumeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creator_type: {
        value: cdktf.stringToHclTerraform(this._creatorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      performance_policy_id: {
        value: cdktf.stringToHclTerraform(this._performancePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
