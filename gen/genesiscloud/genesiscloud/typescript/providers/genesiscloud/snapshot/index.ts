// https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name for the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#name Snapshot#name}
  */
  readonly name: string;
  /**
  * The region identifier. Should only be explicity specified when using the 'source_snapshot_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#region Snapshot#region}
  */
  readonly region?: string;
  /**
  * Target region for snapshot replication. When specified, also creates a copy of the snapshot in the given region. If omitted, the snapshot exists only in the current region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#replicated_region Snapshot#replicated_region}
  */
  readonly replicatedRegion?: string;
  /**
  * Flag to retain the snapshot when the resource is deleted.
  *   - Sets the default value "false" if the attribute is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#retain_on_delete Snapshot#retain_on_delete}
  */
  readonly retainOnDelete?: boolean | cdktf.IResolvable;
  /**
  * The id of the source instance from which this snapshot was derived.
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#source_instance_id Snapshot#source_instance_id}
  */
  readonly sourceInstanceId?: string;
  /**
  * The id of the source snapshot from which this snapsot was derived.
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#source_snapshot_id Snapshot#source_snapshot_id}
  */
  readonly sourceSnapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#timeouts Snapshot#timeouts}
  */
  readonly timeouts?: SnapshotTimeouts;
}
export interface SnapshotTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#create Snapshot#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#delete Snapshot#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#read Snapshot#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#update Snapshot#update}
  */
  readonly update?: string;
}

export function snapshotTimeoutsToTerraform(struct?: SnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function snapshotTimeoutsToHclTerraform(struct?: SnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot genesiscloud_snapshot}
*/
export class Snapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesiscloud_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapshot to import
  * @param importFromId The id of the existing Snapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesiscloud_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/snapshot genesiscloud_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'genesiscloud_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'genesiscloud',
        providerVersion: '1.1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._region = config.region;
    this._replicatedRegion = config.replicatedRegion;
    this._retainOnDelete = config.retainOnDelete;
    this._sourceInstanceId = config.sourceInstanceId;
    this._sourceSnapshotId = config.sourceSnapshotId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replicated_region - computed: false, optional: true, required: false
  private _replicatedRegion?: string; 
  public get replicatedRegion() {
    return this.getStringAttribute('replicated_region');
  }
  public set replicatedRegion(value: string) {
    this._replicatedRegion = value;
  }
  public resetReplicatedRegion() {
    this._replicatedRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedRegionInput() {
    return this._replicatedRegion;
  }

  // retain_on_delete - computed: true, optional: true, required: false
  private _retainOnDelete?: boolean | cdktf.IResolvable; 
  public get retainOnDelete() {
    return this.getBooleanAttribute('retain_on_delete');
  }
  public set retainOnDelete(value: boolean | cdktf.IResolvable) {
    this._retainOnDelete = value;
  }
  public resetRetainOnDelete() {
    this._retainOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOnDeleteInput() {
    return this._retainOnDelete;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_instance_id - computed: false, optional: true, required: false
  private _sourceInstanceId?: string; 
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }
  public set sourceInstanceId(value: string) {
    this._sourceInstanceId = value;
  }
  public resetSourceInstanceId() {
    this._sourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdInput() {
    return this._sourceInstanceId;
  }

  // source_snapshot_id - computed: false, optional: true, required: false
  private _sourceSnapshotId?: string; 
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }
  public set sourceSnapshotId(value: string) {
    this._sourceSnapshotId = value;
  }
  public resetSourceSnapshotId() {
    this._sourceSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotIdInput() {
    return this._sourceSnapshotId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      replicated_region: cdktf.stringToTerraform(this._replicatedRegion),
      retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
      source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
      source_snapshot_id: cdktf.stringToTerraform(this._sourceSnapshotId),
      timeouts: snapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicated_region: {
        value: cdktf.stringToHclTerraform(this._replicatedRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_on_delete: {
        value: cdktf.booleanToHclTerraform(this._retainOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._sourceSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: snapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapshotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
