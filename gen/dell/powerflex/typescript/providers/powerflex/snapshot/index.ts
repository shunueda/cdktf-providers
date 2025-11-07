// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Access mode of snapshot. Valid values are `ReadOnly` and `ReadWrite`. Default value is `ReadOnly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#access_mode Snapshot#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Unit of capacity of the volume. Must be one of `GB` and `TB`. Default value is `GB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#capacity_unit Snapshot#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * The minimum amount of time that the snapshot should be retained on the array starting at the time of apply. The unit is defined by `retention_unit`. Cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#desired_retention Snapshot#desired_retention}
  */
  readonly desiredRetention?: number;
  /**
  * lock auto snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#lock_auto_snapshot Snapshot#lock_auto_snapshot}
  */
  readonly lockAutoSnapshot?: boolean | cdktf.IResolvable;
  /**
  * The name of the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#name Snapshot#name}
  */
  readonly name: string;
  /**
  * Remove mode of the snapshot. Valid values are `ONLY_ME` and `INCLUDING_DESCENDANTS`. Default value is `ONLY_ME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#remove_mode Snapshot#remove_mode}
  */
  readonly removeMode?: string;
  /**
  * Retention unit of the snapshot. Valid values are `hours` and `days`. Default value is `hours`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#retention_unit Snapshot#retention_unit}
  */
  readonly retentionUnit?: string;
  /**
  * Size of the snapshot. The unit of size is defined by `capacity_unit`. The storage capacity of a snapshot must be a multiple of 8GB and cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#size Snapshot#size}
  */
  readonly size?: number;
  /**
  * The ID of the volume from which snapshot is to be created. Conflicts with `volume_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#volume_id Snapshot#volume_id}
  */
  readonly volumeId?: string;
  /**
  * The volume name for which snapshot is created. Conflicts with `volume_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#volume_name Snapshot#volume_name}
  */
  readonly volumeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot powerflex_snapshot}
*/
export class Snapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshot to import
  * @param importFromId The id of the existing Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/snapshot powerflex_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._capacityUnit = config.capacityUnit;
    this._desiredRetention = config.desiredRetention;
    this._lockAutoSnapshot = config.lockAutoSnapshot;
    this._name = config.name;
    this._removeMode = config.removeMode;
    this._retentionUnit = config.retentionUnit;
    this._size = config.size;
    this._volumeId = config.volumeId;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // desired_retention - computed: false, optional: true, required: false
  private _desiredRetention?: number; 
  public get desiredRetention() {
    return this.getNumberAttribute('desired_retention');
  }
  public set desiredRetention(value: number) {
    this._desiredRetention = value;
  }
  public resetDesiredRetention() {
    this._desiredRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredRetentionInput() {
    return this._desiredRetention;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_auto_snapshot - computed: true, optional: true, required: false
  private _lockAutoSnapshot?: boolean | cdktf.IResolvable; 
  public get lockAutoSnapshot() {
    return this.getBooleanAttribute('lock_auto_snapshot');
  }
  public set lockAutoSnapshot(value: boolean | cdktf.IResolvable) {
    this._lockAutoSnapshot = value;
  }
  public resetLockAutoSnapshot() {
    this._lockAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockAutoSnapshotInput() {
    return this._lockAutoSnapshot;
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

  // retention_in_min - computed: true, optional: false, required: false
  public get retentionInMin() {
    return this.getStringAttribute('retention_in_min');
  }

  // retention_unit - computed: true, optional: true, required: false
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  public resetRetentionUnit() {
    this._retentionUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_in_kb - computed: true, optional: false, required: false
  public get sizeInKb() {
    return this.getNumberAttribute('size_in_kb');
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
      access_mode: cdktf.stringToTerraform(this._accessMode),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      desired_retention: cdktf.numberToTerraform(this._desiredRetention),
      lock_auto_snapshot: cdktf.booleanToTerraform(this._lockAutoSnapshot),
      name: cdktf.stringToTerraform(this._name),
      remove_mode: cdktf.stringToTerraform(this._removeMode),
      retention_unit: cdktf.stringToTerraform(this._retentionUnit),
      size: cdktf.numberToTerraform(this._size),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      volume_name: cdktf.stringToTerraform(this._volumeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_retention: {
        value: cdktf.numberToHclTerraform(this._desiredRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_auto_snapshot: {
        value: cdktf.booleanToHclTerraform(this._lockAutoSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_mode: {
        value: cdktf.stringToHclTerraform(this._removeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_unit: {
        value: cdktf.stringToHclTerraform(this._retentionUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
