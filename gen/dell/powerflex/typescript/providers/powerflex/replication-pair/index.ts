// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination Volume ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#destination_volume_id ReplicationPair#destination_volume_id}
  */
  readonly destinationVolumeId: string;
  /**
  * Replication Pair Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#name ReplicationPair#name}
  */
  readonly name: string;
  /**
  * Pause Copy of the replication pair instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#pause_initial_copy ReplicationPair#pause_initial_copy}
  */
  readonly pauseInitialCopy?: boolean | cdktf.IResolvable;
  /**
  * Replication Consistency Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#replication_consistency_group_id ReplicationPair#replication_consistency_group_id}
  */
  readonly replicationConsistencyGroupId: string;
  /**
  * Source Volume ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#source_volume_id ReplicationPair#source_volume_id}
  */
  readonly sourceVolumeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair powerflex_replication_pair}
*/
export class ReplicationPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_replication_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReplicationPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReplicationPair to import
  * @param importFromId The id of the existing ReplicationPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReplicationPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_replication_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/replication_pair powerflex_replication_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationPairConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationPairConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_replication_pair',
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
    this._destinationVolumeId = config.destinationVolumeId;
    this._name = config.name;
    this._pauseInitialCopy = config.pauseInitialCopy;
    this._replicationConsistencyGroupId = config.replicationConsistencyGroupId;
    this._sourceVolumeId = config.sourceVolumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_type - computed: true, optional: false, required: false
  public get copyType() {
    return this.getStringAttribute('copy_type');
  }

  // destination_volume_id - computed: false, optional: false, required: true
  private _destinationVolumeId?: string; 
  public get destinationVolumeId() {
    return this.getStringAttribute('destination_volume_id');
  }
  public set destinationVolumeId(value: string) {
    this._destinationVolumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVolumeIdInput() {
    return this._destinationVolumeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_copy_priority - computed: true, optional: false, required: false
  public get initialCopyPriority() {
    return this.getNumberAttribute('initial_copy_priority');
  }

  // initial_copy_state - computed: true, optional: false, required: false
  public get initialCopyState() {
    return this.getStringAttribute('initial_copy_state');
  }

  // lifetime_state - computed: true, optional: false, required: false
  public get lifetimeState() {
    return this.getStringAttribute('lifetime_state');
  }

  // local_volume_id - computed: true, optional: false, required: false
  public get localVolumeId() {
    return this.getStringAttribute('local_volume_id');
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

  // pause_initial_copy - computed: true, optional: true, required: false
  private _pauseInitialCopy?: boolean | cdktf.IResolvable; 
  public get pauseInitialCopy() {
    return this.getBooleanAttribute('pause_initial_copy');
  }
  public set pauseInitialCopy(value: boolean | cdktf.IResolvable) {
    this._pauseInitialCopy = value;
  }
  public resetPauseInitialCopy() {
    this._pauseInitialCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInitialCopyInput() {
    return this._pauseInitialCopy;
  }

  // peer_system_name - computed: true, optional: false, required: false
  public get peerSystemName() {
    return this.getStringAttribute('peer_system_name');
  }

  // remote_capacity_in_mb - computed: true, optional: false, required: false
  public get remoteCapacityInMb() {
    return this.getNumberAttribute('remote_capacity_in_mb');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_volume_id - computed: true, optional: false, required: false
  public get remoteVolumeId() {
    return this.getStringAttribute('remote_volume_id');
  }

  // remote_volume_name - computed: true, optional: false, required: false
  public get remoteVolumeName() {
    return this.getStringAttribute('remote_volume_name');
  }

  // replication_consistency_group_id - computed: false, optional: false, required: true
  private _replicationConsistencyGroupId?: string; 
  public get replicationConsistencyGroupId() {
    return this.getStringAttribute('replication_consistency_group_id');
  }
  public set replicationConsistencyGroupId(value: string) {
    this._replicationConsistencyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConsistencyGroupIdInput() {
    return this._replicationConsistencyGroupId;
  }

  // source_volume_id - computed: false, optional: false, required: true
  private _sourceVolumeId?: string; 
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }
  public set sourceVolumeId(value: string) {
    this._sourceVolumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeIdInput() {
    return this._sourceVolumeId;
  }

  // user_requested_pause_transmit_init_copy - computed: true, optional: false, required: false
  public get userRequestedPauseTransmitInitCopy() {
    return this.getBooleanAttribute('user_requested_pause_transmit_init_copy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_volume_id: cdktf.stringToTerraform(this._destinationVolumeId),
      name: cdktf.stringToTerraform(this._name),
      pause_initial_copy: cdktf.booleanToTerraform(this._pauseInitialCopy),
      replication_consistency_group_id: cdktf.stringToTerraform(this._replicationConsistencyGroupId),
      source_volume_id: cdktf.stringToTerraform(this._sourceVolumeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_volume_id: {
        value: cdktf.stringToHclTerraform(this._destinationVolumeId),
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
      pause_initial_copy: {
        value: cdktf.booleanToHclTerraform(this._pauseInitialCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_consistency_group_id: {
        value: cdktf.stringToHclTerraform(this._replicationConsistencyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_volume_id: {
        value: cdktf.stringToHclTerraform(this._sourceVolumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
