// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The interval in minutes between two snapshots in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#auto_snapshot_creation_cadence_in_min SnapshotPolicy#auto_snapshot_creation_cadence_in_min}
  */
  readonly autoSnapshotCreationCadenceInMin: number;
  /**
  * Name of the Snapshot Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#name SnapshotPolicy#name}
  */
  readonly name: string;
  /**
  * List which represents the number of snapshots per retention level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#num_of_retained_snapshots_per_level SnapshotPolicy#num_of_retained_snapshots_per_level}
  */
  readonly numOfRetainedSnapshotsPerLevel: number[];
  /**
  * Indicates that the snapshot policy should paused or not. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#paused SnapshotPolicy#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * When removing the source volume from the policy, user should choose how to handle the snapshots created by the policy. Valid values are 'Remove' and 'Detach'. Default value is `Detach`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#remove_mode SnapshotPolicy#remove_mode}
  */
  readonly removeMode?: string;
  /**
  * The auto snapshots will be created as secure. They cannot be edited or removed prior to their policy expiration time. Default value is `false`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#secure_snapshots SnapshotPolicy#secure_snapshots}
  */
  readonly secureSnapshots?: boolean | cdktf.IResolvable;
  /**
  * The Access mode of auto snapshot. Valid values are 'ReadOnly' and 'ReadWrite'. Default value is `ReadOnly` Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#snapshot_access_mode SnapshotPolicy#snapshot_access_mode}
  */
  readonly snapshotAccessMode?: string;
  /**
  * List which represents the volume ids which is to be assigned to the snapshot policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#volume_ids SnapshotPolicy#volume_ids}
  */
  readonly volumeIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy powerflex_snapshot_policy}
*/
export class SnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotPolicy to import
  * @param importFromId The id of the existing SnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot_policy powerflex_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSnapshotCreationCadenceInMin = config.autoSnapshotCreationCadenceInMin;
    this._name = config.name;
    this._numOfRetainedSnapshotsPerLevel = config.numOfRetainedSnapshotsPerLevel;
    this._paused = config.paused;
    this._removeMode = config.removeMode;
    this._secureSnapshots = config.secureSnapshots;
    this._snapshotAccessMode = config.snapshotAccessMode;
    this._volumeIds = config.volumeIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_snapshot_creation_cadence_in_min - computed: false, optional: false, required: true
  private _autoSnapshotCreationCadenceInMin?: number; 
  public get autoSnapshotCreationCadenceInMin() {
    return this.getNumberAttribute('auto_snapshot_creation_cadence_in_min');
  }
  public set autoSnapshotCreationCadenceInMin(value: number) {
    this._autoSnapshotCreationCadenceInMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotCreationCadenceInMinInput() {
    return this._autoSnapshotCreationCadenceInMin;
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

  // num_of_retained_snapshots_per_level - computed: false, optional: false, required: true
  private _numOfRetainedSnapshotsPerLevel?: number[]; 
  public get numOfRetainedSnapshotsPerLevel() {
    return this.getNumberListAttribute('num_of_retained_snapshots_per_level');
  }
  public set numOfRetainedSnapshotsPerLevel(value: number[]) {
    this._numOfRetainedSnapshotsPerLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfRetainedSnapshotsPerLevelInput() {
    return this._numOfRetainedSnapshotsPerLevel;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // remove_mode - computed: true, optional: true, required: false
  private _removeMode?: string; 
  public get removeMode() {
    return this.getStringAttribute('remove_mode');
  }
  public set removeMode(value: string) {
    this._removeMode = value;
  }
  public resetRemoveMode() {
    this._removeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeModeInput() {
    return this._removeMode;
  }

  // secure_snapshots - computed: true, optional: true, required: false
  private _secureSnapshots?: boolean | cdktf.IResolvable; 
  public get secureSnapshots() {
    return this.getBooleanAttribute('secure_snapshots');
  }
  public set secureSnapshots(value: boolean | cdktf.IResolvable) {
    this._secureSnapshots = value;
  }
  public resetSecureSnapshots() {
    this._secureSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSnapshotsInput() {
    return this._secureSnapshots;
  }

  // snapshot_access_mode - computed: true, optional: true, required: false
  private _snapshotAccessMode?: string; 
  public get snapshotAccessMode() {
    return this.getStringAttribute('snapshot_access_mode');
  }
  public set snapshotAccessMode(value: string) {
    this._snapshotAccessMode = value;
  }
  public resetSnapshotAccessMode() {
    this._snapshotAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotAccessModeInput() {
    return this._snapshotAccessMode;
  }

  // volume_ids - computed: false, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_ids'));
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_snapshot_creation_cadence_in_min: cdktf.numberToTerraform(this._autoSnapshotCreationCadenceInMin),
      name: cdktf.stringToTerraform(this._name),
      num_of_retained_snapshots_per_level: cdktf.listMapper(cdktf.numberToTerraform, false)(this._numOfRetainedSnapshotsPerLevel),
      paused: cdktf.booleanToTerraform(this._paused),
      remove_mode: cdktf.stringToTerraform(this._removeMode),
      secure_snapshots: cdktf.booleanToTerraform(this._secureSnapshots),
      snapshot_access_mode: cdktf.stringToTerraform(this._snapshotAccessMode),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_snapshot_creation_cadence_in_min: {
        value: cdktf.numberToHclTerraform(this._autoSnapshotCreationCadenceInMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_retained_snapshots_per_level: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._numOfRetainedSnapshotsPerLevel),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_mode: {
        value: cdktf.stringToHclTerraform(this._removeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_snapshots: {
        value: cdktf.booleanToHclTerraform(this._secureSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_access_mode: {
        value: cdktf.stringToHclTerraform(this._snapshotAccessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
